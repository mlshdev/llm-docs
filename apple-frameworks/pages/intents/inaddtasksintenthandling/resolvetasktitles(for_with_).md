> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtasksintenthandling/resolvetasktitles(for:with:)](https://developer.apple.com/documentation/intents/inaddtasksintenthandling/resolvetasktitles(for:with:))

# resolveTaskTitles(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the titles for the tasks.

> INAddTasksIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
optional func resolveTaskTitles(for intent: INAddTasksIntent, with completion: @escaping @Sendable ([INSpeakableStringResolutionResult]) -> Void)
```

```swift
optional func resolveTaskTitles(for intent: INAddTasksIntent) async -> [INSpeakableStringResolutionResult]
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResults**: The details of your proposed resolutions. For successful resolutions, create an array of resolution objects with the title strings to use for the tasks.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the titles for the taks. Use the intent object to obtain the titles suggested by the user. If the user doesn’t supply any task titles, return a response that indicates you need a value for the task titles. Alternatively, you could return a successful resolution containing a default task title.

## See Also

### Resolving the Intent Parameters

- [resolveTargetTaskList(for:with:)](resolvetargettasklist%28for_with_%29-2er0u.md): Deprecated. Resolves the task list to receive the new tasks.
- [resolveSpatialEventTrigger(for:with:)](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger associated with the new tasks.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-7yrz3.md): Deprecated. Resolves the time-based trigger associated with the new tasks.
- [resolvePriority(for:with:)](resolvepriority%28for_with_%29.md): Deprecated. Resolves the priority associated with the new tasks.
- [resolveTargetTaskList(for:with:)](resolvetargettasklist%28for_with_%29-2uevx.md): Deprecated. Called when it is time for you to resolve the task list to receive the new tasks.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-2h9ff.md): Deprecated. Resolves the time-based trigger associated with the new tasks.

# resolveTaskTitlesForAddTasks:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the titles for the tasks.

> INAddTasksIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) resolveTaskTitlesForAddTasks:(INAddTasksIntent *) intent withCompletion:(void (^)(NSArray<INSpeakableStringResolutionResult *> *resolutionResults)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResults**: The details of your proposed resolutions. For successful resolutions, create an array of resolution objects with the title strings to use for the tasks.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the titles for the taks. Use the intent object to obtain the titles suggested by the user. If the user doesn’t supply any task titles, return a response that indicates you need a value for the task titles. Alternatively, you could return a successful resolution containing a default task title.

## See Also

### Resolving the Intent Parameters

- [resolveTargetTaskListForAddTasks:completion:](resolvetargettasklist%28for_with_%29-2er0u.md): Deprecated. Resolves the task list to receive the new tasks.
- [resolveSpatialEventTriggerForAddTasks:withCompletion:](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger associated with the new tasks.
- [resolveTemporalEventTriggerForAddTasks:completion:](resolvetemporaleventtrigger%28for_with_%29-7yrz3.md): Deprecated. Resolves the time-based trigger associated with the new tasks.
- [resolvePriorityForAddTasks:withCompletion:](resolvepriority%28for_with_%29.md): Deprecated. Resolves the priority associated with the new tasks.
- [resolveTargetTaskListForAddTasks:withCompletion:](resolvetargettasklist%28for_with_%29-2uevx.md): Deprecated. Called when it is time for you to resolve the task list to receive the new tasks.
- [resolveTemporalEventTriggerForAddTasks:withCompletion:](resolvetemporaleventtrigger%28for_with_%29-2h9ff.md): Deprecated. Resolves the time-based trigger associated with the new tasks.
