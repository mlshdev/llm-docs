> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeferredphotoproxy](https://developer.apple.com/documentation/avfoundation/avcapturedeferredphotoproxy)

# AVCaptureDeferredPhotoProxy (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A lightly-processed photo with data that the system may use to process and fetch a higher-resolution asset at a later time.

## Declaration

```swift
class AVCaptureDeferredPhotoProxy
```

<a id="overview"></a>

## Overview

A photo proxy behaves like a normal [AVCapturePhoto](avcapturephoto.md), and approximates the look of the final rendered image. This object represents intermediate data that the system can render into a final image and ingested into the user’s photo library using the [PhotoKit](../photokit.md) framework. The intermediate data aren’t accessible by the calling process.

## Relationships

### Inherits From

- [AVCapturePhoto](avcapturephoto.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Photo capture

- [Capturing consistent color images](capturing-consistent-color-images.md): Add the power of a photography studio and lighting rig to your app with the new Constant Color API.
- [Capturing still and Live Photos](capturing-still-and-live-photos.md): Configure and capture single or multiple still images, Live Photos, and other forms of photography.
- [Capturing photos in RAW and Apple ProRAW formats](capturing-photos-in-raw-and-apple-proraw-formats.md): Support professional photography workflows by enabling minimally processed image capture in your camera app.
- [Supporting Continuity Camera in Your Mac App](https://developer.apple.com/documentation/appkit/supporting-continuity-camera-in-your-mac-app): Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.
- [AVCapturePhoto](avcapturephoto.md): A container for image data from a photo capture output.
- [AVCapturePhotoOutput](avcapturephotooutput.md): A capture output for still image, Live Photos, and other photography workflows.
- [AVCapturePhotoCaptureDelegate](avcapturephotocapturedelegate.md): Methods for monitoring progress and receiving results from a photo capture output.
- [AVCapturePhotoOutputReadinessCoordinator](avcapturephotooutputreadinesscoordinator.md): An object that monitors changes to a photo output’s capture readiness.
- [AVCapturePhotoOutputReadinessCoordinatorDelegate](avcapturephotooutputreadinesscoordinatordelegate.md): A delegate protocol to receive updates about a photo output’s capture readiness.
- [AVCaptureStillImageOutput](avcapturestillimageoutput.md): Deprecated. A capture output for capturing still photos.

# AVCaptureDeferredPhotoProxy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+

A lightly-processed photo with data that the system may use to process and fetch a higher-resolution asset at a later time.

## Declaration

```objectivec
@interface AVCaptureDeferredPhotoProxy : AVCapturePhoto
```

<a id="overview"></a>

## Overview

A photo proxy behaves like a normal [AVCapturePhoto](avcapturephoto.md), and approximates the look of the final rendered image. This object represents intermediate data that the system can render into a final image and ingested into the user’s photo library using the [PhotoKit](../photokit.md) framework. The intermediate data aren’t accessible by the calling process.

## Relationships

### Inherits From

- [AVCapturePhoto](avcapturephoto.md)

## See Also

### Photo capture

- [Capturing consistent color images](capturing-consistent-color-images.md): Add the power of a photography studio and lighting rig to your app with the new Constant Color API.
- [Capturing still and Live Photos](capturing-still-and-live-photos.md): Configure and capture single or multiple still images, Live Photos, and other forms of photography.
- [Capturing photos in RAW and Apple ProRAW formats](capturing-photos-in-raw-and-apple-proraw-formats.md): Support professional photography workflows by enabling minimally processed image capture in your camera app.
- [Supporting Continuity Camera in Your Mac App](https://developer.apple.com/documentation/appkit/supporting-continuity-camera-in-your-mac-app): Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.
- [AVCapturePhoto](avcapturephoto.md): A container for image data from a photo capture output.
- [AVCapturePhotoOutput](avcapturephotooutput.md): A capture output for still image, Live Photos, and other photography workflows.
- [AVCapturePhotoCaptureDelegate](avcapturephotocapturedelegate.md): Methods for monitoring progress and receiving results from a photo capture output.
- [AVCapturePhotoOutputReadinessCoordinator](avcapturephotooutputreadinesscoordinator.md): An object that monitors changes to a photo output’s capture readiness.
- [AVCapturePhotoOutputReadinessCoordinatorDelegate](avcapturephotooutputreadinesscoordinatordelegate.md): A delegate protocol to receive updates about a photo output’s capture readiness.
- [AVCaptureStillImageOutput](avcapturestillimageoutput.md): Deprecated. A capture output for capturing still photos.
