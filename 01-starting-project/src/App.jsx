import { useState} from "react";

import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";


function App() {
    const [selectedTopic, setSelectedTopic ] = useState('Please click a button');
    
    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic)
    }

    console.log('app component executing')

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]}/>
                        <CoreConcept
                            title={CORE_CONCEPTS[1].title}
                            description={CORE_CONCEPTS[1].description}
                            image={CORE_CONCEPTS[1].image}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>

                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleClick('state')}>State</TabButton>
                    </menu>
                    {selectedTopic}
                </section>
            </main>
        </div>
    );
}

export default App;
