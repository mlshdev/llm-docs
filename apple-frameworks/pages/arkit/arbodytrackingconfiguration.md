> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arbodytrackingconfiguration](https://developer.apple.com/documentation/arkit/arbodytrackingconfiguration)

# ARBodyTrackingConfiguration (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A configuration that tracks human body poses, planar surfaces, and images using the rear-facing camera.

## Declaration

```swift
class ARBodyTrackingConfiguration
```

<a id="overview"></a>

## Overview

When ARKit identifies a person in the rear camera’s feed, it calls [session(\_:didAdd:)](arsessiondelegate/session%28__didadd_%29.md), passing an [ARBodyAnchor](arbodyanchor.md) you can use to track the body’s movement.

When you enable plane detection and image detection, you can use a body anchor to display a virtual character and set the character on a surface or image that you choose.

By default, [frameSemantics](arconfiguration/framesemantics-swift.property.md) includes [bodyDetection](arconfiguration/framesemantics-swift.struct/bodydetection.md), which gives you access to the joint positions of a person that ARKit detects in the camera feed via the frame’s [detectedBody](arframe/detectedbody.md).

## Topics

### Creating a Configuration

- [init()](arbodytrackingconfiguration/init%28%29.md): Creates a new body tracking configuration.
- [initialWorldMap](arbodytrackingconfiguration/initialworldmap.md): The state from a previous AR session to attempt to resume with this session configuration.

### Estimating Body Scale

- [automaticSkeletonScaleEstimationEnabled](arbodytrackingconfiguration/automaticskeletonscaleestimationenabled.md): A flag that determines whether ARKit estimates the height of a body that it’s tracking.

### Enabling Auto Focus

- [isAutoFocusEnabled](arbodytrackingconfiguration/isautofocusenabled.md): A Boolean value that determines whether the device camera uses fixed focus or autofocus behavior.

### Enabling Plane Detection

- [planeDetection](arbodytrackingconfiguration/planedetection.md): A value specifying whether and how the session attempts to automatically detect flat surfaces in the camera-captured image.
- [ARWorldTrackingConfiguration.PlaneDetection](arworldtrackingconfiguration/planedetection-swift.struct.md): Options for whether and how the framework detects flat surfaces in captured images.

### Enabling Image Tracking

- [automaticImageScaleEstimationEnabled](arbodytrackingconfiguration/automaticimagescaleestimationenabled.md): A flag that instructs ARKit to estimate and set the scale of a tracked image on your behalf.
- [detectionImages](arbodytrackingconfiguration/detectionimages.md): A set of images that ARKit searches for in the user’s environment.
- [maximumNumberOfTrackedImages](arbodytrackingconfiguration/maximumnumberoftrackedimages.md): The number of image anchors to monitor closely for position and orientation updates.

### Adding Realistic Reflections

- [wantsHDREnvironmentTextures](arbodytrackingconfiguration/wantshdrenvironmenttextures.md): A flag that instructs ARKit to create environment textures in HDR format.
- [environmentTexturing](arbodytrackingconfiguration/environmenttexturing.md): The behavior ARKit uses for generating environment textures.

### Accessing App Clip Codes

- [Interacting with App Clip Codes in AR](https://developer.apple.com/documentation/appclip/interacting-with-app-clip-codes-in-ar): Display content and provide services in an AR experience with App Clip Codes.
- [supportsAppClipCodeTracking](arbodytrackingconfiguration/supportsappclipcodetracking.md): A flag that indicates if the device tracks App Clip Codes.
- [appClipCodeTrackingEnabled](arbodytrackingconfiguration/appclipcodetrackingenabled.md): A Boolean value that indicates if the framework searches the physical environment for App Clip Codes.
- [ARAppClipCodeAnchor](arappclipcodeanchor.md): An anchor that tracks the position and orientation of an App Clip Code in the physical environment.

## Relationships

### Inherits From

- [ARConfiguration](arconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Body and Face Tracking

- [ARFaceTrackingConfiguration](arfacetrackingconfiguration.md): A configuration that tracks facial movement and expressions using the front camera.

# ARBodyTrackingConfiguration (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A configuration that tracks human body poses, planar surfaces, and images using the rear-facing camera.

## Declaration

```objectivec
@interface ARBodyTrackingConfiguration : ARConfiguration
```

<a id="overview"></a>

## Overview

When ARKit identifies a person in the rear camera’s feed, it calls [session:didAddAnchors:](arsessiondelegate/session%28__didadd_%29.md), passing an [ARBodyAnchor](arbodyanchor.md) you can use to track the body’s movement.

When you enable plane detection and image detection, you can use a body anchor to display a virtual character and set the character on a surface or image that you choose.

By default, [frameSemantics](arconfiguration/framesemantics-swift.property.md) includes [ARFrameSemanticBodyDetection](arconfiguration/framesemantics-swift.struct/bodydetection.md), which gives you access to the joint positions of a person that ARKit detects in the camera feed via the frame’s [detectedBody](arframe/detectedbody.md).

## Topics

### Creating a Configuration

- [new](arbodytrackingconfiguration/new.md): Creates a new body tracking configuration.
- [init](arbodytrackingconfiguration/init%28%29.md): Creates a new body tracking configuration.
- [initialWorldMap](arbodytrackingconfiguration/initialworldmap.md): The state from a previous AR session to attempt to resume with this session configuration.

### Estimating Body Scale

- [automaticSkeletonScaleEstimationEnabled](arbodytrackingconfiguration/automaticskeletonscaleestimationenabled.md): A flag that determines whether ARKit estimates the height of a body that it’s tracking.

### Enabling Auto Focus

- [autoFocusEnabled](arbodytrackingconfiguration/isautofocusenabled.md): A Boolean value that determines whether the device camera uses fixed focus or autofocus behavior.

### Enabling Plane Detection

- [planeDetection](arbodytrackingconfiguration/planedetection.md): A value specifying whether and how the session attempts to automatically detect flat surfaces in the camera-captured image.
- [ARPlaneDetection](arworldtrackingconfiguration/planedetection-swift.struct.md): Options for whether and how the framework detects flat surfaces in captured images.

### Enabling Image Tracking

- [automaticImageScaleEstimationEnabled](arbodytrackingconfiguration/automaticimagescaleestimationenabled.md): A flag that instructs ARKit to estimate and set the scale of a tracked image on your behalf.
- [detectionImages](arbodytrackingconfiguration/detectionimages.md): A set of images that ARKit searches for in the user’s environment.
- [maximumNumberOfTrackedImages](arbodytrackingconfiguration/maximumnumberoftrackedimages.md): The number of image anchors to monitor closely for position and orientation updates.

### Adding Realistic Reflections

- [wantsHDREnvironmentTextures](arbodytrackingconfiguration/wantshdrenvironmenttextures.md): A flag that instructs ARKit to create environment textures in HDR format.
- [environmentTexturing](arbodytrackingconfiguration/environmenttexturing.md): The behavior ARKit uses for generating environment textures.

### Accessing App Clip Codes

- [Interacting with App Clip Codes in AR](https://developer.apple.com/documentation/appclip/interacting-with-app-clip-codes-in-ar): Display content and provide services in an AR experience with App Clip Codes.
- [supportsAppClipCodeTracking](arbodytrackingconfiguration/supportsappclipcodetracking.md): A flag that indicates if the device tracks App Clip Codes.
- [appClipCodeTrackingEnabled](arbodytrackingconfiguration/appclipcodetrackingenabled.md): A Boolean value that indicates if the framework searches the physical environment for App Clip Codes.
- [ARAppClipCodeAnchor](arappclipcodeanchor.md): An anchor that tracks the position and orientation of an App Clip Code in the physical environment.

## Relationships

### Inherits From

- [ARConfiguration](arconfiguration.md)

## See Also

### Body and Face Tracking

- [ARFaceTrackingConfiguration](arfacetrackingconfiguration.md): A configuration that tracks facial movement and expressions using the front camera.
