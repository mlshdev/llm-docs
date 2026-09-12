> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolor/components](https://developer.apple.com/documentation/coregraphics/cgcolor/components)

# components

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the values of the color components (including alpha) associated with a color.

## Declaration

```swift
var components: [CGFloat]? { get }
```

<a id="Discussion"></a>

## Discussion

An array of intensity values for the color components (including alpha) associated with the specified color. The size of the array is equal to the color’s [numberOfComponents](numberofcomponents.md) value.

## See Also

### Examining a Color

- [alpha](alpha.md): Returns the value of the alpha component associated with a color.
- [colorSpace](colorspace.md): Returns the color space associated with a color.
- [numberOfComponents](numberofcomponents.md): Returns the number of color components (including alpha) associated with a color.
- [pattern](pattern.md): Returns the pattern associated with a color in a pattern color space.
