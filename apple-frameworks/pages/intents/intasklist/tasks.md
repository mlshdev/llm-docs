> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intasklist/tasks](https://developer.apple.com/documentation/intents/intasklist/tasks)

# tasks (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The array of individual tasks to perform.

> INTaskList is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var tasks: [INTask] { get }
```

<a id="Discussion"></a>

## Discussion

A task list contains one or more [INTask](../intask.md) objects representing the individual tasks. Each task has its own descriptive information and trigger conditions.

## See Also

### Getting the Task Attributes

- [title](title.md): Deprecated. The title text for the task list.

# tasks (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The array of individual tasks to perform.

> INTaskList is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<INTask *> * tasks;
```

```objectivec
@property (atomic, copy, readonly) NSArray<INTask *> * tasks;
```

<a id="Discussion"></a>

## Discussion

A task list contains one or more [INTask](../intask.md) objects representing the individual tasks. Each task has its own descriptive information and trigger conditions.

## See Also

### Getting the Task Attributes

- [title](title.md): Deprecated. The title text for the task list.
