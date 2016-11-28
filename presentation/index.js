// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("../assets/overrides.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  dots: require("../assets/dots.png"),
  charlie: require("../assets/charlie-day.png"),
  rich: require("../assets/rich.jpg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#000",
  secondary: "#FF0053",
},{
  primary: 'Helvetica Neue'
}) ;

export default class Presentation extends React.Component {
  render() {
    return (
      <div>
        <div style={{
          height:'4px', 
          backgroundImage: `linear-gradient(to right, #F81CE5 0%, #FF0053 33%, #FF0023 66%, #FFD600 100%)`,
          position: 'absolute', 
          top: '0', 
          width: '100%', 
          zIndex: '2'}} />

        <Spectacle theme={theme}>
          <Deck transition={["fade"]} transitionDuration={600}>

            <Slide transition={["fade"]} bgColor='primary' >
              <Heading size={2} caps margin='40px 10px' textColor="secondary">
                (Fun)ctional CSS
              </Heading>
              <Text textColor='white'>FP Principles => CSS</Text>
            </Slide>

            <Slide transition={['slide']} bgColor="black">
              <Image src={images.charlie} margin="0px auto 40px" height="500px"/>
              <Text textColor='white' textSize='24px' italic >(Me attempting to explain FP + CSS in 30 minutes)</Text>
            </Slide>
            
            <Slide transition={['slide']} bgColor="black">
              <Heading size={2} textColor='white' italic >What is Good CSS?</Heading>
            </Slide>

            <Slide transition={['slide']} bgColor="black">
                <Heading textAlign='left' size={4} textColor='secondary' italic >Good CSS is:</Heading>
                <List textColor='white'>
                  <Appear><ListItem>Simple</ListItem></Appear>
                  <Appear><ListItem>Predictable</ListItem></Appear>
                  <Appear><ListItem>Fast</ListItem></Appear>
              </List>
            </Slide>

            <Slide transition={['slide']} bgColor="black">
                <Heading textAlign='left' size={4} textColor='white' italic >Bad CSS is: </Heading>
                <List>
                  <Appear><ListItem>Complex</ListItem></Appear>
                  <Appear><ListItem>Unpredictable</ListItem></Appear>
                  <Appear><ListItem>Slow</ListItem></Appear>
              </List>
            </Slide>

            <Slide transition={['slide']} bgColor="black">
              <Heading size={6} textColor="white" margin='40px 10px'>
                Bad CSS is Complex
              </Heading>
            </Slide>

            <Slide transition={['fade', 'zoom']} bgColor="black">
              <Image src={images.rich} margin="0px auto 40px" height="500px"/>
              <Text textColor='white' textSize='24px' italic >Rich Hickey (Author of Closure) </Text>
            </Slide>

            <Slide bgColor="white">
              <Markdown textAlign='left'>
                {`**Complex** comes from the archaic word **complect**: to intwine, or to weave together. `}
              </Markdown>
            </Slide>

            <Slide bgColor='white'>
              <Markdown textAlign='left'>
                {`**Simple** comes from the latin word **simplex**: meaning unfolded, unbraided or un-intwined.`}
              </Markdown>
            </Slide>

            <Slide transition={['fade', 'zoom']} bgColor="black">
              <Text textColor='white' textSize='28px' italic >CSS is really easy to write, but very difficult to maintain.  </Text>
            </Slide>

            <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
              <Text textAlign='center' textColor='white' lineHeight={2} textSize='28px'>
                <span style={{fontWeight: '300'}}>CSS becomes complex over time because </span><span style={{fontWeight: 'bold', fontStyle: 'italic', fontSize:'30px'}}>it is much easier to write new CSS than it is to delete or refactor existing CSS.</span>
              </Text>
            </Slide>

            <Slide transition={["slide"]} bgColor="black">
              <BlockQuote >
                <Quote textColor='white' textSize='63px'>“Simplicity is a prerequisite for reliability.”</Quote>
                <span style={{position: 'relative', left: '28px' }}><Cite textColor='secondary'>Edsger Dijkstra</Cite></span>
              </BlockQuote>
            </Slide>

            <Slide transition={['zoom','fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
              <CodePane
                lang="jsx"
                source={require("raw!../assets/deck.example")}
                margin="20px auto"
              />
            </Slide>
            <Slide transition={["slide"]} bgDarken={0.25}>
              <Appear fid="1">
                <Heading size={1} caps fit textColor="primary">
                  Full Width
                </Heading>
              </Appear>
              <Appear fid="2">
                <Heading size={1} caps fit textColor="secondary">
                  Adjustable Darkness
                </Heading>
              </Appear>
              <Appear fid="3">
                <Heading size={1} caps fit textColor="primary">
                  Background Imagery
                </Heading>
              </Appear>
            </Slide>
            <Slide transition={["zoom", "fade"]} bgColor="primary">
              <Heading caps fit>Flexible Layouts</Heading>
              <Layout>
                <Fill>
                  <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                    Left
                  </Heading>
                </Fill>
                <Fill>
                  <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                    Right
                  </Heading>
                </Fill>
              </Layout>
            </Slide>
            
            
            <Slide transition={["slide", "fade"]} bgColor="primary">
              <Heading caps fit size={1} textColor="tertiary">
                Smooth
              </Heading>
              <Heading caps fit size={1} textColor="secondary">
                Combinable Transitions
              </Heading>
            </Slide>
            <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
              <List>
                <Appear><ListItem>Inline style based theme system</ListItem></Appear>
                <Appear><ListItem>Autofit text</ListItem></Appear>
                <Appear><ListItem>Flexbox layout system</ListItem></Appear>
                <Appear><ListItem>React-Router navigation</ListItem></Appear>
                <Appear><ListItem>PDF export</ListItem></Appear>
                <Appear><ListItem>And...</ListItem></Appear>
              </List>
            </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Heading size={1} caps fit textColor="tertiary">
                Your presentations are interactive
              </Heading>
              <Interactive/>
            </Slide>
            <Slide transition={["spin", "slide"]} bgColor="tertiary">
              <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
               Thank you!
              </Heading>
              <Link href="http://www.twitter.com/benadam11" textColor='secondary'>@benadam11</Link>
            </Slide>
          </Deck>
        </Spectacle>
      </div>
    );
  }
}
