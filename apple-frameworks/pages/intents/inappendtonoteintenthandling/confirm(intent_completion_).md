> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inappendtonoteintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/inappendtonoteintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Confirms whether you can append content to the note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func confirm(intent: INAppendToNoteIntent, completion: @escaping @Sendable (INAppendToNoteIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INAppendToNoteIntent) async -> INAppendToNoteIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. The handler has no return value and takes the following parameter:

  - **response**: The [INAppendToNoteIntentResponse](../inappendtonoteintentresponse.md) object containing the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can append content to the note, but don’t append the content yet. If appending content involves contacting a remote server, validate that your server is available and ready to handle requests. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to append the content.

# confirmAppendToNote:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Confirms whether you can append content to the note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) confirmAppendToNote:(INAppendToNoteIntent *) intent completion:(void (^)(INAppendToNoteIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. The handler has no return value and takes the following parameter:

  - **response**: The [INAppendToNoteIntentResponse](../inappendtonoteintentresponse.md) object containing the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can append content to the note, but don’t append the content yet. If appending content involves contacting a remote server, validate that your server is available and ready to handle requests. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to append the content.
