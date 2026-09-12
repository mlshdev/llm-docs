> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforphotosintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/insearchforphotosintentresponsecode/failurerequiringapplaunch)

# INSearchForPhotosIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The user must launch your app to search their photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request through Siri for a reason not covered by any other response code. For example, you might use this code if the user hasn’t set up an account with your app. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSearchForPhotosIntentResponseCode.unspecified](unspecified.md): Deprecated. Your app doesn’t provide a specific status.
- [INSearchForPhotosIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSearchForPhotosIntentResponseCode.continueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app in order to display the search results.
- [INSearchForPhotosIntentResponseCode.failure](failure.md): Deprecated. You were unable to perform the search.
- [INSearchForPhotosIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching for photos is possible.

# INSearchForPhotosIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The user must launch your app to search their photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSearchForPhotosIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request through Siri for a reason not covered by any other response code. For example, you might use this code if the user hasn’t set up an account with your app. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSearchForPhotosIntentResponseCodeUnspecified](unspecified.md): Deprecated. Your app doesn’t provide a specific status.
- [INSearchForPhotosIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSearchForPhotosIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app in order to display the search results.
- [INSearchForPhotosIntentResponseCodeFailure](failure.md): Deprecated. You were unable to perform the search.
- [INSearchForPhotosIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching for photos is possible.
