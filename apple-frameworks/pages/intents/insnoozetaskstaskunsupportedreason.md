> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetaskstaskunsupportedreason](https://developer.apple.com/documentation/intents/insnoozetaskstaskunsupportedreason)

# INSnoozeTasksTaskUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Constants that indicates the reason the app can’t support the snooze task request.

## Declaration

```swift
enum INSnoozeTasksTaskUnsupportedReason
```

## Topics

### Constants

- [INSnoozeTasksTaskUnsupportedReason.noTasksFound](insnoozetaskstaskunsupportedreason/notasksfound.md): Deprecated. A resolution result that indicates no tasks were found.

### Initializers

- [init(rawValue:)](insnoozetaskstaskunsupportedreason/init%28rawvalue_%29.md): Deprecated.

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

- [init(taskResolutionResult:)](insnoozetaskstaskresolutionresult/init%28taskresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully snoozing a task.
- [unsupported(forReason:)](insnoozetaskstaskresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task to be snoozed before continuing.

# INSnoozeTasksTaskUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Constants that indicates the reason the app can’t support the snooze task request.

## Declaration

```objectivec
enum INSnoozeTasksTaskUnsupportedReason : NSInteger;
```

## Topics

### Constants

- [INSnoozeTasksTaskUnsupportedReasonNoTasksFound](insnoozetaskstaskunsupportedreason/notasksfound.md): Deprecated. A resolution result that indicates no tasks were found.

## See Also

### Creating a Resolution Result

- [initWithTaskResolutionResult:](insnoozetaskstaskresolutionresult/init%28taskresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully snoozing a task.
- [unsupportedForReason:](insnoozetaskstaskresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task to be snoozed before continuing.
