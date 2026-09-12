> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinfo/outputtype-swift.enum](https://developer.apple.com/documentation/uikit/uiprintinfo/outputtype-swift.enum)

# UIPrintInfo.OutputType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that describe the output type, which is an indication of the type of content the app is drawing or providing.

## Declaration

```swift
enum OutputType
```

<a id="overview"></a>

## Overview

You use these constants when setting the value of the [outputType](outputtype-swift.property.md) property of a `UIPrintInfo` object.

## Topics

### Constants

- [UIPrintInfo.OutputType.general](outputtype-swift.enum/general.md): Specifies that the printed content consists of mixed text, graphics, and images. The default paper is Letter, A4, or similar locale-specific designation. Output is normal quality, duplex.
- [UIPrintInfo.OutputType.photo](outputtype-swift.enum/photo.md): Specifies that the printed content consists of black-and-white or color images. The default paper is 4x6, A6, or similar locale-specific designation. Output is high quality, simplex.
- [UIPrintInfo.OutputType.grayscale](outputtype-swift.enum/grayscale.md): Specifies that the printed content is grayscale. Set the output type to this value when your printable content contains no color—for example, it’s black text only. The default paper is Letter/A4. Output is grayscale quality, duplex. This content type can produce a performance improvement in some cases.
- [UIPrintInfo.OutputType.photoGrayscale](outputtype-swift.enum/photograyscale.md): Specifies that the printed content is a grayscale image. Set the output type to this value when your printable content contains no color—for example, it’s black text only. The default paper is Letter/A4. Output is high quality grayscale, duplex.

### Initializers

- [init(rawValue:)](outputtype-swift.enum/init%28rawvalue_%29.md)

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
- [UIPrintInfo.Orientation](orientation-swift.enum.md): Constants that describe the orientation of printing on a page.
- [outputType](outputtype-swift.property.md): The kind of printable content.
- [printerID](printerid.md): An identifier of the printer to use for the print job.

# UIPrintInfoOutputType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that describe the output type, which is an indication of the type of content the app is drawing or providing.

## Declaration

```objectivec
enum UIPrintInfoOutputType : NSInteger;
```

<a id="overview"></a>

## Overview

You use these constants when setting the value of the [outputType](outputtype-swift.property.md) property of a `UIPrintInfo` object.

## Topics

### Constants

- [UIPrintInfoOutputGeneral](outputtype-swift.enum/general.md): Specifies that the printed content consists of mixed text, graphics, and images. The default paper is Letter, A4, or similar locale-specific designation. Output is normal quality, duplex.
- [UIPrintInfoOutputPhoto](outputtype-swift.enum/photo.md): Specifies that the printed content consists of black-and-white or color images. The default paper is 4x6, A6, or similar locale-specific designation. Output is high quality, simplex.
- [UIPrintInfoOutputGrayscale](outputtype-swift.enum/grayscale.md): Specifies that the printed content is grayscale. Set the output type to this value when your printable content contains no color—for example, it’s black text only. The default paper is Letter/A4. Output is grayscale quality, duplex. This content type can produce a performance improvement in some cases.
- [UIPrintInfoOutputPhotoGrayscale](outputtype-swift.enum/photograyscale.md): Specifies that the printed content is a grayscale image. Set the output type to this value when your printable content contains no color—for example, it’s black text only. The default paper is Letter/A4. Output is high quality grayscale, duplex.

## See Also

### Managing print-job attributes

- [duplex](duplex-swift.property.md): The duplex mode to use for the print job.
- [UIPrintInfoDuplex](duplex-swift.enum.md): Constants that describe the duplex mode of a selected printer.
- [jobName](jobname.md): The name of the print job.
- [orientation](orientation-swift.property.md): The orientation of the printed content, portrait or landscape.
- [UIPrintInfoOrientation](orientation-swift.enum.md): Constants that describe the orientation of printing on a page.
- [outputType](outputtype-swift.property.md): The kind of printable content.
- [printerID](printerid.md): An identifier of the printer to use for the print job.
