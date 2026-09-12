> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/device](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/device)

# device (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

The device associated with the workout.

## Declaration

```swift
@NSCopying var device: HKDevice? { get }
```

## See Also

### Creating the builder

- [init(healthStore:configuration:device:)](init%28healthstore_configuration_device_%29.md): Returns a new workout builder object that is not connected to a workout session or other data source.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for the workout.

# device (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

The device associated with the workout.

## Declaration

```objectivec
@property (copy, readonly, nullable) HKDevice * device;
```

## See Also

### Creating the builder

- [initWithHealthStore:configuration:device:](init%28healthstore_configuration_device_%29.md): Returns a new workout builder object that is not connected to a workout session or other data source.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for the workout.
