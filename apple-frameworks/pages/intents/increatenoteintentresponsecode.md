> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintentresponsecode](https://developer.apple.com/documentation/intents/increatenoteintentresponsecode)

# INCreateNoteIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating the state of the response.

> INCreateNoteIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
enum INCreateNoteIntentResponseCode
```

## Topics

### Constants

- [INCreateNoteIntentResponseCode.unspecified](increatenoteintentresponsecode/unspecified.md): Deprecated. The response code was not specified.
- [INCreateNoteIntentResponseCode.ready](increatenoteintentresponsecode/ready.md): Deprecated. You are ready to handle the intent.
- [INCreateNoteIntentResponseCode.inProgress](increatenoteintentresponsecode/inprogress.md): Deprecated. Note creation is still in progress.
- [INCreateNoteIntentResponseCode.success](increatenoteintentresponsecode/success.md): Deprecated. You successfully created the note.
- [INCreateNoteIntentResponseCode.failure](increatenoteintentresponsecode/failure.md): Deprecated. You were unable to create the note.
- [INCreateNoteIntentResponseCode.failureRequiringAppLaunch](increatenoteintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must create the note from within your app.

### Initializers

- [init(rawValue:)](increatenoteintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](increatenoteintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INCreateNoteIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating the state of the response.

> INCreateNoteIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
enum INCreateNoteIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INCreateNoteIntentResponseCodeUnspecified](increatenoteintentresponsecode/unspecified.md): Deprecated. The response code was not specified.
- [INCreateNoteIntentResponseCodeReady](increatenoteintentresponsecode/ready.md): Deprecated. You are ready to handle the intent.
- [INCreateNoteIntentResponseCodeInProgress](increatenoteintentresponsecode/inprogress.md): Deprecated. Note creation is still in progress.
- [INCreateNoteIntentResponseCodeSuccess](increatenoteintentresponsecode/success.md): Deprecated. You successfully created the note.
- [INCreateNoteIntentResponseCodeFailure](increatenoteintentresponsecode/failure.md): Deprecated. You were unable to create the note.
- [INCreateNoteIntentResponseCodeFailureRequiringAppLaunch](increatenoteintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must create the note from within your app.

## See Also

### Getting the Response Code

- [code](increatenoteintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
