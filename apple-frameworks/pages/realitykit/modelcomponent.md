> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/modelcomponent](https://developer.apple.com/documentation/realitykit/modelcomponent)

# ModelComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A component that contains a mesh and materials for the visual appearance of an entity.

## Declaration

```swift
struct ModelComponent
```

## Mentioned In

- [Automatically animating RealityKit entities](automatically-animating-realitykit-entities.md)
- [Creating a plane with low-level mesh](creating-a-plane-with-low-level-mesh.md)

<a id="overview"></a>

## Overview

This component is a foundational component for all visual content in RealityKit. Use `ModelComponent` to render 3D models by attaching it to any [Entity](entity.md) in your RealityKit scene.

To create a `ModelComponent`, you need a mesh and the number of materials that mesh expects, which is typically one.

For example, here’s how to create a simple blue, metallic box using [generateBox(size:cornerRadius:)](meshresource/generatebox%28size_cornerradius_%29-8em0v.md), and [SimpleMaterial](simplematerial.md):

```swift
let mesh = MeshResource.generateBox(size: 1, cornerRadius: 0.05)
let material = SimpleMaterial(color: .blue, isMetallic: true)

let modelComponent = ModelComponent(mesh: mesh, materials: [material])

let entity = Entity()
entity.components.set(modelComponent)
```

![A screenshot of a reflective, metallic blue cube centered on the screen with a plain background.](https://developer.apple.com/images/com.apple.RealityKit/modelcomponent-cube-simple.jpg)

Make different primitive shapes, like spheres with [generateSphere(radius:)](meshresource/generatesphere%28radius_%29.md), or cylinders with [generateCylinder(height:radius:)](meshresource/generatecylinder%28height_radius_%29.md), or create custom shapes with [MeshDescriptor](meshdescriptor.md). For more information about materials, see [Applying realistic material and lighting effects to entities](applying-realistic-material-and-lighting-effects-to-entities.md)

> **Tip**

> To load a USDZ or reality file to your app, use an entity initializer such as [init(named:in:)](entity/init%28named_in_%29.md) or [init(contentsOf:withName:)](entity/init%28contentsof_withname_%29.md).

Use other components like [CollisionComponent](collisioncomponent.md), [PhysicsBodyComponent](physicsbodycomponent.md), [PhysicsMotionComponent](physicsmotioncomponent.md), and [InputTargetComponent](inputtargetcomponent.md) to make entities interactive and dynamic.

## Topics

### Creating a model component

- [init(mesh:materials:)](modelcomponent/init%28mesh_materials_%29.md): Creates a model component from a mesh and a collection of materials.

### Configuring a mesh

- [mesh](modelcomponent/mesh.md): The mesh that defines the model’s shape.

### Configuring the materials

- [materials](modelcomponent/materials.md): The materials that define the model’s visual appearance.

### Modifying the bounding box for rendering

- [boundsMargin](modelcomponent/boundsmargin.md): A margin applied to an entity’s bounding box that determines object visibility.

## Relationships

### Conforms To

- [Component](component.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Model display

- [Creating 3D entities with RealityKit](../visionos/creating-3d-entities-with-realitykit.md): Display a horizontal row of three-dimensional shapes in your visionOS app, using predefined mesh and white material.
- [Creating 3D models as movable windows](../visionos/creating-a-volumetric-window-in-visionos.md): Display 3D content with a volumetric window that people can move.
- [Creating a 3D painting space](../visionos/creating-a-painting-space-in-visionos.md): Implement a painting canvas entity, and update its mesh to represent a stroke.
- [Tracking and visualizing hand movement](../visionos/tracking-and-visualizing-hand-movement.md): Use hand-tracking anchors to display a visual representation of hand transforms in visionOS.
- [Applying mesh to real-world surroundings](../visionos/applying-mesh-to-real-world-surroundings.md): Add a layer of mesh to objects in the real world, using scene reconstruction in ARKit.
- [Obscuring virtual items in a scene behind real-world items](../visionos/obscuring-virtual-items-in-a-scene-behind-real-world-items.md): Increase the realism of an immersive experience by adding entities with invisible materials real-world objects.
- [Manipulating models with RealityKit](manipulating-models-with-realitykit.md): Interact with detailed 3D models using manipulation and clipping controls.
- [MeshResource](meshresource.md): A high-level representation of a collection of vertices and edges that define a shape.
- [ModelEntity](modelentity.md): A representation of a physical object that RealityKit renders and optionally simulates.
