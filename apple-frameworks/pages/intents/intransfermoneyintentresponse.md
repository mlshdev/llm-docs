> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintentresponse](https://developer.apple.com/documentation/intents/intransfermoneyintentresponse)

# INTransferMoneyIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Your app’s response to a request to transfer money.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INTransferMoneyIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INTransferMoneyIntentResponse](intransfermoneyintentresponse.md) object to specify the details of the transfer operation that you perform. After creating the object, fill in the details of the transaction, including the amount to transfer, the accounts involved, and the date to make the transaction. Siri communicates the details back to the user at appropriate times.

You create an [INTransferMoneyIntentResponse](intransfermoneyintentresponse.md) object in the [confirm(intent:completion:)](intransfermoneyintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](intransfermoneyintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INPayBillIntentHandling](inpaybillintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](intransfermoneyintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](intransfermoneyintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INTransferMoneyIntentResponseCode](intransfermoneyintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Providing the Account Information

- [fromAccount](intransfermoneyintentresponse/fromaccount.md): Deprecated. The user account providing the funds.
- [toAccount](intransfermoneyintentresponse/toaccount.md): Deprecated. The user account receiving the funds.

### Providing the Transaction Details

- [transactionAmount](intransfermoneyintentresponse/transactionamount.md): Deprecated. The amount of money to transfer between accounts.
- [transactionScheduledDate](intransfermoneyintentresponse/transactionscheduleddate.md): Deprecated. The date on which the transfer is to occur.
- [transactionNote](intransfermoneyintentresponse/transactionnote.md): Deprecated. Notes to include with the transaction.
- [transferFee](intransfermoneyintentresponse/transferfee.md): Deprecated. The fee charged for performing the transaction.

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

### Money Transfers

- [INTransferMoneyIntentHandling](intransfermoneyintenthandling.md): Deprecated. The handler interface for transferring money between accounts.
- [INTransferMoneyIntent](intransfermoneyintent.md): Deprecated. A request to transfer money between two accounts.

# INTransferMoneyIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Your app’s response to a request to transfer money.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INTransferMoneyIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INTransferMoneyIntentResponse](intransfermoneyintentresponse.md) object to specify the details of the transfer operation that you perform. After creating the object, fill in the details of the transaction, including the amount to transfer, the accounts involved, and the date to make the transaction. Siri communicates the details back to the user at appropriate times.

You create an [INTransferMoneyIntentResponse](intransfermoneyintentresponse.md) object in the [confirmTransferMoney:completion:](intransfermoneyintenthandling/confirm%28intent_completion_%29.md) and [handleTransferMoney:completion:](intransfermoneyintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INPayBillIntentHandling](inpaybillintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](intransfermoneyintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](intransfermoneyintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INTransferMoneyIntentResponseCode](intransfermoneyintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Providing the Account Information

- [fromAccount](intransfermoneyintentresponse/fromaccount.md): Deprecated. The user account providing the funds.
- [toAccount](intransfermoneyintentresponse/toaccount.md): Deprecated. The user account receiving the funds.

### Providing the Transaction Details

- [transactionAmount](intransfermoneyintentresponse/transactionamount.md): Deprecated. The amount of money to transfer between accounts.
- [transactionScheduledDate](intransfermoneyintentresponse/transactionscheduleddate.md): Deprecated. The date on which the transfer is to occur.
- [transactionNote](intransfermoneyintentresponse/transactionnote.md): Deprecated. Notes to include with the transaction.
- [transferFee](intransfermoneyintentresponse/transferfee.md): Deprecated. The fee charged for performing the transaction.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Money Transfers

- [INTransferMoneyIntentHandling](intransfermoneyintenthandling.md): Deprecated. The handler interface for transferring money between accounts.
- [INTransferMoneyIntent](intransfermoneyintent.md): Deprecated. A request to transfer money between two accounts.
