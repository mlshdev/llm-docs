> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/configurablecapturedeviceforprimarycamera](https://developer.apple.com/documentation/arkit/arconfiguration/configurablecapturedeviceforprimarycamera)

# configurableCaptureDeviceForPrimaryCamera (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

An object that enables you to alter the appearance of a frame’s captured image.

## Declaration

```swift
class var configurableCaptureDeviceForPrimaryCamera: AVCaptureDevice? { get }
```

<a id="Discussion"></a>

## Discussion

This property provides the underlying capture device for the framework’s camera feed. By altering the device’s configuration, your app indirectly adjusts the visual properties of the each AR frame’s [capturedImage](../arframe/capturedimage.md).

Alter the device’s settings with caution, as extreme changes can affect ARKit’s features that rely on the [capturedImage](../arframe/capturedimage.md) and depend on its integrity, such as people occlusion that uses [personSegmentation](framesemantics-swift.struct/personsegmentation.md).

> **Important**

>  This property is `nil` on devices that aren’t equiped with an ultra-wide camera.

## See Also

### Managing video capture options

- [videoFormat](videoformat-swift.property.md): Video format of the session output.
- [supportedVideoFormats](supportedvideoformats.md): The set of video capture formats available on the current device.
- [ARConfiguration.VideoFormat](videoformat-swift.class.md): A video size and frame rate specification for use with an AR session.
- [videoHDRAllowed](videohdrallowed.md): Enables high dynamic range (HDR) for the session’s camera feed.
- [recommendedVideoFormatFor4KResolution](recommendedvideoformatfor4kresolution.md): Provides a 4K video format if the device and configuration support it.
- [recommendedVideoFormatForHighResolutionFrameCapturing](recommendedvideoformatforhighresolutionframecapturing.md): Returns a video format that the framework recommends for high-resolution-still-image capture.

# configurableCaptureDeviceForPrimaryCamera (Objective-C)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

An object that enables you to alter the appearance of a frame’s captured image.

## Declaration

```objectivec
@property (class, nonatomic, readonly, nullable) AVCaptureDevice * configurableCaptureDeviceForPrimaryCamera;
```

<a id="Discussion"></a>

## Discussion

This property provides the underlying capture device for the framework’s camera feed. By altering the device’s configuration, your app indirectly adjusts the visual properties of the each AR frame’s [capturedImage](../arframe/capturedimage.md).

Alter the device’s settings with caution, as extreme changes can affect ARKit’s features that rely on the [capturedImage](../arframe/capturedimage.md) and depend on its integrity, such as people occlusion that uses [ARFrameSemanticPersonSegmentation](framesemantics-swift.struct/personsegmentation.md).

> **Important**

>  This property is `nil` on devices that aren’t equiped with an ultra-wide camera.

## See Also

### Managing video capture options

- [videoFormat](videoformat-swift.property.md): Video format of the session output.
- [supportedVideoFormats](supportedvideoformats.md): The set of video capture formats available on the current device.
- [ARVideoFormat](videoformat-swift.class.md): A video size and frame rate specification for use with an AR session.
- [videoHDRAllowed](videohdrallowed.md): Enables high dynamic range (HDR) for the session’s camera feed.
- [recommendedVideoFormatFor4KResolution](recommendedvideoformatfor4kresolution.md): Provides a 4K video format if the device and configuration support it.
- [recommendedVideoFormatForHighResolutionFrameCapturing](recommendedvideoformatforhighresolutionframecapturing.md): Returns a video format that the framework recommends for high-resolution-still-image capture.
