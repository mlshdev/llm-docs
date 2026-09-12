> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivecamera](https://developer.apple.com/documentation/immersivemediasupport/immersivecamera)

# ImmersiveCamera

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A structure that holds the required information for an immersive media camera to process and render video frames.

## Declaration

```swift
struct ImmersiveCamera
```

<a id="overview"></a>

## Overview

This type holds information including the camera identifier, type, default presentation rate, pose, and calibration data. Immersive media content can be captured with more than one camera calibrated lens, which means it’s necessary to use different geometry for each to render the corresponding video clips. AIV content creators should be able to add or remove any camera at any point during the creation and iteration process.

## Topics

### Initializers

- [init(id:calibration:type:presentationFrameRate:pose:)](immersivecamera/init%28id_calibration_type_presentationframerate_pose_%29.md)

### Instance Properties

- [calibration](immersivecamera/calibration.md): Calibration details for this camera.
- [id](immersivecamera/id.md): A unique and non empty identifier string for this immersive camera.
- [pose](immersivecamera/pose.md): The pose of this immersive camera.
- [presentationFrameRate](immersivecamera/presentationframerate.md): Presentation frame rate suited for this immersive camera.
- [type](immersivecamera/type.md): Represents the type of the camera.

### Type Properties

- [defaultPresentationFrameRate](immersivecamera/defaultpresentationframerate.md): Default presentation frame rate for any immersive camera.

### Enumerations

- [ImmersiveCamera.CameraType](immersivecamera/cameratype.md): A value that represents the type of immersive camera.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Camera metadata

- [VenueDescriptor](venuedescriptor.md): The Apple Immersive Media Venue Descriptor is a collection of static metadata necessary for every Apple Immersive Video.
- [ImmersiveCameraLensDefinition](immersivecameralensdefinition.md): This type holds the ILPD lens configuration parameters to generate a camera calibration type instance.
- [ImmersiveCameraCalibration](immersivecameracalibration.md): A structure that represents immersive media camera calibration data.
- [ImmersiveCameraMask](immersivecameramask.md): A structure that holds the camera mask type information and its relevant mask name.
- [ImmersiveDynamicMask](immersivedynamicmask.md): A type that holds the information required to dynamically generate an immersive media mask at load time.
- [ImmersiveImageMask](immersiveimagemask.md): An object that holds all the information needed to load immersive media masks from image data or from a file.
