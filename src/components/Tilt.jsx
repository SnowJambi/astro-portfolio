import Tilt from 'react-parallax-tilt'

const TiltObject = ( props ) => {
  return (
        <Tilt className='project' tiltReverse={true} perspective={2000} glareEnable={true} glareMaxOpacity={0.45} scale={1.05} glareBorderRadius={'10px'}>
          {props.children}
        </Tilt>
  )
}

export default TiltObject