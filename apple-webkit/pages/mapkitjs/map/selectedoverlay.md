> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/selectedoverlay](https://developer.apple.com/documentation/mapkitjs/map/selectedoverlay)

# selectedOverlay

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The selected overlay on the map.

## Declaration

```
get selectedOverlay(): Overlay | null;
set selectedOverlay(overlay: Overlay | null);
```

<a id="Discussion"></a>

## Discussion

To deselect any selected overlay, set this property to `null`.

To select an overlay that’s already part of the map, set this property to the desired overlay.

When MapKit JS removes the selected overlay from the map (as an effect of [removeOverlay()](removeoverlay.md), [removeOverlays()](removeoverlays.md), or setting a new set of overlays with the [overlays](overlays.md) property), MapKit JS deselects the overlay before removing it.

## See Also

### Adding and removing overlays

- [overlays](overlays.md): An array of all of the map’s overlays.
- [overlaysAtPoint()](overlaysatpoint.md): Returns an array of overlays at a given point on the webpage.
- [addOverlay()](addoverlay.md): Adds an overlay to the map.
- [addOverlays()](addoverlays.md): Adds multiple overlays to the map.
- [removeOverlay()](removeoverlay.md): Removes an overlay from the map.
- [removeOverlays()](removeoverlays.md): Removes multiple overlays from the map.
- [topOverlayAtPoint()](topoverlayatpoint.md): Returns the topmost overlay at a given point on the webpage.
