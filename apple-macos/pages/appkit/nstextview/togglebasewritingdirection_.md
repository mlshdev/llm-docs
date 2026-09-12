> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/togglebasewritingdirection:](https://developer.apple.com/documentation/appkit/nstextview/togglebasewritingdirection:)

# toggleBaseWritingDirection:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.6)

Changes the base writing direction of a paragraph between left-to-right and right-to-left.

> This method is deprecated in favor of the NSResponder class’s methods `makeBaseWritingDirectionNatural:`, `makeBaseWritingDirectionLeftToRight:`, and `makeBaseWritingDirectionRightToLeft:`.

## Declaration

```objectivec
- (void) toggleBaseWritingDirection:(id) sender;
```

## See Also

### Setting behavioral attributes

- [allowsUndo](allowsundo.md): A Boolean value that indicates whether the receiver allows undo.
- [editable](iseditable.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to edit text.
- [selectable](isselectable.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to select text.
- [fieldEditor](isfieldeditor.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager behave as field editors.
- [richText](isrichtext.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to apply attributes to specific ranges of text.
- [importsGraphics](importsgraphics.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to import files by dragging.
- [setBaseWritingDirection:range:](setbasewritingdirection%28__range_%29.md): Sets the base writing direction of a range of text.
- [defaultParagraphStyle](defaultparagraphstyle.md): The receiver’s default paragraph style.
- [outline:](outline%28__%29.md): Adds the outline attribute to the selected text attributes if absent; removes the attribute if present.
- [allowsImageEditing](allowsimageediting.md): Indicates whether image attachments should permit editing of their images.
- [automaticQuoteSubstitutionEnabled](isautomaticquotesubstitutionenabled.md): A Boolean value that enables and disables automatic quotation mark substitution.
- [toggleAutomaticQuoteSubstitution:](toggleautomaticquotesubstitution%28__%29.md): Changes the state of automatic quotation mark substitution from enabled to disabled and vice versa.
- [automaticLinkDetectionEnabled](isautomaticlinkdetectionenabled.md): A Boolean value that enables or disables automatic link detection.
- [toggleAutomaticLinkDetection:](toggleautomaticlinkdetection%28__%29.md): Changes the state of automatic link detection from enabled to disabled and vice versa.
- [displaysLinkToolTips](displayslinktooltips.md): A Boolean value that indicates whether the text view automatically supplies the destination of a link as a tooltip for text that has a link attribute.
