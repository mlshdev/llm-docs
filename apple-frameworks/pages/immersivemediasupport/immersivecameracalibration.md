> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivecameracalibration](https://developer.apple.com/documentation/immersivemediasupport/immersivecameracalibration)

# ImmersiveCameraCalibration

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A structure that represents immersive media camera calibration data.

## Declaration

```swift
struct ImmersiveCameraCalibration
```

<a id="overview"></a>

## Overview

This data includes calibration type, calibration name, calibration file name, lens definition, mask data, camera origin, and other relevant data.

## Topics

### Calibration geometry

- [ImmersiveCameraCalibration.CameraOrigin](immersivecameracalibration/cameraorigin.md): A type that holds the position information representing the origin from which to render the calibration in 3D space relative to the person’s eye.
- [ImmersiveCameraCalibration.CameraTextureMapping](immersivecameracalibration/cameratexturemapping.md): A type that holds the matrices used for video frame texture mapping on the camera lens geometry.
- [ImmersiveCameraMeshCalibration](immersivecamerameshcalibration.md): Calibration mesh geometry based on USDZ data.

### Calibration configuration

- [ImmersiveCameraCalibration.CalibrationType](immersivecameracalibration/calibrationtype.md): A value that represents the calibration type used to generate camera calibration geometry.
- [ImmersiveCameraLensDefinition](immersivecameralensdefinition.md): This type holds the ILPD lens configuration parameters to generate a camera calibration type instance.

### Initializers

- [init(name:type:mask:positionable:origin:textureMapping:environmentFilename:)](immersivecameracalibration/init%28name_type_mask_positionable_origin_texturemapping_environmentfilename_%29.md): Creates a mesh based calibration from USDZ data and a image-based mask.

### Instance Properties

- [environmentFilename](immersivecameracalibration/environmentfilename.md): The USDZ filename of a backdrop to use for this calibration.
- [mask](immersivecameracalibration/mask.md): Immersive camera mask that needs to be used for this calibration.
- [name](immersivecameracalibration/name.md): A string identifying this calibration.
- [origin](immersivecameracalibration/origin.md): Position information, in meters, that represents the origin from which to render the calibration in 3D space relative to the person’s eye.
- [positionable](immersivecameracalibration/positionable.md): A Boolean value that indicates whether to anchor this calibration in mixed reality 3D space rather than centering it on the person’s eye position.
- [textureMapping](immersivecameracalibration/texturemapping.md): Texture mapping that describes how each section of the video frame maps into the calibration.
- [type](immersivecameracalibration/type.md): The type of this calibration.

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
- [ImmersiveCameraLensDefinition](immersivecameralensdefinition.md): This type holds the ILPD lens configuration parameters to generate a camera calibration type instance.
- [ImmersiveCameraMask](immersivecameramask.md): A structure that holds the camera mask type information and its relevant mask name.
- [ImmersiveDynamicMask](immersivedynamicmask.md): A type that holds the information required to dynamically generate an immersive media mask at load time.
- [ImmersiveImageMask](immersiveimagemask.md): An object that holds all the information needed to load immersive media masks from image data or from a file.
