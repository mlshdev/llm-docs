> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaycouponcodechangedevent](https://developer.apple.com/documentation/applepayontheweb/applepaycouponcodechangedevent)

# ApplePayCouponCodeChangedEvent

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Class  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

An event object that contains the coupon code entered by the user.

## Declaration

```
interface ApplePayCouponCodeChangedEvent
```

## Mentioned In

- [Apple Pay on the Web Version 12 Release Notes](apple-pay-on-the-web-version-12-release-notes.md)

## Topics

### Reading the Coupon Code

- [couponCode](applepaycouponcodechangedevent/couponcode.md): The updated coupon code from the payment sheet.

## See Also

### Handling coupons

- [oncouponcodechanged](applepaysession/oncouponcodechanged.md): An event handler called by the system when the user enters or updates a coupon code.
- [completeCouponCodeChange](applepaysession/completecouponcodechange.md): Completes the entry of a coupon code with an update.
- [ApplePayCouponCodeUpdate](applepaycouponcodeupdate.md): A dictionary that contains the updated transaction details for responding to a coupon changed event.
