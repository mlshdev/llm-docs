> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/addoverlays](https://developer.apple.com/documentation/mapkitjs/map/addoverlays)

# addOverlays(overlays)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Adds multiple overlays to the map.

## Declaration

```
addOverlays(overlays: Overlay[]): Overlay[];
```

## Parameters

- `overlays`: An array of overlays to add.

<a id="return-value"></a>

## Return Value

Returns the array of overlays.

<a id="Discussion"></a>

## Discussion

MapKit JS adds the overlays to the end of the map’s [overlays](overlays.md) array.

## See Also

### Adding and removing overlays

- [overlays](overlays.md): An array of all of the map’s overlays.
- [selectedOverlay](selectedoverlay.md): The selected overlay on the map.
- [overlaysAtPoint()](overlaysatpoint.md): Returns an array of overlays at a given point on the webpage.
- [addOverlay()](addoverlay.md): Adds an overlay to the map.
- [removeOverlay()](removeoverlay.md): Removes an overlay from the map.
- [removeOverlays()](removeoverlays.md): Removes multiple overlays from the map.
- [topOverlayAtPoint()](topoverlayatpoint.md): Returns the topmost overlay at a given point on the webpage.
