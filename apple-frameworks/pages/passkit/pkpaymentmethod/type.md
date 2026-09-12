> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentmethod/type](https://developer.apple.com/documentation/passkit/pkpaymentmethod/type)

# type (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A value that represents the card’s type.

## Declaration

```swift
var type: PKPaymentMethodType { get }
```

<a id="Discussion"></a>

## Discussion

For a list of possible card types, see [PKPaymentMethodType](../pkpaymentmethodtype.md).

> **Note**

>  Some older cards might not have card type information. Those cards have the value [PKPaymentMethodType.unknown](../pkpaymentmethodtype/unknown.md).

## See Also

### Getting the payment method’s attributes

- [PKPaymentMethodType](../pkpaymentmethodtype.md): The type of cards available in Apple Pay.
- [displayName](displayname.md): A string, suitable for display, that describes the card.
- [network](network.md): A string, suitable for display, that describes the payment network for the card.
- [billingAddress](billingaddress.md): The user’s billing address.

# type (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A value that represents the card’s type.

## Declaration

```objectivec
@property (nonatomic, readonly) PKPaymentMethodType type;
```

<a id="Discussion"></a>

## Discussion

For a list of possible card types, see [PKPaymentMethodType](../pkpaymentmethodtype.md).

> **Note**

>  Some older cards might not have card type information. Those cards have the value [PKPaymentMethodTypeUnknown](../pkpaymentmethodtype/unknown.md).

## See Also

### Getting the payment method’s attributes

- [PKPaymentMethodType](../pkpaymentmethodtype.md): The type of cards available in Apple Pay.
- [displayName](displayname.md): A string, suitable for display, that describes the card.
- [network](network.md): A string, suitable for display, that describes the payment network for the card.
- [billingAddress](billingaddress.md): The user’s billing address.
