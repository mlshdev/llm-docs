> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/saveas(_:)](https://developer.apple.com/documentation/appkit/nsdocument/saveas(_:))

# saveAs(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

The action method invoked in the receiver as first responder when the user chooses the Save As menu command.

## Declaration

```swift
@IBAction func saveAs(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

The default implementation runs the modal Save panel to get the file location under which to save the document. It writes the document to this file, sets the document’s file location and document type (if a native type), and clears the document’s edited status.

## See Also

### Related Documentation

- [updateChangeCount(\_:)](updatechangecount%28__%29.md): Updates the receiver’s change count according to the given change type.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [fileURL](fileurl.md): The location of the document’s on-disk representation.

### Handling User Actions

- [printDocument(\_:)](printdocument%28__%29.md): Prints the receiver in response to the user choosing the Print menu command.
- [runPageLayout(\_:)](runpagelayout%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Page Setup menu command.
- [revertToSaved(\_:)](reverttosaved%28__%29.md): The action of the File menu item Revert in a document-based app.
- [save(\_:)](save%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save menu command.
- [saveTo(\_:)](saveto%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save To menu command.
- [save(withDelegate:didSave:contextInfo:)](save%28withdelegate_didsave_contextinfo_%29.md): Saves the document and delivers the results to the provided delegate object.

# saveDocumentAs: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

The action method invoked in the receiver as first responder when the user chooses the Save As menu command.

## Declaration

```objectivec
- (void) saveDocumentAs:(id) sender;
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

The default implementation runs the modal Save panel to get the file location under which to save the document. It writes the document to this file, sets the document’s file location and document type (if a native type), and clears the document’s edited status.

## See Also

### Related Documentation

- [updateChangeCount:](updatechangecount%28__%29.md): Updates the receiver’s change count according to the given change type.
- [fileType](filetype.md): The name of the document type, as specified in the app’s information property-list file.
- [fileURL](fileurl.md): The location of the document’s on-disk representation.

### Handling User Actions

- [printDocument:](printdocument%28__%29.md): Prints the receiver in response to the user choosing the Print menu command.
- [runPageLayout:](runpagelayout%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Page Setup menu command.
- [revertDocumentToSaved:](reverttosaved%28__%29.md): The action of the File menu item Revert in a document-based app.
- [saveDocument:](save%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save menu command.
- [saveDocumentTo:](saveto%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save To menu command.
- [saveDocumentWithDelegate:didSaveSelector:contextInfo:](save%28withdelegate_didsave_contextinfo_%29.md): Saves the document and delivers the results to the provided delegate object.
