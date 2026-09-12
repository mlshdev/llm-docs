> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/substituteglyphs(in:withglyphs:)](https://developer.apple.com/documentation/appkit/nstypesetter/substituteglyphs(in:withglyphs:))

# substituteGlyphs(in:withGlyphs:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.13)

Replaces the specified glyphs with specified replacement glyphs.

## Declaration

```swift
func substituteGlyphs(in glyphRange: NSRange, withGlyphs glyphs: UnsafeMutablePointer<NSGlyph>!)
```

## Parameters

- `glyphRange`: The range of glyphs to be substituted.
- `glyphs`: The glyphs to substitute for the glyphs in `glyphRange`.

<a id="Discussion"></a>

## Discussion

This method does not alter the glyph-to-character mapping or invalidate layout information.

A subclass can override this method to interact with custom glyph storage.

## See Also

### Deprecated

- [actionForControlCharacter(at:)](actionforcontrolcharacter%28at_%29.md): Returns the action associated with a control character.
- [deleteGlyphs(in:)](deleteglyphs%28in_%29.md): Deprecated. Deletes the specified glyphs from the glyph cache maintained by the layout manager.
- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:)](getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Extracts the information needed to lay out the provided glyphs from the provided range.
- [insertGlyph(\_:atGlyphIndex:characterIndex:)](insertglyph%28__atglyphindex_characterindex_%29.md): Deprecated. Enables the typesetter to insert a new glyph into the stream.
- [NSTypesetterControlCharacterAction](../nstypesettercontrolcharacteraction.md): The following constants are possible values returned by the [actionForControlCharacter(at:)](actionforcontrolcharacter%28at_%29.md) method to determine the action associated with a control character.

# substituteGlyphsInRange:withGlyphs: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.13)

Replaces the specified glyphs with specified replacement glyphs.

## Declaration

```objectivec
- (void) substituteGlyphsInRange:(NSRange) glyphRange withGlyphs:(NSGlyph *) glyphs;
```

## Parameters

- `glyphRange`: The range of glyphs to be substituted.
- `glyphs`: The glyphs to substitute for the glyphs in `glyphRange`.

<a id="Discussion"></a>

## Discussion

This method does not alter the glyph-to-character mapping or invalidate layout information.

A subclass can override this method to interact with custom glyph storage.

## See Also

### Deprecated

- [actionForControlCharacterAtIndex:](actionforcontrolcharacter%28at_%29.md): Returns the action associated with a control character.
- [deleteGlyphsInRange:](deleteglyphs%28in_%29.md): Deprecated. Deletes the specified glyphs from the glyph cache maintained by the layout manager.
- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:](getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Extracts the information needed to lay out the provided glyphs from the provided range.
- [insertGlyph:atGlyphIndex:characterIndex:](insertglyph%28__atglyphindex_characterindex_%29.md): Deprecated. Enables the typesetter to insert a new glyph into the stream.
- [NSTypesetterControlCharacterAction](../nstypesettercontrolcharacteraction.md): The following constants are possible values returned by the [actionForControlCharacterAtIndex:](actionforcontrolcharacter%28at_%29.md) method to determine the action associated with a control character.
