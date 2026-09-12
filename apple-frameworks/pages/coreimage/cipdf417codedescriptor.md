> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cipdf417codedescriptor](https://developer.apple.com/documentation/coreimage/cipdf417codedescriptor)

# CIPDF417CodeDescriptor (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A concrete subclass of Core Image Barcode Descriptor that represents a PDF417 symbol.

## Declaration

```swift
class CIPDF417CodeDescriptor
```

<a id="overview"></a>

## Overview

PDF417 is a stacked linear barcode symbol format used predominantly in transport, ID cards, and inventory management. Each pattern in the code comprises 4 bars and spaces, 17 units long.

Refer to the ISO/IEC 15438:2006(E) for the PDF417 symbol specification.

## Topics

### Creating a Descriptor

- [init(payload:isCompact:rowCount:columnCount:)](cipdf417codedescriptor/init%28payload_iscompact_rowcount_columncount_%29.md): Initializes an PDF417 code descriptor for the given payload and parameters.

### Examining a Descriptor

- [errorCorrectedPayload](cipdf417codedescriptor/errorcorrectedpayload-swift.property.md): The error-corrected payload containing the data encoded in the PDF417 code symbol.
- [isCompact](cipdf417codedescriptor/iscompact-swift.property.md): A boolean value telling if the PDF417 code is compact.
- [rowCount](cipdf417codedescriptor/rowcount-swift.property.md): The number of rows in the PDF417 code symbol.
- [columnCount](cipdf417codedescriptor/columncount-swift.property.md): The number of columns in the PDF417 code symbol.

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
- [CIAztecCodeDescriptor](ciazteccodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Aztec code symbol.
- [CIDataMatrixCodeDescriptor](cidatamatrixcodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Data Matrix code symbol.

# CIPDF417CodeDescriptor (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A concrete subclass of Core Image Barcode Descriptor that represents a PDF417 symbol.

## Declaration

```objectivec
@interface CIPDF417CodeDescriptor : CIBarcodeDescriptor
```

<a id="overview"></a>

## Overview

PDF417 is a stacked linear barcode symbol format used predominantly in transport, ID cards, and inventory management. Each pattern in the code comprises 4 bars and spaces, 17 units long.

Refer to the ISO/IEC 15438:2006(E) for the PDF417 symbol specification.

## Topics

### Creating a Descriptor

- [initWithPayload:isCompact:rowCount:columnCount:](cipdf417codedescriptor/init%28payload_iscompact_rowcount_columncount_%29.md): Initializes an PDF417 code descriptor for the given payload and parameters.
- [descriptorWithPayload:isCompact:rowCount:columnCount:](cipdf417codedescriptor/descriptorwithpayload_iscompact_rowcount_columncount_.md): Creates an PDF417 code descriptor for the given payload and parameters.

### Examining a Descriptor

- [errorCorrectedPayload](cipdf417codedescriptor/errorcorrectedpayload-swift.property.md): The error-corrected payload containing the data encoded in the PDF417 code symbol.
- [isCompact](cipdf417codedescriptor/iscompact-swift.property.md): A boolean value telling if the PDF417 code is compact.
- [rowCount](cipdf417codedescriptor/rowcount-swift.property.md): The number of rows in the PDF417 code symbol.
- [columnCount](cipdf417codedescriptor/columncount-swift.property.md): The number of columns in the PDF417 code symbol.

### Instance Variables

- [columnCount](cipdf417codedescriptor/columncount-c.ivar.md)
- [errorCorrectedPayload](cipdf417codedescriptor/errorcorrectedpayload-c.ivar.md)
- [isCompact](cipdf417codedescriptor/iscompact-c.ivar.md)
- [rowCount](cipdf417codedescriptor/rowcount-c.ivar.md)

## Relationships

### Inherits From

- [CIBarcodeDescriptor](cibarcodedescriptor.md)

## See Also

### Barcode Descriptions

- [CIBarcodeDescriptor](cibarcodedescriptor.md): An abstract base class that represents a machine-readable code’s attributes.
- [CIQRCodeDescriptor](ciqrcodedescriptor.md): A concrete subclass of the Core Image Barcode Descriptor that represents a square QR code symbol.
- [CIAztecCodeDescriptor](ciazteccodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Aztec code symbol.
- [CIDataMatrixCodeDescriptor](cidatamatrixcodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Data Matrix code symbol.
