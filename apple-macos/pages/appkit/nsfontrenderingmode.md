> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontrenderingmode](https://developer.apple.com/documentation/appkit/nsfontrenderingmode)

# NSFontRenderingMode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The font rendering mode.

## Declaration

```swift
enum NSFontRenderingMode
```

## Topics

### Constants

- [NSFontRenderingMode.defaultRenderingMode](nsfontrenderingmode/defaultrenderingmode.md): Determines the actual mode based on the user preference settings.
- [NSFontRenderingMode.antialiasedRenderingMode](nsfontrenderingmode/antialiasedrenderingmode.md): Specifies antialiased, floating-point advancements rendering mode (synonymous with printerFont).
- [NSFontRenderingMode.integerAdvancementsRenderingMode](nsfontrenderingmode/integeradvancementsrenderingmode.md): Specifies integer advancements rendering mode.
- [NSFontRenderingMode.antialiasedIntegerAdvancementsRenderingMode](nsfontrenderingmode/antialiasedintegeradvancementsrenderingmode.md): Specifies antialiased, integer advancements rendering mode.

### Initializers

- [init(rawValue:)](nsfontrenderingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Glyphs

- [NSGlyph](nsglyph.md): The type used to specify glyphs.
- [NSGlyphStorage](nsglyphstorage.md): A set of methods that a glyph storage object must implement to interact properly with [NSGlyphGenerator](nsglyphgenerator.md).
- [NSGlyphGenerator](nsglyphgenerator.md): An object that performs the initial, nominal glyph generation phase in the layout process.
- [NSGlyphInfo](nsglyphinfo.md): A glyph attribute in an attributed string.
- [Reserved Glyph Codes](reserved-glyph-codes.md): These constants define reserved glyph codes.

# NSFontRenderingMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The font rendering mode.

## Declaration

```objectivec
enum NSFontRenderingMode : NSUInteger;
```

## Topics

### Constants

- [NSFontDefaultRenderingMode](nsfontrenderingmode/defaultrenderingmode.md): Determines the actual mode based on the user preference settings.
- [NSFontAntialiasedRenderingMode](nsfontrenderingmode/antialiasedrenderingmode.md): Specifies antialiased, floating-point advancements rendering mode (synonymous with printerFont).
- [NSFontIntegerAdvancementsRenderingMode](nsfontrenderingmode/integeradvancementsrenderingmode.md): Specifies integer advancements rendering mode.
- [NSFontAntialiasedIntegerAdvancementsRenderingMode](nsfontrenderingmode/antialiasedintegeradvancementsrenderingmode.md): Specifies antialiased, integer advancements rendering mode.

## See Also

### Glyphs

- [NSGlyph](nsglyph.md): The type used to specify glyphs.
- [NSGlyphStorage](nsglyphstorage.md): A set of methods that a glyph storage object must implement to interact properly with [NSGlyphGenerator](nsglyphgenerator.md).
- [NSGlyphGenerator](nsglyphgenerator.md): An object that performs the initial, nominal glyph generation phase in the layout process.
- [NSGlyphInfo](nsglyphinfo.md): A glyph attribute in an attributed string.
- [Reserved Glyph Codes](reserved-glyph-codes.md): These constants define reserved glyph codes.
