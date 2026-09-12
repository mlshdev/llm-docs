> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact](https://developer.apple.com/documentation/contacts/cncontact)

# CNContact (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object that stores information about a single contact, such as the contact’s first name, phone numbers, and addresses.

## Declaration

```swift
class CNContact
```

<a id="overview"></a>

## Overview

A `CNContact` object stores an immutable copy of a contact’s information, so you cannot change the information in this object directly. Contact objects are thread-safe, so you may access them from any thread of your app.

To modify a contact’s information, call the [mutableCopy()](../objectivec/nsobject-swift.class/mutablecopy%28%29.md) method to obtain a [CNMutableContact](cnmutablecontact.md) object with the same information. After modifying the mutable contact, save your changes back to the contacts database using the [CNContactStore](cncontactstore.md) object.

Every contact in the contacts database has a unique ID, which you access using the [identifier](cncontact/identifier.md) property. The mutable and immutable versions of the same contact have the same identifier.

## Topics

### Identifying the Contact

- [identifier](cncontact/identifier.md): A value that uniquely identifies a contact on the device.
- [contactType](cncontact/contacttype.md): An enum identifying the contact type.
- [CNContactType](cncontacttype.md): The types a contact can be.

### Getting Name Information

- [namePrefix](cncontact/nameprefix.md): The name prefix of the contact.
- [givenName](cncontact/givenname.md): The given name of the contact.
- [middleName](cncontact/middlename.md): The middle name of the contact.
- [familyName](cncontact/familyname.md): The family name of the contact.
- [previousFamilyName](cncontact/previousfamilyname.md): A string for the previous family name of the contact.
- [nameSuffix](cncontact/namesuffix.md): The name suffix of the contact.
- [nickname](cncontact/nickname.md): The nickname of the contact.
- [phoneticGivenName](cncontact/phoneticgivenname.md): The phonetic given name of the contact.
- [phoneticMiddleName](cncontact/phoneticmiddlename.md): The phonetic middle name of the contact.
- [phoneticFamilyName](cncontact/phoneticfamilyname.md): A string for the phonetic family name of the contact.

### Getting Work Information

- [jobTitle](cncontact/jobtitle.md): The contact’s job title.
- [departmentName](cncontact/departmentname.md): The name of the department associated with the contact.
- [organizationName](cncontact/organizationname.md): The name of the organization associated with the contact.
- [phoneticOrganizationName](cncontact/phoneticorganizationname.md): The phonetic name of the organization associated with the contact.

### Getting Addresses

- [postalAddresses](cncontact/postaladdresses.md): An array of labeled postal addresses for a contact.
- [emailAddresses](cncontact/emailaddresses.md): An array of labeled email addresses for the contact.
- [urlAddresses](cncontact/urladdresses.md): An array of labeled URL addresses for a contact.

### Getting Phone Information

- [phoneNumbers](cncontact/phonenumbers.md): An array of labeled phone numbers for a contact.

### Getting Social Profiles

- [socialProfiles](cncontact/socialprofiles.md): An array of labeled social profiles for a contact.

### Getting Birthday Information

- [birthday](cncontact/birthday.md): A date component for the Gregorian birthday of the contact.
- [nonGregorianBirthday](cncontact/nongregorianbirthday.md): A date component for the non-Gregorian birthday of the contact.
- [dates](cncontact/dates.md): An array containing labeled Gregorian dates.

### Getting Notes

- [note](cncontact/note.md): A string containing notes for the contact.

### Getting Contact Images

- [imageData](cncontact/imagedata.md): The profile picture of a contact.
- [thumbnailImageData](cncontact/thumbnailimagedata.md): The thumbnail version of the contact’s profile picture.
- [imageDataAvailable](cncontact/imagedataavailable.md): A Boolean indicating whether a contact has a profile picture.

### Getting Related Information

- [contactRelations](cncontact/contactrelations.md): An array of labeled relations for the contact.
- [instantMessageAddresses](cncontact/instantmessageaddresses.md): An array of labeled IM addresses for the contact.

### Localizing Contact Data

- [localizedString(forKey:)](cncontact/localizedstring%28forkey_%29.md): Returns a string containing the localized contact property name.

### Comparing Contacts

- [descriptorForAllComparatorKeys()](cncontact/descriptorforallcomparatorkeys%28%29.md): Fetches all the keys required for the contact sort comparator.
- [comparator(forNameSortOrder:)](cncontact/comparator%28fornamesortorder_%29.md): Returns a comparator to sort contacts with the specified order.
- [isUnifiedWithContact(withIdentifier:)](cncontact/isunifiedwithcontact%28withidentifier_%29.md): Returns a Boolean indicating whether the current contact is a unified contact and includes a contact with the specified identifier.
- [CNContactSortOrder](cncontactsortorder.md): Indicates the sorting order for contacts.

### Checking the Availability of Data

- [isKeyAvailable(\_:)](cncontact/iskeyavailable%28__%29.md): Determines whether the contact property value for the specified key is fetched.
- [areKeysAvailable(\_:)](cncontact/arekeysavailable%28__%29.md): Determines whether all contact property values for the specified keys are fetched.

### Getting Search Predicates

Predicates to match contacts. You can only use these predicates with [CNContactStore](cncontactstore.md) and [CNContactFetchRequest](cncontactfetchrequest.md).

- [predicateForContacts(matchingName:)](cncontact/predicateforcontacts%28matchingname_%29.md): Returns a predicate to find the contacts matching the specified name.
- [predicateForContacts(withIdentifiers:)](cncontact/predicateforcontacts%28withidentifiers_%29.md): Returns a predicate to find the contacts matching the specified identifiers.
- [predicateForContactsInGroup(withIdentifier:)](cncontact/predicateforcontactsingroup%28withidentifier_%29.md): Returns a predicate to find the contacts that are members in the specified group.
- [predicateForContactsInContainer(withIdentifier:)](cncontact/predicateforcontactsincontainer%28withidentifier_%29.md): Returns a predicate to find the contacts in the specified container.
- [predicateForContacts(matching:)](cncontact/predicateforcontacts%28matching_%29.md): Returns a predicate to find the contacts whose phone number matches the specified value.
- [predicateForContacts(matchingEmailAddress:)](cncontact/predicateforcontacts%28matchingemailaddress_%29.md): Returns a predicate to find the contacts whose email address matches the specified value.

### Initializers

- [init(coder:)](cncontact/init%28coder_%29.md)

### Instance Properties

- [debugDescription](cncontact/debugdescription.md)
- [description](cncontact/description.md)
- [shortDebugDescription](cncontact/shortdebugdescription.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CNMutableContact](cnmutablecontact.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
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

- [CNMutableContact](cnmutablecontact.md): A mutable object that stores information about a single contact, such as the contact’s first name, phone numbers, and addresses.
- [Data Objects](data-objects.md): Access contact-related data, such as the user’s postal address and phone number.
- [Contact Keys](contact-keys.md): Specify contact-related properties during fetch operations.

# CNContact (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object that stores information about a single contact, such as the contact’s first name, phone numbers, and addresses.

## Declaration

```objectivec
@interface CNContact : NSObject
```

<a id="overview"></a>

## Overview

A `CNContact` object stores an immutable copy of a contact’s information, so you cannot change the information in this object directly. Contact objects are thread-safe, so you may access them from any thread of your app.

To modify a contact’s information, call the [mutableCopy](../objectivec/nsobject-swift.class/mutablecopy%28%29.md) method to obtain a [CNMutableContact](cnmutablecontact.md) object with the same information. After modifying the mutable contact, save your changes back to the contacts database using the [CNContactStore](cncontactstore.md) object.

Every contact in the contacts database has a unique ID, which you access using the [identifier](cncontact/identifier.md) property. The mutable and immutable versions of the same contact have the same identifier.

## Topics

### Identifying the Contact

- [identifier](cncontact/identifier.md): A value that uniquely identifies a contact on the device.
- [contactType](cncontact/contacttype.md): An enum identifying the contact type.
- [CNContactType](cncontacttype.md): The types a contact can be.

### Getting Name Information

- [namePrefix](cncontact/nameprefix.md): The name prefix of the contact.
- [givenName](cncontact/givenname.md): The given name of the contact.
- [middleName](cncontact/middlename.md): The middle name of the contact.
- [familyName](cncontact/familyname.md): The family name of the contact.
- [previousFamilyName](cncontact/previousfamilyname.md): A string for the previous family name of the contact.
- [nameSuffix](cncontact/namesuffix.md): The name suffix of the contact.
- [nickname](cncontact/nickname.md): The nickname of the contact.
- [phoneticGivenName](cncontact/phoneticgivenname.md): The phonetic given name of the contact.
- [phoneticMiddleName](cncontact/phoneticmiddlename.md): The phonetic middle name of the contact.
- [phoneticFamilyName](cncontact/phoneticfamilyname.md): A string for the phonetic family name of the contact.

### Getting Work Information

- [jobTitle](cncontact/jobtitle.md): The contact’s job title.
- [departmentName](cncontact/departmentname.md): The name of the department associated with the contact.
- [organizationName](cncontact/organizationname.md): The name of the organization associated with the contact.
- [phoneticOrganizationName](cncontact/phoneticorganizationname.md): The phonetic name of the organization associated with the contact.

### Getting Addresses

- [postalAddresses](cncontact/postaladdresses.md): An array of labeled postal addresses for a contact.
- [emailAddresses](cncontact/emailaddresses.md): An array of labeled email addresses for the contact.
- [urlAddresses](cncontact/urladdresses.md): An array of labeled URL addresses for a contact.

### Getting Phone Information

- [phoneNumbers](cncontact/phonenumbers.md): An array of labeled phone numbers for a contact.

### Getting Social Profiles

- [socialProfiles](cncontact/socialprofiles.md): An array of labeled social profiles for a contact.

### Getting Birthday Information

- [birthday](cncontact/birthday.md): A date component for the Gregorian birthday of the contact.
- [nonGregorianBirthday](cncontact/nongregorianbirthday.md): A date component for the non-Gregorian birthday of the contact.
- [dates](cncontact/dates.md): An array containing labeled Gregorian dates.

### Getting Notes

- [note](cncontact/note.md): A string containing notes for the contact.

### Getting Contact Images

- [imageData](cncontact/imagedata.md): The profile picture of a contact.
- [thumbnailImageData](cncontact/thumbnailimagedata.md): The thumbnail version of the contact’s profile picture.
- [imageDataAvailable](cncontact/imagedataavailable.md): A Boolean indicating whether a contact has a profile picture.

### Getting Related Information

- [contactRelations](cncontact/contactrelations.md): An array of labeled relations for the contact.
- [instantMessageAddresses](cncontact/instantmessageaddresses.md): An array of labeled IM addresses for the contact.

### Localizing Contact Data

- [localizedStringForKey:](cncontact/localizedstring%28forkey_%29.md): Returns a string containing the localized contact property name.

### Comparing Contacts

- [descriptorForAllComparatorKeys](cncontact/descriptorforallcomparatorkeys%28%29.md): Fetches all the keys required for the contact sort comparator.
- [comparatorForNameSortOrder:](cncontact/comparator%28fornamesortorder_%29.md): Returns a comparator to sort contacts with the specified order.
- [isUnifiedWithContactWithIdentifier:](cncontact/isunifiedwithcontact%28withidentifier_%29.md): Returns a Boolean indicating whether the current contact is a unified contact and includes a contact with the specified identifier.
- [CNContactSortOrder](cncontactsortorder.md): Indicates the sorting order for contacts.

### Checking the Availability of Data

- [isKeyAvailable:](cncontact/iskeyavailable%28__%29.md): Determines whether the contact property value for the specified key is fetched.
- [areKeysAvailable:](cncontact/arekeysavailable%28__%29.md): Determines whether all contact property values for the specified keys are fetched.

### Getting Search Predicates

Predicates to match contacts. You can only use these predicates with [CNContactStore](cncontactstore.md) and [CNContactFetchRequest](cncontactfetchrequest.md).

- [predicateForContactsMatchingName:](cncontact/predicateforcontacts%28matchingname_%29.md): Returns a predicate to find the contacts matching the specified name.
- [predicateForContactsWithIdentifiers:](cncontact/predicateforcontacts%28withidentifiers_%29.md): Returns a predicate to find the contacts matching the specified identifiers.
- [predicateForContactsInGroupWithIdentifier:](cncontact/predicateforcontactsingroup%28withidentifier_%29.md): Returns a predicate to find the contacts that are members in the specified group.
- [predicateForContactsInContainerWithIdentifier:](cncontact/predicateforcontactsincontainer%28withidentifier_%29.md): Returns a predicate to find the contacts in the specified container.
- [predicateForContactsMatchingPhoneNumber:](cncontact/predicateforcontacts%28matching_%29.md): Returns a predicate to find the contacts whose phone number matches the specified value.
- [predicateForContactsMatchingEmailAddress:](cncontact/predicateforcontacts%28matchingemailaddress_%29.md): Returns a predicate to find the contacts whose email address matches the specified value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CNMutableContact](cnmutablecontact.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSItemProviderReading](../foundation/nsitemproviderreading.md)
- [NSItemProviderWriting](../foundation/nsitemproviderwriting.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Contact data

- [CNMutableContact](cnmutablecontact.md): A mutable object that stores information about a single contact, such as the contact’s first name, phone numbers, and addresses.
- [Data Objects](data-objects.md): Access contact-related data, such as the user’s postal address and phone number.
- [Contact Keys](contact-keys.md): Specify contact-related properties during fetch operations.
