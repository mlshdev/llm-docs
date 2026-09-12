> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit](https://developer.apple.com/documentation/realitykit)

# RealityKit

**Framework:** RealityKit  
**Kind:** Framework  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 26.0+ · visionOS 1.0+

Simulate and render 3D content for use in your augmented reality apps.

## Mentioned In

- [Designing scene hierarchies for efficient physics simulation](realitykit/designing-scene-hierarchies-for-efficient-physics-simulation.md)

<a id="Overview"></a>

## Overview

RealityKit provides high-performance 3D simulation and rendering capabilities you can use to create apps with 3D or augmented reality (AR) for iOS, iPadOS, macOS, tvOS, and visionOS. RealityKit is an AR-first 3D framework that leverages [ARKit](arkit.md) to seamlessly integrate virtual objects into the real world.

![A screenshot that shows a virtual warehouse environment set up as a theater. A movie showing on a big floating screen features a wheeled robot rolling through an outdoor environment.](https://developer.apple.com/images/com.apple.RealityKit/realityKit-hero-image.png)

Use RealityKit’s rich functionality to create compelling augmented reality (AR) experiences:

- Create and import full RealityKit scenes with models, animations, and Spatial Audio by using Reality Composer Pro for visionOS.
- Build or modify scenes at runtime by adding 3D models, shape primitives, and sounds from code.
- Have virtual objects interact with objects in the real world.
- Animate objects, both manually and with physics simulations.
- Respond to user input and changes in a person’s surroundings.
- Synchronize across devices and use SharePlay to enable group AR experiences.

## Topics

### Essentials

- [Understanding the modular architecture of RealityKit](visionos/understanding-the-realitykit-modular-architecture.md): Learn how everything fits together in RealityKit.
- [Building an immersive experience with RealityKit](realitykit/building-an-immersive-experience-with-realitykit.md): Use systems and postprocessing effects to create a realistic underwater scene.
- [Entity](realitykit/entity.md): An element of a RealityKit scene to which you attach components that provide appearance and behavior characteristics for the entity.
- [Component](realitykit/component.md): A representation of a geometry or a behavior that you apply to an entity.

### Presentation

- [Views and attachments](realitykit/presentation-views-and-attachments.md): Bring RealityKit content into your app with views and renderers.
- [Presentation UI](realitykit/presentation-user-interface.md): Control your app’s content and how people can interact with it.
- [Postprocessing effects](realitykit/postprocessing-effects.md): Create special rendering effects for your RealityKit scenes.

### Scene management and logic

- [Scenes](realitykit/ecs-scenes.md): The context that holds all RealityKit entities.
- [Systems](realitykit/ecs-systems.md): Apply behaviors and physical effects to the entities in a RealityKit scene.
- [Events](realitykit/ecs-events.md): Respond to things happening in your RealityKit scene by subscribing to specific event types.
- [Entity actions](realitykit/ecs-entity-actions.md): Create simple, reusable actions that can change your app state, RealityKit scene, or animate an entity.

### Asset creation

- [Reality Composer Pro](https://developer.apple.com/documentation/realitycomposerpro): Build, design, and orchestrate 3D content for your RealityKit apps.
- [Swift Splash](visionos/swift-splash.md): Use RealityKit to create an interactive ride in visionOS.
- [Diorama](visionos/diorama.md): Design scenes for your visionOS app using Reality Composer Pro.
- [Presenting an artist’s scene](realitykit/presenting-an-artists-scene.md): Display a scene from Reality Composer Pro in visionOS.
- [Object capture](realitykit/realitykit-object-capture.md): Create 3D objects from a series of photographs using photogrammetry.
- [USD](usd.md): An efficient and scalable way to represent 3D scenes.
- [Composing interactive 3D content with RealityKit and Reality Composer Pro](realitykit/composing-interactive-3d-content-with-realitykit-and-reality-composer-pro.md): Build an interactive scene using an animation timeline.

### Scene content

- [Hello World](visionos/world.md): Use windows, volumes, and immersive spaces to teach people about the Earth.
- [Enabling video reflections in an immersive environment](visionos/enabling-video-reflections-in-an-immersive-environment.md): Create a more immersive experience by adding video reflections in a custom environment.
- [Creating a spatial drawing app with RealityKit](realitykit/creating-a-spatial-drawing-app-with-realitykit.md): Use low-level mesh and texture APIs to achieve fast updates to a person’s brush strokes by integrating RealityKit with ARKit and SwiftUI.
- [Generating interactive geometry with RealityKit](realitykit/generating-interactive-geometry-with-realitykit.md): Create an interactive mesh with low-level mesh and low-level texture.
- [Combining 2D and 3D views in an immersive app](realitykit/combining-2d-and-3d-views-in-an-immersive-app.md): Use attachments to place 2D content relative to 3D content in your visionOS app.
- [Transforming RealityKit entities using gestures](realitykit/transforming-realitykit-entities-with-gestures.md): Build a RealityKit component to support standard visionOS gestures on any entity.
- [Responding to gestures on an entity](realitykit/responding-to-gestures-on-an-entity.md): Respond to gestures performed on RealityKit entities using input target and collision components.
- [Models and meshes](realitykit/scene-content-models-and-meshes.md): Display virtual objects in your scene with mesh-based models.
- [Materials, textures, and shaders](realitykit/scene-content-materials-and-shaders.md): Apply textures to the surface of your scene’s 3D objects to give each object a unique appearance.
- [Anchors](realitykit/scene-content-anchors.md): Lock virtual content to the real world.
- [Lights and cameras](realitykit/scene-content-lights-and-cameras.md): Control the lighting and point of view for a scene.
- [Content synchronization](realitykit/scene-content-content-synchronization.md): Synchronize the contents of entities locally or across the network.
- [Audio](realitykit/scene-content-audio.md): Create personalized and realistic spatial audio experiences.
- [Videos](realitykit/scene-content-videos.md): Present videos in your RealityKit experiences.
- [Images](realitykit/scene-content-images.md): Present images and spatial scenes in your RealityKit experiences.
- [Mesh deformation](realitykit/scene-content-mesh-deformation.md): Reshape and animate the geometry of 3D models at runtime, applying skinning, blend shapes, and subdivision so surfaces bend, flex, and deform as a scene plays.
- [Global illumination and baked lighting](realitykit/scene-content-global-illumination.md): Light scenes realistically by precomputing illumination so surfaces pick up bounced color and ambient detail without recalculating it every frame.

### Game development

- [Gaming sample code projects](realitykit/game-development-sample-code.md): Explore a collection of projects relating to game development.
- [Entity animations](realitykit/game-development-entity-animations.md): Dynamically move, rotate, and scale entities at runtime.
- [Character control, skeletons, and inverse kinematics](realitykit/game-development-character-skeletons.md): Direct the movements and animation of models.
- [NavigationComponent](realitykit/navigationcomponent.md): A component that defines which areas of a navigation mesh an entity can move through.
- [NavigationMeshComponent](realitykit/navigationmeshcomponent.md): A component that provides the navigation meshes an entity uses to find paths through a scene.
- [NavigationController](realitykit/navigationcontroller.md): An interface for finding paths for an entity moving across a scene’s navigation mesh.
- [NavigationMeshResource](realitykit/navigationmeshresource.md): A representation of a scene’s navigable surfaces that the system uses to compute paths.

### Physics simulation

- [Collision detection](realitykit/physics-collision-detection.md): Determine when entities collide with each other or the environment.
- [Simulations and motion](realitykit/physics-simulations-and-motion.md): Simulate physical interactions between entities or systems.
- [Force effects](realitykit/physics-force-effects.md): Control the movement of virtual objects with forces.
- [Physics joints and pins](realitykit/physics-joints-and-pins.md): Simulate joint physics that connect virtual objects.
- [Cloth simulation](realitykit/physics-cloth-simulation.md): Add fabric, soft surfaces, and draping materials that bend, fold, and respond to forces and contact in your 3D scenes.

### Performance improvements

- [Improving the Performance of a RealityKit App](realitykit/improving-the-performance-of-a-realitykit-app.md): Measure CPU and GPU utilization to find ways to improve your app’s performance.
- [Reducing GPU Utilization in Your RealityKit App](realitykit/reducing-gpu-utilization-in-your-realitykit-app.md): Prevent the GPU from limiting your app’s frame rate by reducing the complexity of your render.
- [Reducing CPU Utilization in Your RealityKit App](realitykit/reducing-cpu-utilization-in-your-realitykit-app.md): Target specific CPU metrics with adjustments to your app and its content.
- [Construct an immersive environment for visionOS](realitykit/construct-an-immersive-environment-for-visionos.md): Build efficient custom worlds for your app.
- [Passing Metal command objects around your application](realitykit/passing-metal-command-objects-around-your-application.md): Build a system that creates and passes Metal command objects to entities dispatching Metal compute shaders.
- [Low-level rendering](realitykit/low-level-rendering.md): Drive the renderer directly to build custom drawing pipelines, meshes, buffers, and textures when higher-level rendering does not give you the control you need.

### Classes

- [ComputeGraphResource](realitykit/computegraphresource.md): A loaded compute graph resource containing the graph definition, compiled pipelines, and all associated rendering assets.
- [ComputeGraphSharedUniforms](realitykit/computegraphshareduniforms.md): A transient component that stores typed uniform values shared across all ComputeGraph simulations.
- [GaussianSplatResource](realitykit/gaussiansplatresource.md): A container for the splat data and rendering options that a Gaussian splat component displays.
- [ShaderGraph](realitykit/shadergraph.md)

### Structures

- [BoundingBoxCalculator](realitykit/boundingboxcalculator.md): Calculates a bounding box based on the current state of the deformed positions.
- [ComputeGraphComponent](realitykit/computegraphcomponent.md): A component that drives a compute graph–based particle simulation on an entity.
- [ComputeGraphOutputComponent](realitykit/computegraphoutputcomponent.md): A transient component that identifies the compute graph output associated with an entity.
- [ComputeGraphRuntimeComponent](realitykit/computegraphruntimecomponent.md): Manages the live GPU simulation for an entity’s `ComputeGraphComponent_v1`.
- [ComputeGraphViewpointComponent](realitykit/computegraphviewpointcomponent.md): A transient component that provides camera viewpoint information to the particle simulation.
- [GaussianSplatComponent](realitykit/gaussiansplatcomponent.md): A component that renders 3D Gaussian splat data.
- [RenormalizingDeformer](realitykit/renormalizingdeformer.md): Recalculates tangent frame based on current state of positions
- [SubdivisionSurfaceDeformer](realitykit/subdivisionsurfacedeformer.md): OpenSubdiv surface deformation

### Enumerations

- [GaussianSplatEvents](realitykit/gaussiansplatevents.md): A namespace for events about Gaussian splat rendering.
