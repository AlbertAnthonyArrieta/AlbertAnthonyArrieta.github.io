import Container from 'react-bootstrap/Container';
import ImageAndDesc from "../common/ImageAndDesc";
import ProfilePic from '../../images/profile.jpg';
import TechnologyTile from "../common/TechnologyTile"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import { ReactComponent as JavaIcon } from '../../icons/java.svg';
import { ReactComponent as CPPIcon } from '../../icons/cpp.svg';
import { ReactComponent as HTMLIcon } from '../../icons/html5.svg';
import { ReactComponent as CSSIcon } from '../../icons/css3-alt.svg';
import { ReactComponent as JsIcon } from '../../icons/js-square.svg';
import { ReactComponent as SQLIcon } from '../../icons/mysql.svg';
import { ReactComponent as PythonIcon } from '../../icons/python.svg';
import { ReactComponent as ReactIcon } from '../../icons/react.svg';
import { ReactComponent as AngularIcon } from '../../icons/angular.svg';
import { ReactComponent as JQueryIcon } from '../../icons/jquery-plain.svg';
import { ReactComponent as GitHubIcon } from '../../icons/github-original.svg';
import { ReactComponent as GitLabIcon } from '../../icons/gitlab-plain.svg';
import { ReactComponent as VScodeIcon } from '../../icons/vscode-plain.svg';
import { ReactComponent as Fw7Icon } from '../../icons/framework7.svg';
import { ReactComponent as BSIcon } from '../../icons/bootstrap-plain.svg';
import { ReactComponent as TsIcon } from '../../icons/typescript.svg';
import { ReactComponent as NodeIcon } from '../../icons/nodejs.svg';
import { ReactComponent as JiraIcon } from '../../icons/jira.svg';
import { ReactComponent as ViteIcon } from '../../icons/vite.svg';
import { ReactComponent as BitBucketIcon } from '../../icons/bitbucket.svg';
import { ReactComponent as WordPressIcon } from '../../icons/wordpress.svg';
import { ReactComponent as FigmaIcon } from '../../icons/figma.svg';






export const AboutSection = () => {

    return (
        <div id="about" className='section about'>
            <Container>
                <Fade top>
                    <h1 className='section--title'><span class='text--highlight__cyan'>ABOUT ME</span></h1>
                </Fade>

                <div className='section--container'>
                    <ImageAndDesc
                        img={ProfilePic}
                        heading={"Who am I?"}
                        paragraph={
                            "Hi! I'm Albert, a recent Computer Science graduate with a minor in New Media from the University of Lethbridge. I specialize in web development, leveraging strong problem-solving abilities and a sharp eye for design to build exceptional web applications. I'm also passionate about full-stack development and am committed to delivering high-quality, reliable software solutions. Check out my projects below!"}
                    />
                </div>
                <div className='section--container'>
                    <Fade top>
                        <h2 className='text--subheading'>Technologies</h2>
                    </Fade>
                    <Slide bottom cascade>
                        <div className='technology--container'>
                            <div className='about--item'>
                                <h3>Programming Languages</h3>
                                <div className='technology--tiles'>
                                    <TechnologyTile icon={<JavaIcon />} name={'Java'} />
                                    <TechnologyTile icon={<CPPIcon />} name={'C++'} />
                                    <TechnologyTile icon={<PythonIcon />} name={'Python'} />
                                    <TechnologyTile icon={<HTMLIcon />} name={'HTML'} />
                                    <TechnologyTile icon={<CSSIcon />} name={'CSS'} />
                                    <TechnologyTile icon={<JsIcon />} name={'JavaScript'} />
                                    <TechnologyTile icon={<SQLIcon />} name={'mySQL'} />
                                    <TechnologyTile icon={<TsIcon />} name={'TypeScript'} />
                                </div>

                            </div>
                            <div className='about--item'>
                                <h3>Frameworks & Libraries</h3>
                                <div className='technology--tiles'>
                                    <TechnologyTile icon={<ReactIcon />} name={'React'} />
                                    <TechnologyTile icon={<AngularIcon />} name={'Angular'} />
                                    <TechnologyTile icon={<JQueryIcon />} name={'JQuery'} />
                                    <TechnologyTile icon={<Fw7Icon />} name={'Framework7'} />
                                    <TechnologyTile icon={<BSIcon />} name={'Bootstrap'} />
                                    <TechnologyTile icon={<NodeIcon />} name={'Node.js'} />
                                </div>
                            </div>
                            <div className='about--item'>
                                <h3>Tools</h3>
                                <div className='technology--tiles'>
                                    <TechnologyTile icon={<GitHubIcon />} name={'GitHub'} />
                                    <TechnologyTile icon={<GitLabIcon />} name={'GitLab'} />
                                    <TechnologyTile icon={<BitBucketIcon />} name={'BitBucket'} />
                                    <TechnologyTile icon={<JiraIcon />} name={'Jira'} />
                                    <TechnologyTile icon={<VScodeIcon />} name={'VScode'} />
                                    <TechnologyTile icon={<ViteIcon />} name={'Vite'} />
                                    <TechnologyTile icon={<WordPressIcon />} name={'WordPress'} />
                                    <TechnologyTile icon={<FigmaIcon />} name={'Figma'} />
                                </div>
                            </div>
                        </div>
                    </Slide>

                </div>
            </Container>
        </div>
    )
}
export default AboutSection