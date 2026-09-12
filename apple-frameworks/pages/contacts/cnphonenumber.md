> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnphonenumber](https://developer.apple.com/documentation/contacts/cnphonenumber)

# CNPhoneNumber (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object representing a phone number for a contact.

## Declaration

```swift
class CNPhoneNumber
```

<a id="overview"></a>

## Overview

`CNPhoneNumber` objects are thread-safe, and you may access their properties from any thread of your app.

## Topics

### Creating a Phone Number Object

- [init(stringValue:)](cnphonenumber/init%28stringvalue_%29.md): Returns a new phone number object initialized with the specified phone number string.

### Getting the Phone Number

- [stringValue](cnphonenumber/stringvalue.md): The string value of the phone number.

### Getting Phone-Related Keys

- [CNContactPhoneNumbersKey](cncontactphonenumberskey.md): A phone numbers of a contact.

### Deprecated

- [init()](cnphonenumber/init%28%29.md): Deprecated.
- [new()](cnphonenumber/new%28%29.md): Deprecated.

### Initializers

- [init(coder:)](cnphonenumber/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

# CNPhoneNumber (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object representing a phone number for a contact.

## Declaration

```objectivec
@interface CNPhoneNumber : NSObject
```

<a id="overview"></a>

## Overview

`CNPhoneNumber` objects are thread-safe, and you may access their properties from any thread of your app.

## Topics

### Creating a Phone Number Object

- [initWithStringValue:](cnphonenumber/init%28stringvalue_%29.md): Returns a new phone number object initialized with the specified phone number string.
- [phoneNumberWithStringValue:](cnphonenumber/phonenumberwithstringvalue_.md): Returns a new phone number object initialized with the specified phone number string.

### Getting the Phone Number

- [stringValue](cnphonenumber/stringvalue.md): The string value of the phone number.

### Getting Phone-Related Keys

- [CNContactPhoneNumbersKey](cncontactphonenumberskey.md): A phone numbers of a contact.

### Deprecated

- [init](cnphonenumber/init%28%29.md): Deprecated.
- [new](cnphonenumber/new%28%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
