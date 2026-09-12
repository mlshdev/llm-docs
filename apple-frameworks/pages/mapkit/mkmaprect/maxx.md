> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/maxx](https://developer.apple.com/documentation/mapkit/mkmaprect/maxx)

# maxX (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the maximum x-axis value of the specified rectangle.

## Declaration

```swift
var maxX: Double { get }
```

## See Also

### Getting the boundaries

- [minX](minx.md): Returns the minimum x-axis value of the specified rectangle.
- [minY](miny.md): Returns the minimum y-axis value of the specified rectangle.
- [midX](midx.md): Returns the mid-point along the x-axis of the specified rectangle.
- [midY](midy.md): Returns the mid-point along the y-axis of the specified rectangle.
- [maxY](maxy.md): Returns the maximum y-axis value of the specified rectangle.
- [width](width.md): Returns the width of the map rectangle.
- [height](height.md): Returns the height of the map rectangle.

# MKMapRectGetMaxX (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the maximum x-axis value of the specified rectangle.

## Declaration

```objectivec
static double MKMapRectGetMaxX(MKMapRect rect);
```

## Parameters

- `rect`: The map rectangle to test.

<a id="return-value"></a>

## Return Value

The maximum x-axis value.

## See Also

### Getting the boundaries

- [MKMapRectGetMinX](minx.md): Returns the minimum x-axis value of the specified rectangle.
- [MKMapRectGetMinY](miny.md): Returns the minimum y-axis value of the specified rectangle.
- [MKMapRectGetMidX](midx.md): Returns the mid-point along the x-axis of the specified rectangle.
- [MKMapRectGetMidY](midy.md): Returns the mid-point along the y-axis of the specified rectangle.
- [MKMapRectGetMaxY](maxy.md): Returns the maximum y-axis value of the specified rectangle.
- [MKMapRectGetWidth](width.md): Returns the width of the map rectangle.
- [MKMapRectGetHeight](height.md): Returns the height of the map rectangle.
