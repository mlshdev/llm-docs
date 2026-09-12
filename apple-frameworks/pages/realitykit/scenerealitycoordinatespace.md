> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scenerealitycoordinatespace](https://developer.apple.com/documentation/realitykit/scenerealitycoordinatespace)

# SceneRealityCoordinateSpace

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The coordinate space that represents the center of a RealityKit scene.

## Declaration

```swift
struct SceneRealityCoordinateSpace
```

<a id="overview"></a>

## Overview

The center, or origin, of a RealityKit scene varies depending on the platform and context:

- **visionOS (Window or Volume)**: The origin is a point that extends outward from the window, or upward from the volume.
- **visionOS (Immersive Space)**: The origin is the [ARKit](../arkit.md) world origin, which does not directly relate to any specific [RealityView](realityview.md), but rather to the broader immersive environment.
- **macOS and iOS (Non-AR)**: The origin is a point behind the RealityView. Here, the [RealityView](realityview.md) acts as a window through which you can view the scene, and the scene’s origin is placed behind this by default, giving depth to the scene.
- **iOS (AR Mode)**: Similar to the Immersive Space in visionOS, ARKit determines the world origin, and does not directly relate to the [RealityView](realityview.md) position.

> **Note**

> This object is equivalent to [scene](realitycoordinatespace/scene.md).

## Topics

### Initializers

- [init()](scenerealitycoordinatespace/init%28%29.md): Creates a scene coordinate space.

## Relationships

### Conforms To

- [RealityCoordinateSpace](realitycoordinatespace.md)

## See Also

### Coordinate space conversions

- [RealityCoordinateSpaceConverting](realitycoordinatespaceconverting.md): A value that can be converted between SwiftUI `CoordinateSpace` and RealityKit `Entity`.
- [CameraRealityCoordinateSpace](camerarealitycoordinatespace.md): The coordinate space that represents the scene’s active camera.
- [RealityCoordinateSpace](realitycoordinatespace.md): A 3D coordinate space that exists within a RealityKit hierarchy.
- [RealityCoordinateSpaceProjecting](realitycoordinatespaceprojecting.md): A protocol for coordinate spaces that can project 2D points to and from 3D.
