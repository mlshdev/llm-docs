> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didselectpaymentmethod:completion:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller(_:didselectpaymentmethod:completion:))

# paymentAuthorizationController(\_:didSelectPaymentMethod:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Tells the delegate that the user changed the payment method, and asks for an updated payment request.

> Use [paymentAuthorizationController(\_:didSelectPaymentMethod:handler:)](paymentauthorizationcontroller%28__didselectpaymentmethod_handler_%29.md) instead.

## Declaration

```swift
optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didSelectPaymentMethod paymentMethod: PKPaymentMethod, completion: @escaping @Sendable ([PKPaymentSummaryItem]) -> Void)
```

```swift
optional func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didSelectPaymentMethod paymentMethod: PKPaymentMethod) async -> [PKPaymentSummaryItem]
```

## Parameters

- `controller`: The payment authorization controller.
- `paymentMethod`: The new payment method.
- `completion`: The completion block to call with the updated payment summary items.

  This block takes the following parameters:

  - **`summaryItems`**: An updated array of summary items that include any changes due to fees or credit card surcharges associated with the payment method.

<a id="Discussion"></a>

## Discussion

This method is called when the user has selected a new payment card.  Use this delegate callback to update the summary items in response to the card type changing (for example, applying credit card surcharges), and then call the callback with the updated summary items.

> **Note**

>  The delegate receives no further callbacks except [paymentAuthorizationControllerDidFinish(\_:)](paymentauthorizationcontrollerdidfinish%28__%29.md) until it has invoked the completion block.

## See Also

### Handling user’s payment method selection

- [paymentAuthorizationController(\_:didSelectPaymentMethod:handler:)](paymentauthorizationcontroller%28__didselectpaymentmethod_handler_%29.md): Tells the delegate that the user changed the payment method, and asks for an updated payment request.

# paymentAuthorizationController:didSelectPaymentMethod:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

Tells the delegate that the user changed the payment method, and asks for an updated payment request.

> Use [paymentAuthorizationController:didSelectPaymentMethod:handler:](paymentauthorizationcontroller%28__didselectpaymentmethod_handler_%29.md) instead.

## Declaration

```objectivec
- (void) paymentAuthorizationController:(PKPaymentAuthorizationController *) controller didSelectPaymentMethod:(PKPaymentMethod *) paymentMethod completion:(void (^)(NSArray<PKPaymentSummaryItem *> *summaryItems)) completion;
```

## Parameters

- `controller`: The payment authorization controller.
- `paymentMethod`: The new payment method.
- `completion`: The completion block to call with the updated payment summary items.

  This block takes the following parameters:

  - **`summaryItems`**: An updated array of summary items that include any changes due to fees or credit card surcharges associated with the payment method.

<a id="Discussion"></a>

## Discussion

This method is called when the user has selected a new payment card.  Use this delegate callback to update the summary items in response to the card type changing (for example, applying credit card surcharges), and then call the callback with the updated summary items.

> **Note**

>  The delegate receives no further callbacks except [paymentAuthorizationControllerDidFinish:](paymentauthorizationcontrollerdidfinish%28__%29.md) until it has invoked the completion block.

## See Also

### Handling user’s payment method selection

- [paymentAuthorizationController:didSelectPaymentMethod:handler:](paymentauthorizationcontroller%28__didselectpaymentmethod_handler_%29.md): Tells the delegate that the user changed the payment method, and asks for an updated payment request.
