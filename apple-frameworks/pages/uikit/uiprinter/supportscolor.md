> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinter/supportscolor](https://developer.apple.com/documentation/uikit/uiprinter/supportscolor)

# supportsColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the printer supports color printing.

## Declaration

```swift
var supportsColor: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the printer supports color printing or [false](https://developer.apple.com/documentation/swift/false) if it does not. For printers you create yourself using the [init(url:)](init%28url_%29-1mibn.md) method, the value of this property is [false](https://developer.apple.com/documentation/swift/false) until you successfully connect to the printer using the [contactPrinter(\_:)](contactprinter%28__%29.md) method.

## See Also

### Getting the printer information

- [displayName](displayname.md): The human-readable printer name.
- [displayLocation](displaylocation.md): The human-readable text that describes the location of the printer.
- [makeAndModel](makeandmodel.md): A string that contains the manufacturer’s name and the model name of the printer.
- [supportedJobTypes](supportedjobtypes.md): The capabilities of the printer.
- [UIPrinter.JobTypes](jobtypes.md): Constants that indicate the types of jobs that the printer supports.
- [supportsDuplex](supportsduplex.md): A Boolean value that indicates whether the printer supports printing on both sides of a sheet of paper.

# supportsColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the printer supports color printing.

## Declaration

```objectivec
@property (readonly) BOOL supportsColor;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the printer supports color printing or [false](https://developer.apple.com/documentation/swift/false) if it does not. For printers you create yourself using the [printerWithURL:](init%28url_%29-1mibn.md) method, the value of this property is [false](https://developer.apple.com/documentation/swift/false) until you successfully connect to the printer using the [contactPrinter:](contactprinter%28__%29.md) method.

## See Also

### Getting the printer information

- [displayName](displayname.md): The human-readable printer name.
- [displayLocation](displaylocation.md): The human-readable text that describes the location of the printer.
- [makeAndModel](makeandmodel.md): A string that contains the manufacturer’s name and the model name of the printer.
- [supportedJobTypes](supportedjobtypes.md): The capabilities of the printer.
- [UIPrinterJobTypes](jobtypes.md): Constants that indicate the types of jobs that the printer supports.
- [supportsDuplex](supportsduplex.md): A Boolean value that indicates whether the printer supports printing on both sides of a sheet of paper.
