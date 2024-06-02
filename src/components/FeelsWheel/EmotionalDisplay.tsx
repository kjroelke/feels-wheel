import { capitalizeIt } from './utilities';

export default function EmotionalDisplay({
	currentFeeling,
	emotion,
	emotionIsSet,
	intensityIsSet,
}: {
	currentFeeling: string;
	emotion: string;
	emotionIsSet: boolean;
	intensityIsSet: boolean;
}) {
	return (
		<p className='font-bold text-xl text-center text-neutral-900 dark:text-neutral-50'>
			{!emotionIsSet && !intensityIsSet && (
				<span>How are you feeling?</span>
			)}
			{emotionIsSet && !intensityIsSet && (
				<span>How intense are you feeling {emotion}?</span>
			)}
			{!emotionIsSet && intensityIsSet && <span>''</span>}
			{emotionIsSet && intensityIsSet && (
				<span>
					Another way to describe how your're feeling could be:
					<br />
					<span className='italic'>
						{capitalizeIt(currentFeeling)}
					</span>
				</span>
			)}
		</p>
	);
}
