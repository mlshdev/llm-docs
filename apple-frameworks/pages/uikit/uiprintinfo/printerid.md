> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinfo/printerid](https://developer.apple.com/documentation/uikit/uiprintinfo/printerid)

# printerID (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An identifier of the printer to use for the print job.

## Declaration

```swift
var printerID: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is set through user selection in the printing user interface. You may provide a printer ID as a hint (for example, the last printer used from a particular print job). The default value is `nil`.

## See Also

### Managing print-job attributes

- [duplex](duplex-swift.property.md): The duplex mode to use for the print job.
- [UIPrintInfo.Duplex](duplex-swift.enum.md): Constants that describe the duplex mode of a selected printer.
- [jobName](jobname.md): The name of the print job.
- [orientation](orientation-swift.property.md): The orientation of the printed content, portrait or landscape.
- [UIPrintInfo.Orientation](orientation-swift.enum.md): Constants that describe the orientation of printing on a page.
- [outputType](outputtype-swift.property.md): The kind of printable content.
- [UIPrintInfo.OutputType](outputtype-swift.enum.md): Constants that describe the output type, which is an indication of the type of content the app is drawing or providing.

# printerID (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An identifier of the printer to use for the print job.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * printerID;
```

<a id="Discussion"></a>

## Discussion

This property is set through user selection in the printing user interface. You may provide a printer ID as a hint (for example, the last printer used from a particular print job). The default value is `nil`.

## See Also

### Managing print-job attributes

- [duplex](duplex-swift.property.md): The duplex mode to use for the print job.
- [UIPrintInfoDuplex](duplex-swift.enum.md): Constants that describe the duplex mode of a selected printer.
- [jobName](jobname.md): The name of the print job.
- [orientation](orientation-swift.property.md): The orientation of the printed content, portrait or landscape.
- [UIPrintInfoOrientation](orientation-swift.enum.md): Constants that describe the orientation of printing on a page.
- [outputType](outputtype-swift.property.md): The kind of printable content.
- [UIPrintInfoOutputType](outputtype-swift.enum.md): Constants that describe the output type, which is an indication of the type of content the app is drawing or providing.
