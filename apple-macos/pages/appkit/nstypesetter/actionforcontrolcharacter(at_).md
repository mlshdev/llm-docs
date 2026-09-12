> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/actionforcontrolcharacter(at:)](https://developer.apple.com/documentation/appkit/nstypesetter/actionforcontrolcharacter(at:))

# actionForControlCharacter(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the action associated with a control character.

## Declaration

```swift
func actionForControlCharacter(at charIndex: Int) -> NSTypesetterControlCharacterAction
```

## Parameters

- `charIndex`: The index of the control character.

<a id="return-value"></a>

## Return Value

The action associated with the control character at `charIndex`.

## See Also

### Deprecated

- [deleteGlyphs(in:)](deleteglyphs%28in_%29.md): Deprecated. Deletes the specified glyphs from the glyph cache maintained by the layout manager.
- [substituteGlyphs(in:withGlyphs:)](substituteglyphs%28in_withglyphs_%29.md): Deprecated. Replaces the specified glyphs with specified replacement glyphs.
- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:)](getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Extracts the information needed to lay out the provided glyphs from the provided range.
- [insertGlyph(\_:atGlyphIndex:characterIndex:)](insertglyph%28__atglyphindex_characterindex_%29.md): Deprecated. Enables the typesetter to insert a new glyph into the stream.
- [NSTypesetterControlCharacterAction](../nstypesettercontrolcharacteraction.md): The following constants are possible values returned by the [actionForControlCharacter(at:)](actionforcontrolcharacter%28at_%29.md) method to determine the action associated with a control character.

# actionForControlCharacterAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the action associated with a control character.

## Declaration

```objectivec
- (NSTypesetterControlCharacterAction) actionForControlCharacterAtIndex:(NSUInteger) charIndex;
```

## Parameters

- `charIndex`: The index of the control character.

<a id="return-value"></a>

## Return Value

The action associated with the control character at `charIndex`.

## See Also

### Deprecated

- [deleteGlyphsInRange:](deleteglyphs%28in_%29.md): Deprecated. Deletes the specified glyphs from the glyph cache maintained by the layout manager.
- [substituteGlyphsInRange:withGlyphs:](substituteglyphs%28in_withglyphs_%29.md): Deprecated. Replaces the specified glyphs with specified replacement glyphs.
- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:](getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Extracts the information needed to lay out the provided glyphs from the provided range.
- [insertGlyph:atGlyphIndex:characterIndex:](insertglyph%28__atglyphindex_characterindex_%29.md): Deprecated. Enables the typesetter to insert a new glyph into the stream.
- [NSTypesetterControlCharacterAction](../nstypesettercontrolcharacteraction.md): The following constants are possible values returned by the [actionForControlCharacterAtIndex:](actionforcontrolcharacter%28at_%29.md) method to determine the action associated with a control character.
