> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/insearchforbillsintentresponsecode/inprogress)

# INSearchForBillsIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The search is still in progress.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if the search is running but you’re unable to return the results after a few seconds of having your handler called.

## See Also

### Constants

- [INSearchForBillsIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSearchForBillsIntentResponseCode.ready](ready.md): Deprecated. You’re ready to handle the intent.
- [INSearchForBillsIntentResponseCode.success](success.md): Deprecated. You successfully retrieved the search results.
- [INSearchForBillsIntentResponseCode.failure](failure.md): Deprecated. You were unable to retrieve the search results.
- [INSearchForBillsIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to perform the search.
- [INSearchForBillsIntentResponseCode.failureCredentialsUnverified](failurecredentialsunverified.md): Deprecated. You were unable to perform the search because you couldn’t verify the user’s credentials.
- [INSearchForBillsIntentResponseCode.failureBillNotFound](failurebillnotfound.md): Deprecated. The search yielded no results.

# INSearchForBillsIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The search is still in progress.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSearchForBillsIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Return this code if the search is running but you’re unable to return the results after a few seconds of having your handler called.

## See Also

### Constants

- [INSearchForBillsIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSearchForBillsIntentResponseCodeReady](ready.md): Deprecated. You’re ready to handle the intent.
- [INSearchForBillsIntentResponseCodeSuccess](success.md): Deprecated. You successfully retrieved the search results.
- [INSearchForBillsIntentResponseCodeFailure](failure.md): Deprecated. You were unable to retrieve the search results.
- [INSearchForBillsIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to perform the search.
- [INSearchForBillsIntentResponseCodeFailureCredentialsUnverified](failurecredentialsunverified.md): Deprecated. You were unable to perform the search because you couldn’t verify the user’s credentials.
- [INSearchForBillsIntentResponseCodeFailureBillNotFound](failurebillnotfound.md): Deprecated. The search yielded no results.
