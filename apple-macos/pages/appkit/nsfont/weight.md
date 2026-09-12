> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/weight](https://developer.apple.com/documentation/appkit/nsfont/weight)

# NSFont.Weight (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

System-defined font-weight values.

## Declaration

```swift
struct Weight
```

## Topics

### Font Weights

- [ultraLight](weight/ultralight.md): The font weight for system ultra light font.
- [thin](weight/thin.md): The font weight for system thin font.
- [light](weight/light.md): The font weight for system light font.
- [regular](weight/regular.md): The font weight for system regular font.
- [medium](weight/medium.md): The font weight for system medium font.
- [semibold](weight/semibold.md): The font weight for system semibold font.
- [bold](weight/bold.md): The font weight for system bold font.
- [heavy](weight/heavy.md): The font weight for system heavy font.
- [black](weight/black.md): The font weight for system black font.

### Initializers

- [init(\_:)](weight/init%28__%29.md)
- [init(rawValue:)](weight/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating System Fonts

- [preferredFont(forTextStyle:options:)](preferredfont%28fortextstyle_options_%29.md): Returns the font associated with the text style.
- [systemFont(ofSize:)](systemfont%28ofsize_%29.md): Returns the standard system font with the specified size.
- [systemFont(ofSize:weight:)](systemfont%28ofsize_weight_%29.md): Returns the standard system font with the specified size and weight.
- [boldSystemFont(ofSize:)](boldsystemfont%28ofsize_%29.md): Returns the standard system font in boldface type with the specified size.
- [monospacedSystemFont(ofSize:weight:)](monospacedsystemfont%28ofsize_weight_%29.md): Returns a monospace version of the system font with the specified size and weight.
- [monospacedDigitSystemFont(ofSize:weight:)](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns a version of the standard system font that contains monospaced digit glyphs.
- [systemFontSize](systemfontsize.md): Returns the size of the standard system font.
- [smallSystemFontSize](smallsystemfontsize.md): Returns the size of the standard small system font.
- [NSFont.TextStyle](textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSFont.TextStyleOptionKey](textstyleoptionkey.md): The options that you apply when requesting the font or font descriptor of a preferred text style.

# NSFontWeight (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

System-defined font-weight values.

## Declaration

```objectivec
typedef CGFloat NSFontWeight;
```

## Topics

### Font Weights

- [NSFontWeightUltraLight](weight/ultralight.md): The font weight for system ultra light font.
- [NSFontWeightThin](weight/thin.md): The font weight for system thin font.
- [NSFontWeightLight](weight/light.md): The font weight for system light font.
- [NSFontWeightRegular](weight/regular.md): The font weight for system regular font.
- [NSFontWeightMedium](weight/medium.md): The font weight for system medium font.
- [NSFontWeightSemibold](weight/semibold.md): The font weight for system semibold font.
- [NSFontWeightBold](weight/bold.md): The font weight for system bold font.
- [NSFontWeightHeavy](weight/heavy.md): The font weight for system heavy font.
- [NSFontWeightBlack](weight/black.md): The font weight for system black font.

## See Also

### Creating System Fonts

- [preferredFontForTextStyle:options:](preferredfont%28fortextstyle_options_%29.md): Returns the font associated with the text style.
- [systemFontOfSize:](systemfont%28ofsize_%29.md): Returns the standard system font with the specified size.
- [systemFontOfSize:weight:](systemfont%28ofsize_weight_%29.md): Returns the standard system font with the specified size and weight.
- [boldSystemFontOfSize:](boldsystemfont%28ofsize_%29.md): Returns the standard system font in boldface type with the specified size.
- [monospacedSystemFontOfSize:weight:](monospacedsystemfont%28ofsize_weight_%29.md): Returns a monospace version of the system font with the specified size and weight.
- [monospacedDigitSystemFontOfSize:weight:](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns a version of the standard system font that contains monospaced digit glyphs.
- [systemFontSize](systemfontsize.md): Returns the size of the standard system font.
- [smallSystemFontSize](smallsystemfontsize.md): Returns the size of the standard small system font.
- [NSFontTextStyle](textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSFontTextStyleOptionKey](textstyleoptionkey.md): The options that you apply when requesting the font or font descriptor of a preferred text style.
