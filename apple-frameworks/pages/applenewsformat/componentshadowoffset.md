> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/componentshadowoffset](https://developer.apple.com/documentation/applenewsformat/componentshadowoffset)

# ComponentShadowOffset

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.10+

The object for setting an offset value to use with a component shadow.

## Declaration

```
object ComponentShadowOffset
```

## Properties

- `x` — `(SupportedUnits | number)`: The `x` offset, as a value in [SupportedUnits](supportedunits.md). Implementation is device dependent.
  **Allowed types:** `SupportedUnits`, `number`
- `y` — `(SupportedUnits | number)`: The `y` offset, as a value in [SupportedUnits](supportedunits.md). Implementation is device dependent.
  **Allowed types:** `SupportedUnits`, `number`

<a id="Discussion"></a>

## Discussion

Use the `ComponentShadowOffset` object to define an offset. A positive `x` value moves the shadow to the right, and a negative `x` value moves the shadow to the left. A positive `y` value moves the shadow down, and a negative `y` value moves the shadow up.

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

- [ComponentShadow](componentshadow.md): The object for creating a component shadow.
