> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/componentshadow](https://developer.apple.com/documentation/applenewsformat/componentshadow)

# ComponentShadow

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.10+

The object for creating a component shadow.

## Declaration

```
object ComponentShadow
```

## Properties

- `color` — `Color` (required): The component shadow color.
- `radius` — `(SupportedUnits | number)` (required): The shadow’s radius.
  **Default:** `0`  
  **Allowed types:** `SupportedUnits`, `number`
- `offset` — `ComponentShadowOffset`: The shadow’s offset.
- `opacity` — `float`: The opacity of the shadow as a value between `0` and `1`.
  **Default:** `1`  
  **Minimum:** `0`  
  **Maximum:** `1`

<a id="Discussion"></a>

## Discussion

Use a `ComponentShadow` object to define a shadow that you can apply to components as part of [ComponentStyle](componentstyle.md).

<a id="Example"></a>

### Example

```json
{
  "componentStyles": {
    "exampleStyle": {
      "backgroundColor": "#FFF",
      "shadow": {
        "color": "#33333350",
        "opacity": 0.33,
        "radius": "10cw",
        "offset": {
          "x": 2,
          "y": "10cw"
        }
      }
    }
  }
}
```

## See Also

### Component Effects

- [ComponentShadowOffset](componentshadowoffset.md): The object for setting an offset value to use with a component shadow.
