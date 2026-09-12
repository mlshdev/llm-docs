> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehiclewheel/maximumsuspensiontravel](https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/maximumsuspensiontravel)

# maximumSuspensionTravel (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The maximum distance that the wheel is allowed to move up or down relative to its connection point, in centimeters.

## Declaration

```swift
var maximumSuspensionTravel: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

*Travel* is the total distance a wheel is allowed to move (in both directions), in the coordinate system of the node containing the vehicle’s chassis. The default suspension travel is `500.0`.

## See Also

### Simulating Suspension

- [suspensionStiffness](suspensionstiffness.md): The spring coefficient of the suspension between the vehicle and the wheel.
- [suspensionCompression](suspensioncompression.md): The coefficient that limits the speed of the suspension returning to its rest length when compressed.
- [suspensionDamping](suspensiondamping.md): The damping ratio that limits oscillation in the vehicle’s suspension.
- [maximumSuspensionForce](maximumsuspensionforce.md): The maximum force of the suspension between the vehicle and the wheel, in newtons.
- [suspensionRestLength](suspensionrestlength.md): The resting length of the suspension, in meters.

# maximumSuspensionTravel (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The maximum distance that the wheel is allowed to move up or down relative to its connection point, in centimeters.

## Declaration

```objectivec
@property CGFloat maximumSuspensionTravel;
```

<a id="Discussion"></a>

## Discussion

*Travel* is the total distance a wheel is allowed to move (in both directions), in the coordinate system of the node containing the vehicle’s chassis. The default suspension travel is `500.0`.

## See Also

### Simulating Suspension

- [suspensionStiffness](suspensionstiffness.md): The spring coefficient of the suspension between the vehicle and the wheel.
- [suspensionCompression](suspensioncompression.md): The coefficient that limits the speed of the suspension returning to its rest length when compressed.
- [suspensionDamping](suspensiondamping.md): The damping ratio that limits oscillation in the vehicle’s suspension.
- [maximumSuspensionForce](maximumsuspensionforce.md): The maximum force of the suspension between the vehicle and the wheel, in newtons.
- [suspensionRestLength](suspensionrestlength.md): The resting length of the suspension, in meters.
