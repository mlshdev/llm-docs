> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realitycoordinatespace](https://developer.apple.com/documentation/realitykit/realitycoordinatespace)

# RealityCoordinateSpace

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A 3D coordinate space that exists within a RealityKit hierarchy.

## Declaration

```swift
protocol RealityCoordinateSpace
```

<a id="overview"></a>

## Overview

Any `RealityCoordinateSpaceConverting` can convert spatial data between a [SwiftUI](https://developer.apple.com/documentation/swiftui) `CoordinateSpace` and a `RealityCoordinateSpace`.

## Topics

### Type Properties

- [camera](realitycoordinatespace/camera.md): Conforms when `Self` is `CameraRealityCoordinateSpace`. The coordinate space that represents the scene’s active camera.
- [scene](realitycoordinatespace/scene.md): Conforms when `Self` is `SceneRealityCoordinateSpace`. The coordinate space that represents ARKit world space.

## Relationships

### Conforming Types

- [AnchorEntity](anchorentity.md)
- [BodyTrackedEntity](bodytrackedentity.md)
- [CameraRealityCoordinateSpace](camerarealitycoordinatespace.md)
- [DirectionalLight](directionallight.md)
- [Entity](entity.md)
- [ModelEntity](modelentity.md)
- [PerspectiveCamera](perspectivecamera.md)
- [PointLight](pointlight.md)
- [RealityViewContent](realityviewcontent.md)
- [SceneRealityCoordinateSpace](scenerealitycoordinatespace.md)
- [SpotLight](spotlight.md)
- [TriggerVolume](triggervolume.md)
- [ViewAttachmentEntity](viewattachmententity.md)

## See Also

### Coordinate space conversions

- [RealityCoordinateSpaceConverting](realitycoordinatespaceconverting.md): A value that can be converted between SwiftUI `CoordinateSpace` and RealityKit `Entity`.
- [SceneRealityCoordinateSpace](scenerealitycoordinatespace.md): The coordinate space that represents the center of a RealityKit scene.
- [CameraRealityCoordinateSpace](camerarealitycoordinatespace.md): The coordinate space that represents the scene’s active camera.
- [RealityCoordinateSpaceProjecting](realitycoordinatespaceprojecting.md): A protocol for coordinate spaces that can project 2D points to and from 3D.
