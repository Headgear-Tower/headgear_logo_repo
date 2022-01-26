import GTGasLogo from './logos/gtGasLogo'
import HeadgearLogo from './logos/headgear/headgearlogo'
import RemedyLogo from './logos/remedyLogo'

function App() {
	return (
		<div
			style={{
				display: 'grid',
				placeItems: 'center',
				height: '100vh',
				background: 'rgb(40,40,40)'
			}}>
			<div style={{ display: 'grid', gridAutoRows: '1fr' }}>
				<div>
					<GTGasLogo
						width='100'
						height='100'
						gtColor='white'
						gasworksColor='white'
					/>
				</div>
				<div>
					<HeadgearLogo />
				</div>
				<div>
					<RemedyLogo width='200' height='200' paddingX='10' />
				</div>
			</div>
		</div>
	)
}

export default App
