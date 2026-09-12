> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/linegradient/linegradientconstructor](https://developer.apple.com/documentation/mapkitjs/linegradient/linegradientconstructor)

# new LineGradient(colorStops)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.45+

Creates a style that renders a gradient along the length of a line.

## Declaration

```
constructor(colorStops?: Record<number, string>);
```

## Parameters

- `options`: A JavaScript object with unit distance values as keys with matched CSS colors.

<a id="Discussion"></a>

## Discussion

The unit distance keys must be a number between `0` and `1`. A value of `0` represents the beginning of the polyline and a value of `1` represents the end. The associated values are CSS colors.

The following example creates a new gradient that progresses from `blue` at the start of the line to `red` at the end:

```javascript
overlay.style.lineGradient = new mapkit.LineGradient({
    0: "blue",
    1: "red"
});
```

If the start or end of the line doesn’t have a defined color, the gradient uses the style’s [strokeColor](../style/strokecolor.md) as a default.

You can extend gradients programatically with [addColorStop()](addcolorstop.md) and [addColorStopAtIndex()](addcolorstopatindex.md).

## See Also

### Creating a Line Gradient

- [addColorStop()](addcolorstop.md): Adds a color transition point to the gradient.
- [addColorStopAtIndex()](addcolorstopatindex.md): Adds a color transition at the index point in the list of points within a polyline.
