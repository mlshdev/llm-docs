> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/insearchformessagesintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Performs the search and returns the results.

## Declaration

```swift
func handle(intent: INSearchForMessagesIntent, completion: @escaping @Sendable (INSearchForMessagesIntentResponse) -> Void)
```

```swift
func handle(intent: INSearchForMessagesIntent) async -> INSearchForMessagesIntentResponse
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. The object’s informatin has already been resolved and confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSearchForMessagesIntentResponse](../insearchformessagesintentresponse.md) object that contains the status of the request. You also use this object to specify the messages that matched the search parameters. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must perform the search and return the results as part of your response object. If you are unable to perform the search, return a response object whose result code indicates the reason for the failure.

> **Note**

>  In watchOS, Siri does not display the search results itself. Instead, it launches your watchOS app to display the search results.

# handleSearchForMessages:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Performs the search and returns the results.

## Declaration

```objectivec
- (void) handleSearchForMessages:(INSearchForMessagesIntent *) intent completion:(void (^)(INSearchForMessagesIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. The object’s informatin has already been resolved and confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSearchForMessagesIntentResponse](../insearchformessagesintentresponse.md) object that contains the status of the request. You also use this object to specify the messages that matched the search parameters. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must perform the search and return the results as part of your response object. If you are unable to perform the search, return a response object whose result code indicates the reason for the failure.

> **Note**

>  In watchOS, Siri does not display the search results itself. Instead, it launches your watchOS app to display the search results.
