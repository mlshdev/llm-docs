> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/printinfo](https://developer.apple.com/documentation/appkit/nsdocument/printinfo)

# printInfo (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The printing information associated with the document.

## Declaration

```swift
@NSCopying var printInfo: NSPrintInfo { get set }
```

<a id="return-value"></a>

## Return Value

The receiver’s `NSPrintInfo` object.

<a id="Discussion"></a>

## Discussion

The default value of this property is the default [NSPrintInfo](../nsprintinfo.md) object. To customize the printing information, assign a new value to this property. The Page Layout panel may also update the object in this property to reflect the options selected by the user.

## See Also

### Related Documentation

- [runPageLayout(\_:)](runpagelayout%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Page Setup menu command.

### Printing the Document

- [preparePageLayout(\_:)](preparepagelayout%28__%29.md): Adds document-specific content to the Page Layout panel.
- [runModalPageLayout(with:delegate:didRun:contextInfo:)](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md): Runs the modal page layout panel with the receiver’s printing information object.
- [runModalPrintOperation(\_:delegate:didRun:contextInfo:)](runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [shouldChangePrintInfo(\_:)](shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.
- [print(withSettings:showPrintPanel:delegate:didPrint:contextInfo:)](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [printOperation(withSettings:)](printoperation%28withsettings_%29.md): Creates and returns a print operation for the document’s contents.
- [pdfPrintOperation](pdfprintoperation.md): A print operation you can use to create a PDF representation of the document’s current contents.
- [saveToPDF(\_:)](savetopdf%28__%29.md): Exports a PDF representation of the document’s current contents.

# printInfo (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The printing information associated with the document.

## Declaration

```objectivec
@property (copy) NSPrintInfo * printInfo;
```

<a id="return-value"></a>

## Return Value

The receiver’s `NSPrintInfo` object.

<a id="Discussion"></a>

## Discussion

The default value of this property is the default [NSPrintInfo](../nsprintinfo.md) object. To customize the printing information, assign a new value to this property. The Page Layout panel may also update the object in this property to reflect the options selected by the user.

## See Also

### Related Documentation

- [runPageLayout:](runpagelayout%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Page Setup menu command.

### Printing the Document

- [preparePageLayout:](preparepagelayout%28__%29.md): Adds document-specific content to the Page Layout panel.
- [runModalPageLayoutWithPrintInfo:delegate:didRunSelector:contextInfo:](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md): Runs the modal page layout panel with the receiver’s printing information object.
- [runModalPrintOperation:delegate:didRunSelector:contextInfo:](runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [shouldChangePrintInfo:](shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.
- [printDocumentWithSettings:showPrintPanel:delegate:didPrintSelector:contextInfo:](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [printOperationWithSettings:error:](printoperation%28withsettings_%29.md): Creates and returns a print operation for the document’s contents.
- [PDFPrintOperation](pdfprintoperation.md): A print operation you can use to create a PDF representation of the document’s current contents.
- [saveDocumentToPDF:](savetopdf%28__%29.md): Exports a PDF representation of the document’s current contents.
