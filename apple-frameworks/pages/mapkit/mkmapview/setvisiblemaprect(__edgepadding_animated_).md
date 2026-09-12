> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/setvisiblemaprect(_:edgepadding:animated:)](https://developer.apple.com/documentation/mapkit/mkmapview/setvisiblemaprect(_:edgepadding:animated:))

# setVisibleMapRect(\_:edgePadding:animated:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Changes the currently visible portion of the map, allowing you to specify additional space around the edges.

## Declaration

```swift
func setVisibleMapRect(_ mapRect: MKMapRect, edgePadding insets: UIEdgeInsets, animated animate: Bool)
```

```swift
func setVisibleMapRect(_ mapRect: MKMapRect, edgePadding insets: NSEdgeInsets, animated animate: Bool)
```

## Parameters

- `mapRect`: The map rectangle to make visible in the map view.
- `insets`: The amount of additional space (measured in screen points) to make visible around the specified rectangle.
- `animate`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the map view to animate the transition to the new map rectangle or [false](https://developer.apple.com/documentation/swift/false) if you want the map to center on the specified rectangle immediately.

## See Also

### Manipulating the visible portion of the map

- [region](region.md): The area the map view displays.
- [setRegion(\_:animated:)](setregion%28__animated_%29.md): Changes the currently visible region, and optionally animates the change.
- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [setCenter(\_:animated:)](setcenter%28__animated_%29.md): Changes the center coordinate of the map, and optionally animates the change.
- [showAnnotations(\_:animated:)](showannotations%28__animated_%29.md): Sets the visible region so that the map displays the specified annotations.
- [visibleMapRect](visiblemaprect.md): The area visible in the map view.
- [setVisibleMapRect(\_:animated:)](setvisiblemaprect%28__animated_%29.md): Changes the currently visible portion of the map, and optionally animates the change.

# setVisibleMapRect:edgePadding:animated: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Changes the currently visible portion of the map, allowing you to specify additional space around the edges.

## Declaration

```objectivec
- (void) setVisibleMapRect:(MKMapRect) mapRect edgePadding:(UIEdgeInsets) insets animated:(BOOL) animate;
```

```objectivec
- (void) setVisibleMapRect:(MKMapRect) mapRect edgePadding:(NSEdgeInsets) insets animated:(BOOL) animate;
```

## Parameters

- `mapRect`: The map rectangle to make visible in the map view.
- `insets`: The amount of additional space (measured in screen points) to make visible around the specified rectangle.
- `animate`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the map view to animate the transition to the new map rectangle or [false](https://developer.apple.com/documentation/swift/false) if you want the map to center on the specified rectangle immediately.

## See Also

### Manipulating the visible portion of the map

- [region](region.md): The area the map view displays.
- [setRegion:animated:](setregion%28__animated_%29.md): Changes the currently visible region, and optionally animates the change.
- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [setCenterCoordinate:animated:](setcenter%28__animated_%29.md): Changes the center coordinate of the map, and optionally animates the change.
- [showAnnotations:animated:](showannotations%28__animated_%29.md): Sets the visible region so that the map displays the specified annotations.
- [visibleMapRect](visiblemaprect.md): The area visible in the map view.
- [setVisibleMapRect:animated:](setvisiblemaprect%28__animated_%29.md): Changes the currently visible portion of the map, and optionally animates the change.
