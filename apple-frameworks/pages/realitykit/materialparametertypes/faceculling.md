> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/materialparametertypes/faceculling](https://developer.apple.com/documentation/realitykit/materialparametertypes/faceculling)

# MaterialParameterTypes.FaceCulling

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that defines how the system removes polygons before rendering a scene.

## Declaration

```swift
enum FaceCulling
```

<a id="overview"></a>

## Overview

To improve performance, RealityKit culls polygons, or faces, that it determines won’t be visible. Discarding faces that aren’t part of the final render eliminates the need to do any calculations for those faces. Use this object to specify what kind of polygons RealityKit culls.

## Topics

### Face culling

- [MaterialParameterTypes.FaceCulling.front](faceculling/front.md): The system culls front-facing polygons.
- [MaterialParameterTypes.FaceCulling.back](faceculling/back.md): The system culls back-facing polygons.
- [MaterialParameterTypes.FaceCulling.none](faceculling/none.md): The system doesn’t cull polygons.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
