> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinfo/duplex-swift.enum](https://developer.apple.com/documentation/uikit/uiprintinfo/duplex-swift.enum)

# UIPrintInfo.Duplex (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that describe the duplex mode of a selected printer.

## Declaration

```swift
enum Duplex
```

<a id="overview"></a>

## Overview

You use these constants when setting the value of the [duplex](duplex-swift.property.md) property of a `UIPrintInfo` object.

## Topics

### Constants

- [UIPrintInfo.Duplex.none](duplex-swift.enum/none.md): No double-sided (duplex) printing; single-sided printing only.
- [UIPrintInfo.Duplex.longEdge](duplex-swift.enum/longedge.md): Duplex printing that flips the back page along the long edge of the paper.
- [UIPrintInfo.Duplex.shortEdge](duplex-swift.enum/shortedge.md): Duplex print that flips the back page along the short edge of the paper.

### Initializers

- [init(rawValue:)](duplex-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing print-job attributes

- [duplex](duplex-swift.property.md): The duplex mode to use for the print job.
- [jobName](jobname.md): The name of the print job.
- [orientation](orientation-swift.property.md): The orientation of the printed content, portrait or landscape.
- [UIPrintInfo.Orientation](orientation-swift.enum.md): Constants that describe the orientation of printing on a page.
- [outputType](outputtype-swift.property.md): The kind of printable content.
- [UIPrintInfo.OutputType](outputtype-swift.enum.md): Constants that describe the output type, which is an indication of the type of content the app is drawing or providing.
- [printerID](printerid.md): An identifier of the printer to use for the print job.

# UIPrintInfoDuplex (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that describe the duplex mode of a selected printer.

## Declaration

```objectivec
enum UIPrintInfoDuplex : NSInteger;
```

<a id="overview"></a>

## Overview

You use these constants when setting the value of the [duplex](duplex-swift.property.md) property of a `UIPrintInfo` object.

## Topics

### Constants

- [UIPrintInfoDuplexNone](duplex-swift.enum/none.md): No double-sided (duplex) printing; single-sided printing only.
- [UIPrintInfoDuplexLongEdge](duplex-swift.enum/longedge.md): Duplex printing that flips the back page along the long edge of the paper.
- [UIPrintInfoDuplexShortEdge](duplex-swift.enum/shortedge.md): Duplex print that flips the back page along the short edge of the paper.

## See Also

### Managing print-job attributes

- [duplex](duplex-swift.property.md): The duplex mode to use for the print job.
- [jobName](jobname.md): The name of the print job.
- [orientation](orientation-swift.property.md): The orientation of the printed content, portrait or landscape.
- [UIPrintInfoOrientation](orientation-swift.enum.md): Constants that describe the orientation of printing on a page.
- [outputType](outputtype-swift.property.md): The kind of printable content.
- [UIPrintInfoOutputType](outputtype-swift.enum.md): Constants that describe the output type, which is an indication of the type of content the app is drawing or providing.
- [printerID](printerid.md): An identifier of the printer to use for the print job.
