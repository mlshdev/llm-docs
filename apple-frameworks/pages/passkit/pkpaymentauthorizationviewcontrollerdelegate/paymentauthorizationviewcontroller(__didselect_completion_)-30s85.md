> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didselect:completion:)-30s85](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate/paymentauthorizationviewcontroller(_:didselect:completion:)-30s85)

# paymentAuthorizationViewController(\_:didSelect:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

Tells the delegate that the user changed the payment method, and asks for an updated payment request.

> Use [paymentAuthorizationViewController(\_:didSelect:handler:)](paymentauthorizationviewcontroller%28__didselect_handler_%29-3bex6.md) instead.

## Declaration

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didSelect paymentMethod: PKPaymentMethod, completion: @escaping @Sendable ([PKPaymentSummaryItem]) -> Void)
```

```swift
optional func paymentAuthorizationViewController(_ controller: PKPaymentAuthorizationViewController, didSelect paymentMethod: PKPaymentMethod) async -> [PKPaymentSummaryItem]
```

## Parameters

- `controller`: The payment authorization view controller.
- `paymentMethod`: The new payment method.
- `completion`: The completion block to call with the updated payment summary items.

  This block takes the following parameters:

  - **`summaryItems`**: An updated array of summary items that include any changes due to fees or credit card surcharges associated with the payment method.

<a id="Discussion"></a>

## Discussion

This method is called when the user has selected a new payment card.  Use this delegate callback to update the summary items in response to the card type changing (for example, applying credit card surcharges), and then call the callback with the updated summary items.

> **Note**

>  The delegate receives no further callbacks except [paymentAuthorizationViewControllerDidFinish(\_:)](paymentauthorizationviewcontrollerdidfinish%28__%29.md) until it has invoked the completion block.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationViewController(\_:didRequestMerchantSessionUpdate:)](paymentauthorizationviewcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationViewControllerWillAuthorizePayment(\_:)](paymentauthorizationviewcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationViewController(\_:didAuthorizePayment:handler:)](paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewController(\_:didAuthorizePayment:completion:)](paymentauthorizationviewcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewControllerDidFinish(\_:)](paymentauthorizationviewcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization finished.
- [paymentAuthorizationViewController(\_:didSelect:handler:)](paymentauthorizationviewcontroller%28__didselect_handler_%29-3bex6.md): Tells the delegate that the user changed the payment method, and asks for an updated payment request.

# paymentAuthorizationViewController:didSelectPaymentMethod:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0)

Tells the delegate that the user changed the payment method, and asks for an updated payment request.

> Use [paymentAuthorizationViewController:didSelectPaymentMethod:handler:](paymentauthorizationviewcontroller%28__didselect_handler_%29-3bex6.md) instead.

## Declaration

```objectivec
- (void) paymentAuthorizationViewController:(PKPaymentAuthorizationViewController *) controller didSelectPaymentMethod:(PKPaymentMethod *) paymentMethod completion:(void (^)(NSArray<PKPaymentSummaryItem *> *summaryItems)) completion;
```

## Parameters

- `controller`: The payment authorization view controller.
- `paymentMethod`: The new payment method.
- `completion`: The completion block to call with the updated payment summary items.

  This block takes the following parameters:

  - **`summaryItems`**: An updated array of summary items that include any changes due to fees or credit card surcharges associated with the payment method.

<a id="Discussion"></a>

## Discussion

This method is called when the user has selected a new payment card.  Use this delegate callback to update the summary items in response to the card type changing (for example, applying credit card surcharges), and then call the callback with the updated summary items.

> **Note**

>  The delegate receives no further callbacks except [paymentAuthorizationViewControllerDidFinish:](paymentauthorizationviewcontrollerdidfinish%28__%29.md) until it has invoked the completion block.

## See Also

### Handling user’s payment authorization

- [paymentAuthorizationViewController:didRequestMerchantSessionUpdate:](paymentauthorizationviewcontroller%28__didrequestmerchantsessionupdate_%29.md): Requests an object that validates the identity of a merchant for a payment request.
- [paymentAuthorizationViewControllerWillAuthorizePayment:](paymentauthorizationviewcontrollerwillauthorizepayment%28__%29.md): Tells the delegate that the user is authorizing the payment request.
- [paymentAuthorizationViewController:didAuthorizePayment:handler:](paymentauthorizationviewcontroller%28__didauthorizepayment_handler_%29.md): Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewController:didAuthorizePayment:completion:](paymentauthorizationviewcontroller%28__didauthorizepayment_completion_%29.md): Deprecated. Tells the delegate that the user authorized the payment request, and asks for a result.
- [paymentAuthorizationViewControllerDidFinish:](paymentauthorizationviewcontrollerdidfinish%28__%29.md): Tells the delegate that payment authorization finished.
- [paymentAuthorizationViewController:didSelectPaymentMethod:handler:](paymentauthorizationviewcontroller%28__didselect_handler_%29-3bex6.md): Tells the delegate that the user changed the payment method, and asks for an updated payment request.
