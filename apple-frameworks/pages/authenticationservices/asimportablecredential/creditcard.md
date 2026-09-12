> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential/creditcard](https://developer.apple.com/documentation/authenticationservices/asimportablecredential/creditcard)

# ASImportableCredential.CreditCard

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A type to represent credit card information.

## Declaration

```swift
struct CreditCard
```

<a id="overview"></a>

## Overview

This type is a representation of `CreditCard` as defined in the Credential Exchange Format (CXF) specification.

## Topics

### Accessing credit card properties

- [number](creditcard/number.md): The card number.
- [fullName](creditcard/fullname.md): The full name of the card owner.
- [cardType](creditcard/cardtype.md): The card type, if any.
- [verificationNumber](creditcard/verificationnumber.md): The verification number, such as the CVC code.
- [expiryDate](creditcard/expirydate.md): The expiration date, if any, in MM/DD format.
- [validFrom](creditcard/validfrom.md): The date from which the card is valid, if any.

### Initializers

- [init(number:fullName:cardType:verificationNumber:pin:expiryDate:validFrom:)](creditcard/init%28number_fullname_cardtype_verificationnumber_pin_expirydate_validfrom_%29.md)

### Instance Properties

- [pin](creditcard/pin.md): Optional: The PIN number.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identity credential types

- [ASImportableCredential.creditCard(\_:)](creditcard%28__%29.md): A credit card credential.
