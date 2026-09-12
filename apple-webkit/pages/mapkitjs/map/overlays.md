> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/overlays](https://developer.apple.com/documentation/mapkitjs/map/overlays)

# overlays

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

An array of all of the map’s overlays.

## Declaration

```
get overlays(): Overlay[];
set overlays(overlays: Overlay[]);
```

<a id="Discussion"></a>

## Discussion

You can set this property to a new (possibly empty) array of overlays to update or delete all the overlays on the map.

## See Also

### Adding and removing overlays

- [selectedOverlay](selectedoverlay.md): The selected overlay on the map.
- [overlaysAtPoint()](overlaysatpoint.md): Returns an array of overlays at a given point on the webpage.
- [addOverlay()](addoverlay.md): Adds an overlay to the map.
- [addOverlays()](addoverlays.md): Adds multiple overlays to the map.
- [removeOverlay()](removeoverlay.md): Removes an overlay from the map.
- [removeOverlays()](removeoverlays.md): Removes multiple overlays from the map.
- [topOverlayAtPoint()](topoverlayatpoint.md): Returns the topmost overlay at a given point on the webpage.
