> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/circleoverlay](https://developer.apple.com/documentation/mapkitjs/circleoverlay)

# CircleOverlay

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

A circular overlay with a configurable radius that centers on a specific geographic coordinate.

## Declaration

```
class CircleOverlay extends Overlay
```

<a id="overview"></a>

## Overview

The circle overlay provides a built-in object for creating circles. MapKit JS defines [CircleOverlay](circleoverlay.md) by a coordinate and a radius (in meters). All [style](overlayoptions/style.md) properties apply to circle overlays except `lineCap`, `lineJoin`, and `fillRule`. MapKit JS ignores properties that don’t apply.

[CircleOverlay](circleoverlay.md) doesn’t implement methods of its own. For more information, see the base object, [Overlay](overlay.md).

The following example uses circle overlays to show the relative population sizes of three cities in the San Francisco Bay Area:

```javascript
const stats = [
    { name: "San Francisco", coordinate: [37.783333, -122.416667], population: 852469 },
    { name: "Oakland", coordinate: [37.804444, -122.270833], population: 390724 },
    { name: "San Jose", coordinate: [37.333333, -121.9], population: 1000536 },
];

const style = new mapkit.Style({
    lineWidth: 2,         // 2 CSS pixels.
    strokeColor: "#999",
    fillColor: "#FFF"
});

const circles = stats.map(function(stat) {
    const coordinate = new mapkit.Coordinate(stat.coordinate[0], stat.coordinate[1]),
        radius = stat.population / 85, // The radius is in meters.
        circle = new mapkit.CircleOverlay(coordinate, radius);
    circle.data = { population: stat.population };
    circle.style = style;
    return circle;
});

map.addOverlays(circles);
```

## Topics

### Creating a circle overlay

- [CircleOverlay()](circleoverlay/circleoverlayconstructor.md): Creates a circle overlay with a center coordinate, radius, and style options.
- [OverlayOptions](overlayoptions.md): A dictionary of options that determines an overlay’s data, and indicates whether it’s visible, in an enabled state, and in a selected state.

### Defining the circle

- [coordinate](circleoverlay/coordinate.md): The coordinate of the circle overlay’s center.
- [radius](circleoverlay/radius.md): The circle overlay’s radius, in meters.

## Relationships

### Inherits From

- [Overlay](overlay.md)

## See Also

### Overlays

- [Adding interactivity to overlays](adding-interactivity-to-overlays.md): Configure and respond to overlays to make them interactive.
- [Overlay](overlay.md): An abstract base object that defines the methods and properties for map overlays.
- [Style](style.md): A set of observable style properties for overlays, including the color and opacity of strokes and fills, and line styles.
- [PolylineOverlay](polylineoverlay.md): An overlay of connected line segments that don’t form a closed shape.
- [PolygonOverlay](polygonoverlay.md): An overlay consisting of one or more points that forms a closed shape.
- [OverlayOptions](overlayoptions.md): A dictionary of options that determines an overlay’s data, and indicates whether it’s visible, in an enabled state, and in a selected state.
- [TileOverlay](tileoverlay.md): An overlay that covers an area of the map with bitmapped tiles.
- [TileOverlayUrlTemplate](tileoverlayurltemplate.md): A type that specifies the URL template for a tile overlay.
