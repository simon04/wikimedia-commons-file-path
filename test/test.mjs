import assert from "node:assert/strict";
import { describe, it } from "node:test";
import getFilePath from "../index.ts";

describe("wikimedia-commons-file-path", () => {
  it("should compute the original file path w/ File: ", () => {
    assert.equal(
      getFilePath("File:Commons-logo.svg"),
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Commons-logo.svg",
    );
  });
  it("should compute the original file path w/o File: prefix", () => {
    assert.equal(
      getFilePath("Commons-logo.svg"),
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Commons-logo.svg",
    );
  });
  it("should compute a thumbnail file path", () => {
    assert.equal(
      getFilePath("File:Innsbruck.jpg", 500),
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Innsbruck.jpg/500px-Innsbruck.jpg",
    );
  });
  it("should compute a thumbnail file path matching wgThumbnailSteps", () => {
    assert.equal(
      getFilePath("File:Innsbruck.jpg", 360),
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Innsbruck.jpg/500px-Innsbruck.jpg",
    );
    assert.equal(
      getFilePath("File:Innsbruck.jpg", 640),
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Innsbruck.jpg/960px-Innsbruck.jpg",
    );
    assert.equal(
      getFilePath("File:Innsbruck.jpg", 5500),
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Innsbruck.jpg",
    );
  });
  it("should compute a PNG thumbnail file path for SVG file", () => {
    assert.equal(
      getFilePath("File:Commons-logo.svg", 500),
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/500px-Commons-logo.svg.png",
    );
  });
  it("should compute a JPG thumbnail file path for TIF file", () => {
    assert.equal(
      getFilePath("File:BassersdorffSwissair-19780725i.tif", 960),
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/BassersdorffSwissair-19780725i.tif/960px-BassersdorffSwissair-19780725i.tif.jpg",
    );
  });
});
