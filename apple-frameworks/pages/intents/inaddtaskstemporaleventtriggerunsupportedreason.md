> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtaskstemporaleventtriggerunsupportedreason](https://developer.apple.com/documentation/intents/inaddtaskstemporaleventtriggerunsupportedreason)

# INAddTasksTemporalEventTriggerUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Reasons the app can’t create a task with a particular temporal event trigger.

## Declaration

```swift
enum INAddTasksTemporalEventTriggerUnsupportedReason
```

## Topics

### Reasons

- [INAddTasksTemporalEventTriggerUnsupportedReason.invalidRecurrence](inaddtaskstemporaleventtriggerunsupportedreason/invalidrecurrence.md): Deprecated. The temporal event trigger refers to an invalid or unsupported schedule for repeating a task.
- [INAddTasksTemporalEventTriggerUnsupportedReason.timeInPast](inaddtaskstemporaleventtriggerunsupportedreason/timeinpast.md): Deprecated. The temporal event trigger refers to a moment or time span which has already occurred.

### Initializers

- [init(rawValue:)](inaddtaskstemporaleventtriggerunsupportedreason/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Resolution Result

- [init(temporalEventTriggerResolutionResult:)](inaddtaskstemporaleventtriggerresolutionresult/init%28temporaleventtriggerresolutionresult_%29.md): Deprecated. Creates an object whose resolution successfully matches the specified temporal event.
- [unsupported(forReason:)](inaddtaskstemporaleventtriggerresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution provides a reason why the temporal event trigger cannot be applied to the task the user intends to create.

# INAddTasksTemporalEventTriggerUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Reasons the app can’t create a task with a particular temporal event trigger.

## Declaration

```objectivec
enum INAddTasksTemporalEventTriggerUnsupportedReason : NSInteger;
```

## Topics

### Reasons

- [INAddTasksTemporalEventTriggerUnsupportedReasonInvalidRecurrence](inaddtaskstemporaleventtriggerunsupportedreason/invalidrecurrence.md): Deprecated. The temporal event trigger refers to an invalid or unsupported schedule for repeating a task.
- [INAddTasksTemporalEventTriggerUnsupportedReasonTimeInPast](inaddtaskstemporaleventtriggerunsupportedreason/timeinpast.md): Deprecated. The temporal event trigger refers to a moment or time span which has already occurred.

## See Also

### Creating a Resolution Result

- [initWithTemporalEventTriggerResolutionResult:](inaddtaskstemporaleventtriggerresolutionresult/init%28temporaleventtriggerresolutionresult_%29.md): Deprecated. Creates an object whose resolution successfully matches the specified temporal event.
- [unsupportedForReason:](inaddtaskstemporaleventtriggerresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution provides a reason why the temporal event trigger cannot be applied to the task the user intends to create.
