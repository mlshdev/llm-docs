> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit](https://developer.apple.com/documentation/spritekit)

# SpriteKit (Swift)

**Framework:** SpriteKit  
**Kind:** Framework  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 10.0+

Add high-performance 2D content with smooth animations to your app, or create a game with a high-level set of 2D game-based tools.

<a id="overview"></a>

## Overview

SpriteKit is a general-purpose framework for drawing shapes, particles, text, images, and video in two dimensions. It leverages Metal to achieve high-performance rendering, while offering a simple programming interface to make it easy to create games and other graphics-intensive apps. Using a rich set of animations and physics behaviors, you can quickly add life to your visual elements and gracefully transition between screens.

SpriteKit is supported in iOS, macOS, tvOS, and watchOS, and it integrates well with frameworks such as GameplayKit and SceneKit. You can use SpriteKit in a compatible iPhone or iPad app running in visionOS, but don’t use it in apps you create specifically for visionOS.

## Topics

### Essentials

- [Drawing SpriteKit Content in a View](spritekit/drawing-spritekit-content-in-a-view.md): Display visual content using SpriteKit.
- [SKScene](spritekit/skscene.md): An object that organizes all of the active SpriteKit content.
- [Nodes for Scene Building](spritekit/nodes-for-scene-building.md): Define the appearance or layout of scene content.

### Scene Renderers

Draw a SpriteKit scene using a rendering object.

- [Choosing a SpriteKit Scene Renderer](spritekit/choosing-a-spritekit-scene-renderer.md): Compare the different ways to display a SpriteKit scene.
- [SKView](spritekit/skview.md): A view subclass that renders a SpriteKit scene.
- [SKRenderer](spritekit/skrenderer.md): An object that renders a scene into a custom Metal rendering pipeline and drives the scene update cycle.
- [WKInterfaceSKScene](https://developer.apple.com/documentation/watchkit/wkinterfaceskscene): A visual WatchKit element that displays a SpriteKit scene.

### Textures

Load graphics from various sources, or use an atlas to maximize rendering performance.

- [Maximizing Texture Performance](spritekit/maximizing-texture-performance.md): Speed up image display and enable more images to be displayed at one time.
- [SKTexture](spritekit/sktexture.md): An image, decoded on the GPU, that can be used to render various SpriteKit objects.
- [SKTextureAtlas](spritekit/sktextureatlas.md): A collection of textures optimized for storage and drawing performance.
- [SKMutableTexture](spritekit/skmutabletexture.md): A texture whose contents can be dynamically updated.

### Animation

Animate nodes by using a suite of provided actions, or create custom actions.

- [Getting Started with Actions](spritekit/getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [SKAction](spritekit/skaction.md): An object that is run by a node to change its structure or content.

### Constraints

Constrain the position or orientation of nodes.

- [SKConstraint](spritekit/skconstraint.md): A specification for constraining a node’s position or rotation.
- [SKReachConstraints](spritekit/skreachconstraints.md): A specification of the degree of freedom when solving inverse kinematics.

### Mathematical Tools

Multipurpose mathematical objects you use to facilitate other graphical work.

- [SKKeyframeSequence](spritekit/skkeyframesequence.md): An object that performs interpolation between values specified at different times (keyframes).
- [SKRange](spritekit/skrange.md): A definition of a range of floating-point values.
- [SKRegion](spritekit/skregion.md): The definition of an arbitrary area.

### Physics Simulation

Add physics behaviors to nodes in your scene.

- [Getting Started with Physics](spritekit/getting-started-with-physics.md): Simulate gravity, acceleration, collision detection, or joints.
- [SKPhysicsWorld](spritekit/skphysicsworld.md): The driver of the physics engine in a scene; it exposes the ability for you to configure and query the physics system.
- [SKPhysicsBody](spritekit/skphysicsbody.md): An object that adds physics simulation to a node.
- [SKPhysicsContact](spritekit/skphysicscontact.md): A description of the contact between two physics bodies.
- [SKPhysicsContactDelegate](spritekit/skphysicscontactdelegate.md): Methods your app can implement to respond when physics bodies come into contact.
- [SKFieldNode](spritekit/skfieldnode.md): A node that applies physics effects to nearby nodes.

### Physics Joints

Connect physics bodies by using conceptual tools like pins, sliding joints, and spring joints.

- [Working with Inverse Kinematics](spritekit/working-with-inverse-kinematics.md): Gain fine-tuned control of objects that are connected by joints.
- [SKPhysicsJoint](spritekit/skphysicsjoint.md): The abstract superclass for objects that connect physics bodies.
- [SKPhysicsJointFixed](spritekit/skphysicsjointfixed.md): A joint that fuses two physics bodies together at a reference point.
- [SKPhysicsJointLimit](spritekit/skphysicsjointlimit.md): A joint that imposes a maximum distance between two physics bodies, as if they were connected by a rope.
- [SKPhysicsJointPin](spritekit/skphysicsjointpin.md): A joint that pins together two physics bodies, allowing independent rotation.
- [SKPhysicsJointSliding](spritekit/skphysicsjointsliding.md): A joint that allows two physics bodies to slide along an axis.
- [SKPhysicsJointSpring](spritekit/skphysicsjointspring.md): A joint that simulates a spring connecting two physics bodies.

### Tiling

Configure the images or autotiling behavior of a tile map node.

- [SKTileMapNode](spritekit/sktilemapnode.md): A two-dimensional array of images.
- [SKTileDefinition](spritekit/sktiledefinition.md): A single tile that can be repeated in a tile map.
- [SKTileGroup](spritekit/sktilegroup.md): A set of tiles that collectively define one type of terrain.
- [SKTileGroupRule](spritekit/sktilegrouprule.md): Rules that describe how various tiles should be placed in a map.
- [SKTileSet](spritekit/sktileset.md): A container for related tile groups.

### Shaders

Customize node drawing by augmenting the node’s color or shape.

- [SKShader](spritekit/skshader.md): An object that allows you to apply a custom fragment shader.
- [SKAttribute](spritekit/skattribute.md): A specification for dynamic per-node data used with a custom shader.
- [SKAttributeValue](spritekit/skattributevalue.md): A container for dynamic shader data associated with a node.
- [SKUniform](spritekit/skuniform.md): A container for uniform shader data.

### Warping

Distort a node by supplying vertices and their transformations.

- [SKWarpGeometry](spritekit/skwarpgeometry.md): A definition for a deformation of nodes that conform to [SKWarpable](spritekit/skwarpable.md).
- [SKWarpGeometryGrid](spritekit/skwarpgeometrygrid.md): A definition for a grid-based deformation of nodes that conform to [SKWarpable](spritekit/skwarpable.md).
- [SKWarpable](spritekit/skwarpable.md): A protocol for objects that can be warped and animated by an [SKWarpGeometry](spritekit/skwarpgeometry.md).

### Reference

- [SpriteKit Enumerations](spritekit/spritekit-enumerations.md): Enumerations used across SpriteKit.
- [SpriteKit Data Types](spritekit/spritekit-data-types.md): Data types used across SpriteKit.
- [SpriteKit Constants](spritekit/spritekit-constants.md): Constants used across SpriteKit.
- [SpriteKit Type Aliases](spritekit/spritekit-type-aliases.md): Type aliases used across SpriteKit.
- [SpriteKit Variables](spritekit/spritekit-variables.md): Global variables and macros used across SpriteKit.

### Structures

- [SpriteView](spritekit/spriteview.md): A SwiftUI view that renders a SpriteKit scene.

# SpriteKit (Objective-C)

**Framework:** SpriteKit  
**Kind:** Framework  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 10.0+

Add high-performance 2D content with smooth animations to your app, or create a game with a high-level set of 2D game-based tools.

<a id="overview"></a>

## Overview

SpriteKit is a general-purpose framework for drawing shapes, particles, text, images, and video in two dimensions. It leverages Metal to achieve high-performance rendering, while offering a simple programming interface to make it easy to create games and other graphics-intensive apps. Using a rich set of animations and physics behaviors, you can quickly add life to your visual elements and gracefully transition between screens.

SpriteKit is supported in iOS, macOS, tvOS, and watchOS, and it integrates well with frameworks such as GameplayKit and SceneKit. You can use SpriteKit in a compatible iPhone or iPad app running in visionOS, but don’t use it in apps you create specifically for visionOS.

## Topics

### Essentials

- [Drawing SpriteKit Content in a View](spritekit/drawing-spritekit-content-in-a-view.md): Display visual content using SpriteKit.
- [SKScene](spritekit/skscene.md): An object that organizes all of the active SpriteKit content.
- [Nodes for Scene Building](spritekit/nodes-for-scene-building.md): Define the appearance or layout of scene content.

### Scene Renderers

Draw a SpriteKit scene using a rendering object.

- [Choosing a SpriteKit Scene Renderer](spritekit/choosing-a-spritekit-scene-renderer.md): Compare the different ways to display a SpriteKit scene.
- [SKView](spritekit/skview.md): A view subclass that renders a SpriteKit scene.
- [SKRenderer](spritekit/skrenderer.md): An object that renders a scene into a custom Metal rendering pipeline and drives the scene update cycle.
- [WKInterfaceSKScene](https://developer.apple.com/documentation/watchkit/wkinterfaceskscene): A visual WatchKit element that displays a SpriteKit scene.

### Textures

Load graphics from various sources, or use an atlas to maximize rendering performance.

- [Maximizing Texture Performance](spritekit/maximizing-texture-performance.md): Speed up image display and enable more images to be displayed at one time.
- [SKTexture](spritekit/sktexture.md): An image, decoded on the GPU, that can be used to render various SpriteKit objects.
- [SKTextureAtlas](spritekit/sktextureatlas.md): A collection of textures optimized for storage and drawing performance.
- [SKMutableTexture](spritekit/skmutabletexture.md): A texture whose contents can be dynamically updated.

### Animation

Animate nodes by using a suite of provided actions, or create custom actions.

- [Getting Started with Actions](spritekit/getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [SKAction](spritekit/skaction.md): An object that is run by a node to change its structure or content.

### Constraints

Constrain the position or orientation of nodes.

- [SKConstraint](spritekit/skconstraint.md): A specification for constraining a node’s position or rotation.
- [SKReachConstraints](spritekit/skreachconstraints.md): A specification of the degree of freedom when solving inverse kinematics.

### Mathematical Tools

Multipurpose mathematical objects you use to facilitate other graphical work.

- [SKKeyframeSequence](spritekit/skkeyframesequence.md): An object that performs interpolation between values specified at different times (keyframes).
- [SKRange](spritekit/skrange.md): A definition of a range of floating-point values.
- [SKRegion](spritekit/skregion.md): The definition of an arbitrary area.

### Physics Simulation

Add physics behaviors to nodes in your scene.

- [Getting Started with Physics](spritekit/getting-started-with-physics.md): Simulate gravity, acceleration, collision detection, or joints.
- [SKPhysicsWorld](spritekit/skphysicsworld.md): The driver of the physics engine in a scene; it exposes the ability for you to configure and query the physics system.
- [SKPhysicsBody](spritekit/skphysicsbody.md): An object that adds physics simulation to a node.
- [SKPhysicsContact](spritekit/skphysicscontact.md): A description of the contact between two physics bodies.
- [SKPhysicsContactDelegate](spritekit/skphysicscontactdelegate.md): Methods your app can implement to respond when physics bodies come into contact.
- [SKFieldNode](spritekit/skfieldnode.md): A node that applies physics effects to nearby nodes.

### Physics Joints

Connect physics bodies by using conceptual tools like pins, sliding joints, and spring joints.

- [Working with Inverse Kinematics](spritekit/working-with-inverse-kinematics.md): Gain fine-tuned control of objects that are connected by joints.
- [SKPhysicsJoint](spritekit/skphysicsjoint.md): The abstract superclass for objects that connect physics bodies.
- [SKPhysicsJointFixed](spritekit/skphysicsjointfixed.md): A joint that fuses two physics bodies together at a reference point.
- [SKPhysicsJointLimit](spritekit/skphysicsjointlimit.md): A joint that imposes a maximum distance between two physics bodies, as if they were connected by a rope.
- [SKPhysicsJointPin](spritekit/skphysicsjointpin.md): A joint that pins together two physics bodies, allowing independent rotation.
- [SKPhysicsJointSliding](spritekit/skphysicsjointsliding.md): A joint that allows two physics bodies to slide along an axis.
- [SKPhysicsJointSpring](spritekit/skphysicsjointspring.md): A joint that simulates a spring connecting two physics bodies.

### Tiling

Configure the images or autotiling behavior of a tile map node.

- [SKTileMapNode](spritekit/sktilemapnode.md): A two-dimensional array of images.
- [SKTileDefinition](spritekit/sktiledefinition.md): A single tile that can be repeated in a tile map.
- [SKTileGroup](spritekit/sktilegroup.md): A set of tiles that collectively define one type of terrain.
- [SKTileGroupRule](spritekit/sktilegrouprule.md): Rules that describe how various tiles should be placed in a map.
- [SKTileSet](spritekit/sktileset.md): A container for related tile groups.

### Shaders

Customize node drawing by augmenting the node’s color or shape.

- [SKShader](spritekit/skshader.md): An object that allows you to apply a custom fragment shader.
- [SKAttribute](spritekit/skattribute.md): A specification for dynamic per-node data used with a custom shader.
- [SKAttributeValue](spritekit/skattributevalue.md): A container for dynamic shader data associated with a node.
- [SKUniform](spritekit/skuniform.md): A container for uniform shader data.

### Warping

Distort a node by supplying vertices and their transformations.

- [SKWarpGeometry](spritekit/skwarpgeometry.md): A definition for a deformation of nodes that conform to [SKWarpable](spritekit/skwarpable.md).
- [SKWarpGeometryGrid](spritekit/skwarpgeometrygrid.md): A definition for a grid-based deformation of nodes that conform to [SKWarpable](spritekit/skwarpable.md).
- [SKWarpable](spritekit/skwarpable.md): A protocol for objects that can be warped and animated by an [SKWarpGeometry](spritekit/skwarpgeometry.md).

### Reference

- [SpriteKit Enumerations](spritekit/spritekit-enumerations.md): Enumerations used across SpriteKit.
- [SpriteKit Data Types](spritekit/spritekit-data-types.md): Data types used across SpriteKit.
- [SpriteKit Constants](spritekit/spritekit-constants.md): Constants used across SpriteKit.
- [SpriteKit Type Aliases](spritekit/spritekit-type-aliases.md): Type aliases used across SpriteKit.
- [SpriteKit Variables](spritekit/spritekit-variables.md): Global variables and macros used across SpriteKit.
