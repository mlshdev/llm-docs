> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglyphstorage](https://developer.apple.com/documentation/appkit/nsglyphstorage)

# NSGlyphStorage (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that a glyph storage object must implement to interact properly with [NSGlyphGenerator](nsglyphgenerator.md).

## Declaration

```swift
protocol NSGlyphStorage
```

<a id="overview"></a>

## Overview

An example of a class that conforms to the [NSGlyphStorage](nsglyphstorage.md) protocol is [NSLayoutManager](nslayoutmanager.md).

## Topics

### Returning text storage

- [attributedString()](nsglyphstorage/attributedstring%28%29.md): Returns the text storage object from which the `NSGlyphGenerator` object procures characters for glyph generation.

### Returning glyph display options

- [layoutOptions()](nsglyphstorage/layoutoptions%28%29.md): Returns the current layout options.

### Modifying the glyph cache

- [insertGlyphs(\_:length:forStartingGlyphAt:characterIndex:)](nsglyphstorage/insertglyphs%28__length_forstartingglyphat_characterindex_%29.md): Inserts the given glyphs into the glyph cache and maps them to the specified characters.
- [setIntAttribute(\_:value:forGlyphAt:)](nsglyphstorage/setintattribute%28__value_forglyphat_%29.md): Sets a custom attribute value for a given glyph.

### Constants

- [Layout Options](layout-options.md): Layout options returned as a bit mask by the [layoutOptions()](nsglyphstorage/layoutoptions%28%29.md) method.

## Relationships

### Conforming Types

- [NSLayoutManager](nslayoutmanager.md)

## See Also

### Glyphs

- [NSGlyph](nsglyph.md): The type used to specify glyphs.
- [NSGlyphGenerator](nsglyphgenerator.md): An object that performs the initial, nominal glyph generation phase in the layout process.
- [NSGlyphInfo](nsglyphinfo.md): A glyph attribute in an attributed string.
- [Reserved Glyph Codes](reserved-glyph-codes.md): These constants define reserved glyph codes.
- [NSFontRenderingMode](nsfontrenderingmode.md): The font rendering mode.

# NSGlyphStorage (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that a glyph storage object must implement to interact properly with [NSGlyphGenerator](nsglyphgenerator.md).

## Declaration

```objectivec
@protocol NSGlyphStorage
```

<a id="overview"></a>

## Overview

An example of a class that conforms to the [NSGlyphStorage](nsglyphstorage.md) protocol is [NSLayoutManager](nslayoutmanager.md).

## Topics

### Returning text storage

- [attributedString](nsglyphstorage/attributedstring%28%29.md): Returns the text storage object from which the `NSGlyphGenerator` object procures characters for glyph generation.

### Returning glyph display options

- [layoutOptions](nsglyphstorage/layoutoptions%28%29.md): Returns the current layout options.

### Modifying the glyph cache

- [insertGlyphs:length:forStartingGlyphAtIndex:characterIndex:](nsglyphstorage/insertglyphs%28__length_forstartingglyphat_characterindex_%29.md): Inserts the given glyphs into the glyph cache and maps them to the specified characters.
- [setIntAttribute:value:forGlyphAtIndex:](nsglyphstorage/setintattribute%28__value_forglyphat_%29.md): Sets a custom attribute value for a given glyph.

### Constants

- [Layout Options](layout-options.md): Layout options returned as a bit mask by the [layoutOptions](nsglyphstorage/layoutoptions%28%29.md) method.

## Relationships

### Conforming Types

- [NSLayoutManager](nslayoutmanager.md)

## See Also

### Glyphs

- [NSGlyph](nsglyph.md): The type used to specify glyphs.
- [NSGlyphGenerator](nsglyphgenerator.md): An object that performs the initial, nominal glyph generation phase in the layout process.
- [NSGlyphInfo](nsglyphinfo.md): A glyph attribute in an attributed string.
- [Reserved Glyph Codes](reserved-glyph-codes.md): These constants define reserved glyph codes.
- [NSFontRenderingMode](nsfontrenderingmode.md): The font rendering mode.
