> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintenthandling/resolvenexttriggertime(for:with:)](https://developer.apple.com/documentation/intents/insnoozetasksintenthandling/resolvenexttriggertime(for:with:))

# resolveNextTriggerTime(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the trigger of when to snooze tasks.

> INSnoozeTasksIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
optional func resolveNextTriggerTime(for intent: INSnoozeTasksIntent, with completion: @escaping @Sendable (INDateComponentsRangeResolutionResult) -> Void)
```

```swift
optional func resolveNextTriggerTime(for intent: INSnoozeTasksIntent) async -> INDateComponentsRangeResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object that contians the details of your proposed resolution. For a successful resolution, create a resolution object with the [INTask](../intask.md) object representing the task list that you intend to use.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve when tasks should begin to snooze. Use the intent object to obtain information about the tasks to be snoozed. Use the information in the [INTask](../intask.md) object to look up the corresponding task information in your app’s data structures. Return a resolution that includes as much information as you have available about the task.

## See Also

### Resolving Details of the Intent

- [resolveTasks(for:with:)](resolvetasks%28for_with_%29.md): Deprecated. Resolves the tasks to snooze.

# resolveNextTriggerTimeForSnoozeTasks:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the trigger of when to snooze tasks.

> INSnoozeTasksIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) resolveNextTriggerTimeForSnoozeTasks:(INSnoozeTasksIntent *) intent withCompletion:(void (^)(INDateComponentsRangeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object that contians the details of your proposed resolution. For a successful resolution, create a resolution object with the [INTask](../intask.md) object representing the task list that you intend to use.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve when tasks should begin to snooze. Use the intent object to obtain information about the tasks to be snoozed. Use the information in the [INTask](../intask.md) object to look up the corresponding task information in your app’s data structures. Return a resolution that includes as much information as you have available about the task.

## See Also

### Resolving Details of the Intent

- [resolveTasksForSnoozeTasks:withCompletion:](resolvetasks%28for_with_%29.md): Deprecated. Resolves the tasks to snooze.
