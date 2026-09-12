> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/videoformat-swift.property](https://developer.apple.com/documentation/arkit/arconfiguration/videoformat-swift.property)

# videoFormat (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

Video format of the session output.

## Declaration

```swift
var videoFormat: ARConfiguration.VideoFormat { get set }
```

## See Also

### Managing video capture options

- [supportedVideoFormats](supportedvideoformats.md): The set of video capture formats available on the current device.
- [ARConfiguration.VideoFormat](videoformat-swift.class.md): A video size and frame rate specification for use with an AR session.
- [videoHDRAllowed](videohdrallowed.md): Enables high dynamic range (HDR) for the session’s camera feed.
- [configurableCaptureDeviceForPrimaryCamera](configurablecapturedeviceforprimarycamera.md): An object that enables you to alter the appearance of a frame’s captured image.
- [recommendedVideoFormatFor4KResolution](recommendedvideoformatfor4kresolution.md): Provides a 4K video format if the device and configuration support it.
- [recommendedVideoFormatForHighResolutionFrameCapturing](recommendedvideoformatforhighresolutionframecapturing.md): Returns a video format that the framework recommends for high-resolution-still-image capture.

# videoFormat (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

Video format of the session output.

## Declaration

```objectivec
@property (nonatomic, strong) ARVideoFormat * videoFormat;
```

## See Also

### Managing video capture options

- [supportedVideoFormats](supportedvideoformats.md): The set of video capture formats available on the current device.
- [ARVideoFormat](videoformat-swift.class.md): A video size and frame rate specification for use with an AR session.
- [videoHDRAllowed](videohdrallowed.md): Enables high dynamic range (HDR) for the session’s camera feed.
- [configurableCaptureDeviceForPrimaryCamera](configurablecapturedeviceforprimarycamera.md): An object that enables you to alter the appearance of a frame’s captured image.
- [recommendedVideoFormatFor4KResolution](recommendedvideoformatfor4kresolution.md): Provides a 4K video format if the device and configuration support it.
- [recommendedVideoFormatForHighResolutionFrameCapturing](recommendedvideoformatforhighresolutionframecapturing.md): Returns a video format that the framework recommends for high-resolution-still-image capture.
