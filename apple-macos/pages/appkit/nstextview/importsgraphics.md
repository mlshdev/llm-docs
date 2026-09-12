> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/importsgraphics](https://developer.apple.com/documentation/appkit/nstextview/importsgraphics)

# importsGraphics (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to import files by dragging.

## Declaration

```swift
var importsGraphics: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) to allow the user to import files by dragging onto the text views sharing the receiver’s layout manager, [false](https://developer.apple.com/documentation/swift/false) otherwise.

Text views that are set to accept dragged files are also set to allow rich text. By default, text views don’t accept dragged files but do allow rich text.

## See Also

### Related Documentation

- [insert(\_:at:)](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/insert%28_:at:%29): Inserts the characters and attributes of the given attributed string into the receiver at the given index.
- [init(attachment:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init%28attachment:%29): Creates an attributed string with an attachment.
- [textStorage](textstorage.md): The receiver’s text storage object.

### Setting behavioral attributes

- [allowsUndo](allowsundo.md): A Boolean value that indicates whether the receiver allows undo.
- [isEditable](iseditable.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to edit text.
- [isSelectable](isselectable.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to select text.
- [isFieldEditor](isfieldeditor.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager behave as field editors.
- [isRichText](isrichtext.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to apply attributes to specific ranges of text.
- [setBaseWritingDirection(\_:range:)](setbasewritingdirection%28__range_%29.md): Sets the base writing direction of a range of text.
- [defaultParagraphStyle](defaultparagraphstyle.md): The receiver’s default paragraph style.
- [outline(\_:)](outline%28__%29.md): Adds the outline attribute to the selected text attributes if absent; removes the attribute if present.
- [allowsImageEditing](allowsimageediting.md): Indicates whether image attachments should permit editing of their images.
- [isAutomaticQuoteSubstitutionEnabled](isautomaticquotesubstitutionenabled.md): A Boolean value that enables and disables automatic quotation mark substitution.
- [toggleAutomaticQuoteSubstitution(\_:)](toggleautomaticquotesubstitution%28__%29.md): Changes the state of automatic quotation mark substitution from enabled to disabled and vice versa.
- [isAutomaticLinkDetectionEnabled](isautomaticlinkdetectionenabled.md): A Boolean value that enables or disables automatic link detection.
- [toggleAutomaticLinkDetection(\_:)](toggleautomaticlinkdetection%28__%29.md): Changes the state of automatic link detection from enabled to disabled and vice versa.
- [displaysLinkToolTips](displayslinktooltips.md): A Boolean value that indicates whether the text view automatically supplies the destination of a link as a tooltip for text that has a link attribute.
- [isAutomaticTextCompletionEnabled](isautomatictextcompletionenabled.md): A Boolean value that indicates whether the text view supplies autocompletion suggestions as the user types.

# importsGraphics (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to import files by dragging.

## Declaration

```objectivec
@property BOOL importsGraphics;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) to allow the user to import files by dragging onto the text views sharing the receiver’s layout manager, [false](https://developer.apple.com/documentation/swift/false) otherwise.

Text views that are set to accept dragged files are also set to allow rich text. By default, text views don’t accept dragged files but do allow rich text.

## See Also

### Related Documentation

- [insertAttributedString:atIndex:](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/insert%28_:at:%29): Inserts the characters and attributes of the given attributed string into the receiver at the given index.
- [attributedStringWithAttachment:](https://developer.apple.com/documentation/foundation/nsattributedstring/init%28attachment:%29): Creates an attributed string with an attachment.
- [textStorage](textstorage.md): The receiver’s text storage object.

### Setting behavioral attributes

- [allowsUndo](allowsundo.md): A Boolean value that indicates whether the receiver allows undo.
- [editable](iseditable.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to edit text.
- [selectable](isselectable.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to select text.
- [fieldEditor](isfieldeditor.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager behave as field editors.
- [richText](isrichtext.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager allow the user to apply attributes to specific ranges of text.
- [setBaseWritingDirection:range:](setbasewritingdirection%28__range_%29.md): Sets the base writing direction of a range of text.
- [toggleBaseWritingDirection:](togglebasewritingdirection_.md): Deprecated. Changes the base writing direction of a paragraph between left-to-right and right-to-left.
- [defaultParagraphStyle](defaultparagraphstyle.md): The receiver’s default paragraph style.
- [outline:](outline%28__%29.md): Adds the outline attribute to the selected text attributes if absent; removes the attribute if present.
- [allowsImageEditing](allowsimageediting.md): Indicates whether image attachments should permit editing of their images.
- [automaticQuoteSubstitutionEnabled](isautomaticquotesubstitutionenabled.md): A Boolean value that enables and disables automatic quotation mark substitution.
- [toggleAutomaticQuoteSubstitution:](toggleautomaticquotesubstitution%28__%29.md): Changes the state of automatic quotation mark substitution from enabled to disabled and vice versa.
- [automaticLinkDetectionEnabled](isautomaticlinkdetectionenabled.md): A Boolean value that enables or disables automatic link detection.
- [toggleAutomaticLinkDetection:](toggleautomaticlinkdetection%28__%29.md): Changes the state of automatic link detection from enabled to disabled and vice versa.
- [displaysLinkToolTips](displayslinktooltips.md): A Boolean value that indicates whether the text view automatically supplies the destination of a link as a tooltip for text that has a link attribute.
