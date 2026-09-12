> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehicle/init(chassisbody:wheels:)](https://developer.apple.com/documentation/scenekit/scnphysicsvehicle/init(chassisbody:wheels:))

# init(chassisBody:wheels:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a vehicle behavior.

## Declaration

```swift
convenience init(chassisBody: SCNPhysicsBody, wheels: [SCNPhysicsVehicleWheel])
```

## Parameters

- `chassisBody`: A physics body to serve as the vehicle’s chassis.
- `wheels`: An array of [SCNPhysicsVehicleWheel](../scnphysicsvehiclewheel.md) objects representing the vehicle’s wheels. A vehicle must have at least one wheel.

<a id="return-value"></a>

## Return Value

A new vehicle behavior.

<a id="Discussion"></a>

## Discussion

Each object in the `wheels` array associates a node with the wheel to serve as its visual representation and defines properties for the wheel’s physical characteristics. Each wheel object must reference a unique node, which should be a child of the node containing the physics body used for the vehicle’s chassis. Typically, you load a node hierarchy representing the vehicle and all of its wheels from a scene file and then designate which nodes serve as the body and wheels.

For a behavior to take effect, you must add it to the physics simulation by calling the [addBehavior(\_:)](../scnphysicsworld/addbehavior%28__%29.md) method on your scene’s [SCNPhysicsWorld](../scnphysicsworld.md) object.

# vehicleWithChassisBody:wheels: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a vehicle behavior.

## Declaration

```objectivec
+ (instancetype) vehicleWithChassisBody:(SCNPhysicsBody *) chassisBody wheels:(NSArray<SCNPhysicsVehicleWheel *> *) wheels;
```

## Parameters

- `chassisBody`: A physics body to serve as the vehicle’s chassis.
- `wheels`: An array of [SCNPhysicsVehicleWheel](../scnphysicsvehiclewheel.md) objects representing the vehicle’s wheels. A vehicle must have at least one wheel.

<a id="return-value"></a>

## Return Value

A new vehicle behavior.

<a id="Discussion"></a>

## Discussion

Each object in the `wheels` array associates a node with the wheel to serve as its visual representation and defines properties for the wheel’s physical characteristics. Each wheel object must reference a unique node, which should be a child of the node containing the physics body used for the vehicle’s chassis. Typically, you load a node hierarchy representing the vehicle and all of its wheels from a scene file and then designate which nodes serve as the body and wheels.

For a behavior to take effect, you must add it to the physics simulation by calling the [addBehavior:](../scnphysicsworld/addbehavior%28__%29.md) method on your scene’s [SCNPhysicsWorld](../scnphysicsworld.md) object.
