> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skfieldnode/vortexfield()](https://developer.apple.com/documentation/spritekit/skfieldnode/vortexfield())

# vortexField() (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a field node that applies a perpendicular force to physics bodies.

## Declaration

```swift
class func vortexField() -> SKFieldNode
```

<a id="return-value"></a>

## Return Value

A new vortex field node.

<a id="Discussion"></a>

## Discussion

The strength of the field measures the acceleration of the field in meters per second squared (meaning that similar to gravity, all physics bodies are affected equally). The physics body is accelerated along the perpendicular of the line between the field node’s position and the position of the physics body. A positive field strength indicates the body is accelerated in a counter-clockwise direction. The [falloff](falloff.md) property of a vortex field node is set by default to `2`.

## See Also

### Creating Field Nodes

- [dragField()](dragfield%28%29.md): Creates a field node that applies a force that resists the motion of physics bodies.
- [electricField()](electricfield%28%29.md): Creates a field node that applies an electrical force proportional to the electrical charge of physics bodies.
- [linearGravityField(withVector:)](lineargravityfield%28withvector_%29.md): Creates a field node that accelerates physics bodies in a specific direction.
- [magneticField()](magneticfield%28%29.md): Creates a field node that applies a magnetic force based on the velocity and electrical charge of the physics bodies.
- [noiseField(withSmoothness:animationSpeed:)](noisefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [radialGravityField()](radialgravityfield%28%29.md): Creates a field node that accelerates physics bodies toward the field node.
- [springField()](springfield%28%29.md): Creates a field node that applies a spring-like force that pulls physics bodies toward the field node.
- [turbulenceField(withSmoothness:animationSpeed:)](turbulencefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [velocityField(with:)](velocityfield%28with_%29.md): Creates a field node that sets the velocity of physics bodies that enter the node’s area based on the pixel values of a texture.
- [velocityField(withVector:)](velocityfield%28withvector_%29.md): Creates a field node that gives physics bodies a constant velocity.
- [customField(evaluationBlock:)](customfield%28evaluationblock_%29.md): Creates a field node that calculates and applies a custom force to the physics body.
- [SKFieldForceEvaluator](../skfieldforceevaluator.md): The definition for a custom block that processes a single physics body’s interaction with the field.

# vortexField (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a field node that applies a perpendicular force to physics bodies.

## Declaration

```objectivec
+ (SKFieldNode *) vortexField;
```

<a id="return-value"></a>

## Return Value

A new vortex field node.

<a id="Discussion"></a>

## Discussion

The strength of the field measures the acceleration of the field in meters per second squared (meaning that similar to gravity, all physics bodies are affected equally). The physics body is accelerated along the perpendicular of the line between the field node’s position and the position of the physics body. A positive field strength indicates the body is accelerated in a counter-clockwise direction. The [falloff](falloff.md) property of a vortex field node is set by default to `2`.

## See Also

### Creating Field Nodes

- [dragField](dragfield%28%29.md): Creates a field node that applies a force that resists the motion of physics bodies.
- [electricField](electricfield%28%29.md): Creates a field node that applies an electrical force proportional to the electrical charge of physics bodies.
- [linearGravityFieldWithVector:](lineargravityfield%28withvector_%29.md): Creates a field node that accelerates physics bodies in a specific direction.
- [magneticField](magneticfield%28%29.md): Creates a field node that applies a magnetic force based on the velocity and electrical charge of the physics bodies.
- [noiseFieldWithSmoothness:animationSpeed:](noisefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [radialGravityField](radialgravityfield%28%29.md): Creates a field node that accelerates physics bodies toward the field node.
- [springField](springfield%28%29.md): Creates a field node that applies a spring-like force that pulls physics bodies toward the field node.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [velocityFieldWithTexture:](velocityfield%28with_%29.md): Creates a field node that sets the velocity of physics bodies that enter the node’s area based on the pixel values of a texture.
- [velocityFieldWithVector:](velocityfield%28withvector_%29.md): Creates a field node that gives physics bodies a constant velocity.
- [customFieldWithEvaluationBlock:](customfield%28evaluationblock_%29.md): Creates a field node that calculates and applies a custom force to the physics body.
- [SKFieldForceEvaluator](../skfieldforceevaluator.md): The definition for a custom block that processes a single physics body’s interaction with the field.
