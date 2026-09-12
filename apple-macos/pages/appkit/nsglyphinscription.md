> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglyphinscription](https://developer.apple.com/documentation/appkit/nsglyphinscription)

# NSGlyphInscription

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Constants that specify how a glyph is laid out relative to the previous glyph.

> Use [NSGlyphProperty](nslayoutmanager/glyphproperty.md) instead.

## Declaration

```objectivec
enum NSGlyphInscription : NSUInteger;
```

<a id="overview"></a>

## Overview

The glyph inscription constants are possible values for the glyph attribute [NSGlyphAttributeInscribe](nsglyphattributeinscribe.md); glyph inscriptions are set during glyph generation. The only constants that the text system currently uses are `NSGlyphInscribeBase` (for most glyphs) and `NSGlyphInscribeOverstrike` (for nonbase glyphs). Nonbase glyphs occur when diacritical marks are applied to a base character, and the font does not have a single glyph to represent the combination.

For example, if a font did not contain a single glyph for ü, but did contain separate glyphs for u and ¨, then it could be rendered with a base glyph u followed by a nonbase glyph ¨. In that case the nonbase glyph would have the value `NSGlyphInscribeOverstrike` for the inscribe attribute.

## Topics

### Constants

- [NSGlyphInscribeBase](nsglyphinscription/nsglyphinscribebase.md): Deprecated. A base glyph; a character that the font can represent with a single glyph.
- [NSGlyphInscribeBelow](nsglyphinscription/nsglyphinscribebelow.md): Deprecated. A glyph is rendered below the previous glyph.
- [NSGlyphInscribeAbove](nsglyphinscription/nsglyphinscribeabove.md): Deprecated. A glyph is rendered above the previous glyph.
- [NSGlyphInscribeOverstrike](nsglyphinscription/nsglyphinscribeoverstrike.md): Deprecated. A glyph is rendered on top of the previous glyph.
- [NSGlyphInscribeOverBelow](nsglyphinscription/nsglyphinscribeoverbelow.md): Deprecated. A glyph is rendered on top and below the previous glyph.
