> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode](https://developer.apple.com/documentation/scenekit/scnnode)

# SCNNode (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A structural element of a scene graph, representing a position and transform in a 3D coordinate space, to which you can attach geometry, lights, cameras, or other displayable content.

## Declaration

```swift
class SCNNode
```

## Mentioned In

- [Animating SceneKit Content](animating-scenekit-content.md)

<a id="overview"></a>

## Overview

An [SCNNode](scnnode.md) object by itself has no visible content when the scene containing it is rendered—it represents only a coordinate space transform (position, orientation, and scale) relative to its parent node. To construct a scene, you use a hierarchy of nodes to create its structure, then add lights, cameras, and geometry to nodes to create visible content.

<a id="Nodes-Determine-the-Structure-of-a-Scene"></a>

### Nodes Determine the Structure of a Scene

The hierarchy of nodes, or **scene graph**, in a scene defines both the organization of its contents and your ability to present and manipulate those contents using SceneKit. You may create a node hierarchy programmatically using SceneKit, load one from a file created using 3D authoring tools, or combine the two approaches. SceneKit provides many utilities for organizing and searching the scene graph—for details, see the methods in Managing the Node Hierarchy and Searching the Node Hierarchy.

The [rootNode](scnscene/rootnode.md) object in a scene defines the coordinate system of the world rendered by SceneKit. Each child node you add to this root node creates its own coordinate system, which is in turn inherited by its own children. You determine the transformation between coordinate systems using the node’s [position](scnnode/position.md), [rotation](scnnode/rotation.md), and [scale](scnnode/scale.md) properties properties (or directly using its [transform](scnnode/transform.md) property).

You use a hierarchy of nodes and transformations to model the contents of your scene in a way that suits the needs of your app. For example, if your app presents an animated view of a solar system, you can construct a node hierarchy that models celestial bodies relative to one another: Each planet can be a node, with its orbit and its current position in that orbit defined in the coordinate system of the sun. A planet node defines its own coordinate space, useful both for specifying the planet’s rotation and the orbits of its moons (each of which is a child node of its planet). With this scene hierarchy, you can easily add realistic animation to the scene—animating both the revolution of a moon around its planet and the planet around the sun will combine the animations so that the moon follows the planet.

<a id="A-Nodes-Attachments-Define-Visual-Content-and-Behavior"></a>

### A Node’s Attachments Define Visual Content and Behavior

The node hierarchy determines the spatial and logical structure of a scene, but not its visible contents. You add 2D and 3D objects to a scene by attaching [SCNGeometry](scngeometry.md) objects to nodes. (Geometries, in turn, have attached [SCNMaterial](scnmaterial.md) objects that determine their appearance.) To shade the geometries in a scene with light and shadow effects, add nodes with attached [SCNLight](scnlight.md) objects. To control the viewpoint from which the scene appears when rendered, add nodes with attached [SCNCamera](scncamera.md) objects.

To add physics-based behaviors and special effects to SceneKit content, use other types of node attachments. For example, an [SCNPhysicsBody](scnphysicsbody.md) object defines a node’s characteristics for physics simulation, and an [SCNPhysicsField](scnphysicsfield.md) object applies forces to physics bodies in an area around the node. An [SCNParticleSystem](scnparticlesystem.md) object attached to a node renders particle effects such as fire, rain, or falling leaves in the space defined by a node.

To improve performance, SceneKit can share attachments between multiple nodes. For example, in a racing game that includes many identical cars, the scene graph would contain many nodes—one to position and animate each car—but all car nodes would reference the same geometry object.

## Topics

### Creating a Node

- [init(geometry:)](scnnode/init%28geometry_%29.md): Creates and returns a node object with the specified geometry attached.

### Managing the Node’s Transform

- [simdTransform](scnnode/simdtransform.md): The transform applied to the node relative to its parent. Animatable.
- [simdPosition](scnnode/simdposition.md): The translation applied to the node. Animatable.
- [simdRotation](scnnode/simdrotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [simdEulerAngles](scnnode/simdeulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [simdOrientation](scnnode/simdorientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [simdScale](scnnode/simdscale.md): The scale factor applied to the node. Animatable.
- [simdPivot](scnnode/simdpivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.

### Managing Node Content

- [name](scnnode/name.md): A name associated with the node.
- [light](scnnode/light.md): The light attached to the node.
- [camera](scnnode/camera.md): The camera attached to the node.
- [geometry](scnnode/geometry.md): The geometry attached to the node.
- [morpher](scnnode/morpher.md): The morpher object responsible for blending the node’s geometry.
- [skinner](scnnode/skinner.md): The skinner object responsible for skeletal animations of node’s contents.
- [categoryBitMask](scnnode/categorybitmask.md): A mask that defines which categories the node belongs to.
- [SCNBoundingVolume](scnboundingvolume.md): Methods common to the [SCNNode](scnnode.md) and [SCNGeometry](scngeometry.md) classes for measuring location and size.

### Constraining Node Behavior

- [constraints](scnnode/constraints.md): A list of constraints affecting the node’s transformation.

### Working with Node Animation

- [presentation](scnnode/presentation.md): A node object representing the state of the node as it currently appears onscreen.
- [isPaused](scnnode/ispaused.md): A Boolean value that determines whether to run actions and animations attached to the node and its child nodes.

### Modifying the Node Visibility

- [isHidden](scnnode/ishidden.md): A Boolean value that determines the visibility of the node’s contents. Animatable.
- [opacity](scnnode/opacity.md): The opacity value of the node. Animatable.
- [renderingOrder](scnnode/renderingorder.md): The order the node’s content is drawn in relative to that of other nodes.
- [castsShadow](scnnode/castsshadow.md): A Boolean value that determines whether SceneKit renders the node’s contents into shadow maps.
- [movabilityHint](scnnode/movabilityhint.md): A value that indicates how SceneKit should handle the node when rendering movement-related effects.
- [SCNMovabilityHint](scnmovabilityhint.md): Values that inform SceneKit’s rendering for movement-related effects, used by the [movabilityHint](scnnode/movabilityhint.md) property.

### Managing the Node Hierarchy

- [parent](scnnode/parent.md): The node’s parent in the scene graph hierarchy.
- [childNodes](scnnode/childnodes.md): An array of the node’s children in the scene graph hierarchy.
- [addChildNode(\_:)](scnnode/addchildnode%28__%29.md): Adds a node to the node’s array of children.
- [insertChildNode(\_:at:)](scnnode/insertchildnode%28__at_%29.md): Adds a node to the node’s array of children at a specified index.
- [removeFromParentNode()](scnnode/removefromparentnode%28%29.md): Removes the node from its parent’s array of child nodes.
- [replaceChildNode(\_:with:)](scnnode/replacechildnode%28__with_%29.md): Removes a child from the node’s array of children and inserts another node in its place.

### Searching the Node Hierarchy

- [childNodes(passingTest:)](scnnode/childnodes%28passingtest_%29.md): Returns all nodes in the node’s child node subtree that satisfy the test applied by a block.
- [childNode(withName:recursively:)](scnnode/childnode%28withname_recursively_%29.md): Returns the first node in the node’s child node subtree with the specified name.
- [enumerateChildNodes(\_:)](scnnode/enumeratechildnodes%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes.
- [enumerateHierarchy(\_:)](scnnode/enumeratehierarchy%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes, as well as for the node itself.

### Customizing Node Rendering

- [filters](scnnode/filters.md): An array of Core Image filters to be applied to the rendered contents of the node.
- [rendererDelegate](scnnode/rendererdelegate.md): An object responsible for rendering custom contents for the node using Metal or OpenGL.

### Adding Physics to a Node

- [physicsBody](scnnode/physicsbody.md): The physics body associated with the node.
- [physicsField](scnnode/physicsfield.md): The physics field associated with the node.

### Working with Particle Systems

- [addParticleSystem(\_:)](scnnode/addparticlesystem%28__%29.md): Attaches a particle system to the node.
- [particleSystems](scnnode/particlesystems.md): The particle systems attached to the node.
- [removeParticleSystem(\_:)](scnnode/removeparticlesystem%28__%29.md): Removes a particle system attached to the node.
- [removeAllParticleSystems()](scnnode/removeallparticlesystems%28%29.md): Removes any particle systems directly attached to the node.

### Working with Positional Audio

- [addAudioPlayer(\_:)](scnnode/addaudioplayer%28__%29.md): Adds the specified auto player to the node and begins playback.
- [audioPlayers](scnnode/audioplayers.md): The audio players currently attached to the node.
- [removeAudioPlayer(\_:)](scnnode/removeaudioplayer%28__%29.md): Removes the specified audio player from the node, stopping playback.
- [removeAllAudioPlayers()](scnnode/removeallaudioplayers%28%29.md): Removes all audio players attached to the node, stopping playback.

### Copying a Node

- [clone()](scnnode/clone%28%29.md): Creates a copy of the node and its children.
- [flattenedClone()](scnnode/flattenedclone%28%29.md): Creates an optimized copy of the node and its children.

### Hit-Testing

- [hitTestWithSegment(from:to:options:)](scnnode/hittestwithsegment%28from_to_options_%29.md): Searches the node’s child node subtree for objects intersecting a line segment between two specified points.
- [SCNHitTestOption](scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.

### Performing Node-Relative Operations

- [simdRotate(by:aroundTarget:)](scnnode/simdrotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.
- [simdLocalTranslate(by:)](scnnode/simdlocaltranslate%28by_%29.md): Changes the node’s position relative to its current position.
- [simdLocalRotate(by:)](scnnode/simdlocalrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.
- [simdLook(at:)](scnnode/simdlook%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.
- [simdLook(at:up:localFront:)](scnnode/simdlook%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.

### Calculating Node-Relative Transforms

- [simdLocalRight](scnnode/simdlocalright.md): The direction SceneKit treats as “right” in local space for all nodes.
- [simdLocalUp](scnnode/simdlocalup.md): The direction SceneKit treats as “up” in local space for all nodes.
- [simdLocalFront](scnnode/simdlocalfront.md): The unit vector SceneKit treats as “forward” in local space for all nodes.
- [simdWorldRight](scnnode/simdworldright.md): The “right” (+X) direction vector relative to the node, expressed in world space.
- [simdWorldUp](scnnode/simdworldup.md): The “up” (+Y) direction vector relative to the node, expressed in world space.
- [simdWorldFront](scnnode/simdworldfront.md): The “forward” (-Z) direction vector relative to the node, expressed in world space.

### Managing Transforms in World Space

- [simdWorldTransform](scnnode/simdworldtransform.md): The world transform applied to the node.
- [simdWorldOrientation](scnnode/simdworldorientation.md): The node’s orientation relative to the scene’s world coordinate space.
- [simdWorldPosition](scnnode/simdworldposition.md): The node’s position relative to the scene’s world coordinate space.

### Converting Between Coordinate Spaces

- [simdConvertPosition(\_:from:)](scnnode/simdconvertposition%28__from_%29.md): Converts a position to the node’s local coordinate space from that of another node.
- [simdConvertPosition(\_:to:)](scnnode/simdconvertposition%28__to_%29.md): Converts a position from the node’s local coordinate space to that of another node.
- [simdConvertTransform(\_:from:)](scnnode/simdconverttransform%28__from_%29.md): Converts a transform to the node’s local coordinate space from that of another node.
- [simdConvertTransform(\_:to:)](scnnode/simdconverttransform%28__to_%29.md): Converts a transform from the node’s local coordinate space to that of another node.
- [simdConvertVector(\_:from:)](scnnode/simdconvertvector%28__from_%29.md): Converts a direction vector to the node’s local coordinate space from that of another node.
- [simdConvertVector(\_:to:)](scnnode/simdconvertvector%28__to_%29.md): Converts a direction vector from the node’s local coordinate space to that of another node.

### Handling UI Focus

- [focusBehavior](scnnode/focusbehavior.md): The focus behavior for a node.
- [SCNNodeFocusBehavior](scnnodefocusbehavior.md): Options for the focusable states of a SceneKit node.

### Working with GameplayKit

- [entity](scnnode/entity.md): The GameplayKit entity this node represents.

### Managing the Node’s Transform (SceneKit Types)

- [transform](scnnode/transform.md): The transform applied to the node relative to its parent. Animatable.
- [position](scnnode/position.md): The translation applied to the node. Animatable.
- [rotation](scnnode/rotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [eulerAngles](scnnode/eulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [orientation](scnnode/orientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [scale](scnnode/scale.md): The scale factor applied to the node. Animatable.
- [pivot](scnnode/pivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.

### Performing Node-Relative Operations (SceneKit Types)

- [rotate(by:aroundTarget:)](scnnode/rotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.
- [localTranslate(by:)](scnnode/localtranslate%28by_%29.md): Changes the node’s position relative to its current position.
- [localRotate(by:)](scnnode/localrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.
- [look(at:)](scnnode/look%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.
- [look(at:up:localFront:)](scnnode/look%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.

### Calculating Node-Relative Transforms (SceneKit Types)

- [localRight](scnnode/localright.md): The direction SceneKit treats as “right” in local space for all nodes.
- [localUp](scnnode/localup.md): The direction SceneKit treats as “up” in local space for all nodes.
- [localFront](scnnode/localfront.md): The unit vector SceneKit treats as “forward” in local space for all nodes.
- [worldRight](scnnode/worldright.md): The “right” (+X) direction vector relative to the node, expressed in world space.
- [worldUp](scnnode/worldup.md): The “up” (+Y) direction vector relative to the node, expressed in world space.
- [worldFront](scnnode/worldfront.md): The “forward” (-Z) direction vector relative to the node, expressed in world space.

### Managing Transforms in World Space (SceneKit Types)

- [worldTransform](scnnode/worldtransform.md): The world transform applied to the node.
- [setWorldTransform(\_:)](scnnode/setworldtransform%28__%29.md): Sets the world transform applied to the node.
- [worldOrientation](scnnode/worldorientation.md): The node’s orientation relative to the scene’s world coordinate space.
- [worldPosition](scnnode/worldposition.md): The node’s position relative to the scene’s world coordinate space.

### Converting Between Coordinate Spaces (SceneKit Types)

- [convertPosition(\_:from:)](scnnode/convertposition%28__from_%29.md): Converts a position to the node’s local coordinate space from that of another node.
- [convertPosition(\_:to:)](scnnode/convertposition%28__to_%29.md): Converts a position from the node’s local coordinate space to that of another node.
- [convertTransform(\_:from:)](scnnode/converttransform%28__from_%29.md): Converts a transform to the node’s local coordinate space from that of another node.
- [convertTransform(\_:to:)](scnnode/converttransform%28__to_%29.md): Converts a transform from the node’s local coordinate space to that of another node.
- [convertVector(\_:from:)](scnnode/convertvector%28__from_%29.md): Converts a direction vector to the node’s local coordinate space from that of another node.
- [convertVector(\_:to:)](scnnode/convertvector%28__to_%29.md): Converts a direction vector from the node’s local coordinate space to that of another node.

### Initializers

- [init(coder:)](scnnode/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SCNReferenceNode](scnreferencenode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNActionable](scnactionable.md)
- [SCNAnimatable](scnanimatable.md)
- [SCNBoundingVolume](scnboundingvolume.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)

## See Also

### Scene Structure

- [Organizing a Scene with Nodes](organizing-a-scene-with-nodes.md): Use nodes to define the structure of a scene.
- [SCNReferenceNode](scnreferencenode.md): A scene graph node that serves as a placeholder for content to be loaded from a separate scene file.

# SCNNode (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structural element of a scene graph, representing a position and transform in a 3D coordinate space, to which you can attach geometry, lights, cameras, or other displayable content.

## Declaration

```objectivec
@interface SCNNode : NSObject
```

## Mentioned In

- [Animating SceneKit Content](animating-scenekit-content.md)

<a id="overview"></a>

## Overview

An [SCNNode](scnnode.md) object by itself has no visible content when the scene containing it is rendered—it represents only a coordinate space transform (position, orientation, and scale) relative to its parent node. To construct a scene, you use a hierarchy of nodes to create its structure, then add lights, cameras, and geometry to nodes to create visible content.

<a id="Nodes-Determine-the-Structure-of-a-Scene"></a>

### Nodes Determine the Structure of a Scene

The hierarchy of nodes, or **scene graph**, in a scene defines both the organization of its contents and your ability to present and manipulate those contents using SceneKit. You may create a node hierarchy programmatically using SceneKit, load one from a file created using 3D authoring tools, or combine the two approaches. SceneKit provides many utilities for organizing and searching the scene graph—for details, see the methods in Managing the Node Hierarchy and Searching the Node Hierarchy.

The [rootNode](scnscene/rootnode.md) object in a scene defines the coordinate system of the world rendered by SceneKit. Each child node you add to this root node creates its own coordinate system, which is in turn inherited by its own children. You determine the transformation between coordinate systems using the node’s [position](scnnode/position.md), [rotation](scnnode/rotation.md), and [scale](scnnode/scale.md) properties properties (or directly using its [transform](scnnode/transform.md) property).

You use a hierarchy of nodes and transformations to model the contents of your scene in a way that suits the needs of your app. For example, if your app presents an animated view of a solar system, you can construct a node hierarchy that models celestial bodies relative to one another: Each planet can be a node, with its orbit and its current position in that orbit defined in the coordinate system of the sun. A planet node defines its own coordinate space, useful both for specifying the planet’s rotation and the orbits of its moons (each of which is a child node of its planet). With this scene hierarchy, you can easily add realistic animation to the scene—animating both the revolution of a moon around its planet and the planet around the sun will combine the animations so that the moon follows the planet.

<a id="A-Nodes-Attachments-Define-Visual-Content-and-Behavior"></a>

### A Node’s Attachments Define Visual Content and Behavior

The node hierarchy determines the spatial and logical structure of a scene, but not its visible contents. You add 2D and 3D objects to a scene by attaching [SCNGeometry](scngeometry.md) objects to nodes. (Geometries, in turn, have attached [SCNMaterial](scnmaterial.md) objects that determine their appearance.) To shade the geometries in a scene with light and shadow effects, add nodes with attached [SCNLight](scnlight.md) objects. To control the viewpoint from which the scene appears when rendered, add nodes with attached [SCNCamera](scncamera.md) objects.

To add physics-based behaviors and special effects to SceneKit content, use other types of node attachments. For example, an [SCNPhysicsBody](scnphysicsbody.md) object defines a node’s characteristics for physics simulation, and an [SCNPhysicsField](scnphysicsfield.md) object applies forces to physics bodies in an area around the node. An [SCNParticleSystem](scnparticlesystem.md) object attached to a node renders particle effects such as fire, rain, or falling leaves in the space defined by a node.

To improve performance, SceneKit can share attachments between multiple nodes. For example, in a racing game that includes many identical cars, the scene graph would contain many nodes—one to position and animate each car—but all car nodes would reference the same geometry object.

## Topics

### Creating a Node

- [node](scnnode/node.md): Deprecated. Creates and returns a node object.
- [nodeWithGeometry:](scnnode/init%28geometry_%29.md): Creates and returns a node object with the specified geometry attached.
- [nodeWithMDLObject:](scnnode/nodewithmdlobject_.md): Deprecated. Creates a node from the specified Model I/O object.

### Managing the Node’s Transform

- [simdTransform](scnnode/simdtransform.md): The transform applied to the node relative to its parent. Animatable.
- [simdPosition](scnnode/simdposition.md): The translation applied to the node. Animatable.
- [simdRotation](scnnode/simdrotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [simdEulerAngles](scnnode/simdeulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [simdOrientation](scnnode/simdorientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [simdScale](scnnode/simdscale.md): The scale factor applied to the node. Animatable.
- [simdPivot](scnnode/simdpivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.

### Managing Node Content

- [name](scnnode/name.md): A name associated with the node.
- [light](scnnode/light.md): The light attached to the node.
- [camera](scnnode/camera.md): The camera attached to the node.
- [geometry](scnnode/geometry.md): The geometry attached to the node.
- [morpher](scnnode/morpher.md): The morpher object responsible for blending the node’s geometry.
- [skinner](scnnode/skinner.md): The skinner object responsible for skeletal animations of node’s contents.
- [categoryBitMask](scnnode/categorybitmask.md): A mask that defines which categories the node belongs to.
- [SCNBoundingVolume](scnboundingvolume.md): Methods common to the [SCNNode](scnnode.md) and [SCNGeometry](scngeometry.md) classes for measuring location and size.

### Constraining Node Behavior

- [constraints](scnnode/constraints.md): A list of constraints affecting the node’s transformation.

### Working with Node Animation

- [presentationNode](scnnode/presentation.md): A node object representing the state of the node as it currently appears onscreen.
- [paused](scnnode/ispaused.md): A Boolean value that determines whether to run actions and animations attached to the node and its child nodes.

### Modifying the Node Visibility

- [hidden](scnnode/ishidden.md): A Boolean value that determines the visibility of the node’s contents. Animatable.
- [opacity](scnnode/opacity.md): The opacity value of the node. Animatable.
- [renderingOrder](scnnode/renderingorder.md): The order the node’s content is drawn in relative to that of other nodes.
- [castsShadow](scnnode/castsshadow.md): A Boolean value that determines whether SceneKit renders the node’s contents into shadow maps.
- [movabilityHint](scnnode/movabilityhint.md): A value that indicates how SceneKit should handle the node when rendering movement-related effects.
- [SCNMovabilityHint](scnmovabilityhint.md): Values that inform SceneKit’s rendering for movement-related effects, used by the [movabilityHint](scnnode/movabilityhint.md) property.

### Managing the Node Hierarchy

- [parentNode](scnnode/parent.md): The node’s parent in the scene graph hierarchy.
- [childNodes](scnnode/childnodes.md): An array of the node’s children in the scene graph hierarchy.
- [addChildNode:](scnnode/addchildnode%28__%29.md): Adds a node to the node’s array of children.
- [insertChildNode:atIndex:](scnnode/insertchildnode%28__at_%29.md): Adds a node to the node’s array of children at a specified index.
- [removeFromParentNode](scnnode/removefromparentnode%28%29.md): Removes the node from its parent’s array of child nodes.
- [replaceChildNode:with:](scnnode/replacechildnode%28__with_%29.md): Removes a child from the node’s array of children and inserts another node in its place.

### Searching the Node Hierarchy

- [childNodesPassingTest:](scnnode/childnodes%28passingtest_%29.md): Returns all nodes in the node’s child node subtree that satisfy the test applied by a block.
- [childNodeWithName:recursively:](scnnode/childnode%28withname_recursively_%29.md): Returns the first node in the node’s child node subtree with the specified name.
- [enumerateChildNodesUsingBlock:](scnnode/enumeratechildnodes%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes.
- [enumerateHierarchyUsingBlock:](scnnode/enumeratehierarchy%28__%29.md): Executes the specified block for each of the node’s child and descendant nodes, as well as for the node itself.

### Customizing Node Rendering

- [filters](scnnode/filters.md): An array of Core Image filters to be applied to the rendered contents of the node.
- [rendererDelegate](scnnode/rendererdelegate.md): An object responsible for rendering custom contents for the node using Metal or OpenGL.

### Adding Physics to a Node

- [physicsBody](scnnode/physicsbody.md): The physics body associated with the node.
- [physicsField](scnnode/physicsfield.md): The physics field associated with the node.

### Working with Particle Systems

- [addParticleSystem:](scnnode/addparticlesystem%28__%29.md): Attaches a particle system to the node.
- [particleSystems](scnnode/particlesystems.md): The particle systems attached to the node.
- [removeParticleSystem:](scnnode/removeparticlesystem%28__%29.md): Removes a particle system attached to the node.
- [removeAllParticleSystems](scnnode/removeallparticlesystems%28%29.md): Removes any particle systems directly attached to the node.

### Working with Positional Audio

- [addAudioPlayer:](scnnode/addaudioplayer%28__%29.md): Adds the specified auto player to the node and begins playback.
- [audioPlayers](scnnode/audioplayers.md): The audio players currently attached to the node.
- [removeAudioPlayer:](scnnode/removeaudioplayer%28__%29.md): Removes the specified audio player from the node, stopping playback.
- [removeAllAudioPlayers](scnnode/removeallaudioplayers%28%29.md): Removes all audio players attached to the node, stopping playback.

### Copying a Node

- [clone](scnnode/clone%28%29.md): Creates a copy of the node and its children.
- [flattenedClone](scnnode/flattenedclone%28%29.md): Creates an optimized copy of the node and its children.

### Hit-Testing

- [hitTestWithSegmentFromPoint:toPoint:options:](scnnode/hittestwithsegment%28from_to_options_%29.md): Searches the node’s child node subtree for objects intersecting a line segment between two specified points.
- [SCNHitTestOption](scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.

### Performing Node-Relative Operations

- [simdRotateBy:aroundTarget:](scnnode/simdrotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.
- [simdLocalTranslateBy:](scnnode/simdlocaltranslate%28by_%29.md): Changes the node’s position relative to its current position.
- [simdLocalRotateBy:](scnnode/simdlocalrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.
- [simdLookAt:](scnnode/simdlook%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.
- [simdLookAt:up:localFront:](scnnode/simdlook%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.

### Calculating Node-Relative Transforms

- [simdLocalRight](scnnode/simdlocalright.md): The direction SceneKit treats as “right” in local space for all nodes.
- [simdLocalUp](scnnode/simdlocalup.md): The direction SceneKit treats as “up” in local space for all nodes.
- [simdLocalFront](scnnode/simdlocalfront.md): The unit vector SceneKit treats as “forward” in local space for all nodes.
- [simdWorldRight](scnnode/simdworldright.md): The “right” (+X) direction vector relative to the node, expressed in world space.
- [simdWorldUp](scnnode/simdworldup.md): The “up” (+Y) direction vector relative to the node, expressed in world space.
- [simdWorldFront](scnnode/simdworldfront.md): The “forward” (-Z) direction vector relative to the node, expressed in world space.

### Managing Transforms in World Space

- [simdWorldTransform](scnnode/simdworldtransform.md): The world transform applied to the node.
- [simdWorldOrientation](scnnode/simdworldorientation.md): The node’s orientation relative to the scene’s world coordinate space.
- [simdWorldPosition](scnnode/simdworldposition.md): The node’s position relative to the scene’s world coordinate space.

### Converting Between Coordinate Spaces

- [simdConvertPosition:fromNode:](scnnode/simdconvertposition%28__from_%29.md): Converts a position to the node’s local coordinate space from that of another node.
- [simdConvertPosition:toNode:](scnnode/simdconvertposition%28__to_%29.md): Converts a position from the node’s local coordinate space to that of another node.
- [simdConvertTransform:fromNode:](scnnode/simdconverttransform%28__from_%29.md): Converts a transform to the node’s local coordinate space from that of another node.
- [simdConvertTransform:toNode:](scnnode/simdconverttransform%28__to_%29.md): Converts a transform from the node’s local coordinate space to that of another node.
- [simdConvertVector:fromNode:](scnnode/simdconvertvector%28__from_%29.md): Converts a direction vector to the node’s local coordinate space from that of another node.
- [simdConvertVector:toNode:](scnnode/simdconvertvector%28__to_%29.md): Converts a direction vector from the node’s local coordinate space to that of another node.

### Handling UI Focus

- [focusBehavior](scnnode/focusbehavior.md): The focus behavior for a node.
- [SCNNodeFocusBehavior](scnnodefocusbehavior.md): Options for the focusable states of a SceneKit node.

### Working with GameplayKit

- [entity](scnnode/entity.md): The GameplayKit entity this node represents.

### Managing the Node’s Transform (SceneKit Types)

- [transform](scnnode/transform.md): The transform applied to the node relative to its parent. Animatable.
- [position](scnnode/position.md): The translation applied to the node. Animatable.
- [rotation](scnnode/rotation.md): The node’s orientation, expressed as a rotation angle about an axis. Animatable.
- [eulerAngles](scnnode/eulerangles.md): The node’s orientation, expressed as pitch, yaw, and roll angles in radians. Animatable.
- [orientation](scnnode/orientation.md): The node’s orientation, expressed as a quaternion. Animatable.
- [scale](scnnode/scale.md): The scale factor applied to the node. Animatable.
- [pivot](scnnode/pivot.md): The pivot point for the node’s position, rotation, and scale. Animatable.

### Performing Node-Relative Operations (SceneKit Types)

- [rotateBy:aroundTarget:](scnnode/rotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.
- [localTranslateBy:](scnnode/localtranslate%28by_%29.md): Changes the node’s position relative to its current position.
- [localRotateBy:](scnnode/localrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.
- [lookAt:](scnnode/look%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.
- [lookAt:up:localFront:](scnnode/look%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.

### Calculating Node-Relative Transforms (SceneKit Types)

- [localRight](scnnode/localright.md): The direction SceneKit treats as “right” in local space for all nodes.
- [localUp](scnnode/localup.md): The direction SceneKit treats as “up” in local space for all nodes.
- [localFront](scnnode/localfront.md): The unit vector SceneKit treats as “forward” in local space for all nodes.
- [worldRight](scnnode/worldright.md): The “right” (+X) direction vector relative to the node, expressed in world space.
- [worldUp](scnnode/worldup.md): The “up” (+Y) direction vector relative to the node, expressed in world space.
- [worldFront](scnnode/worldfront.md): The “forward” (-Z) direction vector relative to the node, expressed in world space.

### Managing Transforms in World Space (SceneKit Types)

- [worldTransform](scnnode/worldtransform.md): The world transform applied to the node.
- [setWorldTransform:](scnnode/setworldtransform%28__%29.md): Sets the world transform applied to the node.
- [worldOrientation](scnnode/worldorientation.md): The node’s orientation relative to the scene’s world coordinate space.
- [worldPosition](scnnode/worldposition.md): The node’s position relative to the scene’s world coordinate space.

### Converting Between Coordinate Spaces (SceneKit Types)

- [convertPosition:fromNode:](scnnode/convertposition%28__from_%29.md): Converts a position to the node’s local coordinate space from that of another node.
- [convertPosition:toNode:](scnnode/convertposition%28__to_%29.md): Converts a position from the node’s local coordinate space to that of another node.
- [convertTransform:fromNode:](scnnode/converttransform%28__from_%29.md): Converts a transform to the node’s local coordinate space from that of another node.
- [convertTransform:toNode:](scnnode/converttransform%28__to_%29.md): Converts a transform from the node’s local coordinate space to that of another node.
- [convertVector:fromNode:](scnnode/convertvector%28__from_%29.md): Converts a direction vector to the node’s local coordinate space from that of another node.
- [convertVector:toNode:](scnnode/convertvector%28__to_%29.md): Converts a direction vector from the node’s local coordinate space to that of another node.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SCNReferenceNode](scnreferencenode.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNActionable](scnactionable.md)
- [SCNAnimatable](scnanimatable.md)
- [SCNBoundingVolume](scnboundingvolume.md)
- [UIFocusItem](../uikit/uifocusitem.md)

## See Also

### Scene Structure

- [Organizing a Scene with Nodes](organizing-a-scene-with-nodes.md): Use nodes to define the structure of a scene.
- [SCNReferenceNode](scnreferencenode.md): A scene graph node that serves as a placeholder for content to be loaded from a separate scene file.
