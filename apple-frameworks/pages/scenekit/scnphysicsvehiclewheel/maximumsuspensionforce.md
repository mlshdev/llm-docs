> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehiclewheel/maximumsuspensionforce](https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/maximumsuspensionforce)

# maximumSuspensionForce (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The maximum force of the suspension between the vehicle and the wheel, in newtons.

## Declaration

```swift
var maximumSuspensionForce: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The physics simulation applies a force of no greater than this magnitude when contact with the ground causes the wheel to move relative to the vehicle. The default maximum suspension force is `6000.0`.

## See Also

### Simulating Suspension

- [suspensionStiffness](suspensionstiffness.md): The spring coefficient of the suspension between the vehicle and the wheel.
- [suspensionCompression](suspensioncompression.md): The coefficient that limits the speed of the suspension returning to its rest length when compressed.
- [suspensionDamping](suspensiondamping.md): The damping ratio that limits oscillation in the vehicle’s suspension.
- [maximumSuspensionTravel](maximumsuspensiontravel.md): The maximum distance that the wheel is allowed to move up or down relative to its connection point, in centimeters.
- [suspensionRestLength](suspensionrestlength.md): The resting length of the suspension, in meters.

# maximumSuspensionForce (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The maximum force of the suspension between the vehicle and the wheel, in newtons.

## Declaration

```objectivec
@property CGFloat maximumSuspensionForce;
```

<a id="Discussion"></a>

## Discussion

The physics simulation applies a force of no greater than this magnitude when contact with the ground causes the wheel to move relative to the vehicle. The default maximum suspension force is `6000.0`.

## See Also

### Simulating Suspension

- [suspensionStiffness](suspensionstiffness.md): The spring coefficient of the suspension between the vehicle and the wheel.
- [suspensionCompression](suspensioncompression.md): The coefficient that limits the speed of the suspension returning to its rest length when compressed.
- [suspensionDamping](suspensiondamping.md): The damping ratio that limits oscillation in the vehicle’s suspension.
- [maximumSuspensionTravel](maximumsuspensiontravel.md): The maximum distance that the wheel is allowed to move up or down relative to its connection point, in centimeters.
- [suspensionRestLength](suspensionrestlength.md): The resting length of the suspension, in meters.
