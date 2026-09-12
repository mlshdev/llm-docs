> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/init(healthstore:configuration:device:)](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/init(healthstore:configuration:device:))

# init(healthStore:configuration:device:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Returns a new workout builder object that is not connected to a workout session or other data source.

## Declaration

```swift
init(healthStore: HKHealthStore, configuration: HKWorkoutConfiguration, device: HKDevice?)
```

## See Also

### Creating the builder

- [device](device.md): The device associated with the workout.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for the workout.

# initWithHealthStore:configuration:device: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Returns a new workout builder object that is not connected to a workout session or other data source.

## Declaration

```objectivec
- (instancetype) initWithHealthStore:(HKHealthStore *) healthStore configuration:(HKWorkoutConfiguration *) configuration device:(HKDevice *) device;
```

## See Also

### Creating the builder

- [device](device.md): The device associated with the workout.
- [workoutConfiguration](workoutconfiguration.md): The configuration information for the workout.
