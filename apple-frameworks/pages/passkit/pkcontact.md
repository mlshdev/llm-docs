> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkcontact](https://developer.apple.com/documentation/passkit/pkcontact)

# PKContact (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

An object that encapsulates contact information needed for billing and shipping.

## Declaration

```swift
class PKContact
```

<a id="overview"></a>

## Overview

Instances contain only the information needed for the given transaction. All other properties are set to `nil`.

## Topics

### Contact information

- [emailAddress](pkcontact/emailaddress.md): The contact’s email address, or `nil` if the contact’s email is not needed for the transaction.
- [name](pkcontact/name.md): The contact’s first and last name, or `nil` if the contact’s name is not needed for the transaction.
- [phoneNumber](pkcontact/phonenumber.md): The contact’s telephone number, or `nil` if the contact’s phone number is not needed for the transaction.
- [postalAddress](pkcontact/postaladdress.md): The contact’s full postal address.
- [supplementarySubLocality](pkcontact/supplementarysublocality.md): Deprecated. The contact’s sublocality, or `nil` if the sublocality is not needed for the transaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Working with billing and shipping information

- [billingContact](pkpayment/billingcontact.md): The user-selected billing address for this transaction.
- [shippingContact](pkpayment/shippingcontact.md): The user-selected shipping address for this transaction.
- [shippingMethod](pkpayment/shippingmethod.md): The user-selected shipping method for this transaction.
- [PKShippingMethod](pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.

# PKContact (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

An object that encapsulates contact information needed for billing and shipping.

## Declaration

```objectivec
@interface PKContact : NSObject
```

<a id="overview"></a>

## Overview

Instances contain only the information needed for the given transaction. All other properties are set to `nil`.

## Topics

### Contact information

- [emailAddress](pkcontact/emailaddress.md): The contact’s email address, or `nil` if the contact’s email is not needed for the transaction.
- [name](pkcontact/name.md): The contact’s first and last name, or `nil` if the contact’s name is not needed for the transaction.
- [phoneNumber](pkcontact/phonenumber.md): The contact’s telephone number, or `nil` if the contact’s phone number is not needed for the transaction.
- [postalAddress](pkcontact/postaladdress.md): The contact’s full postal address.
- [supplementarySubLocality](pkcontact/supplementarysublocality.md): Deprecated. The contact’s sublocality, or `nil` if the sublocality is not needed for the transaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Working with billing and shipping information

- [billingContact](pkpayment/billingcontact.md): The user-selected billing address for this transaction.
- [shippingContact](pkpayment/shippingcontact.md): The user-selected shipping address for this transaction.
- [shippingMethod](pkpayment/shippingmethod.md): The user-selected shipping method for this transaction.
- [PKShippingMethod](pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.
