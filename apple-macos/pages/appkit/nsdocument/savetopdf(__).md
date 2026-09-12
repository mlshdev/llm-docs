> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/savetopdf(_:)](https://developer.apple.com/documentation/appkit/nsdocument/savetopdf(_:))

# saveToPDF(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Exports a PDF representation of the document’s current contents.

## Declaration

```swift
@IBAction func saveToPDF(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

This action method handles the File menu’s “Export As PDF…” item in a document-based application.

The default implementation of this method calls the [print(withSettings:showPrintPanel:delegate:didPrint:contextInfo:)](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md) method, passing a print settings object that contains only the disposition ([save](../nsprintinfo/jobdisposition-swift.struct/save.md)), with user interaction disabled and `NULL` or `nil` for all other parameters.

If your document subclass supports creating PDF representations, you can override this method, if needed.

> **Important**

>  This method does not copy the document’s [printInfo](printinfo.md) to the operation object when creating a PDF printing operation. Your app should maintain a separate [NSPrintInfo](../nsprintinfo.md) instance specifically for creating PDFs and pass it to the print operation’s [printInfo](../nsprintoperation/printinfo.md) method.

## See Also

### Printing the Document

- [printInfo](printinfo.md): The printing information associated with the document.
- [preparePageLayout(\_:)](preparepagelayout%28__%29.md): Adds document-specific content to the Page Layout panel.
- [runModalPageLayout(with:delegate:didRun:contextInfo:)](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md): Runs the modal page layout panel with the receiver’s printing information object.
- [runModalPrintOperation(\_:delegate:didRun:contextInfo:)](runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [shouldChangePrintInfo(\_:)](shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.
- [print(withSettings:showPrintPanel:delegate:didPrint:contextInfo:)](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [printOperation(withSettings:)](printoperation%28withsettings_%29.md): Creates and returns a print operation for the document’s contents.
- [pdfPrintOperation](pdfprintoperation.md): A print operation you can use to create a PDF representation of the document’s current contents.

# saveDocumentToPDF: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Exports a PDF representation of the document’s current contents.

## Declaration

```objectivec
- (void) saveDocumentToPDF:(id) sender;
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

This action method handles the File menu’s “Export As PDF…” item in a document-based application.

The default implementation of this method calls the [printDocumentWithSettings:showPrintPanel:delegate:didPrintSelector:contextInfo:](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md) method, passing a print settings object that contains only the disposition ([NSPrintSaveJob](../nsprintinfo/jobdisposition-swift.struct/save.md)), with user interaction disabled and `NULL` or `nil` for all other parameters.

If your document subclass supports creating PDF representations, you can override this method, if needed.

> **Important**

>  This method does not copy the document’s [printInfo](printinfo.md) to the operation object when creating a PDF printing operation. Your app should maintain a separate [NSPrintInfo](../nsprintinfo.md) instance specifically for creating PDFs and pass it to the print operation’s [printInfo](../nsprintoperation/printinfo.md) method.

## See Also

### Printing the Document

- [printInfo](printinfo.md): The printing information associated with the document.
- [preparePageLayout:](preparepagelayout%28__%29.md): Adds document-specific content to the Page Layout panel.
- [runModalPageLayoutWithPrintInfo:delegate:didRunSelector:contextInfo:](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md): Runs the modal page layout panel with the receiver’s printing information object.
- [runModalPrintOperation:delegate:didRunSelector:contextInfo:](runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [shouldChangePrintInfo:](shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.
- [printDocumentWithSettings:showPrintPanel:delegate:didPrintSelector:contextInfo:](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [printOperationWithSettings:error:](printoperation%28withsettings_%29.md): Creates and returns a print operation for the document’s contents.
- [PDFPrintOperation](pdfprintoperation.md): A print operation you can use to create a PDF representation of the document’s current contents.
