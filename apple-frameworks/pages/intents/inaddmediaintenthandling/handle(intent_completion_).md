> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediaintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/inaddmediaintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Handles the media addition request.

## Declaration

```swift
func handle(intent: INAddMediaIntent, completion: @escaping @Sendable (INAddMediaIntentResponse) -> Void)
```

```swift
func handle(intent: INAddMediaIntent) async -> INAddMediaIntentResponse
```

## Parameters

- `intent`: The [INAddMediaIntent](../inaddmediaintent.md) object that contains details about the user’s request. The Intents app extension confirms the information in this intent before the system calls the [handle(intent:completion:)](../inplaymediaintenthandling/handle%28intent_completion_%29.md) method.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **`response`**: The [INAddMediaIntentResponse](../inaddmediaintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to add the media item to the appropriate destination.

# handleAddMedia:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Handles the media addition request.

## Declaration

```objectivec
- (void) handleAddMedia:(INAddMediaIntent *) intent completion:(void (^)(INAddMediaIntentResponse *response)) completion;
```

## Parameters

- `intent`: The [INAddMediaIntent](../inaddmediaintent.md) object that contains details about the user’s request. The Intents app extension confirms the information in this intent before the system calls the [handlePlayMedia:completion:](../inplaymediaintenthandling/handle%28intent_completion_%29.md) method.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **`response`**: The [INAddMediaIntentResponse](../inaddmediaintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to add the media item to the appropriate destination.
