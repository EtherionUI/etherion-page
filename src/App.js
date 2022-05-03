import logo from "./logo.svg";
import "./App.css";
import background from "./assets/background.png";
import {
  Alert,
  Badge,
  Button,
  Chip,
  Chips,
  ColorSwatch,
  Container,
  Divider,
  Group,
  Image,
  Input,
  Kbd,
  Pagination,
  Paper,
  Progress,
  ScrollArea,
  SimpleGrid,
  Skeleton,
  Slider,
  Space,
  Stack,
  Switch,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import { Prism } from "@mantine/prism";
import { useEffect, useRef, useState } from "react";

const demoCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button>🎉 Hello</Button>
}`;

function App() {
  const viewportRef = useRef();
  const theme = useMantineTheme();
  let valueScrolled = 0;
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch
      key={color}
      color={theme.colors[color][5]}
      radius={0}
      size={32}
    />
  ));
  useEffect(() => {
    viewportRef.current.onscroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = viewportRef.current;
      valueScrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Group position="apart" style={{ width: "100%" }}>
          <Group>
            <img src={logo} className="App-logo" alt="logo" />
            <h1
              style={{
                background: `url(${background})`,
                backgroundSize: "cover",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              Etherion UI
            </h1>
            <Badge radius="xs">v0.0.1</Badge>
          </Group>
          <Group>
            <Input
              placeholder="Search"
              radius="md"
              // variant="filled"
              rightSectionWidth={72}
              rightSection={
                <>
                  <Kbd>Ctrl</Kbd>
                  <Space w={4} />
                  <Kbd>K</Kbd>
                </>
              }
            />
            <a href="https://discord.gg/BZr39jZQq5" target="_blank">
              Discord
            </a>
          </Group>
        </Group>
      </header>
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          flexGrow: "1",
          height: "680px",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "20px 48px",
          gap: "20px",
          background:
            "radial-gradient(circle 800px at 700px 200px, hsl(276 100% 99%), #FDFCFD00), radial-gradient(circle 600px at calc(100% - 300px) 300px, hsl(165 68.8% 89.5%), #FDFCFD00), radial-gradient(circle 800px at right center, hsl(193 99% 94.7%), #FDFCFD00), radial-gradient(circle 800px at right bottom, hsl(193 100% 98.8%), #FDFCFD00), radial-gradient(circle 800px at calc(50% - 600px) calc(100% - 100px), hsl(323 86.3% 96.5%), hsl(322 100% 99.4%), #FDFCFD00)",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "100%",
            background: "rgba( 255, 255, 255, 0.25 )",
            boxShadow:
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.15) 0px 0px 16px",
            backdropFilter: "blur( 4px )",
            WebkitBackdropFilter: "blur( 4px )",
            borderRadius: 10,
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            padding: "128px",
            gap: "24px",
          }}
        >
          <h1 style={{ fontSize: 81 }}>
            Why waste time reinventing
            <br />{" "}
            <span
              style={{
                background: `url(${background})`,
                backgroundSize: "cover",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              UI components
            </span>
            ?
          </h1>
          <p style={{ fontSize: 24 }}>
            Unstyled, accessible components for building high‑quality design
            systems and web apps in React.
          </p>
          <ThemeIcon>a</ThemeIcon>
          <Group>
            <Button>Get Started</Button>
            <Button>Github</Button>
          </Group>
        </div>
        <Paper
          sx={(theme) => ({
            "&:hover": {
              animation: "slideIn 1s ease-in-out",
              zIndex: 20,
            },
            "&:not(:hover)": {
              animation: "slideOut 1s ease-in-out",
              zIndex: 0,
            },

            "@keyframes slideIn": {
              "0%": {
                zIndex: 0,
              },
              "50%": {
                transform: "translateX( 250px )",
                zIndex: 0,
              },
              "100%": {
                transform: "translateX( 0px )",
                zIndex: 20,
              },
            },

            "@keyframes slideOut": {
              "0%": {
                zIndex: 20,
              },
              "50%": {
                transform: "translateX( 250px )",
                zIndex: 20,
              },
              "100%": {
                transform: "translateX( 0px )",
                zIndex: 0,
              },
            },
          })}
          style={{
            // background: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "70%",
            width: "40%",
            right: "75px",
            position: "absolute",
            borderRadius: "10px",
            overflow: "hidden",
          }}
          shadow="xs"
          p={0}
        >
          <Group style={{ padding: "4px 12px" }} grow>
            <Group spacing={6}>
              <ColorSwatch color="#ff4a4a" size={10} />
              <ColorSwatch color="#ffb83d" size={10} />
              <ColorSwatch color="#00c543" size={10} />
            </Group>
            <Input
              style={{ cursor: "pointer", pointerEvents: "none" }}
              variant="filled"
              placeholder="Search or enter web address"
              value="Etherion UI"
              size="xs"
            />
            <div></div>
          </Group>
          <Divider />
          <Progress radius="xs" size="xs" value={valueScrolled} />
          <ScrollArea
            viewportRef={viewportRef}
            offsetScrollbars
            style={{
              // background: `url(${background})`,
              // backgroundSize: "cover",
              // backgroundRepeat: "no-repeat",
              display: "flex",
              padding: 16,
              width: "100%",
              height: "100%",
              flexWrap: "wrap",
            }}
          >
            <div style={{ width: 164, display: "inline-block" }}>
              <Image
                src={background}
                radius="sm"
                alt="background"
                width={164}
                height={164}
              />
            </div>
            <div
              style={{
                display: "inline-flex",
                gap: "8px",
                flexDirection: "column",
              }}
            >
              <Button size="xs">filled</Button>
              <Button size="xs" variant="light">
                light
              </Button>
              <Button size="xs" variant="outline">
                outline
              </Button>
              <Button size="xs" variant="default">
                default
              </Button>
              <Button size="xs" variant="subtle">
                subtle
              </Button>
              <Button
                size="xs"
                variant="gradient"
                gradient={{ from: "teal", to: "lime", deg: 105 }}
              >
                gradient
              </Button>
            </div>
            <Group>
              <SimpleGrid cols={5} spacing={0}>
                {swatches}
              </SimpleGrid>
            </Group>
            <Pagination total={10} />
            <Switch />
            <Slider
              marks={[
                { value: 20, label: "20%" },
                { value: 50, label: "50%" },
                { value: 80, label: "80%" },
              ]}
            />
            <Chips>
              <Chip value="react">React</Chip>
              <Chip value="ng">Angular</Chip>
              <Chip value="svelte">Svelte</Chip>
              <Chip value="vue">Vue</Chip>
            </Chips>
            <Skeleton height={50} circle mb="xl" />
            <Skeleton height={16} radius="xs" />
            <Skeleton height={16} mt={6} radius="xs" />
            <Skeleton height={16} mt={6} width="70%" radius="xs" />
            <Alert title="Bummer!" color="red">
              Something terrible happened! You made a mistake and there is no
              going back, your data was lost forever!
            </Alert>
            <Prism language="tsx">{demoCode}</Prism>
          </ScrollArea>
        </Paper>
      </div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
    </div>
  );
}

export default App;
