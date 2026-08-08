"use client";

import SignupForm from "@/components/auth/signup-form";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-foreground">
            ایجاد حساب کاربری
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            قبلاً حساب کاربری دارید؟{" "}
            <a
              href="/login"
              className="font-medium text-primary hover:text-primary/90"
            >
              وارد شوید
            </a>
          </p>
        </div>
        <SignupForm onSubmit={async (data) => console.log(data)} />
      </div>
    </div>
  );
}
