> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/attributekey/faxnumber](https://developer.apple.com/documentation/appkit/nsprintinfo/attributekey/faxnumber)

# faxNumber (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

An `NSString` object that specifies a fax number.

## Declaration

```swift
static let faxNumber: NSPrintInfo.AttributeKey
```

## See Also

### Other Attributes

- [allPages](allpages.md): An `NSNumber` object containing a Boolean value that specifies whether to include all pages.
- [copies](copies.md): An `NSNumber` object containing an integer—the number of copies to spool.
- [detailedErrorReporting](detailederrorreporting.md): An `NSNumber` object containing a Boolean value that specifies whether to produce detailed error reports.
- [firstPage](firstpage.md): An `NSNumber` object containing an integer value that specifies the first page in the print job.
- [headerAndFooter](headerandfooter.md): An `NSNumber` object containing a Boolean value that specifies whether to include a header and footer.
- [jobDisposition](jobdisposition.md): An `NSString` object that specifies the job disposition.
- [jobSavingFileNameExtensionHidden](jobsavingfilenameextensionhidden.md): An `NSNumber` object containing a Boolean value that specifies whether to hide the job’s file name extension.
- [jobSavingURL](jobsavingurl.md): An `NSURL` containing the location to which the job file will be saved when the [jobDisposition](../jobdisposition-swift.property.md) is [save](../jobdisposition-swift.struct/save.md).
- [lastPage](lastpage.md): An `NSNumber` object containing an integer value that specifies the last page in the print job.
- [mustCollate](mustcollate.md): An `NSNumber` object containing a Boolean value that specifies whether to collate output.
- [pagesAcross](pagesacross.md): An `NSNumber` object that specifies the number of logical pages to be tiled horizontally on a physical sheet of paper.
- [pagesDown](pagesdown.md): An `NSNumber` object that specifies the number of logical pages to be tiled vertically on a physical sheet of paper.
- [printer](printer.md): An `NSPrinter` object—the printer to use.
- [printerName](printername.md): An `NSString` object that specifies the name of a printer.
- [reversePageOrder](reversepageorder.md): An `NSNumber` object containing a Boolean value that specifies whether to print pages in reverse order.

# NSPrintFaxNumber (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

An `NSString` object that specifies a fax number.

## Declaration

```objectivec
extern NSPrintInfoAttributeKey const NSPrintFaxNumber;
```

## See Also

### Other Attributes

- [NSPrintAllPages](allpages.md): An `NSNumber` object containing a Boolean value that specifies whether to include all pages.
- [NSPrintCopies](copies.md): An `NSNumber` object containing an integer—the number of copies to spool.
- [NSPrintDetailedErrorReporting](detailederrorreporting.md): An `NSNumber` object containing a Boolean value that specifies whether to produce detailed error reports.
- [NSPrintFirstPage](firstpage.md): An `NSNumber` object containing an integer value that specifies the first page in the print job.
- [NSPrintHeaderAndFooter](headerandfooter.md): An `NSNumber` object containing a Boolean value that specifies whether to include a header and footer.
- [NSPrintJobDisposition](jobdisposition.md): An `NSString` object that specifies the job disposition.
- [NSPrintJobSavingFileNameExtensionHidden](jobsavingfilenameextensionhidden.md): An `NSNumber` object containing a Boolean value that specifies whether to hide the job’s file name extension.
- [NSPrintJobSavingURL](jobsavingurl.md): An `NSURL` containing the location to which the job file will be saved when the [jobDisposition](../jobdisposition-swift.property.md) is [NSPrintSaveJob](../jobdisposition-swift.struct/save.md).
- [NSPrintLastPage](lastpage.md): An `NSNumber` object containing an integer value that specifies the last page in the print job.
- [NSPrintMustCollate](mustcollate.md): An `NSNumber` object containing a Boolean value that specifies whether to collate output.
- [NSPrintPagesAcross](pagesacross.md): An `NSNumber` object that specifies the number of logical pages to be tiled horizontally on a physical sheet of paper.
- [NSPrintPagesDown](pagesdown.md): An `NSNumber` object that specifies the number of logical pages to be tiled vertically on a physical sheet of paper.
- [NSPrintPrinter](printer.md): An `NSPrinter` object—the printer to use.
- [NSPrintPrinterName](printername.md): An `NSString` object that specifies the name of a printer.
- [NSPrintReversePageOrder](reversepageorder.md): An `NSNumber` object containing a Boolean value that specifies whether to print pages in reverse order.
