> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/isautomaticlinkdetectionenabled](https://developer.apple.com/documentation/appkit/nstextview/isautomaticlinkdetectionenabled)

# isAutomaticLinkDetectionEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean value that enables or disables automatic link detection.

## Declaration

```swift
var isAutomaticLinkDetectionEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), automatic link detection is enabled; if [false](https://developer.apple.com/documentation/swift/false), it is disabled.

Automatic link detection causes strings representing URLs typed in the view to be automatically made into links to those URLs.

## See Also

### Related Documentation

- [url(at:effectiveRange:)](https://developer.apple.com/documentation/foundation/nsattributedstring/url%28at:effectiverange:%29): Deprecated. Returns a URL, either from a link attribute or from text at the specified location that appears to be a URL string, for use in automatic link detection.

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
- [toggleAutomaticLinkDetection(\_:)](toggleautomaticlinkdetection%28__%29.md): Changes the state of automatic link detection from enabled to disabled and vice versa.
- [displaysLinkToolTips](displayslinktooltips.md): A Boolean value that indicates whether the text view automatically supplies the destination of a link as a tooltip for text that has a link attribute.
- [isAutomaticTextCompletionEnabled](isautomatictextcompletionenabled.md): A Boolean value that indicates whether the text view supplies autocompletion suggestions as the user types.

# automaticLinkDetectionEnabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean value that enables or disables automatic link detection.

## Declaration

```objectivec
@property (getter=isAutomaticLinkDetectionEnabled) BOOL automaticLinkDetectionEnabled;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), automatic link detection is enabled; if [false](https://developer.apple.com/documentation/swift/false), it is disabled.

Automatic link detection causes strings representing URLs typed in the view to be automatically made into links to those URLs.

## See Also

### Related Documentation

- [URLAtIndex:effectiveRange:](https://developer.apple.com/documentation/foundation/nsattributedstring/url%28at:effectiverange:%29): Deprecated. Returns a URL, either from a link attribute or from text at the specified location that appears to be a URL string, for use in automatic link detection.

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
- [toggleAutomaticLinkDetection:](toggleautomaticlinkdetection%28__%29.md): Changes the state of automatic link detection from enabled to disabled and vice versa.
- [displaysLinkToolTips](displayslinktooltips.md): A Boolean value that indicates whether the text view automatically supplies the destination of a link as a tooltip for text that has a link attribute.
