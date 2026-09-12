> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/type](https://developer.apple.com/documentation/appkit/nscolor/type)

# type (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The type of the color object.

## Declaration

```swift
var type: NSColor.ColorType { get }
```

<a id="Discussion"></a>

## Discussion

A color object’s type determines which of its methods and properties you may access. For example, if the type is [NSColor.ColorType.pattern](colortype/pattern.md), you may safely access the [patternImage](patternimage.md) property.

## See Also

### Working with the color space

- [usingType(\_:)](usingtype%28__%29.md): Returns a version of the color object that is compatible with the specified color type.
- [NSColor.ColorType](colortype.md): Constants that indicate the color’s type, and which methods may be called on the color object.
- [colorSpace](colorspace.md): The color space associated with the color.
- [NSColorSpaceName](../nscolorspacename.md): Constants that specify color space names.

# type (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The type of the color object.

## Declaration

```objectivec
@property (readonly) NSColorType type;
```

<a id="Discussion"></a>

## Discussion

A color object’s type determines which of its methods and properties you may access. For example, if the type is [NSColorTypePattern](colortype/pattern.md), you may safely access the [patternImage](patternimage.md) property.

## See Also

### Working with the color space

- [colorUsingType:](usingtype%28__%29.md): Returns a version of the color object that is compatible with the specified color type.
- [NSColorType](colortype.md): Constants that indicate the color’s type, and which methods may be called on the color object.
- [colorSpace](colorspace.md): The color space associated with the color.
- [NSColorSpaceName](../nscolorspacename.md): Constants that specify color space names.
