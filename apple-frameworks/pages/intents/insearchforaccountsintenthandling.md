> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforaccountsintenthandling](https://developer.apple.com/documentation/intents/insearchforaccountsintenthandling)

# INSearchForAccountsIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The handler interface for searching for account information.

## Declaration

```swift
protocol INSearchForAccountsIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INSearchForAccountsIntentHandling](insearchforaccountsintenthandling.md) protocol to resolve, confirm, and handle requests to search for the user’s account information. Adopt this protocol in an object of your Intents extension that is capable of searching for accounts and returning account details such as the current balance.

Siri delivers an [INSearchForAccountsIntent](insearchforaccountsintent.md) object to your handler when the user asks to search for accounts using your app. The provided intent object contains the parameters to use during the search. Use the methods of this protocol to resolve the parameters and perform the search.

## Topics

### Resolving the Intent Parameters

- [resolveAccountNickname(for:with:)](insearchforaccountsintenthandling/resolveaccountnickname%28for_with_%29.md): Resolves the account nickname to use during a search.
- [resolveAccountType(for:with:)](insearchforaccountsintenthandling/resolveaccounttype%28for_with_%29.md): Resolves the account type to look for in a search.
- [resolveOrganizationName(for:with:)](insearchforaccountsintenthandling/resolveorganizationname%28for_with_%29.md): Resolves the organization name to use during a search.
- [resolveRequestedBalanceType(for:with:)](insearchforaccountsintenthandling/resolverequestedbalancetype%28for_with_%29.md): Resolves the balance type to look for in a search.

### Confirming the Response

- [confirm(intent:completion:)](insearchforaccountsintenthandling/confirm%28intent_completion_%29.md): Confirms whether you can perform the search.

### Handling the Intent

- [handle(intent:completion:)](insearchforaccountsintenthandling/handle%28intent_completion_%29.md): Handles searching for the account information.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPaymentsDomainHandling](inpaymentsdomainhandling.md)

## See Also

### Search for Accounts

- [INSearchForAccountsIntent](insearchforaccountsintent.md): A user request for information about their accounts in your app.
- [INSearchForAccountsIntentResponse](insearchforaccountsintentresponse.md): Your app’s response to a request to search for account information.

# INSearchForAccountsIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The handler interface for searching for account information.

## Declaration

```objectivec
@protocol INSearchForAccountsIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INSearchForAccountsIntentHandling](insearchforaccountsintenthandling.md) protocol to resolve, confirm, and handle requests to search for the user’s account information. Adopt this protocol in an object of your Intents extension that is capable of searching for accounts and returning account details such as the current balance.

Siri delivers an [INSearchForAccountsIntent](insearchforaccountsintent.md) object to your handler when the user asks to search for accounts using your app. The provided intent object contains the parameters to use during the search. Use the methods of this protocol to resolve the parameters and perform the search.

## Topics

### Resolving the Intent Parameters

- [resolveAccountNicknameForSearchForAccounts:withCompletion:](insearchforaccountsintenthandling/resolveaccountnickname%28for_with_%29.md): Resolves the account nickname to use during a search.
- [resolveAccountTypeForSearchForAccounts:withCompletion:](insearchforaccountsintenthandling/resolveaccounttype%28for_with_%29.md): Resolves the account type to look for in a search.
- [resolveOrganizationNameForSearchForAccounts:withCompletion:](insearchforaccountsintenthandling/resolveorganizationname%28for_with_%29.md): Resolves the organization name to use during a search.
- [resolveRequestedBalanceTypeForSearchForAccounts:withCompletion:](insearchforaccountsintenthandling/resolverequestedbalancetype%28for_with_%29.md): Resolves the balance type to look for in a search.

### Confirming the Response

- [confirmSearchForAccounts:completion:](insearchforaccountsintenthandling/confirm%28intent_completion_%29.md): Confirms whether you can perform the search.

### Handling the Intent

- [handleSearchForAccounts:completion:](insearchforaccountsintenthandling/handle%28intent_completion_%29.md): Handles searching for the account information.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPaymentsDomainHandling](inpaymentsdomainhandling.md)

## See Also

### Search for Accounts

- [INSearchForAccountsIntent](insearchforaccountsintent.md): A user request for information about their accounts in your app.
- [INSearchForAccountsIntentResponse](insearchforaccountsintentresponse.md): Your app’s response to a request to search for account information.
