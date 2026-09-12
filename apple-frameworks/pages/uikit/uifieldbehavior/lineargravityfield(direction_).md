> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/lineargravityfield(direction:)](https://developer.apple.com/documentation/uikit/uifieldbehavior/lineargravityfield(direction:))

# linearGravityField(direction:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior object that models a linear gravitational force.

## Declaration

```swift
class func linearGravityField(direction: CGVector) -> Self
```

## Parameters

- `direction`: The vector indicating the direction of the gravitational force. You can change this value later by modifying the [direction](direction.md) property.

<a id="return-value"></a>

## Return Value

A field behavior object that applies a directional gravitation force to items with mass.

<a id="Discussion"></a>

## Discussion

This field creates a directional gravitational force that applies uniformly to all dynamic items with mass. When setting the [strength](strength.md) of the field, positive values attract items in the direction of the vector and negative values repel items. The force on a given item can be determined by the equation `F = ma`, where force equals the mass of the item multiplied by the acceleration imposed by the gravitational field, which with this type of field is constant.

## See Also

### Getting the field behaviors

- [dragField()](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField()](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityField(direction:)](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField()](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField()](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityField(position:)](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [vortexField()](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseField(smoothness:animationSpeed:)](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceField(smoothness:animationSpeed:)](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [field(evaluationBlock:)](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.

# linearGravityFieldWithVector: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a field behavior object that models a linear gravitational force.

## Declaration

```objectivec
+ (instancetype) linearGravityFieldWithVector:(CGVector) direction;
```

## Parameters

- `direction`: The vector indicating the direction of the gravitational force. You can change this value later by modifying the [direction](direction.md) property.

<a id="return-value"></a>

## Return Value

A field behavior object that applies a directional gravitation force to items with mass.

<a id="Discussion"></a>

## Discussion

This field creates a directional gravitational force that applies uniformly to all dynamic items with mass. When setting the [strength](strength.md) of the field, positive values attract items in the direction of the vector and negative values repel items. The force on a given item can be determined by the equation `F = ma`, where force equals the mass of the item multiplied by the acceleration imposed by the gravitational field, which with this type of field is constant.

## See Also

### Getting the field behaviors

- [dragField](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField](springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityFieldWithVector:](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityFieldWithPosition:](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [vortexField](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseFieldWithSmoothness:animationSpeed:](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [fieldWithEvaluationBlock:](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.
