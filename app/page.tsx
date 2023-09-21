/* eslint-disable @next/next/no-img-element */
"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchUser } from "@/redux/slice/userSlice";
import { AppDispatch, RootState } from "@/redux/store";

export default function Home() {
  const { userList, loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current === false) {
      dispatch(fetchUser());
    }

    return () => {
      ref.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(userList);

  return (
    <div>
      
      <div className="text-2xl font-semibold text-center mb-5">User List</div>
      {loading && <div>Loading.......</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {userList?.map((user: any, idx: number) => {
          return (
            <div
              className="py-8 px-8 w-full mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
              key={idx}
            >
              <div className="h-24 w-24 rounded-full bg-gray-100 overflow-hidden"><img
                className="block mx-auto h-full w-full  sm:mx-0 sm:shrink-0"
                src="https://random.imagecdn.app/500/500"
                alt="Woman's Face"
              /></div>
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-md text-black font-semibold">
                    {user.name}
                  </p>
                  <p className="text-slate-500 font-medium text-sm">
                    @{user.username}
                  </p>
                  {/* <p className="text-slate-500 font-medium text-sm">
                    {user.email}
                  </p> */}
                </div>
                <a href={`https://${user.website}`} target="_blank">
                  <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 mt-2">
                    Visit Website
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
