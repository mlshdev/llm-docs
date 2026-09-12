> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformediaintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/insearchformediaintentresponsecode/inprogress)

# INSearchForMediaIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The app is currently trying to process the search request.

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if it may take more than a few seconds to search for the media.

## See Also

### Response Code

- [INSearchForMediaIntentResponseCode.unspecified](unspecified.md): An unknown state.
- [INSearchForMediaIntentResponseCode.ready](ready.md): The app is ready to perform the search.
- [INSearchForMediaIntentResponseCode.continueInApp](continueinapp.md): The system should launch your app in the foreground to search for the media.
- [INSearchForMediaIntentResponseCode.success](success.md): The app successfully performed the search.
- [INSearchForMediaIntentResponseCode.failure](failure.md): The app is unable to search for the media.
- [INSearchForMediaIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user needs to launch your app to search for the media.

# INSearchForMediaIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The app is currently trying to process the search request.

## Declaration

```objectivec
INSearchForMediaIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if it may take more than a few seconds to search for the media.

## See Also

### Response Code

- [INSearchForMediaIntentResponseCodeUnspecified](unspecified.md): An unknown state.
- [INSearchForMediaIntentResponseCodeReady](ready.md): The app is ready to perform the search.
- [INSearchForMediaIntentResponseCodeContinueInApp](continueinapp.md): The system should launch your app in the foreground to search for the media.
- [INSearchForMediaIntentResponseCodeSuccess](success.md): The app successfully performed the search.
- [INSearchForMediaIntentResponseCodeFailure](failure.md): The app is unable to search for the media.
- [INSearchForMediaIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user needs to launch your app to search for the media.
