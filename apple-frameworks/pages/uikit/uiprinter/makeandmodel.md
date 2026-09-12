> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinter/makeandmodel](https://developer.apple.com/documentation/uikit/uiprinter/makeandmodel)

# makeAndModel (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A string that contains the manufacturer’s name and the model name of the printer.

## Declaration

```swift
var makeAndModel: String? { get }
```

<a id="Discussion"></a>

## Discussion

The string in this property is provided by the printer and usually consists of the manufacturer’s name, the model name of the printer, and the model number of the printer.

For printers you create yourself using the [init(url:)](init%28url_%29-1mibn.md) method, the value of this property is `nil` until you successfully connect to the printer using the [contactPrinter(\_:)](contactprinter%28__%29.md) method.

## See Also

### Getting the printer information

- [displayName](displayname.md): The human-readable printer name.
- [displayLocation](displaylocation.md): The human-readable text that describes the location of the printer.
- [supportedJobTypes](supportedjobtypes.md): The capabilities of the printer.
- [UIPrinter.JobTypes](jobtypes.md): Constants that indicate the types of jobs that the printer supports.
- [supportsColor](supportscolor.md): A Boolean value that indicates whether the printer supports color printing.
- [supportsDuplex](supportsduplex.md): A Boolean value that indicates whether the printer supports printing on both sides of a sheet of paper.

# makeAndModel (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A string that contains the manufacturer’s name and the model name of the printer.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * makeAndModel;
```

<a id="Discussion"></a>

## Discussion

The string in this property is provided by the printer and usually consists of the manufacturer’s name, the model name of the printer, and the model number of the printer.

For printers you create yourself using the [printerWithURL:](init%28url_%29-1mibn.md) method, the value of this property is `nil` until you successfully connect to the printer using the [contactPrinter:](contactprinter%28__%29.md) method.

## See Also

### Getting the printer information

- [displayName](displayname.md): The human-readable printer name.
- [displayLocation](displaylocation.md): The human-readable text that describes the location of the printer.
- [supportedJobTypes](supportedjobtypes.md): The capabilities of the printer.
- [UIPrinterJobTypes](jobtypes.md): Constants that indicate the types of jobs that the printer supports.
- [supportsColor](supportscolor.md): A Boolean value that indicates whether the printer supports color printing.
- [supportsDuplex](supportsduplex.md): A Boolean value that indicates whether the printer supports printing on both sides of a sheet of paper.
