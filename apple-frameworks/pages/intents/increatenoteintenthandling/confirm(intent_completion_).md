> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/increatenoteintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Confirms whether you can create the note.

> INCreateNoteIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
optional func confirm(intent: INCreateNoteIntent, completion: @escaping @Sendable (INCreateNoteIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INCreateNoteIntent) async -> INCreateNoteIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. The handler has no return value and takes the following parameter:

  - **response**: The [INCreateNoteIntentResponse](../increatenoteintentresponse.md) object containing the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can create the note, but do not create the note yet. If creating the note involves contacting a remote server, validate that your server is available and ready to handle requests. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to create the note.

# confirmCreateNote:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Confirms whether you can create the note.

> INCreateNoteIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) confirmCreateNote:(INCreateNoteIntent *) intent completion:(void (^)(INCreateNoteIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. The handler has no return value and takes the following parameter:

  - **response**: The [INCreateNoteIntentResponse](../increatenoteintentresponse.md) object containing the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can create the note, but do not create the note yet. If creating the note involves contacting a remote server, validate that your server is available and ready to handle requests. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to create the note.
