> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesettercontrolcharacteraction/paragraphbreakaction](https://developer.apple.com/documentation/appkit/nstypesettercontrolcharacteraction/paragraphbreakaction)

# paragraphBreakAction (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Causes paragraph break; the value returned by [firstLineHeadIndent](../nsparagraphstyle/firstlineheadindent.md) is the advancement used for the following glyph.

## Declaration

```swift
static var paragraphBreakAction: NSTypesetterControlCharacterAction { get }
```

## See Also

### Constants

- [zeroAdvancementAction](zeroadvancementaction.md): Glyphs with this action are filtered out from layout `(notShownAttribute == YES)`.
- [whitespaceAction](whitespaceaction.md): The width for glyphs with this action are determined by [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](../nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md), if the method is implemented; otherwise, same as `NSTypesetterZeroAdvancementAction`.
- [horizontalTabAction](horizontaltabaction.md): Treated as tab character.
- [lineBreakAction](linebreakaction.md): Causes line break.
- [containerBreakAction](containerbreakaction.md): Causes container break.

# NSTypesetterParagraphBreakAction (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Causes paragraph break; the value returned by [firstLineHeadIndent](../nsparagraphstyle/firstlineheadindent.md) is the advancement used for the following glyph.

## Declaration

```objectivec
NSTypesetterParagraphBreakAction
```

## See Also

### Constants

- [NSTypesetterZeroAdvancementAction](zeroadvancementaction.md): Glyphs with this action are filtered out from layout `(notShownAttribute == YES)`.
- [NSTypesetterWhitespaceAction](whitespaceaction.md): The width for glyphs with this action are determined by [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](../nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md), if the method is implemented; otherwise, same as `NSTypesetterZeroAdvancementAction`.
- [NSTypesetterHorizontalTabAction](horizontaltabaction.md): Treated as tab character.
- [NSTypesetterLineBreakAction](linebreakaction.md): Causes line break.
- [NSTypesetterContainerBreakAction](containerbreakaction.md): Causes container break.
