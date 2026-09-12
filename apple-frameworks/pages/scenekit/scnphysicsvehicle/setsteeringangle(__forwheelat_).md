> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehicle/setsteeringangle(_:forwheelat:)](https://developer.apple.com/documentation/scenekit/scnphysicsvehicle/setsteeringangle(_:forwheelat:))

# setSteeringAngle(\_:forWheelAt:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Pivots the specified wheel around its steering axis.

## Declaration

```swift
func setSteeringAngle(_ value: CGFloat, forWheelAt index: Int)
```

## Parameters

- `value`: The angle to set the wheel at relative to its steering axis, in radians.
- `index`: The index, in the vehicle’s [wheels](wheels.md) array, of the wheel to be pivoted.

<a id="Discussion"></a>

## Discussion

Steering angles are relative to the wheel’s [steeringAxis](../scnphysicsvehiclewheel/steeringaxis.md) vector. With the default steering axis of `{0.0, -1.0, 0.0}`, a steering angle of `0.0` represents neutral steering, positive values steer the vehicle to the right, and negative values steer to the left.

## See Also

### Driving a Vehicle

- [applyEngineForce(\_:forWheelAt:)](applyengineforce%28__forwheelat_%29.md): Applies a force between the specified wheel and the ground under the vehicle.
- [applyBrakingForce(\_:forWheelAt:)](applybrakingforce%28__forwheelat_%29.md): Applies a force between the specified wheel and the ground under the vehicle.
- [speedInKilometersPerHour](speedinkilometersperhour.md): The vehicle’s ground speed, in kilometers per hour.

# setSteeringAngle:forWheelAtIndex: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Pivots the specified wheel around its steering axis.

## Declaration

```objectivec
- (void) setSteeringAngle:(CGFloat) value forWheelAtIndex:(NSInteger) index;
```

## Parameters

- `value`: The angle to set the wheel at relative to its steering axis, in radians.
- `index`: The index, in the vehicle’s [wheels](wheels.md) array, of the wheel to be pivoted.

<a id="Discussion"></a>

## Discussion

Steering angles are relative to the wheel’s [steeringAxis](../scnphysicsvehiclewheel/steeringaxis.md) vector. With the default steering axis of `{0.0, -1.0, 0.0}`, a steering angle of `0.0` represents neutral steering, positive values steer the vehicle to the right, and negative values steer to the left.

## See Also

### Driving a Vehicle

- [applyEngineForce:forWheelAtIndex:](applyengineforce%28__forwheelat_%29.md): Applies a force between the specified wheel and the ground under the vehicle.
- [applyBrakingForce:forWheelAtIndex:](applybrakingforce%28__forwheelat_%29.md): Applies a force between the specified wheel and the ground under the vehicle.
- [speedInKilometersPerHour](speedinkilometersperhour.md): The vehicle’s ground speed, in kilometers per hour.
