> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchcallhistoryintentresponsecode/continueinapp](https://developer.apple.com/documentation/intents/insearchcallhistoryintentresponsecode/continueinapp)

# INSearchCallHistoryIntentResponseCode.continueInApp (Swift)

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

Upon returning this code, Siri launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object you provided at initialization time. (If you didn’t provide a user activity object, Siri creates one for you). Siri adds an [INInteraction](../ininteraction.md) object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to display the search results.

## See Also

### Constants

- [INSearchCallHistoryIntentResponseCode.unspecified](unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INSearchCallHistoryIntentResponseCode.ready](ready.md): Deprecated. Your app is ready to perform the search.
- [INSearchCallHistoryIntentResponseCode.failure](failure.md): Deprecated. You were unable to perform the search.
- [INSearchCallHistoryIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to search their call history.
- [INSearchCallHistoryIntentResponseCode.failureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching the call history is possible.
- [INSearchCallHistoryIntentResponseCode.inProgress](inprogress.md): Deprecated. Your app is in the process of handling the intent.
- [INSearchCallHistoryIntentResponseCode.success](success.md): Deprecated. Your app successfully handled the intent.

# INSearchCallHistoryIntentResponseCodeContinueInApp (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Your extension is ready to transfer control to the app in order to display the search results.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSearchCallHistoryIntentResponseCodeContinueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, Siri launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object you provided at initialization time. (If you didn’t provide a user activity object, Siri creates one for you). Siri adds an [INInteraction](../ininteraction.md) object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to display the search results.

## See Also

### Constants

- [INSearchCallHistoryIntentResponseCodeUnspecified](unspecified.md): Deprecated. Your app can’t provide a more specific response.
- [INSearchCallHistoryIntentResponseCodeReady](ready.md): Deprecated. Your app is ready to perform the search.
- [INSearchCallHistoryIntentResponseCodeFailure](failure.md): Deprecated. You were unable to perform the search.
- [INSearchCallHistoryIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to search their call history.
- [INSearchCallHistoryIntentResponseCodeFailureAppConfigurationRequired](failureappconfigurationrequired.md): Deprecated. The user must perform additional configuration steps before searching the call history is possible.
- [INSearchCallHistoryIntentResponseCodeInProgress](inprogress.md): Deprecated. Your app is in the process of handling the intent.
- [INSearchCallHistoryIntentResponseCodeSuccess](success.md): Deprecated. Your app successfully handled the intent.
