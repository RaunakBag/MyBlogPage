import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import React from "react";



export default function FooterCom() {
    return (
        <Footer container className="border border-t-8 border-teal-500">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-col-1">
                    <div className="mt-5">
                        <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Raunak's</span>
                            Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="About" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://qrcode-generator-raunak.netlify.app/" target="_blank" rel='noopener noreferrer'>
                                    QR Code Generator
                                </Footer.Link>
                                <Footer.Link href="/about" target="_blank" rel='noopener noreferrer'>
                                    Raunak's Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow Us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://github.com/RaunakBag" target="_blank" rel='noopener noreferrer'>
                                    GitHub
                                </Footer.Link>
                                <Footer.Link href="https://www.linkedin.com/in/raunak-bag-3b0a69153/" target="_blank" rel='noopener noreferrer'>
                                    Linkedin
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms &amp; Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href='#' by="Raunak's Blog" year={new Date().getFullYear()} />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="https://www.linkedin.com/in/raunak-bag-3b0a69153/" icon={BsLinkedin} />
                        <Footer.Icon href="https://github.com/RaunakBag" icon={BsGithub} />
                        <Footer.Icon href="https://raunakbag.netlify.app/" icon={CgWebsite} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}
