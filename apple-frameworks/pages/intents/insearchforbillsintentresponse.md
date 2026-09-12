> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintentresponse](https://developer.apple.com/documentation/intents/insearchforbillsintentresponse)

# INSearchForBillsIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Your app’s response to a request to a search for bills.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSearchForBillsIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSearchForBillsIntentResponse](insearchforbillsintentresponse.md) object to return the list of bills found during a search operation. After performing a search using the criteria specified in an [INSearchForBillsIntent](insearchforbillsintent.md) object, create an instance of this class and fill it with the results of that search. Siri communicates the information from your response to the user at appropriate times.

You create an [INSearchForBillsIntentResponse](insearchforbillsintentresponse.md) object in the [confirm(intent:completion:)](insearchforbillsintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insearchforbillsintenthandling/handle%28intent_completion_%29.md) methods of your search for bills handler object. For more information about implementing your handler object, see [INSearchForBillsIntentHandling](insearchforbillsintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insearchforbillsintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insearchforbillsintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSearchForBillsIntentResponseCode](insearchforbillsintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Accessing the Search Results

- [bills](insearchforbillsintentresponse/bills.md): Deprecated. The bills found during the search.

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

### Bill Search

- [INSearchForBillsIntentHandling](insearchforbillsintenthandling.md): Deprecated. The handler interface for searching for bills associated with the user.
- [INSearchForBillsIntent](insearchforbillsintent.md): Deprecated. A request for the list of bills matching the specified criteria.

# INSearchForBillsIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Your app’s response to a request to a search for bills.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSearchForBillsIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSearchForBillsIntentResponse](insearchforbillsintentresponse.md) object to return the list of bills found during a search operation. After performing a search using the criteria specified in an [INSearchForBillsIntent](insearchforbillsintent.md) object, create an instance of this class and fill it with the results of that search. Siri communicates the information from your response to the user at appropriate times.

You create an [INSearchForBillsIntentResponse](insearchforbillsintentresponse.md) object in the [confirmSearchForBills:completion:](insearchforbillsintenthandling/confirm%28intent_completion_%29.md) and [handleSearchForBills:completion:](insearchforbillsintenthandling/handle%28intent_completion_%29.md) methods of your search for bills handler object. For more information about implementing your handler object, see [INSearchForBillsIntentHandling](insearchforbillsintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insearchforbillsintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insearchforbillsintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INSearchForBillsIntentResponseCode](insearchforbillsintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Accessing the Search Results

- [bills](insearchforbillsintentresponse/bills.md): Deprecated. The bills found during the search.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Bill Search

- [INSearchForBillsIntentHandling](insearchforbillsintenthandling.md): Deprecated. The handler interface for searching for bills associated with the user.
- [INSearchForBillsIntent](insearchforbillsintent.md): Deprecated. A request for the list of bills matching the specified criteria.
