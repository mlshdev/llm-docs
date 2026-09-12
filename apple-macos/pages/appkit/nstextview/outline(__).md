> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/outline(_:)](https://developer.apple.com/documentation/appkit/nstextview/outline(_:))

# outline(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the outline attribute to the selected text attributes if absent; removes the attribute if present.

## Declaration

```swift
func outline(_ sender: Any?)
```

## Parameters

- `sender`: The control that sent the message; may be `nil`.

<a id="Discussion"></a>

## Discussion

If there is a selection and the first character of the selected range has a non-zero stroke width, or if there is no selection and the typing attributes have a non-zero stroke width, then the stroke width is removed; otherwise the value of `NSStrokeWidthAttributeName` is set to the default value for outline (3.0).

Operates on the selected range if the receiver contains rich text. For plain text the range is the entire contents of the receiver.

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
- [allowsImageEditing](allowsimageediting.md): Indicates whether image attachments should permit editing of their images.
- [isAutomaticQuoteSubstitutionEnabled](isautomaticquotesubstitutionenabled.md): A Boolean value that enables and disables automatic quotation mark substitution.
- [toggleAutomaticQuoteSubstitution(\_:)](toggleautomaticquotesubstitution%28__%29.md): Changes the state of automatic quotation mark substitution from enabled to disabled and vice versa.
- [isAutomaticLinkDetectionEnabled](isautomaticlinkdetectionenabled.md): A Boolean value that enables or disables automatic link detection.
- [toggleAutomaticLinkDetection(\_:)](toggleautomaticlinkdetection%28__%29.md): Changes the state of automatic link detection from enabled to disabled and vice versa.
- [displaysLinkToolTips](displayslinktooltips.md): A Boolean value that indicates whether the text view automatically supplies the destination of a link as a tooltip for text that has a link attribute.
- [isAutomaticTextCompletionEnabled](isautomatictextcompletionenabled.md): A Boolean value that indicates whether the text view supplies autocompletion suggestions as the user types.

# outline: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the outline attribute to the selected text attributes if absent; removes the attribute if present.

## Declaration

```objectivec
- (void) outline:(id) sender;
```

## Parameters

- `sender`: The control that sent the message; may be `nil`.

<a id="Discussion"></a>

## Discussion

If there is a selection and the first character of the selected range has a non-zero stroke width, or if there is no selection and the typing attributes have a non-zero stroke width, then the stroke width is removed; otherwise the value of `NSStrokeWidthAttributeName` is set to the default value for outline (3.0).

Operates on the selected range if the receiver contains rich text. For plain text the range is the entire contents of the receiver.

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
- [allowsImageEditing](allowsimageediting.md): Indicates whether image attachments should permit editing of their images.
- [automaticQuoteSubstitutionEnabled](isautomaticquotesubstitutionenabled.md): A Boolean value that enables and disables automatic quotation mark substitution.
- [toggleAutomaticQuoteSubstitution:](toggleautomaticquotesubstitution%28__%29.md): Changes the state of automatic quotation mark substitution from enabled to disabled and vice versa.
- [automaticLinkDetectionEnabled](isautomaticlinkdetectionenabled.md): A Boolean value that enables or disables automatic link detection.
- [toggleAutomaticLinkDetection:](toggleautomaticlinkdetection%28__%29.md): Changes the state of automatic link detection from enabled to disabled and vice versa.
- [displaysLinkToolTips](displayslinktooltips.md): A Boolean value that indicates whether the text view automatically supplies the destination of a link as a tooltip for text that has a link attribute.
