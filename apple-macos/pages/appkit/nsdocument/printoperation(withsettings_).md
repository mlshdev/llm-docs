> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/printoperation(withsettings:)](https://developer.apple.com/documentation/appkit/nsdocument/printoperation(withsettings:))

# printOperation(withSettings:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates and returns a print operation for the document’s contents.

## Declaration

```swift
func printOperation(withSettings printSettings: [NSPrintInfo.AttributeKey : Any]) throws -> NSPrintOperation
```

## Parameters

- `printSettings`: The print settings dictionary to use.

<a id="return-value"></a>

## Return Value

The print operation, or `nil` if unsuccessful.

<a id="Discussion"></a>

## Discussion

The print operation can be run to print the document’s current contents. The `NSPrintInfo` attributes in the passed-in `printSettings` dictionary are added to a copy of the document’s print info, and the resulting print info is used for the operation.

> **Important**

>  You must override this method to enable printing in your app. The default implementation raises an exception.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Printing the Document

- [printInfo](printinfo.md): The printing information associated with the document.
- [preparePageLayout(\_:)](preparepagelayout%28__%29.md): Adds document-specific content to the Page Layout panel.
- [runModalPageLayout(with:delegate:didRun:contextInfo:)](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md): Runs the modal page layout panel with the receiver’s printing information object.
- [runModalPrintOperation(\_:delegate:didRun:contextInfo:)](runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [shouldChangePrintInfo(\_:)](shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.
- [print(withSettings:showPrintPanel:delegate:didPrint:contextInfo:)](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [pdfPrintOperation](pdfprintoperation.md): A print operation you can use to create a PDF representation of the document’s current contents.
- [saveToPDF(\_:)](savetopdf%28__%29.md): Exports a PDF representation of the document’s current contents.

# printOperationWithSettings:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates and returns a print operation for the document’s contents.

## Declaration

```objectivec
- (NSPrintOperation *) printOperationWithSettings:(NSDictionary<NSString *,id> *) printSettings error:(NSError **) outError;
```

## Parameters

- `printSettings`: The print settings dictionary to use.
- `outError`: On return, if the print operation could not be created, a pointer to an error object that encapsulates the reason it could not be created.

<a id="return-value"></a>

## Return Value

The print operation, or `nil` if unsuccessful.

<a id="Discussion"></a>

## Discussion

The print operation can be run to print the document’s current contents. The `NSPrintInfo` attributes in the passed-in `printSettings` dictionary are added to a copy of the document’s print info, and the resulting print info is used for the operation.

> **Important**

>  You must override this method to enable printing in your app. The default implementation raises an exception.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Printing the Document

- [printInfo](printinfo.md): The printing information associated with the document.
- [preparePageLayout:](preparepagelayout%28__%29.md): Adds document-specific content to the Page Layout panel.
- [runModalPageLayoutWithPrintInfo:delegate:didRunSelector:contextInfo:](runmodalpagelayout%28with_delegate_didrun_contextinfo_%29.md): Runs the modal page layout panel with the receiver’s printing information object.
- [runModalPrintOperation:delegate:didRunSelector:contextInfo:](runmodalprintoperation%28__delegate_didrun_contextinfo_%29.md): Runs the specified print operation modally.
- [shouldChangePrintInfo:](shouldchangeprintinfo%28__%29.md): Returns a Boolean value that indicates whether the document allows changes to the default printing information.
- [printDocumentWithSettings:showPrintPanel:delegate:didPrintSelector:contextInfo:](print%28withsettings_showprintpanel_delegate_didprint_contextinfo_%29.md): Prints the document’s contents, optionally displaying a print panel to the user.
- [PDFPrintOperation](pdfprintoperation.md): A print operation you can use to create a PDF representation of the document’s current contents.
- [saveDocumentToPDF:](savetopdf%28__%29.md): Exports a PDF representation of the document’s current contents.
