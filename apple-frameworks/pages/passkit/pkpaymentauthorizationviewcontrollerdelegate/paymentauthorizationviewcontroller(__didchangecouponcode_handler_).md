> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didchangecouponcode:handler:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didchangecouponcode:handler:))

# paymentAuthorizationViewController(\_:didChangeCouponCode:handler:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Tells the delegate that the user entered or updated a coupon code.

## Declaration

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didChangeCouponCode couponCode: String, handler completion: @escaping @Sendable (PKPaymentRequestCouponCodeUpdate) -> Void)
```

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didChangeCouponCode couponCode: String) async -> PKPaymentRequestCouponCodeUpdate
```

## Parameters

- `controller`: The payment authorization view controller.
- `couponCode`: The coupon code.
- `completion`: The completion handler to call with the updated payment summary items and shipping methods.

# paymentAuthorizationViewController:didChangeCouponCode:handler: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Tells the delegate that the user entered or updated a coupon code.

## Declaration

```objectivec
- (void) paymentAuthorizationViewController:(PKPaymentAuthorizationViewController *) controller didChangeCouponCode:(NSString *) couponCode handler:(void (^)(PKPaymentRequestCouponCodeUpdate *update)) completion;
```

## Parameters

- `controller`: The payment authorization view controller.
- `couponCode`: The coupon code.
- `completion`: The completion handler to call with the updated payment summary items and shipping methods.
