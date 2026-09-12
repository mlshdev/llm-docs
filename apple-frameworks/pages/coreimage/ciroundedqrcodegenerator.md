> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciroundedqrcodegenerator](https://developer.apple.com/documentation/coreimage/ciroundedqrcodegenerator)

# CIRoundedQRCodeGenerator (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The protocol for the Rounded QR Code Generator filter.

## Declaration

```swift
protocol CIRoundedQRCodeGenerator : CIFilterProtocol
```

<a id="overview"></a>

## Overview

Generate a QR Code image for message data.

## Topics

### Instance Properties

- [centerSpaceSize](ciroundedqrcodegenerator/centerspacesize.md): The fraction of the center space of the QRCode to fill with Color 1. If the size is 0.0 or the Correction Level is L or M, the center of the QRCode will be unaltered. The size will be limited to 0.25 if the Correction Level is Q. The size will be limited to 0.33 if the Correction Level is H.
- [color0](ciroundedqrcodegenerator/color0.md): The background color for the QRCode
- [color1](ciroundedqrcodegenerator/color1.md): The foreground color for the QRCode
- [correctionLevel](ciroundedqrcodegenerator/correctionlevel.md): QR Code correction level L, M, Q, or H.
- [message](ciroundedqrcodegenerator/message.md): The message to encode in the QR Code
- [roundedData](ciroundedqrcodegenerator/roundeddata.md): If true then the data points in the QRCode should have a rounded appearance.
- [roundedMarkers](ciroundedqrcodegenerator/roundedmarkers.md): If 1, then the Finder Patterns in the QRCode should have a rounded appearance. If 2, then the Alignment Patterns will also be rounded
- [scale](ciroundedqrcodegenerator/scale.md): The scale factor to enlarge the QRCode by.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

# CIRoundedQRCodeGenerator (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The protocol for the Rounded QR Code Generator filter.

## Declaration

```objectivec
@protocol CIRoundedQRCodeGenerator <CIFilter>
```

<a id="overview"></a>

## Overview

Generate a QR Code image for message data.

## Topics

### Instance Properties

- [centerSpaceSize](ciroundedqrcodegenerator/centerspacesize.md): The fraction of the center space of the QRCode to fill with Color 1. If the size is 0.0 or the Correction Level is L or M, the center of the QRCode will be unaltered. The size will be limited to 0.25 if the Correction Level is Q. The size will be limited to 0.33 if the Correction Level is H.
- [color0](ciroundedqrcodegenerator/color0.md): The background color for the QRCode
- [color1](ciroundedqrcodegenerator/color1.md): The foreground color for the QRCode
- [correctionLevel](ciroundedqrcodegenerator/correctionlevel.md): QR Code correction level L, M, Q, or H.
- [message](ciroundedqrcodegenerator/message.md): The message to encode in the QR Code
- [roundedData](ciroundedqrcodegenerator/roundeddata.md): If true then the data points in the QRCode should have a rounded appearance.
- [roundedMarkers](ciroundedqrcodegenerator/roundedmarkers.md): If 1, then the Finder Patterns in the QRCode should have a rounded appearance. If 2, then the Alignment Patterns will also be rounded
- [scale](ciroundedqrcodegenerator/scale.md): The scale factor to enlarge the QRCode by.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)
