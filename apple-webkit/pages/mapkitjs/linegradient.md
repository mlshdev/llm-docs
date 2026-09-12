> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/linegradient](https://developer.apple.com/documentation/mapkitjs/linegradient)

# LineGradient

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.45+

A line that displays with a gradient along the length of the line.

## Declaration

```
class LineGradient
```

## Mentioned In

- [MapKit JS 5](mapkit-js-5.md)

<a id="overview"></a>

## Overview

Use [LineGradient](linegradient.md) with a [PolylineOverlay](polylineoverlay.md) to show a gradient along a route or path. You can also use it to provide additional information about locations along the path, for example, the running pace along a route.

## Topics

### Creating a Line Gradient

- [LineGradient()](linegradient/linegradientconstructor.md): Creates a style that renders a gradient along the length of a line.
- [addColorStop()](linegradient/addcolorstop.md): Adds a color transition point to the gradient.
- [addColorStopAtIndex()](linegradient/addcolorstopatindex.md): Adds a color transition at the index point in the list of points within a polyline.

### Instance Methods

- [toString()](linegradient/tostring.md): Returns a string representation of the line gradient object.

## See Also

### Styling lines

- [lineCap](style/linecap.md): The style to use when drawing line endings.
- [lineDash](style/linedash.md): An array of line and gap lengths for creating a dashed line.
- [lineDashOffset](style/linedashoffset.md): The number of CSS pixels to use as an offset when drawing a line’s dash pattern.
- [lineJoin](style/linejoin.md): The corner style to apply when joining line segments.
- [lineWidth](style/linewidth.md): The width of a line’s stroke, in CSS pixels.
- [lineGradient](style/linegradient.md): The gradient to apply along the line.
