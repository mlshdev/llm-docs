> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintentresponsecode/ready](https://developer.apple.com/documentation/intents/increatenoteintentresponsecode/ready)

# INCreateNoteIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

You are ready to handle the intent.

> INCreateNoteIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

Return this response code during the confirmation phase after you have verified that you are able to create the note. Do not return this response code when handling the intent; doing so causes the system to display an error.

## See Also

### Constants

- [INCreateNoteIntentResponseCode.unspecified](unspecified.md): Deprecated. The response code was not specified.
- [INCreateNoteIntentResponseCode.inProgress](inprogress.md): Deprecated. Note creation is still in progress.
- [INCreateNoteIntentResponseCode.success](success.md): Deprecated. You successfully created the note.
- [INCreateNoteIntentResponseCode.failure](failure.md): Deprecated. You were unable to create the note.
- [INCreateNoteIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must create the note from within your app.

# INCreateNoteIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

You are ready to handle the intent.

> INCreateNoteIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INCreateNoteIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

Return this response code during the confirmation phase after you have verified that you are able to create the note. Do not return this response code when handling the intent; doing so causes the system to display an error.

## See Also

### Constants

- [INCreateNoteIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response code was not specified.
- [INCreateNoteIntentResponseCodeInProgress](inprogress.md): Deprecated. Note creation is still in progress.
- [INCreateNoteIntentResponseCodeSuccess](success.md): Deprecated. You successfully created the note.
- [INCreateNoteIntentResponseCodeFailure](failure.md): Deprecated. You were unable to create the note.
- [INCreateNoteIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must create the note from within your app.
