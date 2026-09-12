> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintenthandling/resolvespatialeventtrigger(for:with:)](https://developer.apple.com/documentation/intents/insettaskattributeintenthandling/resolvespatialeventtrigger(for:with:))

# resolveSpatialEventTrigger(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the location-based trigger to apply to the task.

> INSetTaskAttributeIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
optional func resolveSpatialEventTrigger(for intent: INSetTaskAttributeIntent, with completion: @escaping @Sendable (INSpatialEventTriggerResolutionResult) -> Void)
```

```swift
optional func resolveSpatialEventTrigger(for intent: INSetTaskAttributeIntent) async -> INSpatialEventTriggerResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the [INSpatialEventTrigger](../inspatialeventtrigger.md) object that you intend to apply to the task.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the location-based trigger to apply to the task. For apps that support reminders based on the user’s proximity to a location, use this method to resolve the trigger information. If location-based reminders are optional, return a successful resolution when the user provided trigger information or return a not required resolution when there is no trigger information. If the intent includes some trigger information, but not enough for a successful resolution, you can ask the user to confirm or disambiguate from among the possible values.

## See Also

### Resolving the Intent Parameters

- [resolveTargetTask(for:with:)](resolvetargettask%28for_with_%29.md): Deprecated. Resolves which task the user wants to modify.
- [resolveStatus(for:with:)](resolvestatus%28for_with_%29.md): Deprecated. Resolves the intended status of the task.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-9bfly.md): Deprecated. Resolves the time-based trigger to apply to the task.
- [resolvePriority(for:with:)](resolvepriority%28for_with_%29.md): Deprecated. Resolves the intended priority of the task.
- [resolveTaskTitle(for:with:)](resolvetasktitle%28for_with_%29.md): Deprecated. Resolves the intended title of the task.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-1wr3f.md): Deprecated. Resolves the time-based trigger to apply to the task.

# resolveSpatialEventTriggerForSetTaskAttribute:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the location-based trigger to apply to the task.

> INSetTaskAttributeIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) resolveSpatialEventTriggerForSetTaskAttribute:(INSetTaskAttributeIntent *) intent withCompletion:(void (^)(INSpatialEventTriggerResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the [INSpatialEventTrigger](../inspatialeventtrigger.md) object that you intend to apply to the task.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the location-based trigger to apply to the task. For apps that support reminders based on the user’s proximity to a location, use this method to resolve the trigger information. If location-based reminders are optional, return a successful resolution when the user provided trigger information or return a not required resolution when there is no trigger information. If the intent includes some trigger information, but not enough for a successful resolution, you can ask the user to confirm or disambiguate from among the possible values.

## See Also

### Resolving the Intent Parameters

- [resolveTargetTaskForSetTaskAttribute:withCompletion:](resolvetargettask%28for_with_%29.md): Deprecated. Resolves which task the user wants to modify.
- [resolveStatusForSetTaskAttribute:withCompletion:](resolvestatus%28for_with_%29.md): Deprecated. Resolves the intended status of the task.
- [resolveTemporalEventTriggerForSetTaskAttribute:completion:](resolvetemporaleventtrigger%28for_with_%29-9bfly.md): Deprecated. Resolves the time-based trigger to apply to the task.
- [resolvePriorityForSetTaskAttribute:withCompletion:](resolvepriority%28for_with_%29.md): Deprecated. Resolves the intended priority of the task.
- [resolveTaskTitleForSetTaskAttribute:withCompletion:](resolvetasktitle%28for_with_%29.md): Deprecated. Resolves the intended title of the task.
- [resolveTemporalEventTriggerForSetTaskAttribute:withCompletion:](resolvetemporaleventtrigger%28for_with_%29-1wr3f.md): Deprecated. Resolves the time-based trigger to apply to the task.
