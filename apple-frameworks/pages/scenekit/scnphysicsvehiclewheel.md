> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehiclewheel](https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel)

# SCNPhysicsVehicleWheel (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The appearance and physical characteristics of an individual wheel associated with an physics vehicle behavior.

## Declaration

```swift
class SCNPhysicsVehicleWheel
```

<a id="overview"></a>

## Overview

To use wheels in a vehicle simulation, include them when creating an [SCNPhysicsVehicle](scnphysicsvehicle.md) object with the [init(chassisBody:wheels:)](scnphysicsvehicle/init%28chassisbody_wheels_%29.md) initializer, then add the vehicle object to your scene’s physics world using the physics world’s [addBehavior(\_:)](scnphysicsworld/addbehavior%28__%29.md) method.

<a id="Creating-a-Wheel"></a>

### Creating a Wheel

You create a wheel with an [SCNNode](scnnode.md) object whose contents provide the wheel’s visual representation—a geometry that rotates when the simulated vehicle rolls along a surface. The node representing a wheel must be a child of the node containing the physics body that serves as the vehicle’s chassis, and each wheel in a vehicle must reference a unique node. Typically, you load a scene file that contains a node hierarchy representing the vehicle and all of its wheels. Next, you designate which nodes serve as the body and wheels.

Because the [SCNPhysicsVehicle](scnphysicsvehicle.md) behavior that a wheel is attached to manages its participation in the physics simulation, you don’t need to attach a physics body to the [SCNNode](scnnode.md) object representing a wheel.

<a id="Changing-a-Wheels-Physical-Properties"></a>

### Changing a Wheel’s Physical Properties

The properties of a wheel define the geometry of its connection to the vehicle and simulate its size, traction, and suspension. You can change these properties after the wheel and the vehicle containing it have been added to the physics world. In this way, you can simulate effects such as variable suspension and flat tires.

> **Note**

>  Vehicles and their wheels have several properties measured in real-world units (meters, centimeters, and newtons) with default values that produce realistic behavior for vehicles of size similar to an average automobile. If you design your scene on a different scale, proportionally change the values of these properties to fit the desired behavior of your app or game.

## Topics

### Creating a Wheel

- [init(node:)](scnphysicsvehiclewheel/init%28node_%29.md): Creates a wheel object.

### Managing a Wheel’s Connection to a Vehicle

- [connectionPosition](scnphysicsvehiclewheel/connectionposition.md): The position of the wheel’s connection to the vehicle’s chassis.
- [axle](scnphysicsvehiclewheel/axle.md): The direction of the axis that the wheel spins around to move the vehicle.
- [steeringAxis](scnphysicsvehiclewheel/steeringaxis.md): The direction of the axis that the wheel pivots around to steer the vehicle.

### Simulating Wheel Size

- [radius](scnphysicsvehiclewheel/radius.md): The radius of the wheel.

### Simulating Traction

- [frictionSlip](scnphysicsvehiclewheel/frictionslip.md): The traction between the wheel and any surface in contact with it.

### Simulating Suspension

- [suspensionStiffness](scnphysicsvehiclewheel/suspensionstiffness.md): The spring coefficient of the suspension between the vehicle and the wheel.
- [suspensionCompression](scnphysicsvehiclewheel/suspensioncompression.md): The coefficient that limits the speed of the suspension returning to its rest length when compressed.
- [suspensionDamping](scnphysicsvehiclewheel/suspensiondamping.md): The damping ratio that limits oscillation in the vehicle’s suspension.
- [maximumSuspensionTravel](scnphysicsvehiclewheel/maximumsuspensiontravel.md): The maximum distance that the wheel is allowed to move up or down relative to its connection point, in centimeters.
- [maximumSuspensionForce](scnphysicsvehiclewheel/maximumsuspensionforce.md): The maximum force of the suspension between the vehicle and the wheel, in newtons.
- [suspensionRestLength](scnphysicsvehiclewheel/suspensionrestlength.md): The resting length of the suspension, in meters.

### Inspecting the Wheel Node

- [node](scnphysicsvehiclewheel/node.md): The node providing the wheel’s visual representation.

### Initializers

- [init(coder:)](scnphysicsvehiclewheel/init%28coder_%29.md)

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

### Vehicle Simulation

- [SCNPhysicsVehicle](scnphysicsvehicle.md): A physics behavior that modifies a physics body to behave like a car, motorcycle, or other wheeled vehicle.

# SCNPhysicsVehicleWheel (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The appearance and physical characteristics of an individual wheel associated with an physics vehicle behavior.

## Declaration

```objectivec
@interface SCNPhysicsVehicleWheel : NSObject
```

<a id="overview"></a>

## Overview

To use wheels in a vehicle simulation, include them when creating an [SCNPhysicsVehicle](scnphysicsvehicle.md) object with the [vehicleWithChassisBody:wheels:](scnphysicsvehicle/init%28chassisbody_wheels_%29.md) initializer, then add the vehicle object to your scene’s physics world using the physics world’s [addBehavior:](scnphysicsworld/addbehavior%28__%29.md) method.

<a id="Creating-a-Wheel"></a>

### Creating a Wheel

You create a wheel with an [SCNNode](scnnode.md) object whose contents provide the wheel’s visual representation—a geometry that rotates when the simulated vehicle rolls along a surface. The node representing a wheel must be a child of the node containing the physics body that serves as the vehicle’s chassis, and each wheel in a vehicle must reference a unique node. Typically, you load a scene file that contains a node hierarchy representing the vehicle and all of its wheels. Next, you designate which nodes serve as the body and wheels.

Because the [SCNPhysicsVehicle](scnphysicsvehicle.md) behavior that a wheel is attached to manages its participation in the physics simulation, you don’t need to attach a physics body to the [SCNNode](scnnode.md) object representing a wheel.

<a id="Changing-a-Wheels-Physical-Properties"></a>

### Changing a Wheel’s Physical Properties

The properties of a wheel define the geometry of its connection to the vehicle and simulate its size, traction, and suspension. You can change these properties after the wheel and the vehicle containing it have been added to the physics world. In this way, you can simulate effects such as variable suspension and flat tires.

> **Note**

>  Vehicles and their wheels have several properties measured in real-world units (meters, centimeters, and newtons) with default values that produce realistic behavior for vehicles of size similar to an average automobile. If you design your scene on a different scale, proportionally change the values of these properties to fit the desired behavior of your app or game.

## Topics

### Creating a Wheel

- [wheelWithNode:](scnphysicsvehiclewheel/init%28node_%29.md): Creates a wheel object.

### Managing a Wheel’s Connection to a Vehicle

- [connectionPosition](scnphysicsvehiclewheel/connectionposition.md): The position of the wheel’s connection to the vehicle’s chassis.
- [axle](scnphysicsvehiclewheel/axle.md): The direction of the axis that the wheel spins around to move the vehicle.
- [steeringAxis](scnphysicsvehiclewheel/steeringaxis.md): The direction of the axis that the wheel pivots around to steer the vehicle.

### Simulating Wheel Size

- [radius](scnphysicsvehiclewheel/radius.md): The radius of the wheel.

### Simulating Traction

- [frictionSlip](scnphysicsvehiclewheel/frictionslip.md): The traction between the wheel and any surface in contact with it.

### Simulating Suspension

- [suspensionStiffness](scnphysicsvehiclewheel/suspensionstiffness.md): The spring coefficient of the suspension between the vehicle and the wheel.
- [suspensionCompression](scnphysicsvehiclewheel/suspensioncompression.md): The coefficient that limits the speed of the suspension returning to its rest length when compressed.
- [suspensionDamping](scnphysicsvehiclewheel/suspensiondamping.md): The damping ratio that limits oscillation in the vehicle’s suspension.
- [maximumSuspensionTravel](scnphysicsvehiclewheel/maximumsuspensiontravel.md): The maximum distance that the wheel is allowed to move up or down relative to its connection point, in centimeters.
- [maximumSuspensionForce](scnphysicsvehiclewheel/maximumsuspensionforce.md): The maximum force of the suspension between the vehicle and the wheel, in newtons.
- [suspensionRestLength](scnphysicsvehiclewheel/suspensionrestlength.md): The resting length of the suspension, in meters.

### Inspecting the Wheel Node

- [node](scnphysicsvehiclewheel/node.md): The node providing the wheel’s visual representation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Vehicle Simulation

- [SCNPhysicsVehicle](scnphysicsvehicle.md): A physics behavior that modifies a physics body to behave like a car, motorcycle, or other wheeled vehicle.
