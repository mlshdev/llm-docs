> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/insearchforbillsintentresponsecode/failurerequiringapplaunch)

# INSearchForBillsIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The user must launch your app to perform the search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t perform the search from your Intents extension but can perform it from your app. Don’t use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSearchForBillsIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSearchForBillsIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSearchForBillsIntentResponseCode.inProgress](inprogress.md): Deprecated. The search is still in progress.
- [INSearchForBillsIntentResponseCode.success](success.md): Deprecated. You successfully retrieved the search results.
- [INSearchForBillsIntentResponseCode.failure](failure.md): Deprecated. You were unable to retrieve the search results.
- [INSearchForBillsIntentResponseCode.failureCredentialsUnverified](failurecredentialsunverified.md): Deprecated. You were unable to perform the search because you couldn’t verify the user’s credentials.
- [INSearchForBillsIntentResponseCode.failureBillNotFound](failurebillnotfound.md): Deprecated. The search yielded no results.

# INSearchForBillsIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The user must launch your app to perform the search.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSearchForBillsIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you can’t perform the search from your Intents extension but can perform it from your app. Don’t use this code for general errors or to force the user to launch your app.

## See Also

### Constants

- [INSearchForBillsIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSearchForBillsIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSearchForBillsIntentResponseCodeInProgress](inprogress.md): Deprecated. The search is still in progress.
- [INSearchForBillsIntentResponseCodeSuccess](success.md): Deprecated. You successfully retrieved the search results.
- [INSearchForBillsIntentResponseCodeFailure](failure.md): Deprecated. You were unable to retrieve the search results.
- [INSearchForBillsIntentResponseCodeFailureCredentialsUnverified](failurecredentialsunverified.md): Deprecated. You were unable to perform the search because you couldn’t verify the user’s credentials.
- [INSearchForBillsIntentResponseCodeFailureBillNotFound](failurebillnotfound.md): Deprecated. The search yielded no results.
