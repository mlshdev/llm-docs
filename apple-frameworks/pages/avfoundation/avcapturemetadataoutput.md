> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemetadataoutput](https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput)

# AVCaptureMetadataOutput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

A capture output for processing timed metadata produced by a capture session.

## Declaration

```swift
class AVCaptureMetadataOutput
```

<a id="overview"></a>

## Overview

An `AVCaptureMetadataOutput` object intercepts metadata objects emitted by its associated capture connection and forwards them to a delegate object for processing. You can use instances of this class to process specific types of metadata included with the input data. You use this class the way you do other output objects, typically by adding it as an output to an [AVCaptureSession](avcapturesession.md) object.

## Topics

### Creating metadata output

- [init()](avcapturemetadataoutput/init%28%29.md): Creates a new capture metadata output.

### Configuring metadata capture

- [availableMetadataObjectTypes](avcapturemetadataoutput/availablemetadataobjecttypes.md): An array of strings identifying the types of metadata objects that can be captured.
- [metadataObjectTypes](avcapturemetadataoutput/metadataobjecttypes.md): An array of strings identifying the types of metadata objects to process.
- [rectOfInterest](avcapturemetadataoutput/rectofinterest.md): A rectangle of interest for limiting the search area for visual metadata.
- [requiredMetadataObjectTypesForCinematicVideoCapture](avcapturemetadataoutput/requiredmetadataobjecttypesforcinematicvideocapture.md): The required metadata object types when Cinematic Video capture is enabled.

### Receiving captured metadata objects

- [setMetadataObjectsDelegate(\_:queue:)](avcapturemetadataoutput/setmetadataobjectsdelegate%28__queue_%29.md): Sets the delegate and dispatch queue to use handle callbacks.
- [metadataObjectsDelegate](avcapturemetadataoutput/metadataobjectsdelegate.md): The delegate of the capture metadata output object.
- [metadataObjectsCallbackQueue](avcapturemetadataoutput/metadataobjectscallbackqueue.md): The dispatch queue on which to execute the delegate’s methods.
- [AVCaptureMetadataOutputObjectsDelegate](avcapturemetadataoutputobjectsdelegate.md): Methods for receiving metadata produced by a metadata capture output.

## Relationships

### Inherits From

- [AVCaptureOutput](avcaptureoutput.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Metadata capture

- [AVCaptureMetadataInput](avcapturemetadatainput.md): A capture input for providing timed metadata to a capture session.
- [AVMetadataObject](avmetadataobject.md): The abstract superclass for objects provided by a metadata capture output.
- [Metadata types](metadata-types.md): Inspect the supported metadata object types that the framework supports.

# AVCaptureMetadataOutput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

A capture output for processing timed metadata produced by a capture session.

## Declaration

```objectivec
@interface AVCaptureMetadataOutput : AVCaptureOutput
```

<a id="overview"></a>

## Overview

An `AVCaptureMetadataOutput` object intercepts metadata objects emitted by its associated capture connection and forwards them to a delegate object for processing. You can use instances of this class to process specific types of metadata included with the input data. You use this class the way you do other output objects, typically by adding it as an output to an [AVCaptureSession](avcapturesession.md) object.

## Topics

### Creating metadata output

- [init](avcapturemetadataoutput/init%28%29.md): Creates a new capture metadata output.
- [new](avcapturemetadataoutput/new.md): Creates a new capture metadata output.

### Configuring metadata capture

- [availableMetadataObjectTypes](avcapturemetadataoutput/availablemetadataobjecttypes.md): An array of strings identifying the types of metadata objects that can be captured.
- [metadataObjectTypes](avcapturemetadataoutput/metadataobjecttypes.md): An array of strings identifying the types of metadata objects to process.
- [rectOfInterest](avcapturemetadataoutput/rectofinterest.md): A rectangle of interest for limiting the search area for visual metadata.
- [requiredMetadataObjectTypesForCinematicVideoCapture](avcapturemetadataoutput/requiredmetadataobjecttypesforcinematicvideocapture.md): The required metadata object types when Cinematic Video capture is enabled.

### Receiving captured metadata objects

- [setMetadataObjectsDelegate:queue:](avcapturemetadataoutput/setmetadataobjectsdelegate%28__queue_%29.md): Sets the delegate and dispatch queue to use handle callbacks.
- [metadataObjectsDelegate](avcapturemetadataoutput/metadataobjectsdelegate.md): The delegate of the capture metadata output object.
- [metadataObjectsCallbackQueue](avcapturemetadataoutput/metadataobjectscallbackqueue.md): The dispatch queue on which to execute the delegate’s methods.
- [AVCaptureMetadataOutputObjectsDelegate](avcapturemetadataoutputobjectsdelegate.md): Methods for receiving metadata produced by a metadata capture output.

## Relationships

### Inherits From

- [AVCaptureOutput](avcaptureoutput.md)

## See Also

### Metadata capture

- [AVCaptureMetadataInput](avcapturemetadatainput.md): A capture input for providing timed metadata to a capture session.
- [AVMetadataObject](avmetadataobject.md): The abstract superclass for objects provided by a metadata capture output.
- [Metadata types](metadata-types.md): Inspect the supported metadata object types that the framework supports.
