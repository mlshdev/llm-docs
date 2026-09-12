> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformediaintentresponsecode/failure](https://developer.apple.com/documentation/intents/insearchformediaintentresponsecode/failure)

# INSearchForMediaIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The app is unable to search for the media.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that prevent your app from searching for the media.

## See Also

### Response Code

- [INSearchForMediaIntentResponseCode.unspecified](unspecified.md): An unknown state.
- [INSearchForMediaIntentResponseCode.ready](ready.md): The app is ready to perform the search.
- [INSearchForMediaIntentResponseCode.continueInApp](continueinapp.md): The system should launch your app in the foreground to search for the media.
- [INSearchForMediaIntentResponseCode.inProgress](inprogress.md): The app is currently trying to process the search request.
- [INSearchForMediaIntentResponseCode.success](success.md): The app successfully performed the search.
- [INSearchForMediaIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user needs to launch your app to search for the media.

# INSearchForMediaIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The app is unable to search for the media.

## Declaration

```objectivec
INSearchForMediaIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that prevent your app from searching for the media.

## See Also

### Response Code

- [INSearchForMediaIntentResponseCodeUnspecified](unspecified.md): An unknown state.
- [INSearchForMediaIntentResponseCodeReady](ready.md): The app is ready to perform the search.
- [INSearchForMediaIntentResponseCodeContinueInApp](continueinapp.md): The system should launch your app in the foreground to search for the media.
- [INSearchForMediaIntentResponseCodeInProgress](inprogress.md): The app is currently trying to process the search request.
- [INSearchForMediaIntentResponseCodeSuccess](success.md): The app successfully performed the search.
- [INSearchForMediaIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user needs to launch your app to search for the media.
