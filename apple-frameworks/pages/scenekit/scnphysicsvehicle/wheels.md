> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehicle/wheels](https://developer.apple.com/documentation/scenekit/scnphysicsvehicle/wheels)

# wheels (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An array of [SCNPhysicsVehicleWheel](../scnphysicsvehiclewheel.md) objects representing the vehicle’s wheels.

## Declaration

```swift
var wheels: [SCNPhysicsVehicleWheel] { get }
```

<a id="Discussion"></a>

## Discussion

You can dynamically change the suspension and traction properties of a wheel connected to the vehicle by using the corresponding [SCNPhysicsVehicleWheel](../scnphysicsvehiclewheel.md) object or by using [Key-value coding](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KeyValueCoding.html#//apple_ref/doc/uid/TP40008195-CH25) with a keypath of the form `wheels[index].propertyName`. For example, the following code changes the size of the first wheel attached to the vehicle, simulating a failed tire:

```objc
SCNPhysicsVehicle *vehicle = [SCNPhysicsVehicle vehicleWithChassisBody:car wheels:wheels];
[vehicle setValue:@0.1 forKeyPath:@"wheels[0].radius"];
```

## See Also

### Working with a Vehicle’s Physical Characteristics

- [chassisBody](chassisbody.md): The physics body representing the vehicle’s chassis.

# wheels (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

An array of [SCNPhysicsVehicleWheel](../scnphysicsvehiclewheel.md) objects representing the vehicle’s wheels.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<SCNPhysicsVehicleWheel *> * wheels;
```

<a id="Discussion"></a>

## Discussion

You can dynamically change the suspension and traction properties of a wheel connected to the vehicle by using the corresponding [SCNPhysicsVehicleWheel](../scnphysicsvehiclewheel.md) object or by using [Key-value coding](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KeyValueCoding.html#//apple_ref/doc/uid/TP40008195-CH25) with a keypath of the form `wheels[index].propertyName`. For example, the following code changes the size of the first wheel attached to the vehicle, simulating a failed tire:

```objc
SCNPhysicsVehicle *vehicle = [SCNPhysicsVehicle vehicleWithChassisBody:car wheels:wheels];
[vehicle setValue:@0.1 forKeyPath:@"wheels[0].radius"];
```

## See Also

### Working with a Vehicle’s Physical Characteristics

- [chassisBody](chassisbody.md): The physics body representing the vehicle’s chassis.
