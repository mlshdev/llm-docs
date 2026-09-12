> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbehavior](https://developer.apple.com/documentation/scenekit/scnphysicsbehavior)

# SCNPhysicsBehavior (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The abstract superclass for joints, vehicle simulations, and other high-level behaviors that incorporate multiple physics bodies.

## Declaration

```swift
class SCNPhysicsBehavior
```

<a id="overview"></a>

## Overview

An [SCNPhysicsBehavior](scnphysicsbehavior.md) object defines a high-level behavior for one or more physics bodies, modifying the results of the physics simulation. Behaviors include joints that connect multiple bodies so they move together and vehicle definitions that cause a body to roll like a car. You never use this class directly; instead, you instantiate one of the subclasses that defines the kind of behavior you want to add to your physics world. describes the kinds of behaviors you can create in SceneKit.

| Class Name | Description |
| --- | --- |
| [SCNPhysicsHingeJoint](scnphysicshingejoint.md) | Connects two bodies and allows them to pivot around each other on a single axis. |
| [SCNPhysicsBallSocketJoint](scnphysicsballsocketjoint.md) | Connects two bodies and allows them to pivot around each other in any direction. |
| [SCNPhysicsSliderJoint](scnphysicssliderjoint.md) | Connects two bodies and allows them to slide or rotate relative to one another. Slider joints can also work as motors, applying a force or torque between the two bodies. |
| [SCNPhysicsVehicle](scnphysicsvehicle.md) | Simulates a physics body as the chassis of a car or other wheeled vehicle. You control a vehicle in terms of steering, braking, and acceleration, and use [SCNPhysicsVehicleWheel](scnphysicsvehiclewheel.md) objects to define the appearance and physical properties of each of its wheels. |

To use a physics behavior, you follow these steps:

1. Create [SCNPhysicsBody](scnphysicsbody.md) objects and attach them to each node that participates in the behavior.
2. Create and configure a behavior object using one of the subclasses listed in Table 1.
3. Add the behavior to the physics simulation by calling the [addBehavior(\_:)](scnphysicsworld/addbehavior%28__%29.md) method on your scene’s [SCNPhysicsWorld](scnphysicsworld.md) object.

## Topics

### Initializers

- [init(coder:)](scnphysicsbehavior/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SCNPhysicsBallSocketJoint](scnphysicsballsocketjoint.md)
- [SCNPhysicsConeTwistJoint](scnphysicsconetwistjoint.md)
- [SCNPhysicsHingeJoint](scnphysicshingejoint.md)
- [SCNPhysicsSliderJoint](scnphysicssliderjoint.md)
- [SCNPhysicsVehicle](scnphysicsvehicle.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physics in a Scene

- [SCNPhysicsWorld](scnphysicsworld.md): The global simulation of collisions, gravity, joints, and other physics effects in a scene.
- [SCNPhysicsField](scnphysicsfield.md): An object that applies forces, such as gravitation, electromagnetism, and turbulence, to physics bodies within a certain area of effect.

# SCNPhysicsBehavior (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The abstract superclass for joints, vehicle simulations, and other high-level behaviors that incorporate multiple physics bodies.

## Declaration

```objectivec
@interface SCNPhysicsBehavior : NSObject
```

<a id="overview"></a>

## Overview

An [SCNPhysicsBehavior](scnphysicsbehavior.md) object defines a high-level behavior for one or more physics bodies, modifying the results of the physics simulation. Behaviors include joints that connect multiple bodies so they move together and vehicle definitions that cause a body to roll like a car. You never use this class directly; instead, you instantiate one of the subclasses that defines the kind of behavior you want to add to your physics world. describes the kinds of behaviors you can create in SceneKit.

| Class Name | Description |
| --- | --- |
| [SCNPhysicsHingeJoint](scnphysicshingejoint.md) | Connects two bodies and allows them to pivot around each other on a single axis. |
| [SCNPhysicsBallSocketJoint](scnphysicsballsocketjoint.md) | Connects two bodies and allows them to pivot around each other in any direction. |
| [SCNPhysicsSliderJoint](scnphysicssliderjoint.md) | Connects two bodies and allows them to slide or rotate relative to one another. Slider joints can also work as motors, applying a force or torque between the two bodies. |
| [SCNPhysicsVehicle](scnphysicsvehicle.md) | Simulates a physics body as the chassis of a car or other wheeled vehicle. You control a vehicle in terms of steering, braking, and acceleration, and use [SCNPhysicsVehicleWheel](scnphysicsvehiclewheel.md) objects to define the appearance and physical properties of each of its wheels. |

To use a physics behavior, you follow these steps:

1. Create [SCNPhysicsBody](scnphysicsbody.md) objects and attach them to each node that participates in the behavior.
2. Create and configure a behavior object using one of the subclasses listed in Table 1.
3. Add the behavior to the physics simulation by calling the [addBehavior:](scnphysicsworld/addbehavior%28__%29.md) method on your scene’s [SCNPhysicsWorld](scnphysicsworld.md) object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SCNPhysicsBallSocketJoint](scnphysicsballsocketjoint.md)
- [SCNPhysicsConeTwistJoint](scnphysicsconetwistjoint.md)
- [SCNPhysicsHingeJoint](scnphysicshingejoint.md)
- [SCNPhysicsSliderJoint](scnphysicssliderjoint.md)
- [SCNPhysicsVehicle](scnphysicsvehicle.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physics in a Scene

- [SCNPhysicsWorld](scnphysicsworld.md): The global simulation of collisions, gravity, joints, and other physics effects in a scene.
- [SCNPhysicsField](scnphysicsfield.md): An object that applies forces, such as gravitation, electromagnetism, and turbulence, to physics bodies within a certain area of effect.
