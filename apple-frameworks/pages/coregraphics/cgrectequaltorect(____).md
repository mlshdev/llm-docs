> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectequaltorect(_:_:)](https://developer.apple.com/documentation/coregraphics/cgrectequaltorect(_:_:))

# CGRectEqualToRect(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether two rectangles are equal in size and position.

> The [CGRect](../corefoundation/cgrect.md) type adopts the `Equatable` protocol; use the `==` operator instead.

## Declaration

```swift
func CGRectEqualToRect(_ rect1: CGRect, _ rect2: CGRect) -> Bool
```

## Parameters

- `rect1`: The first rectangle to examine.
- `rect2`: The second rectangle to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two specified rectangles have equal size and origin values, or if both rectangles are null rectangles. Otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Values

- [CGRectIntersectsRect(\_:\_:)](cgrectintersectsrect%28____%29.md): Returns whether two rectangles intersect.

# CGRectEqualToRect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether two rectangles are equal in size and position.

> The [CGRect](../corefoundation/cgrect.md) type adopts the `Equatable` protocol; use the `==` operator instead.

## Declaration

```objectivec
extern bool CGRectEqualToRect(CGRect rect1, CGRect rect2);
```

## Parameters

- `rect1`: The first rectangle to examine.
- `rect2`: The second rectangle to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two specified rectangles have equal size and origin values, or if both rectangles are null rectangles. Otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Values

- [CGPointEqualToPoint](cgpointequaltopoint-c.macro.md): Returns whether two points are equal.
- [CGSizeEqualToSize](cgsizeequaltosize-c.macro.md): Returns whether two sizes are equal.
- [CGRectIntersectsRect](cgrectintersectsrect%28____%29.md): Returns whether two rectangles intersect.
