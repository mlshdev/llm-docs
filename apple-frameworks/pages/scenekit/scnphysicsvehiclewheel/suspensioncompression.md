> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehiclewheel/suspensioncompression](https://developer.apple.com/documentation/scenekit/scnphysicsvehiclewheel/suspensioncompression)

# suspensionCompression (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The coefficient that limits the speed of the suspension returning to its rest length when compressed.

## Declaration

```swift
var suspensionCompression: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default suspension coefficient is `4.4`. Lower values cause the wheel to return to its natural position more quickly.

## See Also

### Simulating Suspension

- [suspensionStiffness](suspensionstiffness.md): The spring coefficient of the suspension between the vehicle and the wheel.
- [suspensionDamping](suspensiondamping.md): The damping ratio that limits oscillation in the vehicle’s suspension.
- [maximumSuspensionTravel](maximumsuspensiontravel.md): The maximum distance that the wheel is allowed to move up or down relative to its connection point, in centimeters.
- [maximumSuspensionForce](maximumsuspensionforce.md): The maximum force of the suspension between the vehicle and the wheel, in newtons.
- [suspensionRestLength](suspensionrestlength.md): The resting length of the suspension, in meters.

# suspensionCompression (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The coefficient that limits the speed of the suspension returning to its rest length when compressed.

## Declaration

```objectivec
@property CGFloat suspensionCompression;
```

<a id="Discussion"></a>

## Discussion

The default suspension coefficient is `4.4`. Lower values cause the wheel to return to its natural position more quickly.

## See Also

### Simulating Suspension

- [suspensionStiffness](suspensionstiffness.md): The spring coefficient of the suspension between the vehicle and the wheel.
- [suspensionDamping](suspensiondamping.md): The damping ratio that limits oscillation in the vehicle’s suspension.
- [maximumSuspensionTravel](maximumsuspensiontravel.md): The maximum distance that the wheel is allowed to move up or down relative to its connection point, in centimeters.
- [maximumSuspensionForce](maximumsuspensionforce.md): The maximum force of the suspension between the vehicle and the wheel, in newtons.
- [suspensionRestLength](suspensionrestlength.md): The resting length of the suspension, in meters.
