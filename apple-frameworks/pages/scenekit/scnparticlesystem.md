> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem](https://developer.apple.com/documentation/scenekit/scnparticlesystem)

# SCNParticleSystem (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that animates and renders a system of small image sprites using a high-level simulation whose general behavior you specify.

## Declaration

```swift
class SCNParticleSystem
```

<a id="overview"></a>

## Overview

Use particle systems to create effects such as smoke, rain, confetti, and fireworks.

<a id="How-Particle-Systems-Work"></a>

### How Particle Systems Work

Unlike SceneKit nodes and geometries, individual particles are not objects in a scene graph. Because a particle system can involve dozens or hundreds of particles, SceneKit uses a more efficient internal representation that stores and processes the data for all of a system’s particles in bulk.

Instead of accessing each particle to control its behavior or to make it interact with other scene content, you typically use properties of a particle system to control the aggregate behavior of particles. These properties cover several key aspects of the system’s behavior, as summarized below.

- Appearance. SceneKit renders a texture image for each particle. Define the appearance of the particle system by specifying an image, its tint color, and rendering parameters such as blending mode. You can even specify an animated image sequence, creating effects like swarms of insects or multi-stage explosions.
- Life span. SceneKit creates each particle at a location in the scene (also called an *emitter*), varies its position and appearance over a specified life span, then removes it from the scene. (Particle creation is also called *birth* or *spawning*, and particle removal is also called *death*.) The total count of particles on screen at any time is the product of the system’s [birthRate](scnparticlesystem/birthrate.md) and [particleLifeSpan](scnparticlesystem/particlelifespan.md) properties. Larger numbers of particles have a greater cost to rendering performance and power usage.
- Emitter behavior. Use the [emitterShape](scnparticlesystem/emittershape.md) property to specify whether particles spawn from a single point in space or in the region defined by an [SCNGeometry](scngeometry.md) object. Use the [emissionDuration](scnparticlesystem/emissionduration.md) property and related properties to vary particle birth over time, so that the system alternates between periods of spawning particles and periods of idle time.
- Variation. Particle systems simulate realistic effects by randomly varying particle properties both at birth and over the lifetime of a particle. You can also add random variation to the life span of particles. Several particle system properties have an associated variation property that controls this randomization. For example, the [particleSizeVariation](scnparticlesystem/particlesizevariation.md) property defines the width of an interval for randomizing the [particleSize](scnparticlesystem/particlesize.md) property.
- Movement. Particles move according to a simple physics simulation—each has an initial direction, speed, angular velocity and acceleration, which SceneKit uses to animate the particle until it dies. You can create many realistic effects using these attributes alone. You can also add more complex behaviors by allowing particles to interact with scene geometry ([colliderNodes](scnparticlesystem/collidernodes.md)), the scene’s [physicsWorld](scnscene/physicsworld.md) simulation, or [SCNPhysicsField](scnphysicsfield.md) objects.

In addition, you can also use the following features to add dynamic behaviors to a particle system, changing its appearance over time or making it interact with its environment.

- Animations and property controllers. Like many SceneKit objects, the [SCNParticleSystem](scnparticlesystem.md) class conforms to the [SCNAnimatable](scnanimatable.md) protocol, so you can implicitly or explicitly animate changes to its properties. (For general background on animation, see [Animating SceneKit Content](animating-scenekit-content.md).) When you animate changes to a particle system’s properties, these changes affect all particles in the system simultaneously.

To apply animations independently for individual particles, use an [SCNParticlePropertyController](scnparticlepropertycontroller.md) object, which associates a [CAAnimation](../quartzcore/caanimation.md) object with a particle system property. With a property controller, you can use features of the Core Animation framework to create time-varying effects that apply to each particle in the system. Typically a Core Animation object varies a property with respect to time, but with a property controller you can also create animations that vary a property based on other input values, such as a particle’s distance from its initial location.

For example, consider a [CAKeyframeAnimation](../quartzcore/cakeyframeanimation.md) object that animates a series of colors from white to yellow to red, and a particle system that simulates a flame. If you attach this animation to a particle system’s [particleColor](scnparticlesystem/particlecolor.md) property, the resulting flame effect has a single color at any given moment, but that color changes over time. If you instead attach a property controller for the [color](scnparticlesystem/particleproperty/color.md) property, the flame varies in color from its base to its tip—each particle starts out white, then fades to yellow and red as it rises.

- Spawned particle systems. When you assign another [SCNParticleSystem](scnparticlesystem.md) instance to one of the properties listed in Spawning Additional Particle Systems, SceneKit adds more particle systems to the scene based on the behavior of the original particle system. For example, if you have a particle system that simulates falling rain, you can use the [systemSpawnedOnCollision](scnparticlesystem/systemspawnedoncollision.md) property to add splashes where each raindrop strikes a surface.
- Event handlers and particle modifiers. Because they specify behavior declaratively, animations, property controllers, and spawned systems provide easy configuration and high performance for most dynamic behaviors. To create behaviors not possible with these features, you can register event handler or particle modifier blocks that work directly with the bulk particle data SceneKit uses to animate a particle system.

Use the [handle(\_:forProperties:handler:)](scnparticlesystem/handle%28__forproperties_handler_%29.md) method to modify particle data in response to an event—particle birth, death, or collision. For example, you can use this option to make particles that change color after colliding with another object in the scene.

Use the methods listed in Modifying Particles Over Time to manage blocks that SceneKit calls for every rendered frame. Your block can modify particle properties in bulk, allowing you to change particle behavior precisely, but at a high risk to rendering performance.

<a id="Use-the-Xcode-Particle-System-Editor-to-Experiment-with-Particle-Systems"></a>

### Use the Xcode Particle System Editor to Experiment with Particle Systems

In most cases, you don’t need to configure a particle system directly in your app or game. Instead, you use Xcode to configure a particle system’s properties. As you change the behavior of the particle system, Xcode immediately provides an updated visual effect. When complete, Xcode archives the configured system into a file, which you can then include with your project’s bundle resources. Then, at runtime, your game uses this archive to instantiate a new particle system.

Using Xcode to create your particle systems has a few important advantages:

- You can easily learn the capabilities of the particle system class.
- You can experiment quickly with new particle effects and see the results immediately.
- You separate the task of designing a particle effect from the programming task of using it. Your artists can work on new particle effects independent of your game code.
- You can attach a particle system to a node in the Xcode scene editor to preview the particle system in your scene.

To load a particle system from a file you created with Xcode, use the [init(named:inDirectory:)](scnparticlesystem/init%28named_indirectory_%29.md) method.

## Topics

### Creating a Particle System

- [init(named:inDirectory:)](scnparticlesystem/init%28named_indirectory_%29.md): Loads a particle system from a file in the app’s bundle resources.

### Managing Particle Emission Timing

- [emissionDuration](scnparticlesystem/emissionduration.md): The duration, in seconds, over which the system spawns new particles. Animatable.
- [emissionDurationVariation](scnparticlesystem/emissiondurationvariation.md): The range, in seconds, of randomized emission duration values. Animatable.
- [idleDuration](scnparticlesystem/idleduration.md): The duration, in seconds, of periods when the system emits no particles. Animatable.
- [idleDurationVariation](scnparticlesystem/idledurationvariation.md): The range, in seconds, of randomized idle duration values. Animatable.
- [loops](scnparticlesystem/loops.md): A Boolean value that determines whether the system repeats its emission and idle periods.
- [warmupDuration](scnparticlesystem/warmupduration.md): The duration, in seconds, for which particles are spawned before the system is first rendered. Animatable.
- [birthRate](scnparticlesystem/birthrate.md): The number of particles spawned during each emission period. Animatable.
- [birthRateVariation](scnparticlesystem/birthratevariation.md): The range of randomized particle birth rate values. Animatable.

### Managing Particle Emission Locations

- [emitterShape](scnparticlesystem/emittershape.md): The shape of the region of space where the system spawns new particles.
- [birthLocation](scnparticlesystem/birthlocation.md): The possible locations for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthLocation](scnparticlebirthlocation.md): Options for the initial location of each emitted particle, used by the [birthLocation](scnparticlesystem/birthlocation.md) property.
- [birthDirection](scnparticlesystem/birthdirection.md): The possible initial directions for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthDirection](scnparticlebirthdirection.md): Options for the initial direction of each emitted particle, used by the [birthDirection](scnparticlesystem/birthdirection.md) property.
- [emittingDirection](scnparticlesystem/emittingdirection.md): The initial direction for newly spawned particles. Animatable.
- [spreadingAngle](scnparticlesystem/spreadingangle.md): The range, in degrees, of randomized initial particle directions. Animatable.

### Managing Particle Motion

- [particleAngle](scnparticlesystem/particleangle.md): The rotation angle, in degrees, of newly spawned particles. Animatable.
- [particleAngleVariation](scnparticlesystem/particleanglevariation.md): The range, in degrees of randomized initial particle angles. Animatable.
- [particleVelocity](scnparticlesystem/particlevelocity.md): The initial speed, in units per second, for newly spawned particles. Animatable.
- [particleVelocityVariation](scnparticlesystem/particlevelocityvariation.md): The range, in units per second, of randomized initial particle speeds. Animatable.
- [particleAngularVelocity](scnparticlesystem/particleangularvelocity.md): The initial spin rate, in degrees per second, of newly spawned particles. Animatable.
- [particleAngularVelocityVariation](scnparticlesystem/particleangularvelocityvariation.md): The range, in degrees per second, of randomized initial angular velocities for particles. Animatable.
- [particleLifeSpan](scnparticlesystem/particlelifespan.md): The duration, in seconds, for which each particle is rendered before being removed from the scene. Animatable.
- [particleLifeSpanVariation](scnparticlesystem/particlelifespanvariation.md): The range, in seconds, of randomized particle life spans. Animatable.

### Specifying Particle Appearance

- [particleSize](scnparticlesystem/particlesize.md): The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.
- [particleSizeVariation](scnparticlesystem/particlesizevariation.md): The range of randomized particle sizes. Animatable.
- [particleColor](scnparticlesystem/particlecolor.md): The color of newly spawned particles. Animatable.
- [particleColorVariation](scnparticlesystem/particlecolorvariation.md): The ranges of randomized particle color components. Animatable.
- [particleImage](scnparticlesystem/particleimage.md): The texture image SceneKit uses to render each particle.
- [fresnelExponent](scnparticlesystem/fresnelexponent.md): The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.
- [stretchFactor](scnparticlesystem/stretchfactor.md): A multiplier for stretching particle images along their direction of motion. Animatable.

### Animating Particle Images

- [imageSequenceRowCount](scnparticlesystem/imagesequencerowcount.md): The number of rows for treating the particle image as a grid of animation frames.
- [imageSequenceColumnCount](scnparticlesystem/imagesequencecolumncount.md): The number of columns for treating the particle image as a grid of animation frames.
- [imageSequenceInitialFrame](scnparticlesystem/imagesequenceinitialframe.md): The index of the first frame in a particle image animation. Animatable.
- [imageSequenceInitialFrameVariation](scnparticlesystem/imagesequenceinitialframevariation.md): The range of randomized initial frames for particle image animation. Animatable.
- [imageSequenceFrameRate](scnparticlesystem/imagesequenceframerate.md): The rate, in frames per second, of particle image animation. Animatable.
- [imageSequenceFrameRateVariation](scnparticlesystem/imagesequenceframeratevariation.md): The range, in frames per second, of randomized frame rates for particle image animation. Animatable.
- [imageSequenceAnimationMode](scnparticlesystem/imagesequenceanimationmode.md): The animation mode for particle image animation.
- [SCNParticleImageSequenceAnimationMode](scnparticleimagesequenceanimationmode.md): Options for animating each particle with a sequence of images, used by the [imageSequenceAnimationMode](scnparticlesystem/imagesequenceanimationmode.md) property.

### Simulating Physics for Particles

- [isAffectedByGravity](scnparticlesystem/isaffectedbygravity.md): A Boolean value that determines whether gravity, as defined by the scene’s physics simulation, affects the motion of particles.
- [isAffectedByPhysicsFields](scnparticlesystem/isaffectedbyphysicsfields.md): A Boolean value that determines whether physics fields in the scene affect the motion of particles.
- [colliderNodes](scnparticlesystem/collidernodes.md): The nodes whose geometry the system’s particles can collide with.
- [particleDiesOnCollision](scnparticlesystem/particlediesoncollision.md): A Boolean value that determines whether particles are removed from the scene upon colliding with another object.
- [acceleration](scnparticlesystem/acceleration.md): The constant acceleration vector, in units per second per second, applied to all particles in the system. Animatable.
- [dampingFactor](scnparticlesystem/dampingfactor.md): A factor that slows particles relative to their velocity. Animatable.
- [particleMass](scnparticlesystem/particlemass.md): The mass, in kilograms, of each particle in the system. Animatable.
- [particleMassVariation](scnparticlesystem/particlemassvariation.md): The range, in kilograms, of randomized particle masses. Animatable.
- [particleCharge](scnparticlesystem/particlecharge.md): The electric charge, in coulombs, of each particle in the system. Animatable.
- [particleChargeVariation](scnparticlesystem/particlechargevariation.md): The range, in coulombs, of randomized particle charges. Animatable.
- [particleBounce](scnparticlesystem/particlebounce.md): The restitution coefficient of each particle in the system. Animatable.
- [particleBounceVariation](scnparticlesystem/particlebouncevariation.md): The range of randomized restitution coefficients for particles. Animatable.
- [particleFriction](scnparticlesystem/particlefriction.md): The friction coefficient of each particle in the system. Animatable.
- [particleFrictionVariation](scnparticlesystem/particlefrictionvariation.md): The range of randomized friction coefficients for particles. Animatable.

### Spawning Additional Particle Systems

- [systemSpawnedOnCollision](scnparticlesystem/systemspawnedoncollision.md): Another particle system to be added to the scene when a particle collides with scene geometry.
- [systemSpawnedOnDying](scnparticlesystem/systemspawnedondying.md): Another particle system to be added to the scene when a particle dies.
- [systemSpawnedOnLiving](scnparticlesystem/systemspawnedonliving.md): Another particle system to be added to the scene for each living particle in the system.

### Managing Particle Rendering

- [blendMode](scnparticlesystem/blendmode.md): The blending mode for compositing particle images into the rendered scene.
- [SCNParticleBlendMode](scnparticleblendmode.md): Options for combining source and destination pixel colors when compositing particles during rendering, used by the [blendMode](scnparticlesystem/blendmode.md) property.
- [orientationMode](scnparticlesystem/orientationmode.md): The mode defining whether and how particles may rotate.
- [SCNParticleOrientationMode](scnparticleorientationmode.md): Options for restricting the orientation of particles, used by the [orientationMode](scnparticlesystem/orientationmode.md) property.
- [sortingMode](scnparticlesystem/sortingmode.md): The mode defining the order in which SceneKit renders the system’s particles.
- [SCNParticleSortingMode](scnparticlesortingmode.md): Options for the rendering order of particles, used by the [sortingMode](scnparticlesystem/sortingmode.md) property.
- [isLightingEnabled](scnparticlesystem/islightingenabled.md): A Boolean value that determines whether SceneKit applies lighting to particle images when rendering.
- [isBlackPassEnabled](scnparticlesystem/isblackpassenabled.md): A Boolean value that determines whether SceneKit renders particles in black before rendering the particle image.

### Controlling Particle Simulation

- [isLocal](scnparticlesystem/islocal.md): A Boolean value that specifies whether the particle simulation runs in the local coordinate space of the node containing it.
- [reset()](scnparticlesystem/reset%28%29.md): Returns the particle system to its initial state.
- [speedFactor](scnparticlesystem/speedfactor.md): A multiplier for the speed at which SceneKit runs the particle simulation. Animatable.

### Modifying Particles in Response to Particle System Events

- [handle(\_:forProperties:handler:)](scnparticlesystem/handle%28__forproperties_handler_%29.md): Adds a block that modifies particle properties, to be executed at a specified event in the lifetimes of particles in the system.
- [SCNParticleEvent](scnparticleevent.md): Significant events in the life spans of simulate particles, used by the [handle(\_:forProperties:handler:)](scnparticlesystem/handle%28__forproperties_handler_%29.md) method.
- [SCNParticleEventBlock](scnparticleeventblock.md): The signature for blocks called by SceneKit in response to significant events during particle simulation, used by the [handle(\_:forProperties:handler:)](scnparticlesystem/handle%28__forproperties_handler_%29.md) method.

### Modifying Particles Over Time

- [propertyControllers](scnparticlesystem/propertycontrollers.md): A dictionary that optionally associates particle properties with objects that animate a property’s value for each particle.
- [addModifier(forProperties:at:modifier:)](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md): Adds a block that modifies particle properties, to be executed each time SceneKit renders a frame.
- [removeModifiers(at:)](scnparticlesystem/removemodifiers%28at_%29.md): Removes particle modifier blocks for the specified stage of the particle simulation.
- [removeAllModifiers()](scnparticlesystem/removeallmodifiers%28%29.md): Removes all particle modifier blocks associated with the particle system.
- [SCNParticleSystem.ParticleProperty](scnparticlesystem/particleproperty.md): Keys identifying properties of individual particles, used by the [propertyControllers](scnparticlesystem/propertycontrollers.md) dictionary and the [handle(\_:forProperties:handler:)](scnparticlesystem/handle%28__forproperties_handler_%29.md) and [addModifier(forProperties:at:modifier:)](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) methods.
- [SCNParticleModifierStage](scnparticlemodifierstage.md): Stages of SceneKit’s particle simulation process into which you can insert modifier blocks, used by the [addModifier(forProperties:at:modifier:)](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.
- [SCNParticleModifierBlock](scnparticlemodifierblock.md): The signature for blocks called by SceneKit to modify particle properties on each frame of simulation, used by the [addModifier(forProperties:at:modifier:)](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.

### Sample Code

Example projects making use of SceneKit particle systems.

- [Building a document browser app for custom file formats](../uikit/building-a-document-browser-app-for-custom-file-formats.md): Implement a custom document file format to manage user interactions with files on different cloud storage providers.

### Initializers

- [init(coder:)](scnparticlesystem/init%28coder_%29.md)

### Instance Properties

- [orientationDirection](scnparticlesystem/orientationdirection.md)
- [particleIntensity](scnparticlesystem/particleintensity.md)
- [particleIntensityVariation](scnparticlesystem/particleintensityvariation.md)
- [writesToDepthBuffer](scnparticlesystem/writestodepthbuffer.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)

## See Also

### Particle Systems

- [SCNParticlePropertyController](scnparticlepropertycontroller.md): An animation for a single property of the individual particles rendered by a particle system.

# SCNParticleSystem (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

An object that animates and renders a system of small image sprites using a high-level simulation whose general behavior you specify.

## Declaration

```objectivec
@interface SCNParticleSystem : NSObject
```

<a id="overview"></a>

## Overview

Use particle systems to create effects such as smoke, rain, confetti, and fireworks.

<a id="How-Particle-Systems-Work"></a>

### How Particle Systems Work

Unlike SceneKit nodes and geometries, individual particles are not objects in a scene graph. Because a particle system can involve dozens or hundreds of particles, SceneKit uses a more efficient internal representation that stores and processes the data for all of a system’s particles in bulk.

Instead of accessing each particle to control its behavior or to make it interact with other scene content, you typically use properties of a particle system to control the aggregate behavior of particles. These properties cover several key aspects of the system’s behavior, as summarized below.

- Appearance. SceneKit renders a texture image for each particle. Define the appearance of the particle system by specifying an image, its tint color, and rendering parameters such as blending mode. You can even specify an animated image sequence, creating effects like swarms of insects or multi-stage explosions.
- Life span. SceneKit creates each particle at a location in the scene (also called an *emitter*), varies its position and appearance over a specified life span, then removes it from the scene. (Particle creation is also called *birth* or *spawning*, and particle removal is also called *death*.) The total count of particles on screen at any time is the product of the system’s [birthRate](scnparticlesystem/birthrate.md) and [particleLifeSpan](scnparticlesystem/particlelifespan.md) properties. Larger numbers of particles have a greater cost to rendering performance and power usage.
- Emitter behavior. Use the [emitterShape](scnparticlesystem/emittershape.md) property to specify whether particles spawn from a single point in space or in the region defined by an [SCNGeometry](scngeometry.md) object. Use the [emissionDuration](scnparticlesystem/emissionduration.md) property and related properties to vary particle birth over time, so that the system alternates between periods of spawning particles and periods of idle time.
- Variation. Particle systems simulate realistic effects by randomly varying particle properties both at birth and over the lifetime of a particle. You can also add random variation to the life span of particles. Several particle system properties have an associated variation property that controls this randomization. For example, the [particleSizeVariation](scnparticlesystem/particlesizevariation.md) property defines the width of an interval for randomizing the [particleSize](scnparticlesystem/particlesize.md) property.
- Movement. Particles move according to a simple physics simulation—each has an initial direction, speed, angular velocity and acceleration, which SceneKit uses to animate the particle until it dies. You can create many realistic effects using these attributes alone. You can also add more complex behaviors by allowing particles to interact with scene geometry ([colliderNodes](scnparticlesystem/collidernodes.md)), the scene’s [physicsWorld](scnscene/physicsworld.md) simulation, or [SCNPhysicsField](scnphysicsfield.md) objects.

In addition, you can also use the following features to add dynamic behaviors to a particle system, changing its appearance over time or making it interact with its environment.

- Animations and property controllers. Like many SceneKit objects, the [SCNParticleSystem](scnparticlesystem.md) class conforms to the [SCNAnimatable](scnanimatable.md) protocol, so you can implicitly or explicitly animate changes to its properties. (For general background on animation, see [Animating SceneKit Content](animating-scenekit-content.md).) When you animate changes to a particle system’s properties, these changes affect all particles in the system simultaneously.

To apply animations independently for individual particles, use an [SCNParticlePropertyController](scnparticlepropertycontroller.md) object, which associates a [CAAnimation](../quartzcore/caanimation.md) object with a particle system property. With a property controller, you can use features of the Core Animation framework to create time-varying effects that apply to each particle in the system. Typically a Core Animation object varies a property with respect to time, but with a property controller you can also create animations that vary a property based on other input values, such as a particle’s distance from its initial location.

For example, consider a [CAKeyframeAnimation](../quartzcore/cakeyframeanimation.md) object that animates a series of colors from white to yellow to red, and a particle system that simulates a flame. If you attach this animation to a particle system’s [particleColor](scnparticlesystem/particlecolor.md) property, the resulting flame effect has a single color at any given moment, but that color changes over time. If you instead attach a property controller for the [SCNParticlePropertyColor](scnparticlesystem/particleproperty/color.md) property, the flame varies in color from its base to its tip—each particle starts out white, then fades to yellow and red as it rises.

- Spawned particle systems. When you assign another [SCNParticleSystem](scnparticlesystem.md) instance to one of the properties listed in Spawning Additional Particle Systems, SceneKit adds more particle systems to the scene based on the behavior of the original particle system. For example, if you have a particle system that simulates falling rain, you can use the [systemSpawnedOnCollision](scnparticlesystem/systemspawnedoncollision.md) property to add splashes where each raindrop strikes a surface.
- Event handlers and particle modifiers. Because they specify behavior declaratively, animations, property controllers, and spawned systems provide easy configuration and high performance for most dynamic behaviors. To create behaviors not possible with these features, you can register event handler or particle modifier blocks that work directly with the bulk particle data SceneKit uses to animate a particle system.

Use the [handleEvent:forProperties:withBlock:](scnparticlesystem/handle%28__forproperties_handler_%29.md) method to modify particle data in response to an event—particle birth, death, or collision. For example, you can use this option to make particles that change color after colliding with another object in the scene.

Use the methods listed in Modifying Particles Over Time to manage blocks that SceneKit calls for every rendered frame. Your block can modify particle properties in bulk, allowing you to change particle behavior precisely, but at a high risk to rendering performance.

<a id="Use-the-Xcode-Particle-System-Editor-to-Experiment-with-Particle-Systems"></a>

### Use the Xcode Particle System Editor to Experiment with Particle Systems

In most cases, you don’t need to configure a particle system directly in your app or game. Instead, you use Xcode to configure a particle system’s properties. As you change the behavior of the particle system, Xcode immediately provides an updated visual effect. When complete, Xcode archives the configured system into a file, which you can then include with your project’s bundle resources. Then, at runtime, your game uses this archive to instantiate a new particle system.

Using Xcode to create your particle systems has a few important advantages:

- You can easily learn the capabilities of the particle system class.
- You can experiment quickly with new particle effects and see the results immediately.
- You separate the task of designing a particle effect from the programming task of using it. Your artists can work on new particle effects independent of your game code.
- You can attach a particle system to a node in the Xcode scene editor to preview the particle system in your scene.

To load a particle system from a file you created with Xcode, use the [particleSystemNamed:inDirectory:](scnparticlesystem/init%28named_indirectory_%29.md) method.

## Topics

### Creating a Particle System

- [particleSystem](scnparticlesystem/particlesystem.md): Deprecated. Creates a new particle system.
- [particleSystemNamed:inDirectory:](scnparticlesystem/init%28named_indirectory_%29.md): Loads a particle system from a file in the app’s bundle resources.

### Managing Particle Emission Timing

- [emissionDuration](scnparticlesystem/emissionduration.md): The duration, in seconds, over which the system spawns new particles. Animatable.
- [emissionDurationVariation](scnparticlesystem/emissiondurationvariation.md): The range, in seconds, of randomized emission duration values. Animatable.
- [idleDuration](scnparticlesystem/idleduration.md): The duration, in seconds, of periods when the system emits no particles. Animatable.
- [idleDurationVariation](scnparticlesystem/idledurationvariation.md): The range, in seconds, of randomized idle duration values. Animatable.
- [loops](scnparticlesystem/loops.md): A Boolean value that determines whether the system repeats its emission and idle periods.
- [warmupDuration](scnparticlesystem/warmupduration.md): The duration, in seconds, for which particles are spawned before the system is first rendered. Animatable.
- [birthRate](scnparticlesystem/birthrate.md): The number of particles spawned during each emission period. Animatable.
- [birthRateVariation](scnparticlesystem/birthratevariation.md): The range of randomized particle birth rate values. Animatable.

### Managing Particle Emission Locations

- [emitterShape](scnparticlesystem/emittershape.md): The shape of the region of space where the system spawns new particles.
- [birthLocation](scnparticlesystem/birthlocation.md): The possible locations for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthLocation](scnparticlebirthlocation.md): Options for the initial location of each emitted particle, used by the [birthLocation](scnparticlesystem/birthlocation.md) property.
- [birthDirection](scnparticlesystem/birthdirection.md): The possible initial directions for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthDirection](scnparticlebirthdirection.md): Options for the initial direction of each emitted particle, used by the [birthDirection](scnparticlesystem/birthdirection.md) property.
- [emittingDirection](scnparticlesystem/emittingdirection.md): The initial direction for newly spawned particles. Animatable.
- [spreadingAngle](scnparticlesystem/spreadingangle.md): The range, in degrees, of randomized initial particle directions. Animatable.

### Managing Particle Motion

- [particleAngle](scnparticlesystem/particleangle.md): The rotation angle, in degrees, of newly spawned particles. Animatable.
- [particleAngleVariation](scnparticlesystem/particleanglevariation.md): The range, in degrees of randomized initial particle angles. Animatable.
- [particleVelocity](scnparticlesystem/particlevelocity.md): The initial speed, in units per second, for newly spawned particles. Animatable.
- [particleVelocityVariation](scnparticlesystem/particlevelocityvariation.md): The range, in units per second, of randomized initial particle speeds. Animatable.
- [particleAngularVelocity](scnparticlesystem/particleangularvelocity.md): The initial spin rate, in degrees per second, of newly spawned particles. Animatable.
- [particleAngularVelocityVariation](scnparticlesystem/particleangularvelocityvariation.md): The range, in degrees per second, of randomized initial angular velocities for particles. Animatable.
- [particleLifeSpan](scnparticlesystem/particlelifespan.md): The duration, in seconds, for which each particle is rendered before being removed from the scene. Animatable.
- [particleLifeSpanVariation](scnparticlesystem/particlelifespanvariation.md): The range, in seconds, of randomized particle life spans. Animatable.

### Specifying Particle Appearance

- [particleSize](scnparticlesystem/particlesize.md): The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.
- [particleSizeVariation](scnparticlesystem/particlesizevariation.md): The range of randomized particle sizes. Animatable.
- [particleColor](scnparticlesystem/particlecolor.md): The color of newly spawned particles. Animatable.
- [particleColorVariation](scnparticlesystem/particlecolorvariation.md): The ranges of randomized particle color components. Animatable.
- [particleImage](scnparticlesystem/particleimage.md): The texture image SceneKit uses to render each particle.
- [fresnelExponent](scnparticlesystem/fresnelexponent.md): The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.
- [stretchFactor](scnparticlesystem/stretchfactor.md): A multiplier for stretching particle images along their direction of motion. Animatable.

### Animating Particle Images

- [imageSequenceRowCount](scnparticlesystem/imagesequencerowcount.md): The number of rows for treating the particle image as a grid of animation frames.
- [imageSequenceColumnCount](scnparticlesystem/imagesequencecolumncount.md): The number of columns for treating the particle image as a grid of animation frames.
- [imageSequenceInitialFrame](scnparticlesystem/imagesequenceinitialframe.md): The index of the first frame in a particle image animation. Animatable.
- [imageSequenceInitialFrameVariation](scnparticlesystem/imagesequenceinitialframevariation.md): The range of randomized initial frames for particle image animation. Animatable.
- [imageSequenceFrameRate](scnparticlesystem/imagesequenceframerate.md): The rate, in frames per second, of particle image animation. Animatable.
- [imageSequenceFrameRateVariation](scnparticlesystem/imagesequenceframeratevariation.md): The range, in frames per second, of randomized frame rates for particle image animation. Animatable.
- [imageSequenceAnimationMode](scnparticlesystem/imagesequenceanimationmode.md): The animation mode for particle image animation.
- [SCNParticleImageSequenceAnimationMode](scnparticleimagesequenceanimationmode.md): Options for animating each particle with a sequence of images, used by the [imageSequenceAnimationMode](scnparticlesystem/imagesequenceanimationmode.md) property.

### Simulating Physics for Particles

- [affectedByGravity](scnparticlesystem/isaffectedbygravity.md): A Boolean value that determines whether gravity, as defined by the scene’s physics simulation, affects the motion of particles.
- [affectedByPhysicsFields](scnparticlesystem/isaffectedbyphysicsfields.md): A Boolean value that determines whether physics fields in the scene affect the motion of particles.
- [colliderNodes](scnparticlesystem/collidernodes.md): The nodes whose geometry the system’s particles can collide with.
- [particleDiesOnCollision](scnparticlesystem/particlediesoncollision.md): A Boolean value that determines whether particles are removed from the scene upon colliding with another object.
- [acceleration](scnparticlesystem/acceleration.md): The constant acceleration vector, in units per second per second, applied to all particles in the system. Animatable.
- [dampingFactor](scnparticlesystem/dampingfactor.md): A factor that slows particles relative to their velocity. Animatable.
- [particleMass](scnparticlesystem/particlemass.md): The mass, in kilograms, of each particle in the system. Animatable.
- [particleMassVariation](scnparticlesystem/particlemassvariation.md): The range, in kilograms, of randomized particle masses. Animatable.
- [particleCharge](scnparticlesystem/particlecharge.md): The electric charge, in coulombs, of each particle in the system. Animatable.
- [particleChargeVariation](scnparticlesystem/particlechargevariation.md): The range, in coulombs, of randomized particle charges. Animatable.
- [particleBounce](scnparticlesystem/particlebounce.md): The restitution coefficient of each particle in the system. Animatable.
- [particleBounceVariation](scnparticlesystem/particlebouncevariation.md): The range of randomized restitution coefficients for particles. Animatable.
- [particleFriction](scnparticlesystem/particlefriction.md): The friction coefficient of each particle in the system. Animatable.
- [particleFrictionVariation](scnparticlesystem/particlefrictionvariation.md): The range of randomized friction coefficients for particles. Animatable.

### Spawning Additional Particle Systems

- [systemSpawnedOnCollision](scnparticlesystem/systemspawnedoncollision.md): Another particle system to be added to the scene when a particle collides with scene geometry.
- [systemSpawnedOnDying](scnparticlesystem/systemspawnedondying.md): Another particle system to be added to the scene when a particle dies.
- [systemSpawnedOnLiving](scnparticlesystem/systemspawnedonliving.md): Another particle system to be added to the scene for each living particle in the system.

### Managing Particle Rendering

- [blendMode](scnparticlesystem/blendmode.md): The blending mode for compositing particle images into the rendered scene.
- [SCNParticleBlendMode](scnparticleblendmode.md): Options for combining source and destination pixel colors when compositing particles during rendering, used by the [blendMode](scnparticlesystem/blendmode.md) property.
- [orientationMode](scnparticlesystem/orientationmode.md): The mode defining whether and how particles may rotate.
- [SCNParticleOrientationMode](scnparticleorientationmode.md): Options for restricting the orientation of particles, used by the [orientationMode](scnparticlesystem/orientationmode.md) property.
- [sortingMode](scnparticlesystem/sortingmode.md): The mode defining the order in which SceneKit renders the system’s particles.
- [SCNParticleSortingMode](scnparticlesortingmode.md): Options for the rendering order of particles, used by the [sortingMode](scnparticlesystem/sortingmode.md) property.
- [lightingEnabled](scnparticlesystem/islightingenabled.md): A Boolean value that determines whether SceneKit applies lighting to particle images when rendering.
- [blackPassEnabled](scnparticlesystem/isblackpassenabled.md): A Boolean value that determines whether SceneKit renders particles in black before rendering the particle image.

### Controlling Particle Simulation

- [local](scnparticlesystem/islocal.md): A Boolean value that specifies whether the particle simulation runs in the local coordinate space of the node containing it.
- [reset](scnparticlesystem/reset%28%29.md): Returns the particle system to its initial state.
- [speedFactor](scnparticlesystem/speedfactor.md): A multiplier for the speed at which SceneKit runs the particle simulation. Animatable.

### Modifying Particles in Response to Particle System Events

- [handleEvent:forProperties:withBlock:](scnparticlesystem/handle%28__forproperties_handler_%29.md): Adds a block that modifies particle properties, to be executed at a specified event in the lifetimes of particles in the system.
- [SCNParticleEvent](scnparticleevent.md): Significant events in the life spans of simulate particles, used by the [handleEvent:forProperties:withBlock:](scnparticlesystem/handle%28__forproperties_handler_%29.md) method.
- [SCNParticleEventBlock](scnparticleeventblock.md): The signature for blocks called by SceneKit in response to significant events during particle simulation, used by the [handleEvent:forProperties:withBlock:](scnparticlesystem/handle%28__forproperties_handler_%29.md) method.

### Modifying Particles Over Time

- [propertyControllers](scnparticlesystem/propertycontrollers.md): A dictionary that optionally associates particle properties with objects that animate a property’s value for each particle.
- [addModifierForProperties:atStage:withBlock:](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md): Adds a block that modifies particle properties, to be executed each time SceneKit renders a frame.
- [removeModifiersOfStage:](scnparticlesystem/removemodifiers%28at_%29.md): Removes particle modifier blocks for the specified stage of the particle simulation.
- [removeAllModifiers](scnparticlesystem/removeallmodifiers%28%29.md): Removes all particle modifier blocks associated with the particle system.
- [SCNParticleProperty](scnparticlesystem/particleproperty.md): Keys identifying properties of individual particles, used by the [propertyControllers](scnparticlesystem/propertycontrollers.md) dictionary and the [handleEvent:forProperties:withBlock:](scnparticlesystem/handle%28__forproperties_handler_%29.md) and [addModifierForProperties:atStage:withBlock:](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) methods.
- [SCNParticleModifierStage](scnparticlemodifierstage.md): Stages of SceneKit’s particle simulation process into which you can insert modifier blocks, used by the [addModifierForProperties:atStage:withBlock:](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.
- [SCNParticleModifierBlock](scnparticlemodifierblock.md): The signature for blocks called by SceneKit to modify particle properties on each frame of simulation, used by the [addModifierForProperties:atStage:withBlock:](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.

### Sample Code

Example projects making use of SceneKit particle systems.

- [Building a document browser app for custom file formats](../uikit/building-a-document-browser-app-for-custom-file-formats.md): Implement a custom document file format to manage user interactions with files on different cloud storage providers.

### Instance Properties

- [orientationDirection](scnparticlesystem/orientationdirection.md)
- [particleIntensity](scnparticlesystem/particleintensity.md)
- [particleIntensityVariation](scnparticlesystem/particleintensityvariation.md)
- [writesToDepthBuffer](scnparticlesystem/writestodepthbuffer.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)

## See Also

### Particle Systems

- [SCNParticlePropertyController](scnparticlepropertycontroller.md): An animation for a single property of the individual particles rendered by a particle system.
