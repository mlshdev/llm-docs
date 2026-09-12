> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassrequestconfiguration/cardholdername](https://developer.apple.com/documentation/passkit/pkaddpaymentpassrequestconfiguration/cardholdername)

# cardholderName (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

The name of the person as shown on the card.

## Declaration

```swift
var cardholderName: String? { get set }
```

## See Also

### Payment pass request properties

- [encryptionScheme](encryptionscheme.md): The encryption scheme to be used in this request.
- [PKEncryptionScheme](../pkencryptionscheme.md): Encryption schemes.
- [localizedDescription](localizeddescription.md): A short description of the card.
- [primaryAccountSuffix](primaryaccountsuffix.md): The last four or five digits of the card’s number.
- [cardDetails](carddetails.md): An array of labeled values that describe a card.
- [PKLabeledValue](../pklabeledvalue.md): An object that can represent a detail about a payment card or other item.
- [productIdentifiers](productidentifiers.md)
- [style](style.md): A value that indicates whether a pass is for access or for payment use.
- [PKAddPaymentPassStyle](../pkaddpaymentpassstyle.md): The type of payment pass.

# cardholderName (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

The name of the person as shown on the card.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * cardholderName;
```

## See Also

### Payment pass request properties

- [encryptionScheme](encryptionscheme.md): The encryption scheme to be used in this request.
- [PKEncryptionScheme](../pkencryptionscheme.md): Encryption schemes.
- [localizedDescription](localizeddescription.md): A short description of the card.
- [primaryAccountSuffix](primaryaccountsuffix.md): The last four or five digits of the card’s number.
- [cardDetails](carddetails.md): An array of labeled values that describe a card.
- [PKLabeledValue](../pklabeledvalue.md): An object that can represent a detail about a payment card or other item.
- [productIdentifiers](productidentifiers.md)
- [style](style.md): A value that indicates whether a pass is for access or for payment use.
- [PKAddPaymentPassStyle](../pkaddpaymentpassstyle.md): The type of payment pass.
