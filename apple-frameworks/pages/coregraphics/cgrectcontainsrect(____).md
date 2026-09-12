> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectcontainsrect(_:_:)](https://developer.apple.com/documentation/coregraphics/cgrectcontainsrect(_:_:))

# CGRectContainsRect(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether the first rectangle contains the second rectangle.

## Declaration

```swift
func CGRectContainsRect(_ rect1: CGRect, _ rect2: CGRect) -> Bool
```

## Parameters

- `rect1`: The rectangle to examine for containment of the rectangle passed in `rect2`.
- `rect2`: The rectangle to examine for being contained in the rectangle passed in `rect1`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rectangle specified by `rect2` is contained in the rectangle passed in `rect1`; otherwise, [false](https://developer.apple.com/documentation/swift/false). The first rectangle contains the second if the union of the two rectangles is equal to the first rectangle.

## See Also

### Checking for Membership

- [CGRectContainsPoint(\_:\_:)](cgrectcontainspoint%28____%29.md): Returns whether a rectangle contains a specified point.

# CGRectContainsRect (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether the first rectangle contains the second rectangle.

## Declaration

```objectivec
extern bool CGRectContainsRect(CGRect rect1, CGRect rect2);
```

## Parameters

- `rect1`: The rectangle to examine for containment of the rectangle passed in `rect2`.
- `rect2`: The rectangle to examine for being contained in the rectangle passed in `rect1`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rectangle specified by `rect2` is contained in the rectangle passed in `rect1`; otherwise, [false](https://developer.apple.com/documentation/swift/false). The first rectangle contains the second if the union of the two rectangles is equal to the first rectangle.

## See Also

### Checking for Membership

- [CGRectContainsPoint](cgrectcontainspoint%28____%29.md): Returns whether a rectangle contains a specified point.
