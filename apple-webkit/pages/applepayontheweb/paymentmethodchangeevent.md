> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/paymentmethodchangeevent](https://developer.apple.com/documentation/applepayontheweb/paymentmethodchangeevent)

# PaymentMethodChangeEvent

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Class  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The Apple Pay extensions to the Payment Request payment change event.

## Declaration

```
interface PaymentMethodChangeEvent
```

## Mentioned In

- [Setting up the payment request API to accept Apple Pay](setting-up-the-payment-request-api-to-accept-apple-pay.md)
- [Apple Pay on the Web Version 12 Release Notes](apple-pay-on-the-web-version-12-release-notes.md)

<a id="overview"></a>

## Overview

The Payment Request API sends a [PaymentMethodChangeEvent](paymentmethodchangeevent.md) when the user updates transaction information. For more information on [PaymentMethodChangeEvent](paymentmethodchangeevent.md), see the [W3C Payment Request API](https://www.w3.org/TR/payment-request/#paymentmethodchangeevent-interface).

<a id="Apple-Pay-Events"></a>

### Apple Pay Events

Custom Apple Pay events include information in the [methodDetails](paymentmethodchangeevent/methoddetails.md) attribute of the change event:

- **[ApplePayCouponCodeDetails](applepaycouponcodedetails.md)**: A dictionary type that indicates the user updated the coupon code.
- **[ApplePayPaymentMethod](applepaypaymentmethod.md)**: A dictionary type that indicates that the user changed the payment method.

## Topics

### Change Information

- [methodName](paymentmethodchangeevent/methodname.md): The identifier for the payment method to use for the transaction.
- [methodDetails](paymentmethodchangeevent/methoddetails.md): A dictionary that contains the details of the change.

## See Also

### Related Documentation

- [ApplePayPaymentMethod](applepaypaymentmethod.md): A dictionary that describes an Apple Pay payment method.

### Respond to payment request change events

- [ApplePayCouponCodeDetails](applepaycouponcodedetails.md): A dictionary that contains the updated coupon code.
