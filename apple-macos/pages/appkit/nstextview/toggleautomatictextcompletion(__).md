> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/toggleautomatictextcompletion(_:)](https://developer.apple.com/documentation/appkit/nstextview/toggleautomatictextcompletion(_:))

# toggleAutomaticTextCompletion(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

## Declaration

```swift
@IBAction func toggleAutomaticTextCompletion(_ sender: Any?)
```

## See Also

### Setting behavioral attributes

- [allowsUndo](allowsundo.md): A Boolean value that indicates whether the receiver allows undo.
- [isEditable](iseditable.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to edit text.
- [isSelectable](isselectable.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to select text.
- [isFieldEditor](isfieldeditor.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager behave as field editors.
- [isRichText](isrichtext.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to apply attributes to specific ranges of text.
- [importsGraphics](importsgraphics.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to import files by dragging.
- [setBaseWritingDirection(\_:range:)](setbasewritingdirection%28__range_%29.md): Sets the base writing direction of a range of text.
- [defaultParagraphStyle](defaultparagraphstyle.md): The receiver’s default paragraph style.
- [outline(\_:)](outline%28__%29.md): Adds the outline attribute to the selected text attributes if absent; removes the attribute if present.
- [allowsImageEditing](allowsimageediting.md): Indicates whether image attachments should permit editing of their images.
- [isAutomaticQuoteSubstitutionEnabled](isautomaticquotesubstitutionenabled.md): A Boolean value that enables and disables automatic quotation mark substitution.
- [toggleAutomaticQuoteSubstitution(\_:)](toggleautomaticquotesubstitution%28__%29.md): Changes the state of automatic quotation mark substitution from enabled to disabled and vice versa.
- [isAutomaticLinkDetectionEnabled](isautomaticlinkdetectionenabled.md): A Boolean value that enables or disables automatic link detection.
- [toggleAutomaticLinkDetection(\_:)](toggleautomaticlinkdetection%28__%29.md): Changes the state of automatic link detection from enabled to disabled and vice versa.
- [displaysLinkToolTips](displayslinktooltips.md): A Boolean value that indicates whether the text view automatically supplies the destination of a link as a tooltip for text that has a link attribute.

# toggleAutomaticTextCompletion: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

## Declaration

```objectivec
- (void) toggleAutomaticTextCompletion:(id) sender;
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
- [toggleBaseWritingDirection:](togglebasewritingdirection_.md): Deprecated. Changes the base writing direction of a paragraph between left-to-right and right-to-left.
- [defaultParagraphStyle](defaultparagraphstyle.md): The receiver’s default paragraph style.
- [outline:](outline%28__%29.md): Adds the outline attribute to the selected text attributes if absent; removes the attribute if present.
- [allowsImageEditing](allowsimageediting.md): Indicates whether image attachments should permit editing of their images.
- [automaticQuoteSubstitutionEnabled](isautomaticquotesubstitutionenabled.md): A Boolean value that enables and disables automatic quotation mark substitution.
- [toggleAutomaticQuoteSubstitution:](toggleautomaticquotesubstitution%28__%29.md): Changes the state of automatic quotation mark substitution from enabled to disabled and vice versa.
- [automaticLinkDetectionEnabled](isautomaticlinkdetectionenabled.md): A Boolean value that enables or disables automatic link detection.
- [toggleAutomaticLinkDetection:](toggleautomaticlinkdetection%28__%29.md): Changes the state of automatic link detection from enabled to disabled and vice versa.
