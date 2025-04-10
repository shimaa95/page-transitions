'use client'
import React from 'react'
import img3 from "../../public/11.jpeg";
import img4 from "../../public/10.jpeg"; // New image 1
import img5 from "../../public/13.jpeg"; // New image 2
import Image from "next/image";

function Page() {
    return (
        <div style={{ width: "100vw", minHeight: "100vh", overflowX: "hidden" }}>
            <div style={{ position: "relative", width: "100%", height: "100vh", margin: "0 auto", overflowX: "hidden" }}>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        animation: "fadeIn 3s ease-in-out 0s forwards",
                        opacity: 0,
                    }}
                >
                    <Image src={img3} alt="final-img" fill style={{ objectFit: "contain", objectPosition: "center" }} />
                </div>
                <div
                    style={{
                        position: "absolute",
                        bottom: "10%",
                        left: "5%",
                        width: "20%",
                        height: "20%",
                        animation: "fadeIn 3s ease-in-out 0.5s forwards",
                        opacity: 0,
                        overflow: "hidden",
                    }}
                >
                    <Image src={img3} alt="additional-img-left" fill style={{ objectFit: "cover", objectPosition: "center" }} />
                </div>
                <div
                    style={{
                        position: "absolute",
                        bottom: "10%",
                        right: "5%",
                        width: "20%",
                        height: "20%",
                        animation: "fadeIn 3s ease-in-out 1s forwards",
                        opacity: 0,
                        overflow: "hidden",
                    }}
                >
                    <Image src={img3} alt="additional-img-right" fill style={{ objectFit: "cover", objectPosition: "center" }} />
                </div>
              </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "10px",
                        width: "100%",
                        height: "100vh",
                        marginTop: "10%",
                        animation: "fadeIn 2s ease-in-out 2s forwards",
                        opacity: 0,
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            src={img5}
                            alt="grid-img-left"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            src={img5}
                            alt="grid-img-right"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100vh",
                        overflow: "hidden",
                        marginTop: "10%",
                        animation: "slideIn 2s cubic-bezier(0.25, 1, 0.5, 1) 1.5s forwards",
                        opacity: 0,
                    }}
                >
                    <Image
                        src={img4}
                        alt="final-img"
                        fill
                        style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                </div>
                <style jsx>{`
                    @keyframes slideIn {
                        0% {
                            opacity: 0;
                            transform: translateX(-100%);
                        }
                        100% {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                `}</style>
                <style jsx>{`
                    @keyframes fadeIn {
                        0% {
                            opacity: 0;
                            transform: scale(1.1);
                        }
                        100% {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                `}</style>
            </div>
    
    )
}

export default Page
