> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/turbulencefield(smoothness:animationspeed:)](https://developer.apple.com/documentation/scenekit/scnphysicsfield/turbulencefield(smoothness:animationspeed:))

# turbulenceField(smoothness:animationSpeed:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a field that applies random forces to objects in its area of effect, with magnitudes proportional to those objects’ velocities.

## Declaration

```swift
class func turbulenceField(smoothness: CGFloat, animationSpeed speed: CGFloat) -> SCNPhysicsField
```

## Parameters

- `smoothness`: The amount of randomness in the field. A value of `0.0` specifies maximum noise, and a value of `1.0` specifies no noise at all.
- `speed`: The field’s variation over time. Specify `0.0` for a static field.

<a id="return-value"></a>

## Return Value

A physics field object. To use the field in a scene, attach it to the [physicsField](../scnnode/physicsfield.md) property of an [SCNNode](../scnnode.md) object.

<a id="Discussion"></a>

## Discussion

Like a noise field, a turbulence field applies forces in random directions to the objects that it affects. Unlike a noise field, a turbulence field applies a force whose magnitude is proportional to the speed of each affected object. For example, an object passing through a noise field shakes as it travels through the field, but an object passing through a turbulence field shakes more violently the faster it travels. The field’s [strength](strength.md) property scales the magnitude of the turbulence effect.

The default [falloffExponent](falloffexponent.md) value for a turbulence field is `0.0`, indicating that the field’s effect is constant throughout its area of effect.

## See Also

### Creating Physics Fields

- [drag()](drag%28%29.md): Creates a field that slows any object in its area of effect with a force proportional to the object’s velocity.
- [vortex()](vortex%28%29.md): Creates a field whose forces circulate around an axis.
- [radialGravity()](radialgravity%28%29.md): Creates a field that accelerates objects toward its center.
- [linearGravity()](lineargravity%28%29.md): Creates a field that accelerates objects in a specific direction.
- [noiseField(smoothness:animationSpeed:)](noisefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect.
- [spring()](spring%28%29.md): Creates a field that pulls objects toward its center with a spring-like force.
- [electric()](electric%28%29.md): Creates a field that attracts or repels objects based on their electrical charge and on their distance from the field’s center.
- [magnetic()](magnetic%28%29.md): Creates a field that attracts or repels objects based on their electrical charge, velocity, and distance from the field’s axis.

# turbulenceFieldWithSmoothness:animationSpeed: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a field that applies random forces to objects in its area of effect, with magnitudes proportional to those objects’ velocities.

## Declaration

```objectivec
+ (SCNPhysicsField *) turbulenceFieldWithSmoothness:(CGFloat) smoothness animationSpeed:(CGFloat) speed;
```

## Parameters

- `smoothness`: The amount of randomness in the field. A value of `0.0` specifies maximum noise, and a value of `1.0` specifies no noise at all.
- `speed`: The field’s variation over time. Specify `0.0` for a static field.

<a id="return-value"></a>

## Return Value

A physics field object. To use the field in a scene, attach it to the [physicsField](../scnnode/physicsfield.md) property of an [SCNNode](../scnnode.md) object.

<a id="Discussion"></a>

## Discussion

Like a noise field, a turbulence field applies forces in random directions to the objects that it affects. Unlike a noise field, a turbulence field applies a force whose magnitude is proportional to the speed of each affected object. For example, an object passing through a noise field shakes as it travels through the field, but an object passing through a turbulence field shakes more violently the faster it travels. The field’s [strength](strength.md) property scales the magnitude of the turbulence effect.

The default [falloffExponent](falloffexponent.md) value for a turbulence field is `0.0`, indicating that the field’s effect is constant throughout its area of effect.

## See Also

### Creating Physics Fields

- [dragField](drag%28%29.md): Creates a field that slows any object in its area of effect with a force proportional to the object’s velocity.
- [vortexField](vortex%28%29.md): Creates a field whose forces circulate around an axis.
- [radialGravityField](radialgravity%28%29.md): Creates a field that accelerates objects toward its center.
- [linearGravityField](lineargravity%28%29.md): Creates a field that accelerates objects in a specific direction.
- [noiseFieldWithSmoothness:animationSpeed:](noisefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect.
- [springField](spring%28%29.md): Creates a field that pulls objects toward its center with a spring-like force.
- [electricField](electric%28%29.md): Creates a field that attracts or repels objects based on their electrical charge and on their distance from the field’s center.
- [magneticField](magnetic%28%29.md): Creates a field that attracts or repels objects based on their electrical charge, velocity, and distance from the field’s axis.
