> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentrequest/couponcode](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentrequest/couponcode)

# couponCode

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The initial coupon code for the payment request.

## Declaration

```
DOMString couponCode;
```

## Mentioned In

- [Apple Pay on the Web Version 12 Release Notes](../apple-pay-on-the-web-version-12-release-notes.md)

<a id="Discussion"></a>

## Discussion

Set the value to the empty string to indicate that there’s no initial coupon.

## See Also

### Working with coupon codes

- [supportsCouponCode](supportscouponcode.md): A Boolean value that determines whether the payment sheet displays the coupon code field.
