> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinfo/jobname](https://developer.apple.com/documentation/uikit/uiprintinfo/jobname)

# jobName (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The name of the print job.

## Declaration

```swift
var jobName: String { get set }
```

<a id="Discussion"></a>

## Discussion

The name of the print job appears in the Print Center when the job is printing. An app should set this property to a name appropriate to the content that’s printing. The default job name is the app name.

## See Also

### Managing print-job attributes

- [duplex](duplex-swift.property.md): The duplex mode to use for the print job.
- [UIPrintInfo.Duplex](duplex-swift.enum.md): Constants that describe the duplex mode of a selected printer.
- [orientation](orientation-swift.property.md): The orientation of the printed content, portrait or landscape.
- [UIPrintInfo.Orientation](orientation-swift.enum.md): Constants that describe the orientation of printing on a page.
- [outputType](outputtype-swift.property.md): The kind of printable content.
- [UIPrintInfo.OutputType](outputtype-swift.enum.md): Constants that describe the output type, which is an indication of the type of content the app is drawing or providing.
- [printerID](printerid.md): An identifier of the printer to use for the print job.

# jobName (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The name of the print job.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * jobName;
```

<a id="Discussion"></a>

## Discussion

The name of the print job appears in the Print Center when the job is printing. An app should set this property to a name appropriate to the content that’s printing. The default job name is the app name.

## See Also

### Managing print-job attributes

- [duplex](duplex-swift.property.md): The duplex mode to use for the print job.
- [UIPrintInfoDuplex](duplex-swift.enum.md): Constants that describe the duplex mode of a selected printer.
- [orientation](orientation-swift.property.md): The orientation of the printed content, portrait or landscape.
- [UIPrintInfoOrientation](orientation-swift.enum.md): Constants that describe the orientation of printing on a page.
- [outputType](outputtype-swift.property.md): The kind of printable content.
- [UIPrintInfoOutputType](outputtype-swift.enum.md): Constants that describe the output type, which is an indication of the type of content the app is drawing or providing.
- [printerID](printerid.md): An identifier of the printer to use for the print job.
