> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintent/targettask](https://developer.apple.com/documentation/intents/insettaskattributeintent/targettask)

# targetTask (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The task targetted for modification.

> INSetTaskAttributeIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var targetTask: INTask? { get }
```

## See Also

### Getting the Task Information

- [priority](priority.md): Deprecated. The priority for the task.
- [taskTitle](tasktitle.md): Deprecated. The title for the task.
- [status](status.md): Deprecated. The status to apply to the task.
- [INTaskStatus](../intaskstatus.md): Deprecated. Constants indicating the completion state of a task.

# targetTask (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The task targetted for modification.

> INSetTaskAttributeIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INTask * targetTask;
```

```objectivec
@property (atomic, copy, readonly, nullable) INTask * targetTask;
```

## See Also

### Getting the Task Information

- [priority](priority.md): Deprecated. The priority for the task.
- [taskTitle](tasktitle.md): Deprecated. The title for the task.
- [status](status.md): Deprecated. The status to apply to the task.
- [INTaskStatus](../intaskstatus.md): Deprecated. Constants indicating the completion state of a task.
