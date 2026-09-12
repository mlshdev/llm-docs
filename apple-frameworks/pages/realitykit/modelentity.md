> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/modelentity](https://developer.apple.com/documentation/realitykit/modelentity)

# ModelEntity

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A representation of a physical object that RealityKit renders and optionally simulates.

## Declaration

```swift
@MainActor @preconcurrency class ModelEntity
```

## Mentioned In

- [Reducing CPU Utilization in Your RealityKit App](reducing-cpu-utilization-in-your-realitykit-app.md)
- [Loading entities from a file](loading-entities-from-a-file.md)

<a id="overview"></a>

## Overview

Use one or more model entities to place physical objects in a scene. In addition to the components they inherit from the [Entity](entity.md) class, model entities have geometry, described by their [ModelComponent](modelcomponent.md). Model entities acquire the model component by conforming to the [HasModel](hasmodel.md) protocol. You specify meshes and materials to control how a model entity appears.

![Diagram showing the components present in the model](https://developer.apple.com/images/com.apple.RealityKit/ModelEntity-1@2x.png)

Models respond to physics simulations because they conform to the [HasPhysics](hasphysics.md) protocol. You give them mass and other physical properties with a [PhysicsBodyComponent](physicsbodycomponent.md) instance, and then apply forces or impulses. The simulator uses a [PhysicsMotionComponent](physicsmotioncomponent.md) to manage the linear and angular velocity of the object. Alternatively, you can selectively circumvent the simulation to control position and velocity yourself. Do this for a given model by setting its physics body [mode](physicsbodycomponent/mode.md) to [PhysicsBodyMode.kinematic](physicsbodymode/kinematic.md).

Models can also collide with one another, and with other entities that conform to the [HasCollision](hascollision.md) protocol. The [CollisionComponent](collisioncomponent.md) provides parameters that let you manage which models collide with each other. It also lets you control the collision shape, which for performance reasons, is typically simpler than the visual geometry.

## Topics

### Creating a model

- [init()](modelentity/init%28%29.md): Creates a model entity.
- [init(mesh:materials:)](modelentity/init%28mesh_materials_%29.md): Creates a model entity with a particular mesh and set of materials.
- [init(mesh:materials:collisionShape:mass:)](modelentity/init%28mesh_materials_collisionshape_mass_%29.md): Creates a model entity with a particular mesh, set of materials, collision shape, and mass.
- [init(mesh:materials:collisionShapes:mass:)](modelentity/init%28mesh_materials_collisionshapes_mass_%29.md): Creates a model entity with a particular mesh, set of materials, a composite collision shape, and mass.

## Relationships

### Inherits From

- [Entity](entity.md)

### Conforms To

- [CoordinateSpace3D](../spatial/coordinatespace3d.md)
- [CoordinateSpace3DFloat](../spatial/coordinatespace3dfloat.md)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [EventSource](eventsource.md)
- [HasCollision](hascollision.md)
- [HasHierarchy](hashierarchy.md)
- [HasModel](hasmodel.md)
- [HasPhysics](hasphysics.md)
- [HasPhysicsBody](hasphysicsbody.md)
- [HasPhysicsMotion](hasphysicsmotion.md)
- [HasSynchronization](hassynchronization.md)
- [HasTransform](hastransform.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [RealityCoordinateSpace](realitycoordinatespace.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model display

- [Creating 3D entities with RealityKit](../visionos/creating-3d-entities-with-realitykit.md): Display a horizontal row of three-dimensional shapes in your visionOS app, using predefined mesh and white material.
- [Creating 3D models as movable windows](../visionos/creating-a-volumetric-window-in-visionos.md): Display 3D content with a volumetric window that people can move.
- [Creating a 3D painting space](../visionos/creating-a-painting-space-in-visionos.md): Implement a painting canvas entity, and update its mesh to represent a stroke.
- [Tracking and visualizing hand movement](../visionos/tracking-and-visualizing-hand-movement.md): Use hand-tracking anchors to display a visual representation of hand transforms in visionOS.
- [Applying mesh to real-world surroundings](../visionos/applying-mesh-to-real-world-surroundings.md): Add a layer of mesh to objects in the real world, using scene reconstruction in ARKit.
- [Obscuring virtual items in a scene behind real-world items](../visionos/obscuring-virtual-items-in-a-scene-behind-real-world-items.md): Increase the realism of an immersive experience by adding entities with invisible materials real-world objects.
- [Manipulating models with RealityKit](manipulating-models-with-realitykit.md): Interact with detailed 3D models using manipulation and clipping controls.
- [ModelComponent](modelcomponent.md): A component that contains a mesh and materials for the visual appearance of an entity.
- [MeshResource](meshresource.md): A high-level representation of a collection of vertices and edges that define a shape.
