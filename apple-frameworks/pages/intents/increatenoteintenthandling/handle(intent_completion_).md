> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/increatenoteintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Handles the creation of a note.

> INCreateNoteIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
func handle(intent: INCreateNoteIntent, completion: @escaping @Sendable (INCreateNoteIntentResponse) -> Void)
```

```swift
func handle(intent: INCreateNoteIntent) async -> INCreateNoteIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The information in this object has already been resolved and confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INCreateNoteIntentResponse](../increatenoteintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, create the note described by the intent parameter, create a response object with any note-related details, and call the provided completion handler.

# handleCreateNote:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Handles the creation of a note.

> INCreateNoteIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) handleCreateNote:(INCreateNoteIntent *) intent completion:(void (^)(INCreateNoteIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The information in this object has already been resolved and confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INCreateNoteIntentResponse](../increatenoteintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

In your implementation of this method, create the note described by the intent parameter, create a response object with any note-related details, and call the provided completion handler.
