import {
  SignIn,
  SignInButton,
  SignUp,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <div className="h-full w-full">Summarist</div>
      <SignIn />
      <SignUp />
    </>
  );
}
