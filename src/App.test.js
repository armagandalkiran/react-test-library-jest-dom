import { render, screen, fireEvent } from "@testing-library/react";
import { replaceCamelWithSpaces } from "./App";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorbutton = screen.getByRole("button", {
    name: "change to Midnight Blue",
  });
  expect(colorbutton).toHaveStyle({ backgroundColor: "mediumvioletred" });
  fireEvent.click(colorbutton);
  expect(colorbutton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorbutton).toHaveTextContent("change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);
  const colorbutton = screen.getByRole("button", {
    name: "change to Midnight Blue",
  });
  expect(colorbutton).toBeEnabled();
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("button and checkbox actions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(checkbox).toBeChecked();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("button is red and disabled", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color:gray");
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color:mediumvioletred");
});

test("button is blue and disabled", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "change to Midnight Blue",
  });
  fireEvent.click(colorButton);
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color:gray");
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color:MidnightBlue");
});

describe("replace camels with spaces", () => {
  test("one letter", () => {
    expect(replaceCamelWithSpaces("red")).toBe("red");
  });
  test("two letter", () => {
    expect(replaceCamelWithSpaces("redBlue")).toBe("red Blue");
  });
  test("three letter", () => {
    expect(replaceCamelWithSpaces("redBlueWhite")).toBe("red Blue White");
  });
});
