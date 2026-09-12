> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didselectshippingmethod:handler:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didselectshippingmethod:handler:))

# paymentAuthorizationController(\_:didSelectShippingMethod:handler:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the user selected a shipping method.

## Declaration

```swift
@MainActor optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didSelectShippingMethod shippingMethod: PKShippingMethod, handler completion: @escaping (PKPaymentRequestShippingMethodUpdate) -> Void)
```

```swift
@MainActor optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didSelectShippingMethod shippingMethod: PKShippingMethod) async -> PKPaymentRequestShippingMethodUpdate
```

## Parameters

- `controller`: The payment authorization controller.
- `shippingMethod`: The selected shipping method. This parameter contains one of the shipping methods included in the payment request.
- `completion`: The completion handler to call with the updated payment summary items.

<a id="Discussion"></a>

## Discussion

Use this method to update shipping costs based on the shipping address the user selected, as previously passed to the delegate in the [paymentAuthorizationController(\_:didSelectShippingContact:handler:)](paymentauthorizationcontroller%28__didselectshippingcontact_handler_%29.md) method. If the user didn’t select an address, use the prepopulated address on the payment request.

When the system calls this method, you create a new array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost including shipping. For more information on creating summary items, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) property.

## See Also

### Handling shipping information

- [paymentAuthorizationController(\_:didSelectShippingContact:handler:)](paymentauthorizationcontroller%28__didselectshippingcontact_handler_%29.md): Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController(\_:didSelectShippingContact:completion:)](paymentauthorizationcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController(\_:didSelectShippingMethod:completion:)](paymentauthorizationcontroller%28__didselectshippingmethod_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping method.

# paymentAuthorizationController:didSelectShippingMethod:handler: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the user selected a shipping method.

## Declaration

```objectivec
- (void) paymentAuthorizationController:(PKPaymentAuthorizationController *) controller didSelectShippingMethod:(PKShippingMethod *) shippingMethod handler:(void (^)(PKPaymentRequestShippingMethodUpdate *requestUpdate)) completion;
```

## Parameters

- `controller`: The payment authorization controller.
- `shippingMethod`: The selected shipping method. This parameter contains one of the shipping methods included in the payment request.
- `completion`: The completion handler to call with the updated payment summary items.

<a id="Discussion"></a>

## Discussion

Use this method to update shipping costs based on the shipping address the user selected, as previously passed to the delegate in the [paymentAuthorizationController:didSelectShippingContact:handler:](paymentauthorizationcontroller%28__didselectshippingcontact_handler_%29.md) method. If the user didn’t select an address, use the prepopulated address on the payment request.

When the system calls this method, you create a new array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost including shipping. For more information on creating summary items, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) property.

## See Also

### Handling shipping information

- [paymentAuthorizationController:didSelectShippingContact:handler:](paymentauthorizationcontroller%28__didselectshippingcontact_handler_%29.md): Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController:didSelectShippingContact:completion:](paymentauthorizationcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController:didSelectShippingMethod:completion:](paymentauthorizationcontroller%28__didselectshippingmethod_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping method.
