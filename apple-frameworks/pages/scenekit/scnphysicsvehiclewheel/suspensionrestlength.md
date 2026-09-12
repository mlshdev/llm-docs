> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehiclewheel/suspensionrestlength](https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/suspensionrestlength)

# suspensionRestLength (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The resting length of the suspension, in meters.

## Declaration

```swift
var suspensionRestLength: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property measures the length of the simulated spring between the vehicle and its wheel when the spring is not stressed by the weight of either body. When the wheel receives a shock (for example, when the vehicle runs over a bump), SceneKit adds the difference between the wheel’s current position and its connection position to this rest length and then applies a force between the wheel and vehicle proportional to the total.

## See Also

### Simulating Suspension

- [suspensionStiffness](suspensionstiffness.md): The spring coefficient of the suspension between the vehicle and the wheel.
- [suspensionCompression](suspensioncompression.md): The coefficient that limits the speed of the suspension returning to its rest length when compressed.
- [suspensionDamping](suspensiondamping.md): The damping ratio that limits oscillation in the vehicle’s suspension.
- [maximumSuspensionTravel](maximumsuspensiontravel.md): The maximum distance that the wheel is allowed to move up or down relative to its connection point, in centimeters.
- [maximumSuspensionForce](maximumsuspensionforce.md): The maximum force of the suspension between the vehicle and the wheel, in newtons.

# suspensionRestLength (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The resting length of the suspension, in meters.

## Declaration

```objectivec
@property CGFloat suspensionRestLength;
```

<a id="Discussion"></a>

## Discussion

This property measures the length of the simulated spring between the vehicle and its wheel when the spring is not stressed by the weight of either body. When the wheel receives a shock (for example, when the vehicle runs over a bump), SceneKit adds the difference between the wheel’s current position and its connection position to this rest length and then applies a force between the wheel and vehicle proportional to the total.

## See Also

### Simulating Suspension

- [suspensionStiffness](suspensionstiffness.md): The spring coefficient of the suspension between the vehicle and the wheel.
- [suspensionCompression](suspensioncompression.md): The coefficient that limits the speed of the suspension returning to its rest length when compressed.
- [suspensionDamping](suspensiondamping.md): The damping ratio that limits oscillation in the vehicle’s suspension.
- [maximumSuspensionTravel](maximumsuspensiontravel.md): The maximum distance that the wheel is allowed to move up or down relative to its connection point, in centimeters.
- [maximumSuspensionForce](maximumsuspensionforce.md): The maximum force of the suspension between the vehicle and the wheel, in newtons.
