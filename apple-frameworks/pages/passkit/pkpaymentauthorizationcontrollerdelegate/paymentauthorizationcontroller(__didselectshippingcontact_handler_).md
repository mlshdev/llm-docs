> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didselectshippingcontact:handler:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didselectshippingcontact:handler:))

# paymentAuthorizationController(\_:didSelectShippingContact:handler:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the user selected a shipping address.

## Declaration

```swift
@MainActor optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didSelectShippingContact contact: PKContact, handler completion: @escaping (PKPaymentRequestShippingContactUpdate) -> Void)
```

```swift
@MainActor optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didSelectShippingContact contact: PKContact) async -> PKPaymentRequestShippingContactUpdate
```

## Parameters

- `controller`: The payment authorization controller.
- `contact`: A contact object that represents the new shipping address. To maintain privacy, the shipping information is anonymized. For example, in the United States it only includes the city, state, and zip code. This provides enough information to calculate shipping costs, without revealing sensitive information until the user actually approves the purchase.
- `completion`: The completion handler to call with the updated payment summary items and shipping methods.

<a id="Discussion"></a>

## Discussion

Use this method to update the available shipping methods by creating a new array of valid [PKShippingMethod](../pkshippingmethod.md) objects for the specified address. You also create an array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost if the user selects a valid shipping method. For more information on updating these values, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [shippingMethods](../pkpaymentrequest/shippingmethods.md) and [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) properties.

## See Also

### Handling shipping information

- [paymentAuthorizationController(\_:didSelectShippingContact:completion:)](paymentauthorizationcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController(\_:didSelectShippingMethod:handler:)](paymentauthorizationcontroller%28__didselectshippingmethod_handler_%29.md): Tells the delegate that the user selected a shipping method.
- [paymentAuthorizationController(\_:didSelectShippingMethod:completion:)](paymentauthorizationcontroller%28__didselectshippingmethod_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping method.

# paymentAuthorizationController:didSelectShippingContact:handler: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the user selected a shipping address.

## Declaration

```objectivec
- (void) paymentAuthorizationController:(PKPaymentAuthorizationController *) controller didSelectShippingContact:(PKContact *) contact handler:(void (^)(PKPaymentRequestShippingContactUpdate *requestUpdate)) completion;
```

## Parameters

- `controller`: The payment authorization controller.
- `contact`: A contact object that represents the new shipping address. To maintain privacy, the shipping information is anonymized. For example, in the United States it only includes the city, state, and zip code. This provides enough information to calculate shipping costs, without revealing sensitive information until the user actually approves the purchase.
- `completion`: The completion handler to call with the updated payment summary items and shipping methods.

<a id="Discussion"></a>

## Discussion

Use this method to update the available shipping methods by creating a new array of valid [PKShippingMethod](../pkshippingmethod.md) objects for the specified address. You also create an array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost if the user selects a valid shipping method. For more information on updating these values, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [shippingMethods](../pkpaymentrequest/shippingmethods.md) and [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) properties.

## See Also

### Handling shipping information

- [paymentAuthorizationController:didSelectShippingContact:completion:](paymentauthorizationcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address.
- [paymentAuthorizationController:didSelectShippingMethod:handler:](paymentauthorizationcontroller%28__didselectshippingmethod_handler_%29.md): Tells the delegate that the user selected a shipping method.
- [paymentAuthorizationController:didSelectShippingMethod:completion:](paymentauthorizationcontroller%28__didselectshippingmethod_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping method.
