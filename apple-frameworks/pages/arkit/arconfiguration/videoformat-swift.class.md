> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/videoformat-swift.class](https://developer.apple.com/documentation/arkit/arconfiguration/videoformat-swift.class)

# ARConfiguration.VideoFormat (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+

A video size and frame rate specification for use with an AR session.

## Declaration

```swift
class VideoFormat
```

<a id="overview"></a>

## Overview

This class is immutable; to set the frame rate and video resolution for an AR session, set your configuration’s [videoFormat](videoformat-swift.property.md) property to one of the formats in the [supportedVideoFormats](supportedvideoformats.md) array.

## Topics

### Accessing format information

- [framesPerSecond](videoformat-swift.class/framespersecond.md): The rate at which the session captures video and provides AR frame information.
- [imageResolution](videoformat-swift.class/imageresolution.md): The size, in pixels, of video images captured in the session.
- [isRecommendedForHighResolutionFrameCapturing](videoformat-swift.class/isrecommendedforhighresolutionframecapturing.md): Determines whether the framework considers a format suitable for high-resolution frame capture.
- [isVideoHDRSupported](videoformat-swift.class/isvideohdrsupported.md): Determines whether the format supports high dynamic range (HDR).

### Inspecting the video source

- [captureDevicePosition](videoformat-swift.class/capturedeviceposition.md): The position of the capture device.
- [AVCaptureDevice.Position](../../avfoundation/avcapturedevice/position-swift.enum.md): Constants that indicate the physical position of a capture device.
- [captureDeviceType](videoformat-swift.class/capturedevicetype.md): The camera that supplies the video format.

### Instance Properties

- [defaultColorSpace](videoformat-swift.class/defaultcolorspace.md): The color space ARKit uses to configure the capture session when this video format is selected.
- [defaultPhotoSettings](videoformat-swift.class/defaultphotosettings.md): The default AVCapturePhotoSettings object that ARKit uses when capturing a high resolution frame using this video format.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Managing video capture options

- [videoFormat](videoformat-swift.property.md): Video format of the session output.
- [supportedVideoFormats](supportedvideoformats.md): The set of video capture formats available on the current device.
- [videoHDRAllowed](videohdrallowed.md): Enables high dynamic range (HDR) for the session’s camera feed.
- [configurableCaptureDeviceForPrimaryCamera](configurablecapturedeviceforprimarycamera.md): An object that enables you to alter the appearance of a frame’s captured image.
- [recommendedVideoFormatFor4KResolution](recommendedvideoformatfor4kresolution.md): Provides a 4K video format if the device and configuration support it.
- [recommendedVideoFormatForHighResolutionFrameCapturing](recommendedvideoformatforhighresolutionframecapturing.md): Returns a video format that the framework recommends for high-resolution-still-image capture.

# ARVideoFormat (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+

A video size and frame rate specification for use with an AR session.

## Declaration

```objectivec
@interface ARVideoFormat : NSObject
```

<a id="overview"></a>

## Overview

This class is immutable; to set the frame rate and video resolution for an AR session, set your configuration’s [videoFormat](videoformat-swift.property.md) property to one of the formats in the [supportedVideoFormats](supportedvideoformats.md) array.

## Topics

### Accessing format information

- [framesPerSecond](videoformat-swift.class/framespersecond.md): The rate at which the session captures video and provides AR frame information.
- [imageResolution](videoformat-swift.class/imageresolution.md): The size, in pixels, of video images captured in the session.
- [isRecommendedForHighResolutionFrameCapturing](videoformat-swift.class/isrecommendedforhighresolutionframecapturing.md): Determines whether the framework considers a format suitable for high-resolution frame capture.
- [videoHDRSupported](videoformat-swift.class/isvideohdrsupported.md): Determines whether the format supports high dynamic range (HDR).

### Inspecting the video source

- [captureDevicePosition](videoformat-swift.class/capturedeviceposition.md): The position of the capture device.
- [AVCaptureDevicePosition](../../avfoundation/avcapturedevice/position-swift.enum.md): Constants that indicate the physical position of a capture device.
- [captureDeviceType](videoformat-swift.class/capturedevicetype.md): The camera that supplies the video format.

### Instance Properties

- [defaultColorSpace](videoformat-swift.class/defaultcolorspace.md): The color space ARKit uses to configure the capture session when this video format is selected.
- [defaultPhotoSettings](videoformat-swift.class/defaultphotosettings.md): The default AVCapturePhotoSettings object that ARKit uses when capturing a high resolution frame using this video format.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)

## See Also

### Managing video capture options

- [videoFormat](videoformat-swift.property.md): Video format of the session output.
- [supportedVideoFormats](supportedvideoformats.md): The set of video capture formats available on the current device.
- [videoHDRAllowed](videohdrallowed.md): Enables high dynamic range (HDR) for the session’s camera feed.
- [configurableCaptureDeviceForPrimaryCamera](configurablecapturedeviceforprimarycamera.md): An object that enables you to alter the appearance of a frame’s captured image.
- [recommendedVideoFormatFor4KResolution](recommendedvideoformatfor4kresolution.md): Provides a 4K video format if the device and configuration support it.
- [recommendedVideoFormatForHighResolutionFrameCapturing](recommendedvideoformatforhighresolutionframecapturing.md): Returns a video format that the framework recommends for high-resolution-still-image capture.
