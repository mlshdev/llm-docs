> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didselectshippingaddress:completion:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didselectshippingaddress:completion:))

# paymentAuthorizationViewController(\_:didSelectShippingAddress:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0)

Tells the delegate that the user selected a shipping address.

> This method is deprecated. Use [paymentAuthorizationViewController(\_:didSelectShippingContact:completion:)](paymentauthorizationviewcontroller%28__didselectshippingcontact_completion_%29.md) instead.

## Declaration

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didSelectShippingAddress address: ABRecord, completion: @escaping @Sendable (PKPaymentAuthorizationStatus, [PKShippingMethod], [PKPaymentSummaryItem]) -> Void)
```

## Parameters

- `controller`: The payment authorization view controller.
- `address`: An address book record representing the selected shipping method.
- `completion`: The completion block to be called with updated shipping information.

  This block takes the following parameters:

  - **`status`**: The authorization status for the payment. For values, see [PKPaymentAuthorizationViewControllerDelegate](../pkpaymentauthorizationviewcontrollerdelegate.md).
  - **`shippingMethods`**: An array of [PKShippingMethod](../pkshippingmethod.md) objects that replaces the shipping methods for the current payment request.
  - **`summaryItems`**: An array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that replaces the summary items for the current payment request.

<a id="Discussion"></a>

## Discussion

Use this method to update the available shipping methods and, if a shipping method has been selected, the current shipping cost.

When this method is called, you create a new array of valid [PKShippingMethod](../pkshippingmethod.md) objects for the specified address. You also create an array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost. The summary items should include the shipping cost if a valid shipping method has been selected. For more information on updating these values, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [shippingMethods](../pkpaymentrequest/shippingmethods.md) and [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) properties.

# paymentAuthorizationViewController:didSelectShippingAddress:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0)

Tells the delegate that the user selected a shipping address.

> This method is deprecated. Use [paymentAuthorizationViewController:didSelectShippingContact:completion:](paymentauthorizationviewcontroller%28__didselectshippingcontact_completion_%29.md) instead.

## Declaration

```objectivec
- (void) paymentAuthorizationViewController:(PKPaymentAuthorizationViewController *) controller didSelectShippingAddress:(ABRecordRef) address completion:(void (^)(PKPaymentAuthorizationStatus status, NSArray<PKShippingMethod *> *shippingMethods, NSArray<PKPaymentSummaryItem *> *summaryItems)) completion;
```

## Parameters

- `controller`: The payment authorization view controller.
- `address`: An address book record representing the selected shipping method.
- `completion`: The completion block to be called with updated shipping information.

  This block takes the following parameters:

  - **`status`**: The authorization status for the payment. For values, see [PKPaymentAuthorizationViewControllerDelegate](../pkpaymentauthorizationviewcontrollerdelegate.md).
  - **`shippingMethods`**: An array of [PKShippingMethod](../pkshippingmethod.md) objects that replaces the shipping methods for the current payment request.
  - **`summaryItems`**: An array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that replaces the summary items for the current payment request.

<a id="Discussion"></a>

## Discussion

Use this method to update the available shipping methods and, if a shipping method has been selected, the current shipping cost.

When this method is called, you create a new array of valid [PKShippingMethod](../pkshippingmethod.md) objects for the specified address. You also create an array of [PKPaymentSummaryItem](../pkpaymentsummaryitem.md) objects that represent the updated cost. The summary items should include the shipping cost if a valid shipping method has been selected. For more information on updating these values, see the [PKPaymentRequest](../pkpaymentrequest.md) class’s [shippingMethods](../pkpaymentrequest/shippingmethods.md) and [paymentSummaryItems](../pkpaymentrequest/paymentsummaryitems.md) properties.
