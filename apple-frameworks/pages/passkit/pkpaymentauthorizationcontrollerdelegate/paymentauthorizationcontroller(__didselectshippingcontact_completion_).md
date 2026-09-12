> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didselectshippingcontact:completion:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didselectshippingcontact:completion:))

# paymentAuthorizationController(\_:didSelectShippingContact:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Tells the delegate that the user selected a shipping address.

> Use [paymentAuthorizationController(\_:didSelectShippingContact:handler:)](paymentauthorizationcontroller%28__didselectshippingcontact_handler_%29.md) instead.

## Declaration

```swift
optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didSelectShippingContact contact: PKContact, completion: @escaping @Sendable (PKPaymentAuthorizationStatus, [PKShippingMethod], [PKPaymentSummaryItem]) -> Void)
```

```swift
optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didSelectShippingContact contact: PKContact) async -> (PKPaymentAuthorizationStatus, [PKShippingMethod], [PKPaymentSummaryItem])
```

## Parameters

- `controller`: The payment authorization controller.
- `contact`: A contact object representing the new shipping address. To maintain privacy, the shipping information is anonymized. For example, in the United States it only includes the city, state, and zip code. This provides enough information to calculate shipping costs, without revealing sensitive information until the user actually approves the purchase.
- `completion`: The completion block to call with the updated payment summary items and shipping methods.

  This block takes the following parameters:

  - **`status`**: The authorization status for the payment. For values, see [PKPaymentAuthorizationControllerDelegate](../pkpaymentauthorizationcontrollerdelegate.md).
  - **`shippingMethods`**: An array of [PKShippingMethod](../pkshippingmethod.md) objects that replaces the shipping methods for the current payment request.
  - **`summaryItems`**: An array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that replaces the summary items for the current payment request.

<a id="Discussion"></a>

## Discussion

Use this method to update the available shipping methods and, if a shipping method has been selected, the current shipping cost.

When this method is called, you create a new array of valid [PKShippingMethod](../pkshippingmethod.md) objects for the specified address. You also create an array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost. The summary items should include the shipping cost if a valid shipping method has been selected. For more information on updating these values, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [shippingMethods](../pkpaymentrequest/shippingmethods.md) and [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) properties.

> **Note**

>  The delegate receives no further callbacks except [paymentAuthorizationControllerDidFinish(\_:)](paymentauthorizationcontrollerdidfinish%28__%29.md) until it has invoked the completion block.

## See Also

### Handling shipping information

- [paymentAuthorizationController(\_:didSelectShippingContact:handler:)](paymentauthorizationcontroller%28__didselectshippingcontact_handler_%29.md): Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController(\_:didSelectShippingMethod:handler:)](paymentauthorizationcontroller%28__didselectshippingmethod_handler_%29.md): Tells the delegate that the user selected a shipping method.
- [paymentAuthorizationController(\_:didSelectShippingMethod:completion:)](paymentauthorizationcontroller%28__didselectshippingmethod_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping method.

# paymentAuthorizationController:didSelectShippingContact:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Tells the delegate that the user selected a shipping address.

> Use [paymentAuthorizationController:didSelectShippingContact:handler:](paymentauthorizationcontroller%28__didselectshippingcontact_handler_%29.md) instead.

## Declaration

```objectivec
- (void) paymentAuthorizationController:(PKPaymentAuthorizationController *) controller didSelectShippingContact:(PKContact *) contact completion:(void (^)(PKPaymentAuthorizationStatus status, NSArray<PKShippingMethod *> *shippingMethods, NSArray<PKPaymentSummaryItem *> *summaryItems)) completion;
```

## Parameters

- `controller`: The payment authorization controller.
- `contact`: A contact object representing the new shipping address. To maintain privacy, the shipping information is anonymized. For example, in the United States it only includes the city, state, and zip code. This provides enough information to calculate shipping costs, without revealing sensitive information until the user actually approves the purchase.
- `completion`: The completion block to call with the updated payment summary items and shipping methods.

  This block takes the following parameters:

  - **`status`**: The authorization status for the payment. For values, see [PKPaymentAuthorizationControllerDelegate](../pkpaymentauthorizationcontrollerdelegate.md).
  - **`shippingMethods`**: An array of [PKShippingMethod](../pkshippingmethod.md) objects that replaces the shipping methods for the current payment request.
  - **`summaryItems`**: An array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that replaces the summary items for the current payment request.

<a id="Discussion"></a>

## Discussion

Use this method to update the available shipping methods and, if a shipping method has been selected, the current shipping cost.

When this method is called, you create a new array of valid [PKShippingMethod](../pkshippingmethod.md) objects for the specified address. You also create an array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost. The summary items should include the shipping cost if a valid shipping method has been selected. For more information on updating these values, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [shippingMethods](../pkpaymentrequest/shippingmethods.md) and [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) properties.

> **Note**

>  The delegate receives no further callbacks except [paymentAuthorizationControllerDidFinish:](paymentauthorizationcontrollerdidfinish%28__%29.md) until it has invoked the completion block.

## See Also

### Handling shipping information

- [paymentAuthorizationController:didSelectShippingContact:handler:](paymentauthorizationcontroller%28__didselectshippingcontact_handler_%29.md): Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController:didSelectShippingMethod:handler:](paymentauthorizationcontroller%28__didselectshippingmethod_handler_%29.md): Tells the delegate that the user selected a shipping method.
- [paymentAuthorizationController:didSelectShippingMethod:completion:](paymentauthorizationcontroller%28__didselectshippingmethod_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping method.
