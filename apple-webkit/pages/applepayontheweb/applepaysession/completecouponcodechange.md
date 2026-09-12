> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaysession/completecouponcodechange](https://developer.apple.com/documentation/applepayontheweb/applepaysession/completecouponcodechange)

# completeCouponCodeChange

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Method  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Completes the entry of a coupon code with an update.

## Declaration

```
undefined completeCouponCodeChange(
	ApplePayCouponCodeUpdate update
);
```

## Mentioned In

- [Apple Pay on the Web Version 12 Release Notes](../apple-pay-on-the-web-version-12-release-notes.md)

<a id="Discussion"></a>

## Discussion

This is the method called by [oncouponcodechanged](oncouponcodechanged.md) to complete the event.

## See Also

### Handling coupons

- [oncouponcodechanged](oncouponcodechanged.md): An event handler called by the system when the user enters or updates a coupon code.
- [ApplePayCouponCodeChangedEvent](../applepaycouponcodechangedevent.md): An event object that contains the coupon code entered by the user.
- [ApplePayCouponCodeUpdate](../applepaycouponcodeupdate.md): A dictionary that contains the updated transaction details for responding to a coupon changed event.
