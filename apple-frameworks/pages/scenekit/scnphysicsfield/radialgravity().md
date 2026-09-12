> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/radialgravity()](https://developer.apple.com/documentation/scenekit/scnphysicsfield/radialgravity())

# radialGravity() (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a field that accelerates objects toward its center.

## Declaration

```swift
class func radialGravity() -> SCNPhysicsField
```

<a id="return-value"></a>

## Return Value

A physics field object. To use the field in a scene, attach it to the [physicsField](../scnnode/physicsfield.md) property of an [SCNNode](../scnnode.md) object.

<a id="Discussion"></a>

## Discussion

Because the force of gravity on an object is proportional to the object’s mass, this force accelerates all objects at the same distance from the field’s center by the same amount. The field’s [strength](strength.md) property measures this acceleration in meters per second per second.

By default, a radial gravity field attracts objects toward its center. To make it repel objects instead, set the field’s [strength](strength.md) property to a negative value.

The default [falloffExponent](falloffexponent.md) value for a radial gravity field is `2.0`, indicating that the field’s effect diminishes with the square of distance from its center.

## See Also

### Creating Physics Fields

- [drag()](drag%28%29.md): Creates a field that slows any object in its area of effect with a force proportional to the object’s velocity.
- [vortex()](vortex%28%29.md): Creates a field whose forces circulate around an axis.
- [linearGravity()](lineargravity%28%29.md): Creates a field that accelerates objects in a specific direction.
- [noiseField(smoothness:animationSpeed:)](noisefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect.
- [turbulenceField(smoothness:animationSpeed:)](turbulencefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect, with magnitudes proportional to those objects’ velocities.
- [spring()](spring%28%29.md): Creates a field that pulls objects toward its center with a spring-like force.
- [electric()](electric%28%29.md): Creates a field that attracts or repels objects based on their electrical charge and on their distance from the field’s center.
- [magnetic()](magnetic%28%29.md): Creates a field that attracts or repels objects based on their electrical charge, velocity, and distance from the field’s axis.

# radialGravityField (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a field that accelerates objects toward its center.

## Declaration

```objectivec
+ (SCNPhysicsField *) radialGravityField;
```

<a id="return-value"></a>

## Return Value

A physics field object. To use the field in a scene, attach it to the [physicsField](../scnnode/physicsfield.md) property of an [SCNNode](../scnnode.md) object.

<a id="Discussion"></a>

## Discussion

Because the force of gravity on an object is proportional to the object’s mass, this force accelerates all objects at the same distance from the field’s center by the same amount. The field’s [strength](strength.md) property measures this acceleration in meters per second per second.

By default, a radial gravity field attracts objects toward its center. To make it repel objects instead, set the field’s [strength](strength.md) property to a negative value.

The default [falloffExponent](falloffexponent.md) value for a radial gravity field is `2.0`, indicating that the field’s effect diminishes with the square of distance from its center.

## See Also

### Creating Physics Fields

- [dragField](drag%28%29.md): Creates a field that slows any object in its area of effect with a force proportional to the object’s velocity.
- [vortexField](vortex%28%29.md): Creates a field whose forces circulate around an axis.
- [linearGravityField](lineargravity%28%29.md): Creates a field that accelerates objects in a specific direction.
- [noiseFieldWithSmoothness:animationSpeed:](noisefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect, with magnitudes proportional to those objects’ velocities.
- [springField](spring%28%29.md): Creates a field that pulls objects toward its center with a spring-like force.
- [electricField](electric%28%29.md): Creates a field that attracts or repels objects based on their electrical charge and on their distance from the field’s center.
- [magneticField](magnetic%28%29.md): Creates a field that attracts or repels objects based on their electrical charge, velocity, and distance from the field’s axis.
