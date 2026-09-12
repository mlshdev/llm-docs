> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprectequaltorect(_:_:)](https://developer.apple.com/documentation/mapkit/mkmaprectequaltorect(_:_:))

# MKMapRectEqualToRect(\_:\_:) (Swift)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether two map rectangles are equal.

## Declaration

```swift
func MKMapRectEqualToRect(_ rect1: MKMapRect, _ rect2: MKMapRect) -> Bool
```

## Parameters

- `rect1`: The first map rectangle.
- `rect2`: The second map rectangle.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rectangles are exactly the same, or [false](https://developer.apple.com/documentation/swift/false) if the origin point or size values are different.

## See Also

### Comparing rectangles

- [isNull](mkmaprect/isnull.md): A Boolean value that indicates whether the specified rectangle is null.
- [isEmpty](mkmaprect/isempty.md): A Boolean value that indicates whether the specified rectangle has no area.
- [spans180thMeridian](mkmaprect/spans180thmeridian.md): A Boolean value that indicates whether the specified map rectangle crosses the 180th meridian.
- [remainder](mkmaprect/remainder.md): A rectangle that represents the normalized portion of the specified rectangle that lies outside the world map boundaries.

# MKMapRectEqualToRect (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether two map rectangles are equal.

## Declaration

```objectivec
static BOOL MKMapRectEqualToRect(MKMapRect rect1, MKMapRect rect2);
```

## Parameters

- `rect1`: The first map rectangle.
- `rect2`: The second map rectangle.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rectangles are exactly the same, or [false](https://developer.apple.com/documentation/swift/false) if the origin point or size values are different.

## See Also

### Comparing rectangles

- [MKMapRectIsNull](mkmaprect/isnull.md): A Boolean value that indicates whether the specified rectangle is null.
- [MKMapRectIsEmpty](mkmaprect/isempty.md): A Boolean value that indicates whether the specified rectangle has no area.
- [MKMapRectSpans180thMeridian](mkmaprect/spans180thmeridian.md): A Boolean value that indicates whether the specified map rectangle crosses the 180th meridian.
- [MKMapRectRemainder](mkmaprect/remainder.md): A rectangle that represents the normalized portion of the specified rectangle that lies outside the world map boundaries.
