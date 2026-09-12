> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehicle/chassisbody](https://developer.apple.com/documentation/scenekit/scnphysicsvehicle/chassisbody)

# chassisBody (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The physics body representing the vehicle’s chassis.

## Declaration

```swift
var chassisBody: SCNPhysicsBody { get }
```

<a id="Discussion"></a>

## Discussion

The vehicle’s chassis must be a dynamic body.

## See Also

### Working with a Vehicle’s Physical Characteristics

- [wheels](wheels.md): An array of [SCNPhysicsVehicleWheel](../scnphysicsvehiclewheel.md) objects representing the vehicle’s wheels.

# chassisBody (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The physics body representing the vehicle’s chassis.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNPhysicsBody * chassisBody;
```

<a id="Discussion"></a>

## Discussion

The vehicle’s chassis must be a dynamic body.

## See Also

### Working with a Vehicle’s Physical Characteristics

- [wheels](wheels.md): An array of [SCNPhysicsVehicleWheel](../scnphysicsvehiclewheel.md) objects representing the vehicle’s wheels.
