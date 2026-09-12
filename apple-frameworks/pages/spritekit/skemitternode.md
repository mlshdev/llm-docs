> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode](https://developer.apple.com/documentation/spritekit/skemitternode)

# SKEmitterNode (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A source of various particle effects.

## Declaration

```swift
class SKEmitterNode
```

## Mentioned In

- [Using Keyframe Sequence to effect Custom Interpolation](using-keyframe-sequence-to-effect-custom-interpolation.md)
- [Creating Particle Effects](creating-particle-effects.md)
- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)
- [Animating Particle Properties Across Disparate Values](animating-particle-properties-across-disparate-values.md)

<a id="overview"></a>

## Overview

A [SKEmitterNode](skemitternode.md) object is a node that automatically creates and renders small particle sprites. Particles are privately owned by [SpriteKit](../spritekit.md)—your game cannot access the generated sprites. For example, you cannot add physics shapes to particles. Emitter nodes are often used to create smoke, fire, sparks, and other particle effects. A *particle* is similar to an [SKSpriteNode](skspritenode.md) object; it renders a textured or untextured image that is sized, colorized, and blended into the scene. However, particles differ from sprites in two important ways:

- A particle’s texture is always stretched uniformly.
- Particles are not represented by objects in SpriteKit. This means you cannot perform node-related tasks on particles, nor can you associate physics bodies with particles to make them interact with other content. Although there is no visible class representing particles added by the emitter node, you can think of a particle as having properties like any other object.

Particles are purely visual objects, and their behavior is entirely defined by the emitter node that created them. The emitter node contains many properties to control the behavior of the particles it generates, including:

- The birth rate and lifetime of the particle. You can also specify the order in which the particles are rendered and the maximum number of particles that are created before the emitter turns itself off.
- The starting values of the particle, including its position, orientation, color, and size. You can choose to have these starting values randomized.
- The changes to apply to the particle over its lifetime. Typically, these are specified as a rate of change over time. For example, you might specify that a particle rotates at a particular rate, in radians per second. The emitter automatically updates the particle data for each frame. In most cases, you can also create more sophisticated behaviors using keyframe sequences. For example, you might specify a keyframe sequence for a particle so that it starts out small, scales up to a larger size, then shrinks before dying.

## Topics

### First Steps

- [Creating Particle Effects](creating-particle-effects.md): Add particle effects to your app by creating repeatable particles in Xcode’s editor, or in code.

### Choosing Which Node in the Scene Emits Particles

Choose which node in the scene emits particles.

- [Changing the Location of Particles in Your Scene](changing-the-location-of-particles-in-your-scene.md): Set a target node from which SpriteKit creates particles.
- [targetNode](skemitternode/targetnode.md): The target node that renders the emitter’s particles.

### Controlling When Particles Are Created

- [advanceSimulationTime(\_:)](skemitternode/advancesimulationtime%28__%29.md): Advances the emitter particle simulation.
- [resetSimulation()](skemitternode/resetsimulation%28%29.md): Removes all existing particles and restarts the simulation.
- [particleBirthRate](skemitternode/particlebirthrate.md): The rate at which new particles are created.
- [numParticlesToEmit](skemitternode/numparticlestoemit.md): The number of particles the emitter should emit before stopping.

### Controlling the Rendering Order of an Emitter’s Particles

- [particleRenderOrder](skemitternode/particlerenderorder.md): The order in which the emitter’s particles are rendered.
- [SKParticleRenderOrder](skparticlerenderorder.md): The order to use when the emitter’s particles are rendered.

### Controlling Particle Lifetime

- [particleLifetime](skemitternode/particlelifetime.md): The average lifetime of a particle, in seconds.
- [particleLifetimeRange](skemitternode/particlelifetimerange.md): The range of allowed random values for a particle’s lifetime.

### Controlling Particle Position

- [particlePosition](skemitternode/particleposition.md): The average starting position for a particle.
- [particlePositionRange](skemitternode/particlepositionrange.md): The range of allowed random values for a particle’s position.
- [particleZPosition](skemitternode/particlezposition.md): The average starting depth of a particle.
- [particleZPositionRange](skemitternode/particlezpositionrange.md): Deprecated. The range of allowed random values for a particle’s depth.

### Controlling Particle Velocity and Acceleration

- [particleSpeed](skemitternode/particlespeed.md): The average initial speed of a new particle, in points per second.
- [particleSpeedRange](skemitternode/particlespeedrange.md): The range of allowed random values for a particle’s initial speed.
- [emissionAngle](skemitternode/emissionangle.md): The average initial direction of a particle, expressed as an angle in radians.
- [emissionAngleRange](skemitternode/emissionanglerange.md): The range of allowed random values for a particle’s initial direction, expressed as an angle in radians.
- [xAcceleration](skemitternode/xacceleration.md): The acceleration to apply to a particle’s horizontal velocity.
- [yAcceleration](skemitternode/yacceleration.md): The acceleration to apply to a particle’s vertical velocity.
- [particleZPositionSpeed](skemitternode/particlezpositionspeed.md): Deprecated. The speed at which the particle’s depth changes.

### Adjusting a Particle’s Rotation

- [particleRotation](skemitternode/particlerotation.md): The average initial rotation of a particle, expressed as an angle in radians.
- [particleRotationRange](skemitternode/particlerotationrange.md): The range of allowed random values for a particle’s initial rotation, expressed as an angle in radians.
- [particleRotationSpeed](skemitternode/particlerotationspeed.md): The speed at which a particle rotates, expressed in radians per second.

### Scaling Particles by a Factor

- [particleScale](skemitternode/particlescale.md): The average initial scale factor of a particle.
- [particleScaleRange](skemitternode/particlescalerange.md): The range of allowed random values for a particle’s initial scale.
- [particleScaleSpeed](skemitternode/particlescalespeed.md): The rate at which a particle’s scale factor changes per second.
- [particleScaleSequence](skemitternode/particlescalesequence.md): The sequence used to specify the scale factor of a particle over its lifetime.

### Changing a Particle’s Source Image and Size

- [particleTexture](skemitternode/particletexture.md): The texture to use to render a particle.
- [particleSize](skemitternode/particlesize.md): The starting size of each particle.

### Configuring Particle Color

- [particleColorSequence](skemitternode/particlecolorsequence.md): The sequence used to specify the color components of a particle over its lifetime.
- [particleColor](skemitternode/particlecolor.md): The average initial color for a particle.
- [particleColorAlphaRange](skemitternode/particlecoloralpharange.md): The range of allowed random values for the alpha component of a particle’s initial color.
- [particleColorBlueRange](skemitternode/particlecolorbluerange.md): The range of allowed random values for the blue component of a particle’s initial color.
- [particleColorGreenRange](skemitternode/particlecolorgreenrange.md): The range of allowed random values for the green component of a particle’s initial color.
- [particleColorRedRange](skemitternode/particlecolorredrange.md): The range of allowed random values for the red component of a particle’s initial color.
- [particleColorAlphaSpeed](skemitternode/particlecoloralphaspeed.md): The rate at which the alpha component of a particle’s color changes per second.
- [particleColorBlueSpeed](skemitternode/particlecolorbluespeed.md): The rate at which the blue component of a particle’s color changes per second.
- [particleColorGreenSpeed](skemitternode/particlecolorgreenspeed.md): The rate at which the green component of a particle’s color changes per second.
- [particleColorRedSpeed](skemitternode/particlecolorredspeed.md): The rate at which the red component of a particle’s color changes per second.

### Controlling How the Texture is Blended with Particle Color

- [particleColorBlendFactorSequence](skemitternode/particlecolorblendfactorsequence.md): The sequence used to specify the color blend factor of a particle over its lifetime.
- [particleColorBlendFactor](skemitternode/particlecolorblendfactor.md): The average starting value for the color blend factor.
- [particleColorBlendFactorRange](skemitternode/particlecolorblendfactorrange.md): The range of allowed random values for a particle’s starting color blend factor.
- [particleColorBlendFactorSpeed](skemitternode/particlecolorblendfactorspeed.md): The rate at which the color blend factor changes per second.

### Blending Particles with the Framebuffer

Change how an emitter uses an alpha value, such as additive blending, that results in the emitter being brighter than it was before.

- [particleBlendMode](skemitternode/particleblendmode.md): The blending mode used to blend particles into the framebuffer.
- [particleAlphaSequence](skemitternode/particlealphasequence.md): The sequence used to specify the alpha value of a particle over its lifetime.
- [particleAlpha](skemitternode/particlealpha.md): The average starting alpha value for a particle.
- [particleAlphaRange](skemitternode/particlealpharange.md): The range of allowed random values for a particle’s starting alpha value.
- [particleAlphaSpeed](skemitternode/particlealphaspeed.md): The rate at which the alpha value of a particle changes per second.

### Animating Particles

Change particles over time using actions or keyframe sequences.

- [Animating Particle Properties Across Disparate Values](animating-particle-properties-across-disparate-values.md): Supply keyframe sequences to do linear or nonlinear particle animations.
- [particleAction](skemitternode/particleaction.md): An action executed by new particles.

### Applying Physics Fields to the Particles

- [fieldBitMask](skemitternode/fieldbitmask.md): A mask that defines which categories of physics fields can exert forces on the particles.

### Taking Full Control of Particle Drawing with a Shader

- [Getting Started with Particle Shaders](getting-started-with-particle-shaders.md): Provide custom shader code to alter a particle’s look.
- [shader](skemitternode/shader.md): A custom shader used to determine how particles are rendered.
- [attributeValues](skemitternode/attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue(\_:forAttribute:)](skemitternode/setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [value(forAttributeNamed:)](skemitternode/value%28forattributenamed_%29.md): Gets the value of a shader attribute.

### Maximizing Particle Run-Time Performance

- [Optimizing Emitter Node Performance](optimizing-emitter-node-performance.md): Use proven methods to rapidly create and play back performant particle effects.

## Relationships

### Inherits From

- [SKNode](sknode.md)

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
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Nodes that Draw

- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md): Structure your nodes for maximum performance.
- [SKSpriteNode](skspritenode.md): An image or solid color.
- [SKShapeNode](skshapenode.md): A mathematical shape that can be stroked or filled.
- [SKLabelNode](sklabelnode.md): A graphical element that draws text.
- [SKVideoNode](skvideonode.md): A graphical element that plays video content.
- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.
- [SK3DNode](sk3dnode.md): 3D SceneKit content drawn as a flattened sprite.

# SKEmitterNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A source of various particle effects.

## Declaration

```objectivec
@interface SKEmitterNode : SKNode
```

## Mentioned In

- [Using Keyframe Sequence to effect Custom Interpolation](using-keyframe-sequence-to-effect-custom-interpolation.md)
- [Creating Particle Effects](creating-particle-effects.md)
- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)
- [Animating Particle Properties Across Disparate Values](animating-particle-properties-across-disparate-values.md)

<a id="overview"></a>

## Overview

A [SKEmitterNode](skemitternode.md) object is a node that automatically creates and renders small particle sprites. Particles are privately owned by [SpriteKit](../spritekit.md)—your game cannot access the generated sprites. For example, you cannot add physics shapes to particles. Emitter nodes are often used to create smoke, fire, sparks, and other particle effects. A *particle* is similar to an [SKSpriteNode](skspritenode.md) object; it renders a textured or untextured image that is sized, colorized, and blended into the scene. However, particles differ from sprites in two important ways:

- A particle’s texture is always stretched uniformly.
- Particles are not represented by objects in SpriteKit. This means you cannot perform node-related tasks on particles, nor can you associate physics bodies with particles to make them interact with other content. Although there is no visible class representing particles added by the emitter node, you can think of a particle as having properties like any other object.

Particles are purely visual objects, and their behavior is entirely defined by the emitter node that created them. The emitter node contains many properties to control the behavior of the particles it generates, including:

- The birth rate and lifetime of the particle. You can also specify the order in which the particles are rendered and the maximum number of particles that are created before the emitter turns itself off.
- The starting values of the particle, including its position, orientation, color, and size. You can choose to have these starting values randomized.
- The changes to apply to the particle over its lifetime. Typically, these are specified as a rate of change over time. For example, you might specify that a particle rotates at a particular rate, in radians per second. The emitter automatically updates the particle data for each frame. In most cases, you can also create more sophisticated behaviors using keyframe sequences. For example, you might specify a keyframe sequence for a particle so that it starts out small, scales up to a larger size, then shrinks before dying.

## Topics

### First Steps

- [Creating Particle Effects](creating-particle-effects.md): Add particle effects to your app by creating repeatable particles in Xcode’s editor, or in code.

### Choosing Which Node in the Scene Emits Particles

Choose which node in the scene emits particles.

- [Changing the Location of Particles in Your Scene](changing-the-location-of-particles-in-your-scene.md): Set a target node from which SpriteKit creates particles.
- [targetNode](skemitternode/targetnode.md): The target node that renders the emitter’s particles.

### Controlling When Particles Are Created

- [advanceSimulationTime:](skemitternode/advancesimulationtime%28__%29.md): Advances the emitter particle simulation.
- [resetSimulation](skemitternode/resetsimulation%28%29.md): Removes all existing particles and restarts the simulation.
- [particleBirthRate](skemitternode/particlebirthrate.md): The rate at which new particles are created.
- [numParticlesToEmit](skemitternode/numparticlestoemit.md): The number of particles the emitter should emit before stopping.

### Controlling the Rendering Order of an Emitter’s Particles

- [particleRenderOrder](skemitternode/particlerenderorder.md): The order in which the emitter’s particles are rendered.
- [SKParticleRenderOrder](skparticlerenderorder.md): The order to use when the emitter’s particles are rendered.

### Controlling Particle Lifetime

- [particleLifetime](skemitternode/particlelifetime.md): The average lifetime of a particle, in seconds.
- [particleLifetimeRange](skemitternode/particlelifetimerange.md): The range of allowed random values for a particle’s lifetime.

### Controlling Particle Position

- [particlePosition](skemitternode/particleposition.md): The average starting position for a particle.
- [particlePositionRange](skemitternode/particlepositionrange.md): The range of allowed random values for a particle’s position.
- [particleZPosition](skemitternode/particlezposition.md): The average starting depth of a particle.
- [particleZPositionRange](skemitternode/particlezpositionrange.md): Deprecated. The range of allowed random values for a particle’s depth.

### Controlling Particle Velocity and Acceleration

- [particleSpeed](skemitternode/particlespeed.md): The average initial speed of a new particle, in points per second.
- [particleSpeedRange](skemitternode/particlespeedrange.md): The range of allowed random values for a particle’s initial speed.
- [emissionAngle](skemitternode/emissionangle.md): The average initial direction of a particle, expressed as an angle in radians.
- [emissionAngleRange](skemitternode/emissionanglerange.md): The range of allowed random values for a particle’s initial direction, expressed as an angle in radians.
- [xAcceleration](skemitternode/xacceleration.md): The acceleration to apply to a particle’s horizontal velocity.
- [yAcceleration](skemitternode/yacceleration.md): The acceleration to apply to a particle’s vertical velocity.
- [particleZPositionSpeed](skemitternode/particlezpositionspeed.md): Deprecated. The speed at which the particle’s depth changes.

### Adjusting a Particle’s Rotation

- [particleRotation](skemitternode/particlerotation.md): The average initial rotation of a particle, expressed as an angle in radians.
- [particleRotationRange](skemitternode/particlerotationrange.md): The range of allowed random values for a particle’s initial rotation, expressed as an angle in radians.
- [particleRotationSpeed](skemitternode/particlerotationspeed.md): The speed at which a particle rotates, expressed in radians per second.

### Scaling Particles by a Factor

- [particleScale](skemitternode/particlescale.md): The average initial scale factor of a particle.
- [particleScaleRange](skemitternode/particlescalerange.md): The range of allowed random values for a particle’s initial scale.
- [particleScaleSpeed](skemitternode/particlescalespeed.md): The rate at which a particle’s scale factor changes per second.
- [particleScaleSequence](skemitternode/particlescalesequence.md): The sequence used to specify the scale factor of a particle over its lifetime.

### Changing a Particle’s Source Image and Size

- [particleTexture](skemitternode/particletexture.md): The texture to use to render a particle.
- [particleSize](skemitternode/particlesize.md): The starting size of each particle.

### Configuring Particle Color

- [particleColorSequence](skemitternode/particlecolorsequence.md): The sequence used to specify the color components of a particle over its lifetime.
- [particleColor](skemitternode/particlecolor.md): The average initial color for a particle.
- [particleColorAlphaRange](skemitternode/particlecoloralpharange.md): The range of allowed random values for the alpha component of a particle’s initial color.
- [particleColorBlueRange](skemitternode/particlecolorbluerange.md): The range of allowed random values for the blue component of a particle’s initial color.
- [particleColorGreenRange](skemitternode/particlecolorgreenrange.md): The range of allowed random values for the green component of a particle’s initial color.
- [particleColorRedRange](skemitternode/particlecolorredrange.md): The range of allowed random values for the red component of a particle’s initial color.
- [particleColorAlphaSpeed](skemitternode/particlecoloralphaspeed.md): The rate at which the alpha component of a particle’s color changes per second.
- [particleColorBlueSpeed](skemitternode/particlecolorbluespeed.md): The rate at which the blue component of a particle’s color changes per second.
- [particleColorGreenSpeed](skemitternode/particlecolorgreenspeed.md): The rate at which the green component of a particle’s color changes per second.
- [particleColorRedSpeed](skemitternode/particlecolorredspeed.md): The rate at which the red component of a particle’s color changes per second.

### Controlling How the Texture is Blended with Particle Color

- [particleColorBlendFactorSequence](skemitternode/particlecolorblendfactorsequence.md): The sequence used to specify the color blend factor of a particle over its lifetime.
- [particleColorBlendFactor](skemitternode/particlecolorblendfactor.md): The average starting value for the color blend factor.
- [particleColorBlendFactorRange](skemitternode/particlecolorblendfactorrange.md): The range of allowed random values for a particle’s starting color blend factor.
- [particleColorBlendFactorSpeed](skemitternode/particlecolorblendfactorspeed.md): The rate at which the color blend factor changes per second.

### Blending Particles with the Framebuffer

Change how an emitter uses an alpha value, such as additive blending, that results in the emitter being brighter than it was before.

- [particleBlendMode](skemitternode/particleblendmode.md): The blending mode used to blend particles into the framebuffer.
- [particleAlphaSequence](skemitternode/particlealphasequence.md): The sequence used to specify the alpha value of a particle over its lifetime.
- [particleAlpha](skemitternode/particlealpha.md): The average starting alpha value for a particle.
- [particleAlphaRange](skemitternode/particlealpharange.md): The range of allowed random values for a particle’s starting alpha value.
- [particleAlphaSpeed](skemitternode/particlealphaspeed.md): The rate at which the alpha value of a particle changes per second.

### Animating Particles

Change particles over time using actions or keyframe sequences.

- [Animating Particle Properties Across Disparate Values](animating-particle-properties-across-disparate-values.md): Supply keyframe sequences to do linear or nonlinear particle animations.
- [particleAction](skemitternode/particleaction.md): An action executed by new particles.

### Applying Physics Fields to the Particles

- [fieldBitMask](skemitternode/fieldbitmask.md): A mask that defines which categories of physics fields can exert forces on the particles.

### Taking Full Control of Particle Drawing with a Shader

- [Getting Started with Particle Shaders](getting-started-with-particle-shaders.md): Provide custom shader code to alter a particle’s look.
- [shader](skemitternode/shader.md): A custom shader used to determine how particles are rendered.
- [attributeValues](skemitternode/attributevalues.md): The values of each attribute associated with the node’s attached shader.
- [setValue:forAttributeNamed:](skemitternode/setvalue%28__forattribute_%29.md): Sets an attribute value for an attached shader.
- [valueForAttributeNamed:](skemitternode/value%28forattributenamed_%29.md): Gets the value of a shader attribute.

### Maximizing Particle Run-Time Performance

- [Optimizing Emitter Node Performance](optimizing-emitter-node-performance.md): Use proven methods to rapidly create and play back performant particle effects.

## Relationships

### Inherits From

- [SKNode](sknode.md)

## See Also

### Nodes that Draw

- [Maximizing Node Drawing Performance](maximizing-node-drawing-performance.md): Structure your nodes for maximum performance.
- [SKSpriteNode](skspritenode.md): An image or solid color.
- [SKShapeNode](skshapenode.md): A mathematical shape that can be stroked or filled.
- [SKLabelNode](sklabelnode.md): A graphical element that draws text.
- [SKVideoNode](skvideonode.md): A graphical element that plays video content.
- [SKTileMapNode](sktilemapnode.md): A two-dimensional array of images.
- [SK3DNode](sk3dnode.md): 3D SceneKit content drawn as a flattened sprite.
