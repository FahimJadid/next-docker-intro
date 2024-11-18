"use client";
import axios from "axios";
import Link from "next/link";

export const Login = () => {
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">Login</div>
            </div>
            <div className="pt-2">
              <LabelledInput
                label="Username"
                placeholder="harkirat@gmail.com"
              />
              <LabelledInput
                label="Password"
                type={"password"}
                placeholder="123456"
              />
              <button
                onClick={async () => {
                  await axios.post("http://localhost:3000/api/user", {});
                }}
                type="button"
                className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Login
              </button>

              <p className="text-center text-sm text-gray-600 mt-2">
                Do not have an account?
                <Link href="/signup" className="text-blue-600 hover:underline">
                  {" "}
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
