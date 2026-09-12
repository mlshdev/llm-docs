> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinfo/orientation-swift.property](https://developer.apple.com/documentation/uikit/uiprintinfo/orientation-swift.property)

# orientation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The orientation of the printed content, portrait or landscape.

## Declaration

```swift
var orientation: UIPrintInfo.Orientation { get set }
```

<a id="Discussion"></a>

## Discussion

An application can set this property to a value thats appropriate to the printable content or it can put up a user interface that enables users to pick the printing orientation. The default value is [UIPrintInfo.Orientation.portrait](orientation-swift.enum/portrait.md). See the descriptions of the [UIPrintInfo.Orientation](orientation-swift.enum.md) constants for more information.

> **Note**

>  UIKit ignores this property when printable content is assigned to the `printingItem` or `printingItems` properties of the shared [UIPrintInteractionController](../uiprintinteractioncontroller.md) object. It determines the orientation based on the type of content.

## See Also

### Managing print-job attributes

- [duplex](duplex-swift.property.md): The duplex mode to use for the print job.
- [UIPrintInfo.Duplex](duplex-swift.enum.md): Constants that describe the duplex mode of a selected printer.
- [jobName](jobname.md): The name of the print job.
- [UIPrintInfo.Orientation](orientation-swift.enum.md): Constants that describe the orientation of printing on a page.
- [outputType](outputtype-swift.property.md): The kind of printable content.
- [UIPrintInfo.OutputType](outputtype-swift.enum.md): Constants that describe the output type, which is an indication of the type of content the app is drawing or providing.
- [printerID](printerid.md): An identifier of the printer to use for the print job.

# orientation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The orientation of the printed content, portrait or landscape.

## Declaration

```objectivec
@property (nonatomic) UIPrintInfoOrientation orientation;
```

<a id="Discussion"></a>

## Discussion

An application can set this property to a value thats appropriate to the printable content or it can put up a user interface that enables users to pick the printing orientation. The default value is [UIPrintInfoOrientationPortrait](orientation-swift.enum/portrait.md). See the descriptions of the [UIPrintInfoOrientation](orientation-swift.enum.md) constants for more information.

> **Note**

>  UIKit ignores this property when printable content is assigned to the `printingItem` or `printingItems` properties of the shared [UIPrintInteractionController](../uiprintinteractioncontroller.md) object. It determines the orientation based on the type of content.

## See Also

### Managing print-job attributes

- [duplex](duplex-swift.property.md): The duplex mode to use for the print job.
- [UIPrintInfoDuplex](duplex-swift.enum.md): Constants that describe the duplex mode of a selected printer.
- [jobName](jobname.md): The name of the print job.
- [UIPrintInfoOrientation](orientation-swift.enum.md): Constants that describe the orientation of printing on a page.
- [outputType](outputtype-swift.property.md): The kind of printable content.
- [UIPrintInfoOutputType](outputtype-swift.enum.md): Constants that describe the output type, which is an indication of the type of content the app is drawing or providing.
- [printerID](printerid.md): An identifier of the printer to use for the print job.
