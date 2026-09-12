> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintenthandling/resolvepriority(for:with:)](https://developer.apple.com/documentation/intents/insettaskattributeintenthandling/resolvepriority(for:with:))

# resolvePriority(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the intended priority of the task.

## Declaration

```swift
optional func resolvePriority(for intent: INSetTaskAttributeIntent, with completion: @escaping @Sendable (INTaskPriorityResolutionResult) -> Void)
```

```swift
optional func resolvePriority(for intent: INSetTaskAttributeIntent) async -> INTaskPriorityResolutionResult
```

## See Also

### Resolving the Intent Parameters

- [resolveTargetTask(for:with:)](resolvetargettask%28for_with_%29.md): Deprecated. Resolves which task the user wants to modify.
- [resolveStatus(for:with:)](resolvestatus%28for_with_%29.md): Deprecated. Resolves the intended status of the task.
- [resolveSpatialEventTrigger(for:with:)](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger to apply to the task.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-9bfly.md): Deprecated. Resolves the time-based trigger to apply to the task.
- [resolveTaskTitle(for:with:)](resolvetasktitle%28for_with_%29.md): Deprecated. Resolves the intended title of the task.
- [resolveTemporalEventTrigger(for:with:)](resolvetemporaleventtrigger%28for_with_%29-1wr3f.md): Deprecated. Resolves the time-based trigger to apply to the task.

# resolvePriorityForSetTaskAttribute:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the intended priority of the task.

## Declaration

```objectivec
- (void) resolvePriorityForSetTaskAttribute:(INSetTaskAttributeIntent *) intent withCompletion:(void (^)(INTaskPriorityResolutionResult *resolutionResult)) completion;
```

## See Also

### Resolving the Intent Parameters

- [resolveTargetTaskForSetTaskAttribute:withCompletion:](resolvetargettask%28for_with_%29.md): Deprecated. Resolves which task the user wants to modify.
- [resolveStatusForSetTaskAttribute:withCompletion:](resolvestatus%28for_with_%29.md): Deprecated. Resolves the intended status of the task.
- [resolveSpatialEventTriggerForSetTaskAttribute:withCompletion:](resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger to apply to the task.
- [resolveTemporalEventTriggerForSetTaskAttribute:completion:](resolvetemporaleventtrigger%28for_with_%29-9bfly.md): Deprecated. Resolves the time-based trigger to apply to the task.
- [resolveTaskTitleForSetTaskAttribute:withCompletion:](resolvetasktitle%28for_with_%29.md): Deprecated. Resolves the intended title of the task.
- [resolveTemporalEventTriggerForSetTaskAttribute:withCompletion:](resolvetemporaleventtrigger%28for_with_%29-1wr3f.md): Deprecated. Resolves the time-based trigger to apply to the task.
