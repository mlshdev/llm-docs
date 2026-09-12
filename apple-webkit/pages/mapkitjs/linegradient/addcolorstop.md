> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/linegradient/addcolorstop](https://developer.apple.com/documentation/mapkitjs/linegradient/addcolorstop)

# addColorStop(offset, color)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.45+

Adds a color transition point to the gradient.

## Declaration

```
addColorStop(offset: number, color: string): void;
```

## Parameters

- `offset`: The unit distance at which to add the color.
- `color`: The CSS color at the transition point.

<a id="Discussion"></a>

## Discussion

If offset is less than `0` or greater than `1`, MapKit JS logs a warning to the console, but doesn’t change the object.

## See Also

### Creating a Line Gradient

- [LineGradient()](linegradientconstructor.md): Creates a style that renders a gradient along the length of a line.
- [addColorStopAtIndex()](addcolorstopatindex.md): Adds a color transition at the index point in the list of points within a polyline.
