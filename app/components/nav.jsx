'use client';
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

const Nav = () => {
    const Router = useTransitionRouter();
    function slideInOut() {
        document.documentElement.animate(
            [
                {
                    opacity: 1,
                    transform: "translateY(0)"
                },
                {
                    opacity: .2,
                    transform: "translateY(-35%)"
                }
            ],{
                duration: 1000,
                easing:'cubic-bezier(0.87, 0, 0.13, 1)',
                fill: 'forwards',
pseudoElement:"::view-transition-old(root)"
            }
        )

        document.documentElement.animate(
        [
            {
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            },
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

            }
        ],{
            duration: 1000,
            easing:'cubic-bezier(0.87, 0, 0.13, 1)',
            fill: 'forwards',
pseudoElement:"::view-transition-new(root)"
        }
        )
    }
  return (
    <nav className="nav">
        <div className="logo">
            <div className="link">
                <Link
                onClick={(e)=>{
                    e.preventDefault();
                    Router.push("/",{
                    onTransitionReady: slideInOut,});
                }}
                href="/" className="uppercase ">Index</Link>
            </div>
        </div>
            <div className="links">
                <div className="link">
                <Link href="/projects" className="uppercase "
                onClick={(e)=>{
                    e.preventDefault();
                    Router.push("projects",{
                    onTransitionReady: slideInOut,});
                }}
                >Projects</Link></div>

            <div className="link">
                <Link href="/info" className="uppercase "
                  onClick={(e)=>{
                    e.preventDefault();
                    Router.push("info",{
                    onTransitionReady: slideInOut,});
                }}
                >Info</Link>
        </div>
            </div>
    </nav>
  );
};
export default Nav;