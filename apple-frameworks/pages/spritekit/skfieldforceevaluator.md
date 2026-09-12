> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skfieldforceevaluator](https://developer.apple.com/documentation/spritekit/skfieldforceevaluator)

# SKFieldForceEvaluator (Swift)

**Framework:** SpriteKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The definition for a custom block that processes a single physics body’s interaction with the field.

## Declaration

```swift
typealias SKFieldForceEvaluator = (vector_float3, vector_float3, Float, Float, TimeInterval) -> vector_float3
```

<a id="Discussion"></a>

## Discussion

The block parameters are defined as follows:

- **position**: The position of the physics body. The coordinates are assumed to be in the following order: `x`, `y`, `z`. In SpriteKit, the `z` coordinate is always `0`.
- **velocity**: The velocity of the physics body. The coordinates are assumed to be in the following order: `dx`, `dy`, `dz`. In SpriteKit, the `dz` coordinate is always `0`.
- **mass**: The mass of the physics body.
- **charge**: The charge of the physics body.
- **time**: The amount of time that has passed since the last time the simulation was executed.

Your block should perform any force calculations you are interested in and return the resulting force.

> **Important**

>  Although your app can use the z coordinate of any of the float vectors to perform its calculations, the z value of the output vector is ignored by SpriteKit. Essentially, this means that you can use field effects only to animate a node’s [position](sknode/position.md) property, not its [zPosition](sknode/zposition.md) property.

## See Also

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

# SKFieldForceEvaluator (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The definition for a custom block that processes a single physics body’s interaction with the field.

## Declaration

```objectivec
typedef float (^)(float __attribute__((ext_vector_type(3))), float __attribute__((ext_vector_type(3))), float, float, double) __attribute__((ext_vector_type(3))) SKFieldForceEvaluator;
```

<a id="Discussion"></a>

## Discussion

The block parameters are defined as follows:

- **position**: The position of the physics body. The coordinates are assumed to be in the following order: `x`, `y`, `z`. In SpriteKit, the `z` coordinate is always `0`.
- **velocity**: The velocity of the physics body. The coordinates are assumed to be in the following order: `dx`, `dy`, `dz`. In SpriteKit, the `dz` coordinate is always `0`.
- **mass**: The mass of the physics body.
- **charge**: The charge of the physics body.
- **time**: The amount of time that has passed since the last time the simulation was executed.

Your block should perform any force calculations you are interested in and return the resulting force.

> **Important**

>  Although your app can use the z coordinate of any of the float vectors to perform its calculations, the z value of the output vector is ignored by SpriteKit. Essentially, this means that you can use field effects only to animate a node’s [position](sknode/position.md) property, not its [zPosition](sknode/zposition.md) property.

## See Also

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
