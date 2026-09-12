> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassstyle](https://developer.apple.com/documentation/passkit/pkaddpaymentpassstyle)

# PKAddPaymentPassStyle (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

The type of payment pass.

## Declaration

```swift
enum PKAddPaymentPassStyle
```

## Topics

### Payment pass styles

- [PKAddPaymentPassStyle.access](pkaddpaymentpassstyle/access.md): A pass that authorizes the user to access a location or resource.
- [PKAddPaymentPassStyle.payment](pkaddpaymentpassstyle/payment.md): A pass used by a customer for purchasing.

### Initializers

- [init(rawValue:)](pkaddpaymentpassstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Payment pass request properties

- [cardholderName](pkaddpaymentpassrequestconfiguration/cardholdername.md): The name of the person as shown on the card.
- [encryptionScheme](pkaddpaymentpassrequestconfiguration/encryptionscheme.md): The encryption scheme to be used in this request.
- [PKEncryptionScheme](pkencryptionscheme.md): Encryption schemes.
- [localizedDescription](pkaddpaymentpassrequestconfiguration/localizeddescription.md): A short description of the card.
- [primaryAccountSuffix](pkaddpaymentpassrequestconfiguration/primaryaccountsuffix.md): The last four or five digits of the card’s number.
- [cardDetails](pkaddpaymentpassrequestconfiguration/carddetails.md): An array of labeled values that describe a card.
- [PKLabeledValue](pklabeledvalue.md): An object that can represent a detail about a payment card or other item.
- [productIdentifiers](pkaddpaymentpassrequestconfiguration/productidentifiers.md)
- [style](pkaddpaymentpassrequestconfiguration/style.md): A value that indicates whether a pass is for access or for payment use.

# PKAddPaymentPassStyle (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

The type of payment pass.

## Declaration

```objectivec
enum PKAddPaymentPassStyle : NSInteger;
```

## Topics

### Payment pass styles

- [PKAddPaymentPassStyleAccess](pkaddpaymentpassstyle/access.md): A pass that authorizes the user to access a location or resource.
- [PKAddPaymentPassStylePayment](pkaddpaymentpassstyle/payment.md): A pass used by a customer for purchasing.

## See Also

### Payment pass request properties

- [cardholderName](pkaddpaymentpassrequestconfiguration/cardholdername.md): The name of the person as shown on the card.
- [encryptionScheme](pkaddpaymentpassrequestconfiguration/encryptionscheme.md): The encryption scheme to be used in this request.
- [PKEncryptionScheme](pkencryptionscheme.md): Encryption schemes.
- [localizedDescription](pkaddpaymentpassrequestconfiguration/localizeddescription.md): A short description of the card.
- [primaryAccountSuffix](pkaddpaymentpassrequestconfiguration/primaryaccountsuffix.md): The last four or five digits of the card’s number.
- [cardDetails](pkaddpaymentpassrequestconfiguration/carddetails.md): An array of labeled values that describe a card.
- [PKLabeledValue](pklabeledvalue.md): An object that can represent a detail about a payment card or other item.
- [productIdentifiers](pkaddpaymentpassrequestconfiguration/productidentifiers.md)
- [style](pkaddpaymentpassrequestconfiguration/style.md): A value that indicates whether a pass is for access or for payment use.
