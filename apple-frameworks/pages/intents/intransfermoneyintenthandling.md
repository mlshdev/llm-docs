> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintenthandling](https://developer.apple.com/documentation/intents/intransfermoneyintenthandling)

# INTransferMoneyIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The handler interface for transferring money between accounts.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INTransferMoneyIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INTransferMoneyIntentHandling](intransfermoneyintenthandling.md) protocol to resolve, confirm, and handle requests to transfer money between accounts. Adopt this protocol in an object of your Intents extension that’s capable of handling the transfer.

Siri delivers an [INTransferMoneyIntent](intransfermoneyintent.md) object to your handler when the user asks to transfer money using your app. The provided intent object contains information about the amount to transfer and the accounts involved. Use the methods of this protocol to resolve the account information and initiate the transaction.

## Topics

### Resolving the Intent Parameters

- [resolveFromAccount(for:with:)](intransfermoneyintenthandling/resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the source of the funds.
- [resolveToAccount(for:with:)](intransfermoneyintenthandling/resolvetoaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the destination of the funds.
- [resolveTransactionAmount(for:with:)](intransfermoneyintenthandling/resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount that the user wants to transfer.
- [resolveTransactionScheduledDate(for:with:)](intransfermoneyintenthandling/resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date on which the transfer is to occur.
- [resolveTransactionNote(for:with:)](intransfermoneyintenthandling/resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.

### Confirming the Response

- [confirm(intent:completion:)](intransfermoneyintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms the transaction details and validates the transaciton.

### Handling the Intent

- [handle(intent:completion:)](intransfermoneyintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles the scheduling of the transfer.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPaymentsDomainHandling](inpaymentsdomainhandling.md)

## See Also

### Money Transfers

- [INTransferMoneyIntent](intransfermoneyintent.md): Deprecated. A request to transfer money between two accounts.
- [INTransferMoneyIntentResponse](intransfermoneyintentresponse.md): Deprecated. Your app’s response to a request to transfer money.

# INTransferMoneyIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The handler interface for transferring money between accounts.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INTransferMoneyIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INTransferMoneyIntentHandling](intransfermoneyintenthandling.md) protocol to resolve, confirm, and handle requests to transfer money between accounts. Adopt this protocol in an object of your Intents extension that’s capable of handling the transfer.

Siri delivers an [INTransferMoneyIntent](intransfermoneyintent.md) object to your handler when the user asks to transfer money using your app. The provided intent object contains information about the amount to transfer and the accounts involved. Use the methods of this protocol to resolve the account information and initiate the transaction.

## Topics

### Resolving the Intent Parameters

- [resolveFromAccountForTransferMoney:withCompletion:](intransfermoneyintenthandling/resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the source of the funds.
- [resolveToAccountForTransferMoney:withCompletion:](intransfermoneyintenthandling/resolvetoaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the destination of the funds.
- [resolveTransactionAmountForTransferMoney:withCompletion:](intransfermoneyintenthandling/resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount that the user wants to transfer.
- [resolveTransactionScheduledDateForTransferMoney:withCompletion:](intransfermoneyintenthandling/resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date on which the transfer is to occur.
- [resolveTransactionNoteForTransferMoney:withCompletion:](intransfermoneyintenthandling/resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.

### Confirming the Response

- [confirmTransferMoney:completion:](intransfermoneyintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms the transaction details and validates the transaciton.

### Handling the Intent

- [handleTransferMoney:completion:](intransfermoneyintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles the scheduling of the transfer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INPaymentsDomainHandling](inpaymentsdomainhandling.md)

## See Also

### Money Transfers

- [INTransferMoneyIntent](intransfermoneyintent.md): Deprecated. A request to transfer money between two accounts.
- [INTransferMoneyIntentResponse](intransfermoneyintentresponse.md): Deprecated. Your app’s response to a request to transfer money.
