> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectcontainspoint(_:_:)](https://developer.apple.com/documentation/coregraphics/cgrectcontainspoint(_:_:))

# CGRectContainsPoint(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether a rectangle contains a specified point.

## Declaration

```swift
func CGRectContainsPoint(_ rect: CGRect, _ point: CGPoint) -> Bool
```

## Parameters

- `rect`: The rectangle to examine.
- `point`: The point to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rectangle is not null or empty and the point is located within the rectangle; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A point is considered inside the rectangle if its coordinates lie inside the rectangle or on the minimum X or minimum Y edge.

## See Also

### Checking for Membership

- [CGRectContainsRect(\_:\_:)](cgrectcontainsrect%28____%29.md): Returns whether the first rectangle contains the second rectangle.

# CGRectContainsPoint (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether a rectangle contains a specified point.

## Declaration

```objectivec
extern bool CGRectContainsPoint(CGRect rect, CGPoint point);
```

## Parameters

- `rect`: The rectangle to examine.
- `point`: The point to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rectangle is not null or empty and the point is located within the rectangle; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A point is considered inside the rectangle if its coordinates lie inside the rectangle or on the minimum X or minimum Y edge.

## See Also

### Checking for Membership

- [CGRectContainsRect](cgrectcontainsrect%28____%29.md): Returns whether the first rectangle contains the second rectangle.
