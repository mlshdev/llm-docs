> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/jobdisposition-swift.property](https://developer.apple.com/documentation/appkit/nsprintinfo/jobdisposition-swift.property)

# jobDisposition (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The action specified for the job.

## Declaration

```swift
var jobDisposition: NSPrintInfo.JobDisposition { get set }
```

<a id="Discussion"></a>

## Discussion

One of the following value:

- [spool](jobdisposition-swift.struct/spool.md) is a normal print job.
- [preview](jobdisposition-swift.struct/preview.md) sends the print job to the Preview application.
- [save](jobdisposition-swift.struct/save.md) saves the print job to a file.
- [cancel](jobdisposition-swift.struct/cancel.md) aborts the print job.

## See Also

### Controlling Printing

- [NSPrintInfo.JobDisposition](jobdisposition-swift.struct.md): Constants that specify values for the print job disposition.
- [setUpPrintOperationDefaultValues()](setupprintoperationdefaultvalues%28%29.md): Validates the attributes encapsulated by the print info.

# jobDisposition (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The action specified for the job.

## Declaration

```objectivec
@property (copy) NSPrintJobDispositionValue jobDisposition;
```

<a id="Discussion"></a>

## Discussion

One of the following value:

- [NSPrintSpoolJob](jobdisposition-swift.struct/spool.md) is a normal print job.
- [NSPrintPreviewJob](jobdisposition-swift.struct/preview.md) sends the print job to the Preview application.
- [NSPrintSaveJob](jobdisposition-swift.struct/save.md) saves the print job to a file.
- [NSPrintCancelJob](jobdisposition-swift.struct/cancel.md) aborts the print job.

## See Also

### Controlling Printing

- [NSPrintJobDispositionValue](jobdisposition-swift.struct.md): Constants that specify values for the print job disposition.
- [setUpPrintOperationDefaultValues](setupprintoperationdefaultvalues%28%29.md): Validates the attributes encapsulated by the print info.
