> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsessionlocationtype](https://developer.apple.com/documentation/healthkit/hkworkoutsessionlocationtype)

# HKWorkoutSessionLocationType (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A constant indicating whether the workout session takes place indoors or outdoors.

## Declaration

```swift
enum HKWorkoutSessionLocationType
```

## Topics

### Constants

- [HKWorkoutSessionLocationType.unknown](hkworkoutsessionlocationtype/unknown.md): It is not known whether the workout session is taking place indoors or outdoors.
- [HKWorkoutSessionLocationType.indoor](hkworkoutsessionlocationtype/indoor.md): The workout session is indoors.
- [HKWorkoutSessionLocationType.outdoor](hkworkoutsessionlocationtype/outdoor.md): The workout session is outdoors.

### Initializers

- [init(rawValue:)](hkworkoutsessionlocationtype/init%28rawvalue_%29.md)

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
- [swimmingLocationType](hkworkoutconfiguration/swimminglocationtype.md): The workout session’s swimming location.
- [HKWorkoutSwimmingLocationType](hkworkoutswimminglocationtype.md): The possible locations for swimming.
- [lapLength](hkworkoutconfiguration/laplength.md): The length of the lap for a workout session.

# HKWorkoutSessionLocationType (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A constant indicating whether the workout session takes place indoors or outdoors.

## Declaration

```objectivec
enum HKWorkoutSessionLocationType : NSInteger;
```

## Topics

### Constants

- [HKWorkoutSessionLocationTypeUnknown](hkworkoutsessionlocationtype/unknown.md): It is not known whether the workout session is taking place indoors or outdoors.
- [HKWorkoutSessionLocationTypeIndoor](hkworkoutsessionlocationtype/indoor.md): The workout session is indoors.
- [HKWorkoutSessionLocationTypeOutdoor](hkworkoutsessionlocationtype/outdoor.md): The workout session is outdoors.

## See Also

### Session settings

- [activityType](hkworkoutconfiguration/activitytype.md): The workout session’s activity type.
- [locationType](hkworkoutconfiguration/locationtype.md): The workout session’s location.
- [swimmingLocationType](hkworkoutconfiguration/swimminglocationtype.md): The workout session’s swimming location.
- [HKWorkoutSwimmingLocationType](hkworkoutswimminglocationtype.md): The possible locations for swimming.
- [lapLength](hkworkoutconfiguration/laplength.md): The length of the lap for a workout session.
