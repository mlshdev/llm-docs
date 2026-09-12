> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasrenderingcontext2d/1631811-textalign](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d/1631811-textalign)

# textAlign

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A string that specifies whether text is left-justified, right-justified, or centered.

## Declaration

```
attribute DOMString textAlign;
```

<a id="discussion"></a>

## Discussion

Possible values are `start` (default), `end`, `left`, `right`, and `center`. The values `start` and `end` are equivalent to either `left` or `right`, depending on the text direction.

## See Also

### Drawing Text

- [fillText](1634243-filltext.md): Draws a line of text at the specified x,y coordinates, optionally scaled to a specified maximum width.
- [font](1632249-font.md): A string containing font settings, such as the font family, size, and weight.
- [measureText](1631690-measuretext.md): Determines the width of the bounding box required to render the specified text with the current font settings.
- [strokeText](1630188-stroketext.md): Draws a line of text in outline at the specified x,y coordinates, optionally limited to a specified maximum width.
- [textBaseline](1629692-textbaseline.md): A string that specifies how the bounding box aligns vertically relative to the y-coordinate.
