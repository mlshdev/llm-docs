> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/textshadow](https://developer.apple.com/documentation/applenewsformat/textshadow)

# TextShadow

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.10+

The object for creating a text shadow.

## Declaration

```
object TextShadow
```

## Properties

- `color` — `Color` (required): The text shadow color.
- `radius` — `number` (required): The shadow’s radius as a value, in points, between `0` and `100`.
  **Minimum:** `0`  
  **Maximum:** `100`
- `offset` — `TextShadowOffset`: The shadow’s offset.
- `opacity` — `float`: The opacity of the shadow as a value between `0` and `1`.
  **Default:** `1`  
  **Minimum:** `0`  
  **Maximum:** `1`

<a id="Discussion"></a>

## Discussion

Use a `TextShadow` object to define a shadow that Apple News can apply to characters as part of a [TextStyle](textstyle.md).

<a id="Example"></a>

### Example

```json
{
  "componentTextStyles": {
    "exampleStyle": {
      …
      "textShadow": {
        "radius": 5,
        "opacity": 0.7,
        "color": "#333",
        "offset": {
          "x": -2,
          "y": 2
        }
      },
      "fontSize": 30
    }
  }
}
```

## See Also

### Text Effects

- [TextShadowOffset](textshadowoffset.md): The object for setting an offset value to use with a text shadow.
- [TextStrokeStyle](textstrokestyle.md): The object for defining the stroke to use for an outline on text.
- [TextDecoration](textdecoration.md): The object for defining color for text underline or strikethrough.
