> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/boundingbox(forcontrolglyphat:for:proposedlinefragment:glyphposition:characterindex:)](https://developer.apple.com/documentation/appkit/nsatstypesetter/boundingbox(forcontrolglyphat:for:proposedlinefragment:glyphposition:characterindex:))

# boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the bounding rectangle for a control glyph, at the specified glyph position and character index in the text container.

## Declaration

```swift
func boundingBox(forControlGlyphAt glyphIndex: Int, for textContainer: NSTextContainer, proposedLineFragment proposedRect: NSRect, glyphPosition: NSPoint, characterIndex charIndex: Int) -> NSRect
```

<a id="Discussion"></a>

## Discussion

Returns the bounding rectangle for the control glyph at `glyphIndex`, at the given `glyphPosition` and character index `charIndex`, in `textContainer`. The proposed line fragment rectangle is specified by `proposedRect`.

The typesetter calls this method when it encounters an [NSControlGlyph](../nscontrolglyph.md). The default behavior is to return zero width for control glyphs. A subclass can override this method to do something different, such as implement a way to display control characters.

[NSGlyphGenerator](../nsglyphgenerator.md) can choose whether or not to map control characters to [NSControlGlyph](../nscontrolglyph.md). Tab characters, for example, do not use this facility.

## See Also

### Laying Out Glyphs

- [getLineFragmentRect(\_:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:)](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and the portion of the rectangle that contains marks.
- [hyphenCharacter(forGlyphAt:)](hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph when hyphenation is enabled in the layout manager.
- [hyphenationFactor(forGlyphAt:)](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at the specified glyph index.
- [shouldBreakLine(byHyphenatingBeforeCharacterAt:)](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Breaks a line by hyphenating before the character at the specified index.
- [shouldBreakLine(byWordBeforeCharacterAt:)](shouldbreakline%28bywordbeforecharacterat_%29.md): Breaks a line by word-wrapping before the character at the specified index.
- [willSetLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Notifies subclasses that the typesetter is about to set a new line fragment.
- [setHardInvalidation(\_:forGlyphRange:)](sethardinvalidation%28__forglyphrange_%29.md): Sets a Boolean value that determines whether the layout manager invalidates the specified portion of the glyph cache.

# boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the bounding rectangle for a control glyph, at the specified glyph position and character index in the text container.

## Declaration

```objectivec
- (NSRect) boundingBoxForControlGlyphAtIndex:(NSUInteger) glyphIndex forTextContainer:(NSTextContainer *) textContainer proposedLineFragment:(NSRect) proposedRect glyphPosition:(NSPoint) glyphPosition characterIndex:(NSUInteger) charIndex;
```

<a id="Discussion"></a>

## Discussion

Returns the bounding rectangle for the control glyph at `glyphIndex`, at the given `glyphPosition` and character index `charIndex`, in `textContainer`. The proposed line fragment rectangle is specified by `proposedRect`.

The typesetter calls this method when it encounters an [NSControlGlyph](../nscontrolglyph.md). The default behavior is to return zero width for control glyphs. A subclass can override this method to do something different, such as implement a way to display control characters.

[NSGlyphGenerator](../nsglyphgenerator.md) can choose whether or not to map control characters to [NSControlGlyph](../nscontrolglyph.md). Tab characters, for example, do not use this facility.

## See Also

### Laying Out Glyphs

- [getLineFragmentRect:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and the portion of the rectangle that contains marks.
- [hyphenCharacterForGlyphAtIndex:](hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph when hyphenation is enabled in the layout manager.
- [hyphenationFactorForGlyphAtIndex:](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at the specified glyph index.
- [shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Breaks a line by hyphenating before the character at the specified index.
- [shouldBreakLineByWordBeforeCharacterAtIndex:](shouldbreakline%28bywordbeforecharacterat_%29.md): Breaks a line by word-wrapping before the character at the specified index.
- [willSetLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Notifies subclasses that the typesetter is about to set a new line fragment.
- [setHardInvalidation:forGlyphRange:](sethardinvalidation%28__forglyphrange_%29.md): Sets a Boolean value that determines whether the layout manager invalidates the specified portion of the glyph cache.
