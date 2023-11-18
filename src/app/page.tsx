import { Button, MaxWithWrapper } from "@/components";
import { ThemeModeToggle } from "@/components/ThemeModeToggle";

export default function Home() {
  return (
    <MaxWithWrapper>
      <h1 className="text-primary/90">this is h1</h1>
      <Button variant={"default"}>Button</Button>
      <ThemeModeToggle />
    </MaxWithWrapper>
  );
}
