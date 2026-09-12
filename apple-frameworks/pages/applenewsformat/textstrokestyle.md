> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/textstrokestyle](https://developer.apple.com/documentation/applenewsformat/textstrokestyle)

# TextStrokeStyle

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The object for defining the stroke to use for an outline on text.

## Declaration

```
object TextStrokeStyle
```

## Properties

- `color` — `Color`: The stroke color.
- `width` — `integer`: Width of the stroke as a percentage relative to the font size.
  **Default:** `3`  
  **Minimum:** `0`

<a id="Discussion"></a>

## Discussion

Use the `TextStrokeStyle` object to define a text outline.

You can use this object in [TextStyle](textstyle.md) and [ComponentTextStyle](componenttextstyle.md).

<a id="Example"></a>

### Example

```json
{
  "componentTextStyles": {
    "exampleStyle": {
      …
      "stroke": {
        "color": "#000",
        "width": 3
      },
      "textColor": "#FFF",
      "fontSize": 30
    }
  }
}
```

## See Also

### Text Effects

- [TextShadow](textshadow.md): The object for creating a text shadow.
- [TextShadowOffset](textshadowoffset.md): The object for setting an offset value to use with a text shadow.
- [TextDecoration](textdecoration.md): The object for defining color for text underline or strikethrough.
