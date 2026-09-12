> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectisnull(_:)](https://developer.apple.com/documentation/coregraphics/cgrectisnull(_:))

# CGRectIsNull(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether the rectangle is equal to the null rectangle.

## Declaration

```swift
func CGRectIsNull(_ rect: CGRect) -> Bool
```

## Parameters

- `rect`: The rectangle to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified rectangle is null; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A null rectangle is the equivalent of an empty set. For example, the result of intersecting two disjoint rectangles is a null rectangle. A null rectangle cannot be drawn and interacts with other rectangles in special ways.

## See Also

### Checking Rectangle Characteristics

- [CGRectIsEmpty(\_:)](cgrectisempty%28__%29.md): Returns whether a rectangle has zero width or height, or is a null rectangle.
- [CGRectIsInfinite(\_:)](cgrectisinfinite%28__%29.md): Returns whether a rectangle is infinite.

# CGRectIsNull (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether the rectangle is equal to the null rectangle.

## Declaration

```objectivec
extern bool CGRectIsNull(CGRect rect);
```

## Parameters

- `rect`: The rectangle to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified rectangle is null; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A null rectangle is the equivalent of an empty set. For example, the result of intersecting two disjoint rectangles is a null rectangle. A null rectangle cannot be drawn and interacts with other rectangles in special ways.

## See Also

### Checking Rectangle Characteristics

- [CGRectIsEmpty](cgrectisempty%28__%29.md): Returns whether a rectangle has zero width or height, or is a null rectangle.
- [CGRectIsInfinite](cgrectisinfinite%28__%29.md): Returns whether a rectangle is infinite.
