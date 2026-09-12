> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/contact-keys](https://developer.apple.com/documentation/contacts/contact-keys)

# Contact Keys

**Interface languages:** Swift, Objective-C

**Framework:** Contacts  
**Kind:** API Collection

Specify contact-related properties during fetch operations.

## Topics

### Contact Identification

- [CNContactIdentifierKey](cncontactidentifierkey.md): The contact’s unique identifier.
- [CNContactTypeKey](cncontacttypekey.md): The type of contact.
- [CNContactPropertyAttribute](cncontactpropertyattribute.md): The contact’s name component property key.

### Name

- [CNContactNamePrefixKey](cncontactnameprefixkey.md): The prefix for the contact’s name.
- [CNContactGivenNameKey](cncontactgivennamekey.md): The contact’s given name.
- [CNContactMiddleNameKey](cncontactmiddlenamekey.md): The contact’s middle name.
- [CNContactFamilyNameKey](cncontactfamilynamekey.md): The contact’s family name.
- [CNContactPreviousFamilyNameKey](cncontactpreviousfamilynamekey.md): The contact’s previous family name.
- [CNContactNameSuffixKey](cncontactnamesuffixkey.md): The contact’s name suffix.
- [CNContactNicknameKey](cncontactnicknamekey.md): The contact’s nickname.
- [CNContactPhoneticGivenNameKey](cncontactphoneticgivennamekey.md): The phonetic spelling of the contact’s given name.
- [CNContactPhoneticMiddleNameKey](cncontactphoneticmiddlenamekey.md): The phonetic spelling of the contact’s middle name.
- [CNContactPhoneticFamilyNameKey](cncontactphoneticfamilynamekey.md): The phonetic spelling of the contact’s family name.

### Work

- [CNContactJobTitleKey](cncontactjobtitlekey.md): The contact’s job title.
- [CNContactDepartmentNameKey](cncontactdepartmentnamekey.md): The contact’s department name.
- [CNContactOrganizationNameKey](cncontactorganizationnamekey.md): The contact’s organization name.
- [CNContactPhoneticOrganizationNameKey](cncontactphoneticorganizationnamekey.md): The phonetic spelling of the contact’s organization name.

### Addresses

- [CNContactPostalAddressesKey](cncontactpostaladdresseskey.md): The postal addresses of the contact.
- [CNContactEmailAddressesKey](cncontactemailaddresseskey.md): The email addresses of the contact.
- [CNContactUrlAddressesKey](cncontacturladdresseskey.md): The URL addresses of the contact.
- [CNContactInstantMessageAddressesKey](cncontactinstantmessageaddresseskey.md): The instant message addresses of the contact.

### Phone

- [CNContactPhoneNumbersKey](cncontactphonenumberskey.md): A phone numbers of a contact.

### Social Profiles

- [CNContactSocialProfilesKey](cncontactsocialprofileskey.md): A social profiles of a contact.

### Birthday

- [CNContactBirthdayKey](cncontactbirthdaykey.md): The birthday of a contact.
- [CNContactNonGregorianBirthdayKey](cncontactnongregorianbirthdaykey.md): The non-Gregorian birthday of the contact.
- [CNContactDatesKey](cncontactdateskey.md): Dates associated with a contact.

### Notes

- [CNContactNoteKey](cncontactnotekey.md): A note associated with a contact.
- [com.apple.developer.contacts.notes](../bundleresources/entitlements/com.apple.developer.contacts.notes.md): A Boolean value that indicates whether the app may access the notes in contact entries.

### Images

- [CNContactImageDataKey](cncontactimagedatakey.md): Image data for a contact.
- [CNContactThumbnailImageDataKey](cncontactthumbnailimagedatakey.md): Thumbnail data for a contact.
- [CNContactImageDataAvailableKey](cncontactimagedataavailablekey.md): Image data availability for a contact.

### Relationships

- [CNContactRelationsKey](cncontactrelationskey.md): The relationships of the contact.

### Groups and Containers

- [CNGroupNameKey](cngroupnamekey.md): The name of the group.
- [CNGroupIdentifierKey](cngroupidentifierkey.md): The identifier of the group.
- [CNContainerNameKey](cncontainernamekey.md): The name of the container.
- [CNContainerTypeKey](cncontainertypekey.md): The type of the container.

### Instant Messaging Keys

- [CNInstantMessageAddressServiceKey](cninstantmessageaddressservicekey.md): Instant message address service key.
- [CNInstantMessageAddressUsernameKey](cninstantmessageaddressusernamekey.md): Instant message address username key.

### Social Profile Keys

- [CNSocialProfileServiceKey](cnsocialprofileservicekey.md): The social profile service.
- [CNSocialProfileURLStringKey](cnsocialprofileurlstringkey.md): The social profile URL.
- [CNSocialProfileUsernameKey](cnsocialprofileusernamekey.md): The social profile user name.
- [CNSocialProfileUserIdentifierKey](cnsocialprofileuseridentifierkey.md): The social profile user identifier.

### Key Descriptors

- [CNKeyDescriptor](cnkeydescriptor.md): This protocol is reserved for Contacts framework usage.

## See Also

### Contact data

- [CNContact](cncontact.md): An immutable object that stores information about a single contact, such as the contact’s first name, phone numbers, and addresses.
- [CNMutableContact](cnmutablecontact.md): A mutable object that stores information about a single contact, such as the contact’s first name, phone numbers, and addresses.
- [Data Objects](data-objects.md): Access contact-related data, such as the user’s postal address and phone number.
