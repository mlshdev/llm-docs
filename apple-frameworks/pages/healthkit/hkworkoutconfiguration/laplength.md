> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkworkoutconfiguration/laplength

# lapLength (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

The length of the lap for a workout session.

## Declaration

```swift
@NSCopying var lapLength: HKQuantity? { get set }
```

## See Also

### Session settings

- [activityType](activitytype.md): The workout session’s activity type.
- [locationType](locationtype.md): The workout session’s location.
- [HKWorkoutSessionLocationType](../hkworkoutsessionlocationtype.md): A constant indicating whether the workout session takes place indoors or outdoors.
- [swimmingLocationType](swimminglocationtype.md): The workout session’s swimming location.
- [HKWorkoutSwimmingLocationType](../hkworkoutswimminglocationtype.md): The possible locations for swimming.

# lapLength (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

The length of the lap for a workout session.

## Declaration

```objectivec
@property (copy, nullable) HKQuantity * lapLength;
```

## See Also

### Session settings

- [activityType](activitytype.md): The workout session’s activity type.
- [locationType](locationtype.md): The workout session’s location.
- [HKWorkoutSessionLocationType](../hkworkoutsessionlocationtype.md): A constant indicating whether the workout session takes place indoors or outdoors.
- [swimmingLocationType](swimminglocationtype.md): The workout session’s swimming location.
- [HKWorkoutSwimmingLocationType](../hkworkoutswimminglocationtype.md): The possible locations for swimming.
