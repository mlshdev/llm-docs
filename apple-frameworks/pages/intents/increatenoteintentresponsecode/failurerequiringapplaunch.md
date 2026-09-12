> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/increatenoteintentresponsecode/failurerequiringapplaunch)

# INCreateNoteIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The user must create the note from within your app.

> INCreateNoteIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot create the note from your Intents extension but the user can create it in your app. Do not use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INCreateNoteIntentResponseCode.unspecified](unspecified.md): Deprecated. The response code was not specified.
- [INCreateNoteIntentResponseCode.ready](ready.md): Deprecated. You are ready to handle the intent.
- [INCreateNoteIntentResponseCode.inProgress](inprogress.md): Deprecated. Note creation is still in progress.
- [INCreateNoteIntentResponseCode.success](success.md): Deprecated. You successfully created the note.
- [INCreateNoteIntentResponseCode.failure](failure.md): Deprecated. You were unable to create the note.

# INCreateNoteIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The user must create the note from within your app.

> INCreateNoteIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
INCreateNoteIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot create the note from your Intents extension but the user can create it in your app. Do not use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INCreateNoteIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response code was not specified.
- [INCreateNoteIntentResponseCodeReady](ready.md): Deprecated. You are ready to handle the intent.
- [INCreateNoteIntentResponseCodeInProgress](inprogress.md): Deprecated. Note creation is still in progress.
- [INCreateNoteIntentResponseCodeSuccess](success.md): Deprecated. You successfully created the note.
- [INCreateNoteIntentResponseCodeFailure](failure.md): Deprecated. You were unable to create the note.
