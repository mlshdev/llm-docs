> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintentresponsecode/ready](https://developer.apple.com/documentation/intents/insearchforbillsintentresponsecode/ready)

# INSearchForBillsIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

You’re ready to handle the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

Return this response code during the confirmation phase after you’ve verified that you’re able to perform the search. Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INSearchForBillsIntentResponseCode.unspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSearchForBillsIntentResponseCode.inProgress](inprogress.md): Deprecated. The search is still in progress.
- [INSearchForBillsIntentResponseCode.success](success.md): Deprecated. You successfully retrieved the search results.
- [INSearchForBillsIntentResponseCode.failure](failure.md): Deprecated. You were unable to retrieve the search results.
- [INSearchForBillsIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to perform the search.
- [INSearchForBillsIntentResponseCode.failureCredentialsUnverified](failurecredentialsunverified.md): Deprecated. You were unable to perform the search because you couldn’t verify the user’s credentials.
- [INSearchForBillsIntentResponseCode.failureBillNotFound](failurebillnotfound.md): Deprecated. The search yielded no results.

# INSearchForBillsIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

You’re ready to handle the intent.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
INSearchForBillsIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

Return this response code during the confirmation phase after you’ve verified that you’re able to perform the search. Don’t return this response code when handling the intent; doing so causes the device to display an error.

## See Also

### Constants

- [INSearchForBillsIntentResponseCodeUnspecified](unspecified.md): Deprecated. The response didn’t specify a response code.
- [INSearchForBillsIntentResponseCodeInProgress](inprogress.md): Deprecated. The search is still in progress.
- [INSearchForBillsIntentResponseCodeSuccess](success.md): Deprecated. You successfully retrieved the search results.
- [INSearchForBillsIntentResponseCodeFailure](failure.md): Deprecated. You were unable to retrieve the search results.
- [INSearchForBillsIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): Deprecated. The user must launch your app to perform the search.
- [INSearchForBillsIntentResponseCodeFailureCredentialsUnverified](failurecredentialsunverified.md): Deprecated. You were unable to perform the search because you couldn’t verify the user’s credentials.
- [INSearchForBillsIntentResponseCodeFailureBillNotFound](failurebillnotfound.md): Deprecated. The search yielded no results.
