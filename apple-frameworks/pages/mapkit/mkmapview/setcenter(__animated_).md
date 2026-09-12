> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/setcenter(_:animated:)](https://developer.apple.com/documentation/mapkit/mkmapview/setcenter(_:animated:))

# setCenter(\_:animated:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Changes the center coordinate of the map, and optionally animates the change.

## Declaration

```swift
func setCenter(_ coordinate: CLLocationCoordinate2D, animated: Bool)
```

## Parameters

- `coordinate`: The new center coordinate for the map.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the map view to scroll to the new location or [false](https://developer.apple.com/documentation/swift/false) if you want the map to display the new location immediately.

<a id="Discussion"></a>

## Discussion

Changing the center coordinate centers the map on the new coordinate without changing the current zoom level. It also updates the value in the [region](region.md) property to reflect the new center coordinate and the new span values needed to maintain the current zoom level.

## See Also

### Manipulating the visible portion of the map

- [region](region.md): The area the map view displays.
- [setRegion(\_:animated:)](setregion%28__animated_%29.md): Changes the currently visible region, and optionally animates the change.
- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [showAnnotations(\_:animated:)](showannotations%28__animated_%29.md): Sets the visible region so that the map displays the specified annotations.
- [visibleMapRect](visiblemaprect.md): The area visible in the map view.
- [setVisibleMapRect(\_:animated:)](setvisiblemaprect%28__animated_%29.md): Changes the currently visible portion of the map, and optionally animates the change.
- [setVisibleMapRect(\_:edgePadding:animated:)](setvisiblemaprect%28__edgepadding_animated_%29.md): Changes the currently visible portion of the map, allowing you to specify additional space around the edges.

# setCenterCoordinate:animated: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Changes the center coordinate of the map, and optionally animates the change.

## Declaration

```objectivec
- (void) setCenterCoordinate:(CLLocationCoordinate2D) coordinate animated:(BOOL) animated;
```

## Parameters

- `coordinate`: The new center coordinate for the map.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the map view to scroll to the new location or [false](https://developer.apple.com/documentation/swift/false) if you want the map to display the new location immediately.

<a id="Discussion"></a>

## Discussion

Changing the center coordinate centers the map on the new coordinate without changing the current zoom level. It also updates the value in the [region](region.md) property to reflect the new center coordinate and the new span values needed to maintain the current zoom level.

## See Also

### Manipulating the visible portion of the map

- [region](region.md): The area the map view displays.
- [setRegion:animated:](setregion%28__animated_%29.md): Changes the currently visible region, and optionally animates the change.
- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [showAnnotations:animated:](showannotations%28__animated_%29.md): Sets the visible region so that the map displays the specified annotations.
- [visibleMapRect](visiblemaprect.md): The area visible in the map view.
- [setVisibleMapRect:animated:](setvisiblemaprect%28__animated_%29.md): Changes the currently visible portion of the map, and optionally animates the change.
- [setVisibleMapRect:edgePadding:animated:](setvisiblemaprect%28__edgepadding_animated_%29.md): Changes the currently visible portion of the map, allowing you to specify additional space around the edges.
