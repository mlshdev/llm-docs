> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/saveto(_:)](https://developer.apple.com/documentation/appkit/nsdocument/saveto(_:))

# saveTo(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

The action method invoked in the receiver as first responder when the user chooses the Save To menu command.

## Declaration

```swift
@IBAction func saveTo(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

The default implementation is identical to [saveAs(\_:)](saveas%28__%29.md) except that this method doesn’t clear the document’s edited status and doesn’t reset file location and document type if the document is a native type.

## See Also

### Handling User Actions

- [printDocument(\_:)](printdocument%28__%29.md): Prints the receiver in response to the user choosing the Print menu command.
- [runPageLayout(\_:)](runpagelayout%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Page Setup menu command.
- [revertToSaved(\_:)](reverttosaved%28__%29.md): The action of the File menu item Revert in a document-based app.
- [save(\_:)](save%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save menu command.
- [saveAs(\_:)](saveas%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save As menu command.
- [save(withDelegate:didSave:contextInfo:)](save%28withdelegate_didsave_contextinfo_%29.md): Saves the document and delivers the results to the provided delegate object.

# saveDocumentTo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

The action method invoked in the receiver as first responder when the user chooses the Save To menu command.

## Declaration

```objectivec
- (void) saveDocumentTo:(id) sender;
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

The default implementation is identical to [saveDocumentAs:](saveas%28__%29.md) except that this method doesn’t clear the document’s edited status and doesn’t reset file location and document type if the document is a native type.

## See Also

### Handling User Actions

- [printDocument:](printdocument%28__%29.md): Prints the receiver in response to the user choosing the Print menu command.
- [runPageLayout:](runpagelayout%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Page Setup menu command.
- [revertDocumentToSaved:](reverttosaved%28__%29.md): The action of the File menu item Revert in a document-based app.
- [saveDocument:](save%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save menu command.
- [saveDocumentAs:](saveas%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save As menu command.
- [saveDocumentWithDelegate:didSaveSelector:contextInfo:](save%28withdelegate_didsave_contextinfo_%29.md): Saves the document and delivers the results to the provided delegate object.
