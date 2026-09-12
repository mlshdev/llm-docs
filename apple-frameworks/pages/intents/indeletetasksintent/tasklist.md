> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetasksintent/tasklist](https://developer.apple.com/documentation/intents/indeletetasksintent/tasklist)

# taskList (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

The task list from which to delete tasks.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var taskList: INTaskList? { get }
```

## See Also

### Getting the Task Information

- [tasks](tasks.md): Deprecated. The tasks to delete from a task list.
- [all](all-8gg59.md): Deprecated. A Boolean value that indicates whether to delete all the tasks from a task list.

# taskList (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

The task list from which to delete tasks.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INTaskList * taskList;
```

```objectivec
@property (atomic, copy, readonly, nullable) INTaskList * taskList;
```

## See Also

### Getting the Task Information

- [tasks](tasks.md): Deprecated. The tasks to delete from a task list.
- [all](https://developer.apple.com/documentation/intents/indeletetasksintent/all-1dt4g): Deprecated. A Boolean value that indicates whether to delete all the tasks from a task list.
