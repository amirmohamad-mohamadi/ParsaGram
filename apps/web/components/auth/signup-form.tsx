"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { SignupFormData, signupSchema } from "@/lib/auth/schema";
import { Input } from "../ui/input";

interface SignupFormProps {
  onSubmit: (data: SignupFormData) => Promise<void>;
}

export default function SignupForm({ onSubmit }: SignupFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (data: SignupFormData) => {
    setIsSubmitting(true);

    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>ایجاد حساب کاربری</CardTitle>
        <CardDescription>
          اطلاعات خود را برای ایجاد حساب کاربری جدید وارد کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <Field>
            <FieldLabel>نام کامل</FieldLabel>
            <FieldContent>
              <Input
                type="text"
                key="text-input"
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                disabled={isSubmitting}
                {...form.register("name")}
              />
            </FieldContent>
            <FieldError>{form.formState.errors.name?.message}</FieldError>
          </Field>
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

          <Field>
            <FieldLabel>تایید رمز عبور</FieldLabel>
            <FieldContent>
              <Input
                type="password"
                key="confirm-password-input"
                placeholder="رمز عبور را مجدداً وارد کنید"
                disabled={isSubmitting}
                {...form.register("confirmPassword")}
              />
            </FieldContent>
            <FieldError>
              {form.formState.errors.confirmPassword?.message}
            </FieldError>
          </Field>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "در حال ثبت‌نام..." : "ثبت‌نام"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
