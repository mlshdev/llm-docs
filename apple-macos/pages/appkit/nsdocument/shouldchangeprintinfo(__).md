> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/shouldchangeprintinfo(_:)](https://developer.apple.com/documentation/appkit/nsdocument/shouldchangeprintinfo(_:))

# shouldChangePrintInfo(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the document allows changes to the default printing information.

## Declaration

```swift
func shouldChangePrintInfo(_ newPrintInfo: NSPrintInfo) -> Bool
```

## Parameters

- `newPrintInfo`: The `NSPrintInfo` object that is the result of the user approving the page layout panel presented by [runPageLayout(\_:)](runpagelayout%28__%29.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) by default; subclasses can override this method to return [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is invoked by the [runPageLayout(\_:)](runpagelayout%28__%29.md) method, which sets a new `NSPrintInfo`object for the document only if this method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Printing the Document

- [printInfo](printinfo.md): The printing information associated with the document.
- [preparePageLayout(\_:)](preparepagelayout%28__%29.md): Adds document-specific content to the Page Layout panel.
- [runModalPageLayout(with:delegate:didRun:contextInfo:)](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md): Runs the modal page layout panel with the receiver’s printing information object.
- [runModalPrintOperation(\_:delegate:didRun:contextInfo:)](runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [print(withSettings:showPrintPanel:delegate:didPrint:contextInfo:)](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [printOperation(withSettings:)](printoperation%28withsettings_%29.md): Creates and returns a print operation for the document’s contents.
- [pdfPrintOperation](pdfprintoperation.md): A print operation you can use to create a PDF representation of the document’s current contents.
- [saveToPDF(\_:)](savetopdf%28__%29.md): Exports a PDF representation of the document’s current contents.

# shouldChangePrintInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the document allows changes to the default printing information.

## Declaration

```objectivec
- (BOOL) shouldChangePrintInfo:(NSPrintInfo *) newPrintInfo;
```

## Parameters

- `newPrintInfo`: The `NSPrintInfo` object that is the result of the user approving the page layout panel presented by [runPageLayout:](runpagelayout%28__%29.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) by default; subclasses can override this method to return [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is invoked by the [runPageLayout:](runpagelayout%28__%29.md) method, which sets a new `NSPrintInfo`object for the document only if this method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Printing the Document

- [printInfo](printinfo.md): The printing information associated with the document.
- [preparePageLayout:](preparepagelayout%28__%29.md): Adds document-specific content to the Page Layout panel.
- [runModalPageLayoutWithPrintInfo:delegate:didRunSelector:contextInfo:](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md): Runs the modal page layout panel with the receiver’s printing information object.
- [runModalPrintOperation:delegate:didRunSelector:contextInfo:](runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [printDocumentWithSettings:showPrintPanel:delegate:didPrintSelector:contextInfo:](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [printOperationWithSettings:error:](printoperation%28withsettings_%29.md): Creates and returns a print operation for the document’s contents.
- [PDFPrintOperation](pdfprintoperation.md): A print operation you can use to create a PDF representation of the document’s current contents.
- [saveDocumentToPDF:](savetopdf%28__%29.md): Exports a PDF representation of the document’s current contents.
