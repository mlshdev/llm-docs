> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtasksintenthandling/resolvepriority(for:with:)](https://developer.apple.com/documentation/intents/inaddtasksintenthandling/resolvepriority(for:with:))

# resolvePriority(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the priority associated with the new tasks.

## Declaration

```swift
optional func resolvePriority(for intent: INAddTasksIntent, with completion: @escaping @Sendable (INTaskPriorityResolutionResult) -> Void)
```

```swift
optional func resolvePriority(for intent: INAddTasksIntent) async -> INTaskPriorityResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object that containts the details of your proposed resolution. For successful resolutions, create a resolution object with the [INTemporalEventTrigger](../intemporaleventtrigger.md) object that represents the trigger that you intend to use.

<a id="Discussion"></a>

## Discussion

This method resolves any priorities associated with the new tasks. Use the intent object to obtain the priority information, if any, suggested by the user. If the intent does not contain any priority information, and you don’t require any, return a resolution indicating that you don’t require a value.

## See Also

### Resolving the Intent Parameters

- [resolveTargetTaskList(for:with:)](resolvetargettasklist%28for_with_%29-2er0u.md): Deprecated. Resolves the task list to receive the new tasks.
- [resolveTaskTitles(for:with:)](resolvetasktitles%28for_with_%29.md): Deprecated. Resolves the titles for the tasks.
- [resolveSpatialEventTrigger(for:with:)](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger associated with the new tasks.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-7yrz3.md): Deprecated. Resolves the time-based trigger associated with the new tasks.
- [resolveTargetTaskList(for:with:)](resolvetargettasklist%28for_with_%29-2uevx.md): Deprecated. Called when it is time for you to resolve the task list to receive the new tasks.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-2h9ff.md): Deprecated. Resolves the time-based trigger associated with the new tasks.

# resolvePriorityForAddTasks:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the priority associated with the new tasks.

## Declaration

```objectivec
- (void) resolvePriorityForAddTasks:(INAddTasksIntent *) intent withCompletion:(void (^)(INTaskPriorityResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object that containts the details of your proposed resolution. For successful resolutions, create a resolution object with the [INTemporalEventTrigger](../intemporaleventtrigger.md) object that represents the trigger that you intend to use.

<a id="Discussion"></a>

## Discussion

This method resolves any priorities associated with the new tasks. Use the intent object to obtain the priority information, if any, suggested by the user. If the intent does not contain any priority information, and you don’t require any, return a resolution indicating that you don’t require a value.

## See Also

### Resolving the Intent Parameters

- [resolveTargetTaskListForAddTasks:completion:](resolvetargettasklist%28for_with_%29-2er0u.md): Deprecated. Resolves the task list to receive the new tasks.
- [resolveTaskTitlesForAddTasks:withCompletion:](resolvetasktitles%28for_with_%29.md): Deprecated. Resolves the titles for the tasks.
- [resolveSpatialEventTriggerForAddTasks:withCompletion:](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger associated with the new tasks.
- [resolveTemporalEventTriggerForAddTasks:completion:](resolvetemporaleventtrigger%28for_with_%29-7yrz3.md): Deprecated. Resolves the time-based trigger associated with the new tasks.
- [resolveTargetTaskListForAddTasks:withCompletion:](resolvetargettasklist%28for_with_%29-2uevx.md): Deprecated. Called when it is time for you to resolve the task list to receive the new tasks.
- [resolveTemporalEventTriggerForAddTasks:withCompletion:](resolvetemporaleventtrigger%28for_with_%29-2h9ff.md): Deprecated. Resolves the time-based trigger associated with the new tasks.
