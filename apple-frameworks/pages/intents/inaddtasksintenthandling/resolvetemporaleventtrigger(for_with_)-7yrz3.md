> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtasksintenthandling/resolvetemporaleventtrigger(for:with:)-7yrz3](https://developer.apple.com/documentation/intents/inaddtasksintenthandling/resolvetemporaleventtrigger(for:with:)-7yrz3)

# resolveTemporalEventTrigger(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the time-based trigger associated with the new tasks.

## Declaration

```swift
optional func resolveTemporalEventTrigger(for intent: INAddTasksIntent, with completion: @escaping @Sendable (INAddTasksTemporalEventTriggerResolutionResult) -> Void)
```

```swift
optional func resolveTemporalEventTrigger(for intent: INAddTasksIntent) async -> INAddTasksTemporalEventTriggerResolutionResult
```

## Parameters

- `intent`: Details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: Details of your proposed resolution. For successful resolutions, create a resolution object with the [INTemporalEventTrigger](../intemporaleventtrigger.md) object representing the trigger that you intend to use.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any time-based triggers associated with the new tasks. Use the intent object to obtain the trigger information, if any, suggested by the user. If the intent doesn’t contain any trigger information, and you don’t require any, return a [notRequired()](../inintentresolutionresult/notrequired%28%29.md) resolution.

## See Also

### Resolving the Intent Parameters

- [resolveTargetTaskList(for:with:)](resolvetargettasklist%28for_with_%29-2er0u.md): Deprecated. Resolves the task list to receive the new tasks.
- [resolveTaskTitles(for:with:)](resolvetasktitles%28for_with_%29.md): Deprecated. Resolves the titles for the tasks.
- [resolveSpatialEventTrigger(for:with:)](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger associated with the new tasks.
- [resolvePriority(for:with:)](resolvepriority%28for_with_%29.md): Deprecated. Resolves the priority associated with the new tasks.
- [resolveTargetTaskList(for:with:)](resolvetargettasklist%28for_with_%29-2uevx.md): Deprecated. Called when it is time for you to resolve the task list to receive the new tasks.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-2h9ff.md): Deprecated. Resolves the time-based trigger associated with the new tasks.

# resolveTemporalEventTriggerForAddTasks:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the time-based trigger associated with the new tasks.

## Declaration

```objectivec
- (void) resolveTemporalEventTriggerForAddTasks:(INAddTasksIntent *) intent completion:(void (^)(INAddTasksTemporalEventTriggerResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: Details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: Details of your proposed resolution. For successful resolutions, create a resolution object with the [INTemporalEventTrigger](../intemporaleventtrigger.md) object representing the trigger that you intend to use.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any time-based triggers associated with the new tasks. Use the intent object to obtain the trigger information, if any, suggested by the user. If the intent doesn’t contain any trigger information, and you don’t require any, return a [notRequired](../inintentresolutionresult/notrequired%28%29.md) resolution.

## See Also

### Resolving the Intent Parameters

- [resolveTargetTaskListForAddTasks:completion:](resolvetargettasklist%28for_with_%29-2er0u.md): Deprecated. Resolves the task list to receive the new tasks.
- [resolveTaskTitlesForAddTasks:withCompletion:](resolvetasktitles%28for_with_%29.md): Deprecated. Resolves the titles for the tasks.
- [resolveSpatialEventTriggerForAddTasks:withCompletion:](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger associated with the new tasks.
- [resolvePriorityForAddTasks:withCompletion:](resolvepriority%28for_with_%29.md): Deprecated. Resolves the priority associated with the new tasks.
- [resolveTargetTaskListForAddTasks:withCompletion:](resolvetargettasklist%28for_with_%29-2uevx.md): Deprecated. Called when it is time for you to resolve the task list to receive the new tasks.
- [resolveTemporalEventTriggerForAddTasks:withCompletion:](resolvetemporaleventtrigger%28for_with_%29-2h9ff.md): Deprecated. Resolves the time-based trigger associated with the new tasks.
