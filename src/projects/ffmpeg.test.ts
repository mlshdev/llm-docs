import { expect, test } from "bun:test";
import { convertTexinfo } from "./ffmpeg.ts";

test("converts FFmpeg Texinfo structure and inline commands", () => {
  expect(
    convertTexinfo(
      [
        "@chapter Usage",
        "Run @command{ffmpeg} with @option{-i} @file{input.mp4}.",
        "@itemize",
        "@item First",
        "@end itemize",
        "@example",
        "ffmpeg -i input.mp4 output.mkv",
        "@end example",
      ].join("\n"),
      "doc/example.texi",
    ),
  ).toBe(
    [
      "# Usage",
      "Run `ffmpeg` with `-i` `input.mp4`.",
      "- First",
      "```text",
      "ffmpeg -i input.mp4 output.mkv",
      "```",
      "",
    ].join("\n"),
  );
});

test("rejects unsupported FFmpeg Texinfo commands", () => {
  expect(() => convertTexinfo("@unknown value", "doc/example.texi")).toThrow(
    "Unsupported FFmpeg Texinfo command @unknown",
  );
});
