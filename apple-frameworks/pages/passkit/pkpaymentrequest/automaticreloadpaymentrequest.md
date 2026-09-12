> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/automaticreloadpaymentrequest](https://developer.apple.com/documentation/passkit/pkpaymentrequest/automaticreloadpaymentrequest)

# automaticReloadPaymentRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An optional request to set up an automatic reload payment, such as a store card top-up.

## Declaration

```swift
var automaticReloadPaymentRequest: PKAutomaticReloadPaymentRequest? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property by assigning it to an instance of [PKAutomaticReloadPaymentRequest](../pkautomaticreloadpaymentrequest.md) to indicate that the payment request is for an automatic reload payment.

Apple Pay issues an Apple Pay Merchant Token if the user’s payment network supports merchant-specific payment tokens. Otherwise, Apple Pay issues a device token for the payment request.

> **Important**

>  You can’t use this property with [multiTokenContexts](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentrequest/multitokencontexts) or [recurringPaymentRequest](recurringpaymentrequest.md) or [deferredPaymentRequest](deferredpaymentrequest.md) properties. Simultaneous use of these properties results in a runtime error and cancels the payment request.

## See Also

### Requesting recurring, automatic, and deferred payments

- [recurringPaymentRequest](recurringpaymentrequest.md): An optional request to set up a recurring payment, typically a subscription.
- [PKRecurringPaymentRequest](../pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [PKAutomaticReloadPaymentRequest](../pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [deferredPaymentRequest](deferredpaymentrequest.md): A request to set up a deferred payment, such as a hotel booking or a pre-order.
- [PKDeferredPaymentRequest](../pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.

# automaticReloadPaymentRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An optional request to set up an automatic reload payment, such as a store card top-up.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PKAutomaticReloadPaymentRequest * automaticReloadPaymentRequest;
```

<a id="Discussion"></a>

## Discussion

Set this property by assigning it to an instance of [PKAutomaticReloadPaymentRequest](../pkautomaticreloadpaymentrequest.md) to indicate that the payment request is for an automatic reload payment.

Apple Pay issues an Apple Pay Merchant Token if the user’s payment network supports merchant-specific payment tokens. Otherwise, Apple Pay issues a device token for the payment request.

> **Important**

>  You can’t use this property with [multiTokenContexts](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentrequest/multitokencontexts) or [recurringPaymentRequest](recurringpaymentrequest.md) or [deferredPaymentRequest](deferredpaymentrequest.md) properties. Simultaneous use of these properties results in a runtime error and cancels the payment request.

## See Also

### Requesting recurring, automatic, and deferred payments

- [recurringPaymentRequest](recurringpaymentrequest.md): An optional request to set up a recurring payment, typically a subscription.
- [PKRecurringPaymentRequest](../pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [PKAutomaticReloadPaymentRequest](../pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [deferredPaymentRequest](deferredpaymentrequest.md): A request to set up a deferred payment, such as a hotel booking or a pre-order.
- [PKDeferredPaymentRequest](../pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.
