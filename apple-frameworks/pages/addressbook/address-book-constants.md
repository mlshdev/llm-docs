> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/address-book-constants](https://developer.apple.com/documentation/addressbook/address-book-constants)

# Address Book Constants (Swift)

**Framework:** Address Book  
**Kind:** API Collection

Get the constants you use to specify Address Book information.

## Topics

### Data Type Constants

- [Address Keys](address-keys.md): The keys used to specify the different fields in a `kABAddressProperty`.
- [Default Person Properties](default-person-properties.md): The properties that a person record contains by default.
- [Default Group Properties](default-group-properties.md): The properties that a group record contains by default. Developers can add their own properties with the `ABGroup` method [addPropertiesAndTypes(\_:)](abgroup/addpropertiesandtypes%28__%29.md)
- [Default Multivalue List Labels](default-multivalue-list-labels.md): The default labels contained in the Address Book database for specifying different values in a multivalue list. Users can also add their own labels.
- [Generic Multivalue List Labels](generic-multivalue-list-labels.md): The generic labels contained in the Address Book database for specifying different values in a multivalue list.
- [Multivalue Property](multivalue-property.md): A multivalue property type.
- [Default Record Properties](default-record-properties.md): Properties common to all types of records.
- [Property Types](property_types.md): The possible [ABPropertyType](abpropertytype.md) types for `ABRecord` properties:

### Social Media Constants

- [Instant Messaging Keys](instant-messaging-keys.md): The keys used to specify the different fields in a [kABInstantMessageProperty](kabinstantmessageproperty.md) property.
- [Instant Messaging Services](instant-messaging-services.md): The predefined constants are used to identify instant messaging services.
- [Social Profile Services](social-profile-services.md): The predefined constants are used to identify social networking services.

### Errors

- [ABAddressBookErrorDomain](abaddressbookerrordomain.md): Deprecated. Error domain returning errors reported by an address book object.
- [Error Codes](error-codes.md): Errors codes used by the Address Book framework.

### Miscellaneous

- [ABMultipleValueSelection](abmultiplevalueselection.md): The user can select multiple values.
- [ABNoValueSelection](abnovalueselection.md): The user cannot select individual values.
- [ABSingleValueSelection](absinglevalueselection.md): The user can select a single value.
- [kABAlternateBirthdayComponentsProperty](kabalternatebirthdaycomponentsproperty.md): The components that represent a birthday in a non-Gregorian calendar.
- [kABBitsInBitFieldMatch](kabbitsinbitfieldmatch.md): Search for elements that match the bits in ABPersonFlags.
- [kABContainsSubString](kabcontainssubstring.md): Search for elements that contain the value.
- [kABContainsSubStringCaseInsensitive](kabcontainssubstringcaseinsensitive.md): Search for elements that contain the value,ignoring case.
- [kABDefaultNameOrdering](kabdefaultnameordering.md): Default name ordering (whether a person’s first name or last name is displayed first) in the Address Book application.
- [kABDeletedRecords](kabdeletedrecords.md): Records that have been deleted.
- [kABDoesNotContainSubString](kabdoesnotcontainsubstring.md): Search for elements that do not contain the value.
- [kABDoesNotContainSubStringCaseInsensitive](kabdoesnotcontainsubstringcaseinsensitive.md): Search for elements that do not contain the value, ignoring case.
- [kABEqual](kabequal.md): Search for elements that are equal to the value.
- [kABEqualCaseInsensitive](kabequalcaseinsensitive.md): Search for elements that are equal to the value,ignoring case.
- [kABFirstNameFirst](kabfirstnamefirst.md): First name is displayed first in Address Book.
- [kABGreaterThan](kabgreaterthan.md): Search for elements that are greater than thevalue.
- [kABGreaterThanOrEqual](kabgreaterthanorequal.md): Search for elements that are greater than orequal to the value.
- [kABInsertedRecords](kabinsertedrecords.md): Records that have been inserted.
- [kABLastNameFirst](kablastnamefirst.md): Last name is displayed first in Address Book.
- [kABLessThan](kablessthan.md): Search for elements that are less than thevalue.
- [kABLessThanOrEqual](kablessthanorequal.md): Search for elements that are less than or equalto the value.
- [kABMultiValueInvalidIdentifier](kabmultivalueinvalididentifier.md): Invalid multivalue property.
- [kABNameOrderingMask](kabnameorderingmask.md): Used in conjunction with `kABDefaultNameOrdering`, `kABFirstNameFirst`, and `kABLastNameFirst` to determine name ordering.
- [kABNotEqual](kabnotequal.md): Search for elements that are not equal to thevalue.
- [kABNotEqualCaseInsensitive](kabnotequalcaseinsensitive.md): Search for elements that are not equal to the value, ignoring case.
- [kABNotWithinIntervalAroundToday](kabnotwithinintervalaroundtoday.md): Search for elements that are *not* within a time interval (in seconds) forward or backward from today.
- [kABNotWithinIntervalAroundTodayYearless](kabnotwithinintervalaroundtodayyearless.md): Search for elements that are *not* within a time interval (in seconds) forward or backward from this day in any year.
- [kABNotWithinIntervalFromToday](kabnotwithinintervalfromtoday.md): Search for elements that are *not* within a time interval (in seconds) forward from today.
- [kABNotWithinIntervalFromTodayYearless](kabnotwithinintervalfromtodayyearless.md): Search for elements that are *not* within a time interval (in seconds) forward from this day in any year.
- [kABOrganizationPhoneticProperty](kaborganizationphoneticproperty.md): The phonetic representation of an organization name.
- [kABPrefixMatch](kabprefixmatch.md): Search for elements that begin with the value.
- [kABPrefixMatchCaseInsensitive](kabprefixmatchcaseinsensitive.md): Search for elements that begin with the value, ignoring case.
- [kABPropertyInvalidID](kabpropertyinvalidid.md): Indicates an invalid value for a property ID.
- [kABRecordInvalidID](kabrecordinvalidid.md): Records with this ID have not been saved to the Address Book database.
- [kABSearchAnd](kabsearchand.md): Join the search elements together with theAND operand.
- [kABSearchOr](kabsearchor.md): Join the search elements together with theOR operand.
- [kABShowAsCompany](kabshowascompany.md): Record is displayed as a company.
- [kABShowAsMask](kabshowasmask.md): Used in conjunction with `kABShowAsPerson` and `kABShowAsCompany` to determine record configuration.
- [kABShowAsPerson](kabshowasperson.md): Record is displayed as a person.
- [kABShowAsResource](kabshowasresource.md): Record is displayed as a resource.
- [kABShowAsRoom](kabshowasroom.md): Record is displayed as a room.
- [kABSocialProfileServiceTencentWeibo](kabsocialprofileservicetencentweibo.md): The user’s Tencent Weibo profile identifier.
- [kABSocialProfileServiceYelp](kabsocialprofileserviceyelp.md): The user’s Yelp profile identifier.
- [kABSourceTypeSearchableMask](kabsourcetypesearchablemask.md): Indicates that a source is searchable.
- [kABSuffixMatch](kabsuffixmatch.md): Search for elements that end with the value.
- [kABSuffixMatchCaseInsensitive](kabsuffixmatchcaseinsensitive.md): Search for elements that end with the value, ignoring case.
- [kABUpdatedRecords](kabupdatedrecords.md): Records that have been updated.
- [kABWithinIntervalAroundToday](kabwithinintervalaroundtoday.md): Search for elements that are within a time interval (in seconds) forward or backward from today.
- [kABWithinIntervalAroundTodayYearless](kabwithinintervalaroundtodayyearless.md): Search for elements that are within a time interval (in seconds) forward or backward from this day in any year.
- [kABWithinIntervalFromToday](kabwithinintervalfromtoday.md): Search for elements that are within a time interval (in seconds) forward from today.
- [kABWithinIntervalFromTodayYearless](kabwithinintervalfromtodayyearless.md): Search for elements that are within a time interval (in seconds) forward from this day in any year.

### Deprecated

- [kABPersonAddressCityKey](kabpersonaddresscitykey.md): Deprecated. City.
- [kABPersonAddressCountryCodeKey](kabpersonaddresscountrycodekey.md): Deprecated. Country code. The value is an ISO country code.
- [kABPersonAddressCountryKey](kabpersonaddresscountrykey.md): Deprecated. Country or region.
- [kABPersonAddressProperty](kabpersonaddressproperty.md): Deprecated. Identifier for the address multivalue property.
- [kABPersonAddressStateKey](kabpersonaddressstatekey.md): Deprecated. State.
- [kABPersonAddressStreetKey](kabpersonaddressstreetkey.md): Deprecated. Street.
- [kABPersonAddressZIPKey](kabpersonaddresszipkey.md): Deprecated. Zip code.
- [kABPersonAlternateBirthdayCalendarIdentifierKey](kabpersonalternatebirthdaycalendaridentifierkey.md): Deprecated. The associated value is a string representing the calendar identifier for a [CFCalendar](../corefoundation/cfcalendar.md).
- [kABPersonAlternateBirthdayDayKey](kabpersonalternatebirthdaydaykey.md): Deprecated. The associated value is a [CFNumber](../corefoundation/cfnumber.md) of type [CFNumberType.nsIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the day for the birthday.
- [kABPersonAlternateBirthdayEraKey](kabpersonalternatebirthdayerakey.md): Deprecated. The associated value is a [CFNumber](../corefoundation/cfnumber.md) of type [CFNumberType.nsIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the era for the birthday.
- [kABPersonAlternateBirthdayIsLeapMonthKey](kabpersonalternatebirthdayisleapmonthkey.md): Deprecated. The associated value is a [CFNumber](../corefoundation/cfnumber.md) of type [CFNumberType.charType](../corefoundation/cfnumbertype/chartype.md).
- [kABPersonAlternateBirthdayMonthKey](kabpersonalternatebirthdaymonthkey.md): Deprecated. The associated value is a [CFNumber](../corefoundation/cfnumber.md) of type [CFNumberType.nsIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the month for the birthday.
- [kABPersonAlternateBirthdayProperty](kabpersonalternatebirthdayproperty.md): Deprecated. The associated value is a [kABDictionaryPropertyType](kabdictionarypropertytype.md) with keys specified by the other constants listed here.
- [kABPersonAlternateBirthdayYearKey](kabpersonalternatebirthdayyearkey.md): Deprecated. The associated value is a [CFNumber](../corefoundation/cfnumber.md) of type [CFNumberType.nsIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the year for the birthday.
- [kABPersonAnniversaryLabel](kabpersonanniversarylabel.md): Deprecated. Birthdate.
- [kABPersonAssistantLabel](kabpersonassistantlabel.md): Deprecated. Assistant.
- [kABPersonBirthdayProperty](kabpersonbirthdayproperty.md): Deprecated. Birthday. Type: [kABDateTimePropertyType](kabdatetimepropertytype.md).
- [kABPersonBrotherLabel](kabpersonbrotherlabel.md): Deprecated. Brother.
- [kABPersonChildLabel](kabpersonchildlabel.md): Deprecated. Child.
- [kABPersonCreationDateProperty](kabpersoncreationdateproperty.md): Deprecated. Creation date. Type: [kABDateTimePropertyType](kabdatetimepropertytype.md).
- [kABPersonDateProperty](kabpersondateproperty.md): Deprecated. Identifier for the dates multivalue property.
- [kABPersonDepartmentProperty](kabpersondepartmentproperty.md): Deprecated. Department. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonEmailProperty](kabpersonemailproperty.md): Deprecated. Email address. Type: [kABMultiStringPropertyType](kabmultistringpropertytype.md).
- [kABPersonFatherLabel](kabpersonfatherlabel.md): Deprecated. Father.
- [kABPersonFirstNamePhoneticProperty](kabpersonfirstnamephoneticproperty.md): Deprecated. First name phonetic. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonFirstNameProperty](kabpersonfirstnameproperty.md): Deprecated. First name. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonFriendLabel](kabpersonfriendlabel.md): Deprecated. Friend.
- [kABPersonHomePageLabel](kabpersonhomepagelabel.md): Deprecated. Home page.
- [kABPersonImageFormatOriginalSize](kabpersonimageformatoriginalsize.md): The image at its original size and shape.
- [kABPersonImageFormatThumbnail](kabpersonimageformatthumbnail.md): The small square thumbnail.
- [kABPersonInstantMessageProperty](kabpersoninstantmessageproperty.md): Deprecated. Identifier for the instant message multivalue property.
- [kABPersonInstantMessageServiceAIM](kabpersoninstantmessageserviceaim.md): Deprecated. AIM instant message service.
- [kABPersonInstantMessageServiceFacebook](kabpersoninstantmessageservicefacebook.md): Deprecated. Facebook instant message service.
- [kABPersonInstantMessageServiceGaduGadu](kabpersoninstantmessageservicegadugadu.md): Deprecated. Gadu-Gadu instant message service.
- [kABPersonInstantMessageServiceGoogleTalk](kabpersoninstantmessageservicegoogletalk.md): Deprecated. Google Talk instant message service.
- [kABPersonInstantMessageServiceICQ](kabpersoninstantmessageserviceicq.md): Deprecated. ICQ instant message service.
- [kABPersonInstantMessageServiceJabber](kabpersoninstantmessageservicejabber.md): Deprecated. Jabber instant message service.
- [kABPersonInstantMessageServiceKey](kabpersoninstantmessageservicekey.md): Deprecated. Instant message service.
- [kABPersonInstantMessageServiceMSN](kabpersoninstantmessageservicemsn.md): Deprecated. MSN instant message service.
- [kABPersonInstantMessageServiceQQ](kabpersoninstantmessageserviceqq.md): Deprecated. QQ instant message service.
- [kABPersonInstantMessageServiceSkype](kabpersoninstantmessageserviceskype.md): Deprecated. Skype instant message service.
- [kABPersonInstantMessageServiceYahoo](kabpersoninstantmessageserviceyahoo.md): Deprecated. Yahoo instant message service.
- [kABPersonInstantMessageUsernameKey](kabpersoninstantmessageusernamekey.md): Deprecated. Instant message service username.
- [kABPersonJobTitleProperty](kabpersonjobtitleproperty.md): Deprecated. Job title. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonKindOrganization](kabpersonkindorganization.md): Deprecated. Identifies an organization.
- [kABPersonKindPerson](kabpersonkindperson.md): Deprecated. Identifies a person.
- [kABPersonKindProperty](kabpersonkindproperty.md): Deprecated. Identifier for the type property.
- [kABPersonLastNamePhoneticProperty](kabpersonlastnamephoneticproperty.md): Deprecated. Last name phonetic. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonLastNameProperty](kabpersonlastnameproperty.md): Deprecated. Last name. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonManagerLabel](kabpersonmanagerlabel.md): Deprecated. Manager.
- [kABPersonMiddleNamePhoneticProperty](kabpersonmiddlenamephoneticproperty.md): Deprecated. Middle name phonetic. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonMiddleNameProperty](kabpersonmiddlenameproperty.md): Deprecated. Middle name. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonModificationDateProperty](kabpersonmodificationdateproperty.md): Deprecated. Modification date. Type: [kABDateTimePropertyType](kabdatetimepropertytype.md).
- [kABPersonMotherLabel](kabpersonmotherlabel.md): Deprecated. Mother.
- [kABPersonNicknameProperty](kabpersonnicknameproperty.md): Deprecated. Nickname. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonNoteProperty](kabpersonnoteproperty.md): Deprecated. Note. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonOrganizationProperty](kabpersonorganizationproperty.md): Deprecated. Organization name. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonParentLabel](kabpersonparentlabel.md): Deprecated. Parent.
- [kABPersonPartnerLabel](kabpersonpartnerlabel.md): Deprecated. Partner.
- [kABPersonPhoneHomeFAXLabel](kabpersonphonehomefaxlabel.md): Deprecated. Home fax number.
- [kABPersonPhoneIPhoneLabel](kabpersonphoneiphonelabel.md): Deprecated. iPhone number.
- [kABPersonPhoneMainLabel](kabpersonphonemainlabel.md): Deprecated. Main phone number.
- [kABPersonPhoneMobileLabel](kabpersonphonemobilelabel.md): Deprecated. Mobile phone number.
- [kABPersonPhoneOtherFAXLabel](kabpersonphoneotherfaxlabel.md): Deprecated. Other fax number.
- [kABPersonPhonePagerLabel](kabpersonphonepagerlabel.md): Deprecated. Pager phone number.
- [kABPersonPhoneProperty](kabpersonphoneproperty.md): Deprecated. Identifier for the phone number multivalue property.
- [kABPersonPhoneWorkFAXLabel](kabpersonphoneworkfaxlabel.md): Deprecated. Work fax number.
- [kABPersonPrefixProperty](kabpersonprefixproperty.md): Deprecated. Prefix (“Sir,” “Duke,” “General”). Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonRelatedNamesProperty](kabpersonrelatednamesproperty.md): Deprecated. Identifier for the related name multivalue property.
- [kABPersonSisterLabel](kabpersonsisterlabel.md): Deprecated. Sister.
- [kABPersonSocialProfileProperty](kabpersonsocialprofileproperty.md): Deprecated. Identifier for the social profile property.
- [kABPersonSocialProfileServiceFacebook](kabpersonsocialprofileservicefacebook.md): Deprecated. Facebook social profile service.
- [kABPersonSocialProfileServiceFlickr](kabpersonsocialprofileserviceflickr.md): Deprecated. Flickr social profile service.
- [kABPersonSocialProfileServiceGameCenter](kabpersonsocialprofileservicegamecenter.md): Deprecated. Game Center social profile service.
- [kABPersonSocialProfileServiceKey](kabpersonsocialprofileservicekey.md): Deprecated. Social profile service.
- [kABPersonSocialProfileServiceLinkedIn](kabpersonsocialprofileservicelinkedin.md): Deprecated. LinkedIn social profile service.
- [kABPersonSocialProfileServiceMyspace](kabpersonsocialprofileservicemyspace.md): Deprecated. Myspace social profile service.
- [kABPersonSocialProfileServiceSinaWeibo](kabpersonsocialprofileservicesinaweibo.md): Deprecated. Sina Weibo social profile service.
- [kABPersonSocialProfileServiceTwitter](kabpersonsocialprofileservicetwitter.md): Deprecated. Twitter social profile service.
- [kABPersonSocialProfileURLKey](kabpersonsocialprofileurlkey.md): Deprecated. Social profile URL.
- [kABPersonSocialProfileUserIdentifierKey](kabpersonsocialprofileuseridentifierkey.md): Deprecated. Social profile user identifier.
- [kABPersonSocialProfileUsernameKey](kabpersonsocialprofileusernamekey.md): Deprecated. Social profile username.
- [kABPersonSpouseLabel](kabpersonspouselabel.md): Deprecated. Spouse.
- [kABPersonSuffixProperty](kabpersonsuffixproperty.md): Deprecated. Suffix (“Jr.,” “Sr.,” “III”). Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonURLProperty](kabpersonurlproperty.md): Deprecated. Identifier for the URL multivalue property.
- [kABSourceNameProperty](kabsourcenameproperty.md): Deprecated. The name of the source. Type: kABStringPropertyType.
- [kABSourceTypeProperty](kabsourcetypeproperty.md): Deprecated. The type of the source.

## See Also

### C Interfaces

- [C Types](c-types.md): Identify the C types that correspond to Address Book objects.
- [AddressBook Functions](addressbook-functions.md): Find the C functions and function-like macros you use to manipulate Address Book data.
- [AddressBook Enumerations](addressbook-enumerations.md): Get the enumerations you use to specify Address Book information.
- [AddressBook Data Types](addressbook-data-types.md): Get the data types you use to specify Address Book information.

# Address Book Constants (Objective-C)

**Framework:** Address Book  
**Kind:** API Collection

Get the constants you use to specify Address Book information.

## Topics

### Data Type Constants

- [Address Keys](address-keys.md): The keys used to specify the different fields in a `kABAddressProperty`.
- [Default Person Properties](default-person-properties.md): The properties that a person record contains by default.
- [Default Group Properties](default-group-properties.md): The properties that a group record contains by default. Developers can add their own properties with the `ABGroup` method [addPropertiesAndTypes:](abgroup/addpropertiesandtypes%28__%29.md)
- [Default Multivalue List Labels](default-multivalue-list-labels.md): The default labels contained in the Address Book database for specifying different values in a multivalue list. Users can also add their own labels.
- [Generic Multivalue List Labels](generic-multivalue-list-labels.md): The generic labels contained in the Address Book database for specifying different values in a multivalue list.
- [Multivalue Property](multivalue-property.md): A multivalue property type.
- [Default Record Properties](default-record-properties.md): Properties common to all types of records.
- [Property Types](property_types.md): The possible [ABPropertyType](abpropertytype.md) types for `ABRecord` properties:

### Social Media Constants

- [Instant Messaging Keys](instant-messaging-keys.md): The keys used to specify the different fields in a [kABInstantMessageProperty](kabinstantmessageproperty.md) property.
- [Instant Messaging Services](instant-messaging-services.md): The predefined constants are used to identify instant messaging services.
- [Social Profile Services](social-profile-services.md): The predefined constants are used to identify social networking services.

### Errors

- [ABAddressBookErrorDomain](abaddressbookerrordomain.md): Deprecated. Error domain returning errors reported by an address book object.
- [Error Codes](error-codes.md): Errors codes used by the Address Book framework.

### Miscellaneous

- [ABMultipleValueSelection](abmultiplevalueselection.md): The user can select multiple values.
- [ABNoValueSelection](abnovalueselection.md): The user cannot select individual values.
- [ABSingleValueSelection](absinglevalueselection.md): The user can select a single value.
- [ABPeoplePickerDisplayedPropertyDidChangeNotification](abpeoplepickerdisplayedpropertydidchangenotification.md): Posted when the displayed property in the record list is changed.
- [ABPeoplePickerGroupSelectionDidChangeNotification](abpeoplepickergroupselectiondidchangenotification.md): Posted when the selection in the group list is changed.
- [ABPeoplePickerNameSelectionDidChangeNotification](abpeoplepickernameselectiondidchangenotification.md): Posted when the selection in the name list is changed.
- [ABPeoplePickerValueSelectionDidChangeNotification](abpeoplepickervalueselectiondidchangenotification.md): Posted when the selection in a multivalue property is changed.
- [kABAlternateBirthdayComponentsProperty](kabalternatebirthdaycomponentsproperty.md): The components that represent a birthday in a non-Gregorian calendar.
- [kABDatabaseChangedExternallyNotification](kabdatabasechangedexternallynotification.md): Posted when a process other than the current one has changed the Address Book database.
- [kABDatabaseChangedNotification](kabdatabasechangednotification.md): Posted when this process has changed the Address Book database.
- [kABDefaultNameOrdering](kabdefaultnameordering.md): Default name ordering (whether a person’s first name or last name is displayed first) in the Address Book application.
- [kABDeletedRecords](kabdeletedrecords.md): Records that have been deleted.
- [kABFirstNameFirst](kabfirstnamefirst.md): First name is displayed first in Address Book.
- [kABInsertedRecords](kabinsertedrecords.md): Records that have been inserted.
- [kABLastNameFirst](kablastnamefirst.md): Last name is displayed first in Address Book.
- [kABMultiValueInvalidIdentifier](kabmultivalueinvalididentifier.md): Invalid multivalue property.
- [kABNameOrderingMask](kabnameorderingmask.md): Used in conjunction with `kABDefaultNameOrdering`, `kABFirstNameFirst`, and `kABLastNameFirst` to determine name ordering.
- [kABOrganizationPhoneticProperty](kaborganizationphoneticproperty.md): The phonetic representation of an organization name.
- [kABPropertyInvalidID](kabpropertyinvalidid.md): Indicates an invalid value for a property ID.
- [kABRecordInvalidID](kabrecordinvalidid.md): Records with this ID have not been saved to the Address Book database.
- [kABShowAsCompany](kabshowascompany.md): Record is displayed as a company.
- [kABShowAsMask](kabshowasmask.md): Used in conjunction with `kABShowAsPerson` and `kABShowAsCompany` to determine record configuration.
- [kABShowAsPerson](kabshowasperson.md): Record is displayed as a person.
- [kABShowAsResource](kabshowasresource.md): Record is displayed as a resource.
- [kABShowAsRoom](kabshowasroom.md): Record is displayed as a room.
- [kABSocialProfileServiceTencentWeibo](kabsocialprofileservicetencentweibo.md): The user’s Tencent Weibo profile identifier.
- [kABSocialProfileServiceYelp](kabsocialprofileserviceyelp.md): The user’s Yelp profile identifier.
- [kABSourceTypeSearchableMask](kabsourcetypesearchablemask.md): Indicates that a source is searchable.
- [kABUpdatedRecords](kabupdatedrecords.md): Records that have been updated.

### Deprecated

- [kABPersonAddressCityKey](kabpersonaddresscitykey.md): Deprecated. City.
- [kABPersonAddressCountryCodeKey](kabpersonaddresscountrycodekey.md): Deprecated. Country code. The value is an ISO country code.
- [kABPersonAddressCountryKey](kabpersonaddresscountrykey.md): Deprecated. Country or region.
- [kABPersonAddressProperty](kabpersonaddressproperty.md): Deprecated. Identifier for the address multivalue property.
- [kABPersonAddressStateKey](kabpersonaddressstatekey.md): Deprecated. State.
- [kABPersonAddressStreetKey](kabpersonaddressstreetkey.md): Deprecated. Street.
- [kABPersonAddressZIPKey](kabpersonaddresszipkey.md): Deprecated. Zip code.
- [kABPersonAlternateBirthdayCalendarIdentifierKey](kabpersonalternatebirthdaycalendaridentifierkey.md): Deprecated. The associated value is a string representing the calendar identifier for a [CFCalendarRef](../corefoundation/cfcalendar.md).
- [kABPersonAlternateBirthdayDayKey](kabpersonalternatebirthdaydaykey.md): Deprecated. The associated value is a [CFNumberRef](../corefoundation/cfnumber.md) of type [kCFNumberNSIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the day for the birthday.
- [kABPersonAlternateBirthdayEraKey](kabpersonalternatebirthdayerakey.md): Deprecated. The associated value is a [CFNumberRef](../corefoundation/cfnumber.md) of type [kCFNumberNSIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the era for the birthday.
- [kABPersonAlternateBirthdayIsLeapMonthKey](kabpersonalternatebirthdayisleapmonthkey.md): Deprecated. The associated value is a [CFNumberRef](../corefoundation/cfnumber.md) of type [kCFNumberCharType](../corefoundation/cfnumbertype/chartype.md).
- [kABPersonAlternateBirthdayMonthKey](kabpersonalternatebirthdaymonthkey.md): Deprecated. The associated value is a [CFNumberRef](../corefoundation/cfnumber.md) of type [kCFNumberNSIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the month for the birthday.
- [kABPersonAlternateBirthdayProperty](kabpersonalternatebirthdayproperty.md): Deprecated. The associated value is a [kABDictionaryPropertyType](kabdictionarypropertytype.md) with keys specified by the other constants listed here.
- [kABPersonAlternateBirthdayYearKey](kabpersonalternatebirthdayyearkey.md): Deprecated. The associated value is a [CFNumberRef](../corefoundation/cfnumber.md) of type [kCFNumberNSIntegerType](../corefoundation/cfnumbertype/nsintegertype.md) whose value is the year for the birthday.
- [kABPersonAnniversaryLabel](kabpersonanniversarylabel.md): Deprecated. Birthdate.
- [kABPersonAssistantLabel](kabpersonassistantlabel.md): Deprecated. Assistant.
- [kABPersonBirthdayProperty](kabpersonbirthdayproperty.md): Deprecated. Birthday. Type: [kABDateTimePropertyType](kabdatetimepropertytype.md).
- [kABPersonBrotherLabel](kabpersonbrotherlabel.md): Deprecated. Brother.
- [kABPersonChildLabel](kabpersonchildlabel.md): Deprecated. Child.
- [kABPersonCreationDateProperty](kabpersoncreationdateproperty.md): Deprecated. Creation date. Type: [kABDateTimePropertyType](kabdatetimepropertytype.md).
- [kABPersonDateProperty](kabpersondateproperty.md): Deprecated. Identifier for the dates multivalue property.
- [kABPersonDepartmentProperty](kabpersondepartmentproperty.md): Deprecated. Department. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonEmailProperty](kabpersonemailproperty.md): Deprecated. Email address. Type: [kABMultiStringPropertyType](kabmultistringpropertytype.md).
- [kABPersonFatherLabel](kabpersonfatherlabel.md): Deprecated. Father.
- [kABPersonFirstNamePhoneticProperty](kabpersonfirstnamephoneticproperty.md): Deprecated. First name phonetic. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonFirstNameProperty](kabpersonfirstnameproperty.md): Deprecated. First name. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonFriendLabel](kabpersonfriendlabel.md): Deprecated. Friend.
- [kABPersonHomePageLabel](kabpersonhomepagelabel.md): Deprecated. Home page.
- [kABPersonImageFormatOriginalSize](kabpersonimageformatoriginalsize.md): The image at its original size and shape.
- [kABPersonImageFormatThumbnail](kabpersonimageformatthumbnail.md): The small square thumbnail.
- [kABPersonInstantMessageProperty](kabpersoninstantmessageproperty.md): Deprecated. Identifier for the instant message multivalue property.
- [kABPersonInstantMessageServiceAIM](kabpersoninstantmessageserviceaim.md): Deprecated. AIM instant message service.
- [kABPersonInstantMessageServiceFacebook](kabpersoninstantmessageservicefacebook.md): Deprecated. Facebook instant message service.
- [kABPersonInstantMessageServiceGaduGadu](kabpersoninstantmessageservicegadugadu.md): Deprecated. Gadu-Gadu instant message service.
- [kABPersonInstantMessageServiceGoogleTalk](kabpersoninstantmessageservicegoogletalk.md): Deprecated. Google Talk instant message service.
- [kABPersonInstantMessageServiceICQ](kabpersoninstantmessageserviceicq.md): Deprecated. ICQ instant message service.
- [kABPersonInstantMessageServiceJabber](kabpersoninstantmessageservicejabber.md): Deprecated. Jabber instant message service.
- [kABPersonInstantMessageServiceKey](kabpersoninstantmessageservicekey.md): Deprecated. Instant message service.
- [kABPersonInstantMessageServiceMSN](kabpersoninstantmessageservicemsn.md): Deprecated. MSN instant message service.
- [kABPersonInstantMessageServiceQQ](kabpersoninstantmessageserviceqq.md): Deprecated. QQ instant message service.
- [kABPersonInstantMessageServiceSkype](kabpersoninstantmessageserviceskype.md): Deprecated. Skype instant message service.
- [kABPersonInstantMessageServiceYahoo](kabpersoninstantmessageserviceyahoo.md): Deprecated. Yahoo instant message service.
- [kABPersonInstantMessageUsernameKey](kabpersoninstantmessageusernamekey.md): Deprecated. Instant message service username.
- [kABPersonJobTitleProperty](kabpersonjobtitleproperty.md): Deprecated. Job title. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonKindOrganization](kabpersonkindorganization.md): Deprecated. Identifies an organization.
- [kABPersonKindPerson](kabpersonkindperson.md): Deprecated. Identifies a person.
- [kABPersonKindProperty](kabpersonkindproperty.md): Deprecated. Identifier for the type property.
- [kABPersonLastNamePhoneticProperty](kabpersonlastnamephoneticproperty.md): Deprecated. Last name phonetic. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonLastNameProperty](kabpersonlastnameproperty.md): Deprecated. Last name. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonManagerLabel](kabpersonmanagerlabel.md): Deprecated. Manager.
- [kABPersonMiddleNamePhoneticProperty](kabpersonmiddlenamephoneticproperty.md): Deprecated. Middle name phonetic. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonMiddleNameProperty](kabpersonmiddlenameproperty.md): Deprecated. Middle name. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonModificationDateProperty](kabpersonmodificationdateproperty.md): Deprecated. Modification date. Type: [kABDateTimePropertyType](kabdatetimepropertytype.md).
- [kABPersonMotherLabel](kabpersonmotherlabel.md): Deprecated. Mother.
- [kABPersonNicknameProperty](kabpersonnicknameproperty.md): Deprecated. Nickname. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonNoteProperty](kabpersonnoteproperty.md): Deprecated. Note. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonOrganizationProperty](kabpersonorganizationproperty.md): Deprecated. Organization name. Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonParentLabel](kabpersonparentlabel.md): Deprecated. Parent.
- [kABPersonPartnerLabel](kabpersonpartnerlabel.md): Deprecated. Partner.
- [kABPersonPhoneHomeFAXLabel](kabpersonphonehomefaxlabel.md): Deprecated. Home fax number.
- [kABPersonPhoneIPhoneLabel](kabpersonphoneiphonelabel.md): Deprecated. iPhone number.
- [kABPersonPhoneMainLabel](kabpersonphonemainlabel.md): Deprecated. Main phone number.
- [kABPersonPhoneMobileLabel](kabpersonphonemobilelabel.md): Deprecated. Mobile phone number.
- [kABPersonPhoneOtherFAXLabel](kabpersonphoneotherfaxlabel.md): Deprecated. Other fax number.
- [kABPersonPhonePagerLabel](kabpersonphonepagerlabel.md): Deprecated. Pager phone number.
- [kABPersonPhoneProperty](kabpersonphoneproperty.md): Deprecated. Identifier for the phone number multivalue property.
- [kABPersonPhoneWorkFAXLabel](kabpersonphoneworkfaxlabel.md): Deprecated. Work fax number.
- [kABPersonPrefixProperty](kabpersonprefixproperty.md): Deprecated. Prefix (“Sir,” “Duke,” “General”). Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonRelatedNamesProperty](kabpersonrelatednamesproperty.md): Deprecated. Identifier for the related name multivalue property.
- [kABPersonSisterLabel](kabpersonsisterlabel.md): Deprecated. Sister.
- [kABPersonSocialProfileProperty](kabpersonsocialprofileproperty.md): Deprecated. Identifier for the social profile property.
- [kABPersonSocialProfileServiceFacebook](kabpersonsocialprofileservicefacebook.md): Deprecated. Facebook social profile service.
- [kABPersonSocialProfileServiceFlickr](kabpersonsocialprofileserviceflickr.md): Deprecated. Flickr social profile service.
- [kABPersonSocialProfileServiceGameCenter](kabpersonsocialprofileservicegamecenter.md): Deprecated. Game Center social profile service.
- [kABPersonSocialProfileServiceKey](kabpersonsocialprofileservicekey.md): Deprecated. Social profile service.
- [kABPersonSocialProfileServiceLinkedIn](kabpersonsocialprofileservicelinkedin.md): Deprecated. LinkedIn social profile service.
- [kABPersonSocialProfileServiceMyspace](kabpersonsocialprofileservicemyspace.md): Deprecated. Myspace social profile service.
- [kABPersonSocialProfileServiceSinaWeibo](kabpersonsocialprofileservicesinaweibo.md): Deprecated. Sina Weibo social profile service.
- [kABPersonSocialProfileServiceTwitter](kabpersonsocialprofileservicetwitter.md): Deprecated. Twitter social profile service.
- [kABPersonSocialProfileURLKey](kabpersonsocialprofileurlkey.md): Deprecated. Social profile URL.
- [kABPersonSocialProfileUserIdentifierKey](kabpersonsocialprofileuseridentifierkey.md): Deprecated. Social profile user identifier.
- [kABPersonSocialProfileUsernameKey](kabpersonsocialprofileusernamekey.md): Deprecated. Social profile username.
- [kABPersonSpouseLabel](kabpersonspouselabel.md): Deprecated. Spouse.
- [kABPersonSuffixProperty](kabpersonsuffixproperty.md): Deprecated. Suffix (“Jr.,” “Sr.,” “III”). Type: [kABStringPropertyType](kabstringpropertytype.md).
- [kABPersonURLProperty](kabpersonurlproperty.md): Deprecated. Identifier for the URL multivalue property.
- [kABSourceNameProperty](kabsourcenameproperty.md): Deprecated. The name of the source. Type: kABStringPropertyType.
- [kABSourceTypeProperty](kabsourcetypeproperty.md): Deprecated. The type of the source.

## See Also

### C Interfaces

- [C Types](c-types.md): Identify the C types that correspond to Address Book objects.
- [AddressBook Functions](addressbook-functions.md): Find the C functions and function-like macros you use to manipulate Address Book data.
- [AddressBook Enumerations](addressbook-enumerations.md): Get the enumerations you use to specify Address Book information.
- [AddressBook Data Types](addressbook-data-types.md): Get the data types you use to specify Address Book information.
