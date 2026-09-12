> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inappendtonoteintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/inappendtonoteintentresponsecode/failurerequiringapplaunch)

# INAppendToNoteIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The user must launch your app to update the note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t update the note from your Intents extension but can do so from your app. Don’t use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INAppendToNoteIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INAppendToNoteIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INAppendToNoteIntentResponseCode.inProgress](inprogress.md): Deprecated. You’re in the process of updating the note.
- [INAppendToNoteIntentResponseCode.success](success.md): Deprecated. You successfully updated the note.
- [INAppendToNoteIntentResponseCode.failure](failure.md): Deprecated. You were unable to update the note.
- [INAppendToNoteIntentResponseCode.failureCannotUpdatePasswordProtectedNote](failurecannotupdatepasswordprotectednote.md): Deprecated. You were unable to update the note because your app requires additional authorization to do so.

# INAppendToNoteIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The user must launch your app to update the note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INAppendToNoteIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t update the note from your Intents extension but can do so from your app. Don’t use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INAppendToNoteIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INAppendToNoteIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INAppendToNoteIntentResponseCodeInProgress](inprogress.md): Deprecated. You’re in the process of updating the note.
- [INAppendToNoteIntentResponseCodeSuccess](success.md): Deprecated. You successfully updated the note.
- [INAppendToNoteIntentResponseCodeFailure](failure.md): Deprecated. You were unable to update the note.
- [INAppendToNoteIntentResponseCodeFailureCannotUpdatePasswordProtectedNote](failurecannotupdatepasswordprotectednote.md): Deprecated. You were unable to update the note because your app requires additional authorization to do so.
