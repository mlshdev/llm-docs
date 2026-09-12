> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/remainder](https://developer.apple.com/documentation/mapkit/mkmaprect/remainder)

# remainder (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

A rectangle that represents the normalized portion of the specified rectangle that lies outside the world map boundaries.

## Declaration

```swift
var remainder: MKMapRect { get }
```

<a id="Discussion"></a>

## Discussion

For a rectangle that lies on the 180th meridian, this function isolates the portion that lies outside the boundary, wraps it to the opposite side of the map, and returns that rectangle.

## See Also

### Comparing rectangles

- [isNull](isnull.md): A Boolean value that indicates whether the specified rectangle is null.
- [MKMapRectEqualToRect(\_:\_:)](../mkmaprectequaltorect%28____%29.md): Returns a Boolean value that indicates whether two map rectangles are equal.
- [isEmpty](isempty.md): A Boolean value that indicates whether the specified rectangle has no area.
- [spans180thMeridian](spans180thmeridian.md): A Boolean value that indicates whether the specified map rectangle crosses the 180th meridian.

# MKMapRectRemainder (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

A rectangle that represents the normalized portion of the specified rectangle that lies outside the world map boundaries.

## Declaration

```objectivec
extern MKMapRect MKMapRectRemainder(MKMapRect rect);
```

## Parameters

- `rect`: The rectangle to check.

<a id="Discussion"></a>

## Discussion

For a rectangle that lies on the 180th meridian, this function isolates the portion that lies outside the boundary, wraps it to the opposite side of the map, and returns that rectangle.

## See Also

### Comparing rectangles

- [MKMapRectIsNull](isnull.md): A Boolean value that indicates whether the specified rectangle is null.
- [MKMapRectEqualToRect](../mkmaprectequaltorect%28____%29.md): Returns a Boolean value that indicates whether two map rectangles are equal.
- [MKMapRectIsEmpty](isempty.md): A Boolean value that indicates whether the specified rectangle has no area.
- [MKMapRectSpans180thMeridian](spans180thmeridian.md): A Boolean value that indicates whether the specified map rectangle crosses the 180th meridian.
