> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentmethod/displayname](https://developer.apple.com/documentation/passkit/pkpaymentmethod/displayname)

# displayName (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A string, suitable for display, that describes the card.

## Declaration

```swift
var displayName: String? { get }
```

<a id="Discussion"></a>

## Discussion

The display name enables a user to recognize a particular card from a list of cards.

For debit and credit cards, the display name often includes the card brand and the last four digits of the credit card number when available, for example: `“Visa 1233”`, `“MasterCard 5678”`, `“AmEx 9876”`. For Apple Pay Cash cards, the display name is `“Apple Pay Cash”`. However, there is no standard format for the display name’s content.

To protect the user’s privacy, Apple Pay sets the display name only after the user authorizes the purchase. You can safely access this property as soon as the system calls your delegate’s [paymentAuthorizationController(\_:didAuthorizePayment:completion:)](../pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md) method.

## See Also

### Getting the payment method’s attributes

- [type](type.md): A value that represents the card’s type.
- [PKPaymentMethodType](../pkpaymentmethodtype.md): The type of cards available in Apple Pay.
- [network](network.md): A string, suitable for display, that describes the payment network for the card.
- [billingAddress](billingaddress.md): The user’s billing address.

# displayName (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A string, suitable for display, that describes the card.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * displayName;
```

<a id="Discussion"></a>

## Discussion

The display name enables a user to recognize a particular card from a list of cards.

For debit and credit cards, the display name often includes the card brand and the last four digits of the credit card number when available, for example: `“Visa 1233”`, `“MasterCard 5678”`, `“AmEx 9876”`. For Apple Pay Cash cards, the display name is `“Apple Pay Cash”`. However, there is no standard format for the display name’s content.

To protect the user’s privacy, Apple Pay sets the display name only after the user authorizes the purchase. You can safely access this property as soon as the system calls your delegate’s [paymentAuthorizationController:didAuthorizePayment:completion:](../pkpaymentauthorizationcontrollerdelegate/paymentauthorizationcontroller%28__didauthorizepayment_completion_%29.md) method.

## See Also

### Getting the payment method’s attributes

- [type](type.md): A value that represents the card’s type.
- [PKPaymentMethodType](../pkpaymentmethodtype.md): The type of cards available in Apple Pay.
- [network](network.md): A string, suitable for display, that describes the payment network for the card.
- [billingAddress](billingaddress.md): The user’s billing address.
