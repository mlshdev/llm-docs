> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/supportedvideoformats](https://developer.apple.com/documentation/arkit/arconfiguration/supportedvideoformats)

# supportedVideoFormats (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

The set of video capture formats available on the current device.

## Declaration

```swift
class var supportedVideoFormats: [ARConfiguration.VideoFormat] { get }
```

<a id="Discussion"></a>

## Discussion

By default, the [videoFormat](videoformat-swift.property.md) property for a new session configuration matches the first video capture format in this array. To change the video format for a session, change that property’s value to one of the other [ARConfiguration.VideoFormat](videoformat-swift.class.md) objects in this array.

> **Important**

>  [ARConfiguration](../arconfiguration.md) is an abstract base class, so its implementation of this property always returns an empty array. Read this property from the configuration subclass you plan to use for your AR session, such as [ARWorldTrackingConfiguration](../arworldtrackingconfiguration.md) or [ARFaceTrackingConfiguration](../arfacetrackingconfiguration.md).

Different devices and iOS versions offer different sets of supported video formats, but the order of this array always puts higher-quality formats before lower-quality formats. For best results across all devices and versions, choose formats based on their order in the array rather than on hard-coded minimum resolution or frame rate values.

## See Also

### Managing video capture options

- [videoFormat](videoformat-swift.property.md): Video format of the session output.
- [ARConfiguration.VideoFormat](videoformat-swift.class.md): A video size and frame rate specification for use with an AR session.
- [videoHDRAllowed](videohdrallowed.md): Enables high dynamic range (HDR) for the session’s camera feed.
- [configurableCaptureDeviceForPrimaryCamera](configurablecapturedeviceforprimarycamera.md): An object that enables you to alter the appearance of a frame’s captured image.
- [recommendedVideoFormatFor4KResolution](recommendedvideoformatfor4kresolution.md): Provides a 4K video format if the device and configuration support it.
- [recommendedVideoFormatForHighResolutionFrameCapturing](recommendedvideoformatforhighresolutionframecapturing.md): Returns a video format that the framework recommends for high-resolution-still-image capture.

# supportedVideoFormats (Objective-C)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

The set of video capture formats available on the current device.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSArray<ARVideoFormat *> * supportedVideoFormats;
```

<a id="Discussion"></a>

## Discussion

By default, the [videoFormat](videoformat-swift.property.md) property for a new session configuration matches the first video capture format in this array. To change the video format for a session, change that property’s value to one of the other [ARVideoFormat](videoformat-swift.class.md) objects in this array.

> **Important**

>  [ARConfiguration](../arconfiguration.md) is an abstract base class, so its implementation of this property always returns an empty array. Read this property from the configuration subclass you plan to use for your AR session, such as [ARWorldTrackingConfiguration](../arworldtrackingconfiguration.md) or [ARFaceTrackingConfiguration](../arfacetrackingconfiguration.md).

Different devices and iOS versions offer different sets of supported video formats, but the order of this array always puts higher-quality formats before lower-quality formats. For best results across all devices and versions, choose formats based on their order in the array rather than on hard-coded minimum resolution or frame rate values.

## See Also

### Managing video capture options

- [videoFormat](videoformat-swift.property.md): Video format of the session output.
- [ARVideoFormat](videoformat-swift.class.md): A video size and frame rate specification for use with an AR session.
- [videoHDRAllowed](videohdrallowed.md): Enables high dynamic range (HDR) for the session’s camera feed.
- [configurableCaptureDeviceForPrimaryCamera](configurablecapturedeviceforprimarycamera.md): An object that enables you to alter the appearance of a frame’s captured image.
- [recommendedVideoFormatFor4KResolution](recommendedvideoformatfor4kresolution.md): Provides a 4K video format if the device and configuration support it.
- [recommendedVideoFormatForHighResolutionFrameCapturing](recommendedvideoformatforhighresolutionframecapturing.md): Returns a video format that the framework recommends for high-resolution-still-image capture.
