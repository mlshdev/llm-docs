> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/stored-entities](https://developer.apple.com/documentation/realitykit/stored-entities)

# Stored entities

**Framework:** RealityKit  
**Kind:** API Collection

Manage entities that you store as assets on disk.

<a id="Overview"></a>

## Overview

If you bundle 3D assets with your app, or download them from the network into local file storage, you need a way to load them at runtime. RealityKit provides a collection of methods that you use to load USD and Reality files into [Entity](entity.md) instances.

## Topics

### Essentials

- [Loading entities from a file](loading-entities-from-a-file.md): Retrieve an entity from storage on disk using a synchronous or an asynchronous load operation.
- [LoadRequest](loadrequest.md): Deprecated. A resource loader that acts as a publisher.

### Loading an entity hierarchy

- [load(named:in:)](entity/load%28named_in_%29.md): Returns an entity by synchronously loading it from a bundle.
- [load(contentsOf:withName:)](entity/load%28contentsof_withname_%29.md): Returns an entity by synchronously loading it from a file URL.
- [loadAsync(named:in:)](entity/loadasync%28named_in_%29.md): Deprecated. Returns a load request that creates an entity by asynchronously loading it from a bundle.
- [loadAsync(contentsOf:withName:)](entity/loadasync%28contentsof_withname_%29.md): Deprecated. Returns a load request that creates an entity by asynchronously loading it from a file URL and preserving the entity’s hierarchy.

### Loading an anchor entity

- [loadAnchor(named:in:)](entity/loadanchor%28named_in_%29.md): Synchronously loads an anchor entity from a bundle.
- [loadAnchor(contentsOf:withName:)](entity/loadanchor%28contentsof_withname_%29.md): Synchronously loads an anchor entity from a file URL.
- [loadAnchorAsync(named:in:)](entity/loadanchorasync%28named_in_%29.md): Deprecated. Asynchronously loads an anchor entity from a bundle.
- [loadAnchorAsync(contentsOf:withName:)](entity/loadanchorasync%28contentsof_withname_%29.md): Deprecated. Asynchronously loads an anchor entity from a file URL.

### Loading a flattened model entity

- [loadModel(named:in:)](entity/loadmodel%28named_in_%29.md): Synchronously loads a model entity from a bundle.
- [loadModel(contentsOf:withName:)](entity/loadmodel%28contentsof_withname_%29.md): Synchronously loads a model entity from a file URL.
- [loadModelAsync(named:in:)](entity/loadmodelasync%28named_in_%29.md): Deprecated. Asynchronously loads a model entity from a bundle.
- [loadModelAsync(contentsOf:withName:)](entity/loadmodelasync%28contentsof_withname_%29.md): Deprecated. Returns a load request that creates a model entity by asynchronously loading it from a file URL and flattening the model entity’s hierarchy.

### Loading a flattened body-tracked entity

- [loadBodyTracked(named:in:)](entity/loadbodytracked%28named_in_%29.md): Synchronously loads a body-tracked entity from a bundle.
- [loadBodyTracked(contentsOf:withName:)](entity/loadbodytracked%28contentsof_withname_%29.md): Synchronously loads a body-tracked entity from a file URL.
- [loadBodyTrackedAsync(contentsOf:withName:)](entity/loadbodytrackedasync%28contentsof_withname_%29.md): Deprecated. Asynchronously loads a body-tracked entity from a file URL.
- [loadBodyTrackedAsync(named:in:)](entity/loadbodytrackedasync%28named_in_%29.md): Deprecated. Asynchronously loads a body-tracked entity from a bundle.

## See Also

### Loading an entity from a file

- [Generating procedural textures](../visionos/generating-procedural-textures-in-visionos.md): Display a 3D model that generates procedural textures in a reality view.
- [Resource](resource.md): A shared resource you use to configure a component, like a material, mesh, or texture.
- [Loading entities from a file](loading-entities-from-a-file.md): Retrieve an entity from storage on disk using a synchronous or an asynchronous load operation.
- [Creating USD files for Apple devices](../usd/creating-usd-files-for-apple-devices.md): Generate 3D assets that render as expected.
- [init(contentsOf:withName:)](entity/init%28contentsof_withname_%29.md): Creates an entity by asynchronously loading it from a file URL.
- [init(named:in:)](entity/init%28named_in_%29.md): Creates an entity by asynchronously loading it from a bundle.
- [ReferenceComponent](referencecomponent.md): A component that can load another entity from a file.
