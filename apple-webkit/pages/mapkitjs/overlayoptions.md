> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/overlayoptions](https://developer.apple.com/documentation/mapkitjs/overlayoptions)

# OverlayOptions

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface  
**Availability:** MapKit JS 5.0+

A dictionary of options that determines an overlay’s data, and indicates whether it’s visible, in an enabled state, and in a selected state.

## Declaration

```
interface OverlayOptions
```

<a id="overview"></a>

## Overview

Use [OverlayOptions](overlayoptions.md) to set the initial state of your overlay and provide the data MapKit JS uses to render it.

## Topics

### Overlay options

- [data](overlayoptions/data.md): Custom data to associate with the overlay.
- [enabled](overlayoptions/enabled.md): A Boolean value that determines whether the overlay responds to user interaction.
- [selected](overlayoptions/selected.md): A Boolean value that indicates whether the overlay is in a selected state.
- [visible](overlayoptions/visible.md): A Boolean value that determines if an overlay is visible.
- [style](overlayoptions/style.md): An object literal of style properties.

## See Also

### Overlays

- [Adding interactivity to overlays](adding-interactivity-to-overlays.md): Configure and respond to overlays to make them interactive.
- [Overlay](overlay.md): An abstract base object that defines the methods and properties for map overlays.
- [Style](style.md): A set of observable style properties for overlays, including the color and opacity of strokes and fills, and line styles.
- [CircleOverlay](circleoverlay.md): A circular overlay with a configurable radius that centers on a specific geographic coordinate.
- [PolylineOverlay](polylineoverlay.md): An overlay of connected line segments that don’t form a closed shape.
- [PolygonOverlay](polygonoverlay.md): An overlay consisting of one or more points that forms a closed shape.
- [TileOverlay](tileoverlay.md): An overlay that covers an area of the map with bitmapped tiles.
- [TileOverlayUrlTemplate](tileoverlayurltemplate.md): A type that specifies the URL template for a tile overlay.
