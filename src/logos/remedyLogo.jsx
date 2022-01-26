import React from 'react'
import { motion } from 'framer-motion'

class RemedyLogo extends React.Component {
	render() {
		const { width, height, paddingX } = this.props

		const initialDelay = 0.1
		const interval = 0.1

		const spring = {
			type: 'spring',
			damping: 1,
			stiffness: 1,
			mass: 100,
			velocity: 100
		}

		return (
			<div style={{ paddingLeft: `${paddingX}px`, paddingRight: `${paddingX}px` }}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={width}
					height={height}
					fill='none'
					viewBox='0 0 260 157'>
					<g id='remedyLogo'>
						<motion.g
							animate={{
								translateY: ['100%', '0%']
							}}
							transition={{
								...spring
							}}>
							<g id='backPhone'>
								<path
									id='phone'
									fill='#304962'
									d='M.604 11.575c0-6.075 4.925-11 11-11H202.21c6.075 0 11 4.925 11 11V154H.604V11.575z'></path>
								<rect
									id='handle'
									width='56.499'
									height='4.98'
									x='80.426'
									y='12.489'
									fill='#fff'
									rx='2.49'></rect>
							</g>
						</motion.g>

						<motion.g
							animate={{
								translateY: ['100%', '0%'],
								opacity: [0, 1]
							}}
							transition={{
								duration: 0.5,
								delay: initialDelay + interval,
								ease: 'easeInOut'
							}}>
							<g id='middlePhone'>
								<path
									id='phone_2'
									fill='#3E7E51'
									stroke='#fff'
									strokeWidth='3'
									d='M236.252 155.23h1.5V42.492c0-6.904-5.597-12.5-12.5-12.5H61.757c-6.904 0-12.5 5.596-12.5 12.5V155.23h186.995z'></path>
								<rect
									id='handle_2'
									width='56.499'
									height='4.98'
									x='116.826'
									y='43.506'
									fill='#fff'
									rx='2.49'></rect>
							</g>
						</motion.g>

						<motion.g
							animate={{ translateY: ['100%', '0%'] }}
							transition={{
								duration: 0.5,
								delay: initialDelay + interval * 2,
								ease: 'easeInOut'
							}}>
							<g id='frontPhone'>
								<path
									id='phone_3'
									fill='#78A150'
									stroke='#fff'
									strokeWidth='3'
									d='M256.517 155.23h1.5V74.468c0-6.904-5.596-12.5-12.5-12.5H117.271c-6.904 0-12.5 5.596-12.5 12.5v80.762h151.746z'></path>
								<rect
									id='handle_3'
									width='56.499'
									height='4.98'
									x='153.145'
									y='75.625'
									fill='#fff'
									rx='2.49'></rect>
							</g>
						</motion.g>
					</g>
				</svg>
			</div>
		)
	}
}

export default RemedyLogo
