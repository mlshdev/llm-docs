> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolor/numberofcomponents](https://developer.apple.com/documentation/coregraphics/cgcolor/numberofcomponents)

# numberOfComponents (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the number of color components (including alpha) associated with a color.

## Declaration

```swift
var numberOfComponents: Int { get }
```

## See Also

### Examining a Color

- [alpha](alpha.md): Returns the value of the alpha component associated with a color.
- [colorSpace](colorspace.md): Returns the color space associated with a color.
- [components](components.md): Returns the values of the color components (including alpha) associated with a color.
- [pattern](pattern.md): Returns the pattern associated with a color in a pattern color space.

# CGColorGetNumberOfComponents (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the number of color components (including alpha) associated with a color.

## Declaration

```objectivec
extern size_t CGColorGetNumberOfComponents(CGColorRef color);
```

## Parameters

- `color`: A color.

<a id="return-value"></a>

## Return Value

The number of color components (including alpha) associated with the specified color. This number is one more than the number of components of the color space for the color.

## See Also

### Examining a Color

- [CGColorEqualToColor](../cgcolorequaltocolor.md): Indicates whether two colors are equal.
- [CGColorGetAlpha](alpha.md): Returns the value of the alpha component associated with a color.
- [CGColorGetColorSpace](colorspace.md): Returns the color space associated with a color.
- [CGColorGetPattern](pattern.md): Returns the pattern associated with a color in a pattern color space.
- [CGColorGetComponents](../cgcolorgetcomponents.md): Returns the values of the color components (including alpha) associated with a color.
