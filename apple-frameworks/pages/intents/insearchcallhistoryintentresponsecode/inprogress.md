> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/insearchcallhistoryintentresponsecode/inprogress)

# INSearchCallHistoryIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Your app is in the process of handling the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

Use this code during the handling phase to indicate that the search is in progress but hasn’t yet completed. Typically, you should return this code if you can’t complete the search within a few seconds.

## See Also

### Constants

- [INSearchCallHistoryIntentResponseCode.unspecified](unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INSearchCallHistoryIntentResponseCode.ready](ready.md): Deprecated. Your app is ready to perform the search.
- [INSearchCallHistoryIntentResponseCode.continueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app in order to display the search results.
- [INSearchCallHistoryIntentResponseCode.failure](failure.md): Deprecated. You were unable to perform the search.
- [INSearchCallHistoryIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to search their call history.
- [INSearchCallHistoryIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching the call history is possible.
- [INSearchCallHistoryIntentResponseCode.success](success.md): Deprecated. Your app successfully handled the intent.

# INSearchCallHistoryIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Your app is in the process of handling the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSearchCallHistoryIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Use this code during the handling phase to indicate that the search is in progress but hasn’t yet completed. Typically, you should return this code if you can’t complete the search within a few seconds.

## See Also

### Constants

- [INSearchCallHistoryIntentResponseCodeUnspecified](unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INSearchCallHistoryIntentResponseCodeReady](ready.md): Deprecated. Your app is ready to perform the search.
- [INSearchCallHistoryIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. Your extension is ready to transfer control to the app in order to display the search results.
- [INSearchCallHistoryIntentResponseCodeFailure](failure.md): Deprecated. You were unable to perform the search.
- [INSearchCallHistoryIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to search their call history.
- [INSearchCallHistoryIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching the call history is possible.
- [INSearchCallHistoryIntentResponseCodeSuccess](success.md): Deprecated. Your app successfully handled the intent.
