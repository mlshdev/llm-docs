> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivecameramask](https://developer.apple.com/documentation/immersivemediasupport/immersivecameramask)

# ImmersiveCameraMask

**Framework:** Immersive Media Support  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A structure that holds the camera mask type information and its relevant mask name.

## Declaration

```swift
enum ImmersiveCameraMask
```

## Topics

### Enumeration Cases

- [ImmersiveCameraMask.dynamic(\_:)](immersivecameramask/dynamic%28__%29.md): A value that defines a control points based dynamically generated mask.
- [ImmersiveCameraMask.image(\_:)](immersivecameramask/image%28__%29.md): A value that defines an image based mask.

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
- [ImmersiveCameraCalibration](immersivecameracalibration.md): A structure that represents immersive media camera calibration data.
- [ImmersiveDynamicMask](immersivedynamicmask.md): A type that holds the information required to dynamically generate an immersive media mask at load time.
- [ImmersiveImageMask](immersiveimagemask.md): An object that holds all the information needed to load immersive media masks from image data or from a file.
