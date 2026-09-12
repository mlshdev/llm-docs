> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/jobdisposition-swift.struct](https://developer.apple.com/documentation/appkit/nsprintinfo/jobdisposition-swift.struct)

# NSPrintInfo.JobDisposition (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that specify values for the print job disposition.

## Declaration

```swift
struct JobDisposition
```

<a id="Discussion"></a>

## Discussion

These constants are used by the [jobDisposition](jobdisposition-swift.property.md) property.

## Topics

### Constants

- [spool](jobdisposition-swift.struct/spool.md): Normal print job.
- [preview](jobdisposition-swift.struct/preview.md): Send to Preview application.
- [save](jobdisposition-swift.struct/save.md): Save to a file.
- [cancel](jobdisposition-swift.struct/cancel.md): Cancel print job.

### Initializers

- [init(rawValue:)](jobdisposition-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling Printing

- [jobDisposition](jobdisposition-swift.property.md): The action specified for the job.
- [setUpPrintOperationDefaultValues()](setupprintoperationdefaultvalues%28%29.md): Validates the attributes encapsulated by the print info.

# NSPrintJobDispositionValue (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that specify values for the print job disposition.

## Declaration

```objectivec
typedef NSString * NSPrintJobDispositionValue;
```

<a id="Discussion"></a>

## Discussion

These constants are used by the [jobDisposition](jobdisposition-swift.property.md) property.

## Topics

### Constants

- [NSPrintSpoolJob](jobdisposition-swift.struct/spool.md): Normal print job.
- [NSPrintPreviewJob](jobdisposition-swift.struct/preview.md): Send to Preview application.
- [NSPrintSaveJob](jobdisposition-swift.struct/save.md): Save to a file.
- [NSPrintCancelJob](jobdisposition-swift.struct/cancel.md): Cancel print job.

## See Also

### Controlling Printing

- [jobDisposition](jobdisposition-swift.property.md): The action specified for the job.
- [setUpPrintOperationDefaultValues](setupprintoperationdefaultvalues%28%29.md): Validates the attributes encapsulated by the print info.
