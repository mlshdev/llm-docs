> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentmethodtype](https://developer.apple.com/documentation/intents/inpaymentmethodtype)

# INPaymentMethodType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Constants describing the available payment options.

## Declaration

```swift
enum INPaymentMethodType
```

## Topics

### Constants

- [INPaymentMethodType.unknown](inpaymentmethodtype/unknown.md): An unspecified payment type.
- [INPaymentMethodType.checking](inpaymentmethodtype/checking.md): Payment from a checking account.
- [INPaymentMethodType.savings](inpaymentmethodtype/savings.md): Payment from a savings account.
- [INPaymentMethodType.brokerage](inpaymentmethodtype/brokerage.md): Payment from a brokerage account.
- [INPaymentMethodType.debit](inpaymentmethodtype/debit.md): Payment using a debit card.
- [INPaymentMethodType.credit](inpaymentmethodtype/credit.md): Payment using a credit card.
- [INPaymentMethodType.prepaid](inpaymentmethodtype/prepaid.md): Payment using a prepaid card or account.
- [INPaymentMethodType.store](inpaymentmethodtype/store.md): Payment using a store charge card.
- [INPaymentMethodType.applePay](inpaymentmethodtype/applepay.md): Payment using Apple Pay.

### Initializers

- [init(rawValue:)](inpaymentmethodtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Payment Information

- [type](inpaymentmethod/type.md): The type of account used as the source of funds.
- [name](inpaymentmethod/name.md): The name of this payment type.
- [identificationHint](inpaymentmethod/identificationhint.md): The hint for identifying the payment method.
- [icon](inpaymentmethod/icon.md): The image representing the payment method.

# INPaymentMethodType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Constants describing the available payment options.

## Declaration

```objectivec
enum INPaymentMethodType : NSInteger;
```

## Topics

### Constants

- [INPaymentMethodTypeUnknown](inpaymentmethodtype/unknown.md): An unspecified payment type.
- [INPaymentMethodTypeChecking](inpaymentmethodtype/checking.md): Payment from a checking account.
- [INPaymentMethodTypeSavings](inpaymentmethodtype/savings.md): Payment from a savings account.
- [INPaymentMethodTypeBrokerage](inpaymentmethodtype/brokerage.md): Payment from a brokerage account.
- [INPaymentMethodTypeDebit](inpaymentmethodtype/debit.md): Payment using a debit card.
- [INPaymentMethodTypeCredit](inpaymentmethodtype/credit.md): Payment using a credit card.
- [INPaymentMethodTypePrepaid](inpaymentmethodtype/prepaid.md): Payment using a prepaid card or account.
- [INPaymentMethodTypeStore](inpaymentmethodtype/store.md): Payment using a store charge card.
- [INPaymentMethodTypeApplePay](inpaymentmethodtype/applepay.md): Payment using Apple Pay.

## See Also

### Getting the Payment Information

- [type](inpaymentmethod/type.md): The type of account used as the source of funds.
- [name](inpaymentmethod/name.md): The name of this payment type.
- [identificationHint](inpaymentmethod/identificationhint.md): The hint for identifying the payment method.
- [icon](inpaymentmethod/icon.md): The image representing the payment method.
