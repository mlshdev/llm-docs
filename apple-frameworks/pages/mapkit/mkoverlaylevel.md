> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaylevel](https://developer.apple.com/documentation/mapkit/mkoverlaylevel)

# MKOverlayLevel (Swift)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 10.0+

Constants that indicate the position of overlays relative to other content.

## Declaration

```swift
enum MKOverlayLevel
```

## Topics

### Constants

- [MKOverlayLevel.aboveRoads](mkoverlaylevel/aboveroads.md): Place the overlay above roadways but below map labels, shields, or point-of-interest icons.
- [MKOverlayLevel.aboveLabels](mkoverlaylevel/abovelabels.md): Place the overlay above map labels, shields, or point-of-interest icons but below annotations and 3D projections of buildings.

### Initializers

- [init(rawValue:)](mkoverlaylevel/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing overlays

- [overlays](mkmapview/overlays.md): The overlay objects associated with the map view.
- [overlays(in:)](mkmapview/overlays%28in_%29.md): Returns overlay objects in the specified level of the map.
- [renderer(for:)](mkmapview/renderer%28for_%29.md): Returns the renderer object for drawing the contents of the specified overlay object.
- [view(for:)](mkmapview/view%28for_%29-38z60.md): Deprecated. Returns the view associated with the overlay object, if any.

# MKOverlayLevel (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 10.0+

Constants that indicate the position of overlays relative to other content.

## Declaration

```objectivec
enum MKOverlayLevel : NSInteger;
```

## Topics

### Constants

- [MKOverlayLevelAboveRoads](mkoverlaylevel/aboveroads.md): Place the overlay above roadways but below map labels, shields, or point-of-interest icons.
- [MKOverlayLevelAboveLabels](mkoverlaylevel/abovelabels.md): Place the overlay above map labels, shields, or point-of-interest icons but below annotations and 3D projections of buildings.

## See Also

### Accessing overlays

- [overlays](mkmapview/overlays.md): The overlay objects associated with the map view.
- [overlaysInLevel:](mkmapview/overlays%28in_%29.md): Returns overlay objects in the specified level of the map.
- [rendererForOverlay:](mkmapview/renderer%28for_%29.md): Returns the renderer object for drawing the contents of the specified overlay object.
- [viewForOverlay:](mkmapview/view%28for_%29-38z60.md): Deprecated. Returns the view associated with the overlay object, if any.
