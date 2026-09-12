> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/insertglyph(_:atglyphindex:characterindex:)](https://developer.apple.com/documentation/appkit/nstypesetter/insertglyph(_:atglyphindex:characterindex:))

# insertGlyph(\_:atGlyphIndex:characterIndex:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.13)

Enables the typesetter to insert a new glyph into the stream.

## Declaration

```swift
func insertGlyph(_ glyph: NSGlyph, atGlyphIndex glyphIndex: Int, characterIndex: Int)
```

## Parameters

- `glyph`: The glyph to insert into the glyph cache.
- `glyphIndex`: The index at which to insert `glyph`.
- `characterIndex`: The index of the character that `glyph` maps to. If the glyph is mapped to several characters, `charIndex` should indicate the first character to which it’s mapped.

<a id="Discussion"></a>

## Discussion

The standard typesetter uses this method for inserting hyphenation glyphs. Because this method keeps the glyph caches synchronized, subclasses should always use this method to insert glyphs instead of calling [layoutManager](layoutmanager.md) directly.

A subclass can override this method to interact with custom glyph storage.

## See Also

### Deprecated

- [actionForControlCharacter(at:)](actionforcontrolcharacter%28at_%29.md): Returns the action associated with a control character.
- [deleteGlyphs(in:)](deleteglyphs%28in_%29.md): Deprecated. Deletes the specified glyphs from the glyph cache maintained by the layout manager.
- [substituteGlyphs(in:withGlyphs:)](substituteglyphs%28in_withglyphs_%29.md): Deprecated. Replaces the specified glyphs with specified replacement glyphs.
- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:)](getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Extracts the information needed to lay out the provided glyphs from the provided range.
- [NSTypesetterControlCharacterAction](../nstypesettercontrolcharacteraction.md): The following constants are possible values returned by the [actionForControlCharacter(at:)](actionforcontrolcharacter%28at_%29.md) method to determine the action associated with a control character.

# insertGlyph:atGlyphIndex:characterIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.13)

Enables the typesetter to insert a new glyph into the stream.

## Declaration

```objectivec
- (void) insertGlyph:(NSGlyph) glyph atGlyphIndex:(NSUInteger) glyphIndex characterIndex:(NSUInteger) characterIndex;
```

## Parameters

- `glyph`: The glyph to insert into the glyph cache.
- `glyphIndex`: The index at which to insert `glyph`.
- `characterIndex`: The index of the character that `glyph` maps to. If the glyph is mapped to several characters, `charIndex` should indicate the first character to which it’s mapped.

<a id="Discussion"></a>

## Discussion

The standard typesetter uses this method for inserting hyphenation glyphs. Because this method keeps the glyph caches synchronized, subclasses should always use this method to insert glyphs instead of calling [layoutManager](layoutmanager.md) directly.

A subclass can override this method to interact with custom glyph storage.

## See Also

### Deprecated

- [actionForControlCharacterAtIndex:](actionforcontrolcharacter%28at_%29.md): Returns the action associated with a control character.
- [deleteGlyphsInRange:](deleteglyphs%28in_%29.md): Deprecated. Deletes the specified glyphs from the glyph cache maintained by the layout manager.
- [substituteGlyphsInRange:withGlyphs:](substituteglyphs%28in_withglyphs_%29.md): Deprecated. Replaces the specified glyphs with specified replacement glyphs.
- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:](getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Extracts the information needed to lay out the provided glyphs from the provided range.
- [NSTypesetterControlCharacterAction](../nstypesettercontrolcharacteraction.md): The following constants are possible values returned by the [actionForControlCharacterAtIndex:](actionforcontrolcharacter%28at_%29.md) method to determine the action associated with a control character.
