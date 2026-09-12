> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidatamatrixcodedescriptor](https://developer.apple.com/documentation/coreimage/cidatamatrixcodedescriptor)

# CIDataMatrixCodeDescriptor (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A concrete subclass the Core Image Barcode Descriptor that represents an Data Matrix code symbol.

## Declaration

```swift
class CIDataMatrixCodeDescriptor
```

<a id="overview"></a>

## Overview

A Data Matrix code symbol is a 2D barcode format defined by the ISO/IEC 16022:2006(E) standard. It encodes data in square or rectangular symbol with solid lines on the left and bottom sides

## Topics

### Creating a Descriptor

- [init(payload:rowCount:columnCount:eccVersion:)](cidatamatrixcodedescriptor/init%28payload_rowcount_columncount_eccversion_%29.md): Initializes a Data Matrix code descriptor for the given payload and parameters.

### Examining a Descriptor

- [errorCorrectedPayload](cidatamatrixcodedescriptor/errorcorrectedpayload-swift.property.md): The error-corrected payload containing the data encoded in the Data Matrix code symbol.
- [rowCount](cidatamatrixcodedescriptor/rowcount-swift.property.md): The number of rows in the Data Matrix code symbol.
- [columnCount](cidatamatrixcodedescriptor/columncount-swift.property.md): The number of columns in the Data Matrix code symbol.
- [eccVersion](cidatamatrixcodedescriptor/eccversion-swift.property.md): The error correction version of the Data Matrix code symbol.

### Error Correction Constants

- [CIDataMatrixCodeDescriptor.ECCVersion](cidatamatrixcodedescriptor/eccversion-swift.enum.md): Constants indicating the Data Matrix code ECC version.

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
- [CIPDF417CodeDescriptor](cipdf417codedescriptor.md): A concrete subclass of Core Image Barcode Descriptor that represents a PDF417 symbol.

# CIDataMatrixCodeDescriptor (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A concrete subclass the Core Image Barcode Descriptor that represents an Data Matrix code symbol.

## Declaration

```objectivec
@interface CIDataMatrixCodeDescriptor : CIBarcodeDescriptor
```

<a id="overview"></a>

## Overview

A Data Matrix code symbol is a 2D barcode format defined by the ISO/IEC 16022:2006(E) standard. It encodes data in square or rectangular symbol with solid lines on the left and bottom sides

## Topics

### Creating a Descriptor

- [initWithPayload:rowCount:columnCount:eccVersion:](cidatamatrixcodedescriptor/init%28payload_rowcount_columncount_eccversion_%29.md): Initializes a Data Matrix code descriptor for the given payload and parameters.
- [descriptorWithPayload:rowCount:columnCount:eccVersion:](cidatamatrixcodedescriptor/descriptorwithpayload_rowcount_columncount_eccversion_.md): Creates a Data Matrix code descriptor for the given payload and parameters.

### Examining a Descriptor

- [errorCorrectedPayload](cidatamatrixcodedescriptor/errorcorrectedpayload-swift.property.md): The error-corrected payload containing the data encoded in the Data Matrix code symbol.
- [rowCount](cidatamatrixcodedescriptor/rowcount-swift.property.md): The number of rows in the Data Matrix code symbol.
- [columnCount](cidatamatrixcodedescriptor/columncount-swift.property.md): The number of columns in the Data Matrix code symbol.
- [eccVersion](cidatamatrixcodedescriptor/eccversion-swift.property.md): The error correction version of the Data Matrix code symbol.

### Error Correction Constants

- [CIDataMatrixCodeECCVersion](cidatamatrixcodedescriptor/eccversion-swift.enum.md): Constants indicating the Data Matrix code ECC version.

### Instance Variables

- [columnCount](cidatamatrixcodedescriptor/columncount-c.ivar.md)
- [eccVersion](cidatamatrixcodedescriptor/eccversion-c.ivar.md)
- [errorCorrectedPayload](cidatamatrixcodedescriptor/errorcorrectedpayload-c.ivar.md)
- [rowCount](cidatamatrixcodedescriptor/rowcount-c.ivar.md)

## Relationships

### Inherits From

- [CIBarcodeDescriptor](cibarcodedescriptor.md)

## See Also

### Barcode Descriptions

- [CIBarcodeDescriptor](cibarcodedescriptor.md): An abstract base class that represents a machine-readable code’s attributes.
- [CIQRCodeDescriptor](ciqrcodedescriptor.md): A concrete subclass of the Core Image Barcode Descriptor that represents a square QR code symbol.
- [CIAztecCodeDescriptor](ciazteccodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Aztec code symbol.
- [CIPDF417CodeDescriptor](cipdf417codedescriptor.md): A concrete subclass of Core Image Barcode Descriptor that represents a PDF417 symbol.
