> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inappendtonoteintentresponsecode](https://developer.apple.com/documentation/intents/inappendtonoteintentresponsecode)

# INAppendToNoteIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INAppendToNoteIntentResponseCode
```

## Topics

### Constants

- [INAppendToNoteIntentResponseCode.unspecified](inappendtonoteintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INAppendToNoteIntentResponseCode.ready](inappendtonoteintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INAppendToNoteIntentResponseCode.inProgress](inappendtonoteintentresponsecode/inprogress.md): Deprecated. You’re in the process of updating the note.
- [INAppendToNoteIntentResponseCode.success](inappendtonoteintentresponsecode/success.md): Deprecated. You successfully updated the note.
- [INAppendToNoteIntentResponseCode.failure](inappendtonoteintentresponsecode/failure.md): Deprecated. You were unable to update the note.
- [INAppendToNoteIntentResponseCode.failureRequiringAppLaunch](inappendtonoteintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to update the note.
- [INAppendToNoteIntentResponseCode.failureCannotUpdatePasswordProtectedNote](inappendtonoteintentresponsecode/failurecannotupdatepasswordprotectednote.md): Deprecated. You were unable to update the note because your app requires additional authorization to do so.

### Initializers

- [init(rawValue:)](inappendtonoteintentresponsecode/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Response Code

- [code](inappendtonoteintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INAppendToNoteIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INAppendToNoteIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INAppendToNoteIntentResponseCodeUnspecified](inappendtonoteintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INAppendToNoteIntentResponseCodeReady](inappendtonoteintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INAppendToNoteIntentResponseCodeInProgress](inappendtonoteintentresponsecode/inprogress.md): Deprecated. You’re in the process of updating the note.
- [INAppendToNoteIntentResponseCodeSuccess](inappendtonoteintentresponsecode/success.md): Deprecated. You successfully updated the note.
- [INAppendToNoteIntentResponseCodeFailure](inappendtonoteintentresponsecode/failure.md): Deprecated. You were unable to update the note.
- [INAppendToNoteIntentResponseCodeFailureRequiringAppLaunch](inappendtonoteintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must launch your app to update the note.
- [INAppendToNoteIntentResponseCodeFailureCannotUpdatePasswordProtectedNote](inappendtonoteintentresponsecode/failurecannotupdatepasswordprotectednote.md): Deprecated. You were unable to update the note because your app requires additional authorization to do so.

## See Also

### Getting the Response Code

- [code](inappendtonoteintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
