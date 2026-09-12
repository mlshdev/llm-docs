> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/linegradient/addcolorstopatindex](https://developer.apple.com/documentation/mapkitjs/linegradient/addcolorstopatindex)

# addColorStopAtIndex(index, color)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.45+

Adds a color transition at the index point in the list of points within a polyline.

## Declaration

```
addColorStopAtIndex(index: number, color: string): void;
```

## Parameters

- `index`: A valid index into a polyline’s [points](../polylineoverlay/points.md).
- `color`: The CSS color at the index point.

<a id="Discussion"></a>

## Discussion

If the index is invalid, MapKit JS logs a warning to the console, but doesn’t change the object.

## See Also

### Creating a Line Gradient

- [LineGradient()](linegradientconstructor.md): Creates a style that renders a gradient along the length of a line.
- [addColorStop()](addcolorstop.md): Adds a color transition point to the gradient.
