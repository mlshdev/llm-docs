> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesettercontrolcharacteraction](https://developer.apple.com/documentation/appkit/nstypesettercontrolcharacteraction)

# NSTypesetterControlCharacterAction (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

The following constants are possible values returned by the [actionForControlCharacter(at:)](nstypesetter/actionforcontrolcharacter%28at_%29.md) method to determine the action associated with a control character.

## Declaration

```swift
struct NSTypesetterControlCharacterAction
```

## Topics

### Constants

- [zeroAdvancementAction](nstypesettercontrolcharacteraction/zeroadvancementaction.md): Glyphs with this action are filtered out from layout `(notShownAttribute == YES)`.
- [whitespaceAction](nstypesettercontrolcharacteraction/whitespaceaction.md): The width for glyphs with this action are determined by [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md), if the method is implemented; otherwise, same as `NSTypesetterZeroAdvancementAction`.
- [horizontalTabAction](nstypesettercontrolcharacteraction/horizontaltabaction.md): Treated as tab character.
- [lineBreakAction](nstypesettercontrolcharacteraction/linebreakaction.md): Causes line break.
- [paragraphBreakAction](nstypesettercontrolcharacteraction/paragraphbreakaction.md): Causes paragraph break; the value returned by [firstLineHeadIndent](nsparagraphstyle/firstlineheadindent.md) is the advancement used for the following glyph.
- [containerBreakAction](nstypesettercontrolcharacteraction/containerbreakaction.md): Causes container break.

### Initializers

- [init(rawValue:)](nstypesettercontrolcharacteraction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Deprecated

- [actionForControlCharacter(at:)](nstypesetter/actionforcontrolcharacter%28at_%29.md): Returns the action associated with a control character.
- [deleteGlyphs(in:)](nstypesetter/deleteglyphs%28in_%29.md): Deprecated. Deletes the specified glyphs from the glyph cache maintained by the layout manager.
- [substituteGlyphs(in:withGlyphs:)](nstypesetter/substituteglyphs%28in_withglyphs_%29.md): Deprecated. Replaces the specified glyphs with specified replacement glyphs.
- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:)](nstypesetter/getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Extracts the information needed to lay out the provided glyphs from the provided range.
- [insertGlyph(\_:atGlyphIndex:characterIndex:)](nstypesetter/insertglyph%28__atglyphindex_characterindex_%29.md): Deprecated. Enables the typesetter to insert a new glyph into the stream.

# NSTypesetterControlCharacterAction (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The following constants are possible values returned by the [actionForControlCharacterAtIndex:](nstypesetter/actionforcontrolcharacter%28at_%29.md) method to determine the action associated with a control character.

## Declaration

```objectivec
enum NSTypesetterControlCharacterAction : NSUInteger;
```

## Topics

### Constants

- [NSTypesetterZeroAdvancementAction](nstypesettercontrolcharacteraction/zeroadvancementaction.md): Glyphs with this action are filtered out from layout `(notShownAttribute == YES)`.
- [NSTypesetterWhitespaceAction](nstypesettercontrolcharacteraction/whitespaceaction.md): The width for glyphs with this action are determined by [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md), if the method is implemented; otherwise, same as `NSTypesetterZeroAdvancementAction`.
- [NSTypesetterHorizontalTabAction](nstypesettercontrolcharacteraction/horizontaltabaction.md): Treated as tab character.
- [NSTypesetterLineBreakAction](nstypesettercontrolcharacteraction/linebreakaction.md): Causes line break.
- [NSTypesetterParagraphBreakAction](nstypesettercontrolcharacteraction/paragraphbreakaction.md): Causes paragraph break; the value returned by [firstLineHeadIndent](nsparagraphstyle/firstlineheadindent.md) is the advancement used for the following glyph.
- [NSTypesetterContainerBreakAction](nstypesettercontrolcharacteraction/containerbreakaction.md): Causes container break.

## See Also

### Deprecated

- [actionForControlCharacterAtIndex:](nstypesetter/actionforcontrolcharacter%28at_%29.md): Returns the action associated with a control character.
- [deleteGlyphsInRange:](nstypesetter/deleteglyphs%28in_%29.md): Deprecated. Deletes the specified glyphs from the glyph cache maintained by the layout manager.
- [substituteGlyphsInRange:withGlyphs:](nstypesetter/substituteglyphs%28in_withglyphs_%29.md): Deprecated. Replaces the specified glyphs with specified replacement glyphs.
- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:](nstypesetter/getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Extracts the information needed to lay out the provided glyphs from the provided range.
- [insertGlyph:atGlyphIndex:characterIndex:](nstypesetter/insertglyph%28__atglyphindex_characterindex_%29.md): Deprecated. Enables the typesetter to insert a new glyph into the stream.
