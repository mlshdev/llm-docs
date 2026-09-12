> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/camerainformation](https://developer.apple.com/documentation/dockkit/dockaccessory/camerainformation)

# DockAccessory.CameraInformation

**Framework:** DockKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

A collection of tracking information about the camera currently in use.

## Declaration

```swift
struct CameraInformation
```

<a id="overview"></a>

## Overview

Use this class in conjuction with [track(\_:cameraInformation:)](track%28__camerainformation_%29-4yl9b.md) and [track(\_:cameraInformation:)](track%28__camerainformation_%29-44mwn.md).

## Topics

### Creating the object

- [init(captureDevice:cameraPosition:orientation:cameraIntrinsics:referenceDimensions:)](camerainformation/init%28capturedevice_cameraposition_orientation_cameraintrinsics_referencedimensions_%29.md): Creates an object that describes the camera in use for tracking.

### Getting camera information

- [cameraPosition](camerainformation/cameraposition.md): The physical position of the capture device.
- [cameraIntrinsics](camerainformation/cameraintrinsics.md): A matrix that represents the characteristics of the lens.
- [captureDevice](camerainformation/capturedevice.md): The capture device generating the video.
- [orientation](camerainformation/orientation.md): The orientation of the capture device.
- [referenceDimensions](camerainformation/referencedimensions.md): The size of the video frame.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selecting and tracking

- [selectSubject(at:)](selectsubject%28at_%29.md): Selects a subject to track at the supplied coordinates.
- [track(\_:cameraInformation:)](track%28__camerainformation_%29-4yl9b.md): Automatically generate and send tracking vectors to the device.
- [track(\_:cameraInformation:)](track%28__camerainformation_%29-44mwn.md): Automatically generate and send tracking vectors to the device.
- [DockAccessory.Observation](observation.md): An observation of the contents of a single video frame.
- [DockAccessory.CameraOrientation](cameraorientation.md): The set of camera orientations used to extract coordinates.
