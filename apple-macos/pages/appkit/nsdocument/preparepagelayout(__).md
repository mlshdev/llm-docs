> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/preparepagelayout(_:)](https://developer.apple.com/documentation/appkit/nsdocument/preparepagelayout(_:))

# preparePageLayout(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds document-specific content to the Page Layout panel.

## Declaration

```swift
func preparePageLayout(_ pageLayout: NSPageLayout) -> Bool
```

## Parameters

- `pageLayout`: The page layout panel to prepare.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successfully prepared; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The [runModalPageLayoutWithPrintInfo:](runmodalpagelayoutwithprintinfo_.md) and [runModalPageLayout(with:delegate:didRun:contextInfo:)](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md) methods call this method to allow the document to customize the Page Layout panel `pageLayout`. You might use this method to add a document-related accessory view.

The default implementation returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Printing the Document

- [printInfo](printinfo.md): The printing information associated with the document.
- [runModalPageLayout(with:delegate:didRun:contextInfo:)](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md): Runs the modal page layout panel with the receiver’s printing information object.
- [runModalPrintOperation(\_:delegate:didRun:contextInfo:)](runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [shouldChangePrintInfo(\_:)](shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.
- [print(withSettings:showPrintPanel:delegate:didPrint:contextInfo:)](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [printOperation(withSettings:)](printoperation%28withsettings_%29.md): Creates and returns a print operation for the document’s contents.
- [pdfPrintOperation](pdfprintoperation.md): A print operation you can use to create a PDF representation of the document’s current contents.
- [saveToPDF(\_:)](savetopdf%28__%29.md): Exports a PDF representation of the document’s current contents.

# preparePageLayout: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds document-specific content to the Page Layout panel.

## Declaration

```objectivec
- (BOOL) preparePageLayout:(NSPageLayout *) pageLayout;
```

## Parameters

- `pageLayout`: The page layout panel to prepare.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successfully prepared; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The [runModalPageLayoutWithPrintInfo:](runmodalpagelayoutwithprintinfo_.md) and [runModalPageLayoutWithPrintInfo:delegate:didRunSelector:contextInfo:](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md) methods call this method to allow the document to customize the Page Layout panel `pageLayout`. You might use this method to add a document-related accessory view.

The default implementation returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Printing the Document

- [printInfo](printinfo.md): The printing information associated with the document.
- [runModalPageLayoutWithPrintInfo:delegate:didRunSelector:contextInfo:](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md): Runs the modal page layout panel with the receiver’s printing information object.
- [runModalPrintOperation:delegate:didRunSelector:contextInfo:](runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [shouldChangePrintInfo:](shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.
- [printDocumentWithSettings:showPrintPanel:delegate:didPrintSelector:contextInfo:](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [printOperationWithSettings:error:](printoperation%28withsettings_%29.md): Creates and returns a print operation for the document’s contents.
- [PDFPrintOperation](pdfprintoperation.md): A print operation you can use to create a PDF representation of the document’s current contents.
- [saveDocumentToPDF:](savetopdf%28__%29.md): Exports a PDF representation of the document’s current contents.
