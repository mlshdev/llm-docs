> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutswimminglocationtype](https://developer.apple.com/documentation/healthkit/hkworkoutswimminglocationtype)

# HKWorkoutSwimmingLocationType (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

The possible locations for swimming.

## Declaration

```swift
enum HKWorkoutSwimmingLocationType
```

## Topics

### Swimming Locations

- [HKWorkoutSwimmingLocationType.openWater](hkworkoutswimminglocationtype/openwater.md): The user swam in open water like a lake or ocean.
- [HKWorkoutSwimmingLocationType.pool](hkworkoutswimminglocationtype/pool.md): The user swam in a pool.
- [HKWorkoutSwimmingLocationType.unknown](hkworkoutswimminglocationtype/unknown.md): The swimming location could not be determined.

### Initializers

- [init(rawValue:)](hkworkoutswimminglocationtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Session settings

- [activityType](hkworkoutconfiguration/activitytype.md): The workout session’s activity type.
- [locationType](hkworkoutconfiguration/locationtype.md): The workout session’s location.
- [HKWorkoutSessionLocationType](hkworkoutsessionlocationtype.md): A constant indicating whether the workout session takes place indoors or outdoors.
- [swimmingLocationType](hkworkoutconfiguration/swimminglocationtype.md): The workout session’s swimming location.
- [lapLength](hkworkoutconfiguration/laplength.md): The length of the lap for a workout session.

# HKWorkoutSwimmingLocationType (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

The possible locations for swimming.

## Declaration

```objectivec
enum HKWorkoutSwimmingLocationType : NSInteger;
```

## Topics

### Swimming Locations

- [HKWorkoutSwimmingLocationTypeOpenWater](hkworkoutswimminglocationtype/openwater.md): The user swam in open water like a lake or ocean.
- [HKWorkoutSwimmingLocationTypePool](hkworkoutswimminglocationtype/pool.md): The user swam in a pool.
- [HKWorkoutSwimmingLocationTypeUnknown](hkworkoutswimminglocationtype/unknown.md): The swimming location could not be determined.

## See Also

### Session settings

- [activityType](hkworkoutconfiguration/activitytype.md): The workout session’s activity type.
- [locationType](hkworkoutconfiguration/locationtype.md): The workout session’s location.
- [HKWorkoutSessionLocationType](hkworkoutsessionlocationtype.md): A constant indicating whether the workout session takes place indoors or outdoors.
- [swimmingLocationType](hkworkoutconfiguration/swimminglocationtype.md): The workout session’s swimming location.
- [lapLength](hkworkoutconfiguration/laplength.md): The length of the lap for a workout session.
