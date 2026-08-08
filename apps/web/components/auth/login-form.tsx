"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginFormData, loginSchema } from "@/lib/auth/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LoginFormsProps {
  onSubmit: (data: LoginFormData) => Promise<void>;
}

export default function LoginForm({ onSubmit }: LoginFormsProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);

    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>ورود به حساب کاربری</CardTitle>
        <CardDescription>
          اطلاعات خود را برای ورود به حساب کاربری وارد کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <Field>
            <FieldLabel>ایمیل</FieldLabel>
            <FieldContent>
              <Input
                type="email"
                key="email-input"
                placeholder="ایمیل خود را وارد کنید"
                disabled={isSubmitting}
                {...form.register("email")}
              />
            </FieldContent>
            <FieldError>{form.formState.errors.email?.message}</FieldError>
          </Field>

          <Field>
            <FieldLabel>رمز عبور</FieldLabel>
            <FieldContent>
              <Input
                type="password"
                key="password-input"
                placeholder="رمز عبور خود را وارد کنید"
                disabled={isSubmitting}
                {...form.register("password")}
              />
            </FieldContent>
            <FieldError>{form.formState.errors.password?.message}</FieldError>
          </Field>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "در حال ورود..." : "ورود"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
