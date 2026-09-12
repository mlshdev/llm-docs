> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinter/supportedjobtypes](https://developer.apple.com/documentation/uikit/uiprinter/supportedjobtypes)

# supportedJobTypes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The capabilities of the printer.

## Declaration

```swift
var supportedJobTypes: UIPrinter.JobTypes { get }
```

<a id="Discussion"></a>

## Discussion

Job types indicate the types of operations you can perform with the printer. You might use this information when deciding whether or not to use a printer for a particular task. For example, a photo app might prevent a printer picker interface from displaying printers that do not support the [photo](jobtypes/photo.md) job type.

For printers you create yourself using the [init(url:)](init%28url_%29-1mibn.md) method, the value of this property is [unknown](jobtypes/unknown.md) until you successfully connect to the printer using the [contactPrinter(\_:)](contactprinter%28__%29.md) method.

## See Also

### Getting the printer information

- [displayName](displayname.md): The human-readable printer name.
- [displayLocation](displaylocation.md): The human-readable text that describes the location of the printer.
- [makeAndModel](makeandmodel.md): A string that contains the manufacturer’s name and the model name of the printer.
- [UIPrinter.JobTypes](jobtypes.md): Constants that indicate the types of jobs that the printer supports.
- [supportsColor](supportscolor.md): A Boolean value that indicates whether the printer supports color printing.
- [supportsDuplex](supportsduplex.md): A Boolean value that indicates whether the printer supports printing on both sides of a sheet of paper.

# supportedJobTypes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The capabilities of the printer.

## Declaration

```objectivec
@property (readonly) UIPrinterJobTypes supportedJobTypes;
```

<a id="Discussion"></a>

## Discussion

Job types indicate the types of operations you can perform with the printer. You might use this information when deciding whether or not to use a printer for a particular task. For example, a photo app might prevent a printer picker interface from displaying printers that do not support the [UIPrinterJobTypePhoto](jobtypes/photo.md) job type.

For printers you create yourself using the [printerWithURL:](init%28url_%29-1mibn.md) method, the value of this property is [UIPrinterJobTypeUnknown](jobtypes/unknown.md) until you successfully connect to the printer using the [contactPrinter:](contactprinter%28__%29.md) method.

## See Also

### Getting the printer information

- [displayName](displayname.md): The human-readable printer name.
- [displayLocation](displaylocation.md): The human-readable text that describes the location of the printer.
- [makeAndModel](makeandmodel.md): A string that contains the manufacturer’s name and the model name of the printer.
- [UIPrinterJobTypes](jobtypes.md): Constants that indicate the types of jobs that the printer supports.
- [supportsColor](supportscolor.md): A Boolean value that indicates whether the printer supports color printing.
- [supportsDuplex](supportsduplex.md): A Boolean value that indicates whether the printer supports printing on both sides of a sheet of paper.
