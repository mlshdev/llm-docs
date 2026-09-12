> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/colortype](https://developer.apple.com/documentation/appkit/nscolor/colortype)

# NSColor.ColorType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that indicate the color’s type, and which methods may be called on the color object.

## Declaration

```swift
enum ColorType
```

## Topics

### Color Types

- [NSColor.ColorType.componentBased](colortype/componentbased.md): Colors that include floating-point color components and a color space.
- [NSColor.ColorType.pattern](colortype/pattern.md): Colors that include an image to be used as a pattern.
- [NSColor.ColorType.catalog](colortype/catalog.md): Colors that are retrieved from an asset catalog.

### Initializers

- [init(rawValue:)](colortype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with the color space

- [type](type.md): The type of the color object.
- [usingType(\_:)](usingtype%28__%29.md): Returns a version of the color object that is compatible with the specified color type.
- [colorSpace](colorspace.md): The color space associated with the color.
- [NSColorSpaceName](../nscolorspacename.md): Constants that specify color space names.

# NSColorType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that indicate the color’s type, and which methods may be called on the color object.

## Declaration

```objectivec
enum NSColorType : NSInteger;
```

## Topics

### Color Types

- [NSColorTypeComponentBased](colortype/componentbased.md): Colors that include floating-point color components and a color space.
- [NSColorTypePattern](colortype/pattern.md): Colors that include an image to be used as a pattern.
- [NSColorTypeCatalog](colortype/catalog.md): Colors that are retrieved from an asset catalog.

## See Also

### Working with the color space

- [type](type.md): The type of the color object.
- [colorUsingType:](usingtype%28__%29.md): Returns a version of the color object that is compatible with the specified color type.
- [colorSpace](colorspace.md): The color space associated with the color.
- [NSColorSpaceName](../nscolorspacename.md): Constants that specify color space names.
