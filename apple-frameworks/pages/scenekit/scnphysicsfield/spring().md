> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/spring()](https://developer.apple.com/documentation/scenekit/scnphysicsfield/spring())

# spring() (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a field that pulls objects toward its center with a spring-like force.

## Declaration

```swift
class func spring() -> SCNPhysicsField
```

<a id="return-value"></a>

## Return Value

A physics field object. To use the field in a scene, attach it to the [physicsField](../scnnode/physicsfield.md) property of an [SCNNode](../scnnode.md) object.

<a id="Discussion"></a>

## Discussion

The force a spring field applies to objects in its area of effect is linearly proportional to the distance from the object to the center of the field. (That is, the field behaves according to Hooke’s Law of real-world spring forces.) An object placed at the center of the field and moved away will oscillate around the center, with a period of oscillation that is proportional to the object’s mass. The field’s [strength](strength.md) property scales the magnitude of the spring effect—a larger strength simulates a stiffer spring.

The default [falloffExponent](falloffexponent.md) value for a spring field is `1.0`, indicating that the field’s effect diminishes linearly with distance from its center.

## See Also

### Creating Physics Fields

- [drag()](drag%28%29.md): Creates a field that slows any object in its area of effect with a force proportional to the object’s velocity.
- [vortex()](vortex%28%29.md): Creates a field whose forces circulate around an axis.
- [radialGravity()](radialgravity%28%29.md): Creates a field that accelerates objects toward its center.
- [linearGravity()](lineargravity%28%29.md): Creates a field that accelerates objects in a specific direction.
- [noiseField(smoothness:animationSpeed:)](noisefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect.
- [turbulenceField(smoothness:animationSpeed:)](turbulencefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect, with magnitudes proportional to those objects’ velocities.
- [electric()](electric%28%29.md): Creates a field that attracts or repels objects based on their electrical charge and on their distance from the field’s center.
- [magnetic()](magnetic%28%29.md): Creates a field that attracts or repels objects based on their electrical charge, velocity, and distance from the field’s axis.

# springField (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a field that pulls objects toward its center with a spring-like force.

## Declaration

```objectivec
+ (SCNPhysicsField *) springField;
```

<a id="return-value"></a>

## Return Value

A physics field object. To use the field in a scene, attach it to the [physicsField](../scnnode/physicsfield.md) property of an [SCNNode](../scnnode.md) object.

<a id="Discussion"></a>

## Discussion

The force a spring field applies to objects in its area of effect is linearly proportional to the distance from the object to the center of the field. (That is, the field behaves according to Hooke’s Law of real-world spring forces.) An object placed at the center of the field and moved away will oscillate around the center, with a period of oscillation that is proportional to the object’s mass. The field’s [strength](strength.md) property scales the magnitude of the spring effect—a larger strength simulates a stiffer spring.

The default [falloffExponent](falloffexponent.md) value for a spring field is `1.0`, indicating that the field’s effect diminishes linearly with distance from its center.

## See Also

### Creating Physics Fields

- [dragField](drag%28%29.md): Creates a field that slows any object in its area of effect with a force proportional to the object’s velocity.
- [vortexField](vortex%28%29.md): Creates a field whose forces circulate around an axis.
- [radialGravityField](radialgravity%28%29.md): Creates a field that accelerates objects toward its center.
- [linearGravityField](lineargravity%28%29.md): Creates a field that accelerates objects in a specific direction.
- [noiseFieldWithSmoothness:animationSpeed:](noisefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect, with magnitudes proportional to those objects’ velocities.
- [electricField](electric%28%29.md): Creates a field that attracts or repels objects based on their electrical charge and on their distance from the field’s center.
- [magneticField](magnetic%28%29.md): Creates a field that attracts or repels objects based on their electrical charge, velocity, and distance from the field’s axis.
