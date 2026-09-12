> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physics-cloth-simulation](https://developer.apple.com/documentation/realitykit/physics-cloth-simulation)

# Cloth simulation

**Framework:** RealityKit  
**Kind:** API Collection

Add fabric, soft surfaces, and draping materials that bend, fold, and respond to forces and contact in your 3D scenes.

<a id="Overview"></a>

## Overview

This collection covers the components, shapes, and resources you use to add simulated fabric and other deformable surfaces to a scene. Use it to give an entity cloth-like behavior, define its physical material and shape, and control how it collides with the world around it. You can shape how the simulation responds to forces, grabbing, and query regions, and react to the events it generates as it runs. Reach for these APIs when static or rigid-body geometry can’t capture the flowing, draping motion you want.

## Topics

### Simulation and bodies

- [ClothSimulationComponent](clothsimulationcomponent.md): A component that marks an entity as the simulation root of a localized cloth simulation.
- [ClothBodyComponent](clothbodycomponent.md): A component that simulates an entity as a deformable cloth body, when part of a cloth simulation.
- [ClothBodyMaterial](clothbodymaterial.md): A struct that represents a cloth body’s material.
- [ClothGrabComponent](clothgrabcomponent.md): A component that grabs and drags particles of cloth bodies using either a ray or a volume, as determined by the `mode` property.
- [ClothForceVolumeComponent](clothforcevolumecomponent.md): A component that creates a force volume applying forces to any intersecting cloth body particles.
- [ClothQueryVolumeComponent](clothqueryvolumecomponent.md): A component that defines a volume for querying particles of cloth bodies.
- [ClothCoordinateSpace](clothcoordinatespace.md): Defines a reference frame within a cloth simulation.
- [PerClothVertexData](perclothvertexdata.md): A generic type that stores per-vertex data in a buffer.

### Cloth shapes

- [ClothMeshShape](clothmeshshape.md): Shape representing a mesh with a configurable inflation bias.
- [ClothPlaneShape](clothplaneshape.md): Shape representing an infinite plane that encloses one half of the world.
- [ClothBoxShape](clothboxshape.md): Shape representing a box.
- [ClothRoundedBoxShape](clothroundedboxshape.md): Shape representing a box with rounded edges.
- [ClothSphereShape](clothsphereshape.md): Shape representing a sphere.
- [ClothCapsuleShape](clothcapsuleshape.md): Shape representing a capsule (full height is `height + 2 * radius`).
- [ClothVolumeShape](clothvolumeshape.md): Shape suitable for use as a volume.

### Collision

- [ClothColliderComponent](clothcollidercomponent.md): A component that adds a cloth-compatible collider to an entity.
- [ClothColliderShape](clothcollidershape.md): Shape suitable for use as a collider.
- [ClothColliderMaterial](clothcollidermaterial.md): A struct that represents a collider’s material.
- [ClothCollisionFilter](clothcollisionfilter.md): Defines the collision groups for a body or collider and the mask for one-way collisions.
- [ClothCollisionGroupSet](clothcollisiongroupset.md): `ClothCollisionGroupSet` is the basis for the `ClothCollisionFilter` and should not be used separately.

### Cloth events

- [ClothSimulationEvents](clothsimulationevents.md): Types of events that a cloth simulation publishes during its lifetime.
- [ClothBodyEvents](clothbodyevents.md): Types of events that a cloth body publishes during its lifetime.
- [ClothColliderEvents](clothcolliderevents.md): Types of events that a cloth collider publishes during its lifetime.
- [ClothQueryVolumeEvents](clothqueryvolumeevents.md): Types of events that a cloth query volume publishes during its lifetime.

### Cloth resources

- [ClothMeshResource](clothmeshresource.md): A mesh resource that defines the topology and shape of a cloth body or a mesh-shaped cloth collider.
- [ClothPoseResource](clothposeresource.md): A resource that defines a set of vertex positions for a cloth body.

## See Also

### Physics simulation

- [Collision detection](physics-collision-detection.md): Determine when entities collide with each other or the environment.
- [Simulations and motion](physics-simulations-and-motion.md): Simulate physical interactions between entities or systems.
- [Force effects](physics-force-effects.md): Control the movement of virtual objects with forces.
- [Physics joints and pins](physics-joints-and-pins.md): Simulate joint physics that connect virtual objects.
