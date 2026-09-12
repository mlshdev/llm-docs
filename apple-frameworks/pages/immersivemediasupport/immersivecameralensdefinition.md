> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivecameralensdefinition](https://developer.apple.com/documentation/immersivemediasupport/immersivecameralensdefinition)

# ImmersiveCameraLensDefinition

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

This type holds the ILPD lens configuration parameters to generate a camera calibration type instance.

## Declaration

```swift
struct ImmersiveCameraLensDefinition
```

<a id="overview"></a>

## Overview

Initializer method creates these types from ILPD data blobs (JSON contents) read from ILPD files. These lens definition metadata types are also used for STMap generation to transform AIV video frames of one lens projection type to another during content previews.

## Topics

### Initializers

- [init(from:)](immersivecameralensdefinition/init%28from_%29.md): Creates an `ImmersiveCameraLensDefinition` object from a ILPD data blob, basically the JSON contents of a ILPD file..

### Instance Properties

- [cameraID](immersivecameralensdefinition/cameraid.md): The unique identifier of the immersive camera associated with this lens definition instance.

### Instance Methods

- [generateSTMap(device:cameraEye:stmapType:into:)](immersivecameralensdefinition/generatestmap%28device_cameraeye_stmaptype_into_%29.md): Generates an STMap for the given projection type and for the given camera eye into the provided texture asynchronously.

### Enumerations

- [ImmersiveCameraLensDefinition.Eye](immersivecameralensdefinition/eye.md): A value that represents a camera lens eye.
- [ImmersiveCameraLensDefinition.STMapType](immersivecameralensdefinition/stmaptype.md): A value that represents a camera lens projection type.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Camera metadata

- [VenueDescriptor](venuedescriptor.md): The Apple Immersive Media Venue Descriptor is a collection of static metadata necessary for every Apple Immersive Video.
- [ImmersiveCamera](immersivecamera.md): A structure that holds the required information for an immersive media camera to process and render video frames.
- [ImmersiveCameraCalibration](immersivecameracalibration.md): A structure that represents immersive media camera calibration data.
- [ImmersiveCameraMask](immersivecameramask.md): A structure that holds the camera mask type information and its relevant mask name.
- [ImmersiveDynamicMask](immersivedynamicmask.md): A type that holds the information required to dynamically generate an immersive media mask at load time.
- [ImmersiveImageMask](immersiveimagemask.md): An object that holds all the information needed to load immersive media masks from image data or from a file.
