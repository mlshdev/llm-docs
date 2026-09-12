> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinter/displaylocation](https://developer.apple.com/documentation/uikit/uiprinter/displaylocation)

# displayLocation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The human-readable text that describes the location of the printer.

## Declaration

```swift
var displayLocation: String? { get }
```

<a id="Discussion"></a>

## Discussion

Many printers can be configured with a location string to reflect the printer’s physical location in an office. This property contains that location string or `nil` if no such string is available.

For printers you create yourself using the [init(url:)](init%28url_%29-1mibn.md) method, the value of this property is `nil` until you successfully connect to the printer using the [contactPrinter(\_:)](contactprinter%28__%29.md) method.

## See Also

### Getting the printer information

- [displayName](displayname.md): The human-readable printer name.
- [makeAndModel](makeandmodel.md): A string that contains the manufacturer’s name and the model name of the printer.
- [supportedJobTypes](supportedjobtypes.md): The capabilities of the printer.
- [UIPrinter.JobTypes](jobtypes.md): Constants that indicate the types of jobs that the printer supports.
- [supportsColor](supportscolor.md): A Boolean value that indicates whether the printer supports color printing.
- [supportsDuplex](supportsduplex.md): A Boolean value that indicates whether the printer supports printing on both sides of a sheet of paper.

# displayLocation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The human-readable text that describes the location of the printer.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * displayLocation;
```

<a id="Discussion"></a>

## Discussion

Many printers can be configured with a location string to reflect the printer’s physical location in an office. This property contains that location string or `nil` if no such string is available.

For printers you create yourself using the [printerWithURL:](init%28url_%29-1mibn.md) method, the value of this property is `nil` until you successfully connect to the printer using the [contactPrinter:](contactprinter%28__%29.md) method.

## See Also

### Getting the printer information

- [displayName](displayname.md): The human-readable printer name.
- [makeAndModel](makeandmodel.md): A string that contains the manufacturer’s name and the model name of the printer.
- [supportedJobTypes](supportedjobtypes.md): The capabilities of the printer.
- [UIPrinterJobTypes](jobtypes.md): Constants that indicate the types of jobs that the printer supports.
- [supportsColor](supportscolor.md): A Boolean value that indicates whether the printer supports color printing.
- [supportsDuplex](supportsduplex.md): A Boolean value that indicates whether the printer supports printing on both sides of a sheet of paper.
