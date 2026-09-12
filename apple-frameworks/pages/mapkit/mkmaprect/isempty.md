> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/isempty](https://developer.apple.com/documentation/mapkit/mkmaprect/isempty)

# isEmpty (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the specified rectangle has no area.

## Declaration

```swift
var isEmpty: Bool { get }
```

## See Also

### Comparing rectangles

- [isNull](isnull.md): A Boolean value that indicates whether the specified rectangle is null.
- [MKMapRectEqualToRect(\_:\_:)](../mkmaprectequaltorect%28____%29.md): Returns a Boolean value that indicates whether two map rectangles are equal.
- [spans180thMeridian](spans180thmeridian.md): A Boolean value that indicates whether the specified map rectangle crosses the 180th meridian.
- [remainder](remainder.md): A rectangle that represents the normalized portion of the specified rectangle that lies outside the world map boundaries.

# MKMapRectIsEmpty (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the specified rectangle has no area.

## Declaration

```objectivec
static BOOL MKMapRectIsEmpty(MKMapRect rect);
```

## Parameters

- `rect`: The rectangle to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rectangle is `null` or its width or height are equal to `0`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing rectangles

- [MKMapRectIsNull](isnull.md): A Boolean value that indicates whether the specified rectangle is null.
- [MKMapRectEqualToRect](../mkmaprectequaltorect%28____%29.md): Returns a Boolean value that indicates whether two map rectangles are equal.
- [MKMapRectSpans180thMeridian](spans180thmeridian.md): A Boolean value that indicates whether the specified map rectangle crosses the 180th meridian.
- [MKMapRectRemainder](remainder.md): A rectangle that represents the normalized portion of the specified rectangle that lies outside the world map boundaries.
