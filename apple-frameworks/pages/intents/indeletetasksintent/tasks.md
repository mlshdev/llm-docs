> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetasksintent/tasks](https://developer.apple.com/documentation/intents/indeletetasksintent/tasks)

# tasks (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

The tasks to delete from a task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var tasks: [INTask]? { get }
```

## See Also

### Getting the Task Information

- [taskList](tasklist.md): Deprecated. The task list from which to delete tasks.
- [all](all-8gg59.md): Deprecated. A Boolean value that indicates whether to delete all the tasks from a task list.

# tasks (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

The tasks to delete from a task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INTask *> * tasks;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INTask *> * tasks;
```

## See Also

### Getting the Task Information

- [taskList](tasklist.md): Deprecated. The task list from which to delete tasks.
- [all](https://developer.apple.com/documentation/intents/indeletetasksintent/all-1dt4g): Deprecated. A Boolean value that indicates whether to delete all the tasks from a task list.
