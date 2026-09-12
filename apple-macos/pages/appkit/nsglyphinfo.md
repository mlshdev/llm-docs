> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglyphinfo](https://developer.apple.com/documentation/appkit/nsglyphinfo)

# NSGlyphInfo (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A glyph attribute in an attributed string.

## Declaration

```swift
class NSGlyphInfo
```

<a id="overview"></a>

## Overview

Glyphs are the graphic representations of characters, stored in a font, that the text system draws on a display or printed page. Before text can be laid out, the layout manager (\<[NSLayoutManager](nslayoutmanager.md)) generates a stream of glyphs, using the character and font information specified by the attributed string and contained in the font file. [NSGlyphInfo](nsglyphinfo.md) represents a glyph attribute value ([NSGlyphInfoAttributeName](nsglyphinfoattributename.md)) in an attributed string ([NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring)) and provides a means to override the standard glyph generation process and substitute a specified glyph over the attribute’s range.

Glyph attributes are integer values that the layout manager uses to denote special handling for particular glyphs during rendering. [NSGlyphInfo](nsglyphinfo.md) enables you to override a font’s built-in mapping from a Unicode character code to a corresponding glyph ID. Overriding the mapping allows you to specify a variant glyph for a given character if the font contains multiple variations for that character or to specify a glyph that doesn’t have a standard mapping (such as some ligature glyphs).

## Topics

### Creating a glyph info object

- [init(cgGlyph:for:baseString:)](nsglyphinfo/init%28cgglyph_for_basestring_%29.md): Creates a glyph info object from the specified glyph identifier and font informaton.
- [init(CGGlyph:forFont:baseString:)](nsglyphinfo/init%28cgglyph_forfont_basestring_%29.md)
- [init(coder:)](nsglyphinfo/init%28coder_%29.md)
- [init(glyph:for:baseString:)](nsglyphinfo/init%28glyph_for_basestring_%29.md)
- [init(glyphName:for:baseString:)](nsglyphinfo/init%28glyphname_for_basestring_%29.md)

### Getting information about a glyph info object

- [baseString](nsglyphinfo/basestring.md): The string containing the character represented by the glyph.
- [glyphID](nsglyphinfo/glyphid.md): The glyph identifier, specified as the index into the internal glyph table of the font.

### Deprecated

- [init(characterIdentifier:collection:baseString:)](nsglyphinfo/init%28characteridentifier_collection_basestring_%29.md): Instantiates and returns an `NSGlyphInfo` object using a character identifier and a character collection.
- [init(glyph:forFont:baseString:)](nsglyphinfo/init%28glyph_forfont_basestring_%29.md): Instantiates and returns a glyph information object using a glyph index and a specified font.
- [init(glyphName:forFont:baseString:)](nsglyphinfo/init%28glyphname_forfont_basestring_%29.md): Instantiates and returns a glyph information object using a glyph name and a specified font.
- [characterIdentifier](nsglyphinfo/characteridentifier.md): The receiver’s character identifier (CID).
- [characterCollection](nsglyphinfo/charactercollection.md): A value specifying the glyph–to–character identifier mapping of the receiver.
- [glyphName](nsglyphinfo/glyphname.md): The receiver’s glyph name.
- [NSCharacterCollection](nscharactercollection.md): Values that map character identifiers to glyphs.

### Default Implementations

- [NSGlyphInfo Implementations](nsglyphinfo/nsglyphinfo-implementations.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Glyphs

- [NSGlyph](nsglyph.md): The type used to specify glyphs.
- [NSGlyphStorage](nsglyphstorage.md): A set of methods that a glyph storage object must implement to interact properly with [NSGlyphGenerator](nsglyphgenerator.md).
- [NSGlyphGenerator](nsglyphgenerator.md): An object that performs the initial, nominal glyph generation phase in the layout process.
- [Reserved Glyph Codes](reserved-glyph-codes.md): These constants define reserved glyph codes.
- [NSFontRenderingMode](nsfontrenderingmode.md): The font rendering mode.

# NSGlyphInfo (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A glyph attribute in an attributed string.

## Declaration

```objectivec
@interface NSGlyphInfo : NSObject
```

<a id="overview"></a>

## Overview

Glyphs are the graphic representations of characters, stored in a font, that the text system draws on a display or printed page. Before text can be laid out, the layout manager (\<[NSLayoutManager](nslayoutmanager.md)) generates a stream of glyphs, using the character and font information specified by the attributed string and contained in the font file. [NSGlyphInfo](nsglyphinfo.md) represents a glyph attribute value ([NSGlyphInfoAttributeName](nsglyphinfoattributename.md)) in an attributed string ([NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring)) and provides a means to override the standard glyph generation process and substitute a specified glyph over the attribute’s range.

Glyph attributes are integer values that the layout manager uses to denote special handling for particular glyphs during rendering. [NSGlyphInfo](nsglyphinfo.md) enables you to override a font’s built-in mapping from a Unicode character code to a corresponding glyph ID. Overriding the mapping allows you to specify a variant glyph for a given character if the font contains multiple variations for that character or to specify a glyph that doesn’t have a standard mapping (such as some ligature glyphs).

## Topics

### Creating a glyph info object

- [glyphInfoWithCGGlyph:forFont:baseString:](nsglyphinfo/init%28cgglyph_for_basestring_%29.md): Creates a glyph info object from the specified glyph identifier and font informaton.
- [glyphInfoWithGlyph:forFont:baseString:](nsglyphinfo/init%28glyph_for_basestring_%29.md)
- [glyphInfoWithGlyphName:forFont:baseString:](nsglyphinfo/init%28glyphname_for_basestring_%29.md)

### Getting information about a glyph info object

- [baseString](nsglyphinfo/basestring.md): The string containing the character represented by the glyph.
- [glyphID](nsglyphinfo/glyphid.md): The glyph identifier, specified as the index into the internal glyph table of the font.

### Deprecated

- [glyphInfoWithCharacterIdentifier:collection:baseString:](nsglyphinfo/init%28characteridentifier_collection_basestring_%29.md): Instantiates and returns an `NSGlyphInfo` object using a character identifier and a character collection.
- [characterIdentifier](nsglyphinfo/characteridentifier.md): The receiver’s character identifier (CID).
- [characterCollection](nsglyphinfo/charactercollection.md): A value specifying the glyph–to–character identifier mapping of the receiver.
- [glyphName](nsglyphinfo/glyphname.md): The receiver’s glyph name.
- [NSCharacterCollection](nscharactercollection.md): Values that map character identifiers to glyphs.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Glyphs

- [NSGlyph](nsglyph.md): The type used to specify glyphs.
- [NSGlyphStorage](nsglyphstorage.md): A set of methods that a glyph storage object must implement to interact properly with [NSGlyphGenerator](nsglyphgenerator.md).
- [NSGlyphGenerator](nsglyphgenerator.md): An object that performs the initial, nominal glyph generation phase in the layout process.
- [Reserved Glyph Codes](reserved-glyph-codes.md): These constants define reserved glyph codes.
- [NSFontRenderingMode](nsfontrenderingmode.md): The font rendering mode.
