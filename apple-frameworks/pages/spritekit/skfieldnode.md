> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skfieldnode](https://developer.apple.com/documentation/spritekit/skfieldnode)

# SKFieldNode (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A node that applies physics effects to nearby nodes.

## Declaration

```swift
class SKFieldNode
```

## Mentioned In

- [Getting Started with Physics](getting-started-with-physics.md)
- [Adding Physics Fields to a Scene](adding-physics-fields-to-a-scene.md)

<a id="overview"></a>

## Overview

There are many different kinds of field nodes that can be created, each with different effects. The [SKFieldNode](skfieldnode.md) section lists the field types you can create using SpriteKit, including a type that allows you to apply custom forces to physics bodies. Instantiate the appropriate kind of field node and then add it to the scene’s node tree.

When the scene simulates physics effects, a field node applies its effect to a physics body so long as the following are true:

- The field node is in the scene’s node tree.
- The field node’s [isEnabled](skfieldnode/isenabled.md) property is [true](https://developer.apple.com/documentation/swift/true).
- The physics body is attached to a node that is in the scene’s node tree.
- The physics body is located inside the field node’s region (see [region](skfieldnode/region.md)).
- The physics body is not located inside the region of another field node whose [isExclusive](skfieldnode/isexclusive.md) property is set to [true](https://developer.apple.com/documentation/swift/true).
- A logical AND operation between the field node’s [categoryBitMask](skfieldnode/categorybitmask.md) property and the physics body’s [fieldBitMask](skphysicsbody/fieldbitmask.md) property results in a nonzero value.

> **Tip**

>  While it is useful to know that SpriteKit measures items in the International System of Units, the precise numbers are not that important. It doesn’t matter much whether your rocket ship weights 1 kilogram or 1,000,000 kilograms, as long as the mass is consistent with other physics values used in the game. Often, proportions are more important than the actual values being used.

## Topics

### Getting Started with Field Nodes

- [Adding Physics Fields to a Scene](adding-physics-fields-to-a-scene.md): Create effects that interact with your scene’s physics bodies, such as magnetism, repulsion, friction, or a vortex.

### Creating Field Nodes

- [dragField()](skfieldnode/dragfield%28%29.md): Creates a field node that applies a force that resists the motion of physics bodies.
- [electricField()](skfieldnode/electricfield%28%29.md): Creates a field node that applies an electrical force proportional to the electrical charge of physics bodies.
- [linearGravityField(withVector:)](skfieldnode/lineargravityfield%28withvector_%29.md): Creates a field node that accelerates physics bodies in a specific direction.
- [magneticField()](skfieldnode/magneticfield%28%29.md): Creates a field node that applies a magnetic force based on the velocity and electrical charge of the physics bodies.
- [noiseField(withSmoothness:animationSpeed:)](skfieldnode/noisefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [radialGravityField()](skfieldnode/radialgravityfield%28%29.md): Creates a field node that accelerates physics bodies toward the field node.
- [springField()](skfieldnode/springfield%28%29.md): Creates a field node that applies a spring-like force that pulls physics bodies toward the field node.
- [turbulenceField(withSmoothness:animationSpeed:)](skfieldnode/turbulencefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [velocityField(with:)](skfieldnode/velocityfield%28with_%29.md): Creates a field node that sets the velocity of physics bodies that enter the node’s area based on the pixel values of a texture.
- [velocityField(withVector:)](skfieldnode/velocityfield%28withvector_%29.md): Creates a field node that gives physics bodies a constant velocity.
- [vortexField()](skfieldnode/vortexfield%28%29.md): Creates a field node that applies a perpendicular force to physics bodies.
- [customField(evaluationBlock:)](skfieldnode/customfield%28evaluationblock_%29.md): Creates a field node that calculates and applies a custom force to the physics body.
- [SKFieldForceEvaluator](skfieldforceevaluator.md): The definition for a custom block that processes a single physics body’s interaction with the field.

### Determining Which Physics Bodies Are Affected by the Field

- [isEnabled](skfieldnode/isenabled.md): A Boolean value that indicates whether the field is active.
- [isExclusive](skfieldnode/isexclusive.md): A Boolean value that indicates whether the field node should override all other field nodes that might otherwise affect physics bodies.
- [region](skfieldnode/region.md): The area (relative to the node’s origin) that the field affects.
- [minimumRadius](skfieldnode/minimumradius.md): The minimum value for distance-based effects.
- [categoryBitMask](skfieldnode/categorybitmask.md): A mask that defines which categories this field belongs to.

### Configuring the Strength of the Field

- [strength](skfieldnode/strength.md): The strength of the field.
- [falloff](skfieldnode/falloff.md): The exponent that defines the rate of decay for the strength of the field as the distance increases between the node and the physics body being affected.

### Configuring Other Field Properties

These properties are associated with specific types of field nodes.

- [animationSpeed](skfieldnode/animationspeed.md): The rate at which a noise or turbulence field node changes.
- [smoothness](skfieldnode/smoothness.md): The smoothness of the noise used to generate the forces.
- [direction](skfieldnode/direction.md): The direction of a velocity field node.
- [texture](skfieldnode/texture.md): A normal texture that specifies the velocities at different points in a velocity field node.

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

### Physics Simulation

- [Getting Started with Physics](getting-started-with-physics.md): Simulate gravity, acceleration, collision detection, or joints.
- [SKPhysicsWorld](skphysicsworld.md): The driver of the physics engine in a scene; it exposes the ability for you to configure and query the physics system.
- [SKPhysicsBody](skphysicsbody.md): An object that adds physics simulation to a node.
- [SKPhysicsContact](skphysicscontact.md): A description of the contact between two physics bodies.
- [SKPhysicsContactDelegate](skphysicscontactdelegate.md): Methods your app can implement to respond when physics bodies come into contact.

# SKFieldNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A node that applies physics effects to nearby nodes.

## Declaration

```objectivec
@interface SKFieldNode : SKNode
```

## Mentioned In

- [Getting Started with Physics](getting-started-with-physics.md)
- [Adding Physics Fields to a Scene](adding-physics-fields-to-a-scene.md)

<a id="overview"></a>

## Overview

There are many different kinds of field nodes that can be created, each with different effects. The [SKFieldNode](skfieldnode.md) section lists the field types you can create using SpriteKit, including a type that allows you to apply custom forces to physics bodies. Instantiate the appropriate kind of field node and then add it to the scene’s node tree.

When the scene simulates physics effects, a field node applies its effect to a physics body so long as the following are true:

- The field node is in the scene’s node tree.
- The field node’s [enabled](skfieldnode/isenabled.md) property is [true](https://developer.apple.com/documentation/swift/true).
- The physics body is attached to a node that is in the scene’s node tree.
- The physics body is located inside the field node’s region (see [region](skfieldnode/region.md)).
- The physics body is not located inside the region of another field node whose [exclusive](skfieldnode/isexclusive.md) property is set to [true](https://developer.apple.com/documentation/swift/true).
- A logical AND operation between the field node’s [categoryBitMask](skfieldnode/categorybitmask.md) property and the physics body’s [fieldBitMask](skphysicsbody/fieldbitmask.md) property results in a nonzero value.

> **Tip**

>  While it is useful to know that SpriteKit measures items in the International System of Units, the precise numbers are not that important. It doesn’t matter much whether your rocket ship weights 1 kilogram or 1,000,000 kilograms, as long as the mass is consistent with other physics values used in the game. Often, proportions are more important than the actual values being used.

## Topics

### Getting Started with Field Nodes

- [Adding Physics Fields to a Scene](adding-physics-fields-to-a-scene.md): Create effects that interact with your scene’s physics bodies, such as magnetism, repulsion, friction, or a vortex.

### Creating Field Nodes

- [dragField](skfieldnode/dragfield%28%29.md): Creates a field node that applies a force that resists the motion of physics bodies.
- [electricField](skfieldnode/electricfield%28%29.md): Creates a field node that applies an electrical force proportional to the electrical charge of physics bodies.
- [linearGravityFieldWithVector:](skfieldnode/lineargravityfield%28withvector_%29.md): Creates a field node that accelerates physics bodies in a specific direction.
- [magneticField](skfieldnode/magneticfield%28%29.md): Creates a field node that applies a magnetic force based on the velocity and electrical charge of the physics bodies.
- [noiseFieldWithSmoothness:animationSpeed:](skfieldnode/noisefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [radialGravityField](skfieldnode/radialgravityfield%28%29.md): Creates a field node that accelerates physics bodies toward the field node.
- [springField](skfieldnode/springfield%28%29.md): Creates a field node that applies a spring-like force that pulls physics bodies toward the field node.
- [turbulenceFieldWithSmoothness:animationSpeed:](skfieldnode/turbulencefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [velocityFieldWithTexture:](skfieldnode/velocityfield%28with_%29.md): Creates a field node that sets the velocity of physics bodies that enter the node’s area based on the pixel values of a texture.
- [velocityFieldWithVector:](skfieldnode/velocityfield%28withvector_%29.md): Creates a field node that gives physics bodies a constant velocity.
- [vortexField](skfieldnode/vortexfield%28%29.md): Creates a field node that applies a perpendicular force to physics bodies.
- [customFieldWithEvaluationBlock:](skfieldnode/customfield%28evaluationblock_%29.md): Creates a field node that calculates and applies a custom force to the physics body.
- [SKFieldForceEvaluator](skfieldforceevaluator.md): The definition for a custom block that processes a single physics body’s interaction with the field.

### Determining Which Physics Bodies Are Affected by the Field

- [enabled](skfieldnode/isenabled.md): A Boolean value that indicates whether the field is active.
- [exclusive](skfieldnode/isexclusive.md): A Boolean value that indicates whether the field node should override all other field nodes that might otherwise affect physics bodies.
- [region](skfieldnode/region.md): The area (relative to the node’s origin) that the field affects.
- [minimumRadius](skfieldnode/minimumradius.md): The minimum value for distance-based effects.
- [categoryBitMask](skfieldnode/categorybitmask.md): A mask that defines which categories this field belongs to.

### Configuring the Strength of the Field

- [strength](skfieldnode/strength.md): The strength of the field.
- [falloff](skfieldnode/falloff.md): The exponent that defines the rate of decay for the strength of the field as the distance increases between the node and the physics body being affected.

### Configuring Other Field Properties

These properties are associated with specific types of field nodes.

- [animationSpeed](skfieldnode/animationspeed.md): The rate at which a noise or turbulence field node changes.
- [smoothness](skfieldnode/smoothness.md): The smoothness of the noise used to generate the forces.
- [direction](skfieldnode/direction.md): The direction of a velocity field node.
- [texture](skfieldnode/texture.md): A normal texture that specifies the velocities at different points in a velocity field node.

## Relationships

### Inherits From

- [SKNode](sknode.md)

## See Also

### Physics Simulation

- [Getting Started with Physics](getting-started-with-physics.md): Simulate gravity, acceleration, collision detection, or joints.
- [SKPhysicsWorld](skphysicsworld.md): The driver of the physics engine in a scene; it exposes the ability for you to configure and query the physics system.
- [SKPhysicsBody](skphysicsbody.md): An object that adds physics simulation to a node.
- [SKPhysicsContact](skphysicscontact.md): A description of the contact between two physics bodies.
- [SKPhysicsContactDelegate](skphysicscontactdelegate.md): Methods your app can implement to respond when physics bodies come into contact.
