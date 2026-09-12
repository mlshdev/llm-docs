> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtasksintenthandling/resolvetargettasklist(for:with:)-2er0u](https://developer.apple.com/documentation/intents/inaddtasksintenthandling/resolvetargettasklist(for:with:)-2er0u)

# resolveTargetTaskList(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the task list to receive the new tasks.

## Declaration

```swift
optional func resolveTargetTaskList(for intent: INAddTasksIntent, with completion: @escaping @Sendable (INAddTasksTargetTaskListResolutionResult) -> Void)
```

```swift
optional func resolveTargetTaskList(for intent: INAddTasksIntent) async -> INAddTasksTargetTaskListResolutionResult
```

## Parameters

- `intent`: Details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: Details of your proposed resolution. For successful resolutions, create a resolution object with the [INTaskList](../intasklist.md) object representing the task list that you intend to use.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve that task list that’s to recieve the new tasks. Use the intent object to obtain the task list, if any, suggested by the user. If the intent doesn’t specify a task list, choose a resolution that’s most appropriate for your app. If you can select a default task list, return a result of success with that task list. If you can’t select a default task list, you might ask the user to provide a value or choose from among a few likely candidates.

## See Also

### Resolving the Intent Parameters

- [resolveTaskTitles(for:with:)](resolvetasktitles%28for_with_%29.md): Deprecated. Resolves the titles for the tasks.
- [resolveSpatialEventTrigger(for:with:)](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger associated with the new tasks.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-7yrz3.md): Deprecated. Resolves the time-based trigger associated with the new tasks.
- [resolvePriority(for:with:)](resolvepriority%28for_with_%29.md): Deprecated. Resolves the priority associated with the new tasks.
- [resolveTargetTaskList(for:with:)](resolvetargettasklist%28for_with_%29-2uevx.md): Deprecated. Called when it is time for you to resolve the task list to receive the new tasks.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-2h9ff.md): Deprecated. Resolves the time-based trigger associated with the new tasks.

# resolveTargetTaskListForAddTasks:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the task list to receive the new tasks.

## Declaration

```objectivec
- (void) resolveTargetTaskListForAddTasks:(INAddTasksIntent *) intent completion:(void (^)(INAddTasksTargetTaskListResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: Details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: Details of your proposed resolution. For successful resolutions, create a resolution object with the [INTaskList](../intasklist.md) object representing the task list that you intend to use.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve that task list that’s to recieve the new tasks. Use the intent object to obtain the task list, if any, suggested by the user. If the intent doesn’t specify a task list, choose a resolution that’s most appropriate for your app. If you can select a default task list, return a result of success with that task list. If you can’t select a default task list, you might ask the user to provide a value or choose from among a few likely candidates.

## See Also

### Resolving the Intent Parameters

- [resolveTaskTitlesForAddTasks:withCompletion:](resolvetasktitles%28for_with_%29.md): Deprecated. Resolves the titles for the tasks.
- [resolveSpatialEventTriggerForAddTasks:withCompletion:](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger associated with the new tasks.
- [resolveTemporalEventTriggerForAddTasks:completion:](resolvetemporaleventtrigger%28for_with_%29-7yrz3.md): Deprecated. Resolves the time-based trigger associated with the new tasks.
- [resolvePriorityForAddTasks:withCompletion:](resolvepriority%28for_with_%29.md): Deprecated. Resolves the priority associated with the new tasks.
- [resolveTargetTaskListForAddTasks:withCompletion:](resolvetargettasklist%28for_with_%29-2uevx.md): Deprecated. Called when it is time for you to resolve the task list to receive the new tasks.
- [resolveTemporalEventTriggerForAddTasks:withCompletion:](resolvetemporaleventtrigger%28for_with_%29-2h9ff.md): Deprecated. Resolves the time-based trigger associated with the new tasks.
