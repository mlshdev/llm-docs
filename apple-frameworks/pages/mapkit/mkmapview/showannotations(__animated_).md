> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/showannotations(_:animated:)](https://developer.apple.com/documentation/mapkit/mkmapview/showannotations(_:animated:))

# showAnnotations(\_:animated:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Sets the visible region so that the map displays the specified annotations.

## Declaration

```swift
func showAnnotations(_ annotations: [any MKAnnotation], animated: Bool)
```

## Parameters

- `annotations`: The annotations that you want to be visible on the map.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the map view to animate the region change, or [false](https://developer.apple.com/documentation/swift/false) if you want the map to display the new region immediately without animations.

<a id="Discussion"></a>

## Discussion

Calling this method updates the value in the [region](region.md) property, and potentially other properties, to reflect the new map region.

## See Also

### Manipulating the visible portion of the map

- [region](region.md): The area the map view displays.
- [setRegion(\_:animated:)](setregion%28__animated_%29.md): Changes the currently visible region, and optionally animates the change.
- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [setCenter(\_:animated:)](setcenter%28__animated_%29.md): Changes the center coordinate of the map, and optionally animates the change.
- [visibleMapRect](visiblemaprect.md): The area visible in the map view.
- [setVisibleMapRect(\_:animated:)](setvisiblemaprect%28__animated_%29.md): Changes the currently visible portion of the map, and optionally animates the change.
- [setVisibleMapRect(\_:edgePadding:animated:)](setvisiblemaprect%28__edgepadding_animated_%29.md): Changes the currently visible portion of the map, allowing you to specify additional space around the edges.

# showAnnotations:animated: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Sets the visible region so that the map displays the specified annotations.

## Declaration

```objectivec
- (void) showAnnotations:(NSArray<id<MKAnnotation>> *) annotations animated:(BOOL) animated;
```

## Parameters

- `annotations`: The annotations that you want to be visible on the map.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the map view to animate the region change, or [false](https://developer.apple.com/documentation/swift/false) if you want the map to display the new region immediately without animations.

<a id="Discussion"></a>

## Discussion

Calling this method updates the value in the [region](region.md) property, and potentially other properties, to reflect the new map region.

## See Also

### Manipulating the visible portion of the map

- [region](region.md): The area the map view displays.
- [setRegion:animated:](setregion%28__animated_%29.md): Changes the currently visible region, and optionally animates the change.
- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [setCenterCoordinate:animated:](setcenter%28__animated_%29.md): Changes the center coordinate of the map, and optionally animates the change.
- [visibleMapRect](visiblemaprect.md): The area visible in the map view.
- [setVisibleMapRect:animated:](setvisiblemaprect%28__animated_%29.md): Changes the currently visible portion of the map, and optionally animates the change.
- [setVisibleMapRect:edgePadding:animated:](setvisiblemaprect%28__edgepadding_animated_%29.md): Changes the currently visible portion of the map, allowing you to specify additional space around the edges.
