> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/increatenoteintentresponsecode/inprogress)

# INCreateNoteIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Note creation is still in progress.

> INCreateNoteIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if you initiated the note creation process but did not receive a timely response. You might use this code when a server handles note creation and you have not yet received a confirmation from that server.

When handling an intent, you might want to first configure a timer to fire if your server does not return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Constants

- [INCreateNoteIntentResponseCode.unspecified](unspecified.md): Deprecated. The response code was not specified.
- [INCreateNoteIntentResponseCode.ready](ready.md): Deprecated. You are ready to handle the intent.
- [INCreateNoteIntentResponseCode.success](success.md): Deprecated. You successfully created the note.
- [INCreateNoteIntentResponseCode.failure](failure.md): Deprecated. You were unable to create the note.
- [INCreateNoteIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must create the note from within your app.

# INCreateNoteIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Note creation is still in progress.

> INCreateNoteIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INCreateNoteIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if you initiated the note creation process but did not receive a timely response. You might use this code when a server handles note creation and you have not yet received a confirmation from that server.

When handling an intent, you might want to first configure a timer to fire if your server does not return within a few seconds. Use your timer’s handler block to provide the in-progress response back to Siri.

## See Also

### Constants

- [INCreateNoteIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response code was not specified.
- [INCreateNoteIntentResponseCodeReady](ready.md): Deprecated. You are ready to handle the intent.
- [INCreateNoteIntentResponseCodeSuccess](success.md): Deprecated. You successfully created the note.
- [INCreateNoteIntentResponseCodeFailure](failure.md): Deprecated. You were unable to create the note.
- [INCreateNoteIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must create the note from within your app.
