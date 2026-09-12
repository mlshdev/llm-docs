> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintent/status](https://developer.apple.com/documentation/intents/insettaskattributeintent/status)

# status (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The status to apply to the task.

> INSetTaskAttributeIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var status: INTaskStatus { get }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [INTaskStatus.unknown](../intaskstatus/unknown.md), do not attempt to change the status of the task.

## See Also

### Getting the Task Information

- [priority](priority.md): Deprecated. The priority for the task.
- [taskTitle](tasktitle.md): Deprecated. The title for the task.
- [targetTask](targettask.md): Deprecated. The task targetted for modification.
- [INTaskStatus](../intaskstatus.md): Deprecated. Constants indicating the completion state of a task.

# status (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The status to apply to the task.

> INSetTaskAttributeIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INTaskStatus status;
```

```objectivec
@property (atomic, assign, readonly) INTaskStatus status;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [INTaskStatusUnknown](../intaskstatus/unknown.md), do not attempt to change the status of the task.

## See Also

### Getting the Task Information

- [priority](priority.md): Deprecated. The priority for the task.
- [taskTitle](tasktitle.md): Deprecated. The title for the task.
- [targetTask](targettask.md): Deprecated. The task targetted for modification.
- [INTaskStatus](../intaskstatus.md): Deprecated. Constants indicating the completion state of a task.
