> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkautomaticreloadpaymentrequest](https://developer.apple.com/documentation/passkit/pkautomaticreloadpaymentrequest)

# PKAutomaticReloadPaymentRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.

## Declaration

```swift
class PKAutomaticReloadPaymentRequest
```

<a id="overview"></a>

## Overview

> **Important**

>  You must set the [automaticReloadPaymentRequest](pkpaymentrequest/automaticreloadpaymentrequest.md) property on a [PKPaymentRequest](pkpaymentrequest.md) object to use the [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md) class and set up an automatic reload payment.

Apple Pay issues an Apple Pay Merchant Token if the user’s payment network supports merchant-specific payment tokens. Otherwise, Apple Pay issues a device token for the payment request.

Use a [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md) object to provide the user with payment details and a way to manage payment methods for an automatic reload payment. You can optionally display a billing agreement and set up merchant token life cycle notifications for the request.

## Topics

### Creating an automatic reload payment request

- [init(paymentDescription:automaticReloadBilling:managementURL:)](pkautomaticreloadpaymentrequest/init%28paymentdescription_automaticreloadbilling_managementurl_%29.md): Create an automatic reload payment object with a description, automatic billing information, and a management URL.

### Describing an automatic reload payment

- [paymentDescription](pkautomaticreloadpaymentrequest/paymentdescription.md): A description that you provide of the automatic reload payment and that Apple Pay displays to the user in the payment sheet.
- [billingAgreement](pkautomaticreloadpaymentrequest/billingagreement.md): A localized billing agreement that the payment sheet displays to the user before the user authorizes the payment.

### Setting the payment summary items

- [automaticReloadBilling](pkautomaticreloadpaymentrequest/automaticreloadbilling.md): Summary items that contain the top-up amount and balance threshold amount for the automatic reload payment.
- [PKAutomaticReloadPaymentSummaryItem](pkautomaticreloadpaymentsummaryitem.md): An object that defines a summary item for an automatic reload or refill payment, such as a store card top-up.

### Managing payment tokens

- [managementURL](pkautomaticreloadpaymentrequest/managementurl.md): A URL to a web page where the user can manage and delete the payment method for the automatic reload payment.
- [tokenNotificationURL](pkautomaticreloadpaymentrequest/tokennotificationurl.md): A URL you provide to receive life-cycle notifications from the Apple Pay servers about the Apple Pay merchant token for the automatic reload payment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Payment requests

- [PKPaymentRequest](pkpaymentrequest.md): An object that represents a request for payment, including details about payment-processing capabilities, the payment amount, and shipping information.
- [PKRecurringPaymentRequest](pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [PKDeferredPaymentRequest](pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.
- [PKPaymentTokenContext](pkpaymenttokencontext.md): A class that defines the context for a single payment token in a payment request for multimerchant payments.

# PKAutomaticReloadPaymentRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.

## Declaration

```objectivec
@interface PKAutomaticReloadPaymentRequest : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  You must set the [automaticReloadPaymentRequest](pkpaymentrequest/automaticreloadpaymentrequest.md) property on a [PKPaymentRequest](pkpaymentrequest.md) object to use the [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md) class and set up an automatic reload payment.

Apple Pay issues an Apple Pay Merchant Token if the user’s payment network supports merchant-specific payment tokens. Otherwise, Apple Pay issues a device token for the payment request.

Use a [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md) object to provide the user with payment details and a way to manage payment methods for an automatic reload payment. You can optionally display a billing agreement and set up merchant token life cycle notifications for the request.

## Topics

### Creating an automatic reload payment request

- [initWithPaymentDescription:automaticReloadBilling:managementURL:](pkautomaticreloadpaymentrequest/init%28paymentdescription_automaticreloadbilling_managementurl_%29.md): Create an automatic reload payment object with a description, automatic billing information, and a management URL.

### Describing an automatic reload payment

- [paymentDescription](pkautomaticreloadpaymentrequest/paymentdescription.md): A description that you provide of the automatic reload payment and that Apple Pay displays to the user in the payment sheet.
- [billingAgreement](pkautomaticreloadpaymentrequest/billingagreement.md): A localized billing agreement that the payment sheet displays to the user before the user authorizes the payment.

### Setting the payment summary items

- [automaticReloadBilling](pkautomaticreloadpaymentrequest/automaticreloadbilling.md): Summary items that contain the top-up amount and balance threshold amount for the automatic reload payment.
- [PKAutomaticReloadPaymentSummaryItem](pkautomaticreloadpaymentsummaryitem.md): An object that defines a summary item for an automatic reload or refill payment, such as a store card top-up.

### Managing payment tokens

- [managementURL](pkautomaticreloadpaymentrequest/managementurl.md): A URL to a web page where the user can manage and delete the payment method for the automatic reload payment.
- [tokenNotificationURL](pkautomaticreloadpaymentrequest/tokennotificationurl.md): A URL you provide to receive life-cycle notifications from the Apple Pay servers about the Apple Pay merchant token for the automatic reload payment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Payment requests

- [PKPaymentRequest](pkpaymentrequest.md): An object that represents a request for payment, including details about payment-processing capabilities, the payment amount, and shipping information.
- [PKRecurringPaymentRequest](pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [PKDeferredPaymentRequest](pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.
- [PKPaymentTokenContext](pkpaymenttokencontext.md): A class that defines the context for a single payment token in a payment request for multimerchant payments.
