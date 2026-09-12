> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnpostaladdress](https://developer.apple.com/documentation/contacts/cnpostaladdress)

# CNPostalAddress (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable representation of the postal address for a contact.

## Declaration

```swift
class CNPostalAddress
```

<a id="overview"></a>

## Overview

`CNPostalAddress` is a thread-safe class.

## Topics

### Getting the Parts of a Postal Address

- [street](cnpostaladdress/street.md): The street name in a postal address.
- [city](cnpostaladdress/city.md): The city name in a postal address.
- [state](cnpostaladdress/state.md): The state name in a postal address.
- [postalCode](cnpostaladdress/postalcode.md): The postal code in a postal address.
- [country](cnpostaladdress/country.md): The country or region name in a postal address.
- [isoCountryCode](cnpostaladdress/isocountrycode.md): The ISO country code for the country or region in a postal address, using the ISO 3166-1 alpha-2 standard.
- [subAdministrativeArea](cnpostaladdress/subadministrativearea.md): The subadministrative area (such as a county or other region) in a postal address.
- [subLocality](cnpostaladdress/sublocality.md): Additional information associated with the location, typically defined at the city or town level, in a postal address.

### Getting Localized Postal Values

- [localizedString(forKey:)](cnpostaladdress/localizedstring%28forkey_%29.md): Returns the localized name for the property associated with the specified key.
- [CNPostalAddressStreetKey](cnpostaladdressstreetkey.md): The street name of the address.
- [CNPostalAddressCityKey](cnpostaladdresscitykey.md): The city of the address.
- [CNPostalAddressStateKey](cnpostaladdressstatekey.md): The state name of the address.
- [CNPostalAddressPostalCodeKey](cnpostaladdresspostalcodekey.md): The postal code of the address.
- [CNPostalAddressCountryKey](cnpostaladdresscountrykey.md): The country or region name of the address.
- [CNPostalAddressISOCountryCodeKey](cnpostaladdressisocountrycodekey.md): The ISO country code of the address.

### Initializers

- [init(coder:)](cnpostaladdress/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CNMutablePostalAddress](cnmutablepostaladdress.md)

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

- [CNMutablePostalAddress](cnmutablepostaladdress.md): A mutable representation of the postal address for a contact.
- [CNInstantMessageAddress](cninstantmessageaddress.md): An immutable object representing an instant message address for the contact.

# CNPostalAddress (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable representation of the postal address for a contact.

## Declaration

```objectivec
@interface CNPostalAddress : NSObject
```

<a id="overview"></a>

## Overview

`CNPostalAddress` is a thread-safe class.

## Topics

### Getting the Parts of a Postal Address

- [street](cnpostaladdress/street.md): The street name in a postal address.
- [city](cnpostaladdress/city.md): The city name in a postal address.
- [state](cnpostaladdress/state.md): The state name in a postal address.
- [postalCode](cnpostaladdress/postalcode.md): The postal code in a postal address.
- [country](cnpostaladdress/country.md): The country or region name in a postal address.
- [ISOCountryCode](cnpostaladdress/isocountrycode.md): The ISO country code for the country or region in a postal address, using the ISO 3166-1 alpha-2 standard.
- [subAdministrativeArea](cnpostaladdress/subadministrativearea.md): The subadministrative area (such as a county or other region) in a postal address.
- [subLocality](cnpostaladdress/sublocality.md): Additional information associated with the location, typically defined at the city or town level, in a postal address.

### Getting Localized Postal Values

- [localizedStringForKey:](cnpostaladdress/localizedstring%28forkey_%29.md): Returns the localized name for the property associated with the specified key.
- [CNPostalAddressStreetKey](cnpostaladdressstreetkey.md): The street name of the address.
- [CNPostalAddressCityKey](cnpostaladdresscitykey.md): The city of the address.
- [CNPostalAddressStateKey](cnpostaladdressstatekey.md): The state name of the address.
- [CNPostalAddressPostalCodeKey](cnpostaladdresspostalcodekey.md): The postal code of the address.
- [CNPostalAddressCountryKey](cnpostaladdresscountrykey.md): The country or region name of the address.
- [CNPostalAddressISOCountryCodeKey](cnpostaladdressisocountrycodekey.md): The ISO country code of the address.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CNMutablePostalAddress](cnmutablepostaladdress.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Addresses

- [CNMutablePostalAddress](cnmutablepostaladdress.md): A mutable representation of the postal address for a contact.
- [CNInstantMessageAddress](cninstantmessageaddress.md): An immutable object representing an instant message address for the contact.
