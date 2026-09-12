> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/customfield(evaluationblock:)](https://developer.apple.com/documentation/scenekit/scnphysicsfield/customfield(evaluationblock:))

# customField(evaluationBlock:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a field that runs the specified block to determine the force a field applies to each object in its area of effect.

## Declaration

```swift
class func customField(evaluationBlock block: @escaping SCNFieldForceEvaluator) -> SCNPhysicsField
```

## Parameters

- `block`: A block that SceneKit runs for each object in the field’s area of effect. See [SCNFieldForceEvaluator](../scnfieldforceevaluator.md).

<a id="return-value"></a>

## Return Value

A physics field object. To use the field in a scene, attach it to the [physicsField](../scnnode/physicsfield.md) property of an [SCNNode](../scnnode.md) object.

<a id="Discussion"></a>

## Discussion

For custom physics fields, SceneKit ignores the [direction](direction.md), [strength](strength.md), [falloffExponent](falloffexponent.md), and [minimumDistance](minimumdistance.md) properties. Instead, SceneKit calls your block to determine the direction and magnitude of force to apply to each physics body or particle in the field’s area of effect.

# customFieldWithEvaluationBlock: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a field that runs the specified block to determine the force a field applies to each object in its area of effect.

## Declaration

```objectivec
+ (SCNPhysicsField *) customFieldWithEvaluationBlock:(SCNFieldForceEvaluator) block;
```

## Parameters

- `block`: A block that SceneKit runs for each object in the field’s area of effect. See [SCNFieldForceEvaluator](../scnfieldforceevaluator.md).

<a id="return-value"></a>

## Return Value

A physics field object. To use the field in a scene, attach it to the [physicsField](../scnnode/physicsfield.md) property of an [SCNNode](../scnnode.md) object.

<a id="Discussion"></a>

## Discussion

For custom physics fields, SceneKit ignores the [direction](direction.md), [strength](strength.md), [falloffExponent](falloffexponent.md), and [minimumDistance](minimumdistance.md) properties. Instead, SceneKit calls your block to determine the direction and magnitude of force to apply to each physics body or particle in the field’s area of effect.
