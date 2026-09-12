> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetasksintenthandling/resolvetasklist(for:with:)](https://developer.apple.com/documentation/intents/indeletetasksintenthandling/resolvetasklist(for:with:))

# resolveTaskList(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Resolves the task list from which to delete tasks.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveTaskList(for intent: INDeleteTasksIntent, with completion: @escaping @Sendable (INDeleteTasksTaskListResolutionResult) -> Void)
```

```swift
optional func resolveTaskList(for intent: INDeleteTasksIntent) async -> INDeleteTasksTaskListResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For a successful resolution, create a resolution object with the [INTaskList](../intasklist.md) object that represents the task list you intend to use.

<a id="Discussion"></a>

## Discussion

This method resolves the task list from which to delete tasks. Use the intent object to obtain the task list, if any, suggested by the user. If the intent doesn’t specify a task list, choose the most appropriate resolution for your app. If you can select a default task list, return a result of success with that task list. If you can’t select a default task list, ask the user to provide a value or choose from among a few likely candidates.

## See Also

### Resolving Details of the Intent

- [resolveTasks(for:with:)](resolvetasks%28for_with_%29.md): Deprecated. Resolves the tasks to delete.

# resolveTaskListForDeleteTasks:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Resolves the task list from which to delete tasks.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveTaskListForDeleteTasks:(INDeleteTasksIntent *) intent withCompletion:(void (^)(INDeleteTasksTaskListResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For a successful resolution, create a resolution object with the [INTaskList](../intasklist.md) object that represents the task list you intend to use.

<a id="Discussion"></a>

## Discussion

This method resolves the task list from which to delete tasks. Use the intent object to obtain the task list, if any, suggested by the user. If the intent doesn’t specify a task list, choose the most appropriate resolution for your app. If you can select a default task list, return a result of success with that task list. If you can’t select a default task list, ask the user to provide a value or choose from among a few likely candidates.

## See Also

### Resolving Details of the Intent

- [resolveTasksForDeleteTasks:withCompletion:](resolvetasks%28for_with_%29.md): Deprecated. Resolves the tasks to delete.
