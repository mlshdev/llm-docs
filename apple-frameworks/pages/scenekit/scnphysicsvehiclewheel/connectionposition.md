> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehiclewheel/connectionposition](https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/connectionposition)

# connectionPosition (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The position of the wheel’s connection to the vehicle’s chassis.

## Declaration

```swift
var connectionPosition: SCNVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

This vector is expressed in the coordinate space of the node containing the vehicle’s chassis. When you create a wheel from a node, SceneKit uses the node’s [position](../scnnode/position.md) property as the wheel’s connection point.

## See Also

### Managing a Wheel’s Connection to a Vehicle

- [axle](axle.md): The direction of the axis that the wheel spins around to move the vehicle.
- [steeringAxis](steeringaxis.md): The direction of the axis that the wheel pivots around to steer the vehicle.

# connectionPosition (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The position of the wheel’s connection to the vehicle’s chassis.

## Declaration

```objectivec
@property SCNVector3 connectionPosition;
```

<a id="Discussion"></a>

## Discussion

This vector is expressed in the coordinate space of the node containing the vehicle’s chassis. When you create a wheel from a node, SceneKit uses the node’s [position](../scnnode/position.md) property as the wheel’s connection point.

## See Also

### Managing a Wheel’s Connection to a Vehicle

- [axle](axle.md): The direction of the axis that the wheel spins around to move the vehicle.
- [steeringAxis](steeringaxis.md): The direction of the axis that the wheel pivots around to steer the vehicle.
