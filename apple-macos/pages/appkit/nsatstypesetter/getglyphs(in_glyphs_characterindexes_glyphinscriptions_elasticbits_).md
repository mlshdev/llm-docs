> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/getglyphs(in:glyphs:characterindexes:glyphinscriptions:elasticbits:)](https://developer.apple.com/documentation/appkit/nsatstypesetter/getglyphs(in:glyphs:characterindexes:glyphinscriptions:elasticbits:))

# getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.13)

Extracts the information needed to lay out the glyphs in the given glyph buffer from the given glyph range.

## Declaration

```swift
func getGlyphs(in glyphsRange: NSRange, glyphs glyphBuffer: UnsafeMutablePointer<NSGlyph>!, characterIndexes charIndexBuffer: UnsafeMutablePointer<Int>!, glyphInscriptions inscribeBuffer: UnsafeMutablePointer<NSGlyphInscription>!, elasticBits elasticBuffer: UnsafeMutablePointer<ObjCBool>!) -> Int
```

<a id="Discussion"></a>

## Discussion

The `charIndexBuffer` contains the original characters for the glyphs. Note that a glyph at index 1 is not necessarily mapped to the character at index 1, since a glyph may be for a ligature or accent.

The `inscribeBuffer` contains the inscription attributes for each glyph, which are used to layout characters that are combined together. The possible values are described in the `Constants` section of the NSLayoutManager reference.

The `elasticBuffer` contains a Boolean value indicating whether a glyph is elastic for each glyph. An elastic glyph can be made longer at the end of a line or when needed for justification.

A subclass can override this method to interact with custom glyph storage.

# getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.13)

Extracts the information needed to lay out the glyphs in the given glyph buffer from the given glyph range.

## Declaration

```objectivec
- (NSUInteger) getGlyphsInRange:(NSRange) glyphsRange glyphs:(NSGlyph *) glyphBuffer characterIndexes:(NSUInteger *) charIndexBuffer glyphInscriptions:(NSGlyphInscription *) inscribeBuffer elasticBits:(BOOL *) elasticBuffer;
```

<a id="Discussion"></a>

## Discussion

The `charIndexBuffer` contains the original characters for the glyphs. Note that a glyph at index 1 is not necessarily mapped to the character at index 1, since a glyph may be for a ligature or accent.

The `inscribeBuffer` contains the inscription attributes for each glyph, which are used to layout characters that are combined together. The possible values are described in the `Constants` section of the NSLayoutManager reference.

The `elasticBuffer` contains a Boolean value indicating whether a glyph is elastic for each glyph. An elastic glyph can be made longer at the end of a line or when needed for justification.

A subclass can override this method to interact with custom glyph storage.

## See Also

### Deprecated

- [lineFragmentRectForProposedRect:remainingRect:](linefragmentrectforproposedrect_remainingrect_.md): Deprecated. This method has been deprecated. Use the NSTypesetter method [getLineFragmentRect:usedRect:remainingRect:forStartingGlyphAtIndex:proposedRect:lineSpacing:paragraphSpacingBefore:paragraphSpacingAfter:](../nstypesetter/getlinefragmentrect%28__usedrect_remaining_forstartingglyphat_proposedrect_linespacing_paragraphspacingbefore_paragraphspacingafter_%29.md) instead.
