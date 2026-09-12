> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinfo](https://developer.apple.com/documentation/uikit/uiprintinfo)

# UIPrintInfo (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Information about a print job that the system uses when it prints.

## Declaration

```swift
@MainActor class UIPrintInfo
```

<a id="overview"></a>

## Overview

A [UIPrintInfo](uiprintinfo.md) object encapsulates information about a print job, including printer identifier, job name, output type (photo, normal, grayscale), orientation (portrait or landscape), and any selected duplex mode.

Typically, you create a [UIPrintInfo](uiprintinfo.md) object and assign it to the [printInfo](uiprintinteractioncontroller/printinfo.md) property of the shared [UIPrintInteractionController](uiprintinteractioncontroller.md) instance. However, it isn’t necessary to create a [UIPrintInfo](uiprintinfo.md) object for a print job; UIKit assumes certain defaults. In the printing-options user interface, users can select the printer, single-sided or double-sided printing for duplex printers, and (if the app allows it) a range of pages to print.

## Topics

### Creating a print info object

- [printInfo()](uiprintinfo/printinfo%28%29.md): Returns a print-information object initialized with default values.
- [init(dictionary:)](uiprintinfo/init%28dictionary_%29.md): Returns a print-information object that is initialized with the data in the passed-in dictionary.
- [dictionaryRepresentation](uiprintinfo/dictionaryrepresentation.md): A dictionary representation of a print-information object.
- [init(coder:)](uiprintinfo/init%28coder_%29.md): Creates a print info object from data in an unarchiver.

### Managing print-job attributes

- [duplex](uiprintinfo/duplex-swift.property.md): The duplex mode to use for the print job.
- [UIPrintInfo.Duplex](uiprintinfo/duplex-swift.enum.md): Constants that describe the duplex mode of a selected printer.
- [jobName](uiprintinfo/jobname.md): The name of the print job.
- [orientation](uiprintinfo/orientation-swift.property.md): The orientation of the printed content, portrait or landscape.
- [UIPrintInfo.Orientation](uiprintinfo/orientation-swift.enum.md): Constants that describe the orientation of printing on a page.
- [outputType](uiprintinfo/outputtype-swift.property.md): The kind of printable content.
- [UIPrintInfo.OutputType](uiprintinfo/outputtype-swift.enum.md): Constants that describe the output type, which is an indication of the type of content the app is drawing or providing.
- [printerID](uiprintinfo/printerid.md): An identifier of the printer to use for the print job.

### Initializers

- [init()](uiprintinfo/init%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Job info

- [UIPrinter](uiprinter.md): A printer on the network.
- [UIPrintPaper](uiprintpaper.md): The size of paper for a print job and the rectangular area that the content prints within.

# UIPrintInfo (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Information about a print job that the system uses when it prints.

## Declaration

```objectivec
@interface UIPrintInfo : NSObject
```

<a id="overview"></a>

## Overview

A [UIPrintInfo](uiprintinfo.md) object encapsulates information about a print job, including printer identifier, job name, output type (photo, normal, grayscale), orientation (portrait or landscape), and any selected duplex mode.

Typically, you create a [UIPrintInfo](uiprintinfo.md) object and assign it to the [printInfo](uiprintinteractioncontroller/printinfo.md) property of the shared [UIPrintInteractionController](uiprintinteractioncontroller.md) instance. However, it isn’t necessary to create a [UIPrintInfo](uiprintinfo.md) object for a print job; UIKit assumes certain defaults. In the printing-options user interface, users can select the printer, single-sided or double-sided printing for duplex printers, and (if the app allows it) a range of pages to print.

## Topics

### Creating a print info object

- [printInfo](uiprintinfo/printinfo%28%29.md): Returns a print-information object initialized with default values.
- [printInfoWithDictionary:](uiprintinfo/init%28dictionary_%29.md): Returns a print-information object that is initialized with the data in the passed-in dictionary.
- [dictionaryRepresentation](uiprintinfo/dictionaryrepresentation.md): A dictionary representation of a print-information object.
- [initWithCoder:](uiprintinfo/init%28coder_%29.md): Creates a print info object from data in an unarchiver.

### Managing print-job attributes

- [duplex](uiprintinfo/duplex-swift.property.md): The duplex mode to use for the print job.
- [UIPrintInfoDuplex](uiprintinfo/duplex-swift.enum.md): Constants that describe the duplex mode of a selected printer.
- [jobName](uiprintinfo/jobname.md): The name of the print job.
- [orientation](uiprintinfo/orientation-swift.property.md): The orientation of the printed content, portrait or landscape.
- [UIPrintInfoOrientation](uiprintinfo/orientation-swift.enum.md): Constants that describe the orientation of printing on a page.
- [outputType](uiprintinfo/outputtype-swift.property.md): The kind of printable content.
- [UIPrintInfoOutputType](uiprintinfo/outputtype-swift.enum.md): Constants that describe the output type, which is an indication of the type of content the app is drawing or providing.
- [printerID](uiprintinfo/printerid.md): An identifier of the printer to use for the print job.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)

## See Also

### Job info

- [UIPrinter](uiprinter.md): A printer on the network.
- [UIPrintPaper](uiprintpaper.md): The size of paper for a print job and the rectangular area that the content prints within.
