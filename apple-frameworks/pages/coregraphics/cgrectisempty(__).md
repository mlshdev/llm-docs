> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectisempty(_:)](https://developer.apple.com/documentation/coregraphics/cgrectisempty(_:))

# CGRectIsEmpty(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether a rectangle has zero width or height, or is a null rectangle.

## Declaration

```swift
func CGRectIsEmpty(_ rect: CGRect) -> Bool
```

## Parameters

- `rect`: The rectangle to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified rectangle is empty; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

An empty rectangle is either a null rectangle or a valid rectangle with zero height or width.

## See Also

### Checking Rectangle Characteristics

- [CGRectIsNull(\_:)](cgrectisnull%28__%29.md): Returns whether the rectangle is equal to the null rectangle.
- [CGRectIsInfinite(\_:)](cgrectisinfinite%28__%29.md): Returns whether a rectangle is infinite.

# CGRectIsEmpty (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether a rectangle has zero width or height, or is a null rectangle.

## Declaration

```objectivec
extern bool CGRectIsEmpty(CGRect rect);
```

## Parameters

- `rect`: The rectangle to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified rectangle is empty; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

An empty rectangle is either a null rectangle or a valid rectangle with zero height or width.

## See Also

### Checking Rectangle Characteristics

- [CGRectIsNull](cgrectisnull%28__%29.md): Returns whether the rectangle is equal to the null rectangle.
- [CGRectIsInfinite](cgrectisinfinite%28__%29.md): Returns whether a rectangle is infinite.
