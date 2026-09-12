> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglyphgenerator](https://developer.apple.com/documentation/appkit/nsglyphgenerator)

# NSGlyphGenerator (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that performs the initial, nominal glyph generation phase in the layout process.

## Declaration

```swift
class NSGlyphGenerator
```

<a id="overview"></a>

## Overview

The nominal glyph generation pass essentially generates one glyph per character; the typesetter may later make substitutions in the glyph stream, for example, changing an acute accent glyph followed by an “e” glyph into a single acute-accented “é” glyph.

[NSGlyphGenerator](nsglyphgenerator.md) communicates via the [NSGlyphStorage](nsglyphstorage.md) protocol. An example of a class that conforms to the protocol is [NSLayoutManager](nslayoutmanager.md).

## Topics

### Obtaining a glyph generator

- [shared](nsglyphgenerator/shared.md): Returns a shared instance of `NSGlyphGenerator`.

### Generating glyphs

- [generateGlyphs(for:desiredNumberOfCharacters:glyphIndex:characterIndex:)](nsglyphgenerator/generateglyphs%28for_desirednumberofcharacters_glyphindex_characterindex_%29.md): Generates glyphs for the specified glyph storage object (`NSLayoutManager` by default).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Glyphs

- [NSGlyph](nsglyph.md): The type used to specify glyphs.
- [NSGlyphStorage](nsglyphstorage.md): A set of methods that a glyph storage object must implement to interact properly with [NSGlyphGenerator](nsglyphgenerator.md).
- [NSGlyphInfo](nsglyphinfo.md): A glyph attribute in an attributed string.
- [Reserved Glyph Codes](reserved-glyph-codes.md): These constants define reserved glyph codes.
- [NSFontRenderingMode](nsfontrenderingmode.md): The font rendering mode.

# NSGlyphGenerator (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that performs the initial, nominal glyph generation phase in the layout process.

## Declaration

```objectivec
@interface NSGlyphGenerator : NSObject
```

<a id="overview"></a>

## Overview

The nominal glyph generation pass essentially generates one glyph per character; the typesetter may later make substitutions in the glyph stream, for example, changing an acute accent glyph followed by an “e” glyph into a single acute-accented “é” glyph.

[NSGlyphGenerator](nsglyphgenerator.md) communicates via the [NSGlyphStorage](nsglyphstorage.md) protocol. An example of a class that conforms to the protocol is [NSLayoutManager](nslayoutmanager.md).

## Topics

### Obtaining a glyph generator

- [sharedGlyphGenerator](nsglyphgenerator/shared.md): Returns a shared instance of `NSGlyphGenerator`.

### Generating glyphs

- [generateGlyphsForGlyphStorage:desiredNumberOfCharacters:glyphIndex:characterIndex:](nsglyphgenerator/generateglyphs%28for_desirednumberofcharacters_glyphindex_characterindex_%29.md): Generates glyphs for the specified glyph storage object (`NSLayoutManager` by default).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Glyphs

- [NSGlyph](nsglyph.md): The type used to specify glyphs.
- [NSGlyphStorage](nsglyphstorage.md): A set of methods that a glyph storage object must implement to interact properly with [NSGlyphGenerator](nsglyphgenerator.md).
- [NSGlyphInfo](nsglyphinfo.md): A glyph attribute in an attributed string.
- [Reserved Glyph Codes](reserved-glyph-codes.md): These constants define reserved glyph codes.
- [NSFontRenderingMode](nsfontrenderingmode.md): The font rendering mode.
