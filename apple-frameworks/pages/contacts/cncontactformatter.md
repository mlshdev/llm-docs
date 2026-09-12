> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactformatter](https://developer.apple.com/documentation/contacts/cncontactformatter)

# CNContactFormatter (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An object that you use to format contact information before displaying it to the user.

## Declaration

```swift
class CNContactFormatter
```

<a id="overview"></a>

## Overview

A `CNContactFormatter` object handles international ordering and delimiting for the contact name components. When formatting many contacts, create an instance of this class and use the instance methods; otherwise use the class methods.

## Topics

### Creating a formatted attributed string

- [attributedString(from:defaultAttributes:)](cncontactformatter/attributedstring%28from_defaultattributes_%29.md): Formats the contact name as an attributed string.
- [attributedString(from:style:defaultAttributes:)](cncontactformatter/attributedstring%28from_style_defaultattributes_%29.md): Formats the contact name as an attributed string.

### Creating a formatted string

- [string(from:)](cncontactformatter/string%28from_%29.md): Formats the contact name.
- [string(from:style:)](cncontactformatter/string%28from_style_%29.md): Returns the contact name, formatted with the specified formatter.

### Specifying the formatting style

- [style](cncontactformatter/style.md): The formatting style for the contact name.
- [CNContactFormatterStyle](cncontactformatterstyle.md): The formatting styles for contact names.

### Getting a descriptor

- [descriptorForRequiredKeys(for:)](cncontactformatter/descriptorforrequiredkeys%28for_%29.md): Returns the required key descriptor for the specified formatting style of the contact.
- [descriptorForRequiredKeysForDelimiter](cncontactformatter/descriptorforrequiredkeysfordelimiter.md): Returns the required key descriptor for the name delimiter.
- [descriptorForRequiredKeysForNameOrder](cncontactformatter/descriptorforrequiredkeysfornameorder.md): Returns the required key descriptor for the display name order.

### Getting format information

- [delimiter(for:)](cncontactformatter/delimiter%28for_%29.md): Returns the delimiter to use between name components.
- [nameOrder(for:)](cncontactformatter/nameorder%28for_%29.md): Returns the display name order.
- [CNContactDisplayNameOrder](cncontactdisplaynameorder.md): The formatting orders for contact names component.

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
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Formatters

- [CNPostalAddressFormatter](cnpostaladdressformatter.md): An object that you use to format a contact’s postal addresses.
- [CNContactVCardSerialization](cncontactvcardserialization.md): An object you use to convert to and from a vCard representation of the user’s contacts.
- [CNContactsUserDefaults](cncontactsuserdefaults.md): An object that defines the default options to use when displaying contacts.

# CNContactFormatter (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An object that you use to format contact information before displaying it to the user.

## Declaration

```objectivec
@interface CNContactFormatter : NSFormatter
```

<a id="overview"></a>

## Overview

A `CNContactFormatter` object handles international ordering and delimiting for the contact name components. When formatting many contacts, create an instance of this class and use the instance methods; otherwise use the class methods.

## Topics

### Creating a formatted attributed string

- [attributedStringFromContact:defaultAttributes:](cncontactformatter/attributedstring%28from_defaultattributes_%29.md): Formats the contact name as an attributed string.
- [attributedStringFromContact:style:defaultAttributes:](cncontactformatter/attributedstring%28from_style_defaultattributes_%29.md): Formats the contact name as an attributed string.

### Creating a formatted string

- [stringFromContact:](cncontactformatter/string%28from_%29.md): Formats the contact name.
- [stringFromContact:style:](cncontactformatter/string%28from_style_%29.md): Returns the contact name, formatted with the specified formatter.

### Specifying the formatting style

- [style](cncontactformatter/style.md): The formatting style for the contact name.
- [CNContactFormatterStyle](cncontactformatterstyle.md): The formatting styles for contact names.

### Getting a descriptor

- [descriptorForRequiredKeysForStyle:](cncontactformatter/descriptorforrequiredkeys%28for_%29.md): Returns the required key descriptor for the specified formatting style of the contact.
- [descriptorForRequiredKeysForDelimiter](cncontactformatter/descriptorforrequiredkeysfordelimiter.md): Returns the required key descriptor for the name delimiter.
- [descriptorForRequiredKeysForNameOrder](cncontactformatter/descriptorforrequiredkeysfornameorder.md): Returns the required key descriptor for the display name order.

### Getting format information

- [delimiterForContact:](cncontactformatter/delimiter%28for_%29.md): Returns the delimiter to use between name components.
- [nameOrderForContact:](cncontactformatter/nameorder%28for_%29.md): Returns the display name order.
- [CNContactDisplayNameOrder](cncontactdisplaynameorder.md): The formatting orders for contact names component.

## Relationships

### Inherits From

- [NSFormatter](../foundation/formatter.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Formatters

- [CNPostalAddressFormatter](cnpostaladdressformatter.md): An object that you use to format a contact’s postal addresses.
- [CNContactVCardSerialization](cncontactvcardserialization.md): An object you use to convert to and from a vCard representation of the user’s contacts.
- [CNContactsUserDefaults](cncontactsuserdefaults.md): An object that defines the default options to use when displaying contacts.
