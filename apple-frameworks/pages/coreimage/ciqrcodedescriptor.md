> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciqrcodedescriptor](https://developer.apple.com/documentation/coreimage/ciqrcodedescriptor)

# CIQRCodeDescriptor (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A concrete subclass of the Core Image Barcode Descriptor that represents a square QR code symbol.

## Declaration

```swift
class CIQRCodeDescriptor
```

<a id="overview"></a>

## Overview

ISO/IEC 18004 defines versions from 1 to 40, where a higher symbol version indicates a larger data-carrying capacity. QR Codes can encode text, vCard contact information, or Uniform Resource Identifiers (URI).

## Topics

### Creating a Descriptor

- [init(payload:symbolVersion:maskPattern:errorCorrectionLevel:)](ciqrcodedescriptor/init%28payload_symbolversion_maskpattern_errorcorrectionlevel_%29.md): Initializes a QR code descriptor for the given payload and parameters.

### Examining a Descriptor

- [errorCorrectedPayload](ciqrcodedescriptor/errorcorrectedpayload-swift.property.md): The error-corrected codeword payload that comprises the QR code symbol.
- [symbolVersion](ciqrcodedescriptor/symbolversion-swift.property.md): The version of the QR code which corresponds to the size of the QR code symbol.
- [maskPattern](ciqrcodedescriptor/maskpattern-swift.property.md): The data mask pattern for the QR code symbol.
- [errorCorrectionLevel](ciqrcodedescriptor/errorcorrectionlevel-swift.property.md): The error correction level of the QR code symbol.

### Error Correction Constants

- [CIQRCodeDescriptor.ErrorCorrectionLevel](ciqrcodedescriptor/errorcorrectionlevel-swift.enum.md): Constants indicating the percentage of the symbol that is dedicated to error correction.

## Relationships

### Inherits From

- [CIBarcodeDescriptor](cibarcodedescriptor.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Barcode Descriptions

- [CIBarcodeDescriptor](cibarcodedescriptor.md): An abstract base class that represents a machine-readable code’s attributes.
- [CIAztecCodeDescriptor](ciazteccodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Aztec code symbol.
- [CIPDF417CodeDescriptor](cipdf417codedescriptor.md): A concrete subclass of Core Image Barcode Descriptor that represents a PDF417 symbol.
- [CIDataMatrixCodeDescriptor](cidatamatrixcodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Data Matrix code symbol.

# CIQRCodeDescriptor (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A concrete subclass of the Core Image Barcode Descriptor that represents a square QR code symbol.

## Declaration

```objectivec
@interface CIQRCodeDescriptor : CIBarcodeDescriptor
```

<a id="overview"></a>

## Overview

ISO/IEC 18004 defines versions from 1 to 40, where a higher symbol version indicates a larger data-carrying capacity. QR Codes can encode text, vCard contact information, or Uniform Resource Identifiers (URI).

## Topics

### Creating a Descriptor

- [initWithPayload:symbolVersion:maskPattern:errorCorrectionLevel:](ciqrcodedescriptor/init%28payload_symbolversion_maskpattern_errorcorrectionlevel_%29.md): Initializes a QR code descriptor for the given payload and parameters.
- [descriptorWithPayload:symbolVersion:maskPattern:errorCorrectionLevel:](ciqrcodedescriptor/descriptorwithpayload_symbolversion_maskpattern_errorcorrectionlevel_.md): Creates a QR code descriptor for the given payload and parameters.

### Examining a Descriptor

- [errorCorrectedPayload](ciqrcodedescriptor/errorcorrectedpayload-swift.property.md): The error-corrected codeword payload that comprises the QR code symbol.
- [symbolVersion](ciqrcodedescriptor/symbolversion-swift.property.md): The version of the QR code which corresponds to the size of the QR code symbol.
- [maskPattern](ciqrcodedescriptor/maskpattern-swift.property.md): The data mask pattern for the QR code symbol.
- [errorCorrectionLevel](ciqrcodedescriptor/errorcorrectionlevel-swift.property.md): The error correction level of the QR code symbol.

### Error Correction Constants

- [CIQRCodeErrorCorrectionLevel](ciqrcodedescriptor/errorcorrectionlevel-swift.enum.md): Constants indicating the percentage of the symbol that is dedicated to error correction.

### Instance Variables

- [errorCorrectedPayload](ciqrcodedescriptor/errorcorrectedpayload-c.ivar.md)
- [errorCorrectionLevel](ciqrcodedescriptor/errorcorrectionlevel-c.ivar.md)
- [maskPattern](ciqrcodedescriptor/maskpattern-c.ivar.md)
- [symbolVersion](ciqrcodedescriptor/symbolversion-c.ivar.md)

## Relationships

### Inherits From

- [CIBarcodeDescriptor](cibarcodedescriptor.md)

## See Also

### Barcode Descriptions

- [CIBarcodeDescriptor](cibarcodedescriptor.md): An abstract base class that represents a machine-readable code’s attributes.
- [CIAztecCodeDescriptor](ciazteccodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Aztec code symbol.
- [CIPDF417CodeDescriptor](cipdf417codedescriptor.md): A concrete subclass of Core Image Barcode Descriptor that represents a PDF417 symbol.
- [CIDataMatrixCodeDescriptor](cidatamatrixcodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Data Matrix code symbol.
