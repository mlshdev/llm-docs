> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforphotosintentresponsecode/failure](https://developer.apple.com/documentation/intents/insearchforphotosintentresponsecode/failure)

# INSearchForPhotosIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

You were unable to perform the search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent your app from searching the user’s photos.

## See Also

### Constants

- [INSearchForPhotosIntentResponseCode.unspecified](unspecified.md): Deprecated. Your app doesn’t provide a specific status.
- [INSearchForPhotosIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSearchForPhotosIntentResponseCode.continueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app in order to display the search results.
- [INSearchForPhotosIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to search their photos.
- [INSearchForPhotosIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching for photos is possible.

# INSearchForPhotosIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

You were unable to perform the search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSearchForPhotosIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent your app from searching the user’s photos.

## See Also

### Constants

- [INSearchForPhotosIntentResponseCodeUnspecified](unspecified.md): Deprecated. Your app doesn’t provide a specific status.
- [INSearchForPhotosIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSearchForPhotosIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app in order to display the search results.
- [INSearchForPhotosIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to search their photos.
- [INSearchForPhotosIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching for photos is possible.
