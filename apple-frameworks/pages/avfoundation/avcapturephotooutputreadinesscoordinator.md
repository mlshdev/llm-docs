> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutputreadinesscoordinator](https://developer.apple.com/documentation/avfoundation/avcapturephotooutputreadinesscoordinator)

# AVCapturePhotoOutputReadinessCoordinator (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

An object that monitors changes to a photo output’s capture readiness.

## Declaration

```swift
class AVCapturePhotoOutputReadinessCoordinator
```

<a id="overview"></a>

## Overview

Use this object to coordinate user interface updates on the main queue with a [AVCapturePhotoOutput](avcapturephotooutput.md) that runs on a background queue. Adopt the [AVCapturePhotoOutputReadinessCoordinatorDelegate](avcapturephotooutputreadinesscoordinatordelegate.md) protocol in your app and set its implementation as the coordinator’s delegate object to receive callbacks as the associated photo output’s [captureReadiness](avcapturephotooutput/capturereadiness-swift.property.md) state changes.

You can track additional capture requests with this object by calling its [startTrackingCaptureRequest(using:)](avcapturephotooutputreadinesscoordinator/starttrackingcapturerequest%28using_%29.md) method. You can use it to synchronously update shutter button availability and appearance and on the main thread while calling the photo output’s [capturePhoto(with:delegate:)](avcapturephotooutput/capturephoto%28with_delegate_%29.md) method asynchronously on a background queue.

## Topics

### Creating a coordinator

- [init(photoOutput:)](avcapturephotooutputreadinesscoordinator/init%28photooutput_%29.md): Creates an object that helps coordinate user interface changes with a photo output that runs on a background queue.

### Setting the delegate object

- [delegate](avcapturephotooutputreadinesscoordinator/delegate.md): The coordinator’s delegate object.

### Performing tracking requests

- [startTrackingCaptureRequest(using:)](avcapturephotooutputreadinesscoordinator/starttrackingcapturerequest%28using_%29.md): Tracks a capture request that uses the specified photo settings.
- [stopTrackingCaptureRequest(using:)](avcapturephotooutputreadinesscoordinator/stoptrackingcapturerequest%28using_%29.md): Stop tracking the capture request represented by the specified photo setting’s unique identifier.

### Determining readiness for capture

- [captureReadiness](avcapturephotooutputreadinesscoordinator/capturereadiness.md): A value that indicates whether the coordinator’s photo output is ready to respond to new capture requests in a timely manner.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [AVCaptureDeferredPhotoProxy](avcapturedeferredphotoproxy.md): A lightly-processed photo with data that the system may use to process and fetch a higher-resolution asset at a later time.
- [AVCapturePhotoOutput](avcapturephotooutput.md): A capture output for still image, Live Photos, and other photography workflows.
- [AVCapturePhotoCaptureDelegate](avcapturephotocapturedelegate.md): Methods for monitoring progress and receiving results from a photo capture output.
- [AVCapturePhotoOutputReadinessCoordinatorDelegate](avcapturephotooutputreadinesscoordinatordelegate.md): A delegate protocol to receive updates about a photo output’s capture readiness.
- [AVCaptureStillImageOutput](avcapturestillimageoutput.md): Deprecated. A capture output for capturing still photos.

# AVCapturePhotoOutputReadinessCoordinator (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

An object that monitors changes to a photo output’s capture readiness.

## Declaration

```objectivec
@interface AVCapturePhotoOutputReadinessCoordinator : NSObject
```

<a id="overview"></a>

## Overview

Use this object to coordinate user interface updates on the main queue with a [AVCapturePhotoOutput](avcapturephotooutput.md) that runs on a background queue. Adopt the [AVCapturePhotoOutputReadinessCoordinatorDelegate](avcapturephotooutputreadinesscoordinatordelegate.md) protocol in your app and set its implementation as the coordinator’s delegate object to receive callbacks as the associated photo output’s [captureReadiness](avcapturephotooutput/capturereadiness-swift.property.md) state changes.

You can track additional capture requests with this object by calling its [startTrackingCaptureRequestUsingPhotoSettings:](avcapturephotooutputreadinesscoordinator/starttrackingcapturerequest%28using_%29.md) method. You can use it to synchronously update shutter button availability and appearance and on the main thread while calling the photo output’s [capturePhotoWithSettings:delegate:](avcapturephotooutput/capturephoto%28with_delegate_%29.md) method asynchronously on a background queue.

## Topics

### Creating a coordinator

- [initWithPhotoOutput:](avcapturephotooutputreadinesscoordinator/init%28photooutput_%29.md): Creates an object that helps coordinate user interface changes with a photo output that runs on a background queue.

### Setting the delegate object

- [delegate](avcapturephotooutputreadinesscoordinator/delegate.md): The coordinator’s delegate object.

### Performing tracking requests

- [startTrackingCaptureRequestUsingPhotoSettings:](avcapturephotooutputreadinesscoordinator/starttrackingcapturerequest%28using_%29.md): Tracks a capture request that uses the specified photo settings.
- [stopTrackingCaptureRequestUsingPhotoSettingsUniqueID:](avcapturephotooutputreadinesscoordinator/stoptrackingcapturerequest%28using_%29.md): Stop tracking the capture request represented by the specified photo setting’s unique identifier.

### Determining readiness for capture

- [captureReadiness](avcapturephotooutputreadinesscoordinator/capturereadiness.md): A value that indicates whether the coordinator’s photo output is ready to respond to new capture requests in a timely manner.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Photo capture

- [Capturing consistent color images](capturing-consistent-color-images.md): Add the power of a photography studio and lighting rig to your app with the new Constant Color API.
- [Capturing still and Live Photos](capturing-still-and-live-photos.md): Configure and capture single or multiple still images, Live Photos, and other forms of photography.
- [Capturing photos in RAW and Apple ProRAW formats](capturing-photos-in-raw-and-apple-proraw-formats.md): Support professional photography workflows by enabling minimally processed image capture in your camera app.
- [Supporting Continuity Camera in Your Mac App](https://developer.apple.com/documentation/appkit/supporting-continuity-camera-in-your-mac-app): Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.
- [AVCapturePhoto](avcapturephoto.md): A container for image data from a photo capture output.
- [AVCaptureDeferredPhotoProxy](avcapturedeferredphotoproxy.md): A lightly-processed photo with data that the system may use to process and fetch a higher-resolution asset at a later time.
- [AVCapturePhotoOutput](avcapturephotooutput.md): A capture output for still image, Live Photos, and other photography workflows.
- [AVCapturePhotoCaptureDelegate](avcapturephotocapturedelegate.md): Methods for monitoring progress and receiving results from a photo capture output.
- [AVCapturePhotoOutputReadinessCoordinatorDelegate](avcapturephotooutputreadinesscoordinatordelegate.md): A delegate protocol to receive updates about a photo output’s capture readiness.
- [AVCaptureStillImageOutput](avcapturestillimageoutput.md): Deprecated. A capture output for capturing still photos.
