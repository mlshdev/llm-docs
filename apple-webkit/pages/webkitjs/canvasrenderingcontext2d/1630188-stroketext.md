> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasrenderingcontext2d/1630188-stroketext](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d/1630188-stroketext)

# strokeText

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Draws a line of text in outline at the specified x,y coordinates, optionally limited to a specified maximum width.

## Declaration

```
void strokeText(
    DOMString text, 
    unrestricted float x, 
    unrestricted float y, 
    optional unrestricted float maxWidth
);
```

## Parameters

- `text`: A string containing the text to draw.
- `x`: The x-coordinate of the `textAlign` point (the left edge, right edge, or center of the text).
- `y`: The y-coordinate of the `textBaseline` point.
- `maxWidth`: The maximum width of the string, in pixels. This parameter is optional. If omitted, the string is drawn in the current font style; any text falling outside the canvas clipping region is clipped. If this parameter is provided, and the text would exceed the specified width, the text is scaled down until it fits within the specified width.

<a id="discussion"></a>

## Discussion

The `x`, `y`, and `maxWidth` parameter values are in the canvas’s current coordinate system, subject to the current transformation matrix (rotation, scale, and so on).

## See Also

### Drawing Text

- [fillText](1634243-filltext.md): Draws a line of text at the specified x,y coordinates, optionally scaled to a specified maximum width.
- [font](1632249-font.md): A string containing font settings, such as the font family, size, and weight.
- [measureText](1631690-measuretext.md): Determines the width of the bounding box required to render the specified text with the current font settings.
- [textAlign](1631811-textalign.md): A string that specifies whether text is left-justified, right-justified, or centered.
- [textBaseline](1629692-textbaseline.md): A string that specifies how the bounding box aligns vertically relative to the y-coordinate.
