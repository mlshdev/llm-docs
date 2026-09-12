> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/runpagelayout(_:)](https://developer.apple.com/documentation/appkit/nsdocument/runpagelayout(_:))

# runPageLayout(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

The action method invoked in the receiver as first responder when the user chooses the Page Setup menu command.

## Declaration

```swift
@IBAction func runPageLayout(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

The default implementation invokes [runModalPageLayout(with:delegate:didRun:contextInfo:)](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md) with the document’s current NSPrintInfo object as argument; if the user clicks the OK button and the document authorizes changes to its printing information ([shouldChangePrintInfo(\_:)](shouldchangeprintinfo%28__%29.md)), the method sets the document’s new `NSPrintInfo` object and increments the document’s change count.

## See Also

### Related Documentation

- [updateChangeCount(\_:)](updatechangecount%28__%29.md): Updates the receiver’s change count according to the given change type.
- [printInfo](printinfo.md): The printing information associated with the document.

### Handling User Actions

- [printDocument(\_:)](printdocument%28__%29.md): Prints the receiver in response to the user choosing the Print menu command.
- [revertToSaved(\_:)](reverttosaved%28__%29.md): The action of the File menu item Revert in a document-based app.
- [save(\_:)](save%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save menu command.
- [saveAs(\_:)](saveas%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save As menu command.
- [saveTo(\_:)](saveto%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save To menu command.
- [save(withDelegate:didSave:contextInfo:)](save%28withdelegate_didsave_contextinfo_%29.md): Saves the document and delivers the results to the provided delegate object.

# runPageLayout: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

The action method invoked in the receiver as first responder when the user chooses the Page Setup menu command.

## Declaration

```objectivec
- (void) runPageLayout:(id) sender;
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

The default implementation invokes [runModalPageLayoutWithPrintInfo:delegate:didRunSelector:contextInfo:](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md) with the document’s current NSPrintInfo object as argument; if the user clicks the OK button and the document authorizes changes to its printing information ([shouldChangePrintInfo:](shouldchangeprintinfo%28__%29.md)), the method sets the document’s new `NSPrintInfo` object and increments the document’s change count.

## See Also

### Related Documentation

- [updateChangeCount:](updatechangecount%28__%29.md): Updates the receiver’s change count according to the given change type.
- [printInfo](printinfo.md): The printing information associated with the document.

### Handling User Actions

- [printDocument:](printdocument%28__%29.md): Prints the receiver in response to the user choosing the Print menu command.
- [revertDocumentToSaved:](reverttosaved%28__%29.md): The action of the File menu item Revert in a document-based app.
- [saveDocument:](save%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save menu command.
- [saveDocumentAs:](saveas%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save As menu command.
- [saveDocumentTo:](saveto%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save To menu command.
- [saveDocumentWithDelegate:didSaveSelector:contextInfo:](save%28withdelegate_didsave_contextinfo_%29.md): Saves the document and delivers the results to the provided delegate object.
