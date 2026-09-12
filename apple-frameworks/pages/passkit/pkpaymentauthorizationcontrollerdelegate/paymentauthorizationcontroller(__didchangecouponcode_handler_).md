> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didchangecouponcode:handler:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didchangecouponcode:handler:))

# paymentAuthorizationController(\_:didChangeCouponCode:handler:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Tells the delegate that the user entered or updated a coupon code.

## Declaration

```swift
@MainActor optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didChangeCouponCode couponCode: String, handler completion: @escaping (PKPaymentRequestCouponCodeUpdate) -> Void)
```

```swift
@MainActor optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didChangeCouponCode couponCode: String) async -> PKPaymentRequestCouponCodeUpdate
```

## Parameters

- `controller`: The payment authorization controller.
- `couponCode`: The new coupon code.
- `completion`: The completion handler to call with the updated payment summary items and shipping methods.

# paymentAuthorizationController:didChangeCouponCode:handler: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Tells the delegate that the user entered or updated a coupon code.

## Declaration

```objectivec
- (void) paymentAuthorizationController:(PKPaymentAuthorizationController *) controller didChangeCouponCode:(NSString *) couponCode handler:(void (^)(PKPaymentRequestCouponCodeUpdate *update)) completion;
```

## Parameters

- `controller`: The payment authorization controller.
- `couponCode`: The new coupon code.
- `completion`: The completion handler to call with the updated payment summary items and shipping methods.
