> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/default-person-properties](https://developer.apple.com/documentation/addressbook/default-person-properties)

# Default Person Properties (Swift)

**Framework:** Address Book  
**Kind:** API Collection

The properties that a person record contains by default.

<a id="overview"></a>

## Overview

You can add your own properties with the `ABPerson` method [addPropertiesAndTypes(\_:)](abperson/addpropertiesandtypes%28__%29.md).

## Topics

### Constants

- [kABFirstNameProperty](kabfirstnameproperty.md): First name. Type: [kABStringProperty](kabstringproperty.md).
- [kABLastNameProperty](kablastnameproperty.md): Last name. Type: [kABStringProperty](kabstringproperty.md).
- [kABFirstNamePhoneticProperty](kabfirstnamephoneticproperty.md): Phonetic representation of the first name. Type: [kABStringProperty](kabstringproperty.md).
- [kABLastNamePhoneticProperty](kablastnamephoneticproperty.md): Phonetic representation of the last name. Type: [kABStringProperty](kabstringproperty.md).
- [kABNicknameProperty](kabnicknameproperty.md): Nickname. Type: [kABStringProperty](kabstringproperty.md).
- [kABMaidenNameProperty](kabmaidennameproperty.md): Maiden name. Type: [kABStringProperty](kabstringproperty.md).
- [kABBirthdayProperty](kabbirthdayproperty.md): Birth date. Type: [kABDateProperty](kabdateproperty.md).
- [kABBirthdayComponentsProperty](kabbirthdaycomponentsproperty.md): Birth date as date components. Type: [kABDateComponentsProperty](kabdatecomponentsproperty.md).
- [kABOrganizationProperty](kaborganizationproperty.md): Company name. Type: [kABStringProperty](kabstringproperty.md).
- [kABJobTitleProperty](kabjobtitleproperty.md): Job title. Type: [kABStringProperty](kabstringproperty.md).
- [kABHomePageProperty](kabhomepageproperty.md): Deprecated. Home web page. Type: [kABStringProperty](kabstringproperty.md).
- [kABURLsProperty](kaburlsproperty.md): Web pages. Type: [kABMultiStringProperty](kabmultistringproperty.md).
- [kABCalendarURIsProperty](kabcalendarurisproperty.md): Calendar URIs. Type: [kABMultiStringProperty](kabmultistringproperty.md).
- [kABEmailProperty](kabemailproperty.md): Email addresses. Type: [kABMultiStringProperty](kabmultistringproperty.md).
- [kABAddressProperty](kabaddressproperty.md): Street addresses. Type: [kABMultiDictionaryProperty](kabmultidictionaryproperty.md).
- [kABOtherDatesProperty](kabotherdatesproperty.md): Dates associated with a person. Type: [kABMultiDateProperty](kabmultidateproperty.md).
- [kABOtherDateComponentsProperty](kabotherdatecomponentsproperty.md): Dates associated with a person, as date components. Type: [kABMultiDateComponentsProperty](kabmultidatecomponentsproperty.md).
- [kABRelatedNamesProperty](kabrelatednamesproperty.md): Names of people related to a person.
- [kABDepartmentProperty](kabdepartmentproperty.md): Department name. Type: [kABStringProperty](kabstringproperty.md).
- [kABPersonFlags](kabpersonflags.md): Property that specifies the name ordering and configuration of a record in the Address Book application.
- [kABPhoneProperty](kabphoneproperty.md): Generic phone number.
- [kABInstantMessageProperty](kabinstantmessageproperty.md): Instant messaging ID.
- [kABNoteProperty](kabnoteproperty.md): Notes. Type: [kABStringProperty](kabstringproperty.md).
- [kABSocialProfileProperty](kabsocialprofileproperty.md): Social network profile.
- [kABMiddleNameProperty](kabmiddlenameproperty.md): Middle name. Type: [kABStringProperty](kabstringproperty.md).
- [kABMiddleNamePhoneticProperty](kabmiddlenamephoneticproperty.md): Phonetic representation of the middle name. Type: [kABStringProperty](kabstringproperty.md).
- [kABTitleProperty](kabtitleproperty.md): Title, such as “Mr.,” “Mrs.,” “General,” “Cardinal,” or “Lord.” Type: [kABStringProperty](kabstringproperty.md).
- [kABSuffixProperty](kabsuffixproperty.md): Suffix, such as “Sr.,” “Jr.,” “III.,” or “Esq.” Type: [kABStringProperty](kabstringproperty.md).

## See Also

### Data Type Constants

- [Address Keys](address-keys.md): The keys used to specify the different fields in a `kABAddressProperty`.
- [Default Group Properties](default-group-properties.md): The properties that a group record contains by default. Developers can add their own properties with the `ABGroup` method [addPropertiesAndTypes(\_:)](abgroup/addpropertiesandtypes%28__%29.md)
- [Default Multivalue List Labels](default-multivalue-list-labels.md): The default labels contained in the Address Book database for specifying different values in a multivalue list. Users can also add their own labels.
- [Generic Multivalue List Labels](generic-multivalue-list-labels.md): The generic labels contained in the Address Book database for specifying different values in a multivalue list.
- [Multivalue Property](multivalue-property.md): A multivalue property type.
- [Default Record Properties](default-record-properties.md): Properties common to all types of records.
- [Property Types](property_types.md): The possible [ABPropertyType](abpropertytype.md) types for `ABRecord` properties:

# Default Person Properties (Objective-C)

**Framework:** Address Book  
**Kind:** API Collection

The properties that a person record contains by default.

<a id="overview"></a>

## Overview

You can add your own properties with the `ABPerson` method [addPropertiesAndTypes:](abperson/addpropertiesandtypes%28__%29.md).

## Topics

### Constants

- [kABFirstNameProperty](kabfirstnameproperty.md): First name. Type: [kABStringProperty](kabstringproperty.md).
- [kABLastNameProperty](kablastnameproperty.md): Last name. Type: [kABStringProperty](kabstringproperty.md).
- [kABFirstNamePhoneticProperty](kabfirstnamephoneticproperty.md): Phonetic representation of the first name. Type: [kABStringProperty](kabstringproperty.md).
- [kABLastNamePhoneticProperty](kablastnamephoneticproperty.md): Phonetic representation of the last name. Type: [kABStringProperty](kabstringproperty.md).
- [kABNicknameProperty](kabnicknameproperty.md): Nickname. Type: [kABStringProperty](kabstringproperty.md).
- [kABMaidenNameProperty](kabmaidennameproperty.md): Maiden name. Type: [kABStringProperty](kabstringproperty.md).
- [kABBirthdayProperty](kabbirthdayproperty.md): Birth date. Type: [kABDateProperty](kabdateproperty.md).
- [kABBirthdayComponentsProperty](kabbirthdaycomponentsproperty.md): Birth date as date components. Type: [kABDateComponentsProperty](kabdatecomponentsproperty.md).
- [kABOrganizationProperty](kaborganizationproperty.md): Company name. Type: [kABStringProperty](kabstringproperty.md).
- [kABJobTitleProperty](kabjobtitleproperty.md): Job title. Type: [kABStringProperty](kabstringproperty.md).
- [kABHomePageProperty](kabhomepageproperty.md): Deprecated. Home web page. Type: [kABStringProperty](kabstringproperty.md).
- [kABURLsProperty](kaburlsproperty.md): Web pages. Type: [kABMultiStringProperty](kabmultistringproperty.md).
- [kABCalendarURIsProperty](kabcalendarurisproperty.md): Calendar URIs. Type: [kABMultiStringProperty](kabmultistringproperty.md).
- [kABEmailProperty](kabemailproperty.md): Email addresses. Type: [kABMultiStringProperty](kabmultistringproperty.md).
- [kABAddressProperty](kabaddressproperty.md): Street addresses. Type: [kABMultiDictionaryProperty](kabmultidictionaryproperty.md).
- [kABOtherDatesProperty](kabotherdatesproperty.md): Dates associated with a person. Type: [kABMultiDateProperty](kabmultidateproperty.md).
- [kABOtherDateComponentsProperty](kabotherdatecomponentsproperty.md): Dates associated with a person, as date components. Type: [kABMultiDateComponentsProperty](kabmultidatecomponentsproperty.md).
- [kABRelatedNamesProperty](kabrelatednamesproperty.md): Names of people related to a person.
- [kABDepartmentProperty](kabdepartmentproperty.md): Department name. Type: [kABStringProperty](kabstringproperty.md).
- [kABPersonFlags](kabpersonflags.md): Property that specifies the name ordering and configuration of a record in the Address Book application.
- [kABPhoneProperty](kabphoneproperty.md): Generic phone number.
- [kABInstantMessageProperty](kabinstantmessageproperty.md): Instant messaging ID.
- [kABAIMInstantProperty](kabaiminstantproperty.md): Deprecated. AOL instant messaging ID. Type: [kABMultiStringProperty](kabmultistringproperty.md).
- [kABJabberInstantProperty](kabjabberinstantproperty.md): Deprecated. Jabber instant messaging ID. Type: [kABMultiStringProperty](kabmultistringproperty.md).
- [kABMSNInstantProperty](kabmsninstantproperty.md): Deprecated. MSN instant messaging ID. Type: [kABMultiStringProperty](kabmultistringproperty.md).
- [kABYahooInstantProperty](kabyahooinstantproperty.md): Deprecated. Yahoo instant messaging ID. Type: [kABMultiStringProperty](kabmultistringproperty.md).
- [kABICQInstantProperty](kabicqinstantproperty.md): Deprecated. ICQ instant messaging ID. Type: [kABMultiStringProperty](kabmultistringproperty.md).
- [kABNoteProperty](kabnoteproperty.md): Notes. Type: [kABStringProperty](kabstringproperty.md).
- [kABSocialProfileProperty](kabsocialprofileproperty.md): Social network profile.
- [kABMiddleNameProperty](kabmiddlenameproperty.md): Middle name. Type: [kABStringProperty](kabstringproperty.md).
- [kABMiddleNamePhoneticProperty](kabmiddlenamephoneticproperty.md): Phonetic representation of the middle name. Type: [kABStringProperty](kabstringproperty.md).
- [kABTitleProperty](kabtitleproperty.md): Title, such as “Mr.,” “Mrs.,” “General,” “Cardinal,” or “Lord.” Type: [kABStringProperty](kabstringproperty.md).
- [kABSuffixProperty](kabsuffixproperty.md): Suffix, such as “Sr.,” “Jr.,” “III.,” or “Esq.” Type: [kABStringProperty](kabstringproperty.md).

## See Also

### Data Type Constants

- [Address Keys](address-keys.md): The keys used to specify the different fields in a `kABAddressProperty`.
- [Default Group Properties](default-group-properties.md): The properties that a group record contains by default. Developers can add their own properties with the `ABGroup` method [addPropertiesAndTypes:](abgroup/addpropertiesandtypes%28__%29.md)
- [Default Multivalue List Labels](default-multivalue-list-labels.md): The default labels contained in the Address Book database for specifying different values in a multivalue list. Users can also add their own labels.
- [Generic Multivalue List Labels](generic-multivalue-list-labels.md): The generic labels contained in the Address Book database for specifying different values in a multivalue list.
- [Multivalue Property](multivalue-property.md): A multivalue property type.
- [Default Record Properties](default-record-properties.md): Properties common to all types of records.
- [Property Types](property_types.md): The possible [ABPropertyType](abpropertytype.md) types for `ABRecord` properties:
