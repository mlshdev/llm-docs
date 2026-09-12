> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsvehicle/applybrakingforce(_:forwheelat:)](https://developer.apple.com/documentation/scenekit/scnphysicsvehicle/applybrakingforce(_:forwheelat:))

# applyBrakingForce(\_:forWheelAt:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Applies a force between the specified wheel and the ground under the vehicle.

## Declaration

```swift
func applyBrakingForce(_ value: CGFloat, forWheelAt index: Int)
```

## Parameters

- `value`: The magnitude of the torque, in newton-meters.
- `index`: The index of the wheel applying the force.

<a id="Discussion"></a>

## Discussion

Applying a braking force causes the wheel to slow down regardless of the direction it’s currently spinning in.

As with all physical quantities in SceneKit, you need not use realistic force measurements in your app—the effects of the physics simulation depend on the relative differences between forces, not on their absolute values. You may use whatever values produce the behavior or gameplay you’re looking for as long as you use them consistently.

Calling this method applies a braking force for one step (or frame) of the physics simulation. To continuously decelerate a vehicle, call this method again on subequent simulation steps (for example, from your scene renderer delegate’s [renderer(\_:updateAtTime:)](../scnscenerendererdelegate/renderer%28__updateattime_%29.md) method) until the vehicle stops or reaches your desired speed.

## See Also

### Driving a Vehicle

- [applyEngineForce(\_:forWheelAt:)](applyengineforce%28__forwheelat_%29.md): Applies a force between the specified wheel and the ground under the vehicle.
- [setSteeringAngle(\_:forWheelAt:)](setsteeringangle%28__forwheelat_%29.md): Pivots the specified wheel around its steering axis.
- [speedInKilometersPerHour](speedinkilometersperhour.md): The vehicle’s ground speed, in kilometers per hour.

# applyBrakingForce:forWheelAtIndex: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Applies a force between the specified wheel and the ground under the vehicle.

## Declaration

```objectivec
- (void) applyBrakingForce:(CGFloat) value forWheelAtIndex:(NSInteger) index;
```

## Parameters

- `value`: The magnitude of the torque, in newton-meters.
- `index`: The index of the wheel applying the force.

<a id="Discussion"></a>

## Discussion

Applying a braking force causes the wheel to slow down regardless of the direction it’s currently spinning in.

As with all physical quantities in SceneKit, you need not use realistic force measurements in your app—the effects of the physics simulation depend on the relative differences between forces, not on their absolute values. You may use whatever values produce the behavior or gameplay you’re looking for as long as you use them consistently.

Calling this method applies a braking force for one step (or frame) of the physics simulation. To continuously decelerate a vehicle, call this method again on subequent simulation steps (for example, from your scene renderer delegate’s [renderer:updateAtTime:](../scnscenerendererdelegate/renderer%28__updateattime_%29.md) method) until the vehicle stops or reaches your desired speed.

## See Also

### Driving a Vehicle

- [applyEngineForce:forWheelAtIndex:](applyengineforce%28__forwheelat_%29.md): Applies a force between the specified wheel and the ground under the vehicle.
- [setSteeringAngle:forWheelAtIndex:](setsteeringangle%28__forwheelat_%29.md): Pivots the specified wheel around its steering axis.
- [speedInKilometersPerHour](speedinkilometersperhour.md): The vehicle’s ground speed, in kilometers per hour.
