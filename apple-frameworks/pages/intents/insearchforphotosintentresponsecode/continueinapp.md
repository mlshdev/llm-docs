> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforphotosintentresponsecode/continueinapp](https://developer.apple.com/documentation/intents/insearchforphotosintentresponsecode/continueinapp)

# INSearchForPhotosIntentResponseCode.continueInApp (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Your extension is ready to transfer control to the app in order to display the search results.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case continueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, Siri launches your app and passes it the NSUserActivity object you provided at initialization time. (If you didn’t provide a user activity object, Siri creates one for you). Siri adds an INInteraction object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to display the search results.

## See Also

### Constants

- [INSearchForPhotosIntentResponseCode.unspecified](unspecified.md): Deprecated. Your app doesn’t provide a specific status.
- [INSearchForPhotosIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSearchForPhotosIntentResponseCode.failure](failure.md): Deprecated. You were unable to perform the search.
- [INSearchForPhotosIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to search their photos.
- [INSearchForPhotosIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching for photos is possible.

# INSearchForPhotosIntentResponseCodeContinueInApp (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Your extension is ready to transfer control to the app in order to display the search results.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSearchForPhotosIntentResponseCodeContinueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, Siri launches your app and passes it the NSUserActivity object you provided at initialization time. (If you didn’t provide a user activity object, Siri creates one for you). Siri adds an INInteraction object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to display the search results.

## See Also

### Constants

- [INSearchForPhotosIntentResponseCodeUnspecified](unspecified.md): Deprecated. Your app doesn’t provide a specific status.
- [INSearchForPhotosIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSearchForPhotosIntentResponseCodeFailure](failure.md): Deprecated. You were unable to perform the search.
- [INSearchForPhotosIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to search their photos.
- [INSearchForPhotosIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching for photos is possible.
