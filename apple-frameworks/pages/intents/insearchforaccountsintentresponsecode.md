> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforaccountsintentresponsecode](https://developer.apple.com/documentation/intents/insearchforaccountsintentresponsecode)

# INSearchForAccountsIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating the state of the response.

## Declaration

```swift
enum INSearchForAccountsIntentResponseCode
```

## Topics

### Constants

- [INSearchForAccountsIntentResponseCode.unspecified](insearchforaccountsintentresponsecode/unspecified.md): The response didn’t specify a response code.
- [INSearchForAccountsIntentResponseCode.ready](insearchforaccountsintentresponsecode/ready.md): You are ready to handle the intent.
- [INSearchForAccountsIntentResponseCode.inProgress](insearchforaccountsintentresponsecode/inprogress.md): The search is still in progress.
- [INSearchForAccountsIntentResponseCode.success](insearchforaccountsintentresponsecode/success.md): You successfully retrieved the search results.
- [INSearchForAccountsIntentResponseCode.failure](insearchforaccountsintentresponsecode/failure.md): You were unable to retrieve the search results.
- [INSearchForAccountsIntentResponseCode.failureNotEligible](insearchforaccountsintentresponsecode/failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INSearchForAccountsIntentResponseCode.failureRequiringAppLaunch](insearchforaccountsintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to perform the search.
- [INSearchForAccountsIntentResponseCode.failureCredentialsUnverified](insearchforaccountsintentresponsecode/failurecredentialsunverified.md): You were unable to perform the search because you could not verify the user’s credentials.
- [INSearchForAccountsIntentResponseCode.failureAccountNotFound](insearchforaccountsintentresponsecode/failureaccountnotfound.md): The search yielded no results.
- [INSearchForAccountsIntentResponseCode.failureTermsAndConditionsAcceptanceRequired](insearchforaccountsintentresponsecode/failuretermsandconditionsacceptancerequired.md): The search failed as the user must accept the terms and conditions.

### Initializers

- [init(rawValue:)](insearchforaccountsintentresponsecode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Response Code

- [code](insearchforaccountsintentresponse/code.md): The code indicating whether you successfully handled the intent.

# INSearchForAccountsIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating the state of the response.

## Declaration

```objectivec
enum INSearchForAccountsIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INSearchForAccountsIntentResponseCodeUnspecified](insearchforaccountsintentresponsecode/unspecified.md): The response didn’t specify a response code.
- [INSearchForAccountsIntentResponseCodeReady](insearchforaccountsintentresponsecode/ready.md): You are ready to handle the intent.
- [INSearchForAccountsIntentResponseCodeInProgress](insearchforaccountsintentresponsecode/inprogress.md): The search is still in progress.
- [INSearchForAccountsIntentResponseCodeSuccess](insearchforaccountsintentresponsecode/success.md): You successfully retrieved the search results.
- [INSearchForAccountsIntentResponseCodeFailure](insearchforaccountsintentresponsecode/failure.md): You were unable to retrieve the search results.
- [INSearchForAccountsIntentResponseCodeFailureNotEligible](insearchforaccountsintentresponsecode/failurenoteligible.md): The request failed because a user was not eligible to perform the transaction.
- [INSearchForAccountsIntentResponseCodeFailureRequiringAppLaunch](insearchforaccountsintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to perform the search.
- [INSearchForAccountsIntentResponseCodeFailureCredentialsUnverified](insearchforaccountsintentresponsecode/failurecredentialsunverified.md): You were unable to perform the search because you could not verify the user’s credentials.
- [INSearchForAccountsIntentResponseCodeFailureAccountNotFound](insearchforaccountsintentresponsecode/failureaccountnotfound.md): The search yielded no results.
- [INSearchForAccountsIntentResponseCodeFailureTermsAndConditionsAcceptanceRequired](insearchforaccountsintentresponsecode/failuretermsandconditionsacceptancerequired.md): The search failed as the user must accept the terms and conditions.

## See Also

### Getting the Response Code

- [code](insearchforaccountsintentresponse/code.md): The code indicating whether you successfully handled the intent.
