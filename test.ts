import { SomeService } from "./service";

export function query(SomeService: SomeService): string {
	return SomeService.query();
}