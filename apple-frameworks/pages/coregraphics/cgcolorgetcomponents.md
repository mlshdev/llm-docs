> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorgetcomponents](https://developer.apple.com/documentation/coregraphics/cgcolorgetcomponents)

# CGColorGetComponents

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the values of the color components (including alpha) associated with a color.

## Declaration

```objectivec
extern const CGFloat *CGColorGetComponents(CGColorRef color);
```

## Parameters

- `color`: A color.

<a id="return-value"></a>

## Return Value

An array of intensity values for the color components (including alpha) associated with the specified color. The size of the array is one more than the number of components of the color space for the color.

## See Also

### Examining a Color

- [CGColorEqualToColor](cgcolorequaltocolor.md): Indicates whether two colors are equal.
- [CGColorGetAlpha](cgcolor/alpha.md): Returns the value of the alpha component associated with a color.
- [CGColorGetColorSpace](cgcolor/colorspace.md): Returns the color space associated with a color.
- [CGColorGetNumberOfComponents](cgcolor/numberofcomponents.md): Returns the number of color components (including alpha) associated with a color.
- [CGColorGetPattern](cgcolor/pattern.md): Returns the pattern associated with a color in a pattern color space.
