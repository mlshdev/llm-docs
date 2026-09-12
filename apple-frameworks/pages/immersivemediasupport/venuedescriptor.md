> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/venuedescriptor](https://developer.apple.com/documentation/immersivemediasupport/venuedescriptor)

# VenueDescriptor

**Framework:** Immersive Media Support  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

The Apple Immersive Media Venue Descriptor is a collection of static metadata necessary for every Apple Immersive Video.

## Declaration

```swift
final actor VenueDescriptor
```

<a id="overview"></a>

## Overview

This type contains information that includes camera definitions such as the lens calibration information, as well as data necessary for the rendering of the video frames.

## Topics

### Creating a venue descriptor

- [init(device:)](venuedescriptor/init%28device_%29.md): Creates an empty venue descriptor instance.
- [init(aimeURL:device:)](venuedescriptor/init%28aimeurl_device_%29.md): Creates a venue descriptor instance from an AIME file.

### Configuring cameras

- [cameras](venuedescriptor/cameras.md): An array of all the immersive cameras contained in the venue descriptor (both original and dynamic).
- [addCamera(\_:)](venuedescriptor/addcamera%28__%29.md): Adds a new immersive camera definition to the venue descriptor.
- [removeCamera(id:)](venuedescriptor/removecamera%28id_%29.md): Removes an immersive camera definition from the venue descriptor.
- [cameraViewModel(for:)](venuedescriptor/cameraviewmodel%28for_%29.md): Returns the camera view model for the given immersive camera identifier.

### Saving a venue descriptor data

- [save(to:)](venuedescriptor/save%28to_%29.md): Generates an AIME file at the specified location.
- [aimeData](venuedescriptor/aimedata.md): Property holding the complete static metadata needed for the immersive media playback.

### Initializers

- [init(aimeData:device:)](venuedescriptor/init%28aimedata_device_%29.md): Creates a venue descriptor instance from memory.

## Relationships

### Conforms To

- [Actor](https://developer.apple.com/documentation/swift/actor)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Camera metadata

- [ImmersiveCamera](immersivecamera.md): A structure that holds the required information for an immersive media camera to process and render video frames.
- [ImmersiveCameraLensDefinition](immersivecameralensdefinition.md): This type holds the ILPD lens configuration parameters to generate a camera calibration type instance.
- [ImmersiveCameraCalibration](immersivecameracalibration.md): A structure that represents immersive media camera calibration data.
- [ImmersiveCameraMask](immersivecameramask.md): A structure that holds the camera mask type information and its relevant mask name.
- [ImmersiveDynamicMask](immersivedynamicmask.md): A type that holds the information required to dynamically generate an immersive media mask at load time.
- [ImmersiveImageMask](immersiveimagemask.md): An object that holds all the information needed to load immersive media masks from image data or from a file.
