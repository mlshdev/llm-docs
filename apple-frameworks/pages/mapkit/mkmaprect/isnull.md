> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/isnull](https://developer.apple.com/documentation/mapkit/mkmaprect/isnull)

# isNull (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the specified rectangle is null.

## Declaration

```swift
var isNull: Bool { get }
```

<a id="Discussion"></a>

## Discussion

For this class, a rectangle is `null` if its origin point contains an invalid or infinite value.

## See Also

### Comparing rectangles

- [MKMapRectEqualToRect(\_:\_:)](../mkmaprectequaltorect%28____%29.md): Returns a Boolean value that indicates whether two map rectangles are equal.
- [isEmpty](isempty.md): A Boolean value that indicates whether the specified rectangle has no area.
- [spans180thMeridian](spans180thmeridian.md): A Boolean value that indicates whether the specified map rectangle crosses the 180th meridian.
- [remainder](remainder.md): A rectangle that represents the normalized portion of the specified rectangle that lies outside the world map boundaries.

# MKMapRectIsNull (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the specified rectangle is null.

## Declaration

```objectivec
static BOOL MKMapRectIsNull(MKMapRect rect);
```

## Parameters

- `rect`: The rectangle to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rectangle is `null`, or [false](https://developer.apple.com/documentation/swift/false) if it isn’t `null`.

<a id="Discussion"></a>

## Discussion

For this class, a rectangle is `null` if its origin point contains an invalid or infinite value.

## See Also

### Comparing rectangles

- [MKMapRectEqualToRect](../mkmaprectequaltorect%28____%29.md): Returns a Boolean value that indicates whether two map rectangles are equal.
- [MKMapRectIsEmpty](isempty.md): A Boolean value that indicates whether the specified rectangle has no area.
- [MKMapRectSpans180thMeridian](spans180thmeridian.md): A Boolean value that indicates whether the specified map rectangle crosses the 180th meridian.
- [MKMapRectRemainder](remainder.md): A rectangle that represents the normalized portion of the specified rectangle that lies outside the world map boundaries.
