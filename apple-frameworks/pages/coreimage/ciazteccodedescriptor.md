> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciazteccodedescriptor](https://developer.apple.com/documentation/coreimage/ciazteccodedescriptor)

# CIAztecCodeDescriptor (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A concrete subclass the Core Image Barcode Descriptor that represents an Aztec code symbol.

## Declaration

```swift
class CIAztecCodeDescriptor
```

<a id="overview"></a>

## Overview

An Aztec code symbol is a 2D barcode format defined by the ISO/IEC 24778:2008 standard. It encodes data in concentric square rings around a central bullseye pattern.

## Topics

### Creating a Descriptor

- [init(payload:isCompact:layerCount:dataCodewordCount:)](ciazteccodedescriptor/init%28payload_iscompact_layercount_datacodewordcount_%29.md): Initializes an Aztec code descriptor for the given payload and parameters.

### Examining a Descriptor

- [errorCorrectedPayload](ciazteccodedescriptor/errorcorrectedpayload-swift.property.md): The error-corrected payload that comprises the the Aztec code symbol.
- [isCompact](ciazteccodedescriptor/iscompact-swift.property.md): A Boolean value telling if the Aztec code is compact.
- [layerCount](ciazteccodedescriptor/layercount-swift.property.md): The number of data layers in the Aztec code symbol.
- [dataCodewordCount](ciazteccodedescriptor/datacodewordcount-swift.property.md): The number of non-error-correction codewords carried by the Aztec code symbol.

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
- [CIQRCodeDescriptor](ciqrcodedescriptor.md): A concrete subclass of the Core Image Barcode Descriptor that represents a square QR code symbol.
- [CIPDF417CodeDescriptor](cipdf417codedescriptor.md): A concrete subclass of Core Image Barcode Descriptor that represents a PDF417 symbol.
- [CIDataMatrixCodeDescriptor](cidatamatrixcodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Data Matrix code symbol.

# CIAztecCodeDescriptor (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A concrete subclass the Core Image Barcode Descriptor that represents an Aztec code symbol.

## Declaration

```objectivec
@interface CIAztecCodeDescriptor : CIBarcodeDescriptor
```

<a id="overview"></a>

## Overview

An Aztec code symbol is a 2D barcode format defined by the ISO/IEC 24778:2008 standard. It encodes data in concentric square rings around a central bullseye pattern.

## Topics

### Creating a Descriptor

- [initWithPayload:isCompact:layerCount:dataCodewordCount:](ciazteccodedescriptor/init%28payload_iscompact_layercount_datacodewordcount_%29.md): Initializes an Aztec code descriptor for the given payload and parameters.
- [descriptorWithPayload:isCompact:layerCount:dataCodewordCount:](ciazteccodedescriptor/descriptorwithpayload_iscompact_layercount_datacodewordcount_.md): Creates an Aztec code descriptor for the given payload and parameters.

### Examining a Descriptor

- [errorCorrectedPayload](ciazteccodedescriptor/errorcorrectedpayload-swift.property.md): The error-corrected payload that comprises the the Aztec code symbol.
- [isCompact](ciazteccodedescriptor/iscompact-swift.property.md): A Boolean value telling if the Aztec code is compact.
- [layerCount](ciazteccodedescriptor/layercount-swift.property.md): The number of data layers in the Aztec code symbol.
- [dataCodewordCount](ciazteccodedescriptor/datacodewordcount-swift.property.md): The number of non-error-correction codewords carried by the Aztec code symbol.

### Instance Variables

- [dataCodewordCount](ciazteccodedescriptor/datacodewordcount-c.ivar.md)
- [errorCorrectedPayload](ciazteccodedescriptor/errorcorrectedpayload-c.ivar.md)
- [isCompact](ciazteccodedescriptor/iscompact-c.ivar.md)
- [layerCount](ciazteccodedescriptor/layercount-c.ivar.md)

## Relationships

### Inherits From

- [CIBarcodeDescriptor](cibarcodedescriptor.md)

## See Also

### Barcode Descriptions

- [CIBarcodeDescriptor](cibarcodedescriptor.md): An abstract base class that represents a machine-readable code’s attributes.
- [CIQRCodeDescriptor](ciqrcodedescriptor.md): A concrete subclass of the Core Image Barcode Descriptor that represents a square QR code symbol.
- [CIPDF417CodeDescriptor](cipdf417codedescriptor.md): A concrete subclass of Core Image Barcode Descriptor that represents a PDF417 symbol.
- [CIDataMatrixCodeDescriptor](cidatamatrixcodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Data Matrix code symbol.
