> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesettercontrolcharacteraction/horizontaltabaction](https://developer.apple.com/documentation/appkit/nstypesettercontrolcharacteraction/horizontaltabaction)

# horizontalTabAction (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Treated as tab character.

## Declaration

```swift
static var horizontalTabAction: NSTypesetterControlCharacterAction { get }
```

## See Also

### Constants

- [zeroAdvancementAction](zeroadvancementaction.md): Glyphs with this action are filtered out from layout `(notShownAttribute == YES)`.
- [whitespaceAction](whitespaceaction.md): The width for glyphs with this action are determined by [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](../nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md), if the method is implemented; otherwise, same as `NSTypesetterZeroAdvancementAction`.
- [lineBreakAction](linebreakaction.md): Causes line break.
- [paragraphBreakAction](paragraphbreakaction.md): Causes paragraph break; the value returned by [firstLineHeadIndent](../nsparagraphstyle/firstlineheadindent.md) is the advancement used for the following glyph.
- [containerBreakAction](containerbreakaction.md): Causes container break.

# NSTypesetterHorizontalTabAction (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Treated as tab character.

## Declaration

```objectivec
NSTypesetterHorizontalTabAction
```

## See Also

### Constants

- [NSTypesetterZeroAdvancementAction](zeroadvancementaction.md): Glyphs with this action are filtered out from layout `(notShownAttribute == YES)`.
- [NSTypesetterWhitespaceAction](whitespaceaction.md): The width for glyphs with this action are determined by [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](../nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md), if the method is implemented; otherwise, same as `NSTypesetterZeroAdvancementAction`.
- [NSTypesetterLineBreakAction](linebreakaction.md): Causes line break.
- [NSTypesetterParagraphBreakAction](paragraphbreakaction.md): Causes paragraph break; the value returned by [firstLineHeadIndent](../nsparagraphstyle/firstlineheadindent.md) is the advancement used for the following glyph.
- [NSTypesetterContainerBreakAction](containerbreakaction.md): Causes container break.
