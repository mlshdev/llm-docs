> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/springfield()](https://developer.apple.com/documentation/uikit/uifieldbehavior/springfield())

# springField() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a spring field behavior.

## Declaration

```swift
class func springField() -> Self
```

<a id="return-value"></a>

## Return Value

A field behavior object that applies spring effects to items.

<a id="Discussion"></a>

## Discussion

A spring field behavior object uses Hooke’s law to calculate the force applied to objects in the field. With this law, the amount of force is linearly proportional to the distance from the center of the field. An item entering this field oscillates with a period proportional to the inverse of its density. You can use this field behavior to keep items confined to a particular region. Use the item’s resistance to reduce its linear velocity (and thus the amount of oscillation) over time.

An item in a spring field oscillates continuously unless the spring forces are damped by friction or the item is affected by other fields.

## See Also

### Getting the field behaviors

- [dragField()](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [velocityField(direction:)](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField()](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField()](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityField(position:)](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityField(direction:)](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField()](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseField(smoothness:animationSpeed:)](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceField(smoothness:animationSpeed:)](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [field(evaluationBlock:)](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.

# springField (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a spring field behavior.

## Declaration

```objectivec
+ (instancetype) springField;
```

<a id="return-value"></a>

## Return Value

A field behavior object that applies spring effects to items.

<a id="Discussion"></a>

## Discussion

A spring field behavior object uses Hooke’s law to calculate the force applied to objects in the field. With this law, the amount of force is linearly proportional to the distance from the center of the field. An item entering this field oscillates with a period proportional to the inverse of its density. You can use this field behavior to keep items confined to a particular region. Use the item’s resistance to reduce its linear velocity (and thus the amount of oscillation) over time.

An item in a spring field oscillates continuously unless the spring forces are damped by friction or the item is affected by other fields.

## See Also

### Getting the field behaviors

- [dragField](dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [velocityFieldWithVector:](velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField](electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField](magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityFieldWithPosition:](radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityFieldWithVector:](lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField](vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseFieldWithSmoothness:animationSpeed:](noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [fieldWithEvaluationBlock:](field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.
