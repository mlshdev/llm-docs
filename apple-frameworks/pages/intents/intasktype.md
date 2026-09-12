> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intasktype](https://developer.apple.com/documentation/intents/intasktype)

# INTaskType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating how the task behaves.

> INTaskType is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
enum INTaskType
```

## Topics

### Constants

- [INTaskType.unknown](intasktype/unknown.md): Deprecated. An unknown type of task.
- [INTaskType.notCompletable](intasktype/notcompletable.md): Deprecated. A task that the intent can’t mark as completed.
- [INTaskType.completable](intasktype/completable.md): Deprecated. A task that the intent can mark as completed.

### Initializers

- [init(rawValue:)](intasktype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Task Type

- [taskType](intask/tasktype.md): Deprecated. Information about the behavior of the task in your app.

# INTaskType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating how the task behaves.

> INTaskType is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
enum INTaskType : NSInteger;
```

## Topics

### Constants

- [INTaskTypeUnknown](intasktype/unknown.md): Deprecated. An unknown type of task.
- [INTaskTypeNotCompletable](intasktype/notcompletable.md): Deprecated. A task that the intent can’t mark as completed.
- [INTaskTypeCompletable](intasktype/completable.md): Deprecated. A task that the intent can mark as completed.

## See Also

### Getting the Task Type

- [taskType](intask/tasktype.md): Deprecated. Information about the behavior of the task in your app.
