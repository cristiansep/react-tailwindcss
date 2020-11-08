import React from 'react'
import Card from './components/Card';

const App = () => {
    return (
        <div className="container mx-auto mt-8">
             <div className="flex flex-wrap justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 px-2 ">
                <Card/> 
            </div>
        </div>
        </div>
       
    )
}

export default App
