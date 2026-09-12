> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity](https://developer.apple.com/documentation/realitykit/entity)

# Entity

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An element of a RealityKit scene to which you attach components that provide appearance and behavior characteristics for the entity.

## Declaration

```swift
@MainActor @preconcurrency class Entity
```

## Mentioned In

- [Improving the Accessibility of RealityKit Apps](improving-the-accessibility-of-realitykit-apps.md)
- [Automatically animating RealityKit entities](automatically-animating-realitykit-entities.md)

<a id="overview"></a>

## Overview

You create and configure entities to embody objects that you want to place in the real world in an AR app. You do this by adding [Entity](entity.md) instances to the [Scene](scene.md) instance associated with an [ARView](arview.md).

RealityKit defines a few concrete subclasses of [Entity](entity.md) that provide commonly used functionality. For example, you typically start by creating an instance of [AnchorEntity](anchorentity.md) to anchor your content, and add the anchor to a scene’s [anchors](scene/anchors.md) collection. You might then instantiate a [ModelEntity](modelentity.md) to represent a physical object in the scene, and add that as a child entity to the anchor. You can also create custom entities, and add them either to an anchor, or as children of another entity.

![Block diagram showing how entity hierarchies, composed of different kinds](https://developer.apple.com/images/com.apple.RealityKit/Entity-1@2x.png)

You can load predefined entities or a hierarchy of entities from your app’s bundle, or from a file on disk, using the methods in [Stored entities](stored-entities.md). Alternatively, you can create entities programmatically.

Entities contain components (instances conforming to the [Component](component.md) protocol) that provide appearance and behaviors for the entity. For example, the [Transform](transform.md) component contains the scale, rotation, and translation information needed to position an entity in space. You store components in the entity’s [components](entity/components.md) collection, which can hold exactly one of any component type. It makes sense to have only a single [Transform](transform.md) component, one [ModelComponent](modelcomponent.md) (specifying the visual appearance of the entity), and so on.

![Diagram showing the components present in the base entity class, as well](https://developer.apple.com/images/com.apple.RealityKit/Entity-2@2x.png)

All entities inherit a few common components from the [Entity](entity.md) base class: the [Transform](transform.md) component for spatial positioning, and [SynchronizationComponent](synchronizationcomponent.md), which enables synchronization of the entity among networked peers. Specific types of entities define additional behaviors. For example, the model entity has components for visual appearance ([ModelComponent](modelcomponent.md)), collision detection ([CollisionComponent](collisioncomponent.md)), and physics simulations ([PhysicsBodyComponent](physicsbodycomponent.md) and [PhysicsMotionComponent](physicsmotioncomponent.md)).

## Topics

### Creating an entity

- [init()](entity/init%28%29.md): Creates a new entity.
- [init(components:)](entity/init%28components_%29-1lmhe.md): Creates an entity with multiple components.
- [init(components:)](entity/init%28components_%29-1lmhe.md): Creates an entity with multiple components.
- [clone(recursive:)](entity/clone%28recursive_%29.md): Duplicates an entity to create a new entity.
- [didClone(from:)](entity/didclone%28from_%29.md): Tells a newly cloned entity that cloning is complete.

### Loading an entity from a file

- [Generating procedural textures](../visionos/generating-procedural-textures-in-visionos.md): Display a 3D model that generates procedural textures in a reality view.
- [Resource](resource.md): A shared resource you use to configure a component, like a material, mesh, or texture.
- [Loading entities from a file](loading-entities-from-a-file.md): Retrieve an entity from storage on disk using a synchronous or an asynchronous load operation.
- [Stored entities](stored-entities.md): Manage entities that you store as assets on disk.
- [Creating USD files for Apple devices](../usd/creating-usd-files-for-apple-devices.md): Generate 3D assets that render as expected.
- [init(contentsOf:withName:)](entity/init%28contentsof_withname_%29.md): Creates an entity by asynchronously loading it from a file URL.
- [init(named:in:)](entity/init%28named_in_%29.md): Creates an entity by asynchronously loading it from a bundle.
- [ReferenceComponent](referencecomponent.md): A component that can load another entity from a file.

### Loading an entity from a configuration catalog

- [init(from:configurations:)](entity/init%28from_configurations_%29.md): Loads an entity from a configuration catalog and a dictionary of configuration choices.
- [Entity.ConfigurationCatalog](entity/configurationcatalog.md): A collection of alternative representations of an entity you can choose from.

### Positioning entities in space

- [HasTransform](hastransform.md): An interface that enables manipulating the scale, rotation, and translation of an entity.
- [Transform](transform.md): A component that defines the scale, rotation, and translation of an entity.
- [transformMatrix(relativeTo:)](entity/transformmatrix%28relativeto_%29.md): Returns the 4 x 4 transform matrix of an entity relative to the given coordinate space.
- [Entity.CoordinateSpaceReference](entity/coordinatespacereference.md): Defines the coordinate space reference for transform conversion.
- [Entity.ForwardDirection](entity/forwarddirection.md): Defines the forward direction for an entity.

### Relating entities

- [parameters](entity/parameters.md): Represents a reference to the parameters for a particular entity.
- [Entity.ChildCollection](entity/childcollection.md): A collection of child entities.
- [HasHierarchy](hashierarchy.md): An interface that provides access to a parent entity and child entities.

### Managing components

- [components](entity/components.md): All the components that an entity stores.
- [Entity.ComponentSet](entity/componentset.md): A collection of components that an entity stores.

### Inspecting an entity

- [scene](entity/scene.md): The scene that owns the entity.
- [name](entity/name.md): The name of the entity.
- [findEntity(named:)](entity/findentity%28named_%29.md): Recursively searches all descendant entities for one with the given name.
- [debugDescription](entity/debugdescription.md): A human readable description of the entity.

### Managing the entity’s state

- [isEnabled](entity/isenabled.md): A Boolean that you set to enable or disable the entity and its descendants.
- [isEnabledInHierarchy](entity/isenabledinhierarchy.md): A Boolean that indicates whether the entity and all of its ancestors are enabled.
- [isActive](entity/isactive.md): A Boolean that indicates whether the entity is active.
- [isAnchored](entity/isanchored.md): A Boolean that indicates whether the entity is anchored.

### Synchronizing entities with other devices

- [SynchronizationComponent](synchronizationcomponent.md): A component that synchronizes an entity between processes and networked applications.

### Finding the nearest anchor

- [anchor](entity/anchor.md): The nearest ancestor entity that can act as an anchor.

### Creating a collision shape

- [generateCollisionShapes(recursive:)](entity/generatecollisionshapes%28recursive_%29.md): Creates the shape used to detect collisions between two entities that have collision components.
- [generateCollisionShapes(recursive:static:)](entity/generatecollisionshapes%28recursive_static_%29.md): Creates the shape used to detect collisions between two entities that have collision components.

### Animating an entity

- [availableAnimations](entity/availableanimations.md): The list of animations associated with the entity.
- [playAnimation(\_:transitionDuration:blendLayerOffset:separateAnimatedValue:startsPaused:clock:)](entity/playanimation%28__transitionduration_blendlayeroffset_separateanimatedvalue_startspaused_clock_%29.md): Plays an animation with the specified options.
- [playAnimation(\_:transitionDuration:blendLayerOffset:separateAnimatedValue:startsPaused:clock:handoffType:)](entity/playanimation%28__transitionduration_blendlayeroffset_separateanimatedvalue_startspaused_clock_handofftype_%29.md): Plays an animation with the specified options.
- [playAnimation(\_:transitionDuration:startsPaused:)](entity/playanimation%28__transitionduration_startspaused_%29.md): Plays the given animation on the entity.
- [stopAllAnimations(recursive:)](entity/stopallanimations%28recursive_%29.md): Stops all playing of animations on this entity.
- [defaultAnimationClock](entity/defaultanimationclock.md): Returns the default animation clock for this entity.
- [parameters](entity/parameters.md): Represents a reference to the parameters for a particular entity.
- [Entity.ParameterSet](entity/parameterset.md): Represents a reference to the parameters for a particular entity.
- [playAnimation(named:transitionDuration:startsPaused:recursive:)](entity/playanimation%28named_transitionduration_startspaused_recursive_%29.md): Deprecated. Plays all the animations with the given name on the entity.
- [bindableValues](entity/bindablevalues.md)
- [subscript(\_:)](entity/subscript%28__%29.md): Resolves the entity from the given entity path.

### Animating and controlling characters

- [characterController](entity/charactercontroller.md): The character controller component for the entity.
- [characterControllerState](entity/charactercontrollerstate.md): The character controller state for the entity.
- [moveCharacter(by:deltaTime:relativeTo:collisionHandler:)](entity/movecharacter%28by_deltatime_relativeto_collisionhandler_%29.md): Moves the character along a specified vector over a period of time.
- [teleportCharacter(to:relativeTo:)](entity/teleportcharacter%28to_relativeto_%29.md): Moves the character instantly to a new position.

### Playing audio

- [playAudio(\_:)](entity/playaudio%28__%29.md): Prepares and plays a new audio playback instance on this entity.
- [playAudio(configuration:\_:)](entity/playaudio%28configuration___%29.md): Prepares and plays a real-time audio playback instance.
- [prepareAudio(configuration:\_:)](entity/prepareaudio%28configuration___%29.md): Prepares a real-time audio playback instances.
- [prepareAudio(\_:)](entity/prepareaudio%28__%29.md): Prepares an audio resource for playback.
- [stopAllAudio()](entity/stopallaudio%28%29.md): Stops playback for all audio on this entity.
- [spatialAudio](entity/spatialaudio.md): The component that configures the spatial rendering of sounds from this entity.
- [ambientAudio](entity/ambientaudio.md): The component that configures the ambient rendering of sounds from this entity.
- [channelAudio](entity/channelaudio.md): The component that configures the channel-based rendering of sounds from this entity.

### Saving an entity and its descendants

- [write(to:)](entity/write%28to_%29.md): Exports the entity as a RealityKit file to a location in the file system.

### Configuring accessibility features

- [Improving the Accessibility of RealityKit Apps](improving-the-accessibility-of-realitykit-apps.md): Incorporate assistive technologies in your augmented reality app.
- [isAccessibilityElement](entity/isaccessibilityelement.md): A Boolean value indicating whether the receiver is an accessibility element that an assistive application can access.
- [accessibilityLabelKey](entity/accessibilitylabelkey.md): A succinct label that identifies the entity, in a localized string key.
- [accessibilityCustomActions](entity/accessibilitycustomactions.md): An array of custom actions supported by the entity, identified by their localized string key.
- [accessibilityCustomContent](entity/accessibilitycustomcontent.md): The Custom Content API is useful for delivering accessibility information from complex data sets to your users in measured portions. Using this API allows you to leverage assistive technologies to present only the accessible content your app’s users need, when they need it.
- [accessibilityCustomRotors](entity/accessibilitycustomrotors.md): An array of supported rotors.
- [accessibilityLabelKey](entity/accessibilitylabelkey.md): A succinct label that identifies the entity, in a localized string key.
- [accessibilitySystemActions](entity/accessibilitysystemactions.md): The set of supported accessibility actions.
- [accessibilityTraits](entity/accessibilitytraits.md): The combination of accessibility traits that best characterize the entity.
- [accessibilityValue](entity/accessibilityvalue.md): A localized string key that represents the current value of the entity.
- [accessibilityDescription](entity/accessibilitydescription.md): Deprecated. A longer description of the entity for use by assistive technologies.
- [accessibilityLabel](entity/accessibilitylabel.md): Deprecated. A succinct label that identifies the purpose of the image.
- [accessibilityDescription](entity/accessibilitydescription.md): Deprecated. A longer description of the entity for use by assistive technologies.

### Creating an entity from data

- [init(from:named:contentType:)](entity/init%28from_named_contenttype_%29.md): Creates an entity by asynchronously loading it from the in-memory contents of a file stored in a Data object.

### Writing an entity to a file

- [write(to:options:)](entity/write%28to_options_%29.md)
- [write(\_:to:options:)](entity/write%28__to_options_%29.md): Exports an array of entities as separate scenes within a single RealityKit file.
- [Entity.WriteOptions](entity/writeoptions.md): A set of options that control how RealityKit writes entities to a reality file.

### Playing spatial audio

- [playAudio(\_:at:)](entity/playaudio%28__at_%29.md): Asynchronously prepares and plays a new audio playback instance at a specified time on this entity.

### Structures

- [Entity.Observable](entity/observable-swift.struct.md): An observable interface to an entity’s properties and components, enabling reactive updates using Swift’s Observation framework.

### Initializers

- [init(components:)](entity/init%28components_%29.md): Creates an entity with multiple components.
- [init(from:named:)](entity/init%28from_named_%29.md): Deprecated. Creates an entity by asynchronously loading it from the in-memory contents of a file stored in a Data object.

### Instance Properties

- [observable](entity/observable-swift.property.md): The version of the entity observable by Swift.
- [pins](entity/pins.md): The entity’s geometric pins.

### Instance Methods

- [applyTapForBehaviors()](entity/applytapforbehaviors%28%29.md): Apply a tap to an Entity or one of its ancestors to trigger a RealityComposer behavior if one is present.
- [attach(\_:to:)](entity/attach%28__to_%29.md): Attach an entity to a target pin owned by another entity with an optional specified source pin This utility function has the same effect of adding an AttachedTransformComponent created with the same parameter to the entity you are calling upon

### Type Methods

- [animate(\_:body:completion:)](entity/animate%28__body_completion_%29.md)

### Default Implementations

- [CustomDebugStringConvertible Implementations](entity/customdebugstringconvertible-implementations.md)
- [Equatable Implementations](entity/equatable-implementations.md)
- [Hashable Implementations](entity/hashable-implementations.md)

## Relationships

### Inherited By

- [AnchorEntity](anchorentity.md)
- [BodyTrackedEntity](bodytrackedentity.md)
- [DirectionalLight](directionallight.md)
- [HasAnchoring](hasanchoring.md)
- [HasHierarchy](hashierarchy.md)
- [HasPhysicsMotion](hasphysicsmotion.md)
- [HasSceneUnderstanding](hassceneunderstanding.md)
- [HasSynchronization](hassynchronization.md)
- [HasTransform](hastransform.md)
- [ModelEntity](modelentity.md)
- [PerspectiveCamera](perspectivecamera.md)
- [PointLight](pointlight.md)
- [SpotLight](spotlight.md)
- [TriggerVolume](triggervolume.md)
- [ViewAttachmentEntity](viewattachmententity.md)

### Conforms To

- [CoordinateSpace3D](../spatial/coordinatespace3d.md)
- [CoordinateSpace3DFloat](../spatial/coordinatespace3dfloat.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [EventSource](eventsource.md)
- [HasHierarchy](hashierarchy.md)
- [HasSynchronization](hassynchronization.md)
- [HasTransform](hastransform.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [RealityCoordinateSpace](realitycoordinatespace.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Understanding the modular architecture of RealityKit](../visionos/understanding-the-realitykit-modular-architecture.md): Learn how everything fits together in RealityKit.
- [Building an immersive experience with RealityKit](building-an-immersive-experience-with-realitykit.md): Use systems and postprocessing effects to create a realistic underwater scene.
- [Component](component.md): A representation of a geometry or a behavior that you apply to an entity.
