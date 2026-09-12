> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformediaintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/insearchformediaintentresponsecode/failurerequiringapplaunch)

# INSearchForMediaIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The user needs to launch your app to search for the media.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request with Siri for a reason not covered by any other response code. For example, you might use this code if the user hasn’t set up an account with your app. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Response Code

- [INSearchForMediaIntentResponseCode.unspecified](unspecified.md): An unknown state.
- [INSearchForMediaIntentResponseCode.ready](ready.md): The app is ready to perform the search.
- [INSearchForMediaIntentResponseCode.continueInApp](continueinapp.md): The system should launch your app in the foreground to search for the media.
- [INSearchForMediaIntentResponseCode.inProgress](inprogress.md): The app is currently trying to process the search request.
- [INSearchForMediaIntentResponseCode.success](success.md): The app successfully performed the search.
- [INSearchForMediaIntentResponseCode.failure](failure.md): The app is unable to search for the media.

# INSearchForMediaIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The user needs to launch your app to search for the media.

## Declaration

```objectivec
INSearchForMediaIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request with Siri for a reason not covered by any other response code. For example, you might use this code if the user hasn’t set up an account with your app. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Response Code

- [INSearchForMediaIntentResponseCodeUnspecified](unspecified.md): An unknown state.
- [INSearchForMediaIntentResponseCodeReady](ready.md): The app is ready to perform the search.
- [INSearchForMediaIntentResponseCodeContinueInApp](continueinapp.md): The system should launch your app in the foreground to search for the media.
- [INSearchForMediaIntentResponseCodeInProgress](inprogress.md): The app is currently trying to process the search request.
- [INSearchForMediaIntentResponseCodeSuccess](success.md): The app successfully performed the search.
- [INSearchForMediaIntentResponseCodeFailure](failure.md): The app is unable to search for the media.
