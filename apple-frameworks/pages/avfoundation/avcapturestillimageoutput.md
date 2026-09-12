> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturestillimageoutput](https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput)

# AVCaptureStillImageOutput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15)

A capture output for capturing still photos.

> Use [AVCapturePhotoOutput](avcapturephotooutput.md) instead.

## Declaration

```swift
class AVCaptureStillImageOutput
```

## Topics

### Capturing an image

- [captureStillImageAsynchronously(from:completionHandler:)](avcapturestillimageoutput/capturestillimageasynchronously%28from_completionhandler_%29.md): Deprecated. Initiates a still image capture and returns immediately.
- [isCapturingStillImage](avcapturestillimageoutput/iscapturingstillimage.md): Deprecated. Indicates whether a still image is being captured.

### Getting and setting image stabilization settings

- [isStillImageStabilizationActive](avcapturestillimageoutput/isstillimagestabilizationactive.md): Deprecated. Indicates whether still image stabilization is in use for the current capture.
- [automaticallyEnablesStillImageStabilizationWhenAvailable](avcapturestillimageoutput/automaticallyenablesstillimagestabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether still image stabilization should be automatically enabled.
- [isStillImageStabilizationSupported](avcapturestillimageoutput/isstillimagestabilizationsupported.md): Deprecated. A Boolean value that indicates whether the still image currently being captured supports still image stabilization.

### Configuring orientation compensation

- [isCameraSensorOrientationCompensationSupported](avcapturestillimageoutput/iscamerasensororientationcompensationsupported.md): Deprecated.
- [isCameraSensorOrientationCompensationEnabled](avcapturestillimageoutput/iscamerasensororientationcompensationenabled.md): Deprecated.

### Configuring image settings

- [isHighResolutionStillImageOutputEnabled](avcapturestillimageoutput/ishighresolutionstillimageoutputenabled.md): Deprecated. A Boolean value that indicates whether the receiver should emit still images at the highest resolution supported by its source `AVCaptureDevice` objects `activeFormat` property.
- [availableImageDataCVPixelFormatTypes](avcapturestillimageoutput/availableimagedatacvpixelformattypes.md): Deprecated. The supported image pixel formats that can be specified as output settings.
- [availableImageDataCodecTypes](avcapturestillimageoutput/availableimagedatacodectypes.md): Deprecated. The supported image codec formats that can be specified as output settings.
- [outputSettings](avcapturestillimageoutput/outputsettings.md): Deprecated. The compression settings for the output.
- [Video settings](video-settings.md): Configure video processing settings using standard key and value constants.

### Image format conversion

- [jpegStillImageNSDataRepresentation(\_:)](avcapturestillimageoutput/jpegstillimagensdatarepresentation%28__%29.md): Deprecated. Returns an `NSData` representation of a still image data and metadata attachments in a JPEG sample buffer.

### Still image bracketed capture

- [captureStillImageBracketAsynchronously(from:withSettingsArray:completionHandler:)](avcapturestillimageoutput/capturestillimagebracketasynchronously%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Captures a still image bracket.
- [maxBracketedCaptureStillImageCount](avcapturestillimageoutput/maxbracketedcapturestillimagecount.md): Deprecated. Specifies the maximum number of still images that may be taken in a single bracket.
- [prepareToCaptureStillImageBracket(from:withSettingsArray:completionHandler:)](avcapturestillimageoutput/preparetocapturestillimagebracket%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Allows the receiver to prepare resources in advance of capturing a still image bracket.
- [isLensStabilizationDuringBracketedCaptureSupported](avcapturestillimageoutput/islensstabilizationduringbracketedcapturesupported.md): Deprecated. A Boolean value that indicates whether the capture output supports lens stabilization across the duration of a bracketed capture.
- [isLensStabilizationDuringBracketedCaptureEnabled](avcapturestillimageoutput/islensstabilizationduringbracketedcaptureenabled.md): Deprecated. A Boolean value that specifies whether to stabilize the lens across the duration of a bracketed capture.

### Creating still image output

- [init()](avcapturestillimageoutput/init%28%29.md): Deprecated. Creates new still image output.

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
- [AVCapturePhotoOutputReadinessCoordinatorDelegate](avcapturephotooutputreadinesscoordinatordelegate.md): A delegate protocol to receive updates about a photo output’s capture readiness.

# AVCaptureStillImageOutput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15)

A capture output for capturing still photos.

> Use [AVCapturePhotoOutput](avcapturephotooutput.md) instead.

## Declaration

```objectivec
@interface AVCaptureStillImageOutput : AVCaptureOutput
```

## Topics

### Capturing an image

- [captureStillImageAsynchronouslyFromConnection:completionHandler:](avcapturestillimageoutput/capturestillimageasynchronously%28from_completionhandler_%29.md): Deprecated. Initiates a still image capture and returns immediately.
- [capturingStillImage](avcapturestillimageoutput/iscapturingstillimage.md): Deprecated. Indicates whether a still image is being captured.

### Getting and setting image stabilization settings

- [stillImageStabilizationActive](avcapturestillimageoutput/isstillimagestabilizationactive.md): Deprecated. Indicates whether still image stabilization is in use for the current capture.
- [automaticallyEnablesStillImageStabilizationWhenAvailable](avcapturestillimageoutput/automaticallyenablesstillimagestabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether still image stabilization should be automatically enabled.
- [stillImageStabilizationSupported](avcapturestillimageoutput/isstillimagestabilizationsupported.md): Deprecated. A Boolean value that indicates whether the still image currently being captured supports still image stabilization.

### Configuring orientation compensation

- [cameraSensorOrientationCompensationSupported](avcapturestillimageoutput/iscamerasensororientationcompensationsupported.md): Deprecated.
- [cameraSensorOrientationCompensationEnabled](avcapturestillimageoutput/iscamerasensororientationcompensationenabled.md): Deprecated.

### Configuring image settings

- [highResolutionStillImageOutputEnabled](avcapturestillimageoutput/ishighresolutionstillimageoutputenabled.md): Deprecated. A Boolean value that indicates whether the receiver should emit still images at the highest resolution supported by its source `AVCaptureDevice` objects `activeFormat` property.
- [availableImageDataCVPixelFormatTypes](avcapturestillimageoutput/availableimagedatacvpixelformattypes.md): Deprecated. The supported image pixel formats that can be specified as output settings.
- [availableImageDataCodecTypes](avcapturestillimageoutput/availableimagedatacodectypes.md): Deprecated. The supported image codec formats that can be specified as output settings.
- [outputSettings](avcapturestillimageoutput/outputsettings.md): Deprecated. The compression settings for the output.
- [Video settings](video-settings.md): Configure video processing settings using standard key and value constants.

### Image format conversion

- [jpegStillImageNSDataRepresentation:](avcapturestillimageoutput/jpegstillimagensdatarepresentation%28__%29.md): Deprecated. Returns an `NSData` representation of a still image data and metadata attachments in a JPEG sample buffer.

### Still image bracketed capture

- [captureStillImageBracketAsynchronouslyFromConnection:withSettingsArray:completionHandler:](avcapturestillimageoutput/capturestillimagebracketasynchronously%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Captures a still image bracket.
- [maxBracketedCaptureStillImageCount](avcapturestillimageoutput/maxbracketedcapturestillimagecount.md): Deprecated. Specifies the maximum number of still images that may be taken in a single bracket.
- [prepareToCaptureStillImageBracketFromConnection:withSettingsArray:completionHandler:](avcapturestillimageoutput/preparetocapturestillimagebracket%28from_withsettingsarray_completionhandler_%29.md): Deprecated. Allows the receiver to prepare resources in advance of capturing a still image bracket.
- [lensStabilizationDuringBracketedCaptureSupported](avcapturestillimageoutput/islensstabilizationduringbracketedcapturesupported.md): Deprecated. A Boolean value that indicates whether the capture output supports lens stabilization across the duration of a bracketed capture.
- [lensStabilizationDuringBracketedCaptureEnabled](avcapturestillimageoutput/islensstabilizationduringbracketedcaptureenabled.md): Deprecated. A Boolean value that specifies whether to stabilize the lens across the duration of a bracketed capture.

### Creating still image output

- [init](avcapturestillimageoutput/init%28%29.md): Deprecated. Creates new still image output.
- [new](avcapturestillimageoutput/new.md): Deprecated. Creates new still image output.

## Relationships

### Inherits From

- [AVCaptureOutput](avcaptureoutput.md)

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
- [AVCapturePhotoOutputReadinessCoordinatorDelegate](avcapturephotooutputreadinesscoordinatordelegate.md): A delegate protocol to receive updates about a photo output’s capture readiness.
