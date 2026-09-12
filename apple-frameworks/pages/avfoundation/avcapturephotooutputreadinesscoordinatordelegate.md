> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutputreadinesscoordinatordelegate](https://developer.apple.com/documentation/avfoundation/avcapturephotooutputreadinesscoordinatordelegate)

# AVCapturePhotoOutputReadinessCoordinatorDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A delegate protocol to receive updates about a photo output’s capture readiness.

## Declaration

```swift
protocol AVCapturePhotoOutputReadinessCoordinatorDelegate : NSObjectProtocol
```

## Topics

### Monitoring capture readiness

- [readinessCoordinator(\_:captureReadinessDidChange:)](avcapturephotooutputreadinesscoordinatordelegate/readinesscoordinator%28__capturereadinessdidchange_%29.md): Tells the delegate that the capture readiness state of a photo output changed.

## Relationships

### Inherits From

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
- [AVCapturePhotoOutputReadinessCoordinator](avcapturephotooutputreadinesscoordinator.md): An object that monitors changes to a photo output’s capture readiness.
- [AVCaptureStillImageOutput](avcapturestillimageoutput.md): Deprecated. A capture output for capturing still photos.

# AVCapturePhotoOutputReadinessCoordinatorDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A delegate protocol to receive updates about a photo output’s capture readiness.

## Declaration

```objectivec
@protocol AVCapturePhotoOutputReadinessCoordinatorDelegate <NSObject>
```

## Topics

### Monitoring capture readiness

- [readinessCoordinator:captureReadinessDidChange:](avcapturephotooutputreadinesscoordinatordelegate/readinesscoordinator%28__capturereadinessdidchange_%29.md): Tells the delegate that the capture readiness state of a photo output changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

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
- [AVCapturePhotoOutputReadinessCoordinator](avcapturephotooutputreadinesscoordinator.md): An object that monitors changes to a photo output’s capture readiness.
- [AVCaptureStillImageOutput](avcapturestillimageoutput.md): Deprecated. A capture output for capturing still photos.
