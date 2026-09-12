> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didselectshippingcontact:handler:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didselectshippingcontact:handler:))

# paymentAuthorizationViewController(\_:didSelectShippingContact:handler:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

Tells the delegate that the user selected a shipping address, and asks for an updated payment request.

## Declaration

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didSelectShippingContact contact: PKContact, handler completion: @escaping @Sendable (PKPaymentRequestShippingContactUpdate) -> Void)
```

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didSelectShippingContact contact: PKContact) async -> PKPaymentRequestShippingContactUpdate
```

## Parameters

- `controller`: The payment authorization view controller.
- `contact`: A contact object that represents the new shipping address. To maintain privacy, the shipping information is anonymized. For example, in the United States it only includes the city, state, and zip code. This information provides enough detail to calculate shipping costs, without revealing sensitive information until the user actually approves the purchase.
- `completion`: The completion handler to call with the updated payment summary items and shipping methods.

<a id="Discussion"></a>

## Discussion

Use this method to update the available shipping methods by creating a new array of valid [PKShippingMethod](../pkshippingmethod.md) objects for the specified address. You also create an array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost if the user selected a valid shipping method. For more information on updating these values, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [shippingMethods](../pkpaymentrequest/shippingmethods.md) and [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) properties.

## See Also

### Handling shipping information

- [paymentAuthorizationViewController(\_:didSelectShippingContact:completion:)](paymentauthorizationviewcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address, and asks for an updated payment request.
- [paymentAuthorizationViewController(\_:didSelect:handler:)](paymentauthorizationviewcontroller%28__didselect_handler_%29-5r0i7.md): Tells the delegate that the user selected a shipping method, and asks for an updated payment request.
- [paymentAuthorizationViewController(\_:didSelect:completion:)](paymentauthorizationviewcontroller%28__didselect_completion_%29-9otrj.md): Deprecated. Tells the delegate that the user selected a shipping method, and asks for an updated payment request.

# paymentAuthorizationViewController:didSelectShippingContact:handler: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

Tells the delegate that the user selected a shipping address, and asks for an updated payment request.

## Declaration

```objectivec
- (void) paymentAuthorizationViewController:(PKPaymentAuthorizationViewController *) controller didSelectShippingContact:(PKContact *) contact handler:(void (^)(PKPaymentRequestShippingContactUpdate *update)) completion;
```

## Parameters

- `controller`: The payment authorization view controller.
- `contact`: A contact object that represents the new shipping address. To maintain privacy, the shipping information is anonymized. For example, in the United States it only includes the city, state, and zip code. This information provides enough detail to calculate shipping costs, without revealing sensitive information until the user actually approves the purchase.
- `completion`: The completion handler to call with the updated payment summary items and shipping methods.

<a id="Discussion"></a>

## Discussion

Use this method to update the available shipping methods by creating a new array of valid [PKShippingMethod](../pkshippingmethod.md) objects for the specified address. You also create an array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost if the user selected a valid shipping method. For more information on updating these values, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [shippingMethods](../pkpaymentrequest/shippingmethods.md) and [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) properties.

## See Also

### Handling shipping information

- [paymentAuthorizationViewController:didSelectShippingContact:completion:](paymentauthorizationviewcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address, and asks for an updated payment request.
- [paymentAuthorizationViewController:didSelectShippingMethod:handler:](paymentauthorizationviewcontroller%28__didselect_handler_%29-5r0i7.md): Tells the delegate that the user selected a shipping method, and asks for an updated payment request.
- [paymentAuthorizationViewController:didSelectShippingMethod:completion:](paymentauthorizationviewcontroller%28__didselect_completion_%29-9otrj.md): Deprecated. Tells the delegate that the user selected a shipping method, and asks for an updated payment request.
