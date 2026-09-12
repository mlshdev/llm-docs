> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didselectshippingmethod:completion:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didselectshippingmethod:completion:))

# paymentAuthorizationController(\_:didSelectShippingMethod:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Tells the delegate that the user selected a shipping method.

> Use [paymentAuthorizationController(\_:didSelectShippingMethod:handler:)](paymentauthorizationcontroller%28__didselectshippingmethod_handler_%29.md)  instead.

## Declaration

```swift
optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didSelectShippingMethod shippingMethod: PKShippingMethod, completion: @escaping @Sendable (PKPaymentAuthorizationStatus, [PKPaymentSummaryItem]) -> Void)
```

```swift
optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didSelectShippingMethod shippingMethod: PKShippingMethod) async -> (PKPaymentAuthorizationStatus, [PKPaymentSummaryItem])
```

## Parameters

- `controller`: The payment authorization controller.
- `shippingMethod`: The selected shipping method. This parameter contains one of the shipping methods included in the payment request.
- `completion`: The completion block to call with the updated payment summary items.

  This block takes the following parameters:

  - **`status`**: The authorization status for the payment. For values, see [paymentAuthorizationControllerDidFinish(\_:)](paymentauthorizationcontrollerdidfinish%28__%29.md).
  - **`summaryItems`**: An array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that replaces the summary items for the current payment request.

<a id="Discussion"></a>

## Discussion

Use this method to update shipping costs based on the shipping address selected by the user, as previously passed to the delegate in the [paymentAuthorizationController(\_:didSelectShippingContact:completion:)](paymentauthorizationcontroller%28__didselectshippingcontact_completion_%29.md) method. If no address has been selected, use the prepopulated address on the payment request.

When this method is called, you create a new array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost including shipping. For more information on creating summary items, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) property.

> **Note**

>  The delegate receives no further callbacks except [paymentAuthorizationControllerDidFinish(\_:)](paymentauthorizationcontrollerdidfinish%28__%29.md) until it has invoked the completion block.

## See Also

### Handling shipping information

- [paymentAuthorizationController(\_:didSelectShippingContact:handler:)](paymentauthorizationcontroller%28__didselectshippingcontact_handler_%29.md): Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController(\_:didSelectShippingContact:completion:)](paymentauthorizationcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController(\_:didSelectShippingMethod:handler:)](paymentauthorizationcontroller%28__didselectshippingmethod_handler_%29.md): Tells the delegate that the user selected a shipping method.

# paymentAuthorizationController:didSelectShippingMethod:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Tells the delegate that the user selected a shipping method.

> Use [paymentAuthorizationController:didSelectShippingMethod:handler:](paymentauthorizationcontroller%28__didselectshippingmethod_handler_%29.md)  instead.

## Declaration

```objectivec
- (void) paymentAuthorizationController:(PKPaymentAuthorizationController *) controller didSelectShippingMethod:(PKShippingMethod *) shippingMethod completion:(void (^)(PKPaymentAuthorizationStatus status, NSArray<PKPaymentSummaryItem *> *summaryItems)) completion;
```

## Parameters

- `controller`: The payment authorization controller.
- `shippingMethod`: The selected shipping method. This parameter contains one of the shipping methods included in the payment request.
- `completion`: The completion block to call with the updated payment summary items.

  This block takes the following parameters:

  - **`status`**: The authorization status for the payment. For values, see [paymentAuthorizationControllerDidFinish:](paymentauthorizationcontrollerdidfinish%28__%29.md).
  - **`summaryItems`**: An array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that replaces the summary items for the current payment request.

<a id="Discussion"></a>

## Discussion

Use this method to update shipping costs based on the shipping address selected by the user, as previously passed to the delegate in the [paymentAuthorizationController:didSelectShippingContact:completion:](paymentauthorizationcontroller%28__didselectshippingcontact_completion_%29.md) method. If no address has been selected, use the prepopulated address on the payment request.

When this method is called, you create a new array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost including shipping. For more information on creating summary items, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) property.

> **Note**

>  The delegate receives no further callbacks except [paymentAuthorizationControllerDidFinish:](paymentauthorizationcontrollerdidfinish%28__%29.md) until it has invoked the completion block.

## See Also

### Handling shipping information

- [paymentAuthorizationController:didSelectShippingContact:handler:](paymentauthorizationcontroller%28__didselectshippingcontact_handler_%29.md): Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController:didSelectShippingContact:completion:](paymentauthorizationcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController:didSelectShippingMethod:handler:](paymentauthorizationcontroller%28__didselectshippingmethod_handler_%29.md): Tells the delegate that the user selected a shipping method.
