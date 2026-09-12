> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesettercontrolcharacteraction/zeroadvancementaction](https://developer.apple.com/documentation/appkit/nstypesettercontrolcharacteraction/zeroadvancementaction)

# zeroAdvancementAction (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Glyphs with this action are filtered out from layout `(notShownAttribute == YES)`.

## Declaration

```swift
static var zeroAdvancementAction: NSTypesetterControlCharacterAction { get }
```

## See Also

### Constants

- [whitespaceAction](whitespaceaction.md): The width for glyphs with this action are determined by [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](../nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md), if the method is implemented; otherwise, same as `NSTypesetterZeroAdvancementAction`.
- [horizontalTabAction](horizontaltabaction.md): Treated as tab character.
- [lineBreakAction](linebreakaction.md): Causes line break.
- [paragraphBreakAction](paragraphbreakaction.md): Causes paragraph break; the value returned by [firstLineHeadIndent](../nsparagraphstyle/firstlineheadindent.md) is the advancement used for the following glyph.
- [containerBreakAction](containerbreakaction.md): Causes container break.

# NSTypesetterZeroAdvancementAction (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Glyphs with this action are filtered out from layout `(notShownAttribute == YES)`.

## Declaration

```objectivec
NSTypesetterZeroAdvancementAction
```

## See Also

### Constants

- [NSTypesetterWhitespaceAction](whitespaceaction.md): The width for glyphs with this action are determined by [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](../nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md), if the method is implemented; otherwise, same as `NSTypesetterZeroAdvancementAction`.
- [NSTypesetterHorizontalTabAction](horizontaltabaction.md): Treated as tab character.
- [NSTypesetterLineBreakAction](linebreakaction.md): Causes line break.
- [NSTypesetterParagraphBreakAction](paragraphbreakaction.md): Causes paragraph break; the value returned by [firstLineHeadIndent](../nsparagraphstyle/firstlineheadindent.md) is the advancement used for the following glyph.
- [NSTypesetterContainerBreakAction](containerbreakaction.md): Causes container break.
