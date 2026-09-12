> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinter/displayname](https://developer.apple.com/documentation/uikit/uiprinter/displayname)

# displayName (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The human-readable printer name.

## Declaration

```swift
var displayName: String { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a printer name that is suitable for display in your app’s user interface. For printers you create yourself using the [init(url:)](init%28url_%29-1mibn.md) method, the value of this property is `nil` until you successfully connect to the printer using the [contactPrinter(\_:)](contactprinter%28__%29.md) method.

## See Also

### Getting the printer information

- [displayLocation](displaylocation.md): The human-readable text that describes the location of the printer.
- [makeAndModel](makeandmodel.md): A string that contains the manufacturer’s name and the model name of the printer.
- [supportedJobTypes](supportedjobtypes.md): The capabilities of the printer.
- [UIPrinter.JobTypes](jobtypes.md): Constants that indicate the types of jobs that the printer supports.
- [supportsColor](supportscolor.md): A Boolean value that indicates whether the printer supports color printing.
- [supportsDuplex](supportsduplex.md): A Boolean value that indicates whether the printer supports printing on both sides of a sheet of paper.

# displayName (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The human-readable printer name.

## Declaration

```objectivec
@property (copy, readonly) NSString * displayName;
```

<a id="Discussion"></a>

## Discussion

This property contains a printer name that is suitable for display in your app’s user interface. For printers you create yourself using the [printerWithURL:](init%28url_%29-1mibn.md) method, the value of this property is `nil` until you successfully connect to the printer using the [contactPrinter:](contactprinter%28__%29.md) method.

## See Also

### Getting the printer information

- [displayLocation](displaylocation.md): The human-readable text that describes the location of the printer.
- [makeAndModel](makeandmodel.md): A string that contains the manufacturer’s name and the model name of the printer.
- [supportedJobTypes](supportedjobtypes.md): The capabilities of the printer.
- [UIPrinterJobTypes](jobtypes.md): Constants that indicate the types of jobs that the printer supports.
- [supportsColor](supportscolor.md): A Boolean value that indicates whether the printer supports color printing.
- [supportsDuplex](supportsduplex.md): A Boolean value that indicates whether the printer supports printing on both sides of a sheet of paper.
