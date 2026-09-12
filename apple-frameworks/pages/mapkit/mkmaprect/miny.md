> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/miny](https://developer.apple.com/documentation/mapkit/mkmaprect/miny)

# minY (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the minimum y-axis value of the specified rectangle.

## Declaration

```swift
var minY: Double { get }
```

## See Also

### Getting the boundaries

- [minX](minx.md): Returns the minimum x-axis value of the specified rectangle.
- [midX](midx.md): Returns the mid-point along the x-axis of the specified rectangle.
- [midY](midy.md): Returns the mid-point along the y-axis of the specified rectangle.
- [maxX](maxx.md): Returns the maximum x-axis value of the specified rectangle.
- [maxY](maxy.md): Returns the maximum y-axis value of the specified rectangle.
- [width](width.md): Returns the width of the map rectangle.
- [height](height.md): Returns the height of the map rectangle.

# MKMapRectGetMinY (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the minimum y-axis value of the specified rectangle.

## Declaration

```objectivec
static double MKMapRectGetMinY(MKMapRect rect);
```

## Parameters

- `rect`: The map rectangle to test.

<a id="return-value"></a>

## Return Value

The minimum y-axis value.

## See Also

### Getting the boundaries

- [MKMapRectGetMinX](minx.md): Returns the minimum x-axis value of the specified rectangle.
- [MKMapRectGetMidX](midx.md): Returns the mid-point along the x-axis of the specified rectangle.
- [MKMapRectGetMidY](midy.md): Returns the mid-point along the y-axis of the specified rectangle.
- [MKMapRectGetMaxX](maxx.md): Returns the maximum x-axis value of the specified rectangle.
- [MKMapRectGetMaxY](maxy.md): Returns the maximum y-axis value of the specified rectangle.
- [MKMapRectGetWidth](width.md): Returns the width of the map rectangle.
- [MKMapRectGetHeight](height.md): Returns the height of the map rectangle.
