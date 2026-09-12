> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassrequestconfiguration/primaryaccountsuffix](https://developer.apple.com/documentation/passkit/pkaddpaymentpassrequestconfiguration/primaryaccountsuffix)

# primaryAccountSuffix (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

The last four or five digits of the card’s number.

## Declaration

```swift
var primaryAccountSuffix: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The system prepends four dots to indicate that this is a partial number.

> **Note**

>  Do not use the complete primary account number from the card. Use the last four or five digits only.

## See Also

### Payment pass request properties

- [cardholderName](cardholdername.md): The name of the person as shown on the card.
- [encryptionScheme](encryptionscheme.md): The encryption scheme to be used in this request.
- [PKEncryptionScheme](../pkencryptionscheme.md): Encryption schemes.
- [localizedDescription](localizeddescription.md): A short description of the card.
- [cardDetails](carddetails.md): An array of labeled values that describe a card.
- [PKLabeledValue](../pklabeledvalue.md): An object that can represent a detail about a payment card or other item.
- [productIdentifiers](productidentifiers.md)
- [style](style.md): A value that indicates whether a pass is for access or for payment use.
- [PKAddPaymentPassStyle](../pkaddpaymentpassstyle.md): The type of payment pass.

# primaryAccountSuffix (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

The last four or five digits of the card’s number.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * primaryAccountSuffix;
```

<a id="Discussion"></a>

## Discussion

The system prepends four dots to indicate that this is a partial number.

> **Note**

>  Do not use the complete primary account number from the card. Use the last four or five digits only.

## See Also

### Payment pass request properties

- [cardholderName](cardholdername.md): The name of the person as shown on the card.
- [encryptionScheme](encryptionscheme.md): The encryption scheme to be used in this request.
- [PKEncryptionScheme](../pkencryptionscheme.md): Encryption schemes.
- [localizedDescription](localizeddescription.md): A short description of the card.
- [cardDetails](carddetails.md): An array of labeled values that describe a card.
- [PKLabeledValue](../pklabeledvalue.md): An object that can represent a detail about a payment card or other item.
- [productIdentifiers](productidentifiers.md)
- [style](style.md): A value that indicates whether a pass is for access or for payment use.
- [PKAddPaymentPassStyle](../pkaddpaymentpassstyle.md): The type of payment pass.
