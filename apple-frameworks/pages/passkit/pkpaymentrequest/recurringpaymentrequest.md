> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/recurringpaymentrequest](https://developer.apple.com/documentation/passkit/pkpaymentrequest/recurringpaymentrequest)

# recurringPaymentRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An optional request to set up a recurring payment, typically a subscription.

## Declaration

```swift
var recurringPaymentRequest: PKRecurringPaymentRequest? { get set }
```

<a id="Discussion"></a>

## Discussion

Apple Pay issues an Apple Pay Merchant Token if the user’s payment network supports merchant-specific payment tokens. Otherwise, Apple Pay issues a device token for the payment request.

This property is optional. Set this property by assigning it to an instance of [PKRecurringPaymentRequest](../pkrecurringpaymentrequest.md).

> **Important**

>  You can’t use this property with [multiTokenContexts](multitokencontexts.md) or [automaticReloadPaymentRequest](automaticreloadpaymentrequest.md) properties. Simultaneous use of these properties results in a runtime error and cancels the payment request. Simultaneous use of these properties results in a runtime error and cancels the payment request.

## See Also

### Requesting recurring, automatic, and deferred payments

- [PKRecurringPaymentRequest](../pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [automaticReloadPaymentRequest](automaticreloadpaymentrequest.md): An optional request to set up an automatic reload payment, such as a store card top-up.
- [PKAutomaticReloadPaymentRequest](../pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [deferredPaymentRequest](deferredpaymentrequest.md): A request to set up a deferred payment, such as a hotel booking or a pre-order.
- [PKDeferredPaymentRequest](../pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.

# recurringPaymentRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An optional request to set up a recurring payment, typically a subscription.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PKRecurringPaymentRequest * recurringPaymentRequest;
```

<a id="Discussion"></a>

## Discussion

Apple Pay issues an Apple Pay Merchant Token if the user’s payment network supports merchant-specific payment tokens. Otherwise, Apple Pay issues a device token for the payment request.

This property is optional. Set this property by assigning it to an instance of [PKRecurringPaymentRequest](../pkrecurringpaymentrequest.md).

> **Important**

>  You can’t use this property with [multiTokenContexts](multitokencontexts.md) or [automaticReloadPaymentRequest](automaticreloadpaymentrequest.md) properties. Simultaneous use of these properties results in a runtime error and cancels the payment request. Simultaneous use of these properties results in a runtime error and cancels the payment request.

## See Also

### Requesting recurring, automatic, and deferred payments

- [PKRecurringPaymentRequest](../pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [automaticReloadPaymentRequest](automaticreloadpaymentrequest.md): An optional request to set up an automatic reload payment, such as a store card top-up.
- [PKAutomaticReloadPaymentRequest](../pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [deferredPaymentRequest](deferredpaymentrequest.md): A request to set up a deferred payment, such as a hotel booking or a pre-order.
- [PKDeferredPaymentRequest](../pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.
