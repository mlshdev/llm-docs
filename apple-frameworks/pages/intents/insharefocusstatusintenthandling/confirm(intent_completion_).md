> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insharefocusstatusintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/insharefocusstatusintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Confirms the details of the request to share the user’s focus status.

## Declaration

```swift
optional func confirm(intent: INShareFocusStatusIntent, completion: @escaping @Sendable (INShareFocusStatusIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INShareFocusStatusIntent) async -> INShareFocusStatusIntentResponse
```

## Parameters

- `intent`: The [INShareFocusStatusIntent](../insharefocusstatusintent.md) that contains details about the request.
- `completion`: The handler block to execute with your response. Execute this handler in your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INShareFocusStatusIntentResponse](../insharefocusstatusintentresponse.md) that contains the response code indicating whether your app can share the user’s focus status.

## See Also

### Processing the Intent

- [handle(intent:completion:)](handle%28intent_completion_%29.md): Handles the intent that shares the user’s focus status.

# confirmShareFocusStatus:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Confirms the details of the request to share the user’s focus status.

## Declaration

```objectivec
- (void) confirmShareFocusStatus:(INShareFocusStatusIntent *) intent completion:(void (^)(INShareFocusStatusIntentResponse *response)) completion;
```

## Parameters

- `intent`: The [INShareFocusStatusIntent](../insharefocusstatusintent.md) that contains details about the request.
- `completion`: The handler block to execute with your response. Execute this handler in your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INShareFocusStatusIntentResponse](../insharefocusstatusintentresponse.md) that contains the response code indicating whether your app can share the user’s focus status.

## See Also

### Processing the Intent

- [handleShareFocusStatus:completion:](handle%28intent_completion_%29.md): Handles the intent that shares the user’s focus status.
