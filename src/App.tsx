import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-gray-900 text-white"> {/* Overall background color and text color for dark theme */}
            <header className="flex justify-between items-center p-6 bg-gray-800 shadow-lg"> {/* Header with shadow for depth */}
                <h1 className="text-3xl font-bold">Rocket Launch</h1> {/* Main title */}
                <nav className="space-x-4"> {/* Navigation links */}
                    <a href="#features" className="hover:text-gray-400 transition duration-300">Features</a>
                    <a href="#about" className="hover:text-gray-400 transition duration-300">About</a>
                    <a href="#contact" className="hover:text-gray-400 transition duration-300">Contact</a>
                </nav>
            </header>
            <main className="container mx-auto p-6"> {/* Main content area with responsive container */}
                <section className="text-center mb-12"> {/* Hero section */}
                    <h2 className="text-5xl font-extrabold mb-4">Explore the Universe</h2> {/* Hero heading */}
                    <p className="text-lg mb-6">Join us in our mission to explore the cosmos with cutting-edge rocket technology.</p> {/* Hero description */}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">Get Started</button> {/* Call to action button */}
                </section>
                <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Features section using grid layout */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md"> {/* Feature card */}
                        <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
                        <p>We utilize the latest aerospace technology to ensure safety and efficiency.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md"> {/* Feature card */}
                        <h3 className="text-xl font-bold mb-2">Sustainable Practices</h3>
                        <p>Our rockets are designed with sustainability in mind to minimize environmental impact.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md"> {/* Feature card */}
                        <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                        <p>We provide launch services for clients across the globe.</p>
                    </div>
                </section>
                <section id="about" className="text-center my-12"> {/* About section */}
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <p>We are pioneers in the aerospace industry, dedicated to making space travel accessible to all.</p>
                </section>
            </main>
            <footer id="contact" className="bg-gray-800 p-6 text-center"> {/* Footer section */}
                <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                <p>For inquiries, reach us at <a href="mailto:info@rocketlaunch.com" className="text-blue-400">info@rocketlaunch.com</a></p> {/* Email link */}
                <p>&copy; 2023 Rocket Launch. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;