> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinter/jobtypes](https://developer.apple.com/documentation/uikit/uiprinter/jobtypes)

# UIPrinter.JobTypes (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that indicate the types of jobs that the printer supports.

## Declaration

```swift
struct JobTypes
```

## Topics

### Constants

- [unknown](jobtypes/unknown.md): The printer support is unknown.
- [document](jobtypes/document.md): The printer supports standard document printing.
- [envelope](jobtypes/envelope.md): The printer supports printing on envelopes.
- [label](jobtypes/label.md): The printer supports printing on cut labels.
- [photo](jobtypes/photo.md): The printer supports printing with photographic print quality.
- [receipt](jobtypes/receipt.md): The printer supports printing receipts on a continuous roll of paper.
- [roll](jobtypes/roll.md): The printer supports printing documents or photos on a continuous roll of paper.
- [largeFormat](jobtypes/largeformat.md): The printer supports printing larger than the ISO A3 size.
- [postcard](jobtypes/postcard.md): The printer supports printing on postcards.

### Initializers

- [init(rawValue:)](jobtypes/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting the printer information

- [displayName](displayname.md): The human-readable printer name.
- [displayLocation](displaylocation.md): The human-readable text that describes the location of the printer.
- [makeAndModel](makeandmodel.md): A string that contains the manufacturer’s name and the model name of the printer.
- [supportedJobTypes](supportedjobtypes.md): The capabilities of the printer.
- [supportsColor](supportscolor.md): A Boolean value that indicates whether the printer supports color printing.
- [supportsDuplex](supportsduplex.md): A Boolean value that indicates whether the printer supports printing on both sides of a sheet of paper.

# UIPrinterJobTypes (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that indicate the types of jobs that the printer supports.

## Declaration

```objectivec
enum UIPrinterJobTypes : NSInteger;
```

## Topics

### Constants

- [UIPrinterJobTypeUnknown](jobtypes/unknown.md): The printer support is unknown.
- [UIPrinterJobTypeDocument](jobtypes/document.md): The printer supports standard document printing.
- [UIPrinterJobTypeEnvelope](jobtypes/envelope.md): The printer supports printing on envelopes.
- [UIPrinterJobTypeLabel](jobtypes/label.md): The printer supports printing on cut labels.
- [UIPrinterJobTypePhoto](jobtypes/photo.md): The printer supports printing with photographic print quality.
- [UIPrinterJobTypeReceipt](jobtypes/receipt.md): The printer supports printing receipts on a continuous roll of paper.
- [UIPrinterJobTypeRoll](jobtypes/roll.md): The printer supports printing documents or photos on a continuous roll of paper.
- [UIPrinterJobTypeLargeFormat](jobtypes/largeformat.md): The printer supports printing larger than the ISO A3 size.
- [UIPrinterJobTypePostcard](jobtypes/postcard.md): The printer supports printing on postcards.

## See Also

### Getting the printer information

- [displayName](displayname.md): The human-readable printer name.
- [displayLocation](displaylocation.md): The human-readable text that describes the location of the printer.
- [makeAndModel](makeandmodel.md): A string that contains the manufacturer’s name and the model name of the printer.
- [supportedJobTypes](supportedjobtypes.md): The capabilities of the printer.
- [supportsColor](supportscolor.md): A Boolean value that indicates whether the printer supports color printing.
- [supportsDuplex](supportsduplex.md): A Boolean value that indicates whether the printer supports printing on both sides of a sheet of paper.
