import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from "./components/ProjectCard";

const projects = [

    {
        title: 'Database, API, and Avalonia using .NET Core',
        description: 'Progress Quest-inspired C# game using .NET Framework and Avalonia.',
        repo: 'https://github.com/gregreborn/portfolio/tree/e5e0926c4eb82a894b95e914940c067029daf2d4/Progress_Brawlhalla',
        image: 'game.jpeg',
        circleImage: 'cSharp.png',
    },
    {
        title: 'Card Game API',
        description: 'Card Game API developed in Go (Golang).',
        repo: 'https://github.com/gregreborn/portfolio/tree/572285f4a9291b9c24eff1f2982ec55bb4ba0884/card-game-api',
        image: 'card.jpeg',
        circleImage: 'go.png',
    },
    {
        title: 'Mobile Swift Hanggame',
        description: 'Swift-based Hangman Game on iOS. Enter your username, guess the word, and have fun!',
        repo: 'https://github.com/gregreborn/portfolio/tree/43b96808129e26b687b90da4623919dd7ec12b97/TP2',
        image: 'Hangman.jpg',
        circleImage:'swift.png',
    },

];


function App() {
    return (
        <div>
            <Header />
            <section id="home">
                <h1>Gregory St Facile R. - Software Developer</h1>
            </section>
            <section id="projects">
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}

                </div>
            </section>
            <section id="about">
                <div className={"about-container"}>
                    <div className={"about-text"}>
                        <h2>About Me</h2>
                        <p>
                            I am Gregory St Facile R., a passionate software developer with a diverse skill set in programming and technical support. My journey in tech started at Cegep de Lanaudière, Joliette, where I honed my programming skills and am currently in the final stages of my studies.
                        </p>
                        <p>
                            My technical foundation was built at CFP des Riverains, Repentigny, where I specialized in database management and networking. This included mastering various software like VMware, vSphere, vCenter, and gaining practical experience in PC assembly, IP telephony, and Microsoft Office Suite. I'm also well-versed in Windows and Windows Server environments.
                        </p>
                        <h4>Skills:</h4>
                        <ul>
                            <li>Bilingual: Fluent in both French and English.</li>
                            <li>Strong service-oriented mindset, honest and ethical.</li>
                            <li>Proficient in Windows Server 2012 and 2016.</li>
                            <li>Ability to work effectively under pressure.</li>
                            <li>Keen on staying updated with smartphone technologies.</li>
                            <li>Excellent team player with strong collaborative skills.</li>
                            <li>Programming expertise in C#, C++, Java, JavaScript, SQL, Swift, Kotlin, Golang, HTML, CSS, PHP.</li>
                        </ul>
                        <h4>Experience:</h4>
                        <p>
                            Currently, I am employed at Walmart, Joliette in the OMNI online order department since March 2020. My role involves providing efficient customer service for online order management, utilizing organizational skills to handle a diverse range of products, and working in a dynamic environment to ensure swift order processing.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="/card.jpeg" alt="Gregory working" />
                    </div>
                </div>
            </section>
            <section id="contact">
                <h2>Contact Me</h2>
                <form action="https://formspree.io/f/xdoqewqg" method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="_replyto" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Send</button>
                </form>
            </section>
            <Footer />
        </div>
    );
}


export default App;