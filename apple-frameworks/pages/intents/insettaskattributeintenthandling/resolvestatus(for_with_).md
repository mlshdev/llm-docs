> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintenthandling/resolvestatus(for:with:)](https://developer.apple.com/documentation/intents/insettaskattributeintenthandling/resolvestatus(for:with:))

# resolveStatus(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the intended status of the task.

> INSetTaskAttributeIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
optional func resolveStatus(for intent: INSetTaskAttributeIntent, with completion: @escaping @Sendable (INTaskStatusResolutionResult) -> Void)
```

```swift
optional func resolveStatus(for intent: INSetTaskAttributeIntent) async -> INTaskStatusResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the [INTaskStatus](../intaskstatus.md) value that you intend to assign to the task.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the task’s intended status. In most cases, you return a successful resolution with the requested status. In the event that you cannot change the status to the requested value, return a successful result from this method and use your confirmation method to report the failure.

## See Also

### Resolving the Intent Parameters

- [resolveTargetTask(for:with:)](resolvetargettask%28for_with_%29.md): Deprecated. Resolves which task the user wants to modify.
- [resolveSpatialEventTrigger(for:with:)](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger to apply to the task.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-9bfly.md): Deprecated. Resolves the time-based trigger to apply to the task.
- [resolvePriority(for:with:)](resolvepriority%28for_with_%29.md): Deprecated. Resolves the intended priority of the task.
- [resolveTaskTitle(for:with:)](resolvetasktitle%28for_with_%29.md): Deprecated. Resolves the intended title of the task.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-1wr3f.md): Deprecated. Resolves the time-based trigger to apply to the task.

# resolveStatusForSetTaskAttribute:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the intended status of the task.

> INSetTaskAttributeIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) resolveStatusForSetTaskAttribute:(INSetTaskAttributeIntent *) intent withCompletion:(void (^)(INTaskStatusResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the [INTaskStatus](../intaskstatus.md) value that you intend to assign to the task.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the task’s intended status. In most cases, you return a successful resolution with the requested status. In the event that you cannot change the status to the requested value, return a successful result from this method and use your confirmation method to report the failure.

## See Also

### Resolving the Intent Parameters

- [resolveTargetTaskForSetTaskAttribute:withCompletion:](resolvetargettask%28for_with_%29.md): Deprecated. Resolves which task the user wants to modify.
- [resolveSpatialEventTriggerForSetTaskAttribute:withCompletion:](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger to apply to the task.
- [resolveTemporalEventTriggerForSetTaskAttribute:completion:](resolvetemporaleventtrigger%28for_with_%29-9bfly.md): Deprecated. Resolves the time-based trigger to apply to the task.
- [resolvePriorityForSetTaskAttribute:withCompletion:](resolvepriority%28for_with_%29.md): Deprecated. Resolves the intended priority of the task.
- [resolveTaskTitleForSetTaskAttribute:withCompletion:](resolvetasktitle%28for_with_%29.md): Deprecated. Resolves the intended title of the task.
- [resolveTemporalEventTriggerForSetTaskAttribute:withCompletion:](resolvetemporaleventtrigger%28for_with_%29-1wr3f.md): Deprecated. Resolves the time-based trigger to apply to the task.
