> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesettercontrolcharacteraction/linebreakaction](https://developer.apple.com/documentation/appkit/nstypesettercontrolcharacteraction/linebreakaction)

# lineBreakAction (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Causes line break.

## Declaration

```swift
static var lineBreakAction: NSTypesetterControlCharacterAction { get }
```

## See Also

### Constants

- [zeroAdvancementAction](zeroadvancementaction.md): Glyphs with this action are filtered out from layout `(notShownAttribute == YES)`.
- [whitespaceAction](whitespaceaction.md): The width for glyphs with this action are determined by [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](../nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md), if the method is implemented; otherwise, same as `NSTypesetterZeroAdvancementAction`.
- [horizontalTabAction](horizontaltabaction.md): Treated as tab character.
- [paragraphBreakAction](paragraphbreakaction.md): Causes paragraph break; the value returned by [firstLineHeadIndent](../nsparagraphstyle/firstlineheadindent.md) is the advancement used for the following glyph.
- [containerBreakAction](containerbreakaction.md): Causes container break.

# NSTypesetterLineBreakAction (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Causes line break.

## Declaration

```objectivec
NSTypesetterLineBreakAction
```

## See Also

### Constants

- [NSTypesetterZeroAdvancementAction](zeroadvancementaction.md): Glyphs with this action are filtered out from layout `(notShownAttribute == YES)`.
- [NSTypesetterWhitespaceAction](whitespaceaction.md): The width for glyphs with this action are determined by [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](../nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md), if the method is implemented; otherwise, same as `NSTypesetterZeroAdvancementAction`.
- [NSTypesetterHorizontalTabAction](horizontaltabaction.md): Treated as tab character.
- [NSTypesetterParagraphBreakAction](paragraphbreakaction.md): Causes paragraph break; the value returned by [firstLineHeadIndent](../nsparagraphstyle/firstlineheadindent.md) is the advancement used for the following glyph.
- [NSTypesetterContainerBreakAction](containerbreakaction.md): Causes container break.
