> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/strokestyle](https://developer.apple.com/documentation/applenewsformat/strokestyle)

# StrokeStyle

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The object for defining the color, width, and style of a border or divider.

## Declaration

```
object StrokeStyle
```

## Properties

- `color` — `Color`: The stroke color.
- `style` — `string`: Defines the style of the stroke. Valid values:

  - `solid` (default): A solid stroke \_\__\__\__
  - `dashed`: A dashed stroke – – – – –
  - `dotted`: A dotted stroke ••••••••  
  **Default:** `solid`  
  **Allowed values:** `solid`, `dashed`, `dotted`
- `width` — `(SupportedUnits | number)`: The width of the stroke line that can be either a number in points, or a string according to [Specifying Measurements for Components](../applenews/specifying-measurements-for-components.md).
  **Default:** `1`  
  **Allowed types:** `SupportedUnits`, `number`

<a id="Discussion"></a>

## Discussion

You can specify the color, width, and style (solid, dashed, or dotted) of a stroke. Such strokes have many uses, including component borders and divider components.

You can use this object in [Border](border.md), [Divider](divider.md), [TableRowStyle](tablerowstyle.md), [TableColumnStyle](tablecolumnstyle.md), [ConditionalTableRowStyle](conditionaltablerowstyle.md), and [ConditionalTableColumnStyle](conditionaltablecolumnstyle.md).

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "divider",
      "stroke": {
        "color": "black",
        "width": 1
      }
    }
  ]
}
```

## See Also

### Related Documentation

- [Adding a Divider](../applenews/adding-a-divider.md): Create a horizontal, styled divider that extends to the right edge of the display.

### Component Style Basics

- [Defining a Component Style](../applenews/defining-a-component-style.md): Set style options for the components in your article.
- [ComponentStyle](componentstyle.md): The object for setting style properties for components, including background color and fill, borders, and table styles.
- [CornerMask](cornermask.md): The object for creating rounded corners.
- [Border](border.md): The object for setting borders for component sides or tables.
