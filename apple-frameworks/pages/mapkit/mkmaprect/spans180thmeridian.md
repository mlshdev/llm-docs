> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/spans180thmeridian](https://developer.apple.com/documentation/mapkit/mkmaprect/spans180thmeridian)

# spans180thMeridian (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the specified map rectangle crosses the 180th meridian.

## Declaration

```swift
var spans180thMeridian: Bool { get }
```

## See Also

### Comparing rectangles

- [isNull](isnull.md): A Boolean value that indicates whether the specified rectangle is null.
- [MKMapRectEqualToRect(\_:\_:)](../mkmaprectequaltorect%28____%29.md): Returns a Boolean value that indicates whether two map rectangles are equal.
- [isEmpty](isempty.md): A Boolean value that indicates whether the specified rectangle has no area.
- [remainder](remainder.md): A rectangle that represents the normalized portion of the specified rectangle that lies outside the world map boundaries.

# MKMapRectSpans180thMeridian (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the specified map rectangle crosses the 180th meridian.

## Declaration

```objectivec
extern BOOL MKMapRectSpans180thMeridian(MKMapRect rect);
```

## Parameters

- `rect`: The rectangle to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rectangle spans the 180th meridian or [false](https://developer.apple.com/documentation/swift/false) if it is contained wholly within the world map.

## See Also

### Comparing rectangles

- [MKMapRectIsNull](isnull.md): A Boolean value that indicates whether the specified rectangle is null.
- [MKMapRectEqualToRect](../mkmaprectequaltorect%28____%29.md): Returns a Boolean value that indicates whether two map rectangles are equal.
- [MKMapRectIsEmpty](isempty.md): A Boolean value that indicates whether the specified rectangle has no area.
- [MKMapRectRemainder](remainder.md): A rectangle that represents the normalized portion of the specified rectangle that lies outside the world map boundaries.
