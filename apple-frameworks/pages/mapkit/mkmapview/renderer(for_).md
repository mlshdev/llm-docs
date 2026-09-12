> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/renderer(for:)](https://developer.apple.com/documentation/mapkit/mkmapview/renderer(for:))

# renderer(for:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns the renderer object for drawing the contents of the specified overlay object.

## Declaration

```swift
func renderer(for overlay: any MKOverlay) -> MKOverlayRenderer?
```

## Parameters

- `overlay`: The overlay object whose renderer you want.

<a id="return-value"></a>

## Return Value

The renderer object in use for the specified overlay or `nil` if the overlay is not onscreen.

<a id="Discussion"></a>

## Discussion

This method returns the renderer object that your map delegate provided in its [mapView(\_:rendererFor:)](../mkmapviewdelegate/mapview%28__rendererfor_%29.md) method.

## See Also

### Accessing overlays

- [overlays](overlays.md): The overlay objects associated with the map view.
- [overlays(in:)](overlays%28in_%29.md): Returns overlay objects in the specified level of the map.
- [MKOverlayLevel](../mkoverlaylevel.md): Constants that indicate the position of overlays relative to other content.
- [view(for:)](view%28for_%29-38z60.md): Deprecated. Returns the view associated with the overlay object, if any.

# rendererForOverlay: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns the renderer object for drawing the contents of the specified overlay object.

## Declaration

```objectivec
- (MKOverlayRenderer *) rendererForOverlay:(id<MKOverlay>) overlay;
```

## Parameters

- `overlay`: The overlay object whose renderer you want.

<a id="return-value"></a>

## Return Value

The renderer object in use for the specified overlay or `nil` if the overlay is not onscreen.

<a id="Discussion"></a>

## Discussion

This method returns the renderer object that your map delegate provided in its [mapView:rendererForOverlay:](../mkmapviewdelegate/mapview%28__rendererfor_%29.md) method.

## See Also

### Accessing overlays

- [overlays](overlays.md): The overlay objects associated with the map view.
- [overlaysInLevel:](overlays%28in_%29.md): Returns overlay objects in the specified level of the map.
- [MKOverlayLevel](../mkoverlaylevel.md): Constants that indicate the position of overlays relative to other content.
- [viewForOverlay:](view%28for_%29-38z60.md): Deprecated. Returns the view associated with the overlay object, if any.
