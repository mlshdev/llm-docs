> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetaskstaskunsupportedreason](https://developer.apple.com/documentation/intents/indeletetaskstaskunsupportedreason)

# INDeleteTasksTaskUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Constants that indicate the reason the app can’t support the delete task request.

> INDeleteTasksTaskUnsupportedReason is deprecated. There is no replacement.

## Declaration

```swift
enum INDeleteTasksTaskUnsupportedReason
```

## Topics

### Reasons

- [INDeleteTasksTaskUnsupportedReason.noTasksFound](indeletetaskstaskunsupportedreason/notasksfound.md): Deprecated. No relevant tasks found.
- [INDeleteTasksTaskUnsupportedReason.noTasksInApp](indeletetaskstaskunsupportedreason/notasksinapp.md): Deprecated. No tasks exist in the app.

### Initializers

- [init(rawValue:)](indeletetaskstaskunsupportedreason/init%28rawvalue_%29.md): Deprecated.

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

- [init(taskResolutionResult:)](indeletetaskstaskresolutionresult/init%28taskresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully deleting a task.
- [unsupported(forReason:)](indeletetaskstaskresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task before continuing.

# INDeleteTasksTaskUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Constants that indicate the reason the app can’t support the delete task request.

> INDeleteTasksTaskUnsupportedReason is deprecated. There is no replacement.

## Declaration

```objectivec
enum INDeleteTasksTaskUnsupportedReason : NSInteger;
```

## Topics

### Reasons

- [INDeleteTasksTaskUnsupportedReasonNoTasksFound](indeletetaskstaskunsupportedreason/notasksfound.md): Deprecated. No relevant tasks found.
- [INDeleteTasksTaskUnsupportedReasonNoTasksInApp](indeletetaskstaskunsupportedreason/notasksinapp.md): Deprecated. No tasks exist in the app.

## See Also

### Creating a Resolution Result

- [initWithTaskResolutionResult:](indeletetaskstaskresolutionresult/init%28taskresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully deleting a task.
- [unsupportedForReason:](indeletetaskstaskresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task before continuing.
