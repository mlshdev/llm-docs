> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentmethodtype](https://developer.apple.com/documentation/passkit/pkpaymentmethodtype)

# PKPaymentMethodType (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The type of cards available in Apple Pay.

## Declaration

```swift
enum PKPaymentMethodType
```

## Topics

### Payment Method Type Constants

- [PKPaymentMethodType.unknown](pkpaymentmethodtype/unknown.md): The card’s type is unknown.
- [PKPaymentMethodType.debit](pkpaymentmethodtype/debit.md): A debit card.
- [PKPaymentMethodType.eMoney](pkpaymentmethodtype/emoney.md): An electronic money card.
- [PKPaymentMethodType.credit](pkpaymentmethodtype/credit.md): A credit card.
- [PKPaymentMethodType.prepaid](pkpaymentmethodtype/prepaid.md): A prepaid card.
- [PKPaymentMethodType.store](pkpaymentmethodtype/store.md): A store card.

### Initializers

- [init(rawValue:)](pkpaymentmethodtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the payment method’s attributes

- [type](pkpaymentmethod/type.md): A value that represents the card’s type.
- [displayName](pkpaymentmethod/displayname.md): A string, suitable for display, that describes the card.
- [network](pkpaymentmethod/network.md): A string, suitable for display, that describes the payment network for the card.
- [billingAddress](pkpaymentmethod/billingaddress.md): The user’s billing address.

# PKPaymentMethodType (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The type of cards available in Apple Pay.

## Declaration

```objectivec
enum PKPaymentMethodType : NSUInteger;
```

## Topics

### Payment Method Type Constants

- [PKPaymentMethodTypeUnknown](pkpaymentmethodtype/unknown.md): The card’s type is unknown.
- [PKPaymentMethodTypeDebit](pkpaymentmethodtype/debit.md): A debit card.
- [PKPaymentMethodTypeEMoney](pkpaymentmethodtype/emoney.md): An electronic money card.
- [PKPaymentMethodTypeCredit](pkpaymentmethodtype/credit.md): A credit card.
- [PKPaymentMethodTypePrepaid](pkpaymentmethodtype/prepaid.md): A prepaid card.
- [PKPaymentMethodTypeStore](pkpaymentmethodtype/store.md): A store card.

## See Also

### Getting the payment method’s attributes

- [type](pkpaymentmethod/type.md): A value that represents the card’s type.
- [displayName](pkpaymentmethod/displayname.md): A string, suitable for display, that describes the card.
- [network](pkpaymentmethod/network.md): A string, suitable for display, that describes the payment network for the card.
- [billingAddress](pkpaymentmethod/billingaddress.md): The user’s billing address.
