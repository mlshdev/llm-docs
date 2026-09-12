> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdeferredpaymentrequest](https://developer.apple.com/documentation/passkit/pkdeferredpaymentrequest)

# PKDeferredPaymentRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.

## Declaration

```swift
class PKDeferredPaymentRequest
```

<a id="overview"></a>

## Overview

This request receives a merchant-specific payment token, if the payment network supports merchant-specific payment tokens.

> **Important**

>  You must set the [deferredPaymentRequest](pkpaymentrequest/deferredpaymentrequest.md) property on a [PKPaymentRequest](pkpaymentrequest.md) object to use the `PKDeferredPaymentRequest` class and set up a deferred payment.

Use a `PKDeferredPaymentRequest` object to provide the user with payment details and a way to manage payment methods for a deferred payment. You can optionally display a billing agreement and set up merchant token life cycle notifications for the request.

For more information about the merchant token life cycle notifications, see [Apple Pay Merchant Token Management API](https://developer.apple.com/documentation/merchanttokennotificationservices).

## Topics

### Creating a deferred payment request

- [init(paymentDescription:deferredBilling:managementURL:)](pkdeferredpaymentrequest/init%28paymentdescription_deferredbilling_managementurl_%29.md): Creates a deferred payment request with the payment description, deferred billing summary, and management URL you provide.

### Describing a deferred payment

- [freeCancellationDate](pkdeferredpaymentrequest/freecancellationdate.md): The date before which you must cancel a deferred payment without incurring any cancellation charges.
- [billingAgreement](pkdeferredpaymentrequest/billingagreement.md): The localized billing agreement the framework displays to the user prior to payment authorization.
- [paymentDescription](pkdeferredpaymentrequest/paymentdescription.md): A description of the deferred payment.
- [freeCancellationDateTimeZone](pkdeferredpaymentrequest/freecancellationdatetimezone.md): The time zone at the destination location of the payment.

### Setting payment summary items

- [deferredBilling](pkdeferredpaymentrequest/deferredbilling.md): An object that contains details about the deferred payment.
- [PKDeferredPaymentSummaryItem](pkdeferredpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs at a later date, such as a pre-order.

### Managing payment tokens

- [managementURL](pkdeferredpaymentrequest/managementurl.md): A URL that links to a page on your web site where the user can manage the payment method for the deferred payment, including deleting it.
- [tokenNotificationURL](pkdeferredpaymentrequest/tokennotificationurl.md): A URL to receive life-cycle notifications for the merchant-specific payment token the system issues for the request, if applicable.

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
- [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [PKPaymentTokenContext](pkpaymenttokencontext.md): A class that defines the context for a single payment token in a payment request for multimerchant payments.

# PKDeferredPaymentRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.

## Declaration

```objectivec
@interface PKDeferredPaymentRequest : NSObject
```

<a id="overview"></a>

## Overview

This request receives a merchant-specific payment token, if the payment network supports merchant-specific payment tokens.

> **Important**

>  You must set the [deferredPaymentRequest](pkpaymentrequest/deferredpaymentrequest.md) property on a [PKPaymentRequest](pkpaymentrequest.md) object to use the `PKDeferredPaymentRequest` class and set up a deferred payment.

Use a `PKDeferredPaymentRequest` object to provide the user with payment details and a way to manage payment methods for a deferred payment. You can optionally display a billing agreement and set up merchant token life cycle notifications for the request.

For more information about the merchant token life cycle notifications, see [Apple Pay Merchant Token Management API](https://developer.apple.com/documentation/merchanttokennotificationservices).

## Topics

### Creating a deferred payment request

- [initWithPaymentDescription:deferredBilling:managementURL:](pkdeferredpaymentrequest/init%28paymentdescription_deferredbilling_managementurl_%29.md): Creates a deferred payment request with the payment description, deferred billing summary, and management URL you provide.

### Describing a deferred payment

- [freeCancellationDate](pkdeferredpaymentrequest/freecancellationdate.md): The date before which you must cancel a deferred payment without incurring any cancellation charges.
- [billingAgreement](pkdeferredpaymentrequest/billingagreement.md): The localized billing agreement the framework displays to the user prior to payment authorization.
- [paymentDescription](pkdeferredpaymentrequest/paymentdescription.md): A description of the deferred payment.
- [freeCancellationDateTimeZone](pkdeferredpaymentrequest/freecancellationdatetimezone.md): The time zone at the destination location of the payment.

### Setting payment summary items

- [deferredBilling](pkdeferredpaymentrequest/deferredbilling.md): An object that contains details about the deferred payment.
- [PKDeferredPaymentSummaryItem](pkdeferredpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs at a later date, such as a pre-order.

### Managing payment tokens

- [managementURL](pkdeferredpaymentrequest/managementurl.md): A URL that links to a page on your web site where the user can manage the payment method for the deferred payment, including deleting it.
- [tokenNotificationURL](pkdeferredpaymentrequest/tokennotificationurl.md): A URL to receive life-cycle notifications for the merchant-specific payment token the system issues for the request, if applicable.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Payment requests

- [PKPaymentRequest](pkpaymentrequest.md): An object that represents a request for payment, including details about payment-processing capabilities, the payment amount, and shipping information.
- [PKRecurringPaymentRequest](pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [PKPaymentTokenContext](pkpaymenttokencontext.md): A class that defines the context for a single payment token in a payment request for multimerchant payments.
