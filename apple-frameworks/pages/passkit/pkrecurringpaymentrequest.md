> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkrecurringpaymentrequest](https://developer.apple.com/documentation/passkit/pkrecurringpaymentrequest)

# PKRecurringPaymentRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A class that represents a request to set up a recurring payment, typically a subscription.

## Declaration

```swift
class PKRecurringPaymentRequest
```

<a id="overview"></a>

## Overview

> **Important**

>  You must set the [recurringPaymentRequest](pkpaymentrequest/recurringpaymentrequest.md) property on a [PKPaymentRequest](pkpaymentrequest.md) object to use this class to request a recurring payment.

Use a [PKRecurringPaymentRequest](pkrecurringpaymentrequest.md) object to provide the user with payment details and a way to manage payment methods for a recurring payment. You can optionally display a billing agreement and set up merchant token life cycle notifications for the request.

For more information about the merchant token life cycle notifications, see Apple Pay Merchant Token Management API.

## Topics

### Creating a recurring payment request

- [init(paymentDescription:regularBilling:managementURL:)](pkrecurringpaymentrequest/init%28paymentdescription_regularbilling_managementurl_%29.md): Create a recurring payment object with a description, regular billing information, and a management URL.

### Describing a recurring payment

- [paymentDescription](pkrecurringpaymentrequest/paymentdescription.md): A description that you provide of the recurring payment and that Apple Pay displays to the user in the payment sheet.
- [billingAgreement](pkrecurringpaymentrequest/billingagreement.md): A localized billing agreement that the payment sheet displays to the user before the user authorizes the payment.

### Setting payment summary items

- [regularBilling](pkrecurringpaymentrequest/regularbilling.md): The regular billing cycle for the recurring payment, including start and end dates, an interval, and an interval count.
- [trialBilling](pkrecurringpaymentrequest/trialbilling.md): The trial billing cycle for the recurring payment.
- [PKRecurringPaymentSummaryItem](pkrecurringpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs repeatedly at a specified interval, such as a subscription.

### Managing payment tokens

- [tokenNotificationURL](pkrecurringpaymentrequest/tokennotificationurl.md): A URL you provide to receive life-cycle notifications from the Apple Pay servers about the Apple Pay merchant token for the recurring payment.
- [managementURL](pkrecurringpaymentrequest/managementurl.md): A URL to a web page where the user can update or delete the payment method for the recurring payment.

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
- [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [PKDeferredPaymentRequest](pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.
- [PKPaymentTokenContext](pkpaymenttokencontext.md): A class that defines the context for a single payment token in a payment request for multimerchant payments.

# PKRecurringPaymentRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A class that represents a request to set up a recurring payment, typically a subscription.

## Declaration

```objectivec
@interface PKRecurringPaymentRequest : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  You must set the [recurringPaymentRequest](pkpaymentrequest/recurringpaymentrequest.md) property on a [PKPaymentRequest](pkpaymentrequest.md) object to use this class to request a recurring payment.

Use a [PKRecurringPaymentRequest](pkrecurringpaymentrequest.md) object to provide the user with payment details and a way to manage payment methods for a recurring payment. You can optionally display a billing agreement and set up merchant token life cycle notifications for the request.

For more information about the merchant token life cycle notifications, see Apple Pay Merchant Token Management API.

## Topics

### Creating a recurring payment request

- [initWithPaymentDescription:regularBilling:managementURL:](pkrecurringpaymentrequest/init%28paymentdescription_regularbilling_managementurl_%29.md): Create a recurring payment object with a description, regular billing information, and a management URL.

### Describing a recurring payment

- [paymentDescription](pkrecurringpaymentrequest/paymentdescription.md): A description that you provide of the recurring payment and that Apple Pay displays to the user in the payment sheet.
- [billingAgreement](pkrecurringpaymentrequest/billingagreement.md): A localized billing agreement that the payment sheet displays to the user before the user authorizes the payment.

### Setting payment summary items

- [regularBilling](pkrecurringpaymentrequest/regularbilling.md): The regular billing cycle for the recurring payment, including start and end dates, an interval, and an interval count.
- [trialBilling](pkrecurringpaymentrequest/trialbilling.md): The trial billing cycle for the recurring payment.
- [PKRecurringPaymentSummaryItem](pkrecurringpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs repeatedly at a specified interval, such as a subscription.

### Managing payment tokens

- [tokenNotificationURL](pkrecurringpaymentrequest/tokennotificationurl.md): A URL you provide to receive life-cycle notifications from the Apple Pay servers about the Apple Pay merchant token for the recurring payment.
- [managementURL](pkrecurringpaymentrequest/managementurl.md): A URL to a web page where the user can update or delete the payment method for the recurring payment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Payment requests

- [PKPaymentRequest](pkpaymentrequest.md): An object that represents a request for payment, including details about payment-processing capabilities, the payment amount, and shipping information.
- [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [PKDeferredPaymentRequest](pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.
- [PKPaymentTokenContext](pkpaymenttokencontext.md): A class that defines the context for a single payment token in a payment request for multimerchant payments.
