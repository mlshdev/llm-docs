> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/setregion(_:animated:)](https://developer.apple.com/documentation/mapkit/mkmapview/setregion(_:animated:))

# setRegion(\_:animated:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Changes the currently visible region, and optionally animates the change.

## Declaration

```swift
func setRegion(_ region: MKCoordinateRegion, animated: Bool)
```

## Parameters

- `region`: The new region to display in the map view.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the map view to animate the transition to the new region, or [false](https://developer.apple.com/documentation/swift/false) if you want the map to center on the specified region immediately.

<a id="Discussion"></a>

## Discussion

Changing just the center coordinate of the region can still cause the span values to change implicitly. The span values might change because the distances that a span repesents change at different latitudes and longitudes, and the map view may need to adjust the span to account for the new location. If you want to change the center coordinate without changing the zoom level, use the [setCenter(\_:animated:)](setcenter%28__animated_%29.md) instead.

When setting a new region, the map may adjust the value in the `region` parameter so that it fits the visible area of the map precisely. This adjustment ensures that the value in the [region](region.md) property reflects the visible portion of the map. However, it does mean that if you get the value of that property right after calling this method, the returned value may not match the value you set. You can use the [regionThatFits(\_:)](regionthatfits%28__%29.md) method to determine the region that the map sets.

## See Also

### Manipulating the visible portion of the map

- [region](region.md): The area the map view displays.
- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [setCenter(\_:animated:)](setcenter%28__animated_%29.md): Changes the center coordinate of the map, and optionally animates the change.
- [showAnnotations(\_:animated:)](showannotations%28__animated_%29.md): Sets the visible region so that the map displays the specified annotations.
- [visibleMapRect](visiblemaprect.md): The area visible in the map view.
- [setVisibleMapRect(\_:animated:)](setvisiblemaprect%28__animated_%29.md): Changes the currently visible portion of the map, and optionally animates the change.
- [setVisibleMapRect(\_:edgePadding:animated:)](setvisiblemaprect%28__edgepadding_animated_%29.md): Changes the currently visible portion of the map, allowing you to specify additional space around the edges.

# setRegion:animated: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Changes the currently visible region, and optionally animates the change.

## Declaration

```objectivec
- (void) setRegion:(MKCoordinateRegion) region animated:(BOOL) animated;
```

## Parameters

- `region`: The new region to display in the map view.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the map view to animate the transition to the new region, or [false](https://developer.apple.com/documentation/swift/false) if you want the map to center on the specified region immediately.

<a id="Discussion"></a>

## Discussion

Changing just the center coordinate of the region can still cause the span values to change implicitly. The span values might change because the distances that a span repesents change at different latitudes and longitudes, and the map view may need to adjust the span to account for the new location. If you want to change the center coordinate without changing the zoom level, use the [setCenterCoordinate:animated:](setcenter%28__animated_%29.md) instead.

When setting a new region, the map may adjust the value in the `region` parameter so that it fits the visible area of the map precisely. This adjustment ensures that the value in the [region](region.md) property reflects the visible portion of the map. However, it does mean that if you get the value of that property right after calling this method, the returned value may not match the value you set. You can use the [regionThatFits:](regionthatfits%28__%29.md) method to determine the region that the map sets.

## See Also

### Manipulating the visible portion of the map

- [region](region.md): The area the map view displays.
- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [setCenterCoordinate:animated:](setcenter%28__animated_%29.md): Changes the center coordinate of the map, and optionally animates the change.
- [showAnnotations:animated:](showannotations%28__animated_%29.md): Sets the visible region so that the map displays the specified annotations.
- [visibleMapRect](visiblemaprect.md): The area visible in the map view.
- [setVisibleMapRect:animated:](setvisiblemaprect%28__animated_%29.md): Changes the currently visible portion of the map, and optionally animates the change.
- [setVisibleMapRect:edgePadding:animated:](setvisiblemaprect%28__edgepadding_animated_%29.md): Changes the currently visible portion of the map, allowing you to specify additional space around the edges.
