> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupdatemediaaffinityintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/inupdatemediaaffinityintentresponsecode/inprogress)

# INUpdateMediaAffinityIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The app is currently trying to process the update affinity request.

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if it may take more than a few seconds to update the affinity for the media.

## See Also

### Response Code

- [INUpdateMediaAffinityIntentResponseCode.unspecified](unspecified.md): An unknown state.
- [INUpdateMediaAffinityIntentResponseCode.ready](ready.md): The app is ready.
- [INUpdateMediaAffinityIntentResponseCode.success](success.md): The app successfully updated the user’s affinity for the media.
- [INUpdateMediaAffinityIntentResponseCode.failure](failure.md): The app is unable to update the user’s affinity for the media.
- [INUpdateMediaAffinityIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user needs to launch the app to update the user’s affinity for the media.

# INUpdateMediaAffinityIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The app is currently trying to process the update affinity request.

## Declaration

```objectivec
INUpdateMediaAffinityIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if it may take more than a few seconds to update the affinity for the media.

## See Also

### Response Code

- [INUpdateMediaAffinityIntentResponseCodeUnspecified](unspecified.md): An unknown state.
- [INUpdateMediaAffinityIntentResponseCodeReady](ready.md): The app is ready.
- [INUpdateMediaAffinityIntentResponseCodeSuccess](success.md): The app successfully updated the user’s affinity for the media.
- [INUpdateMediaAffinityIntentResponseCodeFailure](failure.md): The app is unable to update the user’s affinity for the media.
- [INUpdateMediaAffinityIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user needs to launch the app to update the user’s affinity for the media.
