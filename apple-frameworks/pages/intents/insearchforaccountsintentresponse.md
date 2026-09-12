> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforaccountsintentresponse](https://developer.apple.com/documentation/intents/insearchforaccountsintentresponse)

# INSearchForAccountsIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Your app’s response to a request to search for account information.

## Declaration

```swift
class INSearchForAccountsIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSearchForAccountsIntentResponse](insearchforaccountsintentresponse.md) object to return the account information found during a search operation. After performing a search using the criteria specified in an [INSearchForAccountsIntent](insearchforaccountsintent.md) object, create an instance of this class and fill it with the results of that search. Siri communicates the information from your response to the user at appropriate times.

You create an [INSearchForAccountsIntentResponse](insearchforaccountsintentresponse.md) object in the [confirm(intent:completion:)](insearchforaccountsintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insearchforaccountsintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INSearchForAccountsIntentHandling](insearchforaccountsintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insearchforaccountsintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insearchforaccountsintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INSearchForAccountsIntentResponseCode](insearchforaccountsintentresponsecode.md): Constants indicating the state of the response.

### Providing the Search Results

- [accounts](insearchforaccountsintentresponse/accounts.md): The accounts found during the search.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Search for Accounts

- [INSearchForAccountsIntentHandling](insearchforaccountsintenthandling.md): The handler interface for searching for account information.
- [INSearchForAccountsIntent](insearchforaccountsintent.md): A user request for information about their accounts in your app.

# INSearchForAccountsIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Your app’s response to a request to search for account information.

## Declaration

```objectivec
@interface INSearchForAccountsIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSearchForAccountsIntentResponse](insearchforaccountsintentresponse.md) object to return the account information found during a search operation. After performing a search using the criteria specified in an [INSearchForAccountsIntent](insearchforaccountsintent.md) object, create an instance of this class and fill it with the results of that search. Siri communicates the information from your response to the user at appropriate times.

You create an [INSearchForAccountsIntentResponse](insearchforaccountsintentresponse.md) object in the [confirmSearchForAccounts:completion:](insearchforaccountsintenthandling/confirm%28intent_completion_%29.md) and [handleSearchForAccounts:completion:](insearchforaccountsintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INSearchForAccountsIntentHandling](insearchforaccountsintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insearchforaccountsintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insearchforaccountsintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INSearchForAccountsIntentResponseCode](insearchforaccountsintentresponsecode.md): Constants indicating the state of the response.

### Providing the Search Results

- [accounts](insearchforaccountsintentresponse/accounts.md): The accounts found during the search.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Search for Accounts

- [INSearchForAccountsIntentHandling](insearchforaccountsintenthandling.md): The handler interface for searching for account information.
- [INSearchForAccountsIntent](insearchforaccountsintent.md): A user request for information about their accounts in your app.
