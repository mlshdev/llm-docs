> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/videohdrallowed](https://developer.apple.com/documentation/arkit/arconfiguration/videohdrallowed)

# videoHDRAllowed (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Enables high dynamic range (HDR) for the session’s camera feed.

## Declaration

```swift
var videoHDRAllowed: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Before calling this function, check whether the session configuration’s video format supports HDR first by calling [isVideoHDRSupported](videoformat-swift.class/isvideohdrsupported.md).

## See Also

### Managing video capture options

- [videoFormat](videoformat-swift.property.md): Video format of the session output.
- [supportedVideoFormats](supportedvideoformats.md): The set of video capture formats available on the current device.
- [ARConfiguration.VideoFormat](videoformat-swift.class.md): A video size and frame rate specification for use with an AR session.
- [configurableCaptureDeviceForPrimaryCamera](configurablecapturedeviceforprimarycamera.md): An object that enables you to alter the appearance of a frame’s captured image.
- [recommendedVideoFormatFor4KResolution](recommendedvideoformatfor4kresolution.md): Provides a 4K video format if the device and configuration support it.
- [recommendedVideoFormatForHighResolutionFrameCapturing](recommendedvideoformatforhighresolutionframecapturing.md): Returns a video format that the framework recommends for high-resolution-still-image capture.

# videoHDRAllowed (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Enables high dynamic range (HDR) for the session’s camera feed.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL videoHDRAllowed;
```

<a id="Discussion"></a>

## Discussion

Before calling this function, check whether the session configuration’s video format supports HDR first by calling [videoHDRSupported](videoformat-swift.class/isvideohdrsupported.md).

## See Also

### Managing video capture options

- [videoFormat](videoformat-swift.property.md): Video format of the session output.
- [supportedVideoFormats](supportedvideoformats.md): The set of video capture formats available on the current device.
- [ARVideoFormat](videoformat-swift.class.md): A video size and frame rate specification for use with an AR session.
- [configurableCaptureDeviceForPrimaryCamera](configurablecapturedeviceforprimarycamera.md): An object that enables you to alter the appearance of a frame’s captured image.
- [recommendedVideoFormatFor4KResolution](recommendedvideoformatfor4kresolution.md): Provides a 4K video format if the device and configuration support it.
- [recommendedVideoFormatForHighResolutionFrameCapturing](recommendedvideoformatforhighresolutionframecapturing.md): Returns a video format that the framework recommends for high-resolution-still-image capture.
