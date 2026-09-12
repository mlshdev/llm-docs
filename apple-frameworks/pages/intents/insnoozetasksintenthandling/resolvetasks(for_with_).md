> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintenthandling/resolvetasks(for:with:)](https://developer.apple.com/documentation/intents/insnoozetasksintenthandling/resolvetasks(for:with:))

# resolveTasks(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the tasks to snooze.

> INSnoozeTasksIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
optional func resolveTasks(for intent: INSnoozeTasksIntent, with completion: @escaping @Sendable ([INSnoozeTasksTaskResolutionResult]) -> Void)
```

```swift
optional func resolveTasks(for intent: INSnoozeTasksIntent) async -> [INSnoozeTasksTaskResolutionResult]
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For a successful resolution, create a resolution object with the [INTask](../intask.md) object representing the task list that you intend to use.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the tasks to snooze. Use the intent object to obtain information about the tasks to snooze. Use the information in the [INTask](../intask.md) object to look up the corresponding task information in your app’s data structures. Return a resolution that includes as much information as you have available about the task.

## See Also

### Resolving Details of the Intent

- [resolveNextTriggerTime(for:with:)](resolvenexttriggertime%28for_with_%29.md): Deprecated. Resolves the trigger of when to snooze tasks.

# resolveTasksForSnoozeTasks:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the tasks to snooze.

> INSnoozeTasksIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) resolveTasksForSnoozeTasks:(INSnoozeTasksIntent *) intent withCompletion:(void (^)(NSArray<INSnoozeTasksTaskResolutionResult *> *resolutionResults)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For a successful resolution, create a resolution object with the [INTask](../intask.md) object representing the task list that you intend to use.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the tasks to snooze. Use the intent object to obtain information about the tasks to snooze. Use the information in the [INTask](../intask.md) object to look up the corresponding task information in your app’s data structures. Return a resolution that includes as much information as you have available about the task.

## See Also

### Resolving Details of the Intent

- [resolveNextTriggerTimeForSnoozeTasks:withCompletion:](resolvenexttriggertime%28for_with_%29.md): Deprecated. Resolves the trigger of when to snooze tasks.
