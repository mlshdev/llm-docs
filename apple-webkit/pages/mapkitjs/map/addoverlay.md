> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/addoverlay](https://developer.apple.com/documentation/mapkitjs/map/addoverlay)

# addOverlay(overlay)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Adds an overlay to the map.

## Declaration

```
addOverlay(overlay: Overlay): Overlay | null;
```

## Parameters

- `overlay`: The overlay to add.

<a id="return-value"></a>

## Return Value

Returns the overlay.

<a id="Discussion"></a>

## Discussion

MapKit JS adds the overlay to the end of the map’s [overlays](overlays.md) array.

## See Also

### Adding and removing overlays

- [overlays](overlays.md): An array of all of the map’s overlays.
- [selectedOverlay](selectedoverlay.md): The selected overlay on the map.
- [overlaysAtPoint()](overlaysatpoint.md): Returns an array of overlays at a given point on the webpage.
- [addOverlays()](addoverlays.md): Adds multiple overlays to the map.
- [removeOverlay()](removeoverlay.md): Removes an overlay from the map.
- [removeOverlays()](removeoverlays.md): Removes multiple overlays from the map.
- [topOverlayAtPoint()](topoverlayatpoint.md): Returns the topmost overlay at a given point on the webpage.
