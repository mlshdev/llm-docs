> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/printdocument(_:)](https://developer.apple.com/documentation/appkit/nsdocument/printdocument(_:))

# printDocument(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Prints the receiver in response to the user choosing the Print menu command.

## Declaration

```swift
@IBAction func printDocument(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

An `NSDocument` object receives this action message as it travels up the responder chain. The default implementation invokes [print(withSettings:showPrintPanel:delegate:didPrint:contextInfo:)](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md).

## See Also

### Related Documentation

- [printInfo](printinfo.md): The printing information associated with the document.
- [shouldChangePrintInfo(\_:)](shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.

### Handling User Actions

- [runPageLayout(\_:)](runpagelayout%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Page Setup menu command.
- [revertToSaved(\_:)](reverttosaved%28__%29.md): The action of the File menu item Revert in a document-based app.
- [save(\_:)](save%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save menu command.
- [saveAs(\_:)](saveas%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save As menu command.
- [saveTo(\_:)](saveto%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save To menu command.
- [save(withDelegate:didSave:contextInfo:)](save%28withdelegate_didsave_contextinfo_%29.md): Saves the document and delivers the results to the provided delegate object.

# printDocument: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Prints the receiver in response to the user choosing the Print menu command.

## Declaration

```objectivec
- (void) printDocument:(id) sender;
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

An `NSDocument` object receives this action message as it travels up the responder chain. The default implementation invokes [printDocumentWithSettings:showPrintPanel:delegate:didPrintSelector:contextInfo:](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md).

## See Also

### Related Documentation

- [printInfo](printinfo.md): The printing information associated with the document.
- [shouldChangePrintInfo:](shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.

### Handling User Actions

- [runPageLayout:](runpagelayout%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Page Setup menu command.
- [revertDocumentToSaved:](reverttosaved%28__%29.md): The action of the File menu item Revert in a document-based app.
- [saveDocument:](save%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save menu command.
- [saveDocumentAs:](saveas%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save As menu command.
- [saveDocumentTo:](saveto%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save To menu command.
- [saveDocumentWithDelegate:didSaveSelector:contextInfo:](save%28withdelegate_didsave_contextinfo_%29.md): Saves the document and delivers the results to the provided delegate object.
