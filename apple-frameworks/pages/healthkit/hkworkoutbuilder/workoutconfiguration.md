> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/workoutconfiguration](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/workoutconfiguration)

# workoutConfiguration (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

The configuration information for the workout.

## Declaration

```swift
@NSCopying var workoutConfiguration: HKWorkoutConfiguration { get }
```

## See Also

### Creating the builder

- [init(healthStore:configuration:device:)](init%28healthstore_configuration_device_%29.md): Returns a new workout builder object that is not connected to a workout session or other data source.
- [device](device.md): The device associated with the workout.

# workoutConfiguration (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

The configuration information for the workout.

## Declaration

```objectivec
@property (copy, readonly) HKWorkoutConfiguration * workoutConfiguration;
```

## See Also

### Creating the builder

- [initWithHealthStore:configuration:device:](init%28healthstore_configuration_device_%29.md): Returns a new workout builder object that is not connected to a workout session or other data source.
- [device](device.md): The device associated with the workout.
