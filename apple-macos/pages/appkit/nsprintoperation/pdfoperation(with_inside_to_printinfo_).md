> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/pdfoperation(with:inside:to:printinfo:)](https://developer.apple.com/documentation/appkit/nsprintoperation/pdfoperation(with:inside:to:printinfo:))

# pdfOperation(with:inside:to:printInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a new print operation object ready to control the copying of PDF graphics from the specified view using the specified print settings.

## Declaration

```swift
class func pdfOperation(with view: NSView, inside rect: NSRect, to data: NSMutableData, printInfo: NSPrintInfo) -> NSPrintOperation
```

## Parameters

- `view`: The view containing the data to be turned into PDF data.
- `rect`: The portion of the view (specified in points in the view’s coordinate space) to be rendered as PDF data.
- `data`: An empty `NSMutableData` object. After the job is run, this object contains the PDF data.
- `printInfo`: The print settings to use when generating the PDF data.

<a id="return-value"></a>

## Return Value

The new `NSPrintOperation` object. You must run the operation to generate the PDF data.

<a id="Discussion"></a>

## Discussion

This method raises an `NSPrintOperationExistsException` if there is already a print operation in progress; otherwise the returned object is made the current print operation for this thread.

## See Also

### Related Documentation

- [run()](run%28%29.md): Runs the print operation on the current thread.

### Creating the Printing Operation Object

- [epsOperation(with:inside:to:)](epsoperation%28with_inside_to_%29.md): Creates and returns a new print operation object ready to control the copying of EPS graphics from the specified view.
- [epsOperation(with:inside:to:printInfo:)](epsoperation%28with_inside_to_printinfo_%29.md): Creates and returns a new print operation object ready to control the copying of EPS graphics from the specified view using the specified print settings.
- [epsOperation(with:inside:toPath:printInfo:)](epsoperation%28with_inside_topath_printinfo_%29.md): Creates and returns a new print operation object ready to control the copying of EPS graphics from the specified view and write the resulting data to the specified file.
- [pdfOperation(with:inside:to:)](pdfoperation%28with_inside_to_%29.md): Creates and returns a new print operation object ready to control the copying of PDF graphics from the specified view.
- [pdfOperation(with:inside:toPath:printInfo:)](pdfoperation%28with_inside_topath_printinfo_%29.md): Creates and returns a new print operation object ready to control the copying of PDF graphics from the specified view and write the resulting data to the specified file.
- [init(view:)](init%28view_%29.md): Creates and returns an print operation object ready to control the printing of the specified view.
- [init(view:printInfo:)](init%28view_printinfo_%29.md): Creates and returns an print operation object ready to control the printing of the specified view using custom print settings.

# PDFOperationWithView:insideRect:toData:printInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a new print operation object ready to control the copying of PDF graphics from the specified view using the specified print settings.

## Declaration

```objectivec
+ (NSPrintOperation *) PDFOperationWithView:(NSView *) view insideRect:(NSRect) rect toData:(NSMutableData *) data printInfo:(NSPrintInfo *) printInfo;
```

## Parameters

- `view`: The view containing the data to be turned into PDF data.
- `rect`: The portion of the view (specified in points in the view’s coordinate space) to be rendered as PDF data.
- `data`: An empty `NSMutableData` object. After the job is run, this object contains the PDF data.
- `printInfo`: The print settings to use when generating the PDF data.

<a id="return-value"></a>

## Return Value

The new `NSPrintOperation` object. You must run the operation to generate the PDF data.

<a id="Discussion"></a>

## Discussion

This method raises an `NSPrintOperationExistsException` if there is already a print operation in progress; otherwise the returned object is made the current print operation for this thread.

## See Also

### Related Documentation

- [runOperation](run%28%29.md): Runs the print operation on the current thread.

### Creating the Printing Operation Object

- [EPSOperationWithView:insideRect:toData:](epsoperation%28with_inside_to_%29.md): Creates and returns a new print operation object ready to control the copying of EPS graphics from the specified view.
- [EPSOperationWithView:insideRect:toData:printInfo:](epsoperation%28with_inside_to_printinfo_%29.md): Creates and returns a new print operation object ready to control the copying of EPS graphics from the specified view using the specified print settings.
- [EPSOperationWithView:insideRect:toPath:printInfo:](epsoperation%28with_inside_topath_printinfo_%29.md): Creates and returns a new print operation object ready to control the copying of EPS graphics from the specified view and write the resulting data to the specified file.
- [PDFOperationWithView:insideRect:toData:](pdfoperation%28with_inside_to_%29.md): Creates and returns a new print operation object ready to control the copying of PDF graphics from the specified view.
- [PDFOperationWithView:insideRect:toPath:printInfo:](pdfoperation%28with_inside_topath_printinfo_%29.md): Creates and returns a new print operation object ready to control the copying of PDF graphics from the specified view and write the resulting data to the specified file.
- [printOperationWithView:](init%28view_%29.md): Creates and returns an print operation object ready to control the printing of the specified view.
- [printOperationWithView:printInfo:](init%28view_printinfo_%29.md): Creates and returns an print operation object ready to control the printing of the specified view using custom print settings.
