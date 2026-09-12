> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intaskpriority](https://developer.apple.com/documentation/intents/intaskpriority)

# INTaskPriority (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Constants indicating the priority for a task.

> INTaskPriority is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
enum INTaskPriority
```

## Topics

### Constants

- [INTaskPriority.flagged](intaskpriority/flagged.md): Deprecated. A task the user flagged.
- [INTaskPriority.notFlagged](intaskpriority/notflagged.md): Deprecated. A task the user didn’t flag.
- [INTaskPriority.unknown](intaskpriority/unknown.md): Deprecated. The task’s priority isn’t known.

### Initializers

- [init(rawValue:)](intaskpriority/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Searching for Tasks by Their Priority

- [taskPriority](insearchfornotebookitemsintent/taskpriority.md): Deprecated.
- [temporalEventTriggerTypes](insearchfornotebookitemsintent/temporaleventtriggertypes.md): Deprecated.
- [INTemporalEventTriggerTypeOptions](intemporaleventtriggertypeoptions.md): Deprecated. Constants indicating how often to trigger an event.

# INTaskPriority (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Constants indicating the priority for a task.

> INTaskPriority is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
enum INTaskPriority : NSInteger;
```

## Topics

### Constants

- [INTaskPriorityFlagged](intaskpriority/flagged.md): Deprecated. A task the user flagged.
- [INTaskPriorityNotFlagged](intaskpriority/notflagged.md): Deprecated. A task the user didn’t flag.
- [INTaskPriorityUnknown](intaskpriority/unknown.md): Deprecated. The task’s priority isn’t known.

## See Also

### Searching for Tasks by Their Priority

- [taskPriority](insearchfornotebookitemsintent/taskpriority.md): Deprecated.
- [temporalEventTriggerTypes](insearchfornotebookitemsintent/temporaleventtriggertypes.md): Deprecated.
- [INTemporalEventTriggerTypeOptions](intemporaleventtriggertypeoptions.md): Deprecated. Constants indicating how often to trigger an event.
