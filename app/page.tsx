"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchUser } from "@/redux/slice/userSlice";
import { AppDispatch, RootState } from "@/redux/store";

export default function Home() {
  const { userList, loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const ref = useRef(false)

  useEffect(() => {
    if (ref.current === false){
      dispatch(fetchUser());
    }
    
    return ( ) => {
         ref.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(userList)

  return (
    <div>
      {loading && <div>Loading</div>}
      <div className="text-xl font-semibold">This is a home page</div>
      {userList?.map((user: any, idx: number) => {
        return <div key={idx}>{user.id}. {user.name}</div>;
      })}
    </div>
  );
}
