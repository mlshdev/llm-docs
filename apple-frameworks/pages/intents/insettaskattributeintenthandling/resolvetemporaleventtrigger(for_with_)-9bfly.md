> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintenthandling/resolvetemporaleventtrigger(for:with:)-9bfly](https://developer.apple.com/documentation/intents/insettaskattributeintenthandling/resolvetemporaleventtrigger(for:with:)-9bfly)

# resolveTemporalEventTrigger(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the time-based trigger to apply to the task.

## Declaration

```swift
optional func resolveTemporalEventTrigger(for intent: INSetTaskAttributeIntent, with completion: @escaping @Sendable (INSetTaskAttributeTemporalEventTriggerResolutionResult) -> Void)
```

```swift
optional func resolveTemporalEventTrigger(for intent: INSetTaskAttributeIntent) async -> INSetTaskAttributeTemporalEventTriggerResolutionResult
```

## Parameters

- `intent`: Details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: Details of your proposed resolution. For successful resolutions, create a resolution object with the [INTemporalEventTrigger](../intemporaleventtrigger.md) object that you intend to apply to the task.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the time-based trigger to apply to the task. For apps that support reminders based on the current time, use this method to resolve the trigger information. If time-based reminders are optional, return a successful resolution when the user provides trigger information or return a [notRequired()](../inintentresolutionresult/notrequired%28%29.md) resolution when there is no trigger information. If the intent includes some trigger information, but not enough for a successful resolution, you can ask the user to confirm or disambiguate from among the possible values.

## See Also

### Resolving the Intent Parameters

- [resolveTargetTask(for:with:)](resolvetargettask%28for_with_%29.md): Deprecated. Resolves which task the user wants to modify.
- [resolveStatus(for:with:)](resolvestatus%28for_with_%29.md): Deprecated. Resolves the intended status of the task.
- [resolveSpatialEventTrigger(for:with:)](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger to apply to the task.
- [resolvePriority(for:with:)](resolvepriority%28for_with_%29.md): Deprecated. Resolves the intended priority of the task.
- [resolveTaskTitle(for:with:)](resolvetasktitle%28for_with_%29.md): Deprecated. Resolves the intended title of the task.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-1wr3f.md): Deprecated. Resolves the time-based trigger to apply to the task.

# resolveTemporalEventTriggerForSetTaskAttribute:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the time-based trigger to apply to the task.

## Declaration

```objectivec
- (void) resolveTemporalEventTriggerForSetTaskAttribute:(INSetTaskAttributeIntent *) intent completion:(void (^)(INSetTaskAttributeTemporalEventTriggerResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: Details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: Details of your proposed resolution. For successful resolutions, create a resolution object with the [INTemporalEventTrigger](../intemporaleventtrigger.md) object that you intend to apply to the task.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the time-based trigger to apply to the task. For apps that support reminders based on the current time, use this method to resolve the trigger information. If time-based reminders are optional, return a successful resolution when the user provides trigger information or return a [notRequired](../inintentresolutionresult/notrequired%28%29.md) resolution when there is no trigger information. If the intent includes some trigger information, but not enough for a successful resolution, you can ask the user to confirm or disambiguate from among the possible values.

## See Also

### Resolving the Intent Parameters

- [resolveTargetTaskForSetTaskAttribute:withCompletion:](resolvetargettask%28for_with_%29.md): Deprecated. Resolves which task the user wants to modify.
- [resolveStatusForSetTaskAttribute:withCompletion:](resolvestatus%28for_with_%29.md): Deprecated. Resolves the intended status of the task.
- [resolveSpatialEventTriggerForSetTaskAttribute:withCompletion:](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger to apply to the task.
- [resolvePriorityForSetTaskAttribute:withCompletion:](resolvepriority%28for_with_%29.md): Deprecated. Resolves the intended priority of the task.
- [resolveTaskTitleForSetTaskAttribute:withCompletion:](resolvetasktitle%28for_with_%29.md): Deprecated. Resolves the intended title of the task.
- [resolveTemporalEventTriggerForSetTaskAttribute:withCompletion:](resolvetemporaleventtrigger%28for_with_%29-1wr3f.md): Deprecated. Resolves the time-based trigger to apply to the task.
