> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/recommendedvideoformatforhighresolutionframecapturing](https://developer.apple.com/documentation/arkit/arconfiguration/recommendedvideoformatforhighresolutionframecapturing)

# recommendedVideoFormatForHighResolutionFrameCapturing (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Returns a video format that the framework recommends for high-resolution-still-image capture.

## Declaration

```swift
class var recommendedVideoFormatForHighResolutionFrameCapturing: ARConfiguration.VideoFormat? { get }
```

<a id="Discussion"></a>

## Discussion

The framework determines the resolution of the camera feed and still-image capture for this format. Call this function when your app requires a high-resolution still capture regardless of format specifics. If instead, your app requires a particular resolution, iterate over the [supportedVideoFormats](supportedvideoformats.md) array and choose a format with the desired configuration where [isRecommendedForHighResolutionFrameCapturing](videoformat-swift.class/isrecommendedforhighresolutionframecapturing.md) is `true`.

Other video formats may support still-image capture but at a lower quality or resolution.

## See Also

### Managing video capture options

- [videoFormat](videoformat-swift.property.md): Video format of the session output.
- [supportedVideoFormats](supportedvideoformats.md): The set of video capture formats available on the current device.
- [ARConfiguration.VideoFormat](videoformat-swift.class.md): A video size and frame rate specification for use with an AR session.
- [videoHDRAllowed](videohdrallowed.md): Enables high dynamic range (HDR) for the session’s camera feed.
- [configurableCaptureDeviceForPrimaryCamera](configurablecapturedeviceforprimarycamera.md): An object that enables you to alter the appearance of a frame’s captured image.
- [recommendedVideoFormatFor4KResolution](recommendedvideoformatfor4kresolution.md): Provides a 4K video format if the device and configuration support it.

# recommendedVideoFormatForHighResolutionFrameCapturing (Objective-C)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Returns a video format that the framework recommends for high-resolution-still-image capture.

## Declaration

```objectivec
@property (class, nonatomic, readonly, nullable) ARVideoFormat * recommendedVideoFormatForHighResolutionFrameCapturing;
```

<a id="Discussion"></a>

## Discussion

The framework determines the resolution of the camera feed and still-image capture for this format. Call this function when your app requires a high-resolution still capture regardless of format specifics. If instead, your app requires a particular resolution, iterate over the [supportedVideoFormats](supportedvideoformats.md) array and choose a format with the desired configuration where [isRecommendedForHighResolutionFrameCapturing](videoformat-swift.class/isrecommendedforhighresolutionframecapturing.md) is `true`.

Other video formats may support still-image capture but at a lower quality or resolution.

## See Also

### Managing video capture options

- [videoFormat](videoformat-swift.property.md): Video format of the session output.
- [supportedVideoFormats](supportedvideoformats.md): The set of video capture formats available on the current device.
- [ARVideoFormat](videoformat-swift.class.md): A video size and frame rate specification for use with an AR session.
- [videoHDRAllowed](videohdrallowed.md): Enables high dynamic range (HDR) for the session’s camera feed.
- [configurableCaptureDeviceForPrimaryCamera](configurablecapturedeviceforprimarycamera.md): An object that enables you to alter the appearance of a frame’s captured image.
- [recommendedVideoFormatFor4KResolution](recommendedvideoformatfor4kresolution.md): Provides a 4K video format if the device and configuration support it.
