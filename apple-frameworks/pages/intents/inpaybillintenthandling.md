> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintenthandling](https://developer.apple.com/documentation/intents/inpaybillintenthandling)

# INPayBillIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The handler interface for paying a bill using money from the user’s account.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INPayBillIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INPayBillIntentHandling](inpaybillintenthandling.md) protocol to resolve, confirm, and handle requests to pay bills. Adopt this protocol in an object of your Intents extension that’s capable of initiating the bill-payment process.

Siri delivers an [INPayBillIntent](inpaybillintent.md) object to your handler when the user asks to pay a bill using your app. The provided intent object contains information about the bill, including the amount to pay and the organization to receive the money. Use the methods of this protocol to resolve the organization and payment details and initiate the transaction.

## Topics

### Resolving the Intent Parameters

- [resolveBillPayee(for:with:)](inpaybillintenthandling/resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the entity that originated the bill.
- [resolveBillType(for:with:)](inpaybillintenthandling/resolvebilltype%28for_with_%29.md): Deprecated. Resolves the type of the bill.
- [resolveFromAccount(for:with:)](inpaybillintenthandling/resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that provides the funds for paying the bill.
- [resolveTransactionAmount(for:with:)](inpaybillintenthandling/resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount to pay toward the bill.
- [resolveDueDate(for:with:)](inpaybillintenthandling/resolveduedate%28for_with_%29.md): Deprecated. Resolves the due date of the bill.
- [resolveTransactionScheduledDate(for:with:)](inpaybillintenthandling/resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date for the payment to occur.
- [resolveTransactionNote(for:with:)](inpaybillintenthandling/resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.

### Confirming the Response

- [confirm(intent:completion:)](inpaybillintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms the transaction details.

### Handling the Intent

- [handle(intent:completion:)](inpaybillintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles scheduling payment of the bill.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPaymentsDomainHandling](inpaymentsdomainhandling.md)

## See Also

### Bill Payment

- [INPayBillIntent](inpaybillintent.md): Deprecated. A request to transfer money to facilitate payment of a bill.
- [INPayBillIntentResponse](inpaybillintentresponse.md): Deprecated. Your app’s response to a request to pay a bill.

# INPayBillIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The handler interface for paying a bill using money from the user’s account.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INPayBillIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INPayBillIntentHandling](inpaybillintenthandling.md) protocol to resolve, confirm, and handle requests to pay bills. Adopt this protocol in an object of your Intents extension that’s capable of initiating the bill-payment process.

Siri delivers an [INPayBillIntent](inpaybillintent.md) object to your handler when the user asks to pay a bill using your app. The provided intent object contains information about the bill, including the amount to pay and the organization to receive the money. Use the methods of this protocol to resolve the organization and payment details and initiate the transaction.

## Topics

### Resolving the Intent Parameters

- [resolveBillPayeeForPayBill:withCompletion:](inpaybillintenthandling/resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the entity that originated the bill.
- [resolveBillTypeForPayBill:withCompletion:](inpaybillintenthandling/resolvebilltype%28for_with_%29.md): Deprecated. Resolves the type of the bill.
- [resolveFromAccountForPayBill:withCompletion:](inpaybillintenthandling/resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that provides the funds for paying the bill.
- [resolveTransactionAmountForPayBill:withCompletion:](inpaybillintenthandling/resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount to pay toward the bill.
- [resolveDueDateForPayBill:withCompletion:](inpaybillintenthandling/resolveduedate%28for_with_%29.md): Deprecated. Resolves the due date of the bill.
- [resolveTransactionScheduledDateForPayBill:withCompletion:](inpaybillintenthandling/resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date for the payment to occur.
- [resolveTransactionNoteForPayBill:withCompletion:](inpaybillintenthandling/resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.

### Confirming the Response

- [confirmPayBill:completion:](inpaybillintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms the transaction details.

### Handling the Intent

- [handlePayBill:completion:](inpaybillintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles scheduling payment of the bill.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPaymentsDomainHandling](inpaymentsdomainhandling.md)

## See Also

### Bill Payment

- [INPayBillIntent](inpaybillintent.md): Deprecated. A request to transfer money to facilitate payment of a bill.
- [INPayBillIntentResponse](inpaybillintentresponse.md): Deprecated. Your app’s response to a request to pay a bill.
