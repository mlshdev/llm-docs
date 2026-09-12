> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skfieldnode/customfield(evaluationblock:)](https://developer.apple.com/documentation/spritekit/skfieldnode/customfield(evaluationblock:))

# customField(evaluationBlock:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a field node that calculates and applies a custom force to the physics body.

## Declaration

```swift
class func customField(evaluationBlock block: @escaping SKFieldForceEvaluator) -> SKFieldNode
```

## Parameters

- `block`: A custom block to be executed when a physics body is affected by the field. Your block should calculate and return the force to be applied to the body.

<a id="return-value"></a>

## Return Value

A new custom field node.

<a id="Discussion"></a>

## Discussion

The value returned by the custom block is a vector for an impulse force which is applied to the physics body being evaluated for that frame. Only the `x` and `y` components of the return value are used by SpriteKit, the `z` component is ignored.

The values passed into the block by the `position` and `velocity` arguments measured in meters: if you need to convert them into points — as used by SpriteKit — multiply the values by 150.

The following code shows how to create a custom field to emulate drag. The block returns the negative of the square root of the velocity of the physics body. This decelerates a physics body passing through the [SKFieldNode](../skfieldnode.md) object’s region.

Listing 1. Creating a custom drag field

```swift
let simpleDrag = SKFieldNode.customField {
    (position: vector_float3, velocity: vector_float3, mass: Float, charge: Float, deltaTime: TimeInterval) in
    return vector_float3(-sqrt(abs(velocity.x)) * sign(velocity.x),
                         -sqrt(abs(velocity.y)) * sign(velocity.y),
                         0)
}
```

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
- [vortexField()](vortexfield%28%29.md): Creates a field node that applies a perpendicular force to physics bodies.
- [SKFieldForceEvaluator](../skfieldforceevaluator.md): The definition for a custom block that processes a single physics body’s interaction with the field.

# customFieldWithEvaluationBlock: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a field node that calculates and applies a custom force to the physics body.

## Declaration

```objectivec
+ (SKFieldNode *) customFieldWithEvaluationBlock:(SKFieldForceEvaluator) block;
```

## Parameters

- `block`: A custom block to be executed when a physics body is affected by the field. Your block should calculate and return the force to be applied to the body.

<a id="return-value"></a>

## Return Value

A new custom field node.

<a id="Discussion"></a>

## Discussion

The value returned by the custom block is a vector for an impulse force which is applied to the physics body being evaluated for that frame. Only the `x` and `y` components of the return value are used by SpriteKit, the `z` component is ignored.

The values passed into the block by the `position` and `velocity` arguments measured in meters: if you need to convert them into points — as used by SpriteKit — multiply the values by 150.

The following code shows how to create a custom field to emulate drag. The block returns the negative of the square root of the velocity of the physics body. This decelerates a physics body passing through the [SKFieldNode](../skfieldnode.md) object’s region.

Listing 1. Creating a custom drag field

```swift
let simpleDrag = SKFieldNode.customField {
    (position: vector_float3, velocity: vector_float3, mass: Float, charge: Float, deltaTime: TimeInterval) in
    return vector_float3(-sqrt(abs(velocity.x)) * sign(velocity.x),
                         -sqrt(abs(velocity.y)) * sign(velocity.y),
                         0)
}
```

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
- [vortexField](vortexfield%28%29.md): Creates a field node that applies a perpendicular force to physics bodies.
- [SKFieldForceEvaluator](../skfieldforceevaluator.md): The definition for a custom block that processes a single physics body’s interaction with the field.
