> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield](https://developer.apple.com/documentation/scenekit/scnphysicsfield)

# SCNPhysicsField (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that applies forces, such as gravitation, electromagnetism, and turbulence, to physics bodies within a certain area of effect.

## Declaration

```swift
class SCNPhysicsField
```

<a id="overview"></a>

## Overview

You can create many types of field effects, such as gravitation, electromagnetism, and turbulence. To add a field effect to a scene, you create a physics field of the type you want to use and then attach it to the [physicsField](scnnode/physicsfield.md) property of a node in the scene.

Physics fields can affect both [SCNPhysicsBody](scnphysicsbody.md) objects and the particles spawned by [SCNParticleSystem](scnparticlesystem.md) objects.

## Topics

### Creating Physics Fields

- [drag()](scnphysicsfield/drag%28%29.md): Creates a field that slows any object in its area of effect with a force proportional to the object’s velocity.
- [vortex()](scnphysicsfield/vortex%28%29.md): Creates a field whose forces circulate around an axis.
- [radialGravity()](scnphysicsfield/radialgravity%28%29.md): Creates a field that accelerates objects toward its center.
- [linearGravity()](scnphysicsfield/lineargravity%28%29.md): Creates a field that accelerates objects in a specific direction.
- [noiseField(smoothness:animationSpeed:)](scnphysicsfield/noisefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect.
- [turbulenceField(smoothness:animationSpeed:)](scnphysicsfield/turbulencefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect, with magnitudes proportional to those objects’ velocities.
- [spring()](scnphysicsfield/spring%28%29.md): Creates a field that pulls objects toward its center with a spring-like force.
- [electric()](scnphysicsfield/electric%28%29.md): Creates a field that attracts or repels objects based on their electrical charge and on their distance from the field’s center.
- [magnetic()](scnphysicsfield/magnetic%28%29.md): Creates a field that attracts or repels objects based on their electrical charge, velocity, and distance from the field’s axis.

### Creating Custom Physics Fields

- [customField(evaluationBlock:)](scnphysicsfield/customfield%28evaluationblock_%29.md): Creates a field that runs the specified block to determine the force a field applies to each object in its area of effect.

### Specifying a Field’s Area of Effect

- [halfExtent](scnphysicsfield/halfextent.md): A location marking the end of the field’s area of effect.
- [scope](scnphysicsfield/scope.md): The area affected by the field, either inside or outside its region.
- [usesEllipsoidalExtent](scnphysicsfield/usesellipsoidalextent.md): A Boolean value that determines whether the field’s area of effect is shaped like a box or ellipsoid.
- [offset](scnphysicsfield/offset.md): The offset of the field’s center within its area of effect.
- [direction](scnphysicsfield/direction.md): The field’s directional axis.

### Specifying a Field’s Behavior

- [strength](scnphysicsfield/strength.md): A multiplier for the force that the field applies to objects in its area of effect.
- [falloffExponent](scnphysicsfield/falloffexponent.md): An exponent that determines how the field’s strength diminishes with distance.
- [minimumDistance](scnphysicsfield/minimumdistance.md): The minimum value for distance-based effects.
- [isActive](scnphysicsfield/isactive.md): A Boolean value that determines whether the field’s effect is enabled.
- [isExclusive](scnphysicsfield/isexclusive.md): A Boolean value that determines whether the field overrides other fields whose areas of effect it overlaps.

### Choosing Physics Bodies to Be Affected by the Field

- [categoryBitMask](scnphysicsfield/categorybitmask.md): A mask that defines which categories this physics field belongs to.

### Constants

- [SCNFieldForceEvaluator](scnfieldforceevaluator.md): The signature for a block that SceneKit calls to determine the effect of a custom field on an object.
- [SCNPhysicsFieldScope](scnphysicsfieldscope.md): Options for defining the region of space affected by a physics field, used by the [scope](scnphysicsfield/scope.md) property.

### Initializers

- [init(coder:)](scnphysicsfield/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physics in a Scene

- [SCNPhysicsWorld](scnphysicsworld.md): The global simulation of collisions, gravity, joints, and other physics effects in a scene.
- [SCNPhysicsBehavior](scnphysicsbehavior.md): The abstract superclass for joints, vehicle simulations, and other high-level behaviors that incorporate multiple physics bodies.

# SCNPhysicsField (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

An object that applies forces, such as gravitation, electromagnetism, and turbulence, to physics bodies within a certain area of effect.

## Declaration

```objectivec
@interface SCNPhysicsField : NSObject
```

<a id="overview"></a>

## Overview

You can create many types of field effects, such as gravitation, electromagnetism, and turbulence. To add a field effect to a scene, you create a physics field of the type you want to use and then attach it to the [physicsField](scnnode/physicsfield.md) property of a node in the scene.

Physics fields can affect both [SCNPhysicsBody](scnphysicsbody.md) objects and the particles spawned by [SCNParticleSystem](scnparticlesystem.md) objects.

## Topics

### Creating Physics Fields

- [dragField](scnphysicsfield/drag%28%29.md): Creates a field that slows any object in its area of effect with a force proportional to the object’s velocity.
- [vortexField](scnphysicsfield/vortex%28%29.md): Creates a field whose forces circulate around an axis.
- [radialGravityField](scnphysicsfield/radialgravity%28%29.md): Creates a field that accelerates objects toward its center.
- [linearGravityField](scnphysicsfield/lineargravity%28%29.md): Creates a field that accelerates objects in a specific direction.
- [noiseFieldWithSmoothness:animationSpeed:](scnphysicsfield/noisefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect.
- [turbulenceFieldWithSmoothness:animationSpeed:](scnphysicsfield/turbulencefield%28smoothness_animationspeed_%29.md): Creates a field that applies random forces to objects in its area of effect, with magnitudes proportional to those objects’ velocities.
- [springField](scnphysicsfield/spring%28%29.md): Creates a field that pulls objects toward its center with a spring-like force.
- [electricField](scnphysicsfield/electric%28%29.md): Creates a field that attracts or repels objects based on their electrical charge and on their distance from the field’s center.
- [magneticField](scnphysicsfield/magnetic%28%29.md): Creates a field that attracts or repels objects based on their electrical charge, velocity, and distance from the field’s axis.

### Creating Custom Physics Fields

- [customFieldWithEvaluationBlock:](scnphysicsfield/customfield%28evaluationblock_%29.md): Creates a field that runs the specified block to determine the force a field applies to each object in its area of effect.

### Specifying a Field’s Area of Effect

- [halfExtent](scnphysicsfield/halfextent.md): A location marking the end of the field’s area of effect.
- [scope](scnphysicsfield/scope.md): The area affected by the field, either inside or outside its region.
- [usesEllipsoidalExtent](scnphysicsfield/usesellipsoidalextent.md): A Boolean value that determines whether the field’s area of effect is shaped like a box or ellipsoid.
- [offset](scnphysicsfield/offset.md): The offset of the field’s center within its area of effect.
- [direction](scnphysicsfield/direction.md): The field’s directional axis.

### Specifying a Field’s Behavior

- [strength](scnphysicsfield/strength.md): A multiplier for the force that the field applies to objects in its area of effect.
- [falloffExponent](scnphysicsfield/falloffexponent.md): An exponent that determines how the field’s strength diminishes with distance.
- [minimumDistance](scnphysicsfield/minimumdistance.md): The minimum value for distance-based effects.
- [active](scnphysicsfield/isactive.md): A Boolean value that determines whether the field’s effect is enabled.
- [exclusive](scnphysicsfield/isexclusive.md): A Boolean value that determines whether the field overrides other fields whose areas of effect it overlaps.

### Choosing Physics Bodies to Be Affected by the Field

- [categoryBitMask](scnphysicsfield/categorybitmask.md): A mask that defines which categories this physics field belongs to.

### Constants

- [SCNFieldForceEvaluator](scnfieldforceevaluator.md): The signature for a block that SceneKit calls to determine the effect of a custom field on an object.
- [SCNPhysicsFieldScope](scnphysicsfieldscope.md): Options for defining the region of space affected by a physics field, used by the [scope](scnphysicsfield/scope.md) property.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physics in a Scene

- [SCNPhysicsWorld](scnphysicsworld.md): The global simulation of collisions, gravity, joints, and other physics effects in a scene.
- [SCNPhysicsBehavior](scnphysicsbehavior.md): The abstract superclass for joints, vehicle simulations, and other high-level behaviors that incorporate multiple physics bodies.
