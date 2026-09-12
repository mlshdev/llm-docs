> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/deferredpaymentrequest](https://developer.apple.com/documentation/passkit/pkpaymentrequest/deferredpaymentrequest)

# deferredPaymentRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

A request to set up a deferred payment, such as a hotel booking or a pre-order.

## Declaration

```swift
var deferredPaymentRequest: PKDeferredPaymentRequest? { get set }
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  watchOS doesn’t support merchant-specific payment tokens.

This payment request receives a merchant-specific payment token if the payment network supports merchant-specific payment tokens.

> **Important**

>  You can’t use this property simultaneously with multitoken contexts, recurring payment requests, or automatic reload payment requests. Simultaneous use of these properties results in a runtime error and cancels the payment request.

## See Also

### Requesting recurring, automatic, and deferred payments

- [recurringPaymentRequest](recurringpaymentrequest.md): An optional request to set up a recurring payment, typically a subscription.
- [PKRecurringPaymentRequest](../pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [automaticReloadPaymentRequest](automaticreloadpaymentrequest.md): An optional request to set up an automatic reload payment, such as a store card top-up.
- [PKAutomaticReloadPaymentRequest](../pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [PKDeferredPaymentRequest](../pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.

# deferredPaymentRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

A request to set up a deferred payment, such as a hotel booking or a pre-order.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PKDeferredPaymentRequest * deferredPaymentRequest;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  watchOS doesn’t support merchant-specific payment tokens.

This payment request receives a merchant-specific payment token if the payment network supports merchant-specific payment tokens.

> **Important**

>  You can’t use this property simultaneously with multitoken contexts, recurring payment requests, or automatic reload payment requests. Simultaneous use of these properties results in a runtime error and cancels the payment request.

## See Also

### Requesting recurring, automatic, and deferred payments

- [recurringPaymentRequest](recurringpaymentrequest.md): An optional request to set up a recurring payment, typically a subscription.
- [PKRecurringPaymentRequest](../pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [automaticReloadPaymentRequest](automaticreloadpaymentrequest.md): An optional request to set up an automatic reload payment, such as a store card top-up.
- [PKAutomaticReloadPaymentRequest](../pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [PKDeferredPaymentRequest](../pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.
