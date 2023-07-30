
import React from 'react';

import './App.css';
import { FC } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';

const imageUrls = [
	'https://cards.scryfall.io/large/front/9/2/924e9db3-3f7b-4e07-b523-5ec236f99681.jpg?1681411424',
	'https://cards.scryfall.io/large/front/c/a/ca095559-ac77-4186-8d9b-b75ce0607582.jpg?1592710284',
	'https://cards.scryfall.io/large/front/4/8/48b597dd-f6eb-45da-977d-453e8c1433cc.jpg?1608911023',
];

const App: FC = () => {
	return (
		<div className="App">
			<Grid container spacing={1}>
				<Grid container xs={12}>
					<Grid xs={9}>
						<div className="board">board</div>
					</Grid>
					<Grid container xs={3}>
						<Stack>
							<div className="commandZone">command zone</div>
							<div className="graveyard">graveyard</div>
							<div className="exile">exile</div>
						</Stack>
					</Grid>
				</Grid>
				<Grid container xs={12}>
					<Grid xs={11}>
						<div className="hand">hand</div>
					</Grid>
					<Grid xs={1}>
						<div className="graveyard">fortell</div>
					</Grid>
				</Grid>
			</Grid>
		</div >
	);
};

export default App;