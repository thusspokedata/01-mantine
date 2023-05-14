import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Paper,
} from "@mantine/core";
import Cards from "./components/Cards";
import LightDarkButton from "./components/LightDarkButton";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import Buttons from "./components/Buttons";
import AppShellDemo from "./components/AppShell";

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Paper shadow="xs" p="md" radius="xs" style={{ minHeight: "100vh" }}>
          <AppShellDemo />
          {/* 
          <Cards />
          <Buttons /> */}
        </Paper>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
