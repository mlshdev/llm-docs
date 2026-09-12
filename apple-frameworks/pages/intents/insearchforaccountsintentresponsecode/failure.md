> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforaccountsintentresponsecode/failure](https://developer.apple.com/documentation/intents/insearchforaccountsintentresponsecode/failure)

# INSearchForAccountsIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

You were unable to retrieve the search results.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this response code for both transient and unrecoverable errors that prevented you from performing the search.

## See Also

### Constants

- [INSearchForAccountsIntentResponseCode.unspecified](unspecified.md): The response didn’t specify a response code.
- [INSearchForAccountsIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INSearchForAccountsIntentResponseCode.inProgress](inprogress.md): The search is still in progress.
- [INSearchForAccountsIntentResponseCode.success](success.md): You successfully retrieved the search results.
- [INSearchForAccountsIntentResponseCode.failureNotEligible](failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INSearchForAccountsIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to perform the search.
- [INSearchForAccountsIntentResponseCode.failureCredentialsUnverified](failurecredentialsunverified.md): You were unable to perform the search because you could not verify the user’s credentials.
- [INSearchForAccountsIntentResponseCode.failureAccountNotFound](failureaccountnotfound.md): The search yielded no results.
- [INSearchForAccountsIntentResponseCode.failureTermsAndConditionsAcceptanceRequired](failuretermsandconditionsacceptancerequired.md): The search failed as the user must accept the terms and conditions.

# INSearchForAccountsIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

You were unable to retrieve the search results.

## Declaration

```objectivec
INSearchForAccountsIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this response code for both transient and unrecoverable errors that prevented you from performing the search.

## See Also

### Constants

- [INSearchForAccountsIntentResponseCodeUnspecified](unspecified.md): The response didn’t specify a response code.
- [INSearchForAccountsIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INSearchForAccountsIntentResponseCodeInProgress](inprogress.md): The search is still in progress.
- [INSearchForAccountsIntentResponseCodeSuccess](success.md): You successfully retrieved the search results.
- [INSearchForAccountsIntentResponseCodeFailureNotEligible](failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INSearchForAccountsIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to perform the search.
- [INSearchForAccountsIntentResponseCodeFailureCredentialsUnverified](failurecredentialsunverified.md): You were unable to perform the search because you could not verify the user’s credentials.
- [INSearchForAccountsIntentResponseCodeFailureAccountNotFound](failureaccountnotfound.md): The search yielded no results.
- [INSearchForAccountsIntentResponseCodeFailureTermsAndConditionsAcceptanceRequired](failuretermsandconditionsacceptancerequired.md): The search failed as the user must accept the terms and conditions.
