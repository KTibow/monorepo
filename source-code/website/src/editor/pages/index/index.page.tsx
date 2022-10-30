import { Button } from "@src/components/Button.jsx";

export function Page() {
	return (
		<>
			<Button variant="fill" color="primary">
				Hi
			</Button>
			<Button variant="fill" color="secondary" disabled>
				Hi
			</Button>
		</>
	);
}
