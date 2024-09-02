import Image from "next/image";
import React from "react";

export const Navbar = () => {
    return (
        <div className="navbar p-3 w-screen">
            <Image
                alt="deepcuts logo"
                className="animate-twSpin animate-infinite animate-duration-[1760ms]"
                height="50"
                src="/icon.png"
                title="Spinning deepcuts logo"
                width="50"
            />
            <div className="flex-1 ml-2">
                <a className="btn btn-ghost text-xl" href="/">
                    {"deepcuts."}
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
