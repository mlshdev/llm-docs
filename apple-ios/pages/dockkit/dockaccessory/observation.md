> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/observation](https://developer.apple.com/documentation/dockkit/dockaccessory/observation)

# DockAccessory.Observation

**Framework:** DockKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

An observation of the contents of a single video frame.

## Declaration

```swift
struct Observation
```

## Mentioned In

- [Track custom objects in a frame](../track-custom-objects-in-a-frame.md)

<a id="overview"></a>

## Overview

This object represents an observation about a single video frame, including information about the type of subject, the coordinates of the subject, and the angle of the subject’s face. DockKit generates tracking vectors from this frame information. When performing your own tracking, you provide one or more [DockAccessory.Observation](observation.md) objects to [track(\_:cameraInformation:)](track%28__camerainformation_%29-44mwn.md).

## Topics

### Creating an observation

- [init(identifier:type:rect:faceYawAngle:)](observation/init%28identifier_type_rect_faceyawangle_%29.md): Creates a new observation.

### Getting properties

- [faceYawAngle](observation/faceyawangle.md): The angle of the face in radians.
- [rect](observation/rect.md): The coordinates of the subject in the frame.
- [type](observation/type.md): The type of subject in the frame.
- [identifier](observation/identifier.md): A unique identifier representing the subject in the frame.

### Defining types

- [DockAccessory.Observation.ObservationType](observation/observationtype.md): The available observation types.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selecting and tracking

- [selectSubject(at:)](selectsubject%28at_%29.md): Selects a subject to track at the supplied coordinates.
- [track(\_:cameraInformation:)](track%28__camerainformation_%29-4yl9b.md): Automatically generate and send tracking vectors to the device.
- [track(\_:cameraInformation:)](track%28__camerainformation_%29-44mwn.md): Automatically generate and send tracking vectors to the device.
- [DockAccessory.CameraInformation](camerainformation.md): A collection of tracking information about the camera currently in use.
- [DockAccessory.CameraOrientation](cameraorientation.md): The set of camera orientations used to extract coordinates.
