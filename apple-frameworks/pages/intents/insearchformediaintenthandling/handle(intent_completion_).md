> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformediaintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/insearchformediaintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Handles the media search request.

## Declaration

```swift
func handle(intent: INSearchForMediaIntent, completion: @escaping @Sendable (INSearchForMediaIntentResponse) -> Void)
```

```swift
func handle(intent: INSearchForMediaIntent) async -> INSearchForMediaIntentResponse
```

## Parameters

- `intent`: The [INSearchForMediaIntent](../insearchformediaintent.md) object that contains details about the user’s request. The Intents app extension confirms the information in this intent before the system calls the [handle(intent:completion:)](handle%28intent_completion_%29.md) method.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **`response`**: The [INSearchForMediaIntentResponse](../insearchformediaintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to search for the media item.

# handleSearchForMedia:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Handles the media search request.

## Declaration

```objectivec
- (void) handleSearchForMedia:(INSearchForMediaIntent *) intent completion:(void (^)(INSearchForMediaIntentResponse *response)) completion;
```

## Parameters

- `intent`: The [INSearchForMediaIntent](../insearchformediaintent.md) object that contains details about the user’s request. The Intents app extension confirms the information in this intent before the system calls the [handleSearchForMedia:completion:](handle%28intent_completion_%29.md) method.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **`response`**: The [INSearchForMediaIntentResponse](../insearchformediaintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to search for the media item.
