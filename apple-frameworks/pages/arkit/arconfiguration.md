> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration](https://developer.apple.com/documentation/arkit/arconfiguration)

# ARConfiguration (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The base object that contains information about how to configure an augmented reality session.

## Declaration

```swift
class ARConfiguration
```

## Mentioned In

- [Verifying Device Support and User Permission](verifying-device-support-and-user-permission.md)

<a id="overview"></a>

## Overview

[ARConfiguration](arconfiguration.md) defines a base class for the different options you can configure in your AR experience.

All AR configurations establish a correspondence between the real world that the device inhabits and the virtual 3D-coordinate space, where you model content. When your app mixes virtual content with a live-camera image, the user experiences the illusion that your virtual content is part of the real world.

To acquire the live-camera imagery, ARKit manages a camera-capture pipeline for you. Depending on the configuration you choose, it determines the cameras that capture imagery, and which camera feed the app displays.

AR apps recognize real-world regions of interest. At runtime, ARKit generates an [ARAnchor](aranchor.md) for a real-world object it recognizes, which allows an app to refer to its details, such as size and physical location. The configuration you choose determines the kinds of real-world objects ARKit recognizes and makes available to your app.

Don’t allocate [ARConfiguration](arconfiguration.md) yourself; instead, instantiate one of its subclasses.

For more information about the camera-capture pipeline, see [Choosing Which Camera Feed to Augment](choosing-which-camera-feed-to-augment.md).

## Topics

### Verifying device support

- [isSupported](arconfiguration/issupported.md): A Boolean value indicating whether the current device supports this session configuration class.

### Enabling frame features

- [frameSemantics](arconfiguration/framesemantics-swift.property.md): The set of active semantics on the frame.
- [ARConfiguration.FrameSemantics](arconfiguration/framesemantics-swift.struct.md): Types of optional frame features you can enable in your app.
- [supportsFrameSemantics(\_:)](arconfiguration/supportsframesemantics%28__%29.md): Checks whether a particular feature is supported.

### Configuring the AR session

- [isLightEstimationEnabled](arconfiguration/islightestimationenabled.md): A Boolean value specifying whether ARKit analyzes scene lighting in captured camera images.
- [worldAlignment](arconfiguration/worldalignment-swift.property.md): A value specifying how the session maps real-world device motion into a 3D scene coordinate system.
- [ARConfiguration.WorldAlignment](arconfiguration/worldalignment-swift.enum.md): Options for how ARKit constructs a scene coordinate system based on real-world device motion.

### Managing video capture options

- [videoFormat](arconfiguration/videoformat-swift.property.md): Video format of the session output.
- [supportedVideoFormats](arconfiguration/supportedvideoformats.md): The set of video capture formats available on the current device.
- [ARConfiguration.VideoFormat](arconfiguration/videoformat-swift.class.md): A video size and frame rate specification for use with an AR session.
- [videoHDRAllowed](arconfiguration/videohdrallowed.md): Enables high dynamic range (HDR) for the session’s camera feed.
- [configurableCaptureDeviceForPrimaryCamera](arconfiguration/configurablecapturedeviceforprimarycamera.md): An object that enables you to alter the appearance of a frame’s captured image.
- [recommendedVideoFormatFor4KResolution](arconfiguration/recommendedvideoformatfor4kresolution.md): Provides a 4K video format if the device and configuration support it.
- [recommendedVideoFormatForHighResolutionFrameCapturing](arconfiguration/recommendedvideoformatforhighresolutionframecapturing.md): Returns a video format that the framework recommends for high-resolution-still-image capture.

### Recording Audio

- [providesAudioData](arconfiguration/providesaudiodata.md): A Boolean value that specifies whether to capture audio during the AR session.

### Reconstructing the Scene

- [ARConfiguration.SceneReconstruction](arconfiguration/scenereconstruction.md): Options that enable ARKit to detect the shape of the physical environment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ARBodyTrackingConfiguration](arbodytrackingconfiguration.md)
- [ARFaceTrackingConfiguration](arfacetrackingconfiguration.md)
- [ARGeoTrackingConfiguration](argeotrackingconfiguration.md)
- [ARImageTrackingConfiguration](arimagetrackingconfiguration.md)
- [ARObjectScanningConfiguration](arobjectscanningconfiguration.md)
- [AROrientationTrackingConfiguration](arorientationtrackingconfiguration.md)
- [ARPositionalTrackingConfiguration](arpositionaltrackingconfiguration.md)
- [ARWorldTrackingConfiguration](arworldtrackingconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# ARConfiguration (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The base object that contains information about how to configure an augmented reality session.

## Declaration

```objectivec
@interface ARConfiguration : NSObject
```

## Mentioned In

- [Verifying Device Support and User Permission](verifying-device-support-and-user-permission.md)

<a id="overview"></a>

## Overview

[ARConfiguration](arconfiguration.md) defines a base class for the different options you can configure in your AR experience.

All AR configurations establish a correspondence between the real world that the device inhabits and the virtual 3D-coordinate space, where you model content. When your app mixes virtual content with a live-camera image, the user experiences the illusion that your virtual content is part of the real world.

To acquire the live-camera imagery, ARKit manages a camera-capture pipeline for you. Depending on the configuration you choose, it determines the cameras that capture imagery, and which camera feed the app displays.

AR apps recognize real-world regions of interest. At runtime, ARKit generates an [ARAnchor](aranchor.md) for a real-world object it recognizes, which allows an app to refer to its details, such as size and physical location. The configuration you choose determines the kinds of real-world objects ARKit recognizes and makes available to your app.

Don’t allocate [ARConfiguration](arconfiguration.md) yourself; instead, instantiate one of its subclasses.

For more information about the camera-capture pipeline, see [Choosing Which Camera Feed to Augment](choosing-which-camera-feed-to-augment.md).

## Topics

### Verifying device support

- [isSupported](arconfiguration/issupported.md): A Boolean value indicating whether the current device supports this session configuration class.

### Enabling frame features

- [frameSemantics](arconfiguration/framesemantics-swift.property.md): The set of active semantics on the frame.
- [ARFrameSemantics](arconfiguration/framesemantics-swift.struct.md): Types of optional frame features you can enable in your app.
- [supportsFrameSemantics:](arconfiguration/supportsframesemantics%28__%29.md): Checks whether a particular feature is supported.

### Configuring the AR session

- [lightEstimationEnabled](arconfiguration/islightestimationenabled.md): A Boolean value specifying whether ARKit analyzes scene lighting in captured camera images.
- [worldAlignment](arconfiguration/worldalignment-swift.property.md): A value specifying how the session maps real-world device motion into a 3D scene coordinate system.
- [ARWorldAlignment](arconfiguration/worldalignment-swift.enum.md): Options for how ARKit constructs a scene coordinate system based on real-world device motion.

### Managing video capture options

- [videoFormat](arconfiguration/videoformat-swift.property.md): Video format of the session output.
- [supportedVideoFormats](arconfiguration/supportedvideoformats.md): The set of video capture formats available on the current device.
- [ARVideoFormat](arconfiguration/videoformat-swift.class.md): A video size and frame rate specification for use with an AR session.
- [videoHDRAllowed](arconfiguration/videohdrallowed.md): Enables high dynamic range (HDR) for the session’s camera feed.
- [configurableCaptureDeviceForPrimaryCamera](arconfiguration/configurablecapturedeviceforprimarycamera.md): An object that enables you to alter the appearance of a frame’s captured image.
- [recommendedVideoFormatFor4KResolution](arconfiguration/recommendedvideoformatfor4kresolution.md): Provides a 4K video format if the device and configuration support it.
- [recommendedVideoFormatForHighResolutionFrameCapturing](arconfiguration/recommendedvideoformatforhighresolutionframecapturing.md): Returns a video format that the framework recommends for high-resolution-still-image capture.

### Recording Audio

- [providesAudioData](arconfiguration/providesaudiodata.md): A Boolean value that specifies whether to capture audio during the AR session.

### Reconstructing the Scene

- [ARSceneReconstruction](arconfiguration/scenereconstruction.md): Options that enable ARKit to detect the shape of the physical environment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ARBodyTrackingConfiguration](arbodytrackingconfiguration.md)
- [ARFaceTrackingConfiguration](arfacetrackingconfiguration.md)
- [ARGeoTrackingConfiguration](argeotrackingconfiguration.md)
- [ARImageTrackingConfiguration](arimagetrackingconfiguration.md)
- [ARObjectScanningConfiguration](arobjectscanningconfiguration.md)
- [AROrientationTrackingConfiguration](arorientationtrackingconfiguration.md)
- [ARPositionalTrackingConfiguration](arpositionaltrackingconfiguration.md)
- [ARWorldTrackingConfiguration](arworldtrackingconfiguration.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
