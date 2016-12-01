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
  css: require("../assets/css-doctor.gif"),
  lego: require("../assets/lego-castle.png"),
  specificity: require("../assets/twitter-specificity.png"),
  stats: require("../assets/twitter-stats.png"),
  cats: require("../assets/cats.png"),
  weave: require("../assets/woven-castle.png"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#000",
  secondary: "#FF0053",
}, {
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

            <Slide transition={['slide']} bgColor="secondary">
              <Heading size={6} textColor='white' italic >What is Good CSS?</Heading>
            </Slide>

            <Slide transition={['slide']} bgColor="black">
                <Heading textAlign='left' size={6} textColor='secondary' italic >Good CSS is:</Heading>
                <List textColor='white'>
                  <Appear><ListItem>Simple</ListItem></Appear>
                  <Appear><ListItem>Predictable</ListItem></Appear>
                  <Appear><ListItem>Fast</ListItem></Appear>
              </List>
            </Slide>

            <Slide transition={['slide']} bgColor="black">
                <Heading textAlign='left' size={6} textColor='white' italic >Bad CSS is: </Heading>
                <List>
                  <Appear><ListItem>Complex</ListItem></Appear>
                  <Appear><ListItem>Unpredictable</ListItem></Appear>
                  <Appear><ListItem>Slow</ListItem></Appear>
              </List>
            </Slide>

            <Slide transition={['slide']} bgColor="black">
              <Heading size={6} textColor="white" margin='40px 10px'>
                Problem #1 - Bad CSS is Complex:
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

            <Slide transition={["zoom", "fade"]} bgColor="primary">
              <Layout>
                <Fill><Image src={images.weave} height="300px"/></Fill>
                <Fill><Image src={images.lego} height="300px"/></Fill>
              </Layout>
              <Text textColor='white' textSize='24px' italic>Simple vs Complex</Text>
            </Slide>

            <Slide transition={['slide']} bgColor="black">
                <Heading textAlign='left' size={6} textColor='secondary' italic >How does CSS become complex?</Heading>
                <List textColor='white'>
                  <Appear><ListItem textSize='28px' margin='20px 0px'>Over time the codebase and / or team grows</ListItem></Appear>
                  <Appear><ListItem textSize='28px' margin='20px 0px'>Developer isn't aware than someone already wrote a class</ListItem></Appear>
                  <Appear><ListItem textSize='28px' margin='20px 0px'>The existing class doesn’t do exactly what they need it to</ListItem></Appear>
                  <Appear><ListItem textSize='28px'>Solution: Add more CSS</ListItem></Appear>
              </List>
            </Slide>

            <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
              <Heading size={6}textAlign='center' textColor='white' lineHeight={2} bold italic>
                It is much easier to write new CSS than it is to delete or refactor existing CSS.
              </Heading>
            </Slide>


            <Slide transition={['slide']} bgColor="black">
              <Heading size={6} textColor="white" margin='40px 10px'>
                Problem #2 - Bad CSS is Unpredictable:
              </Heading>
            </Slide>

            <Slide transition={['fade', 'zoom']} bgColor="black">
              <Image src={images.css} margin="0px auto 40px" height="500px"/>
              <Text textColor='white' textSize='24px' italic>(Refactoring CSS IRL)</Text>
            </Slide>

            <Slide transition={['slide']} bgColor="black">
                <Heading textAlign='left' size={6} textColor='secondary' italic >What makes CSS unpredictable? </Heading>
                <List textColor='white'>
                  <Appear><ListItem textSize='28px' margin='20px 0px'>Global scope</ListItem></Appear>
                  <Appear><ListItem textSize='28px' margin='20px 0px'>Specificity / The Cascade</ListItem></Appear>
                  <Appear><ListItem textSize='28px' margin='20px 0px'>Quirky inheritance</ListItem></Appear>
              </List>
            </Slide>

            <Slide transition={["slide"]} bgColor="black">
              <BlockQuote>
                <Quote textColor='white' textSize='63px'>“Simplicity is a prerequisite for reliability.”</Quote>
                <span style={{position: 'relative', left: '28px' }}><Cite textColor='secondary'>Edsger Dijkstra</Cite></span>
              </BlockQuote>
            </Slide>

            <Slide transition={['slide']} bgColor="secondary">
              <Heading size={6} textColor='white' italic >How does Functional Programming address these issues?</Heading>
            </Slide>

            <Slide transition={["fade"]} bgColor="white">
              <Appear>
                <Heading size={6} textAlign='left' italic margin='40px 0px'>What is Functional Programming?</Heading>
              </Appear>
              <Appear>
                <Text textAlign='left' textSize='24px' lineHeight={1.75}>
                  Functional Programming is a programming paradigm—a style of building the structure 
                  and elements of computer programs—that treats computation as the evaluation of <span 
                  style={{fontWeight: 'bold', fontStyle: 'italic', fontSize:'26px'}}> mathematical functions
                  and avoids changing-state and mutable data. </span>
                  It is a declarative programming paradigm, which means programming is 
                  done with expressions or declarations instead of statements.
                </Text>
              </Appear>
            </Slide>
            
            <Slide transition={['slide']} bgColor="black">
              <Heading size={6} textColor="secondary" margin='40px 10px'>
                Principle 1 - Purity
              </Heading>
            </Slide>

            <Slide transition={['zoom','fade']} bgColor="primary">
              <CodePane
                lang="jsx"
                source={require("raw!../examples/purity.example")}
                margin="20px auto"
              />
            </Slide>

            <Slide transition={['zoom','fade']} bgColor="primary">
              <CodePane
                lang="jsx"
                source={require("raw!../examples/purity2.example")}
                margin="20px auto"
              />
            </Slide>

            <Slide transition={['slide']} bgColor="black">
              <Heading size={6} textColor="secondary" margin='40px 10px'>
                Principle 2 - Immutability
              </Heading>
            </Slide>

            <Slide transition={['zoom','fade']} bgColor="primary">
              <CodePane
                lang="jsx"
                source={require("raw!../examples/immutability.example")}
                margin="20px auto"
              />
            </Slide>

            <Slide transition={['slide']} bgColor="black" notes='Highly recommend the Lee Byron talk on immutability'>
              <Heading size={6} textColor='secondary' textAlign='left' italic >
                Immutability is a virtuous constraint
              </Heading>
              <List textColor='white'>
                <Appear><ListItem textSize='28px' margin='20px 0px'>Cheap equality checks on data</ListItem></Appear>
                <Appear><ListItem textSize='28px' margin='20px 0px'>Data stays in sync with UI</ListItem></Appear>
                <Appear><ListItem textSize='28px' margin='20px 0px'>Easier to persist data</ListItem></Appear>
              </List>
            </Slide>
              
            <Slide transition={['slide']} bgColor="black">
              <Heading size={6} textColor="secondary" margin='40px 10px'>
                Principle 3 - Composition
              </Heading>
            </Slide>

            <Slide transition={['zoom','fade']} bgColor="primary">
              <CodePane
                lang="jsx"
                source={require("raw!../examples/composition.example")}
                margin="20px auto"
              />
            </Slide>
            
             <Slide transition={['slide']} bgColor="secondary">
              <Heading size={6} textColor="white" margin='40px 10px'>
                Applying these Principles to CSS
              </Heading>
            </Slide>

            <Slide transition={['slide']} bgColor="black">
              <Heading size={6} textColor="secondary" margin='40px 10px'>
                Principle 1 - Purity
              </Heading>
            </Slide>

            <Slide transition={['zoom','fade']} bgColor="primary">
              <CodePane
                lang="jsx"
                source={require("raw!../examples/css-purity.example")}
                margin="20px auto"
              />
            </Slide>

            <Slide transition={['slide']} bgColor="black">
              <Heading size={6} textColor="secondary" margin='40px 10px'>
                Principle 2 - Immutability
              </Heading>
            </Slide>

            <Slide transition={['slide']} bgColor="black">
              <Heading size={6} lineHeight={1.5} textColor='white' italic >
                What if CSS properties were immutable? 
              </Heading>
            </Slide>

            <Slide transition={['fade', 'zoom']} bgColor="white">
              <Heading size={6} textColor="black" textAlign='left' margin='80px 0px' italic>
                CSS Stats for Twitter.com
              </Heading>
              <Image src={images.stats} margin="0px auto 40px" height="280px"/>
            </Slide>

            <Slide transition={['fade', 'zoom']} bgColor="white">
              <Heading size={6} textColor="black" textAlign='left' margin='80px 0px' italic>
               Specificity graph for Twitter.com
              </Heading>
              <Image src={images.specificity} margin="0px auto 40px" height="280px"/>
            </Slide>

            <Slide transition={['slide']} bgColor="black" notes='Highly recommend the Lee Byron talk on immutability'>
              <Heading size={6} textColor='secondary' textAlign='left' italic >
                How do we avoid overriding properties? 
              </Heading>
              <List textColor='white'>
                <Appear><ListItem textSize='28px' margin='20px 0px'>Keep specificity flat by only using classes</ListItem></Appear>
                <Appear><ListItem textSize='28px' margin='20px 0px'>Avoid IDs, element, attribute and complex selectors</ListItem></Appear>
                <Appear><ListItem textSize='28px' margin='20px 0px'>Avoid inheritance and the cascade</ListItem></Appear>
                <Appear><ListItem textSize='28px' margin='20px 0px'>Avoid property duplication with single property utility classes</ListItem></Appear>
              </List>
            </Slide>

            <Slide transition={['slide']} bgColor="secondary">
              <Heading size={6} lineHeight={1.5} textColor='white' italic >
                The more properties your CSS declaration has, the less reusable it is.
              </Heading>
            </Slide>

            <Slide transition={['zoom','fade']} bgColor="primary">
              <CodePane
                lang="jsx"
                source={require("raw!../examples/css-composition.example")}
                margin="20px auto"
              />
            </Slide>

            <Slide transition={['zoom','fade']} bgColor="primary">
                <CodePane
                  lang="jsx"
                  source={require("raw!../examples/css-composition2.example")}
                  margin="20px auto"
                />
            </Slide>

            <Slide transition={['slide']} bgColor="black">
              <Heading size={6} textColor="secondary" margin='40px 10px'>
                Principle 3 - Composition
              </Heading>
            </Slide>
            
            <Slide transition={['zoom','fade']} bgColor="primary">
              <CodePane
                lang="jsx"
                source={require("raw!../examples/component.example")}
                margin="20px auto"
              />
            </Slide>

            <Slide transition={['slide']} bgColor="black" notes='Highly recommend the Lee Byron talk on immutability'>
              <Heading size={6} textColor='secondary' textAlign='left' italic>
                Benefits of FCSS 
              </Heading>
              <List textColor='white'>
                <Appear><ListItem textSize='28px' margin='20px 0px'>Perfomance</ListItem></Appear>
                <Appear><ListItem textSize='28px' margin='20px 0px'>Consistency</ListItem></Appear>
                <Appear><ListItem textSize='28px' margin='20px 0px'>Less context switching</ListItem></Appear>
                <Appear><ListItem textSize='28px' margin='20px 0px'>Reduces cognitive overload </ListItem></Appear>
                <Appear><ListItem textSize='28px' margin='20px 0px'>Reduces the cost of design changes</ListItem></Appear>
              </List>
            </Slide>

            <Slide transition={['slide']} bgColor="secondary">
              <Heading size={6} textColor='white' italic >FAQ / Examples</Heading>
            </Slide>

            <Slide transition={['zoom','fade']} bgColor="primary">
              <CodePane
                lang="jsx"
                source={require("raw!../examples/last-child.example")}
                margin="20px auto"
              />
            </Slide>

            <Slide transition={['slide']} bgColor="white">
              <Image src={images.cats} margin="0px auto 40px" height="400px"/>
            </Slide>

            <Slide transition={['zoom','fade']} bgColor="primary">
              <CodePane
                lang="jsx"
                source={require("raw!../examples/first-child.example")}
                margin="20px auto"
              />
            </Slide>

            <Slide transition={['zoom','fade']} bgColor="primary">
              <CodePane
                lang="jsx"
                source={require("raw!../examples/state-toggle.example")}
                margin="20px auto"
              />
            </Slide>
            

            <Slide transition={['slide']} bgColor="black">
              <Heading size={6} textColor='secondary' textAlign='left' italic >
                Resources / Further Reading: 
              </Heading>
              <List >
                <ListItem textSize='28px' margin='20px 0px'>
                  <Link href='https://www.infoq.com/presentations/Simple-Made-Easy' textColor='white'>Simple Made Easy by Rich Hickey</Link>
                </ListItem>
                <ListItem textSize='28px' margin='20px 0px'>
                  <Link href='http://mrmrs.io/writing/2016/03/24/scalable-css/' textColor='white'>Scalable CSS</Link>
                </ListItem>
                <ListItem textSize='28px' margin='20px 0px'>
                  <Link href='https://blog.colepeters.com/building-and-shipping-functional-css/' textColor='white'>Building & Shipping Functional CSS</Link>
                </ListItem>
                <ListItem textSize='28px' margin='20px 0px'>
                  <Link href='https://github.com/tachyons-css/tachyons' textColor='white'>Tachyons</Link>
                </ListItem>
              </List>
            </Slide>



            <Slide transition={["spin", "slide"]} bgColor="tertiary">
              <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
               Thank you!
              </Heading>
              <Text>(Say hi on twitter) - <Link href="http://www.twitter.com/benadam11" textColor='secondary'>@benadam11</Link></Text>
            </Slide>

          </Deck>
        </Spectacle>
      </div>
    );
  }
}
