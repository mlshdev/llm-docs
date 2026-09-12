> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtasksintenthandling/resolvetemporaleventtrigger(for:with:)-2h9ff](https://developer.apple.com/documentation/intents/inaddtasksintenthandling/resolvetemporaleventtrigger(for:with:)-2h9ff)

# resolveTemporalEventTrigger(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the time-based trigger associated with the new tasks.

> Use [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-7yrz3.md) instead.

## Declaration

```swift
optional func resolveTemporalEventTrigger(for intent: INAddTasksIntent, with completion: @escaping @Sendable (INTemporalEventTriggerResolutionResult) -> Void)
```

```swift
optional func resolveTemporalEventTrigger(for intent: INAddTasksIntent) async -> INTemporalEventTriggerResolutionResult
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
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-7yrz3.md): Deprecated. Resolves the time-based trigger associated with the new tasks.
- [resolvePriority(for:with:)](resolvepriority%28for_with_%29.md): Deprecated. Resolves the priority associated with the new tasks.
- [resolveTargetTaskList(for:with:)](resolvetargettasklist%28for_with_%29-2uevx.md): Deprecated. Called when it is time for you to resolve the task list to receive the new tasks.

# resolveTemporalEventTriggerForAddTasks:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the time-based trigger associated with the new tasks.

> Use [resolveTemporalEventTriggerForAddTasks:completion:](resolvetemporaleventtrigger%28for_with_%29-7yrz3.md) instead.

## Declaration

```objectivec
- (void) resolveTemporalEventTriggerForAddTasks:(INAddTasksIntent *) intent withCompletion:(void (^)(INTemporalEventTriggerResolutionResult *resolutionResult)) completion;
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
- [resolveTemporalEventTriggerForAddTasks:completion:](resolvetemporaleventtrigger%28for_with_%29-7yrz3.md): Deprecated. Resolves the time-based trigger associated with the new tasks.
- [resolvePriorityForAddTasks:withCompletion:](resolvepriority%28for_with_%29.md): Deprecated. Resolves the priority associated with the new tasks.
- [resolveTargetTaskListForAddTasks:withCompletion:](resolvetargettasklist%28for_with_%29-2uevx.md): Deprecated. Called when it is time for you to resolve the task list to receive the new tasks.
