> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/drag()](https://developer.apple.com/documentation/scenekit/scnphysicsfield/drag())

# drag() (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a field that slows any object in its area of effect with a force proportional to the object’s velocity.

## Declaration

```swift
class func drag() -> SCNPhysicsField
```

<a id="return-value"></a>

## Return Value

A physics field object. To use the field in a scene, attach it to the [physicsField](../scnnode/physicsfield.md) property of an [SCNNode](../scnnode.md) object.

<a id="Discussion"></a>

## Discussion

Like the [damping](../scnphysicsbody/damping.md) and [angularDamping](../scnphysicsbody/angulardamping.md) properties of a physics body, drag fields can simulate effects such as fluid friction or air resistance. Unlike those properties, drag fields can simulate different intensities of fluid friction in different areas of your scene. For example, you can use a drag field to represent underwater areas.

The default [falloffExponent](falloffexponent.md) value for a drag field is `0.0`, indicating that the field’s effect is constant throughout its area of effect.

## See Also

### Creating Physics Fields

- [vortex()](vortex%28%29.md): Creates a field whose forces circulate around an axis.
- [radialGravity()](radialgravity%28%29.md): Creates a field that accelerates objects toward its center.
- [linearGravity()](lineargravity%28%29.md): Creates a field that accelerates objects in a specific direction.
- [noiseField(smoothness:animationSpeed:)](noisefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect.
- [turbulenceField(smoothness:animationSpeed:)](turbulencefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect, with magnitudes proportional to those objects’ velocities.
- [spring()](spring%28%29.md): Creates a field that pulls objects toward its center with a spring-like force.
- [electric()](electric%28%29.md): Creates a field that attracts or repels objects based on their electrical charge and on their distance from the field’s center.
- [magnetic()](magnetic%28%29.md): Creates a field that attracts or repels objects based on their electrical charge, velocity, and distance from the field’s axis.

# dragField (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a field that slows any object in its area of effect with a force proportional to the object’s velocity.

## Declaration

```objectivec
+ (SCNPhysicsField *) dragField;
```

<a id="return-value"></a>

## Return Value

A physics field object. To use the field in a scene, attach it to the [physicsField](../scnnode/physicsfield.md) property of an [SCNNode](../scnnode.md) object.

<a id="Discussion"></a>

## Discussion

Like the [damping](../scnphysicsbody/damping.md) and [angularDamping](../scnphysicsbody/angulardamping.md) properties of a physics body, drag fields can simulate effects such as fluid friction or air resistance. Unlike those properties, drag fields can simulate different intensities of fluid friction in different areas of your scene. For example, you can use a drag field to represent underwater areas.

The default [falloffExponent](falloffexponent.md) value for a drag field is `0.0`, indicating that the field’s effect is constant throughout its area of effect.

## See Also

### Creating Physics Fields

- [vortexField](vortex%28%29.md): Creates a field whose forces circulate around an axis.
- [radialGravityField](radialgravity%28%29.md): Creates a field that accelerates objects toward its center.
- [linearGravityField](lineargravity%28%29.md): Creates a field that accelerates objects in a specific direction.
- [noiseFieldWithSmoothness:animationSpeed:](noisefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect, with magnitudes proportional to those objects’ velocities.
- [springField](spring%28%29.md): Creates a field that pulls objects toward its center with a spring-like force.
- [electricField](electric%28%29.md): Creates a field that attracts or repels objects based on their electrical charge and on their distance from the field’s center.
- [magneticField](magnetic%28%29.md): Creates a field that attracts or repels objects based on their electrical charge, velocity, and distance from the field’s axis.
