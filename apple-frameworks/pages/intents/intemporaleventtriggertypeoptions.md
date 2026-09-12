> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intemporaleventtriggertypeoptions](https://developer.apple.com/documentation/intents/intemporaleventtriggertypeoptions)

# INTemporalEventTriggerTypeOptions (Swift)

**Framework:** Intents  
**Kind:** Structure  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Constants indicating how often to trigger an event.

> INTemporalEventTriggerTypeOptions is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
struct INTemporalEventTriggerTypeOptions
```

## Topics

### Temporal Event Triggers

- [notScheduled](intemporaleventtriggertypeoptions/notscheduled.md): Deprecated. No temporal event trigger scheduled.
- [scheduledNonRecurring](intemporaleventtriggertypeoptions/schedulednonrecurring.md): Deprecated. A single scheduled temporal event trigger.
- [scheduledRecurring](intemporaleventtriggertypeoptions/scheduledrecurring.md): Deprecated. A recurring, scheduled temporal event trigger.

### Initializers

- [init(rawValue:)](intemporaleventtriggertypeoptions/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Searching for Tasks by Their Priority

- [taskPriority](insearchfornotebookitemsintent/taskpriority.md): Deprecated.
- [INTaskPriority](intaskpriority.md): Deprecated. Constants indicating the priority for a task.
- [temporalEventTriggerTypes](insearchfornotebookitemsintent/temporaleventtriggertypes.md): Deprecated.

# INTemporalEventTriggerTypeOptions (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Constants indicating how often to trigger an event.

> INTemporalEventTriggerTypeOptions is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
enum INTemporalEventTriggerTypeOptions : NSUInteger;
```

## Topics

### Temporal Event Triggers

- [INTemporalEventTriggerTypeOptionNotScheduled](intemporaleventtriggertypeoptions/notscheduled.md): Deprecated. No temporal event trigger scheduled.
- [INTemporalEventTriggerTypeOptionScheduledNonRecurring](intemporaleventtriggertypeoptions/schedulednonrecurring.md): Deprecated. A single scheduled temporal event trigger.
- [INTemporalEventTriggerTypeOptionScheduledRecurring](intemporaleventtriggertypeoptions/scheduledrecurring.md): Deprecated. A recurring, scheduled temporal event trigger.

## See Also

### Searching for Tasks by Their Priority

- [taskPriority](insearchfornotebookitemsintent/taskpriority.md): Deprecated.
- [INTaskPriority](intaskpriority.md): Deprecated. Constants indicating the priority for a task.
- [temporalEventTriggerTypes](insearchfornotebookitemsintent/temporaleventtriggertypes.md): Deprecated.
