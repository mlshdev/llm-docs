> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintenthandling](https://developer.apple.com/documentation/intents/insearchforbillsintenthandling)

# INSearchForBillsIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The handler interface for searching for bills associated with the user.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INSearchForBillsIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INSearchForBillsIntentHandling](insearchforbillsintenthandling.md) protocol to resolve, confirm, and handle requests to search for bills related to the user. Adopt this protocol in an object of your Intents extension that’s capable of searching the user’s bills and returning those bills that match the specified criteria. Users can search for bills based on the payee, the bill type, the due date, and whether the user has paid them or not.

Siri delivers an [INSearchForBillsIntent](insearchforbillsintent.md) object to your handler when the user asks to search for bills using your app. The provided intent object contains the parameters to use during the search. Use the methods of this protocol to resolve the parameters and perform the search.

## Topics

### Resolving the Intent Parameters

- [resolveBillPayee(for:with:)](insearchforbillsintenthandling/resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the payee to use during your search.
- [resolveBillType(for:with:)](insearchforbillsintenthandling/resolvebilltype%28for_with_%29.md): Deprecated. Resolves the bill type to use during your search.
- [resolveDueDateRange(for:with:)](insearchforbillsintenthandling/resolveduedaterange%28for_with_%29.md): Deprecated. Resolves the due date to use during your search.
- [resolvePaymentDateRange(for:with:)](insearchforbillsintenthandling/resolvepaymentdaterange%28for_with_%29.md): Deprecated. Resolves the payment date to use during your search.
- [resolveStatus(for:with:)](insearchforbillsintenthandling/resolvestatus%28for_with_%29.md): Deprecated. Resolves the bill status to use during your search.

### Confirming the Response

- [confirm(intent:completion:)](insearchforbillsintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can perform the search.

### Handling the Intent

- [handle(intent:completion:)](insearchforbillsintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles searching for the specified bills.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPaymentsDomainHandling](inpaymentsdomainhandling.md)

## See Also

### Bill Search

- [INSearchForBillsIntent](insearchforbillsintent.md): Deprecated. A request for the list of bills matching the specified criteria.
- [INSearchForBillsIntentResponse](insearchforbillsintentresponse.md): Deprecated. Your app’s response to a request to a search for bills.

# INSearchForBillsIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The handler interface for searching for bills associated with the user.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INSearchForBillsIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INSearchForBillsIntentHandling](insearchforbillsintenthandling.md) protocol to resolve, confirm, and handle requests to search for bills related to the user. Adopt this protocol in an object of your Intents extension that’s capable of searching the user’s bills and returning those bills that match the specified criteria. Users can search for bills based on the payee, the bill type, the due date, and whether the user has paid them or not.

Siri delivers an [INSearchForBillsIntent](insearchforbillsintent.md) object to your handler when the user asks to search for bills using your app. The provided intent object contains the parameters to use during the search. Use the methods of this protocol to resolve the parameters and perform the search.

## Topics

### Resolving the Intent Parameters

- [resolveBillPayeeForSearchForBills:withCompletion:](insearchforbillsintenthandling/resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the payee to use during your search.
- [resolveBillTypeForSearchForBills:withCompletion:](insearchforbillsintenthandling/resolvebilltype%28for_with_%29.md): Deprecated. Resolves the bill type to use during your search.
- [resolveDueDateRangeForSearchForBills:withCompletion:](insearchforbillsintenthandling/resolveduedaterange%28for_with_%29.md): Deprecated. Resolves the due date to use during your search.
- [resolvePaymentDateRangeForSearchForBills:withCompletion:](insearchforbillsintenthandling/resolvepaymentdaterange%28for_with_%29.md): Deprecated. Resolves the payment date to use during your search.
- [resolveStatusForSearchForBills:withCompletion:](insearchforbillsintenthandling/resolvestatus%28for_with_%29.md): Deprecated. Resolves the bill status to use during your search.

### Confirming the Response

- [confirmSearchForBills:completion:](insearchforbillsintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can perform the search.

### Handling the Intent

- [handleSearchForBills:completion:](insearchforbillsintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles searching for the specified bills.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPaymentsDomainHandling](inpaymentsdomainhandling.md)

## See Also

### Bill Search

- [INSearchForBillsIntent](insearchforbillsintent.md): Deprecated. A request for the list of bills matching the specified criteria.
- [INSearchForBillsIntentResponse](insearchforbillsintentresponse.md): Deprecated. Your app’s response to a request to a search for bills.
