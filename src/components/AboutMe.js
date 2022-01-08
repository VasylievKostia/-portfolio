export function AboutMe() {
    return <section className="aboutMe">
    
        <h2>About me</h2>
    <div className="aboutMe__thomb">
        <div>
            <img src="../images/myPhoto.jpg" alt="my photo" />
                
                
            <p>Hello again me. Now I study at GOIT school on a full stack of the developer. At the moment, courses in the field of frontend are being completed, so I'm looking for a job in this direction. below you can see examples of my work</p>
        </div>
        <div className="aboutMe__skills">
            <h3>Hard Skills</h3>
            <ul>
                <li className="skills__item">HTML</li>
                <li className="skills__item">CSS</li>
                <li className="skills__item">SASS</li>
                <li className="skills__item">JavaScript</li>
                <li className="skills__item">React</li>
                <li className="skills__item">WebPack</li>
                <li className="skills__item">Git</li>
                </ul>
        </div>
        <div className="aboutMe__skills">    
            <h3>Soft Skills</h3>
            <ul>
                <li>Responsibility</li>
                <li>Teamwork</li>
                <li>Calm</li>
                <li>Conscientious</li>
                <li>Honest</li>
            </ul>
        </div>
    </div>
    </section>
}