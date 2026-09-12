> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintentresponse](https://developer.apple.com/documentation/intents/inpaybillintentresponse)

# INPayBillIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Your app’s response to a request to pay a bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INPayBillIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INPayBillIntentResponse](inpaybillintentresponse.md) object to specify the details of the bill payment operation that you perform. After creating the object, fill in the details of the transaction, including the amount to transfer, the user account involved, the payee, and the date for the transaction to occur. Siri communicates the bill details back to the user at appropriate times.

You create an [INPayBillIntentResponse](inpaybillintentresponse.md) object in the [confirm(intent:completion:)](inpaybillintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](inpaybillintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INPayBillIntentHandling](inpaybillintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](inpaybillintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](inpaybillintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INPayBillIntentResponseCode](inpaybillintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Providing the Account Information

- [fromAccount](inpaybillintentresponse/fromaccount.md): Deprecated. The user account providing the funds.

### Providing the Transaction Details

- [billDetails](inpaybillintentresponse/billdetails.md): Deprecated. The details of the bill to pay.
- [transactionAmount](inpaybillintentresponse/transactionamount.md): Deprecated. The amount of money to transfer to the payee.
- [transactionScheduledDate](inpaybillintentresponse/transactionscheduleddate.md): Deprecated. The date on which the transaction is to occur.
- [transactionNote](inpaybillintentresponse/transactionnote.md): Deprecated. Notes to include with the transaction.

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

### Bill Payment

- [INPayBillIntentHandling](inpaybillintenthandling.md): Deprecated. The handler interface for paying a bill using money from the user’s account.
- [INPayBillIntent](inpaybillintent.md): Deprecated. A request to transfer money to facilitate payment of a bill.

# INPayBillIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Your app’s response to a request to pay a bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INPayBillIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INPayBillIntentResponse](inpaybillintentresponse.md) object to specify the details of the bill payment operation that you perform. After creating the object, fill in the details of the transaction, including the amount to transfer, the user account involved, the payee, and the date for the transaction to occur. Siri communicates the bill details back to the user at appropriate times.

You create an [INPayBillIntentResponse](inpaybillintentresponse.md) object in the [confirmPayBill:completion:](inpaybillintenthandling/confirm%28intent_completion_%29.md) and [handlePayBill:completion:](inpaybillintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INPayBillIntentHandling](inpaybillintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](inpaybillintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](inpaybillintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INPayBillIntentResponseCode](inpaybillintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Providing the Account Information

- [fromAccount](inpaybillintentresponse/fromaccount.md): Deprecated. The user account providing the funds.

### Providing the Transaction Details

- [billDetails](inpaybillintentresponse/billdetails.md): Deprecated. The details of the bill to pay.
- [transactionAmount](inpaybillintentresponse/transactionamount.md): Deprecated. The amount of money to transfer to the payee.
- [transactionScheduledDate](inpaybillintentresponse/transactionscheduleddate.md): Deprecated. The date on which the transaction is to occur.
- [transactionNote](inpaybillintentresponse/transactionnote.md): Deprecated. Notes to include with the transaction.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Bill Payment

- [INPayBillIntentHandling](inpaybillintenthandling.md): Deprecated. The handler interface for paying a bill using money from the user’s account.
- [INPayBillIntent](inpaybillintent.md): Deprecated. A request to transfer money to facilitate payment of a bill.
