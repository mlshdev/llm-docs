> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/insearchcallhistoryintentresponsecode/failurerequiringapplaunch)

# INSearchCallHistoryIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The user must launch your app to search their call history.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request with Siri for a reason not covered by any other response code. For example, you might use this code if the user hasn’t set up an account with your app. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSearchCallHistoryIntentResponseCode.unspecified](unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INSearchCallHistoryIntentResponseCode.ready](ready.md): Deprecated. Your app is ready to perform the search.
- [INSearchCallHistoryIntentResponseCode.continueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app in order to display the search results.
- [INSearchCallHistoryIntentResponseCode.failure](failure.md): Deprecated. You were unable to perform the search.
- [INSearchCallHistoryIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching the call history is possible.
- [INSearchCallHistoryIntentResponseCode.inProgress](inprogress.md): Deprecated. Your app is in the process of handling the intent.
- [INSearchCallHistoryIntentResponseCode.success](success.md): Deprecated. Your app successfully handled the intent.

# INSearchCallHistoryIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The user must launch your app to search their call history.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSearchCallHistoryIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t handle the request with Siri for a reason not covered by any other response code. For example, you might use this code if the user hasn’t set up an account with your app. Don’t use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSearchCallHistoryIntentResponseCodeUnspecified](unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INSearchCallHistoryIntentResponseCodeReady](ready.md): Deprecated. Your app is ready to perform the search.
- [INSearchCallHistoryIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app in order to display the search results.
- [INSearchCallHistoryIntentResponseCodeFailure](failure.md): Deprecated. You were unable to perform the search.
- [INSearchCallHistoryIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching the call history is possible.
- [INSearchCallHistoryIntentResponseCodeInProgress](inprogress.md): Deprecated. Your app is in the process of handling the intent.
- [INSearchCallHistoryIntentResponseCodeSuccess](success.md): Deprecated. Your app successfully handled the intent.
