> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectisinfinite(_:)](https://developer.apple.com/documentation/coregraphics/cgrectisinfinite(_:))

# CGRectIsInfinite(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether a rectangle is infinite.

## Declaration

```swift
func CGRectIsInfinite(_ rect: CGRect) -> Bool
```

## Parameters

- `rect`: The rectangle to examine.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the specified rectangle is infinite; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

An infinite rectangle is one that has no defined bounds. Infinite rectangles can be created as output from a tiling filter. For example, the Core Image framework perspective tile filter creates an image whose extent is described by an infinite rectangle.

## See Also

### Checking Rectangle Characteristics

- [CGRectIsEmpty(\_:)](cgrectisempty%28__%29.md): Returns whether a rectangle has zero width or height, or is a null rectangle.
- [CGRectIsNull(\_:)](cgrectisnull%28__%29.md): Returns whether the rectangle is equal to the null rectangle.

# CGRectIsInfinite (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns whether a rectangle is infinite.

## Declaration

```objectivec
extern bool CGRectIsInfinite(CGRect rect);
```

## Parameters

- `rect`: The rectangle to examine.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the specified rectangle is infinite; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

An infinite rectangle is one that has no defined bounds. Infinite rectangles can be created as output from a tiling filter. For example, the Core Image framework perspective tile filter creates an image whose extent is described by an infinite rectangle.

## See Also

### Checking Rectangle Characteristics

- [CGRectIsEmpty](cgrectisempty%28__%29.md): Returns whether a rectangle has zero width or height, or is a null rectangle.
- [CGRectIsNull](cgrectisnull%28__%29.md): Returns whether the rectangle is equal to the null rectangle.
