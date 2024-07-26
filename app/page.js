"use client";

import { FormProvider, useForm, useFormContext } from "react-hook-form";

//TODO obtain the data for all the fields.
//TODO print the values for all the fields in react hook form.

function FieldGroup({ fieldName, label, type, validations = {} }) {
  //State
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor={fieldName} className="block text-slate-500 text-xs">
        {label}
      </label>
      <input
        {...register(fieldName, validations)} //This tegister: onChange, onClur, name, ref
        type="text"
        id={fieldName}
        className="border border-slate-300 rounded-lg"
      />
    </div>
  );
}
function Grid({ children }) {
  return <div className="grid grid-cols-1 gap-5 py-4">{children}</div>;
}
function Page() {
  //State
  const formMethods = useForm();
  const { handleSubmit, reset } = formMethods; //TODO we might need errors here

  //Handlers

  // function encode(data) {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // }

  function onSubmit(data) {
    console.log("submiting");
    console.log(data);
    // fetch("../../public/__forms.html", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({
    //     "form-name": "contact-form",
    //     ...data,
    //   }),
    // })
    //   .then((response) => {
    //     reset();
    //     // navigate(form.getAttribute("action"));
    //     console.log("Navigating to another page...");
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
  //TODO ideas de API. (TODAS deberían resultar)
  //Google Spread sheet.
  //Netlify registration OR Vercel registration.
  //Email sender.
  //Supabase
  return (
    <div className="w-screen h-screen bg-emerald-50 grid place-content-center">
      <div className="bg-white w-11/12  h-fit p-6">
        <FormProvider {...formMethods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            name="contact-form"
            method="POST"
            // action="/email-success"
            // id="contact-form"
          >
            {/* Note: value of the next input must match the form name */}
            <input type="hidden" name="form-name" value="contact-form" />
            {/* TODO we may want to build static files. build: next build && next export */}
            <h1 className="text-emerald-950 text-3xl font-bold">Contact Us</h1>
            <Grid>
              <FieldGroup fieldName="firstName" label="First Name" />
              <FieldGroup fieldName="lastName" label="Last Name" />
              <FieldGroup fieldName="email" label="Email Address" />
            </Grid>
            <button
              type="submit"
              onClick={onSubmit}
              className="w-full bg-emerald-800 text-white py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Page;
