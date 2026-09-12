> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintenthandling/resolvetargettask(for:with:)](https://developer.apple.com/documentation/intents/insettaskattributeintenthandling/resolvetargettask(for:with:))

# resolveTargetTask(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves which task the user wants to modify.

> INSetTaskAttributeIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
optional func resolveTargetTask(for intent: INSetTaskAttributeIntent, with completion: @escaping @Sendable (INTaskResolutionResult) -> Void)
```

```swift
optional func resolveTargetTask(for intent: INSetTaskAttributeIntent) async -> INTaskResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the [INTask](../intask.md) object that you intend to modify.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the task that the user wants to modify. Use the intent object to obtain information about the task that the user wants to modify. Use the information in the [INTask](../intask.md) object to look up the corresponding task information in your app’s data structures. Return a resolution that includes as much information about the task as you have available.

## See Also

### Resolving the Intent Parameters

- [resolveStatus(for:with:)](resolvestatus%28for_with_%29.md): Deprecated. Resolves the intended status of the task.
- [resolveSpatialEventTrigger(for:with:)](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger to apply to the task.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-9bfly.md): Deprecated. Resolves the time-based trigger to apply to the task.
- [resolvePriority(for:with:)](resolvepriority%28for_with_%29.md): Deprecated. Resolves the intended priority of the task.
- [resolveTaskTitle(for:with:)](resolvetasktitle%28for_with_%29.md): Deprecated. Resolves the intended title of the task.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-1wr3f.md): Deprecated. Resolves the time-based trigger to apply to the task.

# resolveTargetTaskForSetTaskAttribute:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves which task the user wants to modify.

> INSetTaskAttributeIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) resolveTargetTaskForSetTaskAttribute:(INSetTaskAttributeIntent *) intent withCompletion:(void (^)(INTaskResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the [INTask](../intask.md) object that you intend to modify.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the task that the user wants to modify. Use the intent object to obtain information about the task that the user wants to modify. Use the information in the [INTask](../intask.md) object to look up the corresponding task information in your app’s data structures. Return a resolution that includes as much information about the task as you have available.

## See Also

### Resolving the Intent Parameters

- [resolveStatusForSetTaskAttribute:withCompletion:](resolvestatus%28for_with_%29.md): Deprecated. Resolves the intended status of the task.
- [resolveSpatialEventTriggerForSetTaskAttribute:withCompletion:](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger to apply to the task.
- [resolveTemporalEventTriggerForSetTaskAttribute:completion:](resolvetemporaleventtrigger%28for_with_%29-9bfly.md): Deprecated. Resolves the time-based trigger to apply to the task.
- [resolvePriorityForSetTaskAttribute:withCompletion:](resolvepriority%28for_with_%29.md): Deprecated. Resolves the intended priority of the task.
- [resolveTaskTitleForSetTaskAttribute:withCompletion:](resolvetasktitle%28for_with_%29.md): Deprecated. Resolves the intended title of the task.
- [resolveTemporalEventTriggerForSetTaskAttribute:withCompletion:](resolvetemporaleventtrigger%28for_with_%29-1wr3f.md): Deprecated. Resolves the time-based trigger to apply to the task.
