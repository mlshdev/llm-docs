> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applepayontheweb/applepayrequestbase/couponcode

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

<a id="Discussion"></a>

## Discussion

Set the value to `nil` or the empty string to indicate that there’s no initial coupon.

> **Important**

>  The system doesn’t send a change event for an initial coupon code. You must apply the code to the initial payment summary items.

## See Also

### Managing coupon codes

- [supportsCouponCode](supportscouponcode.md): A Boolean value that determines whether the payment sheet displays the coupon code field.
