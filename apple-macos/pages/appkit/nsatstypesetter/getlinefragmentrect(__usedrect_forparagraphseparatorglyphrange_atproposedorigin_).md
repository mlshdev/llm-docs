> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/getlinefragmentrect(_:usedrect:forparagraphseparatorglyphrange:atproposedorigin:)](https://developer.apple.com/documentation/appkit/nsatstypesetter/getlinefragmentrect(_:usedrect:forparagraphseparatorglyphrange:atproposedorigin:))

# getLineFragmentRect(\_:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Calculates the line fragment rectangle and the portion of the rectangle that contains marks.

## Declaration

```swift
func getLineFragmentRect(_ lineFragmentRect: UnsafeMutablePointer<NSRect>, usedRect lineFragmentUsedRect: UnsafeMutablePointer<NSRect>, forParagraphSeparatorGlyphRange paragraphSeparatorGlyphRange: NSRange, atProposedOrigin lineOrigin: NSPoint)
```

<a id="Discussion"></a>

## Discussion

The method returns the calculated line fragment rectangle in `lineFragmentRect`, and it returns the used rectangle (the portion of the line fragment rectangle that actually contains marks) in `lineFragmentUsedRect`. The `paragraphSeparatorGlyphRange` is the range of glyphs under consideration, and `lineOrigin` is the origin point of the line fragment rectangle. A `paragraphSeparatorGlyphRange` with length 0 indicates an extra line fragment (which occurs if the last character in the paragraph is a line separator.)

## See Also

### Laying Out Glyphs

- [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for a control glyph, at the specified glyph position and character index in the text container.
- [hyphenCharacter(forGlyphAt:)](hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph when hyphenation is enabled in the layout manager.
- [hyphenationFactor(forGlyphAt:)](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at the specified glyph index.
- [shouldBreakLine(byHyphenatingBeforeCharacterAt:)](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Breaks a line by hyphenating before the character at the specified index.
- [shouldBreakLine(byWordBeforeCharacterAt:)](shouldbreakline%28bywordbeforecharacterat_%29.md): Breaks a line by word-wrapping before the character at the specified index.
- [willSetLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Notifies subclasses that the typesetter is about to set a new line fragment.
- [setHardInvalidation(\_:forGlyphRange:)](sethardinvalidation%28__forglyphrange_%29.md): Sets a Boolean value that determines whether the layout manager invalidates the specified portion of the glyph cache.

# getLineFragmentRect:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Calculates the line fragment rectangle and the portion of the rectangle that contains marks.

## Declaration

```objectivec
- (void) getLineFragmentRect:(NSRect *) lineFragmentRect usedRect:(NSRect *) lineFragmentUsedRect forParagraphSeparatorGlyphRange:(NSRange) paragraphSeparatorGlyphRange atProposedOrigin:(NSPoint) lineOrigin;
```

<a id="Discussion"></a>

## Discussion

The method returns the calculated line fragment rectangle in `lineFragmentRect`, and it returns the used rectangle (the portion of the line fragment rectangle that actually contains marks) in `lineFragmentUsedRect`. The `paragraphSeparatorGlyphRange` is the range of glyphs under consideration, and `lineOrigin` is the origin point of the line fragment rectangle. A `paragraphSeparatorGlyphRange` with length 0 indicates an extra line fragment (which occurs if the last character in the paragraph is a line separator.)

## See Also

### Laying Out Glyphs

- [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for a control glyph, at the specified glyph position and character index in the text container.
- [hyphenCharacterForGlyphAtIndex:](hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph when hyphenation is enabled in the layout manager.
- [hyphenationFactorForGlyphAtIndex:](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at the specified glyph index.
- [shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Breaks a line by hyphenating before the character at the specified index.
- [shouldBreakLineByWordBeforeCharacterAtIndex:](shouldbreakline%28bywordbeforecharacterat_%29.md): Breaks a line by word-wrapping before the character at the specified index.
- [willSetLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Notifies subclasses that the typesetter is about to set a new line fragment.
- [setHardInvalidation:forGlyphRange:](sethardinvalidation%28__forglyphrange_%29.md): Sets a Boolean value that determines whether the layout manager invalidates the specified portion of the glyph cache.
