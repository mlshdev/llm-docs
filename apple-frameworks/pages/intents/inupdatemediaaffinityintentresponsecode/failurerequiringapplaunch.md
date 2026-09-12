> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupdatemediaaffinityintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/inupdatemediaaffinityintentresponsecode/failurerequiringapplaunch)

# INUpdateMediaAffinityIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The user needs to launch the app to update the user’s affinity for the media.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request with Siri for a reason not covered by any other response code. For example, you might use this code if the user hasn’t set up an account with your app. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Response Code

- [INUpdateMediaAffinityIntentResponseCode.unspecified](unspecified.md): An unknown state.
- [INUpdateMediaAffinityIntentResponseCode.ready](ready.md): The app is ready.
- [INUpdateMediaAffinityIntentResponseCode.inProgress](inprogress.md): The app is currently trying to process the update affinity request.
- [INUpdateMediaAffinityIntentResponseCode.success](success.md): The app successfully updated the user’s affinity for the media.
- [INUpdateMediaAffinityIntentResponseCode.failure](failure.md): The app is unable to update the user’s affinity for the media.

# INUpdateMediaAffinityIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The user needs to launch the app to update the user’s affinity for the media.

## Declaration

```objectivec
INUpdateMediaAffinityIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request with Siri for a reason not covered by any other response code. For example, you might use this code if the user hasn’t set up an account with your app. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Response Code

- [INUpdateMediaAffinityIntentResponseCodeUnspecified](unspecified.md): An unknown state.
- [INUpdateMediaAffinityIntentResponseCodeReady](ready.md): The app is ready.
- [INUpdateMediaAffinityIntentResponseCodeInProgress](inprogress.md): The app is currently trying to process the update affinity request.
- [INUpdateMediaAffinityIntentResponseCodeSuccess](success.md): The app successfully updated the user’s affinity for the media.
- [INUpdateMediaAffinityIntentResponseCodeFailure](failure.md): The app is unable to update the user’s affinity for the media.
