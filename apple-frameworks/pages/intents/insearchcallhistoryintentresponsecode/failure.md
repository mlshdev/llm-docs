> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintentresponsecode/failure](https://developer.apple.com/documentation/intents/insearchcallhistoryintentresponsecode/failure)

# INSearchCallHistoryIntentResponseCode.failure (Swift)

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

Use this code for both transient and unrecoverable errors that would prevent your app from searching the user’s call history. For example, use this code if the user’s call history requires accessing the network and the network is unavailable.

## See Also

### Constants

- [INSearchCallHistoryIntentResponseCode.unspecified](unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INSearchCallHistoryIntentResponseCode.ready](ready.md): Deprecated. Your app is ready to perform the search.
- [INSearchCallHistoryIntentResponseCode.continueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app in order to display the search results.
- [INSearchCallHistoryIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to search their call history.
- [INSearchCallHistoryIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching the call history is possible.
- [INSearchCallHistoryIntentResponseCode.inProgress](inprogress.md): Deprecated. Your app is in the process of handling the intent.
- [INSearchCallHistoryIntentResponseCode.success](success.md): Deprecated. Your app successfully handled the intent.

# INSearchCallHistoryIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

You were unable to perform the search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSearchCallHistoryIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent your app from searching the user’s call history. For example, use this code if the user’s call history requires accessing the network and the network is unavailable.

## See Also

### Constants

- [INSearchCallHistoryIntentResponseCodeUnspecified](unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INSearchCallHistoryIntentResponseCodeReady](ready.md): Deprecated. Your app is ready to perform the search.
- [INSearchCallHistoryIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app in order to display the search results.
- [INSearchCallHistoryIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to search their call history.
- [INSearchCallHistoryIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching the call history is possible.
- [INSearchCallHistoryIntentResponseCodeInProgress](inprogress.md): Deprecated. Your app is in the process of handling the intent.
- [INSearchCallHistoryIntentResponseCodeSuccess](success.md): Deprecated. Your app successfully handled the intent.
