> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmedicationdoseevent/scheduletype-swift.enum](https://developer.apple.com/documentation/healthkit/hkmedicationdoseevent/scheduletype-swift.enum)

# HKMedicationDoseEvent.ScheduleType (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The kind of schedule the system associates with a logged medication dose event.

## Declaration

```swift
enum ScheduleType
```

<a id="overview"></a>

## Overview

Each value tells you whether the person logged the dose ad-hoc or in response to a scheduled medication reminder.

## Topics

### Enumeration Cases

- [HKMedicationDoseEvent.ScheduleType.asNeeded](scheduletype-swift.enum/asneeded.md): The person logged this dose event ad-hoc, outside of any scheduled reminder.
- [HKMedicationDoseEvent.ScheduleType.schedule](scheduletype-swift.enum/schedule.md): The person logged this dose event in response to a scheduled medication reminder.

### Initializers

- [init(rawValue:)](scheduletype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# HKMedicationDoseEventScheduleType (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The kind of schedule the system associates with a logged medication dose event.

## Declaration

```objectivec
enum HKMedicationDoseEventScheduleType : NSInteger;
```

<a id="overview"></a>

## Overview

Each value tells you whether the person logged the dose ad-hoc or in response to a scheduled medication reminder.

## Topics

### Enumeration Cases

- [HKMedicationDoseEventScheduleTypeAsNeeded](scheduletype-swift.enum/asneeded.md): The person logged this dose event ad-hoc, outside of any scheduled reminder.
- [HKMedicationDoseEventScheduleTypeSchedule](scheduletype-swift.enum/schedule.md): The person logged this dose event in response to a scheduled medication reminder.
