> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cibarcodedescriptor](https://developer.apple.com/documentation/coreimage/cibarcodedescriptor)

# CIBarcodeDescriptor (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An abstract base class that represents a machine-readable code’s attributes.

## Declaration

```swift
class CIBarcodeDescriptor
```

<a id="overview"></a>

## Overview

Subclasses encapsulate the formal specification and fields specific to a code type. Each subclass is sufficient to recreate the unique symbol exactly as seen or used with a custom parser.

## Topics

### Initializers

- [init(coder:)](cibarcodedescriptor/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CIAztecCodeDescriptor](ciazteccodedescriptor.md)
- [CIDataMatrixCodeDescriptor](cidatamatrixcodedescriptor.md)
- [CIPDF417CodeDescriptor](cipdf417codedescriptor.md)
- [CIQRCodeDescriptor](ciqrcodedescriptor.md)

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

- [CIQRCodeDescriptor](ciqrcodedescriptor.md): A concrete subclass of the Core Image Barcode Descriptor that represents a square QR code symbol.
- [CIAztecCodeDescriptor](ciazteccodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Aztec code symbol.
- [CIPDF417CodeDescriptor](cipdf417codedescriptor.md): A concrete subclass of Core Image Barcode Descriptor that represents a PDF417 symbol.
- [CIDataMatrixCodeDescriptor](cidatamatrixcodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Data Matrix code symbol.

# CIBarcodeDescriptor (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An abstract base class that represents a machine-readable code’s attributes.

## Declaration

```objectivec
@interface CIBarcodeDescriptor : NSObject
```

<a id="overview"></a>

## Overview

Subclasses encapsulate the formal specification and fields specific to a code type. Each subclass is sufficient to recreate the unique symbol exactly as seen or used with a custom parser.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CIAztecCodeDescriptor](ciazteccodedescriptor.md)
- [CIDataMatrixCodeDescriptor](cidatamatrixcodedescriptor.md)
- [CIPDF417CodeDescriptor](cipdf417codedescriptor.md)
- [CIQRCodeDescriptor](ciqrcodedescriptor.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Barcode Descriptions

- [CIQRCodeDescriptor](ciqrcodedescriptor.md): A concrete subclass of the Core Image Barcode Descriptor that represents a square QR code symbol.
- [CIAztecCodeDescriptor](ciazteccodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Aztec code symbol.
- [CIPDF417CodeDescriptor](cipdf417codedescriptor.md): A concrete subclass of Core Image Barcode Descriptor that represents a PDF417 symbol.
- [CIDataMatrixCodeDescriptor](cidatamatrixcodedescriptor.md): A concrete subclass the Core Image Barcode Descriptor that represents an Data Matrix code symbol.
