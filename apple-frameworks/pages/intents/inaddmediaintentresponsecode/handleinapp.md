> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediaintentresponsecode/handleinapp](https://developer.apple.com/documentation/intents/inaddmediaintentresponsecode/handleinapp)

# INAddMediaIntentResponseCode.handleInApp (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The system should launch the app in the background to handle the intent.

## Declaration

```swift
case handleInApp
```

<a id="Discussion"></a>

## Discussion

Because the lifespan of an app extension is short, adding media should happen in your app, not in the Intents app extension. To handle adding media in your app while in the background, return [INAddMediaIntentResponseCode.handleInApp](handleinapp.md) as the response [code](../inaddmediaintentresponse/code.md).

## See Also

### Response Code

- [INAddMediaIntentResponseCode.unspecified](unspecified.md): An unknown state.
- [INAddMediaIntentResponseCode.ready](ready.md): The app is ready to add media.
- [INAddMediaIntentResponseCode.inProgress](inprogress.md): The app is currently trying to process the add media request.
- [INAddMediaIntentResponseCode.success](success.md): The app successfully added the media.
- [INAddMediaIntentResponseCode.failure](failure.md): The app was unable to add the media.
- [INAddMediaIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch the app to add media.

# INAddMediaIntentResponseCodeHandleInApp (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The system should launch the app in the background to handle the intent.

## Declaration

```objectivec
INAddMediaIntentResponseCodeHandleInApp
```

<a id="Discussion"></a>

## Discussion

Because the lifespan of an app extension is short, adding media should happen in your app, not in the Intents app extension. To handle adding media in your app while in the background, return [INAddMediaIntentResponseCodeHandleInApp](handleinapp.md) as the response [code](../inaddmediaintentresponse/code.md).

## See Also

### Response Code

- [INAddMediaIntentResponseCodeUnspecified](unspecified.md): An unknown state.
- [INAddMediaIntentResponseCodeReady](ready.md): The app is ready to add media.
- [INAddMediaIntentResponseCodeInProgress](inprogress.md): The app is currently trying to process the add media request.
- [INAddMediaIntentResponseCodeSuccess](success.md): The app successfully added the media.
- [INAddMediaIntentResponseCodeFailure](failure.md): The app was unable to add the media.
- [INAddMediaIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch the app to add media.
