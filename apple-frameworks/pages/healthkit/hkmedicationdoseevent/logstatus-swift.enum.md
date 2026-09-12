> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmedicationdoseevent/logstatus-swift.enum](https://developer.apple.com/documentation/healthkit/hkmedicationdoseevent/logstatus-swift.enum)

# HKMedicationDoseEvent.LogStatus (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The statuses the system assigns to a logged medication dose event.

## Declaration

```swift
enum LogStatus
```

## Topics

### Enumeration Cases

- [HKMedicationDoseEvent.LogStatus.notInteracted](logstatus-swift.enum/notinteracted.md): The person doesn’t interact with a scheduled medication reminder.
- [HKMedicationDoseEvent.LogStatus.notLogged](logstatus-swift.enum/notlogged.md): The person undoes a previously logged medication status.
- [HKMedicationDoseEvent.LogStatus.notificationNotSent](logstatus-swift.enum/notificationnotsent.md): The system assigns this status when it fails to deliver a scheduled medication notification.
- [HKMedicationDoseEvent.LogStatus.skipped](logstatus-swift.enum/skipped.md): The person logs that they skipped the medication dose.
- [HKMedicationDoseEvent.LogStatus.snoozed](logstatus-swift.enum/snoozed.md): The person snoozes a scheduled medication notification.
- [HKMedicationDoseEvent.LogStatus.taken](logstatus-swift.enum/taken.md): The person logs that they took the medication dose.

### Initializers

- [init(rawValue:)](logstatus-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# HKMedicationDoseEventLogStatus (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The statuses the system assigns to a logged medication dose event.

## Declaration

```objectivec
enum HKMedicationDoseEventLogStatus : NSInteger;
```

## Topics

### Enumeration Cases

- [HKMedicationDoseEventLogStatusNotInteracted](logstatus-swift.enum/notinteracted.md): The person doesn’t interact with a scheduled medication reminder.
- [HKMedicationDoseEventLogStatusNotLogged](logstatus-swift.enum/notlogged.md): The person undoes a previously logged medication status.
- [HKMedicationDoseEventLogStatusNotificationNotSent](logstatus-swift.enum/notificationnotsent.md): The system assigns this status when it fails to deliver a scheduled medication notification.
- [HKMedicationDoseEventLogStatusSkipped](logstatus-swift.enum/skipped.md): The person logs that they skipped the medication dose.
- [HKMedicationDoseEventLogStatusSnoozed](logstatus-swift.enum/snoozed.md): The person snoozes a scheduled medication notification.
- [HKMedicationDoseEventLogStatusTaken](logstatus-swift.enum/taken.md): The person logs that they took the medication dose.
