> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/resource](https://developer.apple.com/documentation/realitykit/resource)

# Resource

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A shared resource you use to configure a component, like a material, mesh, or texture.

## Declaration

```swift
@preconcurrency protocol Resource : Sendable
```

<a id="overview"></a>

## Overview

Resources can be costly to load or create. Share and reuse resources as much as possible.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AnimationGraphResource](animationgraphresource.md)
- [AnimationResource](animationresource.md)
- [AudioBufferResource](audiobufferresource.md)
- [AudioFileGroupResource](audiofilegroupresource.md)
- [AudioFileResource](audiofileresource.md)
- [AudioResource](audioresource.md)
- [BehaviorTreeResource](behaviortreeresource.md)
- [BlendShapeWeightsMapping](blendshapeweightsmapping.md)
- [ClothMeshResource](clothmeshresource.md)
- [ClothPoseResource](clothposeresource.md)
- [DiffuseProbeResource](diffuseproberesource.md)
- [EnvironmentResource](environmentresource.md)
- [IKResource](ikresource.md)
- [LightmapResource](lightmapresource.md)
- [MeshResource](meshresource.md)
- [NavigationMeshResource](navigationmeshresource.md)
- [PhysicsMaterialResource](physicsmaterialresource.md)
- [ReverbMeshResource](reverbmeshresource.md)
- [ShapeResource](shaperesource.md)
- [SkeletonResource](skeletonresource.md)
- [TextureResource](textureresource.md)

## See Also

### Loading an entity from a file

- [Generating procedural textures](../visionos/generating-procedural-textures-in-visionos.md): Display a 3D model that generates procedural textures in a reality view.
- [Loading entities from a file](loading-entities-from-a-file.md): Retrieve an entity from storage on disk using a synchronous or an asynchronous load operation.
- [Stored entities](stored-entities.md): Manage entities that you store as assets on disk.
- [Creating USD files for Apple devices](../usd/creating-usd-files-for-apple-devices.md): Generate 3D assets that render as expected.
- [init(contentsOf:withName:)](entity/init%28contentsof_withname_%29.md): Creates an entity by asynchronously loading it from a file URL.
- [init(named:in:)](entity/init%28named_in_%29.md): Creates an entity by asynchronously loading it from a bundle.
- [ReferenceComponent](referencecomponent.md): A component that can load another entity from a file.
