import React from 'react';
import "./Knowledge.css"

const Knowledge = () => {
    const knowledgeData = [
        {
            'title': 'What is the difference between Props nad State?',
            'answer': 'Props and state are both fundamental concepts in React for managing data within components, but they serve different purposes. Props, short for properties, are immutable data passed from a parent component to a child component. They allow for communication between components and enable component reusability. On the other hand, state represents mutable data that is managed within a component itself. It can be updated using the useState() hook (for functional components) or by extending React.Component (for class components). While props are read-only and passed from parent to child, state is mutable and can be updated by the component itself. In summary, props are used for communication between components, while state is used to manage dynamic data within a component.'
        },
        {
            'title': 'How dose useState() work?',
            'answer': 'useState() is a hook in React that allows functional components to manage state. It returns an array with two elements: the current state value and a function to update that value. When you call the update function, React re-renders the component with the new state value.'
        },
        {
            'title': 'How dose useEffect() work?',
            'answer': 'useEffect() in React allows you to perform side effects in functional components. You provide it a function, and React runs it after rendering. If you specify dependencies, it runs the function again when those dependencies change.',
        },
        {
            'title': 'How dose React work?',
            'answer': "Certainly! React is a JavaScript library for building user interfaces, which works by breaking down your UI into reusable components. These components can manage their own state and receive data via props. React uses a virtual DOM to efficiently update the real DOM, ensuring that only the necessary changes are applied when the data changes. Components can have lifecycle events (for class components) or hooks (for functional components) for managing behavior throughout their lifecycle. This approach makes React efficient, scalable, and easy to maintain, making it a popular choice for building modern web applications."
        }
    ];

    return (
        <div className='knowledge-container'>
            {
                knowledgeData.map(data => (
                <div className='container'>
                    <h2>{data.title}</h2>
                    <p>{data.answer}</p>
                </div>))
            }
        </div>
    );
};

export default Knowledge;