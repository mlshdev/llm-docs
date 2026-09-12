> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/couponcode](https://developer.apple.com/documentation/passkit/pkpaymentrequest/couponcode)

# couponCode (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The initial coupon code for the payment request.

## Declaration

```swift
var couponCode: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Set the value to `nil` or the empty string to indicate that there’s no initial coupon.

> **Important**

>  The system doesn’t send a change event for an initial coupon code. You must apply the code to the initial payment summary items.

## See Also

### Working with coupon codes

- [supportsCouponCode](supportscouponcode.md): A Boolean value that determines whether the payment sheet displays the coupon code field.

# couponCode (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The initial coupon code for the payment request.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * couponCode;
```

<a id="Discussion"></a>

## Discussion

Set the value to `nil` or the empty string to indicate that there’s no initial coupon.

> **Important**

>  The system doesn’t send a change event for an initial coupon code. You must apply the code to the initial payment summary items.

## See Also

### Working with coupon codes

- [supportsCouponCode](supportscouponcode.md): A Boolean value that determines whether the payment sheet displays the coupon code field.
