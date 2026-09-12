> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inappendtonoteintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/inappendtonoteintentresponsecode/inprogress)

# INAppendToNoteIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

You’re in the process of updating the note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if you began updating the note but didn’t receive a confirmation of the update. You might use this code when a server handles note modification and you’ve not yet received a confirmation from that server.

When handling the intent, you might want to first configure a timer to fire if your server doesn’t return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Constants

- [INAppendToNoteIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INAppendToNoteIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INAppendToNoteIntentResponseCode.success](success.md): Deprecated. You successfully updated the note.
- [INAppendToNoteIntentResponseCode.failure](failure.md): Deprecated. You were unable to update the note.
- [INAppendToNoteIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to update the note.
- [INAppendToNoteIntentResponseCode.failureCannotUpdatePasswordProtectedNote](failurecannotupdatepasswordprotectednote.md): Deprecated. You were unable to update the note because your app requires additional authorization to do so.

# INAppendToNoteIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

You’re in the process of updating the note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INAppendToNoteIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if you began updating the note but didn’t receive a confirmation of the update. You might use this code when a server handles note modification and you’ve not yet received a confirmation from that server.

When handling the intent, you might want to first configure a timer to fire if your server doesn’t return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Constants

- [INAppendToNoteIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INAppendToNoteIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INAppendToNoteIntentResponseCodeSuccess](success.md): Deprecated. You successfully updated the note.
- [INAppendToNoteIntentResponseCodeFailure](failure.md): Deprecated. You were unable to update the note.
- [INAppendToNoteIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to update the note.
- [INAppendToNoteIntentResponseCodeFailureCannotUpdatePasswordProtectedNote](failurecannotupdatepasswordprotectednote.md): Deprecated. You were unable to update the note because your app requires additional authorization to do so.
