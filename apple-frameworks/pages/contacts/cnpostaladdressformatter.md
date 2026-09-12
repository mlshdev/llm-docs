> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnpostaladdressformatter](https://developer.apple.com/documentation/contacts/cnpostaladdressformatter)

# CNPostalAddressFormatter (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An object that you use to format a contact’s postal addresses.

## Declaration

```swift
class CNPostalAddressFormatter
```

<a id="overview"></a>

## Overview

A `CNPostalAddressFormatter` object handles international formatting of postal addresses. It is recommended that you create an instance of this class when formatting many postal addresses, and use the instance methods; otherwise use the class methods.

## Topics

### Generating a formatted attributed string

- [attributedString(from:withDefaultAttributes:)](cnpostaladdressformatter/attributedstring%28from_withdefaultattributes_%29.md): Returns a formatted postal address as an attributed string.
- [attributedString(from:style:withDefaultAttributes:)](cnpostaladdressformatter/attributedstring%28from_style_withdefaultattributes_%29.md): Returns a postal address as an attributed string and formatted for the specified style.
- [CNPostalAddressPropertyAttribute](cnpostaladdresspropertyattribute.md): An attribute that identifies the purpose of a range of characters in an attributed string.
- [CNPostalAddressLocalizedPropertyNameAttribute](cnpostaladdresslocalizedpropertynameattribute.md): An attribute that identifies the localized property of postal address.

### Generating a formatted string

- [string(from:)](cnpostaladdressformatter/string%28from_%29.md): Returns a formatted postal address.
- [string(from:style:)](cnpostaladdressformatter/string%28from_style_%29.md): Returns a postal address as a string and formatted for the specified style.

### Specifying the formatting style

- [style](cnpostaladdressformatter/style.md): The style to apply when formatting strings.
- [CNPostalAddressFormatterStyle](cnpostaladdressformatterstyle.md): Constants for postal formatting styles.

### Getting the postal attribute keys

- [CNPostalAddressCityKey](cnpostaladdresscitykey.md): The city of the address.
- [CNPostalAddressCountryKey](cnpostaladdresscountrykey.md): The country or region name of the address.
- [CNPostalAddressISOCountryCodeKey](cnpostaladdressisocountrycodekey.md): The ISO country code of the address.
- [CNPostalAddressPostalCodeKey](cnpostaladdresspostalcodekey.md): The postal code of the address.
- [CNPostalAddressStateKey](cnpostaladdressstatekey.md): The state name of the address.
- [CNPostalAddressStreetKey](cnpostaladdressstreetkey.md): The street name of the address.
- [CNPostalAddressSubAdministrativeAreaKey](cnpostaladdresssubadministrativeareakey.md): The subadministrative area of the address.
- [CNPostalAddressSubLocalityKey](cnpostaladdresssublocalitykey.md): The sublocality of the address.

## Relationships

### Inherits From

- [Formatter](../foundation/formatter.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Formatters

- [CNContactFormatter](cncontactformatter.md): An object that you use to format contact information before displaying it to the user.
- [CNContactVCardSerialization](cncontactvcardserialization.md): An object you use to convert to and from a vCard representation of the user’s contacts.
- [CNContactsUserDefaults](cncontactsuserdefaults.md): An object that defines the default options to use when displaying contacts.

# CNPostalAddressFormatter (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An object that you use to format a contact’s postal addresses.

## Declaration

```objectivec
@interface CNPostalAddressFormatter : NSFormatter
```

<a id="overview"></a>

## Overview

A `CNPostalAddressFormatter` object handles international formatting of postal addresses. It is recommended that you create an instance of this class when formatting many postal addresses, and use the instance methods; otherwise use the class methods.

## Topics

### Generating a formatted attributed string

- [attributedStringFromPostalAddress:withDefaultAttributes:](cnpostaladdressformatter/attributedstring%28from_withdefaultattributes_%29.md): Returns a formatted postal address as an attributed string.
- [attributedStringFromPostalAddress:style:withDefaultAttributes:](cnpostaladdressformatter/attributedstring%28from_style_withdefaultattributes_%29.md): Returns a postal address as an attributed string and formatted for the specified style.
- [CNPostalAddressPropertyAttribute](cnpostaladdresspropertyattribute.md): An attribute that identifies the purpose of a range of characters in an attributed string.
- [CNPostalAddressLocalizedPropertyNameAttribute](cnpostaladdresslocalizedpropertynameattribute.md): An attribute that identifies the localized property of postal address.

### Generating a formatted string

- [stringFromPostalAddress:](cnpostaladdressformatter/string%28from_%29.md): Returns a formatted postal address.
- [stringFromPostalAddress:style:](cnpostaladdressformatter/string%28from_style_%29.md): Returns a postal address as a string and formatted for the specified style.

### Specifying the formatting style

- [style](cnpostaladdressformatter/style.md): The style to apply when formatting strings.
- [CNPostalAddressFormatterStyle](cnpostaladdressformatterstyle.md): Constants for postal formatting styles.

### Getting the postal attribute keys

- [CNPostalAddressCityKey](cnpostaladdresscitykey.md): The city of the address.
- [CNPostalAddressCountryKey](cnpostaladdresscountrykey.md): The country or region name of the address.
- [CNPostalAddressISOCountryCodeKey](cnpostaladdressisocountrycodekey.md): The ISO country code of the address.
- [CNPostalAddressPostalCodeKey](cnpostaladdresspostalcodekey.md): The postal code of the address.
- [CNPostalAddressStateKey](cnpostaladdressstatekey.md): The state name of the address.
- [CNPostalAddressStreetKey](cnpostaladdressstreetkey.md): The street name of the address.
- [CNPostalAddressSubAdministrativeAreaKey](cnpostaladdresssubadministrativeareakey.md): The subadministrative area of the address.
- [CNPostalAddressSubLocalityKey](cnpostaladdresssublocalitykey.md): The sublocality of the address.

## Relationships

### Inherits From

- [NSFormatter](../foundation/formatter.md)

## See Also

### Formatters

- [CNContactFormatter](cncontactformatter.md): An object that you use to format contact information before displaying it to the user.
- [CNContactVCardSerialization](cncontactvcardserialization.md): An object you use to convert to and from a vCard representation of the user’s contacts.
- [CNContactsUserDefaults](cncontactsuserdefaults.md): An object that defines the default options to use when displaying contacts.
