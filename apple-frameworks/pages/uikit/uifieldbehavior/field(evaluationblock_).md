> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/field(evaluationblock:)](https://developer.apple.com/documentation/uikit/uifieldbehavior/field(evaluationblock:))

# field(evaluationBlock:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior object that applies an app-specified field to items.

## Declaration

```swift
class func field(evaluationBlock block: @escaping (UIFieldBehavior, CGPoint, CGVector, CGFloat, CGFloat, TimeInterval) -> CGVector) -> Self
```

## Parameters

- `block`: The block to execute to compute the instantaneous force of the field on an item. This block returns a CGVector object that reflects the direction and magnitude of the force to apply. The block takes the following parameters:

  - **field**: The field behavior object being evaluated.
  - **position**: The point at which to compute the force value, in the reference coordinate system. The position corresponds to the location of an item in the field.
  - **velocity**: The velocity to be considered during evaluation of the force. Usually, this is the velocity of an item in the field. The vector reflects both the direction and magnitude of the velocity.
  - **mass**: The mass value to be used in any force computations. Use this value in fields where the applied forces vary with the mass of the object.
  - **charge**: The charge value to be used in any force computations. Use this value in fields where the applied forces vary with the charge of the object.
  - **deltaTime**: The amount of time that has passed since the last time the force value for this item was computed.

<a id="return-value"></a>

## Return Value

A field behavior object that applies forces based on the custom algorithm you provided.

<a id="Discussion"></a>

## Discussion

Use this method to define a custom field for your app. The block you provide is called many times during the course of animations, so your implementation should be reasonably fast. Use the provided `field` object to retrieve values associated with the field itself, such as the field’s position and strength. The other parameters reflect information about the dynamic item affected by the field.

## See Also

### Getting the field behaviors

- [dragField()](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField()](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityField(direction:)](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField()](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField()](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityField(position:)](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityField(direction:)](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField()](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseField(smoothness:animationSpeed:)](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceField(smoothness:animationSpeed:)](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.

# fieldWithEvaluationBlock: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior object that applies an app-specified field to items.

## Declaration

```objectivec
+ (instancetype) fieldWithEvaluationBlock:(CGVector (^)(UIFieldBehavior *field, CGPoint position, CGVector velocity, CGFloat mass, CGFloat charge, NSTimeInterval deltaTime)) block;
```

## Parameters

- `block`: The block to execute to compute the instantaneous force of the field on an item. This block returns a CGVector object that reflects the direction and magnitude of the force to apply. The block takes the following parameters:

  - **field**: The field behavior object being evaluated.
  - **position**: The point at which to compute the force value, in the reference coordinate system. The position corresponds to the location of an item in the field.
  - **velocity**: The velocity to be considered during evaluation of the force. Usually, this is the velocity of an item in the field. The vector reflects both the direction and magnitude of the velocity.
  - **mass**: The mass value to be used in any force computations. Use this value in fields where the applied forces vary with the mass of the object.
  - **charge**: The charge value to be used in any force computations. Use this value in fields where the applied forces vary with the charge of the object.
  - **deltaTime**: The amount of time that has passed since the last time the force value for this item was computed.

<a id="return-value"></a>

## Return Value

A field behavior object that applies forces based on the custom algorithm you provided.

<a id="Discussion"></a>

## Discussion

Use this method to define a custom field for your app. The block you provide is called many times during the course of animations, so your implementation should be reasonably fast. Use the provided `field` object to retrieve values associated with the field itself, such as the field’s position and strength. The other parameters reflect information about the dynamic item affected by the field.

## See Also

### Getting the field behaviors

- [dragField](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityFieldWithVector:](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityFieldWithPosition:](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityFieldWithVector:](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseFieldWithSmoothness:animationSpeed:](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
