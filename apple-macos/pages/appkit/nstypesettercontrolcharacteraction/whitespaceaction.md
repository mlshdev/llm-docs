> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesettercontrolcharacteraction/whitespaceaction](https://developer.apple.com/documentation/appkit/nstypesettercontrolcharacteraction/whitespaceaction)

# whitespaceAction (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The width for glyphs with this action are determined by [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](../nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md), if the method is implemented; otherwise, same as `NSTypesetterZeroAdvancementAction`.

## Declaration

```swift
static var whitespaceAction: NSTypesetterControlCharacterAction { get }
```

## See Also

### Constants

- [zeroAdvancementAction](zeroadvancementaction.md): Glyphs with this action are filtered out from layout `(notShownAttribute == YES)`.
- [horizontalTabAction](horizontaltabaction.md): Treated as tab character.
- [lineBreakAction](linebreakaction.md): Causes line break.
- [paragraphBreakAction](paragraphbreakaction.md): Causes paragraph break; the value returned by [firstLineHeadIndent](../nsparagraphstyle/firstlineheadindent.md) is the advancement used for the following glyph.
- [containerBreakAction](containerbreakaction.md): Causes container break.

# NSTypesetterWhitespaceAction (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The width for glyphs with this action are determined by [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](../nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md), if the method is implemented; otherwise, same as `NSTypesetterZeroAdvancementAction`.

## Declaration

```objectivec
NSTypesetterWhitespaceAction
```

## See Also

### Constants

- [NSTypesetterZeroAdvancementAction](zeroadvancementaction.md): Glyphs with this action are filtered out from layout `(notShownAttribute == YES)`.
- [NSTypesetterHorizontalTabAction](horizontaltabaction.md): Treated as tab character.
- [NSTypesetterLineBreakAction](linebreakaction.md): Causes line break.
- [NSTypesetterParagraphBreakAction](paragraphbreakaction.md): Causes paragraph break; the value returned by [firstLineHeadIndent](../nsparagraphstyle/firstlineheadindent.md) is the advancement used for the following glyph.
- [NSTypesetterContainerBreakAction](containerbreakaction.md): Causes container break.
