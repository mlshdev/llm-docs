> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediaintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/inaddmediaintentresponsecode/failurerequiringapplaunch)

# INAddMediaIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The user must launch the app to add media.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request with Siri for a reason not covered by any other response code. For example, use this code if the user hasn’t set up an account with your app. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Response Code

- [INAddMediaIntentResponseCode.unspecified](unspecified.md): An unknown state.
- [INAddMediaIntentResponseCode.ready](ready.md): The app is ready to add media.
- [INAddMediaIntentResponseCode.inProgress](inprogress.md): The app is currently trying to process the add media request.
- [INAddMediaIntentResponseCode.success](success.md): The app successfully added the media.
- [INAddMediaIntentResponseCode.handleInApp](handleinapp.md): The system should launch the app in the background to handle the intent.
- [INAddMediaIntentResponseCode.failure](failure.md): The app was unable to add the media.

# INAddMediaIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The user must launch the app to add media.

## Declaration

```objectivec
INAddMediaIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request with Siri for a reason not covered by any other response code. For example, use this code if the user hasn’t set up an account with your app. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Response Code

- [INAddMediaIntentResponseCodeUnspecified](unspecified.md): An unknown state.
- [INAddMediaIntentResponseCodeReady](ready.md): The app is ready to add media.
- [INAddMediaIntentResponseCodeInProgress](inprogress.md): The app is currently trying to process the add media request.
- [INAddMediaIntentResponseCodeSuccess](success.md): The app successfully added the media.
- [INAddMediaIntentResponseCodeHandleInApp](handleinapp.md): The system should launch the app in the background to handle the intent.
- [INAddMediaIntentResponseCodeFailure](failure.md): The app was unable to add the media.
