> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmedicationdoseevent/scheduleddosequantity-7ffhr](https://developer.apple.com/documentation/healthkit/hkmedicationdoseevent/scheduleddosequantity-7ffhr)

# scheduledDoseQuantity

**Interface language:** Objective-C

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The dose quantity a person is expected to take based on their medication schedule.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSNumber * scheduledDoseQuantity;
```

<a id="discussion"></a>

## Discussion

The value is always non-null for [HKMedicationDoseEventScheduleTypeSchedule](scheduletype-swift.enum/schedule.md), and always null for [HKMedicationDoseEventScheduleTypeAsNeeded](scheduletype-swift.enum/asneeded.md).
