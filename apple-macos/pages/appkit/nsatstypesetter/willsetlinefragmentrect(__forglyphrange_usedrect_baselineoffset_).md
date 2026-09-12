> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter/willsetlinefragmentrect(_:forglyphrange:usedrect:baselineoffset:)](https://developer.apple.com/documentation/appkit/nsatstypesetter/willsetlinefragmentrect(_:forglyphrange:usedrect:baselineoffset:))

# willSetLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Notifies subclasses that the typesetter is about to set a new line fragment.

## Declaration

```swift
func willSetLineFragmentRect(_ lineRect: UnsafeMutablePointer<NSRect>, forGlyphRange glyphRange: NSRange, usedRect: UnsafeMutablePointer<NSRect>, baselineOffset: UnsafeMutablePointer<CGFloat>)
```

<a id="Discussion"></a>

## Discussion

The typesetter calls this method before calling [setLineFragmentRect(\_:forGlyphRange:usedRect:)](../nslayoutmanager/setlinefragmentrect%28__forglyphrange_usedrect_%29.md), which stores the actual line fragment rectangle location in the layout manager.

The `lineRect` argument is the rectangle in which the glyphs in `glyphRange` are laid out. The `usedRect` argument indicates the portion of `lineRect`, in the [NSTextContainer](../nstextcontainer.md) object’s coordinate system, that actually contains glyphs or other marks that are drawn (including the text container’s line fragment padding). The `usedRect` must be equal to or contained within `lineRect`. The `baselineOffset` argument is the vertical distance in pixels from the line fragment origin to the baseline on which the glyphs align.

A subclass can override this method to customize the text layout process. For example, it could change the shape of the line fragment rectangle. The subclass is responsible for ensuring that the modified rectangle remains valid (for example, that it lies within the text container).

## See Also

### Laying Out Glyphs

- [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for a control glyph, at the specified glyph position and character index in the text container.
- [getLineFragmentRect(\_:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:)](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and the portion of the rectangle that contains marks.
- [hyphenCharacter(forGlyphAt:)](hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph when hyphenation is enabled in the layout manager.
- [hyphenationFactor(forGlyphAt:)](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at the specified glyph index.
- [shouldBreakLine(byHyphenatingBeforeCharacterAt:)](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Breaks a line by hyphenating before the character at the specified index.
- [shouldBreakLine(byWordBeforeCharacterAt:)](shouldbreakline%28bywordbeforecharacterat_%29.md): Breaks a line by word-wrapping before the character at the specified index.
- [setHardInvalidation(\_:forGlyphRange:)](sethardinvalidation%28__forglyphrange_%29.md): Sets a Boolean value that determines whether the layout manager invalidates the specified portion of the glyph cache.

# willSetLineFragmentRect:forGlyphRange:usedRect:baselineOffset: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Notifies subclasses that the typesetter is about to set a new line fragment.

## Declaration

```objectivec
- (void) willSetLineFragmentRect:(NSRect *) lineRect forGlyphRange:(NSRange) glyphRange usedRect:(NSRect *) usedRect baselineOffset:(CGFloat *) baselineOffset;
```

<a id="Discussion"></a>

## Discussion

The typesetter calls this method before calling [setLineFragmentRect:forGlyphRange:usedRect:](../nslayoutmanager/setlinefragmentrect%28__forglyphrange_usedrect_%29.md), which stores the actual line fragment rectangle location in the layout manager.

The `lineRect` argument is the rectangle in which the glyphs in `glyphRange` are laid out. The `usedRect` argument indicates the portion of `lineRect`, in the [NSTextContainer](../nstextcontainer.md) object’s coordinate system, that actually contains glyphs or other marks that are drawn (including the text container’s line fragment padding). The `usedRect` must be equal to or contained within `lineRect`. The `baselineOffset` argument is the vertical distance in pixels from the line fragment origin to the baseline on which the glyphs align.

A subclass can override this method to customize the text layout process. For example, it could change the shape of the line fragment rectangle. The subclass is responsible for ensuring that the modified rectangle remains valid (for example, that it lies within the text container).

## See Also

### Laying Out Glyphs

- [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for a control glyph, at the specified glyph position and character index in the text container.
- [getLineFragmentRect:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:](getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and the portion of the rectangle that contains marks.
- [hyphenCharacterForGlyphAtIndex:](hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph when hyphenation is enabled in the layout manager.
- [hyphenationFactorForGlyphAtIndex:](hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at the specified glyph index.
- [shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Breaks a line by hyphenating before the character at the specified index.
- [shouldBreakLineByWordBeforeCharacterAtIndex:](shouldbreakline%28bywordbeforecharacterat_%29.md): Breaks a line by word-wrapping before the character at the specified index.
- [setHardInvalidation:forGlyphRange:](sethardinvalidation%28__forglyphrange_%29.md): Sets a Boolean value that determines whether the layout manager invalidates the specified portion of the glyph cache.
