> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnmutablecontact](https://developer.apple.com/documentation/contacts/cnmutablecontact)

# CNMutableContact (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A mutable object that stores information about a single contact, such as the contact’s first name, phone numbers, and addresses.

## Declaration

```swift
class CNMutableContact
```

<a id="overview"></a>

## Overview

`CNMutableContact` objects are not a thread-safe class. To access the contact information in a thread-safe manner, use a [CNContact](cncontact.md) object instead.

You may modify only those properties whose values you fetched from the contacts database. When fetching a contact, you specify which properties you want to retrieve from the database. The contact store then populates the properties of a [CNContact](cncontact.md) object with those values. After creating a mutable copy of that object, you can modify only those properties for which a value exists. If you attempt to access a property that is not available, the `CNMutableContact` object throws a [CNContactPropertyNotFetchedExceptionName](cncontactpropertynotfetchedexceptionname.md) exception.

To remove the value for a property, set string and array properties to empty, and set all other properties to `nil`.

## Topics

### Setting the Identity of the Contact

- [contactType](cnmutablecontact/contacttype.md): An enum identifying the contact type.

### Setting Name Information

- [namePrefix](cnmutablecontact/nameprefix.md): The name prefix of the contact.
- [givenName](cnmutablecontact/givenname.md): The given name of the contact.
- [middleName](cnmutablecontact/middlename.md): The middle name of the contact.
- [familyName](cnmutablecontact/familyname.md): The family name of the contact.
- [previousFamilyName](cnmutablecontact/previousfamilyname.md): The previous family name of the contact.
- [nameSuffix](cnmutablecontact/namesuffix.md): The name suffix of the contact.
- [nickname](cnmutablecontact/nickname.md): The nickname of the contact.
- [phoneticGivenName](cnmutablecontact/phoneticgivenname.md): The phonetic given name of the contact.
- [phoneticMiddleName](cnmutablecontact/phoneticmiddlename.md): The phonetic middle name of the contact.
- [phoneticFamilyName](cnmutablecontact/phoneticfamilyname.md): The phonetic family name of the contact.

### Setting Work Information

- [jobTitle](cnmutablecontact/jobtitle.md): The contact’s job title.
- [departmentName](cnmutablecontact/departmentname.md): The name of the department associated with the contact.
- [organizationName](cnmutablecontact/organizationname.md): The name of the organization associated with the contact.
- [phoneticOrganizationName](cnmutablecontact/phoneticorganizationname.md): The phonetic name of the organization associated with the contact.

### Setting Addresses

- [postalAddresses](cnmutablecontact/postaladdresses.md): An array of labeled postal addresses for a contact.
- [emailAddresses](cnmutablecontact/emailaddresses.md): An array of labeled email addresses for the contact.
- [urlAddresses](cnmutablecontact/urladdresses.md): An array of labeled URL addresses for a contact.

### Setting Phone Information

- [phoneNumbers](cnmutablecontact/phonenumbers.md): An array of labeled phone numbers for a contact.

### Setting Social Profiles

- [socialProfiles](cnmutablecontact/socialprofiles.md): An array of labeled social profiles for a contact.

### Setting Birthday Information

- [dates](cnmutablecontact/dates.md): An array containing labeled Gregorian dates.
- [nonGregorianBirthday](cnmutablecontact/nongregorianbirthday.md): A date component for the non-Gregorian birthday of the contact.
- [birthday](cnmutablecontact/birthday.md): A date component for the Gregorian birthday of the contact.

### Setting Notes

- [note](cnmutablecontact/note.md): A string containing notes for the contact.

### Setting Images

- [imageData](cnmutablecontact/imagedata.md): The profile picture of a contact.

### Relating Other Information to the Contact

- [contactRelations](cnmutablecontact/contactrelations.md): An array of labeled contact relations for the contact.
- [instantMessageAddresses](cnmutablecontact/instantmessageaddresses.md): An array of labeled IM addresses for the contact.

### Instance Properties

- [id](cnmutablecontact/id.md)

## Relationships

### Inherits From

- [CNContact](cncontact.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSItemProviderReading](../foundation/nsitemproviderreading.md)
- [NSItemProviderWriting](../foundation/nsitemproviderwriting.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Contact data

- [CNContact](cncontact.md): An immutable object that stores information about a single contact, such as the contact’s first name, phone numbers, and addresses.
- [Data Objects](data-objects.md): Access contact-related data, such as the user’s postal address and phone number.
- [Contact Keys](contact-keys.md): Specify contact-related properties during fetch operations.

# CNMutableContact (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A mutable object that stores information about a single contact, such as the contact’s first name, phone numbers, and addresses.

## Declaration

```objectivec
@interface CNMutableContact : CNContact
```

<a id="overview"></a>

## Overview

`CNMutableContact` objects are not a thread-safe class. To access the contact information in a thread-safe manner, use a [CNContact](cncontact.md) object instead.

You may modify only those properties whose values you fetched from the contacts database. When fetching a contact, you specify which properties you want to retrieve from the database. The contact store then populates the properties of a [CNContact](cncontact.md) object with those values. After creating a mutable copy of that object, you can modify only those properties for which a value exists. If you attempt to access a property that is not available, the `CNMutableContact` object throws a [CNContactPropertyNotFetchedExceptionName](cncontactpropertynotfetchedexceptionname.md) exception.

To remove the value for a property, set string and array properties to empty, and set all other properties to `nil`.

## Topics

### Setting the Identity of the Contact

- [contactType](cnmutablecontact/contacttype.md): An enum identifying the contact type.

### Setting Name Information

- [namePrefix](cnmutablecontact/nameprefix.md): The name prefix of the contact.
- [givenName](cnmutablecontact/givenname.md): The given name of the contact.
- [middleName](cnmutablecontact/middlename.md): The middle name of the contact.
- [familyName](cnmutablecontact/familyname.md): The family name of the contact.
- [previousFamilyName](cnmutablecontact/previousfamilyname.md): The previous family name of the contact.
- [nameSuffix](cnmutablecontact/namesuffix.md): The name suffix of the contact.
- [nickname](cnmutablecontact/nickname.md): The nickname of the contact.
- [phoneticGivenName](cnmutablecontact/phoneticgivenname.md): The phonetic given name of the contact.
- [phoneticMiddleName](cnmutablecontact/phoneticmiddlename.md): The phonetic middle name of the contact.
- [phoneticFamilyName](cnmutablecontact/phoneticfamilyname.md): The phonetic family name of the contact.

### Setting Work Information

- [jobTitle](cnmutablecontact/jobtitle.md): The contact’s job title.
- [departmentName](cnmutablecontact/departmentname.md): The name of the department associated with the contact.
- [organizationName](cnmutablecontact/organizationname.md): The name of the organization associated with the contact.
- [phoneticOrganizationName](cnmutablecontact/phoneticorganizationname.md): The phonetic name of the organization associated with the contact.

### Setting Addresses

- [postalAddresses](cnmutablecontact/postaladdresses.md): An array of labeled postal addresses for a contact.
- [emailAddresses](cnmutablecontact/emailaddresses.md): An array of labeled email addresses for the contact.
- [urlAddresses](cnmutablecontact/urladdresses.md): An array of labeled URL addresses for a contact.

### Setting Phone Information

- [phoneNumbers](cnmutablecontact/phonenumbers.md): An array of labeled phone numbers for a contact.

### Setting Social Profiles

- [socialProfiles](cnmutablecontact/socialprofiles.md): An array of labeled social profiles for a contact.

### Setting Birthday Information

- [dates](cnmutablecontact/dates.md): An array containing labeled Gregorian dates.
- [nonGregorianBirthday](cnmutablecontact/nongregorianbirthday.md): A date component for the non-Gregorian birthday of the contact.
- [birthday](cnmutablecontact/birthday.md): A date component for the Gregorian birthday of the contact.

### Setting Notes

- [note](cnmutablecontact/note.md): A string containing notes for the contact.

### Setting Images

- [imageData](cnmutablecontact/imagedata.md): The profile picture of a contact.

### Relating Other Information to the Contact

- [contactRelations](cnmutablecontact/contactrelations.md): An array of labeled contact relations for the contact.
- [instantMessageAddresses](cnmutablecontact/instantmessageaddresses.md): An array of labeled IM addresses for the contact.

## Relationships

### Inherits From

- [CNContact](cncontact.md)

## See Also

### Contact data

- [CNContact](cncontact.md): An immutable object that stores information about a single contact, such as the contact’s first name, phone numbers, and addresses.
- [Data Objects](data-objects.md): Access contact-related data, such as the user’s postal address and phone number.
- [Contact Keys](contact-keys.md): Specify contact-related properties during fetch operations.
