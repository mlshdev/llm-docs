> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemetadatainput](https://developer.apple.com/documentation/avfoundation/avcapturemetadatainput)

# AVCaptureMetadataInput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A capture input for providing timed metadata to a capture session.

## Declaration

```swift
class AVCaptureMetadataInput
```

<a id="overview"></a>

## Overview

This class provides input to an [AVCaptureSession](avcapturesession.md). An instance of [AVCaptureMetadataInput](avcapturemetadatainput.md) can present one and only one [AVCaptureInput.Port](avcaptureinput/port.md) connected to an [AVCaptureMovieFileOutput](avcapturemoviefileoutput.md). Provide metadata through the input port by conforming to a [CMFormatDescription](../coremedia/cmformatdescription.md) and supplying [AVMetadataItem](avmetadataitem.md) objects in an [AVTimedMetadataGroup](avtimedmetadatagroup.md).

## Topics

### Creating metadata input

- [init(formatDescription:clock:)](avcapturemetadatainput/init%28formatdescription_clock_%29.md): Creates capture metadata input to provide timed groups to a capture session.

### Providing metadata

- [append(\_:)](avcapturemetadatainput/append%28__%29.md): Provides metadata to the capture session.

## Relationships

### Inherits From

- [AVCaptureInput](avcaptureinput.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Metadata capture

- [AVCaptureMetadataOutput](avcapturemetadataoutput.md): A capture output for processing timed metadata produced by a capture session.
- [AVMetadataObject](avmetadataobject.md): The abstract superclass for objects provided by a metadata capture output.
- [Metadata types](metadata-types.md): Inspect the supported metadata object types that the framework supports.

# AVCaptureMetadataInput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A capture input for providing timed metadata to a capture session.

## Declaration

```objectivec
@interface AVCaptureMetadataInput : AVCaptureInput
```

<a id="overview"></a>

## Overview

This class provides input to an [AVCaptureSession](avcapturesession.md). An instance of [AVCaptureMetadataInput](avcapturemetadatainput.md) can present one and only one [AVCaptureInputPort](avcaptureinput/port.md) connected to an [AVCaptureMovieFileOutput](avcapturemoviefileoutput.md). Provide metadata through the input port by conforming to a [CMFormatDescriptionRef](../coremedia/cmformatdescription.md) and supplying [AVMetadataItem](avmetadataitem.md) objects in an [AVTimedMetadataGroup](avtimedmetadatagroup.md).

## Topics

### Creating metadata input

- [initWithFormatDescription:clock:](avcapturemetadatainput/init%28formatdescription_clock_%29.md): Creates capture metadata input to provide timed groups to a capture session.
- [metadataInputWithFormatDescription:clock:](avcapturemetadatainput/metadatainputwithformatdescription_clock_.md): Returns a metadata input instance that allows clients to provide timed metadata groups to a capture session.

### Providing metadata

- [appendTimedMetadataGroup:error:](avcapturemetadatainput/append%28__%29.md): Provides metadata to the capture session.

## Relationships

### Inherits From

- [AVCaptureInput](avcaptureinput.md)

## See Also

### Metadata capture

- [AVCaptureMetadataOutput](avcapturemetadataoutput.md): A capture output for processing timed metadata produced by a capture session.
- [AVMetadataObject](avmetadataobject.md): The abstract superclass for objects provided by a metadata capture output.
- [Metadata types](metadata-types.md): Inspect the supported metadata object types that the framework supports.
