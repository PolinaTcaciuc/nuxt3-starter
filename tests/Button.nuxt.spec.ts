import { BaseButton } from "#components";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import { describe, expect, test } from "vitest";
describe("Testing the BaseButton component", () => {
  test("If no text is passed, does it render the default text", async () => {
    await renderSuspended(BaseButton);
    expect(screen.getByText("default button text")).toBeDefined();
  });
});
