> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinfo/orientation-swift.enum](https://developer.apple.com/documentation/uikit/uiprintinfo/orientation-swift.enum)

# UIPrintInfo.Orientation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that describe the orientation of printing on a page.

## Declaration

```swift
enum Orientation
```

<a id="overview"></a>

## Overview

You use these constants when setting the value of the [orientation](orientation-swift.property.md) property of a `UIPrintInfo` object.

> **Note**

>  UIKit ignores the [orientation](orientation-swift.property.md) property when printable content is assigned to the `printingItem` or `printingItems` properties of the shared [UIPrintInteractionController](../uiprintinteractioncontroller.md) object. It determines the orientation based on the type of content.

## Topics

### Constants

- [UIPrintInfo.Orientation.portrait](orientation-swift.enum/portrait.md): Pages are printed in portrait orientation.
- [UIPrintInfo.Orientation.landscape](orientation-swift.enum/landscape.md): Pages are printed in landscape orientation.

### Initializers

- [init(rawValue:)](orientation-swift.enum/init%28rawvalue_%29.md)

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
- [UIPrintInfo.Duplex](duplex-swift.enum.md): Constants that describe the duplex mode of a selected printer.
- [jobName](jobname.md): The name of the print job.
- [orientation](orientation-swift.property.md): The orientation of the printed content, portrait or landscape.
- [outputType](outputtype-swift.property.md): The kind of printable content.
- [UIPrintInfo.OutputType](outputtype-swift.enum.md): Constants that describe the output type, which is an indication of the type of content the app is drawing or providing.
- [printerID](printerid.md): An identifier of the printer to use for the print job.

# UIPrintInfoOrientation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that describe the orientation of printing on a page.

## Declaration

```objectivec
enum UIPrintInfoOrientation : NSInteger;
```

<a id="overview"></a>

## Overview

You use these constants when setting the value of the [orientation](orientation-swift.property.md) property of a `UIPrintInfo` object.

> **Note**

>  UIKit ignores the [orientation](orientation-swift.property.md) property when printable content is assigned to the `printingItem` or `printingItems` properties of the shared [UIPrintInteractionController](../uiprintinteractioncontroller.md) object. It determines the orientation based on the type of content.

## Topics

### Constants

- [UIPrintInfoOrientationPortrait](orientation-swift.enum/portrait.md): Pages are printed in portrait orientation.
- [UIPrintInfoOrientationLandscape](orientation-swift.enum/landscape.md): Pages are printed in landscape orientation.

## See Also

### Managing print-job attributes

- [duplex](duplex-swift.property.md): The duplex mode to use for the print job.
- [UIPrintInfoDuplex](duplex-swift.enum.md): Constants that describe the duplex mode of a selected printer.
- [jobName](jobname.md): The name of the print job.
- [orientation](orientation-swift.property.md): The orientation of the printed content, portrait or landscape.
- [outputType](outputtype-swift.property.md): The kind of printable content.
- [UIPrintInfoOutputType](outputtype-swift.enum.md): Constants that describe the output type, which is an indication of the type of content the app is drawing or providing.
- [printerID](printerid.md): An identifier of the printer to use for the print job.
