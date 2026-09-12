> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupdatemediaaffinityintentresponsecode/failure](https://developer.apple.com/documentation/intents/inupdatemediaaffinityintentresponsecode/failure)

# INUpdateMediaAffinityIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The app is unable to update the user’s affinity for the media.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent your app from updating the user’s affinity for the media.

## See Also

### Response Code

- [INUpdateMediaAffinityIntentResponseCode.unspecified](unspecified.md): An unknown state.
- [INUpdateMediaAffinityIntentResponseCode.ready](ready.md): The app is ready.
- [INUpdateMediaAffinityIntentResponseCode.inProgress](inprogress.md): The app is currently trying to process the update affinity request.
- [INUpdateMediaAffinityIntentResponseCode.success](success.md): The app successfully updated the user’s affinity for the media.
- [INUpdateMediaAffinityIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user needs to launch the app to update the user’s affinity for the media.

# INUpdateMediaAffinityIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The app is unable to update the user’s affinity for the media.

## Declaration

```objectivec
INUpdateMediaAffinityIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent your app from updating the user’s affinity for the media.

## See Also

### Response Code

- [INUpdateMediaAffinityIntentResponseCodeUnspecified](unspecified.md): An unknown state.
- [INUpdateMediaAffinityIntentResponseCodeReady](ready.md): The app is ready.
- [INUpdateMediaAffinityIntentResponseCodeInProgress](inprogress.md): The app is currently trying to process the update affinity request.
- [INUpdateMediaAffinityIntentResponseCodeSuccess](success.md): The app successfully updated the user’s affinity for the media.
- [INUpdateMediaAffinityIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user needs to launch the app to update the user’s affinity for the media.
