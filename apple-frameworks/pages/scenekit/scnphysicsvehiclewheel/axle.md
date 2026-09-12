> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehiclewheel/axle](https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/axle)

# axle (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The direction of the axis that the wheel spins around to move the vehicle.

## Declaration

```swift
var axle: SCNVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

This vector is expressed in the coordinate space of the node containing the vehicle’s chassis. The default axle direction is `{-1.0, 0.0, 0.0}`.

## See Also

### Managing a Wheel’s Connection to a Vehicle

- [connectionPosition](connectionposition.md): The position of the wheel’s connection to the vehicle’s chassis.
- [steeringAxis](steeringaxis.md): The direction of the axis that the wheel pivots around to steer the vehicle.

# axle (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The direction of the axis that the wheel spins around to move the vehicle.

## Declaration

```objectivec
@property SCNVector3 axle;
```

<a id="Discussion"></a>

## Discussion

This vector is expressed in the coordinate space of the node containing the vehicle’s chassis. The default axle direction is `{-1.0, 0.0, 0.0}`.

## See Also

### Managing a Wheel’s Connection to a Vehicle

- [connectionPosition](connectionposition.md): The position of the wheel’s connection to the vehicle’s chassis.
- [steeringAxis](steeringaxis.md): The direction of the axis that the wheel pivots around to steer the vehicle.
