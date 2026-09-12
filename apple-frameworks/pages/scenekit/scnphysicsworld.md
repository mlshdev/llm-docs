> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld](https://developer.apple.com/documentation/scenekit/scnphysicsworld)

# SCNPhysicsWorld (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The global simulation of collisions, gravity, joints, and other physics effects in a scene.

## Declaration

```swift
class SCNPhysicsWorld
```

<a id="overview"></a>

## Overview

You do not create [SCNPhysicsWorld](scnphysicsworld.md) objects directly; instead, read the [physicsWorld](scnscene/physicsworld.md) property of an [SCNScene](scnscene.md) object. Use physics world object to perform the following tasks:

- Manage global properties of the simulation, such as its speed and constant gravity. (For more precise control of gravity and similar effects, see the [SCNPhysicsField](scnphysicsfield.md) class.)
- Register behaviors that modify interactions between the scene’s physics bodies, such as joints and vehicles. For more details, see [SCNPhysicsBehavior](scnphysicsbehavior.md).
- Specify a delegate object to receive messages when two physics bodies contact each other
- Perform specific contact tests, and search for physics bodies in the scene using ray and sweep tests.

## Topics

### Managing the Physics Simulation

- [gravity](scnphysicsworld/gravity.md): A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.
- [speed](scnphysicsworld/speed.md): The rate at which the simulation executes.
- [timeStep](scnphysicsworld/timestep.md): The time interval between updates to the physics simulation.
- [updateCollisionPairs()](scnphysicsworld/updatecollisionpairs%28%29.md): Forces the physics engine to reevaluate possible collisions between physics bodies.

### Registering Physics Behaviors

- [addBehavior(\_:)](scnphysicsworld/addbehavior%28__%29.md): Adds a behavior to the physics world.
- [removeBehavior(\_:)](scnphysicsworld/removebehavior%28__%29.md): Removes a behavior from the physics world.
- [allBehaviors](scnphysicsworld/allbehaviors.md): The list of behaviors affecting bodies in the physics world.
- [removeAllBehaviors()](scnphysicsworld/removeallbehaviors%28%29.md): Removes all behaviors affecting bodies in the physics world.

### Detecting Contacts Between Physics Bodies

- [contactDelegate](scnphysicsworld/contactdelegate.md): A delegate that is called when two physics bodies come in contact with each other.
- [contactTestBetween(\_:\_:options:)](scnphysicsworld/contacttestbetween%28____options_%29.md): Checks for contacts between two physics bodies.
- [contactTest(with:options:)](scnphysicsworld/contacttest%28with_options_%29.md): Checks for contacts between one physics body and any other bodies in the physics world.

### Searching for Physics Bodies

- [rayTestWithSegment(from:to:options:)](scnphysicsworld/raytestwithsegment%28from_to_options_%29.md): Searches for physics bodies along a line segment between two points in the physics world.
- [convexSweepTest(with:from:to:options:)](scnphysicsworld/convexsweeptest%28with_from_to_options_%29.md): Searches for physics bodies in the space formed by moving a convex shape through the physics world.

### Search Options

- [SCNPhysicsWorld.TestOption](scnphysicsworld/testoption.md): Keys in options dictionaries that affect how SceneKit searches for bodies in a collision, ray, or sweep test.

### Initializers

- [init(coder:)](scnphysicsworld/init%28coder_%29.md)

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
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physics in a Scene

- [SCNPhysicsField](scnphysicsfield.md): An object that applies forces, such as gravitation, electromagnetism, and turbulence, to physics bodies within a certain area of effect.
- [SCNPhysicsBehavior](scnphysicsbehavior.md): The abstract superclass for joints, vehicle simulations, and other high-level behaviors that incorporate multiple physics bodies.

# SCNPhysicsWorld (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The global simulation of collisions, gravity, joints, and other physics effects in a scene.

## Declaration

```objectivec
@interface SCNPhysicsWorld : NSObject
```

<a id="overview"></a>

## Overview

You do not create [SCNPhysicsWorld](scnphysicsworld.md) objects directly; instead, read the [physicsWorld](scnscene/physicsworld.md) property of an [SCNScene](scnscene.md) object. Use physics world object to perform the following tasks:

- Manage global properties of the simulation, such as its speed and constant gravity. (For more precise control of gravity and similar effects, see the [SCNPhysicsField](scnphysicsfield.md) class.)
- Register behaviors that modify interactions between the scene’s physics bodies, such as joints and vehicles. For more details, see [SCNPhysicsBehavior](scnphysicsbehavior.md).
- Specify a delegate object to receive messages when two physics bodies contact each other
- Perform specific contact tests, and search for physics bodies in the scene using ray and sweep tests.

## Topics

### Managing the Physics Simulation

- [gravity](scnphysicsworld/gravity.md): A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.
- [speed](scnphysicsworld/speed.md): The rate at which the simulation executes.
- [timeStep](scnphysicsworld/timestep.md): The time interval between updates to the physics simulation.
- [updateCollisionPairs](scnphysicsworld/updatecollisionpairs%28%29.md): Forces the physics engine to reevaluate possible collisions between physics bodies.

### Registering Physics Behaviors

- [addBehavior:](scnphysicsworld/addbehavior%28__%29.md): Adds a behavior to the physics world.
- [removeBehavior:](scnphysicsworld/removebehavior%28__%29.md): Removes a behavior from the physics world.
- [allBehaviors](scnphysicsworld/allbehaviors.md): The list of behaviors affecting bodies in the physics world.
- [removeAllBehaviors](scnphysicsworld/removeallbehaviors%28%29.md): Removes all behaviors affecting bodies in the physics world.

### Detecting Contacts Between Physics Bodies

- [contactDelegate](scnphysicsworld/contactdelegate.md): A delegate that is called when two physics bodies come in contact with each other.
- [contactTestBetweenBody:andBody:options:](scnphysicsworld/contacttestbetween%28____options_%29.md): Checks for contacts between two physics bodies.
- [contactTestWithBody:options:](scnphysicsworld/contacttest%28with_options_%29.md): Checks for contacts between one physics body and any other bodies in the physics world.

### Searching for Physics Bodies

- [rayTestWithSegmentFromPoint:toPoint:options:](scnphysicsworld/raytestwithsegment%28from_to_options_%29.md): Searches for physics bodies along a line segment between two points in the physics world.
- [convexSweepTestWithShape:fromTransform:toTransform:options:](scnphysicsworld/convexsweeptest%28with_from_to_options_%29.md): Searches for physics bodies in the space formed by moving a convex shape through the physics world.

### Search Options

- [SCNPhysicsTestOption](scnphysicsworld/testoption.md): Keys in options dictionaries that affect how SceneKit searches for bodies in a collision, ray, or sweep test.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physics in a Scene

- [SCNPhysicsField](scnphysicsfield.md): An object that applies forces, such as gravitation, electromagnetism, and turbulence, to physics bodies within a certain area of effect.
- [SCNPhysicsBehavior](scnphysicsbehavior.md): The abstract superclass for joints, vehicle simulations, and other high-level behaviors that incorporate multiple physics bodies.
