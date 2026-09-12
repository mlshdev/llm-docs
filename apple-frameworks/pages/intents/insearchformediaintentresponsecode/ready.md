> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformediaintentresponsecode/ready](https://developer.apple.com/documentation/intents/insearchformediaintentresponsecode/ready)

# INSearchForMediaIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The app is ready to perform the search.

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your app is ready and able to act on the intent.

## See Also

### Response Code

- [INSearchForMediaIntentResponseCode.unspecified](unspecified.md): An unknown state.
- [INSearchForMediaIntentResponseCode.continueInApp](continueinapp.md): The system should launch your app in the foreground to search for the media.
- [INSearchForMediaIntentResponseCode.inProgress](inprogress.md): The app is currently trying to process the search request.
- [INSearchForMediaIntentResponseCode.success](success.md): The app successfully performed the search.
- [INSearchForMediaIntentResponseCode.failure](failure.md): The app is unable to search for the media.
- [INSearchForMediaIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user needs to launch your app to search for the media.

# INSearchForMediaIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The app is ready to perform the search.

## Declaration

```objectivec
INSearchForMediaIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your app is ready and able to act on the intent.

## See Also

### Response Code

- [INSearchForMediaIntentResponseCodeUnspecified](unspecified.md): An unknown state.
- [INSearchForMediaIntentResponseCodeContinueInApp](continueinapp.md): The system should launch your app in the foreground to search for the media.
- [INSearchForMediaIntentResponseCodeInProgress](inprogress.md): The app is currently trying to process the search request.
- [INSearchForMediaIntentResponseCodeSuccess](success.md): The app successfully performed the search.
- [INSearchForMediaIntentResponseCodeFailure](failure.md): The app is unable to search for the media.
- [INSearchForMediaIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user needs to launch your app to search for the media.
