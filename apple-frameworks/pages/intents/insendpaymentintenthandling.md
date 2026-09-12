> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentintenthandling](https://developer.apple.com/documentation/intents/insendpaymentintenthandling)

# INSendPaymentIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for transferring money from the current user’s account to a different user’s account.

## Declaration

```swift
protocol INSendPaymentIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INSendPaymentIntentHandling](insendpaymentintenthandling.md) protocol to resolve, confirm, and handle requests to send money to another user of your app. Adopt this protocol in an object of your Intents extension that is capable of performing the financial transaction.

Siri delivers an [INSendPaymentIntent](insendpaymentintent.md) object to your handler when the user asks to send a payment using your app. The provided intent object contains the details of the payment, including the recipient, the amount to transfer, and any memos associated with the payment. Use the methods of this protocol to resolve the payment parameters and to validate that the payment is possible.

## Topics

### Resolving the Intent Parameters

- [resolvePayee(for:with:)](insendpaymentintenthandling/resolvepayee%28for_with_%29-3otmy.md): Resolves the recipient for a payment.
- [resolveCurrencyAmount(for:with:)](insendpaymentintenthandling/resolvecurrencyamount%28for_with_%29-75c7o.md): Resolves the amount of currency to transfer.
- [resolveNote(for:with:)](insendpaymentintenthandling/resolvenote%28for_with_%29.md): Resolves the notes associated with the transaction.
- [resolvePayee(for:with:)](insendpaymentintenthandling/resolvepayee%28for_with_%29-1kh1g.md): Deprecated. Called when you need to resolve the recipient of the funds.
- [resolveCurrencyAmount(for:with:)](insendpaymentintenthandling/resolvecurrencyamount%28for_with_%29-9vd94.md): Deprecated. Called when you need to resolve the currency amount to be transferred.

### Confirming the Response

- [confirm(intent:completion:)](insendpaymentintenthandling/confirm%28intent_completion_%29.md): Confirms the transaction and details.

### Handling the Intent

- [handle(intent:completion:)](insendpaymentintenthandling/handle%28intent_completion_%29.md): Handles transferring the money between accounts.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPaymentsDomainHandling](inpaymentsdomainhandling.md)

## See Also

### Send a Payment

- [INSendPaymentIntent](insendpaymentintent.md): A request to transfer money from the current user’s account to a different user’s account.
- [INSendPaymentIntentResponse](insendpaymentintentresponse.md): Your app’s response to a send payment intent.

# INSendPaymentIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for transferring money from the current user’s account to a different user’s account.

## Declaration

```objectivec
@protocol INSendPaymentIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INSendPaymentIntentHandling](insendpaymentintenthandling.md) protocol to resolve, confirm, and handle requests to send money to another user of your app. Adopt this protocol in an object of your Intents extension that is capable of performing the financial transaction.

Siri delivers an [INSendPaymentIntent](insendpaymentintent.md) object to your handler when the user asks to send a payment using your app. The provided intent object contains the details of the payment, including the recipient, the amount to transfer, and any memos associated with the payment. Use the methods of this protocol to resolve the payment parameters and to validate that the payment is possible.

## Topics

### Resolving the Intent Parameters

- [resolvePayeeForSendPayment:completion:](insendpaymentintenthandling/resolvepayee%28for_with_%29-3otmy.md): Resolves the recipient for a payment.
- [resolveCurrencyAmountForSendPayment:completion:](insendpaymentintenthandling/resolvecurrencyamount%28for_with_%29-75c7o.md): Resolves the amount of currency to transfer.
- [resolveNoteForSendPayment:withCompletion:](insendpaymentintenthandling/resolvenote%28for_with_%29.md): Resolves the notes associated with the transaction.
- [resolvePayeeForSendPayment:withCompletion:](insendpaymentintenthandling/resolvepayee%28for_with_%29-1kh1g.md): Deprecated. Called when you need to resolve the recipient of the funds.
- [resolveCurrencyAmountForSendPayment:withCompletion:](insendpaymentintenthandling/resolvecurrencyamount%28for_with_%29-9vd94.md): Deprecated. Called when you need to resolve the currency amount to be transferred.

### Confirming the Response

- [confirmSendPayment:completion:](insendpaymentintenthandling/confirm%28intent_completion_%29.md): Confirms the transaction and details.

### Handling the Intent

- [handleSendPayment:completion:](insendpaymentintenthandling/handle%28intent_completion_%29.md): Handles transferring the money between accounts.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPaymentsDomainHandling](inpaymentsdomainhandling.md)

## See Also

### Send a Payment

- [INSendPaymentIntent](insendpaymentintent.md): A request to transfer money from the current user’s account to a different user’s account.
- [INSendPaymentIntentResponse](insendpaymentintentresponse.md): Your app’s response to a send payment intent.
