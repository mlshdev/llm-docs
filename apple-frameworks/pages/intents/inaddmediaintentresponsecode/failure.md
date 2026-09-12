> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediaintentresponsecode/failure](https://developer.apple.com/documentation/intents/inaddmediaintentresponsecode/failure)

# INAddMediaIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The app was unable to add the media.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent your app from adding the media.

## See Also

### Response Code

- [INAddMediaIntentResponseCode.unspecified](unspecified.md): An unknown state.
- [INAddMediaIntentResponseCode.ready](ready.md): The app is ready to add media.
- [INAddMediaIntentResponseCode.inProgress](inprogress.md): The app is currently trying to process the add media request.
- [INAddMediaIntentResponseCode.success](success.md): The app successfully added the media.
- [INAddMediaIntentResponseCode.handleInApp](handleinapp.md): The system should launch the app in the background to handle the intent.
- [INAddMediaIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch the app to add media.

# INAddMediaIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The app was unable to add the media.

## Declaration

```objectivec
INAddMediaIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent your app from adding the media.

## See Also

### Response Code

- [INAddMediaIntentResponseCodeUnspecified](unspecified.md): An unknown state.
- [INAddMediaIntentResponseCodeReady](ready.md): The app is ready to add media.
- [INAddMediaIntentResponseCodeInProgress](inprogress.md): The app is currently trying to process the add media request.
- [INAddMediaIntentResponseCodeSuccess](success.md): The app successfully added the media.
- [INAddMediaIntentResponseCodeHandleInApp](handleinapp.md): The system should launch the app in the background to handle the intent.
- [INAddMediaIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch the app to add media.
