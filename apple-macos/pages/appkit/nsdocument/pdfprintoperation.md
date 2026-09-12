> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/pdfprintoperation](https://developer.apple.com/documentation/appkit/nsdocument/pdfprintoperation)

# pdfPrintOperation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A print operation you can use to create a PDF representation of the document’s current contents.

## Declaration

```swift
var pdfPrintOperation: NSPrintOperation { get }
```

<a id="Discussion"></a>

## Discussion

The object in this property can be run to print the document’s current contents to a PDF file.

The default print operation stored by this property is obtained by calling the [printOperation(withSettings:)](printoperation%28withsettings_%29.md) method and  passing a print settings object that contains only the disposition ([save](../nsprintinfo/jobdisposition-swift.struct/save.md)) and a `NULL` error object reference. If your document subclass supports creating PDF representations, you can override this property as needed to customize the options.

> **Important**

>  This property does not copy the document’s [printInfo](printinfo.md) to the PDF printing operation object. Your app should maintain a separate [NSPrintInfo](../nsprintinfo.md) instance specifically for creating PDFs and assign it to the [printInfo](../nsprintoperation/printinfo.md) property of the operation object.

## See Also

### Printing the Document

- [printInfo](printinfo.md): The printing information associated with the document.
- [preparePageLayout(\_:)](preparepagelayout%28__%29.md): Adds document-specific content to the Page Layout panel.
- [runModalPageLayout(with:delegate:didRun:contextInfo:)](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md): Runs the modal page layout panel with the receiver’s printing information object.
- [runModalPrintOperation(\_:delegate:didRun:contextInfo:)](runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [shouldChangePrintInfo(\_:)](shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.
- [print(withSettings:showPrintPanel:delegate:didPrint:contextInfo:)](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [printOperation(withSettings:)](printoperation%28withsettings_%29.md): Creates and returns a print operation for the document’s contents.
- [saveToPDF(\_:)](savetopdf%28__%29.md): Exports a PDF representation of the document’s current contents.

# PDFPrintOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A print operation you can use to create a PDF representation of the document’s current contents.

## Declaration

```objectivec
@property (strong, readonly) NSPrintOperation * PDFPrintOperation;
```

<a id="Discussion"></a>

## Discussion

The object in this property can be run to print the document’s current contents to a PDF file.

The default print operation stored by this property is obtained by calling the [printOperationWithSettings:error:](printoperation%28withsettings_%29.md) method and  passing a print settings object that contains only the disposition ([NSPrintSaveJob](../nsprintinfo/jobdisposition-swift.struct/save.md)) and a `NULL` error object reference. If your document subclass supports creating PDF representations, you can override this property as needed to customize the options.

> **Important**

>  This property does not copy the document’s [printInfo](printinfo.md) to the PDF printing operation object. Your app should maintain a separate [NSPrintInfo](../nsprintinfo.md) instance specifically for creating PDFs and assign it to the [printInfo](../nsprintoperation/printinfo.md) property of the operation object.

## See Also

### Printing the Document

- [printInfo](printinfo.md): The printing information associated with the document.
- [preparePageLayout:](preparepagelayout%28__%29.md): Adds document-specific content to the Page Layout panel.
- [runModalPageLayoutWithPrintInfo:delegate:didRunSelector:contextInfo:](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md): Runs the modal page layout panel with the receiver’s printing information object.
- [runModalPrintOperation:delegate:didRunSelector:contextInfo:](runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [shouldChangePrintInfo:](shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.
- [printDocumentWithSettings:showPrintPanel:delegate:didPrintSelector:contextInfo:](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [printOperationWithSettings:error:](printoperation%28withsettings_%29.md): Creates and returns a print operation for the document’s contents.
- [saveDocumentToPDF:](savetopdf%28__%29.md): Exports a PDF representation of the document’s current contents.
