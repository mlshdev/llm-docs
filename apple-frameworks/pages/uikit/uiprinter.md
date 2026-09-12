> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinter](https://developer.apple.com/documentation/uikit/uiprinter)

# UIPrinter (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A printer on the network.

## Declaration

```swift
@MainActor class UIPrinter
```

<a id="overview"></a>

## Overview

You use a printer object to obtain information about a printer so that you can display that information in your app’s interface. You do not use printer objects to communicate with the printer directly.

Most of the time, you use a [UIPrinterPickerController](uiprinterpickercontroller.md) object to retrieve a printer object representing the printer selected by the user. If you already have a URL containing the address of a printer—perhaps one that was previously selected by the user—you can use that URL to create a printer object directly. When creating your own printer objects, you must connect to the printer using the [contactPrinter(\_:)](uiprinter/contactprinter%28__%29.md) method before retrieving any of the printer’s attributes.

## Topics

### Creating a printer object

- [init(url:)](uiprinter/init%28url_%29-1mibn.md): Creates and returns a printer with the specified location.

### Getting the printer’s address

- [url](uiprinter/url.md): The full address of the printer.

### Getting the printer information

- [displayName](uiprinter/displayname.md): The human-readable printer name.
- [displayLocation](uiprinter/displaylocation.md): The human-readable text that describes the location of the printer.
- [makeAndModel](uiprinter/makeandmodel.md): A string that contains the manufacturer’s name and the model name of the printer.
- [supportedJobTypes](uiprinter/supportedjobtypes.md): The capabilities of the printer.
- [UIPrinter.JobTypes](uiprinter/jobtypes.md): Constants that indicate the types of jobs that the printer supports.
- [supportsColor](uiprinter/supportscolor.md): A Boolean value that indicates whether the printer supports color printing.
- [supportsDuplex](uiprinter/supportsduplex.md): A Boolean value that indicates whether the printer supports printing on both sides of a sheet of paper.

### Connecting to the printer

- [contactPrinter(\_:)](uiprinter/contactprinter%28__%29.md): Connects to the printer and gathers information about its capabilities.

### Constants

- [UIPrinter.CutterBehavior](uiprinter/cutterbehavior.md): Constants that specify the cutter behavior of a roll-fed printer.

### Initializers

- [init(URL:)](uiprinter/init%28url_%29-80zxj.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Job info

- [UIPrintInfo](uiprintinfo.md): Information about a print job that the system uses when it prints.
- [UIPrintPaper](uiprintpaper.md): The size of paper for a print job and the rectangular area that the content prints within.

# UIPrinter (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A printer on the network.

## Declaration

```objectivec
@interface UIPrinter : NSObject
```

<a id="overview"></a>

## Overview

You use a printer object to obtain information about a printer so that you can display that information in your app’s interface. You do not use printer objects to communicate with the printer directly.

Most of the time, you use a [UIPrinterPickerController](uiprinterpickercontroller.md) object to retrieve a printer object representing the printer selected by the user. If you already have a URL containing the address of a printer—perhaps one that was previously selected by the user—you can use that URL to create a printer object directly. When creating your own printer objects, you must connect to the printer using the [contactPrinter:](uiprinter/contactprinter%28__%29.md) method before retrieving any of the printer’s attributes.

## Topics

### Creating a printer object

- [printerWithURL:](uiprinter/init%28url_%29-1mibn.md): Creates and returns a printer with the specified location.

### Getting the printer’s address

- [URL](uiprinter/url.md): The full address of the printer.

### Getting the printer information

- [displayName](uiprinter/displayname.md): The human-readable printer name.
- [displayLocation](uiprinter/displaylocation.md): The human-readable text that describes the location of the printer.
- [makeAndModel](uiprinter/makeandmodel.md): A string that contains the manufacturer’s name and the model name of the printer.
- [supportedJobTypes](uiprinter/supportedjobtypes.md): The capabilities of the printer.
- [UIPrinterJobTypes](uiprinter/jobtypes.md): Constants that indicate the types of jobs that the printer supports.
- [supportsColor](uiprinter/supportscolor.md): A Boolean value that indicates whether the printer supports color printing.
- [supportsDuplex](uiprinter/supportsduplex.md): A Boolean value that indicates whether the printer supports printing on both sides of a sheet of paper.

### Connecting to the printer

- [contactPrinter:](uiprinter/contactprinter%28__%29.md): Connects to the printer and gathers information about its capabilities.

### Constants

- [UIPrinterCutterBehavior](uiprinter/cutterbehavior.md): Constants that specify the cutter behavior of a roll-fed printer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Job info

- [UIPrintInfo](uiprintinfo.md): Information about a print job that the system uses when it prints.
- [UIPrintPaper](uiprintpaper.md): The size of paper for a print job and the rectangular area that the content prints within.
