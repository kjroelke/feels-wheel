import { useState, useEffect } from 'react';
import EmotionalDisplay from './EmotionalDisplay';
import { capitalizeIt } from './utilities';

export type Emotion =
	| 'happy'
	| 'sad'
	| 'bad'
	| 'surprised'
	| 'disgusted'
	| 'afraid'
	| 'angry';

export type Feels = Record<Emotion, { '2': string[]; '3': string[] }>;

export default function FeelsWheel({ words }: { words: Feels }) {
	const [emotion, setEmotion] = useState<Emotion | ''>('');
	const [intensity, setIntensity] = useState<'2' | '3' | ''>('');
	const [currentFeeling, setCurrentFeeling] = useState('');

	function getFeeling(): string {
		if (!emotion || !intensity) return '';
		return words[emotion][intensity][
			Math.floor(Math.random() * words[emotion][intensity].length)
		];
	}

	useEffect(() => {
		setCurrentFeeling(() => getFeeling());
	}, [emotion, intensity]);

	return (
		<div className='p-4 w-[800px] max-w-[calc(100%-2rem)] text-neutral-900 dark:text-neutral-50 text-md/relaxed container mx-auto'>
			<h2 className='font-black text-3xl text-center text-gradient'>
				Feels Generator
			</h2>
			<EmotionalDisplay
				emotion={emotion}
				currentFeeling={currentFeeling}
				emotionIsSet={'' !== emotion}
				intensityIsSet={'' !== intensity}
			/>
			<div
				id='user-selections'
				className='text-neutral-900 dark:text-neutral-50 flex flex-col gap-6 justify-center'>
				<div className='flex gap-4 mt-6'>
					<span id='current-feeling'>Pick a base emotion:</span>
					<select
						className='bg-neutral-100 dark:bg-neutral-800'
						onChange={(ev) =>
							setEmotion(ev.target.value as Emotion)
						}>
						<option value=''>Select an Emotion</option>
						{Object.keys(words).map((emotion, index) => (
							<option
								key={index}
								value={emotion.toLowerCase()}>
								{capitalizeIt(emotion)}
							</option>
						))}
					</select>
				</div>
				<div className='flex gap-4'>
					<span id='intensity'>Pick an intensity:</span>
					<select
						className='bg-neutral-100 dark:bg-neutral-800'
						onChange={(ev) =>
							setIntensity(ev.target.value as '2' | '3')
						}>
						<option value=''>Select an Intensity</option>
						<option value='2'>Strong</option>
						<option value='3'>Intense</option>
					</select>
				</div>
				<button
					onClick={() => setCurrentFeeling(getFeeling())}
					className='bg-transparent text-neutral-900 dark:text-neutral-50 rounded border-2 border-cyan-500 dark:border-cyan-300 self-center px-6 py-3 hover:bg-cyan-500 dark:hover:bg-cyan-300 hover:text-neutral-900 transition-colors'>
					Get New Word
				</button>
			</div>
		</div>
	);
}
