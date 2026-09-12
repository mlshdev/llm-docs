> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetasksintent/init(tasklist:tasks:all:)](https://developer.apple.com/documentation/intents/indeletetasksintent/init(tasklist:tasks:all:))

# init(taskList:tasks:all:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.0+ (deprecated in 15.0) · watchOS 6.0+ (deprecated in 8.0)

Creates the intent object with information about the task list and the tasks to delete from it.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@nonobjc convenience init(taskList: INTaskList? = nil, tasks: [INTask]? = nil, all: Bool? = nil)
```

## Parameters

- `taskList`: The task list from which to delete tasks.
- `tasks`: An array of tasks to delete.
- `all`: A Boolean value that indicates whether to delete all of the tasks in the task list.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Typically, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks to set the attributes of a task. However, you can use this method during testing to create intent objects that validate your intent handling code paths.
