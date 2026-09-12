> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehicle](https://developer.apple.com/documentation/scenekit/scnphysicsvehicle)

# SCNPhysicsVehicle (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A physics behavior that modifies a physics body to behave like a car, motorcycle, or other wheeled vehicle.

## Declaration

```swift
class SCNPhysicsVehicle
```

<a id="overview"></a>

## Overview

To build a vehicle, designate an [SCNPhysicsBody](scnphysicsbody.md) object as its chassis and an array of [SCNPhysicsVehicleWheel](scnphysicsvehiclewheel.md) objects as its wheels. For each wheel, you define physical characteristics such as suspension and traction, and associate a node in your scene to provide the wheel’s size and visual representation. After you construct a vehicle, you can control it in terms of acceleration, braking, and steering.

Although it’s also possible to use a set of physics bodies and joints to collectively simulate a wheeled vehicle, the [SCNPhysicsVehicle](scnphysicsvehicle.md) class implements a higher-level simulation that provides realistic vehicle behavior with more efficient simulation performance.

## Topics

### Creating a Vehicle

- [init(chassisBody:wheels:)](scnphysicsvehicle/init%28chassisbody_wheels_%29.md): Creates a vehicle behavior.

### Working with a Vehicle’s Physical Characteristics

- [chassisBody](scnphysicsvehicle/chassisbody.md): The physics body representing the vehicle’s chassis.
- [wheels](scnphysicsvehicle/wheels.md): An array of [SCNPhysicsVehicleWheel](scnphysicsvehiclewheel.md) objects representing the vehicle’s wheels.

### Driving a Vehicle

- [applyEngineForce(\_:forWheelAt:)](scnphysicsvehicle/applyengineforce%28__forwheelat_%29.md): Applies a force between the specified wheel and the ground under the vehicle.
- [applyBrakingForce(\_:forWheelAt:)](scnphysicsvehicle/applybrakingforce%28__forwheelat_%29.md): Applies a force between the specified wheel and the ground under the vehicle.
- [setSteeringAngle(\_:forWheelAt:)](scnphysicsvehicle/setsteeringangle%28__forwheelat_%29.md): Pivots the specified wheel around its steering axis.
- [speedInKilometersPerHour](scnphysicsvehicle/speedinkilometersperhour.md): The vehicle’s ground speed, in kilometers per hour.

## Relationships

### Inherits From

- [SCNPhysicsBehavior](scnphysicsbehavior.md)

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

### Vehicle Simulation

- [SCNPhysicsVehicleWheel](scnphysicsvehiclewheel.md): The appearance and physical characteristics of an individual wheel associated with an physics vehicle behavior.

# SCNPhysicsVehicle (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A physics behavior that modifies a physics body to behave like a car, motorcycle, or other wheeled vehicle.

## Declaration

```objectivec
@interface SCNPhysicsVehicle : SCNPhysicsBehavior
```

<a id="overview"></a>

## Overview

To build a vehicle, designate an [SCNPhysicsBody](scnphysicsbody.md) object as its chassis and an array of [SCNPhysicsVehicleWheel](scnphysicsvehiclewheel.md) objects as its wheels. For each wheel, you define physical characteristics such as suspension and traction, and associate a node in your scene to provide the wheel’s size and visual representation. After you construct a vehicle, you can control it in terms of acceleration, braking, and steering.

Although it’s also possible to use a set of physics bodies and joints to collectively simulate a wheeled vehicle, the [SCNPhysicsVehicle](scnphysicsvehicle.md) class implements a higher-level simulation that provides realistic vehicle behavior with more efficient simulation performance.

## Topics

### Creating a Vehicle

- [vehicleWithChassisBody:wheels:](scnphysicsvehicle/init%28chassisbody_wheels_%29.md): Creates a vehicle behavior.

### Working with a Vehicle’s Physical Characteristics

- [chassisBody](scnphysicsvehicle/chassisbody.md): The physics body representing the vehicle’s chassis.
- [wheels](scnphysicsvehicle/wheels.md): An array of [SCNPhysicsVehicleWheel](scnphysicsvehiclewheel.md) objects representing the vehicle’s wheels.

### Driving a Vehicle

- [applyEngineForce:forWheelAtIndex:](scnphysicsvehicle/applyengineforce%28__forwheelat_%29.md): Applies a force between the specified wheel and the ground under the vehicle.
- [applyBrakingForce:forWheelAtIndex:](scnphysicsvehicle/applybrakingforce%28__forwheelat_%29.md): Applies a force between the specified wheel and the ground under the vehicle.
- [setSteeringAngle:forWheelAtIndex:](scnphysicsvehicle/setsteeringangle%28__forwheelat_%29.md): Pivots the specified wheel around its steering axis.
- [speedInKilometersPerHour](scnphysicsvehicle/speedinkilometersperhour.md): The vehicle’s ground speed, in kilometers per hour.

## Relationships

### Inherits From

- [SCNPhysicsBehavior](scnphysicsbehavior.md)

## See Also

### Vehicle Simulation

- [SCNPhysicsVehicleWheel](scnphysicsvehiclewheel.md): The appearance and physical characteristics of an individual wheel associated with an physics vehicle behavior.
