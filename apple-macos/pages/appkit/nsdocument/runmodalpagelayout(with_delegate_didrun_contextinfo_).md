> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/runmodalpagelayout(with:delegate:didrun:contextinfo:)](https://developer.apple.com/documentation/appkit/nsdocument/runmodalpagelayout(with:delegate:didrun:contextinfo:))

# runModalPageLayout(with:delegate:didRun:contextInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Runs the modal page layout panel with the receiver’s printing information object.

## Declaration

```swift
func runModalPageLayout(with printInfo: NSPrintInfo, delegate: Any?, didRun didRunSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `printInfo`: The `NSPrintInfo` object for the page layout panel to use.
- `delegate`: The delegate to which the selector message is sent.
- `didRunSelector`: The selector of the message sent to the delegate.
- `contextInfo`: Object passed with the callback to provide any additional context information.

<a id="Discussion"></a>

## Discussion

Invoked from the action method [runPageLayout(\_:)](runpagelayout%28__%29.md). Presents the page layout panel app modally if there is no document window to which it can be presented document modally.

When the panel is dismissed, `delegate` is sent a `didRunSelector` message. The `didRunSelector` callback method should have the following signature:

```objc
- (void)documentDidRunModalPageLayout:(NSDocument *)document accepted:(BOOL)accepted  contextInfo:(void *)contextInfo
```

## See Also

### Printing the Document

- [printInfo](printinfo.md): The printing information associated with the document.
- [preparePageLayout(\_:)](preparepagelayout%28__%29.md): Adds document-specific content to the Page Layout panel.
- [runModalPrintOperation(\_:delegate:didRun:contextInfo:)](runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [shouldChangePrintInfo(\_:)](shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.
- [print(withSettings:showPrintPanel:delegate:didPrint:contextInfo:)](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [printOperation(withSettings:)](printoperation%28withsettings_%29.md): Creates and returns a print operation for the document’s contents.
- [pdfPrintOperation](pdfprintoperation.md): A print operation you can use to create a PDF representation of the document’s current contents.
- [saveToPDF(\_:)](savetopdf%28__%29.md): Exports a PDF representation of the document’s current contents.

# runModalPageLayoutWithPrintInfo:delegate:didRunSelector:contextInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Runs the modal page layout panel with the receiver’s printing information object.

## Declaration

```objectivec
- (void) runModalPageLayoutWithPrintInfo:(NSPrintInfo *) printInfo delegate:(id) delegate didRunSelector:(SEL) didRunSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `printInfo`: The `NSPrintInfo` object for the page layout panel to use.
- `delegate`: The delegate to which the selector message is sent.
- `didRunSelector`: The selector of the message sent to the delegate.
- `contextInfo`: Object passed with the callback to provide any additional context information.

<a id="Discussion"></a>

## Discussion

Invoked from the action method [runPageLayout:](runpagelayout%28__%29.md). Presents the page layout panel app modally if there is no document window to which it can be presented document modally.

When the panel is dismissed, `delegate` is sent a `didRunSelector` message. The `didRunSelector` callback method should have the following signature:

```objc
- (void)documentDidRunModalPageLayout:(NSDocument *)document accepted:(BOOL)accepted  contextInfo:(void *)contextInfo
```

## See Also

### Printing the Document

- [printInfo](printinfo.md): The printing information associated with the document.
- [preparePageLayout:](preparepagelayout%28__%29.md): Adds document-specific content to the Page Layout panel.
- [runModalPrintOperation:delegate:didRunSelector:contextInfo:](runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [shouldChangePrintInfo:](shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.
- [printDocumentWithSettings:showPrintPanel:delegate:didPrintSelector:contextInfo:](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [printOperationWithSettings:error:](printoperation%28withsettings_%29.md): Creates and returns a print operation for the document’s contents.
- [PDFPrintOperation](pdfprintoperation.md): A print operation you can use to create a PDF representation of the document’s current contents.
- [saveDocumentToPDF:](savetopdf%28__%29.md): Exports a PDF representation of the document’s current contents.
