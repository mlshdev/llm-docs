> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/insnoozetasksintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Confirms whether you can snooze the task.

> INSnoozeTasksIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
optional func confirm(intent: INSnoozeTasksIntent, completion: @escaping @Sendable (INSnoozeTasksIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INSnoozeTasksIntent) async -> INSnoozeTasksIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. This object’s information has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. The handler has no return value and takes the following parameter:

  - **response**: The [INSnoozeTasksIntentResponse](../insnoozetasksintentresponse.md) object that contains the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can snooze the tasks, but don’t do so yet. If snoozing tasks involves contacting a remote server, first validate that your server is available and ready to handle the requests, then in your implementation, execute the provided completion block with a response object that indicates your app’s readiness to snooze the tasks.

# confirmSnoozeTasks:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Confirms whether you can snooze the task.

> INSnoozeTasksIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) confirmSnoozeTasks:(INSnoozeTasksIntent *) intent completion:(void (^)(INSnoozeTasksIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. This object’s information has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. The handler has no return value and takes the following parameter:

  - **response**: The [INSnoozeTasksIntentResponse](../insnoozetasksintentresponse.md) object that contains the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can snooze the tasks, but don’t do so yet. If snoozing tasks involves contacting a remote server, first validate that your server is available and ready to handle the requests, then in your implementation, execute the provided completion block with a response object that indicates your app’s readiness to snooze the tasks.
