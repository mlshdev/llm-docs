> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnfieldforceevaluator](https://developer.apple.com/documentation/scenekit/scnfieldforceevaluator)

# SCNFieldForceEvaluator (Swift)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The signature for a block that SceneKit calls to determine the effect of a custom field on an object.

## Declaration

```swift
typealias SCNFieldForceEvaluator = (SCNVector3, SCNVector3, Float, Float, TimeInterval) -> SCNVector3
```

<a id="Discussion"></a>

## Discussion

You use this type of block to create a custom physics field with the [customField(evaluationBlock:)](scnphysicsfield/customfield%28evaluationblock_%29.md) method. SceneKit calls your block once for each object in the field’s area of effect, on each step of the physics simulation.

> **Note**

>  By default, one simulation step occurs for each frame rendered. For example, if your view renders at 60 frames per second and three bodies are in the field’s area of effect, SceneKit runs your block 180 times per second. To avoid reduced rendering performance, take care not to perform extensive computation in this block.

The block takes the following parameters:

- **position**: The position of the object affected by the field, in the local coordinate space of the node containing the field.
- **velocity**: The velocity of the object affected by the field, relative to the local coordinate space of the node containing the field.
- **mass**: The mass of the object affected by the field. (See the [mass](scnphysicsbody/mass.md) property for physics bodies and the [particleMass](scnparticlesystem/particlemass.md) property for particle systems.)
- **charge**: The electrical charge of the object affected by the field. (See the [charge](scnphysicsbody/charge.md) property for physics bodies and the [particleCharge](scnparticlesystem/particlecharge.md) property for particle systems.)
- **time**: The elapsed time, in seconds, since the last simulation step.

Your block uses these parameters to compute and return an [SCNVector3](scnvector3.md) force vector, which SceneKit then applies to the object affected by the field.

## See Also

### Constants

- [SCNPhysicsFieldScope](scnphysicsfieldscope.md): Options for defining the region of space affected by a physics field, used by the [scope](scnphysicsfield/scope.md) property.

# SCNFieldForceEvaluator (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The signature for a block that SceneKit calls to determine the effect of a custom field on an object.

## Declaration

```objectivec
typedef struct SCNVector3 (^)(struct SCNVector3, struct SCNVector3, float, float, double) SCNFieldForceEvaluator;
```

<a id="Discussion"></a>

## Discussion

You use this type of block to create a custom physics field with the [customFieldWithEvaluationBlock:](scnphysicsfield/customfield%28evaluationblock_%29.md) method. SceneKit calls your block once for each object in the field’s area of effect, on each step of the physics simulation.

> **Note**

>  By default, one simulation step occurs for each frame rendered. For example, if your view renders at 60 frames per second and three bodies are in the field’s area of effect, SceneKit runs your block 180 times per second. To avoid reduced rendering performance, take care not to perform extensive computation in this block.

The block takes the following parameters:

- **position**: The position of the object affected by the field, in the local coordinate space of the node containing the field.
- **velocity**: The velocity of the object affected by the field, relative to the local coordinate space of the node containing the field.
- **mass**: The mass of the object affected by the field. (See the [mass](scnphysicsbody/mass.md) property for physics bodies and the [particleMass](scnparticlesystem/particlemass.md) property for particle systems.)
- **charge**: The electrical charge of the object affected by the field. (See the [charge](scnphysicsbody/charge.md) property for physics bodies and the [particleCharge](scnparticlesystem/particlecharge.md) property for particle systems.)
- **time**: The elapsed time, in seconds, since the last simulation step.

Your block uses these parameters to compute and return an [SCNVector3](scnvector3.md) force vector, which SceneKit then applies to the object affected by the field.

## See Also

### Constants

- [SCNPhysicsFieldScope](scnphysicsfieldscope.md): Options for defining the region of space affected by a physics field, used by the [scope](scnphysicsfield/scope.md) property.
