> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didselect:handler:)-5r0i7](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didselect:handler:)-5r0i7)

# paymentAuthorizationViewController(\_:didSelect:handler:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

Tells the delegate that the user selected a shipping method, and asks for an updated payment request.

## Declaration

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didSelect shippingMethod: PKShippingMethod, handler completion: @escaping @Sendable (PKPaymentRequestShippingMethodUpdate) -> Void)
```

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didSelect shippingMethod: PKShippingMethod) async -> PKPaymentRequestShippingMethodUpdate
```

## Parameters

- `controller`: The payment authorization view controller.
- `shippingMethod`: The selected shipping method. This parameter contains one of the shipping methods specified in the payment request.
- `completion`: The completion handler to call with the updated payment summary items.

<a id="Discussion"></a>

## Discussion

Use this method to update shipping costs based on the shipping address the user selected in a call to [paymentAuthorizationViewController(\_:didSelectShippingContact:handler:)](paymentauthorizationviewcontroller%28__didselectshippingcontact_handler_%29.md). If the user didn’t select an address, use the prepopulated address of the payment request.

When the system calls this method, you create a new array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost including shipping. For more information on creating summary items, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) property.

## See Also

### Handling shipping information

- [paymentAuthorizationViewController(\_:didSelectShippingContact:handler:)](paymentauthorizationviewcontroller%28__didselectshippingcontact_handler_%29.md): Tells the delegate that the user selected a shipping address, and asks for an updated payment request.
- [paymentAuthorizationViewController(\_:didSelectShippingContact:completion:)](paymentauthorizationviewcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address, and asks for an updated payment request.
- [paymentAuthorizationViewController(\_:didSelect:completion:)](paymentauthorizationviewcontroller%28__didselect_completion_%29-9otrj.md): Deprecated. Tells the delegate that the user selected a shipping method, and asks for an updated payment request.

# paymentAuthorizationViewController:didSelectShippingMethod:handler: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

Tells the delegate that the user selected a shipping method, and asks for an updated payment request.

## Declaration

```objectivec
- (void) paymentAuthorizationViewController:(PKPaymentAuthorizationViewController *) controller didSelectShippingMethod:(PKShippingMethod *) shippingMethod handler:(void (^)(PKPaymentRequestShippingMethodUpdate *update)) completion;
```

## Parameters

- `controller`: The payment authorization view controller.
- `shippingMethod`: The selected shipping method. This parameter contains one of the shipping methods specified in the payment request.
- `completion`: The completion handler to call with the updated payment summary items.

<a id="Discussion"></a>

## Discussion

Use this method to update shipping costs based on the shipping address the user selected in a call to [paymentAuthorizationViewController:didSelectShippingContact:handler:](paymentauthorizationviewcontroller%28__didselectshippingcontact_handler_%29.md). If the user didn’t select an address, use the prepopulated address of the payment request.

When the system calls this method, you create a new array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost including shipping. For more information on creating summary items, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) property.

## See Also

### Handling shipping information

- [paymentAuthorizationViewController:didSelectShippingContact:handler:](paymentauthorizationviewcontroller%28__didselectshippingcontact_handler_%29.md): Tells the delegate that the user selected a shipping address, and asks for an updated payment request.
- [paymentAuthorizationViewController:didSelectShippingContact:completion:](paymentauthorizationviewcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address, and asks for an updated payment request.
- [paymentAuthorizationViewController:didSelectShippingMethod:completion:](paymentauthorizationviewcontroller%28__didselect_completion_%29-9otrj.md): Deprecated. Tells the delegate that the user selected a shipping method, and asks for an updated payment request.
