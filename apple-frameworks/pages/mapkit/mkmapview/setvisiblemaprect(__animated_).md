> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/setvisiblemaprect(_:animated:)](https://developer.apple.com/documentation/mapkit/mkmapview/setvisiblemaprect(_:animated:))

# setVisibleMapRect(\_:animated:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Changes the currently visible portion of the map, and optionally animates the change.

## Declaration

```swift
func setVisibleMapRect(_ mapRect: MKMapRect, animated animate: Bool)
```

## Parameters

- `mapRect`: The map rectangle to make visible in the map view.
- `animate`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the map view to animate the transition to the new map rectangle or [false](https://developer.apple.com/documentation/swift/false) if you want the map to center on the specified rectangle immediately.

## See Also

### Manipulating the visible portion of the map

- [region](region.md): The area the map view displays.
- [setRegion(\_:animated:)](setregion%28__animated_%29.md): Changes the currently visible region, and optionally animates the change.
- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [setCenter(\_:animated:)](setcenter%28__animated_%29.md): Changes the center coordinate of the map, and optionally animates the change.
- [showAnnotations(\_:animated:)](showannotations%28__animated_%29.md): Sets the visible region so that the map displays the specified annotations.
- [visibleMapRect](visiblemaprect.md): The area visible in the map view.
- [setVisibleMapRect(\_:edgePadding:animated:)](setvisiblemaprect%28__edgepadding_animated_%29.md): Changes the currently visible portion of the map, allowing you to specify additional space around the edges.

# setVisibleMapRect:animated: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Changes the currently visible portion of the map, and optionally animates the change.

## Declaration

```objectivec
- (void) setVisibleMapRect:(MKMapRect) mapRect animated:(BOOL) animate;
```

## Parameters

- `mapRect`: The map rectangle to make visible in the map view.
- `animate`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the map view to animate the transition to the new map rectangle or [false](https://developer.apple.com/documentation/swift/false) if you want the map to center on the specified rectangle immediately.

## See Also

### Manipulating the visible portion of the map

- [region](region.md): The area the map view displays.
- [setRegion:animated:](setregion%28__animated_%29.md): Changes the currently visible region, and optionally animates the change.
- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [setCenterCoordinate:animated:](setcenter%28__animated_%29.md): Changes the center coordinate of the map, and optionally animates the change.
- [showAnnotations:animated:](showannotations%28__animated_%29.md): Sets the visible region so that the map displays the specified annotations.
- [visibleMapRect](visiblemaprect.md): The area visible in the map view.
- [setVisibleMapRect:edgePadding:animated:](setvisiblemaprect%28__edgepadding_animated_%29.md): Changes the currently visible portion of the map, allowing you to specify additional space around the edges.
