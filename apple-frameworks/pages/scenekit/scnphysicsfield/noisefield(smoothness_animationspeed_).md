> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/noisefield(smoothness:animationspeed:)](https://developer.apple.com/documentation/scenekit/scnphysicsfield/noisefield(smoothness:animationspeed:))

# noiseField(smoothness:animationSpeed:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a field that applies random forces to objects in its area of effect.

## Declaration

```swift
class func noiseField(smoothness: CGFloat, animationSpeed speed: CGFloat) -> SCNPhysicsField
```

## Parameters

- `smoothness`: The amount of randomness in the field. A value of `0.0` specifies maximum noise, and a value of `1.0` specifies no noise at all.
- `speed`: The field’s variation over time. Specify `0.0` for a static field.

<a id="return-value"></a>

## Return Value

A physics field object. To use the field in a scene, attach it to the [physicsField](../scnnode/physicsfield.md) property of an [SCNNode](../scnnode.md) object.

<a id="Discussion"></a>

## Discussion

Use this field type to simulate effects involving random motion, such as fireflies or gently falling snow.

In calculating the direction and strength of the field’s effect on an object, SceneKit uses a Perlin simplex noise function. This function produces a velocity field that varies over time.

The default [falloffExponent](falloffexponent.md) value for a noise field is `0.0`, indicating that the field’s effect is constant throughout its area of effect. This field type ignores the field’s [direction](direction.md) property.

## See Also

### Creating Physics Fields

- [drag()](drag%28%29.md): Creates a field that slows any object in its area of effect with a force proportional to the object’s velocity.
- [vortex()](vortex%28%29.md): Creates a field whose forces circulate around an axis.
- [radialGravity()](radialgravity%28%29.md): Creates a field that accelerates objects toward its center.
- [linearGravity()](lineargravity%28%29.md): Creates a field that accelerates objects in a specific direction.
- [turbulenceField(smoothness:animationSpeed:)](turbulencefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect, with magnitudes proportional to those objects’ velocities.
- [spring()](spring%28%29.md): Creates a field that pulls objects toward its center with a spring-like force.
- [electric()](electric%28%29.md): Creates a field that attracts or repels objects based on their electrical charge and on their distance from the field’s center.
- [magnetic()](magnetic%28%29.md): Creates a field that attracts or repels objects based on their electrical charge, velocity, and distance from the field’s axis.

# noiseFieldWithSmoothness:animationSpeed: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a field that applies random forces to objects in its area of effect.

## Declaration

```objectivec
+ (SCNPhysicsField *) noiseFieldWithSmoothness:(CGFloat) smoothness animationSpeed:(CGFloat) speed;
```

## Parameters

- `smoothness`: The amount of randomness in the field. A value of `0.0` specifies maximum noise, and a value of `1.0` specifies no noise at all.
- `speed`: The field’s variation over time. Specify `0.0` for a static field.

<a id="return-value"></a>

## Return Value

A physics field object. To use the field in a scene, attach it to the [physicsField](../scnnode/physicsfield.md) property of an [SCNNode](../scnnode.md) object.

<a id="Discussion"></a>

## Discussion

Use this field type to simulate effects involving random motion, such as fireflies or gently falling snow.

In calculating the direction and strength of the field’s effect on an object, SceneKit uses a Perlin simplex noise function. This function produces a velocity field that varies over time.

The default [falloffExponent](falloffexponent.md) value for a noise field is `0.0`, indicating that the field’s effect is constant throughout its area of effect. This field type ignores the field’s [direction](direction.md) property.

## See Also

### Creating Physics Fields

- [dragField](drag%28%29.md): Creates a field that slows any object in its area of effect with a force proportional to the object’s velocity.
- [vortexField](vortex%28%29.md): Creates a field whose forces circulate around an axis.
- [radialGravityField](radialgravity%28%29.md): Creates a field that accelerates objects toward its center.
- [linearGravityField](lineargravity%28%29.md): Creates a field that accelerates objects in a specific direction.
- [turbulenceFieldWithSmoothness:animationSpeed:](turbulencefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect, with magnitudes proportional to those objects’ velocities.
- [springField](spring%28%29.md): Creates a field that pulls objects toward its center with a spring-like force.
- [electricField](electric%28%29.md): Creates a field that attracts or repels objects based on their electrical charge and on their distance from the field’s center.
- [magneticField](magnetic%28%29.md): Creates a field that attracts or repels objects based on their electrical charge, velocity, and distance from the field’s axis.
