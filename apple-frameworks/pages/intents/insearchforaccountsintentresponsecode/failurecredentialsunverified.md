> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforaccountsintentresponsecode/failurecredentialsunverified](https://developer.apple.com/documentation/intents/insearchforaccountsintentresponsecode/failurecredentialsunverified)

# INSearchForAccountsIntentResponseCode.failureCredentialsUnverified (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

You were unable to perform the search because you could not verify the user’s credentials.

## Declaration

```swift
case failureCredentialsUnverified
```

<a id="Discussion"></a>

## Discussion

Use this response code when you are unable to verify the credentials of the current user. You might use this response code if the user is currently logged out of your app or is unknown to you. You might also use it if the user does not have any configured accounts.

## See Also

### Constants

- [INSearchForAccountsIntentResponseCode.unspecified](unspecified.md): The response didn’t specify a response code.
- [INSearchForAccountsIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INSearchForAccountsIntentResponseCode.inProgress](inprogress.md): The search is still in progress.
- [INSearchForAccountsIntentResponseCode.success](success.md): You successfully retrieved the search results.
- [INSearchForAccountsIntentResponseCode.failure](failure.md): You were unable to retrieve the search results.
- [INSearchForAccountsIntentResponseCode.failureNotEligible](failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INSearchForAccountsIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to perform the search.
- [INSearchForAccountsIntentResponseCode.failureAccountNotFound](failureaccountnotfound.md): The search yielded no results.
- [INSearchForAccountsIntentResponseCode.failureTermsAndConditionsAcceptanceRequired](failuretermsandconditionsacceptancerequired.md): The search failed as the user must accept the terms and conditions.

# INSearchForAccountsIntentResponseCodeFailureCredentialsUnverified (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

You were unable to perform the search because you could not verify the user’s credentials.

## Declaration

```objectivec
INSearchForAccountsIntentResponseCodeFailureCredentialsUnverified
```

<a id="Discussion"></a>

## Discussion

Use this response code when you are unable to verify the credentials of the current user. You might use this response code if the user is currently logged out of your app or is unknown to you. You might also use it if the user does not have any configured accounts.

## See Also

### Constants

- [INSearchForAccountsIntentResponseCodeUnspecified](unspecified.md): The response didn’t specify a response code.
- [INSearchForAccountsIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INSearchForAccountsIntentResponseCodeInProgress](inprogress.md): The search is still in progress.
- [INSearchForAccountsIntentResponseCodeSuccess](success.md): You successfully retrieved the search results.
- [INSearchForAccountsIntentResponseCodeFailure](failure.md): You were unable to retrieve the search results.
- [INSearchForAccountsIntentResponseCodeFailureNotEligible](failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INSearchForAccountsIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to perform the search.
- [INSearchForAccountsIntentResponseCodeFailureAccountNotFound](failureaccountnotfound.md): The search yielded no results.
- [INSearchForAccountsIntentResponseCodeFailureTermsAndConditionsAcceptanceRequired](failuretermsandconditionsacceptancerequired.md): The search failed as the user must accept the terms and conditions.
