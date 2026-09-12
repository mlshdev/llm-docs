> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skfieldnode/lineargravityfield(withvector:)](https://developer.apple.com/documentation/spritekit/skfieldnode/lineargravityfield(withvector:))

# linearGravityField(withVector:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a field node that accelerates physics bodies in a specific direction.

## Declaration

```swift
class func linearGravityField(withVector direction: vector_float3) -> SKFieldNode
```

## Parameters

- `direction`: The direction and magnitude of the gravitational force. The values represent the acceleration of the field in meters per second squared. For example, to simulate earth’s gravity, specify `(0, -9.8, 0)`. The `z` component on the vector is ignored.

<a id="return-value"></a>

## Return Value

A new linear gravity field node.

<a id="Discussion"></a>

## Discussion

If the field node is rotated, the direction of its gravity field is also rotated. The calculated force is proportional to the physics body’s mass (meaning that the acceleration applied to all affected physics bodies is a constant).

## See Also

### Creating Field Nodes

- [dragField()](dragfield%28%29.md): Creates a field node that applies a force that resists the motion of physics bodies.
- [electricField()](electricfield%28%29.md): Creates a field node that applies an electrical force proportional to the electrical charge of physics bodies.
- [magneticField()](magneticfield%28%29.md): Creates a field node that applies a magnetic force based on the velocity and electrical charge of the physics bodies.
- [noiseField(withSmoothness:animationSpeed:)](noisefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [radialGravityField()](radialgravityfield%28%29.md): Creates a field node that accelerates physics bodies toward the field node.
- [springField()](springfield%28%29.md): Creates a field node that applies a spring-like force that pulls physics bodies toward the field node.
- [turbulenceField(withSmoothness:animationSpeed:)](turbulencefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [velocityField(with:)](velocityfield%28with_%29.md): Creates a field node that sets the velocity of physics bodies that enter the node’s area based on the pixel values of a texture.
- [velocityField(withVector:)](velocityfield%28withvector_%29.md): Creates a field node that gives physics bodies a constant velocity.
- [vortexField()](vortexfield%28%29.md): Creates a field node that applies a perpendicular force to physics bodies.
- [customField(evaluationBlock:)](customfield%28evaluationblock_%29.md): Creates a field node that calculates and applies a custom force to the physics body.
- [SKFieldForceEvaluator](../skfieldforceevaluator.md): The definition for a custom block that processes a single physics body’s interaction with the field.

# linearGravityFieldWithVector: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a field node that accelerates physics bodies in a specific direction.

## Declaration

```objectivec
+ (SKFieldNode *) linearGravityFieldWithVector:(vector_float3) direction;
```

## Parameters

- `direction`: The direction and magnitude of the gravitational force. The values represent the acceleration of the field in meters per second squared. For example, to simulate earth’s gravity, specify `(0, -9.8, 0)`. The `z` component on the vector is ignored.

<a id="return-value"></a>

## Return Value

A new linear gravity field node.

<a id="Discussion"></a>

## Discussion

If the field node is rotated, the direction of its gravity field is also rotated. The calculated force is proportional to the physics body’s mass (meaning that the acceleration applied to all affected physics bodies is a constant).

## See Also

### Creating Field Nodes

- [dragField](dragfield%28%29.md): Creates a field node that applies a force that resists the motion of physics bodies.
- [electricField](electricfield%28%29.md): Creates a field node that applies an electrical force proportional to the electrical charge of physics bodies.
- [magneticField](magneticfield%28%29.md): Creates a field node that applies a magnetic force based on the velocity and electrical charge of the physics bodies.
- [noiseFieldWithSmoothness:animationSpeed:](noisefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [radialGravityField](radialgravityfield%28%29.md): Creates a field node that accelerates physics bodies toward the field node.
- [springField](springfield%28%29.md): Creates a field node that applies a spring-like force that pulls physics bodies toward the field node.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28withsmoothness_animationspeed_%29.md): Creates a field node that applies a randomized acceleration to physics bodies.
- [velocityFieldWithTexture:](velocityfield%28with_%29.md): Creates a field node that sets the velocity of physics bodies that enter the node’s area based on the pixel values of a texture.
- [velocityFieldWithVector:](velocityfield%28withvector_%29.md): Creates a field node that gives physics bodies a constant velocity.
- [vortexField](vortexfield%28%29.md): Creates a field node that applies a perpendicular force to physics bodies.
- [customFieldWithEvaluationBlock:](customfield%28evaluationblock_%29.md): Creates a field node that calculates and applies a custom force to the physics body.
- [SKFieldForceEvaluator](../skfieldforceevaluator.md): The definition for a custom block that processes a single physics body’s interaction with the field.
