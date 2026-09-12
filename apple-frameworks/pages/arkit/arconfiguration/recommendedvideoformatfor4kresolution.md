> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/recommendedvideoformatfor4kresolution](https://developer.apple.com/documentation/arkit/arconfiguration/recommendedvideoformatfor4kresolution)

# recommendedVideoFormatFor4KResolution (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Provides a 4K video format if the device and configuration support it.

## Declaration

```swift
class var recommendedVideoFormatFor4KResolution: ARConfiguration.VideoFormat? { get }
```

<a id="Discussion"></a>

## Discussion

If the device and configuration support 4K, the returned video format is also present in the configuration’s [supportedVideoFormats](supportedvideoformats.md) array.

This function returns `nil` if the device or configuration doesn’t support 4K, so you can call this function to determine whether to enable 4K for your session.

## See Also

### Managing video capture options

- [videoFormat](videoformat-swift.property.md): Video format of the session output.
- [supportedVideoFormats](supportedvideoformats.md): The set of video capture formats available on the current device.
- [ARConfiguration.VideoFormat](videoformat-swift.class.md): A video size and frame rate specification for use with an AR session.
- [videoHDRAllowed](videohdrallowed.md): Enables high dynamic range (HDR) for the session’s camera feed.
- [configurableCaptureDeviceForPrimaryCamera](configurablecapturedeviceforprimarycamera.md): An object that enables you to alter the appearance of a frame’s captured image.
- [recommendedVideoFormatForHighResolutionFrameCapturing](recommendedvideoformatforhighresolutionframecapturing.md): Returns a video format that the framework recommends for high-resolution-still-image capture.

# recommendedVideoFormatFor4KResolution (Objective-C)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Provides a 4K video format if the device and configuration support it.

## Declaration

```objectivec
@property (class, nonatomic, readonly, nullable) ARVideoFormat * recommendedVideoFormatFor4KResolution;
```

<a id="Discussion"></a>

## Discussion

If the device and configuration support 4K, the returned video format is also present in the configuration’s [supportedVideoFormats](supportedvideoformats.md) array.

This function returns `nil` if the device or configuration doesn’t support 4K, so you can call this function to determine whether to enable 4K for your session.

## See Also

### Managing video capture options

- [videoFormat](videoformat-swift.property.md): Video format of the session output.
- [supportedVideoFormats](supportedvideoformats.md): The set of video capture formats available on the current device.
- [ARVideoFormat](videoformat-swift.class.md): A video size and frame rate specification for use with an AR session.
- [videoHDRAllowed](videohdrallowed.md): Enables high dynamic range (HDR) for the session’s camera feed.
- [configurableCaptureDeviceForPrimaryCamera](configurablecapturedeviceforprimarycamera.md): An object that enables you to alter the appearance of a frame’s captured image.
- [recommendedVideoFormatForHighResolutionFrameCapturing](recommendedvideoformatforhighresolutionframecapturing.md): Returns a video format that the framework recommends for high-resolution-still-image capture.
