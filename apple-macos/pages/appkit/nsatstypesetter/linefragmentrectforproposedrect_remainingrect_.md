> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/linefragmentrectforproposedrect:remainingrect:](https://developer.apple.com/documentation/appkit/nsatstypesetter/linefragmentrectforproposedrect:remainingrect:)

# lineFragmentRectForProposedRect:remainingRect:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.4)

This method has been deprecated. Use the NSTypesetter method [getLineFragmentRect:usedRect:remainingRect:forStartingGlyphAtIndex:proposedRect:lineSpacing:paragraphSpacingBefore:paragraphSpacingAfter:](../nstypesetter/getlinefragmentrect%28__usedrect_remaining_forstartingglyphat_proposedrect_linespacing_paragraphspacingbefore_paragraphspacingafter_%29.md) instead.

## Declaration

```objectivec
- (NSRect) lineFragmentRectForProposedRect:(NSRect) proposedRect remainingRect:(NSRectPointer) remainingRect;
```

<a id="Discussion"></a>

## Discussion

Returns the largest rectangle available for the proposed rectangle `proposedRect`. It also returns a rectangle in `remainingRect` containing any remaining space, such as that left on the other side of a hole or gap in the text container.

A subclass can override this method to interact with custom glyph storage.

## See Also

### Deprecated

- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:](getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_%29.md): Deprecated. Extracts the information needed to lay out the glyphs in the given glyph buffer from the given glyph range.
