> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentmethod/network](https://developer.apple.com/documentation/passkit/pkpaymentmethod/network)

# network (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A string, suitable for display, that describes the payment network for the card.

## Declaration

```swift
var network: PKPaymentNetwork? { get }
```

<a id="Discussion"></a>

## Discussion

To protect the user’s privacy, the `network` property is `nil` until after the user authenticates the purchase. You can safely access this property as soon as the system calls your delegate’s [paymentAuthorizationController(\_:didAuthorizePayment:completion:)](../pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md) method.

## See Also

### Getting the payment method’s attributes

- [type](type.md): A value that represents the card’s type.
- [PKPaymentMethodType](../pkpaymentmethodtype.md): The type of cards available in Apple Pay.
- [displayName](displayname.md): A string, suitable for display, that describes the card.
- [billingAddress](billingaddress.md): The user’s billing address.

# network (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A string, suitable for display, that describes the payment network for the card.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) PKPaymentNetwork network;
```

<a id="Discussion"></a>

## Discussion

To protect the user’s privacy, the `network` property is `nil` until after the user authenticates the purchase. You can safely access this property as soon as the system calls your delegate’s [paymentAuthorizationController:didAuthorizePayment:completion:](../pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md) method.

## See Also

### Getting the payment method’s attributes

- [type](type.md): A value that represents the card’s type.
- [PKPaymentMethodType](../pkpaymentmethodtype.md): The type of cards available in Apple Pay.
- [displayName](displayname.md): A string, suitable for display, that describes the card.
- [billingAddress](billingaddress.md): The user’s billing address.
