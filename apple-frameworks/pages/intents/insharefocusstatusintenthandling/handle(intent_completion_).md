> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insharefocusstatusintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/insharefocusstatusintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Handles the intent that shares the user’s focus status.

## Declaration

```swift
func handle(intent: INShareFocusStatusIntent, completion: @escaping @Sendable (INShareFocusStatusIntentResponse) -> Void)
```

```swift
func handle(intent: INShareFocusStatusIntent) async -> INShareFocusStatusIntentResponse
```

## Parameters

- `intent`: The [INShareFocusStatusIntent](../insharefocusstatusintent.md) that contains details about the request.
- `completion`: The closure to execute with your response. Execute this handler in your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INShareFocusStatusIntentResponse](../insharefocusstatusintentresponse.md) you create that reports your ability to handle the request.

## See Also

### Processing the Intent

- [confirm(intent:completion:)](confirm%28intent_completion_%29.md): Confirms the details of the request to share the user’s focus status.

# handleShareFocusStatus:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Handles the intent that shares the user’s focus status.

## Declaration

```objectivec
- (void) handleShareFocusStatus:(INShareFocusStatusIntent *) intent completion:(void (^)(INShareFocusStatusIntentResponse *response)) completion;
```

## Parameters

- `intent`: The [INShareFocusStatusIntent](../insharefocusstatusintent.md) that contains details about the request.
- `completion`: The closure to execute with your response. Execute this handler in your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INShareFocusStatusIntentResponse](../insharefocusstatusintentresponse.md) you create that reports your ability to handle the request.

## See Also

### Processing the Intent

- [confirmShareFocusStatus:completion:](confirm%28intent_completion_%29.md): Confirms the details of the request to share the user’s focus status.
