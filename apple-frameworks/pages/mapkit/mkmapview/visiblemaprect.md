> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/visiblemaprect](https://developer.apple.com/documentation/mapkit/mkmapview/visiblemaprect)

# visibleMapRect (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The area visible in the map view.

## Declaration

```swift
var visibleMapRect: MKMapRect { get set }
```

<a id="Discussion"></a>

## Discussion

This property represents the same basic information as the [region](region.md) property but specified as a map rectangle instead of a region.

Changing the value of this property updates the map view immediately. If you want to animate the change, use the [setVisibleMapRect(\_:animated:)](setvisiblemaprect%28__animated_%29.md) method instead.

## See Also

### Manipulating the visible portion of the map

- [region](region.md): The area the map view displays.
- [setRegion(\_:animated:)](setregion%28__animated_%29.md): Changes the currently visible region, and optionally animates the change.
- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [setCenter(\_:animated:)](setcenter%28__animated_%29.md): Changes the center coordinate of the map, and optionally animates the change.
- [showAnnotations(\_:animated:)](showannotations%28__animated_%29.md): Sets the visible region so that the map displays the specified annotations.
- [setVisibleMapRect(\_:animated:)](setvisiblemaprect%28__animated_%29.md): Changes the currently visible portion of the map, and optionally animates the change.
- [setVisibleMapRect(\_:edgePadding:animated:)](setvisiblemaprect%28__edgepadding_animated_%29.md): Changes the currently visible portion of the map, allowing you to specify additional space around the edges.

# visibleMapRect (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The area visible in the map view.

## Declaration

```objectivec
@property (nonatomic) MKMapRect visibleMapRect;
```

<a id="Discussion"></a>

## Discussion

This property represents the same basic information as the [region](region.md) property but specified as a map rectangle instead of a region.

Changing the value of this property updates the map view immediately. If you want to animate the change, use the [setVisibleMapRect:animated:](setvisiblemaprect%28__animated_%29.md) method instead.

## See Also

### Manipulating the visible portion of the map

- [region](region.md): The area the map view displays.
- [setRegion:animated:](setregion%28__animated_%29.md): Changes the currently visible region, and optionally animates the change.
- [centerCoordinate](centercoordinate.md): The map coordinate at the center of the map view.
- [setCenterCoordinate:animated:](setcenter%28__animated_%29.md): Changes the center coordinate of the map, and optionally animates the change.
- [showAnnotations:animated:](showannotations%28__animated_%29.md): Sets the visible region so that the map displays the specified annotations.
- [setVisibleMapRect:animated:](setvisiblemaprect%28__animated_%29.md): Changes the currently visible portion of the map, and optionally animates the change.
- [setVisibleMapRect:edgePadding:animated:](setvisiblemaprect%28__edgepadding_animated_%29.md): Changes the currently visible portion of the map, allowing you to specify additional space around the edges.
