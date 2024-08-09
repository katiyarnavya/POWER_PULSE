import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
        <div className="wrapper">
            <h1>TOP WORKOUT SESSION</h1>
            <p> Elevate Your Fitness with Expert-Led Sessions. From high-intensity intervals to strength conditioning, find the perfect fit for fitness journey.</p>
            <img src="/img7.jpg" alt="workout" />
        </div>
        <div className="wrapper">
            <h1>FEATURED BOOTCAMPS</h1>
            <p>Ready to take your fitness to the next level? Join our bootcamps and transform your body and mind today!</p>
            <div className="bootcamps">
                <div>
                    <h4>
                        Maximize Your Burn with High-Intensity Training.
                    </h4>
                    <p>Push your limits and burn calories fast with our High-Intensity Interval Training sessions designed for rapid results.</p>
                </div>
                <div>
                    <h4>
                    Ignite Your Core, Elevate Your Heart Rate
                    </h4>
                    <p>Target your core and cardiovascular system simultaneously for a powerful workout that tones and tightens.</p>
                </div>
                <div>
                    <h4>
                    Challenge Yourself with High-Energy Drills
                    </h4>
                    <p>Experience a mix of strength, agility, and endurance drills that push you beyond your limits.</p>
                </div>
                <div>
                    <h4>
                    Enhance Your Range of Motion
                    </h4>
                    <p>Improve your joint mobility and flexibility with targeted exercises designed for injury prevention and performance.</p>
                </div>
                
            </div>
        </div>

      
    </section>
  )
}

export default WorkoutSessions
