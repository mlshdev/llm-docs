> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnmutablepostaladdress](https://developer.apple.com/documentation/contacts/cnmutablepostaladdress)

# CNMutablePostalAddress (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A mutable representation of the postal address for a contact.

## Declaration

```swift
class CNMutablePostalAddress
```

<a id="overview"></a>

## Overview

`CNMutablePostalAddress` is not a thread-safe class. To remove properties when saving a mutable postal address, set string properties to empty values.

## Topics

### Modifying the Parts of a Postal Address

- [street](cnmutablepostaladdress/street.md): The street name of the address.
- [city](cnmutablepostaladdress/city.md): The city name of the address.
- [state](cnmutablepostaladdress/state.md): The state name of the address.
- [postalCode](cnmutablepostaladdress/postalcode.md): The postal code of the address.
- [country](cnmutablepostaladdress/country.md): The country or region name of the address.
- [isoCountryCode](cnmutablepostaladdress/isocountrycode.md): The ISO country code, using the ISO 3166-1 alpha-2 standard.
- [subAdministrativeArea](cnmutablepostaladdress/subadministrativearea.md): The subadministrative area (such as a county or other region) in a postal address.
- [subLocality](cnmutablepostaladdress/sublocality.md): Additional information associated with the location, typically defined at the city or town level, in a postal address.

## Relationships

### Inherits From

- [CNPostalAddress](cnpostaladdress.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Addresses

- [CNPostalAddress](cnpostaladdress.md): An immutable representation of the postal address for a contact.
- [CNInstantMessageAddress](cninstantmessageaddress.md): An immutable object representing an instant message address for the contact.

# CNMutablePostalAddress (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A mutable representation of the postal address for a contact.

## Declaration

```objectivec
@interface CNMutablePostalAddress : CNPostalAddress
```

<a id="overview"></a>

## Overview

`CNMutablePostalAddress` is not a thread-safe class. To remove properties when saving a mutable postal address, set string properties to empty values.

## Topics

### Modifying the Parts of a Postal Address

- [street](cnmutablepostaladdress/street.md): The street name of the address.
- [city](cnmutablepostaladdress/city.md): The city name of the address.
- [state](cnmutablepostaladdress/state.md): The state name of the address.
- [postalCode](cnmutablepostaladdress/postalcode.md): The postal code of the address.
- [country](cnmutablepostaladdress/country.md): The country or region name of the address.
- [ISOCountryCode](cnmutablepostaladdress/isocountrycode.md): The ISO country code, using the ISO 3166-1 alpha-2 standard.
- [subAdministrativeArea](cnmutablepostaladdress/subadministrativearea.md): The subadministrative area (such as a county or other region) in a postal address.
- [subLocality](cnmutablepostaladdress/sublocality.md): Additional information associated with the location, typically defined at the city or town level, in a postal address.

## Relationships

### Inherits From

- [CNPostalAddress](cnpostaladdress.md)

## See Also

### Addresses

- [CNPostalAddress](cnpostaladdress.md): An immutable representation of the postal address for a contact.
- [CNInstantMessageAddress](cninstantmessageaddress.md): An immutable object representing an instant message address for the contact.
