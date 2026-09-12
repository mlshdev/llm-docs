> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/topoverlayatpoint](https://developer.apple.com/documentation/mapkitjs/map/topoverlayatpoint)

# topOverlayAtPoint(point)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Returns the topmost overlay at a given point on the webpage.

## Declaration

```
topOverlayAtPoint(point: DOMPoint): Overlay | null;
```

## Parameters

- `point`: A point in the page’s coordinate system, such as `new DOMPoint(event.pageX, event.pageY)` when handling a mouse event.

<a id="return-value"></a>

## Return Value

Returns the topmost overlay or `null`.

<a id="Discussion"></a>

## Discussion

If there are multiple overlays at a point, MapKit JS returns the overlay closest to the foreground. If the user selects an overlay, MapKit JS draws user-selected overlays on top of all other overlays. So when a user selects an overlay, MapKit JS returns that overlay.

The following code example identifies the topmost overlay during a mouse move event:

```javascript
document.querySelector(".mk-map-view").addEventListener("mousemove", function(event) {
    const targetOverlay = map.topOverlayAtPoint(new DOMPoint(event.pageX, event.pageY));
    // Add special styling to the overlay to indicate its hover state or whatever you want.
    // ...
});

```

## See Also

### Adding and removing overlays

- [overlays](overlays.md): An array of all of the map’s overlays.
- [selectedOverlay](selectedoverlay.md): The selected overlay on the map.
- [overlaysAtPoint()](overlaysatpoint.md): Returns an array of overlays at a given point on the webpage.
- [addOverlay()](addoverlay.md): Adds an overlay to the map.
- [addOverlays()](addoverlays.md): Adds multiple overlays to the map.
- [removeOverlay()](removeoverlay.md): Removes an overlay from the map.
- [removeOverlays()](removeoverlays.md): Removes multiple overlays from the map.
