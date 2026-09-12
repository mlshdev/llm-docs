> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didselect:completion:)-9otrj](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didselect:completion:)-9otrj)

# paymentAuthorizationViewController(\_:didSelect:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

Tells the delegate that the user selected a shipping method, and asks for an updated payment request.

> Use  [paymentAuthorizationViewController(\_:didSelect:handler:)](paymentauthorizationviewcontroller%28__didselect_handler_%29-5r0i7.md) instead.

## Declaration

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didSelect shippingMethod: PKShippingMethod, completion: @escaping @Sendable (PKPaymentAuthorizationStatus, [PKPaymentSummaryItem]) -> Void)
```

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didSelect shippingMethod: PKShippingMethod) async -> (PKPaymentAuthorizationStatus, [PKPaymentSummaryItem])
```

## Parameters

- `controller`: The payment authorization view controller.
- `shippingMethod`: The selected shipping method. This parameter contains one of the shipping methods included in the payment request.
- `completion`: The completion block to call with the updated payment summary items.

  This block takes the following parameters:

  - **`status`**: The authorization status for the payment. For values, see [PKPaymentAuthorizationStatus](../pkpaymentauthorizationstatus.md).
  - **`summaryItems`**: An array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that replaces the summary items for the current payment request.

<a id="Discussion"></a>

## Discussion

Use this method to update shipping costs based on the shipping address selected by the user, as previously passed to the delegate in the [PKPaymentAuthorizationViewControllerDelegate](../pkpaymentauthorizationviewcontrollerdelegate.md) method. If no address has been selected, use the prepopulated address on the payment request.

When this method is called, you create a new array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost including shipping. For more information on creating summary items, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) property.

## See Also

### Handling shipping information

- [paymentAuthorizationViewController(\_:didSelectShippingContact:handler:)](paymentauthorizationviewcontroller%28__didselectshippingcontact_handler_%29.md): Tells the delegate that the user selected a shipping address, and asks for an updated payment request.
- [paymentAuthorizationViewController(\_:didSelectShippingContact:completion:)](paymentauthorizationviewcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address, and asks for an updated payment request.
- [paymentAuthorizationViewController(\_:didSelect:handler:)](paymentauthorizationviewcontroller%28__didselect_handler_%29-5r0i7.md): Tells the delegate that the user selected a shipping method, and asks for an updated payment request.

# paymentAuthorizationViewController:didSelectShippingMethod:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0)

Tells the delegate that the user selected a shipping method, and asks for an updated payment request.

> Use  [paymentAuthorizationViewController:didSelectShippingMethod:handler:](paymentauthorizationviewcontroller%28__didselect_handler_%29-5r0i7.md) instead.

## Declaration

```objectivec
- (void) paymentAuthorizationViewController:(PKPaymentAuthorizationViewController *) controller didSelectShippingMethod:(PKShippingMethod *) shippingMethod completion:(void (^)(PKPaymentAuthorizationStatus status, NSArray<PKPaymentSummaryItem *> *summaryItems)) completion;
```

## Parameters

- `controller`: The payment authorization view controller.
- `shippingMethod`: The selected shipping method. This parameter contains one of the shipping methods included in the payment request.
- `completion`: The completion block to call with the updated payment summary items.

  This block takes the following parameters:

  - **`status`**: The authorization status for the payment. For values, see [PKPaymentAuthorizationStatus](../pkpaymentauthorizationstatus.md).
  - **`summaryItems`**: An array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that replaces the summary items for the current payment request.

<a id="Discussion"></a>

## Discussion

Use this method to update shipping costs based on the shipping address selected by the user, as previously passed to the delegate in the [PKPaymentAuthorizationViewControllerDelegate](../pkpaymentauthorizationviewcontrollerdelegate.md) method. If no address has been selected, use the prepopulated address on the payment request.

When this method is called, you create a new array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost including shipping. For more information on creating summary items, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) property.

## See Also

### Handling shipping information

- [paymentAuthorizationViewController:didSelectShippingContact:handler:](paymentauthorizationviewcontroller%28__didselectshippingcontact_handler_%29.md): Tells the delegate that the user selected a shipping address, and asks for an updated payment request.
- [paymentAuthorizationViewController:didSelectShippingContact:completion:](paymentauthorizationviewcontroller%28__didselectshippingcontact_completion_%29.md): Deprecated. Tells the delegate that the user selected a shipping address, and asks for an updated payment request.
- [paymentAuthorizationViewController:didSelectShippingMethod:handler:](paymentauthorizationviewcontroller%28__didselect_handler_%29-5r0i7.md): Tells the delegate that the user selected a shipping method, and asks for an updated payment request.
