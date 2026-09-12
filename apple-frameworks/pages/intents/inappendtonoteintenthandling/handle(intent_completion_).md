> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inappendtonoteintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/inappendtonoteintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Handles appending content to a note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
func handle(intent: INAppendToNoteIntent, completion: @escaping @Sendable (INAppendToNoteIntentResponse) -> Void)
```

```swift
func handle(intent: INAppendToNoteIntent) async -> INAppendToNoteIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INAppendToNoteIntentResponse](../inappendtonoteintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, update the note’s content in your app, create a response object with the updated note information, and call the provided completion handler.

# handleAppendToNote:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Handles appending content to a note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) handleAppendToNote:(INAppendToNoteIntent *) intent completion:(void (^)(INAppendToNoteIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INAppendToNoteIntentResponse](../inappendtonoteintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, update the note’s content in your app, create a response object with the updated note information, and call the provided completion handler.
