> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaycouponcodedetails](https://developer.apple.com/documentation/applepayontheweb/applepaycouponcodedetails)

# ApplePayCouponCodeDetails

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Structure  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A dictionary that contains the updated coupon code.

## Declaration

```
dictionary ApplePayCouponCodeDetails {
	DOMString couponCode;
};
```

## Mentioned In

- [Apple Pay on the Web Version 12 Release Notes](apple-pay-on-the-web-version-12-release-notes.md)
- [Setting up the payment request API to accept Apple Pay](setting-up-the-payment-request-api-to-accept-apple-pay.md)

## Topics

### Coupon Code

- [couponCode](applepaycouponcodedetails/couponcode.md): The updated coupon code from the payment sheet.

## See Also

### Respond to payment request change events

- [PaymentMethodChangeEvent](paymentmethodchangeevent.md): The Apple Pay extensions to the Payment Request payment change event.
