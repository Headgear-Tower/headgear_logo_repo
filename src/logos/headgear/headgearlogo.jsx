import logo from './headgear_logo_white.png'
import HeadgearHead from './headgear_head'

const HeadgearLogo = () => {
	return (
		<div style={{ gap: '15px' }} className='d-flex flex-sm-row flex-column'>
			<div className='d-flex justify-content-center justify-content-sm-start'>
				<HeadgearHead shouldAnimate headHeight='50' headWidth='50' />
			</div>
			<img
				style={{ objectFit: 'contain', height: '50px' }}
				src={logo}
				alt='Headgear LTD'
			/>
		</div>
	)
}

export default HeadgearLogo
