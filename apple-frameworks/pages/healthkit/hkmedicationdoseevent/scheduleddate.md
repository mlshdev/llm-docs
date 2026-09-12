> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmedicationdoseevent/scheduleddate](https://developer.apple.com/documentation/healthkit/hkmedicationdoseevent/scheduleddate)

# scheduledDate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The date and time the person takes the medication, if scheduled.

## Declaration

```swift
var scheduledDate: Date? { get }
```

<a id="discussion"></a>

## Discussion

The value is always non-null for [HKMedicationDoseEvent.ScheduleType.schedule](scheduletype-swift.enum/schedule.md) and always null for  [HKMedicationDoseEvent.ScheduleType.asNeeded](scheduletype-swift.enum/asneeded.md).

# scheduledDate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The date and time the person takes the medication, if scheduled.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * scheduledDate;
```

<a id="discussion"></a>

## Discussion

The value is always non-null for [HKMedicationDoseEventScheduleTypeSchedule](scheduletype-swift.enum/schedule.md) and always null for  [HKMedicationDoseEventScheduleTypeAsNeeded](scheduletype-swift.enum/asneeded.md).
