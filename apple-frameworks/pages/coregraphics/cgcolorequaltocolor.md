> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorequaltocolor](https://developer.apple.com/documentation/coregraphics/cgcolorequaltocolor)

# CGColorEqualToColor

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Indicates whether two colors are equal.

## Declaration

```objectivec
extern bool CGColorEqualToColor(CGColorRef color1, CGColorRef color2);
```

## Parameters

- `color1`: The first color to compare.
- `color2`: The second color to compare.

<a id="return-value"></a>

## Return Value

A Boolean value that, if [true](https://developer.apple.com/documentation/swift/true), indicates that the specified colors are equal. If the colors are not equal, the value is [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Two colors are equal if they share the same color space and numerically equal color components.

## See Also

### Examining a Color

- [CGColorGetAlpha](cgcolor/alpha.md): Returns the value of the alpha component associated with a color.
- [CGColorGetColorSpace](cgcolor/colorspace.md): Returns the color space associated with a color.
- [CGColorGetNumberOfComponents](cgcolor/numberofcomponents.md): Returns the number of color components (including alpha) associated with a color.
- [CGColorGetPattern](cgcolor/pattern.md): Returns the pattern associated with a color in a pattern color space.
- [CGColorGetComponents](cgcolorgetcomponents.md): Returns the values of the color components (including alpha) associated with a color.
