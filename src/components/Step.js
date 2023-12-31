import React from 'react'

const Step = ({title, heading, description, img, alternate}) => {
    const row = "lg:items-center lg:flex lg:flex-row lg:justify-end";
    const rowReverse = "lg:items-center lg:flex lg:flex-row-reverse lg:justify-center";

    return (
        <div className={alternate?row : rowReverse} 
        style={{flex:1, display:"flex", flexWrap:"flex", marginTop: 30, height:450, paddingHorizontal: 50, justifyContent:"center", alignItems:"center"}}>
          <div style={{width:"60%", display:"flex", flexWrap:"flex", flexDirection:alternate?"row":"row-reverse",justifyContent:"space-between", alignItems:"center"}}>
            
          <div style={{ 
            width: "40%",  // Equivalent to lg:w-2/6
            marginTop: '-2vw',  // Equivalent to lg:-mt-10
            marginBottom: 10,
            display: 'flex',
            flexDirection: 'column',  // Equivalent to lg:flex lg:flex-col
            justifyContent: 'flex-start',  // Equivalent to lg:justify-center lg:items-start
            paddingRight: alternate?10:0,
            paddingLeft: alternate?0:10,
            //backgroundColor:"blue"
          }}>
           <p
            style={{
              paddingBottom: '1rem',  // Equivalent to pb-5
              fontSize: '1.25em',       // Equivalent to text-2xl
              fontWeight: '600',        // Equivalent to font-semibold
              textAlign: 'left',     // Equivalent to text-center
              color: '#8EBADA',         // Equivalent to text-orange-400
              marginBottom: '0',       // Equivalent to lg:pb-0
            }}
          >
            {title}
          </p>
          <p
            style={{              
              fontSize: '2.2em', // Equivalent to "text-4xl"
              fontWeight: '600', // Equivalent to "font-semibold"
              lineHeight: '2.5rem', // Equivalent to "leading-relaxed"
              textAlign: "left", // Equivalent to "text-center"
              color: '#000', // Equivalent to "text-blue-800"
              marginTop: '-0.75rem', // Equivalent to "mb-3" (negative margin)
              marginBottom: "3vh",
            }}
          >
            {heading}
          </p>
          <p
            style={{
              fontSize: '1.25em', // Equivalent to "text-2xl"
              fontWeight: '400', // Equivalent to "font-semibold"
              lineHeight: '1.5rem', // Equivalent to "leading-10"
              textAlign: 'left', // Equivalent to "text-center"
              color: '#555555', // Equivalent to "text-gray-400"
              marginBottom: "2vw"
            }}
          >
            {description}
          </p>
          </div>
          <div>
              <img
                style={{
                  width: 300,
                  marginTop: '-2vw',  // Equivalent to lg:-mt-24
                  marginBottom: 0,  // Equivalent to lg:-mb-20
                }}
                src={img}
                alt=""
              />
          </div>
          </div>
        </div>
    )
}

export default Step
