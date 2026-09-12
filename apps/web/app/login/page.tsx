"use client";

import LoginForm from "@/components/auth/login-form";
import { type LoginFormData } from "@/lib/auth/schema";

export default function LoginPage() {
  const handleOnSubmit = async (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-foreground">
            ورود به حساب کاربری
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            حساب کاربری ندارید؟{" "}
            <a
              href="/signup"
              className="font-medium text-primary hover:text-primary/90"
            >
              ثبت‌نام کنید
            </a>
          </p>
        </div>
        <LoginForm onSubmit={handleOnSubmit} />
      </div>
    </div>
  );
}
