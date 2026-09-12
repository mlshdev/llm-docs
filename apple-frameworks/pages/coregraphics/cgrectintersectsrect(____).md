> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectintersectsrect(_:_:)](https://developer.apple.com/documentation/coregraphics/cgrectintersectsrect(_:_:))

# CGRectIntersectsRect(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether two rectangles intersect.

## Declaration

```swift
func CGRectIntersectsRect(_ rect1: CGRect, _ rect2: CGRect) -> Bool
```

## Parameters

- `rect1`: The first rectangle to examine.
- `rect2`: The second rectangle to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two specified rectangles intersect; otherwise, [false](https://developer.apple.com/documentation/swift/false). The first rectangle intersects the second if the intersection of the rectangles is not equal to the null rectangle.

## See Also

### Comparing Values

- [CGRectEqualToRect(\_:\_:)](cgrectequaltorect%28____%29.md): Deprecated. Returns whether two rectangles are equal in size and position.

# CGRectIntersectsRect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether two rectangles intersect.

## Declaration

```objectivec
extern bool CGRectIntersectsRect(CGRect rect1, CGRect rect2);
```

## Parameters

- `rect1`: The first rectangle to examine.
- `rect2`: The second rectangle to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two specified rectangles intersect; otherwise, [false](https://developer.apple.com/documentation/swift/false). The first rectangle intersects the second if the intersection of the rectangles is not equal to the null rectangle.

## See Also

### Comparing Values

- [CGPointEqualToPoint](cgpointequaltopoint-c.macro.md): Returns whether two points are equal.
- [CGSizeEqualToSize](cgsizeequaltosize-c.macro.md): Returns whether two sizes are equal.
- [CGRectEqualToRect](cgrectequaltorect%28____%29.md): Deprecated. Returns whether two rectangles are equal in size and position.
