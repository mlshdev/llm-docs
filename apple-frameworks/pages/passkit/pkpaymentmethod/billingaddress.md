> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentmethod/billingaddress](https://developer.apple.com/documentation/passkit/pkpaymentmethod/billingaddress)

# billingAddress (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The user’s billing address.

## Declaration

```swift
@NSCopying var billingAddress: CNContact? { get }
```

<a id="Discussion"></a>

## Discussion

For privacy, PassKit partially redacts the user’s billing address. PassKit populates this property only when the app doesn’t request a shipping address.

## See Also

### Getting the payment method’s attributes

- [type](type.md): A value that represents the card’s type.
- [PKPaymentMethodType](../pkpaymentmethodtype.md): The type of cards available in Apple Pay.
- [displayName](displayname.md): A string, suitable for display, that describes the card.
- [network](network.md): A string, suitable for display, that describes the payment network for the card.

# billingAddress (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The user’s billing address.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CNContact * billingAddress;
```

<a id="Discussion"></a>

## Discussion

For privacy, PassKit partially redacts the user’s billing address. PassKit populates this property only when the app doesn’t request a shipping address.

## See Also

### Getting the payment method’s attributes

- [type](type.md): A value that represents the card’s type.
- [PKPaymentMethodType](../pkpaymentmethodtype.md): The type of cards available in Apple Pay.
- [displayName](displayname.md): A string, suitable for display, that describes the card.
- [network](network.md): A string, suitable for display, that describes the payment network for the card.
