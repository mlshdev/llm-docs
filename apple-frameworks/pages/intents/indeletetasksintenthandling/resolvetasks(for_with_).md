> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetasksintenthandling/resolvetasks(for:with:)](https://developer.apple.com/documentation/intents/indeletetasksintenthandling/resolvetasks(for:with:))

# resolveTasks(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Resolves the tasks to delete.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveTasks(for intent: INDeleteTasksIntent, with completion: @escaping @Sendable ([INDeleteTasksTaskResolutionResult]) -> Void)
```

```swift
optional func resolveTasks(for intent: INDeleteTasksIntent) async -> [INDeleteTasksTaskResolutionResult]
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this block while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For a successful resolution, create a resolution object with the [INTask](../intask.md) object that represents the task list you intend to use.

<a id="Discussion"></a>

## Discussion

This method resolves the tasks to delete. Use the intent object to obtain information about the task to delete. Use the information in the [INTask](../intask.md) object to look up the corresponding task information in your app’s data structures.

## See Also

### Resolving Details of the Intent

- [resolveTaskList(for:with:)](resolvetasklist%28for_with_%29.md): Deprecated. Resolves the task list from which to delete tasks.

# resolveTasksForDeleteTasks:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Resolves the tasks to delete.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveTasksForDeleteTasks:(INDeleteTasksIntent *) intent withCompletion:(void (^)(NSArray<INDeleteTasksTaskResolutionResult *> *resolutionResults)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this block while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For a successful resolution, create a resolution object with the [INTask](../intask.md) object that represents the task list you intend to use.

<a id="Discussion"></a>

## Discussion

This method resolves the tasks to delete. Use the intent object to obtain information about the task to delete. Use the information in the [INTask](../intask.md) object to look up the corresponding task information in your app’s data structures.

## See Also

### Resolving Details of the Intent

- [resolveTaskListForDeleteTasks:withCompletion:](resolvetasklist%28for_with_%29.md): Deprecated. Resolves the task list from which to delete tasks.
