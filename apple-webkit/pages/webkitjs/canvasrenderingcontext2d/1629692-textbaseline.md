> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasrenderingcontext2d/1629692-textbaseline](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d/1629692-textbaseline)

# textBaseline

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A string that specifies how the bounding box aligns vertically relative to the y-coordinate.

## Declaration

```
attribute DOMString textBaseline;
```

<a id="discussion"></a>

## Discussion

The y-coordinate of a line of text corresponds to the point on the text glyphs specified by `textBaseline`. Possible values are `top`, `hanging`, `middle`, `alphabetic` (default), `ideographic`, and `bottom`. The position of each value on the text glyphs is illustrated in [Figure 1](1629692-textbaseline.md#1965801).

![Text baseline values](https://docs-assets.developer.apple.com/published/cf294fc724/baselines_2x_5dc481c3-5838-4b65-8e38-df1fedbac7ee.png)

See [textBaseline Constants](textbaseline_constants.md) for descriptions of the constants.

## See Also

### Drawing Text

- [fillText](1634243-filltext.md): Draws a line of text at the specified x,y coordinates, optionally scaled to a specified maximum width.
- [font](1632249-font.md): A string containing font settings, such as the font family, size, and weight.
- [measureText](1631690-measuretext.md): Determines the width of the bounding box required to render the specified text with the current font settings.
- [strokeText](1630188-stroketext.md): Draws a line of text in outline at the specified x,y coordinates, optionally limited to a specified maximum width.
- [textAlign](1631811-textalign.md): A string that specifies whether text is left-justified, right-justified, or centered.
