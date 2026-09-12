> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmedicationdoseevent/scheduletype-swift.property](https://developer.apple.com/documentation/healthkit/hkmedicationdoseevent/scheduletype-swift.property)

# scheduleType (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The scheduling context for this logged dose event.

## Declaration

```swift
var scheduleType: HKMedicationDoseEvent.ScheduleType { get }
```

<a id="discussion"></a>

## Discussion

The system sets this to [HKMedicationDoseEvent.ScheduleType.asNeeded](scheduletype-swift.enum/asneeded.md) when the person logs a dose without a schedule and [HKMedicationDoseEvent.ScheduleType.schedule](scheduletype-swift.enum/schedule.md) when a person logs a dose from a scheduled medication reminder.

# scheduleType (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The scheduling context for this logged dose event.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) HKMedicationDoseEventScheduleType scheduleType;
```

<a id="discussion"></a>

## Discussion

The system sets this to [HKMedicationDoseEventScheduleTypeAsNeeded](scheduletype-swift.enum/asneeded.md) when the person logs a dose without a schedule and [HKMedicationDoseEventScheduleTypeSchedule](scheduletype-swift.enum/schedule.md) when a person logs a dose from a scheduled medication reminder.
