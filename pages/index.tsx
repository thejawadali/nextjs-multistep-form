import type { NextPage } from "next";
import Head from "next/head";
import Stepper from "../components/Stepper";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";
import UserNameForm from "../components/NameForm";
import ContactForm from "../components/ContactForm";
import { useAppStore } from "../hooks/app.provider";

const Home: NextPage = () => {
  const { stepNo, setStepNo } = useAppStore();
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className="w-full min-h-screen flex justify-center items-center py-10 bg-gradient-to-r from-green-300 to-blue-500 ">
        <div className="w-1/2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="bg-white rounded  h-auto text-center p-4"
          >
            <span className="text-gray-700 font-semibold">
              Create Your Profile
            </span>
            {/* <Stepper /> */}
            <div className="text-left my-5">
              <h2 className="text-gray-700">{
                stepNo == 1 ? "Name" : stepNo == 2 ? "Contact Info" : "Login Info"
              }</h2>
              <p className="text-gray-500 text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Id,
                impedit
              </p>
              <hr className="h-px my-3 bg-gray-200 border-0" />
              {
                stepNo == 1 ? <UserNameForm /> : stepNo == 2 ? <ContactForm /> : "Login Info"
              }
            </div>
            <div>
              {stepNo > 1 && (
                <button onClick={()=> setStepNo(stepNo - 1)} className="text-green-500 text-sm flex items-center duration-300 hover:text-green-600 float-left">
                  <ChevronLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>
              )}
              {stepNo < 3 && (
                <button
                  onClick={()=> setStepNo(stepNo + 1)}
                  type="submit"
                  className="text-green-500 text-sm flex items-center duration-300 hover:text-green-600 float-right"
                >
                  <span>Next</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
              {stepNo === 3 && (
                <button
                  type="submit"
                  className="text-green-500 text-sm flex items-center duration-300 hover:text-green-600 float-right"
                >
                  <span>Submit</span>
                </button>
              )}
              <div className="clear-both" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
