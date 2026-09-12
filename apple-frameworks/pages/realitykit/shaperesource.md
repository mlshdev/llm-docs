> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shaperesource](https://developer.apple.com/documentation/realitykit/shaperesource)

# ShapeResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A representation of a shape.

## Declaration

```swift
@MainActor @preconcurrency class ShapeResource
```

## Topics

### Transforming a shape

- [offsetBy(rotation:)](shaperesource/offsetby%28rotation_%29.md): Creates a new shape resource by applying a rotation.
- [offsetBy(translation:)](shaperesource/offsetby%28translation_%29.md): Creates a new shape resource by applying a translation.
- [offsetBy(rotation:translation:)](shaperesource/offsetby%28rotation_translation_%29.md): Creates a new shape resource by applying a rotation and a translation.

### Generating boxes

- [generateBox(size:)](shaperesource/generatebox%28size_%29.md): Creates a box shape with the specified extent.
- [generateBox(width:height:depth:)](shaperesource/generatebox%28width_height_depth_%29.md): Creates a box shape with the specified dimensions.

### Generating spheres

- [generateSphere(radius:)](shaperesource/generatesphere%28radius_%29.md): Creates a sphere shape with the specified radius.

### Generating capsules

- [generateCapsule(height:radius:)](shaperesource/generatecapsule%28height_radius_%29.md): Creates a capsule shape with the specified height and radius.

### Generating convex shapes

- [generateConvex(from:)](shaperesource/generateconvex%28from_%29-6q0wj.md): Creates a convex shape from the given points.
- [generateConvex(from:)](shaperesource/generateconvex%28from_%29-53jm9.md): Creates a convex shape from the given mesh.

### Operators

- [==(\_:\_:)](shaperesource/==%28____%29.md): Indicates whether two shapes are equal.

### Instance Properties

- [bounds](shaperesource/bounds.md): Axis aligned bounding box in world space.

### Instance Methods

- [hash(into:)](shaperesource/hash%28into_%29.md): Hashes the essential components of the shape by feeding them into the given hash function.

### Type Methods

- [generateConvex(from:)](shaperesource/generateconvex%28from_%29.md): Creates a convex shape from the given mesh.
- [generateStaticMesh(from:)](shaperesource/generatestaticmesh%28from_%29.md): Creates a static collision mesh from a mesh resource.
- [generateStaticMesh(positions:faceIndices:)](shaperesource/generatestaticmesh%28positions_faceindices_%29.md): Creates a static collision mesh from an array of vertex positions and face indices.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Collision shapes and groups

- [Simulating physics with collisions in your visionOS app](simulating-physics-with-collisions-in-your-visionos-app.md): Create entities that behave and react like physical objects in a RealityKit view.
- [Configuring Collision in RealityKit](configuring-collision-in-realitykit.md): Use collision groups and collision filters to control which objects collide.
- [Creating an interactive 3D model in visionOS](../visionos/creating-an-interactable-3d-model-in-visionos.md): Display an interactive car model using gestures in a reality view.
- [CollisionComponent](collisioncomponent.md): A component that gives an entity the ability to collide with other entities that also have collision components.
- [CollisionComponent.Mode](collisioncomponent/mode-swift.enum.md): A mode that dictates how much collision data is collected for a given entity.
- [ShapeResourceError](shaperesourceerror.md)
- [CollisionGroup](collisiongroup.md): A bitmask used to define the collision group to which an entity belongs.
- [CollisionFilter](collisionfilter.md): A set of masks that determine whether entities can collide during simulations.
- [TriggerVolume](triggervolume.md): An invisible 3D shape that detects when objects enter or exit a given region of space.
