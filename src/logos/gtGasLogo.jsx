import { motion } from 'framer-motion'

const GTGasLogo = props => {
	const gt = {
		fontWeight: '900',
		fontSize: props.textEm ? `${props.textEm}em` : '2.0em',
		color: props.gtColor || 'black'
	}

	const rest = {
		letterSpacing: '-1.2px',
		fontWeight: '200',
		fontSize: props.textEm ? `${props.textEm}em` : '2.0em',
		color: props.gasworksColor || 'black'
	}

	return (
		<>
			{props.animate && (
				<motion.div
					initial={{ x: '+50px', opacity: 0 }}
					animate={{ x: '0', opacity: 1.0 }}
					transition={{ duration: 1 }}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					<Flame width={props.width} height={props.height} />

					{props.hasText && (
						<div style={{ display: 'flex', alignItems: 'end' }}>
							<div style={gt}>G</div>
							<div style={gt}>T</div>
							<div style={rest}>G</div>
							<div style={rest}>a</div>
							<div style={rest}>s</div>
							<div style={rest}>w</div>
							<div style={rest}>o</div>
							<div style={rest}>r</div>
							<div style={rest}>k</div>
							<div style={rest}>s</div>
						</div>
					)}
				</motion.div>
			)}
			{!props.animate && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					<Flame width={props.width} height={props.height} />
					<div style={{ display: 'flex', alignItems: 'end' }}>
						<div style={gt}>G</div>
						<div style={gt}>T</div>
						<div style={rest}>G</div>
						<div style={rest}>a</div>
						<div style={rest}>s</div>
						<div style={rest}>w</div>
						<div style={rest}>o</div>
						<div style={rest}>r</div>
						<div style={rest}>k</div>
						<div style={rest}>s</div>
					</div>
				</div>
			)}
		</>
	)
}

const Flame = props => {
	return (
		<div>
			<motion.svg
				xmlns='http://www.w3.org/2000/svg'
				width={props.width || '291'}
				height={props.height || '521'}
				fill='none'
				viewBox='0 0 291 521'>
				<path
					fill='url(#paint0_linear_566_174)'
					d='M147.521 0c83.5 64.344 275.178 383.828.986 520.333 0 0 118.541-122.604 30.338-274.666-17.781 80-118.532 101.317-106.37 247.297C-134.327 289.203 169.423 142.369 147.52 0z'></path>
				<defs>
					<linearGradient
						id='paint0_linear_566_174'
						x1='145.399'
						x2='145.399'
						y1='520.333'
						y2='0'
						gradientUnits='userSpaceOnUse'>
						<motion.stop
							animate={{
								stopColor: [
									'#D94802',
									'#DE5302',
									'#F48504',
									'#FAA802',
									'#F48504',
									'#DE5302',
									'#D94802'
								]
							}}
							transition={{
								repeat: Infinity,
								ease: 'anticipate',
								duration: 18
							}}
						/>
					</linearGradient>
				</defs>
			</motion.svg>
		</div>
	)
}

export default GTGasLogo
