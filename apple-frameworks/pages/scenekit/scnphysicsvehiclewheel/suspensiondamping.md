> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehiclewheel/suspensiondamping](https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/suspensiondamping)

# suspensionDamping (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The damping ratio that limits oscillation in the vehicle’s suspension.

## Declaration

```swift
var suspensionDamping: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

*Damping ratio* measures the tendency of the suspension to oscillate after a shock—in other words, for the vehicle to bounce up and down after running over a bump. The default damping ratio of `2.3` causes the wheel to return to its neutral position quickly after a shock. Values lower than `1.0` result in more oscillation.

## See Also

### Simulating Suspension

- [suspensionStiffness](suspensionstiffness.md): The spring coefficient of the suspension between the vehicle and the wheel.
- [suspensionCompression](suspensioncompression.md): The coefficient that limits the speed of the suspension returning to its rest length when compressed.
- [maximumSuspensionTravel](maximumsuspensiontravel.md): The maximum distance that the wheel is allowed to move up or down relative to its connection point, in centimeters.
- [maximumSuspensionForce](maximumsuspensionforce.md): The maximum force of the suspension between the vehicle and the wheel, in newtons.
- [suspensionRestLength](suspensionrestlength.md): The resting length of the suspension, in meters.

# suspensionDamping (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The damping ratio that limits oscillation in the vehicle’s suspension.

## Declaration

```objectivec
@property CGFloat suspensionDamping;
```

<a id="Discussion"></a>

## Discussion

*Damping ratio* measures the tendency of the suspension to oscillate after a shock—in other words, for the vehicle to bounce up and down after running over a bump. The default damping ratio of `2.3` causes the wheel to return to its neutral position quickly after a shock. Values lower than `1.0` result in more oscillation.

## See Also

### Simulating Suspension

- [suspensionStiffness](suspensionstiffness.md): The spring coefficient of the suspension between the vehicle and the wheel.
- [suspensionCompression](suspensioncompression.md): The coefficient that limits the speed of the suspension returning to its rest length when compressed.
- [maximumSuspensionTravel](maximumsuspensiontravel.md): The maximum distance that the wheel is allowed to move up or down relative to its connection point, in centimeters.
- [maximumSuspensionForce](maximumsuspensionforce.md): The maximum force of the suspension between the vehicle and the wheel, in newtons.
- [suspensionRestLength](suspensionrestlength.md): The resting length of the suspension, in meters.
