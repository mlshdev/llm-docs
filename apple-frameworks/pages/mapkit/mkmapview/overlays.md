> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/overlays](https://developer.apple.com/documentation/mapkit/mkmapview/overlays)

# overlays (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The overlay objects associated with the map view.

## Declaration

```swift
var overlays: [any MKOverlay] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the union of all overlays at the different levels of the map. The objects in this array adopt the [MKOverlay](../mkoverlay.md) protocol. If the map view has no associated no overlays, the value of this property is an empty array.

The order of the objects in this array doesn’t necessarily reflect their visual order on the map.

## See Also

### Accessing overlays

- [overlays(in:)](overlays%28in_%29.md): Returns overlay objects in the specified level of the map.
- [renderer(for:)](renderer%28for_%29.md): Returns the renderer object for drawing the contents of the specified overlay object.
- [MKOverlayLevel](../mkoverlaylevel.md): Constants that indicate the position of overlays relative to other content.
- [view(for:)](view%28for_%29-38z60.md): Deprecated. Returns the view associated with the overlay object, if any.

# overlays (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The overlay objects associated with the map view.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<id<MKOverlay>> * overlays;
```

<a id="Discussion"></a>

## Discussion

This property contains the union of all overlays at the different levels of the map. The objects in this array adopt the [MKOverlay](../mkoverlay.md) protocol. If the map view has no associated no overlays, the value of this property is an empty array.

The order of the objects in this array doesn’t necessarily reflect their visual order on the map.

## See Also

### Accessing overlays

- [overlaysInLevel:](overlays%28in_%29.md): Returns overlay objects in the specified level of the map.
- [rendererForOverlay:](renderer%28for_%29.md): Returns the renderer object for drawing the contents of the specified overlay object.
- [MKOverlayLevel](../mkoverlaylevel.md): Constants that indicate the position of overlays relative to other content.
- [viewForOverlay:](view%28for_%29-38z60.md): Deprecated. Returns the view associated with the overlay object, if any.
