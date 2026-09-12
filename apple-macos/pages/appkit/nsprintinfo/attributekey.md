> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/attributekey](https://developer.apple.com/documentation/appkit/nsprintinfo/attributekey)

# NSPrintInfo.AttributeKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that specify print job attributes.

## Declaration

```swift
struct AttributeKey
```

## Topics

### Page Setup Attributes

- [paperName](attributekey/papername.md): An `NSString` object containing the paper name.
- [paperSize](attributekey/papersize.md): An `NSSize` value specifying the height and width of paper in points.
- [orientation](attributekey/orientation.md): An `NSNumber` object containing an `NSPrintingOrientation`.
- [scalingFactor](attributekey/scalingfactor.md): Scale factor percentage before pagination.

### Pagination Attributes

- [leftMargin](attributekey/leftmargin.md): `NSNumber`, containing a floating-point value that specifies the left margin, in points.
- [rightMargin](attributekey/rightmargin.md): `NSNumber`, containing a floating-point value that specifies the right margin, in points.
- [topMargin](attributekey/topmargin.md): `NSNumber`, containing a floating-point value that specifies the top margin, in points.
- [bottomMargin](attributekey/bottommargin.md): `NSNumber`, containing a floating-point value that specifies the bottom margin, in points.
- [horizontallyCentered](attributekey/horizontallycentered.md): An `NSNumber` object containing a Boolean value that specifies whether to horizontally center pages.
- [verticallyCentered](attributekey/verticallycentered.md): An `NSNumber` object containing a Boolean value that specifies whether to vertically center pages.
- [horizontalPagination](attributekey/horizontalpagination.md): `NSNumber`, containing a `NSPrintingPaginationMode` value.
- [verticalPagination](attributekey/verticalpagination.md): `NSNumber`, containing a `NSPrintingPaginationMode` value.

### Other Attributes

- [allPages](attributekey/allpages.md): An `NSNumber` object containing a Boolean value that specifies whether to include all pages.
- [copies](attributekey/copies.md): An `NSNumber` object containing an integer—the number of copies to spool.
- [detailedErrorReporting](attributekey/detailederrorreporting.md): An `NSNumber` object containing a Boolean value that specifies whether to produce detailed error reports.
- [faxNumber](attributekey/faxnumber.md): An `NSString` object that specifies a fax number.
- [firstPage](attributekey/firstpage.md): An `NSNumber` object containing an integer value that specifies the first page in the print job.
- [headerAndFooter](attributekey/headerandfooter.md): An `NSNumber` object containing a Boolean value that specifies whether to include a header and footer.
- [jobDisposition](attributekey/jobdisposition.md): An `NSString` object that specifies the job disposition.
- [jobSavingFileNameExtensionHidden](attributekey/jobsavingfilenameextensionhidden.md): An `NSNumber` object containing a Boolean value that specifies whether to hide the job’s file name extension.
- [jobSavingURL](attributekey/jobsavingurl.md): An `NSURL` containing the location to which the job file will be saved when the [jobDisposition](jobdisposition-swift.property.md) is [save](jobdisposition-swift.struct/save.md).
- [lastPage](attributekey/lastpage.md): An `NSNumber` object containing an integer value that specifies the last page in the print job.
- [mustCollate](attributekey/mustcollate.md): An `NSNumber` object containing a Boolean value that specifies whether to collate output.
- [pagesAcross](attributekey/pagesacross.md): An `NSNumber` object that specifies the number of logical pages to be tiled horizontally on a physical sheet of paper.
- [pagesDown](attributekey/pagesdown.md): An `NSNumber` object that specifies the number of logical pages to be tiled vertically on a physical sheet of paper.
- [printer](attributekey/printer.md): An `NSPrinter` object—the printer to use.
- [printerName](attributekey/printername.md): An `NSString` object that specifies the name of a printer.
- [reversePageOrder](attributekey/reversepageorder.md): An `NSNumber` object containing a Boolean value that specifies whether to print pages in reverse order.
- [selectionOnly](attributekey/selectiononly.md): An `NSNumber` object containing a Boolean value that specifies whether to print the current selection.
- [time](attributekey/time.md): An `NSDate` object that specifies the time at which printing should begin.

### Initializers

- [init(\_:)](attributekey/init%28__%29.md): Creates a print job attribute key.
- [init(rawValue:)](attributekey/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSPrintInfoAttributeKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that specify print job attributes.

## Declaration

```objectivec
typedef NSString * NSPrintInfoAttributeKey;
```

## Topics

### Page Setup Attributes

- [NSPrintPaperName](attributekey/papername.md): An `NSString` object containing the paper name.
- [NSPrintPaperSize](attributekey/papersize.md): An `NSSize` value specifying the height and width of paper in points.
- [NSPrintOrientation](attributekey/orientation.md): An `NSNumber` object containing an `NSPrintingOrientation`.
- [NSPrintScalingFactor](attributekey/scalingfactor.md): Scale factor percentage before pagination.

### Pagination Attributes

- [NSPrintLeftMargin](attributekey/leftmargin.md): `NSNumber`, containing a floating-point value that specifies the left margin, in points.
- [NSPrintRightMargin](attributekey/rightmargin.md): `NSNumber`, containing a floating-point value that specifies the right margin, in points.
- [NSPrintTopMargin](attributekey/topmargin.md): `NSNumber`, containing a floating-point value that specifies the top margin, in points.
- [NSPrintBottomMargin](attributekey/bottommargin.md): `NSNumber`, containing a floating-point value that specifies the bottom margin, in points.
- [NSPrintHorizontallyCentered](attributekey/horizontallycentered.md): An `NSNumber` object containing a Boolean value that specifies whether to horizontally center pages.
- [NSPrintVerticallyCentered](attributekey/verticallycentered.md): An `NSNumber` object containing a Boolean value that specifies whether to vertically center pages.
- [NSPrintHorizontalPagination](attributekey/horizontalpagination.md): `NSNumber`, containing a `NSPrintingPaginationMode` value.
- [NSPrintVerticalPagination](attributekey/verticalpagination.md): `NSNumber`, containing a `NSPrintingPaginationMode` value.

### Other Attributes

- [NSPrintAllPages](attributekey/allpages.md): An `NSNumber` object containing a Boolean value that specifies whether to include all pages.
- [NSPrintCopies](attributekey/copies.md): An `NSNumber` object containing an integer—the number of copies to spool.
- [NSPrintDetailedErrorReporting](attributekey/detailederrorreporting.md): An `NSNumber` object containing a Boolean value that specifies whether to produce detailed error reports.
- [NSPrintFaxNumber](attributekey/faxnumber.md): An `NSString` object that specifies a fax number.
- [NSPrintFirstPage](attributekey/firstpage.md): An `NSNumber` object containing an integer value that specifies the first page in the print job.
- [NSPrintHeaderAndFooter](attributekey/headerandfooter.md): An `NSNumber` object containing a Boolean value that specifies whether to include a header and footer.
- [NSPrintJobDisposition](attributekey/jobdisposition.md): An `NSString` object that specifies the job disposition.
- [NSPrintJobSavingFileNameExtensionHidden](attributekey/jobsavingfilenameextensionhidden.md): An `NSNumber` object containing a Boolean value that specifies whether to hide the job’s file name extension.
- [NSPrintJobSavingURL](attributekey/jobsavingurl.md): An `NSURL` containing the location to which the job file will be saved when the [jobDisposition](jobdisposition-swift.property.md) is [NSPrintSaveJob](jobdisposition-swift.struct/save.md).
- [NSPrintLastPage](attributekey/lastpage.md): An `NSNumber` object containing an integer value that specifies the last page in the print job.
- [NSPrintMustCollate](attributekey/mustcollate.md): An `NSNumber` object containing a Boolean value that specifies whether to collate output.
- [NSPrintPagesAcross](attributekey/pagesacross.md): An `NSNumber` object that specifies the number of logical pages to be tiled horizontally on a physical sheet of paper.
- [NSPrintPagesDown](attributekey/pagesdown.md): An `NSNumber` object that specifies the number of logical pages to be tiled vertically on a physical sheet of paper.
- [NSPrintPrinter](attributekey/printer.md): An `NSPrinter` object—the printer to use.
- [NSPrintPrinterName](attributekey/printername.md): An `NSString` object that specifies the name of a printer.
- [NSPrintReversePageOrder](attributekey/reversepageorder.md): An `NSNumber` object containing a Boolean value that specifies whether to print pages in reverse order.
- [NSPrintSelectionOnly](attributekey/selectiononly.md): An `NSNumber` object containing a Boolean value that specifies whether to print the current selection.
- [NSPrintTime](attributekey/time.md): An `NSDate` object that specifies the time at which printing should begin.
