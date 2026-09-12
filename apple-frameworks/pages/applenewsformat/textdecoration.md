> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/textdecoration](https://developer.apple.com/documentation/applenewsformat/textdecoration)

# TextDecoration

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The object for defining color for text underline or strikethrough.

## Declaration

```
object TextDecoration
```

## Properties

- `color` — `Color`: Color of the stroke. If you omit this property, Apple News uses the content’s stroke color from the text color  for underline or strikethrough.

<a id="Discussion"></a>

## Discussion

Use the `TextDecoration` object to define a stroke for strikethrough or underline.

You can use this object in [TextStyle](textstyle.md) and [ComponentTextStyle](componenttextstyle.md).

<a id="Example"></a>

### Example

```json
{
  "componentTextStyles": {
    "exampleStyle": {
      …
      "strikethrough": {
        "color": "#FFC800"
      },
      "underline": {
        "color": "#FFC800"
      }
    }
  }
}
```

## See Also

### Text Effects

- [TextShadow](textshadow.md): The object for creating a text shadow.
- [TextShadowOffset](textshadowoffset.md): The object for setting an offset value to use with a text shadow.
- [TextStrokeStyle](textstrokestyle.md): The object for defining the stroke to use for an outline on text.
