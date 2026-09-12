> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetaskstasklistunsupportedreason](https://developer.apple.com/documentation/intents/indeletetaskstasklistunsupportedreason)

# INDeleteTasksTaskListUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Constants that indicate the reason an app can’t support the delete task request.

> INDeleteTasksTaskListUnsupportedReason is deprecated. There is no replacement.

## Declaration

```swift
enum INDeleteTasksTaskListUnsupportedReason
```

## Topics

### Constants

- [INDeleteTasksTaskListUnsupportedReason.noTaskListFound](indeletetaskstasklistunsupportedreason/notasklistfound.md): Deprecated. A resolution result that indicates no task list was found.

### Initializers

- [init(rawValue:)](indeletetaskstasklistunsupportedreason/init%28rawvalue_%29.md): Deprecated.

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

- [init(taskListResolutionResult:)](indeletetaskstasklistresolutionresult/init%28tasklistresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully deleting a task from a task list.
- [unsupported(forReason:)](indeletetaskstasklistresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task list before continuing.

# INDeleteTasksTaskListUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Constants that indicate the reason an app can’t support the delete task request.

> INDeleteTasksTaskListUnsupportedReason is deprecated. There is no replacement.

## Declaration

```objectivec
enum INDeleteTasksTaskListUnsupportedReason : NSInteger;
```

## Topics

### Constants

- [INDeleteTasksTaskListUnsupportedReasonNoTaskListFound](indeletetaskstasklistunsupportedreason/notasklistfound.md): Deprecated. A resolution result that indicates no task list was found.

## See Also

### Creating a Resolution Result

- [initWithTaskListResolutionResult:](indeletetaskstasklistresolutionresult/init%28tasklistresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully deleting a task from a task list.
- [unsupportedForReason:](indeletetaskstasklistresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task list before continuing.
