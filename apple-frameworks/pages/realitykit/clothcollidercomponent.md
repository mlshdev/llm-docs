> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcollidercomponent](https://developer.apple.com/documentation/realitykit/clothcollidercomponent)

# ClothColliderComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

A component that adds a cloth-compatible collider to an entity.

## Declaration

```swift
struct ClothColliderComponent
```

<a id="overview"></a>

## Overview

A cloth collider belongs to the simulation root defined by its closest ancestor entity with a [ClothSimulationComponent](clothsimulationcomponent.md), if any.

By default, a collider ensures that cloth bodies ([ClothBodyComponent](clothbodycomponent.md)) stay outside of its shape. Colliders can also report when such collisions occur. Colliders themselves are not simulated and are (unlike bodies) not affected by bodies or by other colliders.

As an example, you can simulate and render a cloth body together with a collider by setting up your entity hierarchy as follows.

```
- scene
  - rootEntity (ClothSimulationComponent)
    - dressEntity (ClothBodyComponent + ModelComponent)
    - characterEntity (ClothColliderComponent + ModelComponent)
```

The shape of a collider can either be a mesh or an implicit shape. All implicit shapes are mutable at runtime. The mesh shape is directly mutable at runtime only if it is a [LowLevelMesh](lowlevelmesh.md). When suitable, it is recommended to use colliders with implicit shapes for improved performance.

If the shape of a collider is a mesh and the same entity has a [ModelComponent](modelcomponent.md), then the two meshes will attempt to stay in sync. In this context, the mesh of the collider and the [ModelComponent](modelcomponent.md) would be known as the simulation mesh and visual mesh, respectively. In particular:

- if both meshes are [LowLevelMesh](lowlevelmesh.md), then they will not stay in sync at all.
- if only the simulation mesh is a [LowLevelMesh](lowlevelmesh.md), then the visual mesh will follow the simulation mesh.
- otherwise, the simulation mesh will follow the visual mesh (regardless if it is a [LowLevelMesh](lowlevelmesh.md)).

## Topics

### Creating a cloth collider

- [init(shape:)](clothcollidercomponent/init%28shape_%29.md): Creates a cloth collider component with the given shape.
- [init(mesh:bias:)](clothcollidercomponent/init%28mesh_bias_%29.md): Creates a cloth collider component with a mesh shape built from the given mesh resource.
- [init(meshShape:)](clothcollidercomponent/init%28meshshape_%29.md): Creates a cloth collider component with the given mesh shape.

### Configuring the collider shape

- [shape](clothcollidercomponent/shape.md): The (simulation) shape of the collider.
- [materialNames](clothcollidercomponent/materialnames.md): The names of the collider materials used by this collider.

### Managing collision response

- [isCollisionResponseEnabled](clothcollidercomponent/iscollisionresponseenabled.md): Indicates whether this collider pushes away intersecting cloth body particles.
- [enableCollisions(towards:)](clothcollidercomponent/enablecollisions%28towards_%29.md): Enables one-way collisions towards the selected groups.
- [disableCollisions(towards:)](clothcollidercomponent/disablecollisions%28towards_%29.md): Disables one-way collisions towards the selected groups.

### Instance Properties

- [collisionFilter](clothcollidercomponent/collisionfilter.md): Defines the collision groups that the collider belongs to, and the mask used to determine which groups this collider affects.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Collision

- [ClothColliderShape](clothcollidershape.md): Shape suitable for use as a collider.
- [ClothColliderMaterial](clothcollidermaterial.md): A struct that represents a collider’s material.
- [ClothCollisionFilter](clothcollisionfilter.md): Defines the collision groups for a body or collider and the mask for one-way collisions.
- [ClothCollisionGroupSet](clothcollisiongroupset.md): `ClothCollisionGroupSet` is the basis for the `ClothCollisionFilter` and should not be used separately.
