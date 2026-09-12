> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadatamachinereadablecodeobject](https://developer.apple.com/documentation/avfoundation/avmetadatamachinereadablecodeobject)

# AVMetadataMachineReadableCodeObject (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 9.0+

Barcode information detected by a metadata capture output.

## Declaration

```swift
class AVMetadataMachineReadableCodeObject
```

<a id="overview"></a>

## Overview

The `AVMetadataMachineReadableCodeObject` class is a concrete subclass of [AVMetadataObject](avmetadataobject.md) defining the features of a detected one-dimensional or two-dimensional barcode.

An `AVMetadataMachineReadableCodeObject` instance represents a single detected machine readable code in an image.  It’s an immutable object describing the features and payload of a barcode.

On supported platforms, the [AVCaptureMetadataOutput](avcapturemetadataoutput.md) class outputs arrays of detected machine readable code objects.

## Topics

### Getting machine-readable code values

- [corners](avmetadatamachinereadablecodeobject/corners-58qbe.md): A Swift array of corner points.
- [descriptor](avmetadatamachinereadablecodeobject/descriptor.md): A barcode description for use in Core Image.
- [stringValue](avmetadatamachinereadablecodeobject/stringvalue.md): Returns the error-corrected data decoded into a human-readable string.

### Constants

- [Machine-readable object types](machine-readable-object-types.md): Constants used to specify the type of barcode to scan.

## Relationships

### Inherits From

- [AVMetadataObject](avmetadataobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# AVMetadataMachineReadableCodeObject (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 9.0+

Barcode information detected by a metadata capture output.

## Declaration

```objectivec
@interface AVMetadataMachineReadableCodeObject : AVMetadataObject
```

<a id="overview"></a>

## Overview

The `AVMetadataMachineReadableCodeObject` class is a concrete subclass of [AVMetadataObject](avmetadataobject.md) defining the features of a detected one-dimensional or two-dimensional barcode.

An `AVMetadataMachineReadableCodeObject` instance represents a single detected machine readable code in an image.  It’s an immutable object describing the features and payload of a barcode.

On supported platforms, the [AVCaptureMetadataOutput](avcapturemetadataoutput.md) class outputs arrays of detected machine readable code objects.

## Topics

### Getting machine-readable code values

- [corners](avmetadatamachinereadablecodeobject/corners-8f6bv.md): The points defining the (x, y) locations of the corners.
- [descriptor](avmetadatamachinereadablecodeobject/descriptor.md): A barcode description for use in Core Image.
- [stringValue](avmetadatamachinereadablecodeobject/stringvalue.md): Returns the error-corrected data decoded into a human-readable string.

### Constants

- [Machine-readable object types](machine-readable-object-types.md): Constants used to specify the type of barcode to scan.

## Relationships

### Inherits From

- [AVMetadataObject](avmetadataobject.md)
