> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/insnoozetasksintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Handles snoozing a task.

> INSnoozeTasksIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
func handle(intent: INSnoozeTasksIntent, completion: @escaping @Sendable (INSnoozeTasksIntentResponse) -> Void)
```

```swift
func handle(intent: INSnoozeTasksIntent) async -> INSnoozeTasksIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. This object’s information has already been resolved and confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSnoozeTasksIntentResponse](../insnoozetasksintentresponse.md) object that contains the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to snooze the task based on the information in the intent parameter, create a response object with the relevant details, and call the provided completion handler.

# handleSnoozeTasks:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Handles snoozing a task.

> INSnoozeTasksIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) handleSnoozeTasks:(INSnoozeTasksIntent *) intent completion:(void (^)(INSnoozeTasksIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. This object’s information has already been resolved and confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSnoozeTasksIntentResponse](../insnoozetasksintentresponse.md) object that contains the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to snooze the task based on the information in the intent parameter, create a response object with the relevant details, and call the provided completion handler.
