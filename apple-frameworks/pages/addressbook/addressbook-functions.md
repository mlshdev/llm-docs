> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/addressbook-functions](https://developer.apple.com/documentation/addressbook/addressbook-functions)

# AddressBook Functions (Swift)

**Framework:** Address Book  
**Kind:** API Collection

Find the C functions and function-like macros you use to manipulate Address Book data.

## Topics

### Address Book

- [ABGetSharedAddressBook()](abgetsharedaddressbook%28%29.md): Returns the unique shared ABAddressBook object.
- [ABCopyDefaultCountryCode(\_:)](abcopydefaultcountrycode%28__%29.md): Returns the default country code for records with unspecified country codes.
- [ABHasUnsavedChanges(\_:)](abhasunsavedchanges%28__%29.md): Returns whether if there are unsaved changes in the address book.
- [ABSave(\_:)](absave%28__%29.md): Saves all the changes made since the last save.

### People

- [ABCopyArrayOfAllPeople(\_:)](abcopyarrayofallpeople%28__%29.md): Returns an array of all the people in the Address Book database.
- [ABGetMe(\_:)](abgetme%28__%29.md): Returns the ABPerson object for the logged-in user.
- [ABPersonCopyImageData(\_:)](abpersoncopyimagedata%28__%29.md): Deprecated. Returns data that contains a picture of a person.
- [ABPersonCopyParentGroups(\_:)](abpersoncopyparentgroups%28__%29.md): Returns an array of groups that a person belongs to.
- [ABPersonCopyVCardRepresentation(\_:)](abpersoncopyvcardrepresentation%28__%29.md): Returns the vCard representation of the person as a data object in vCard format.
- [ABPersonCreate()](abpersoncreate%28%29.md): Deprecated. Returns a newly created person object.
- [ABPersonCreateSearchElement(\_:\_:\_:\_:\_:)](abpersoncreatesearchelement%28__________%29.md): Returns a search element object that specifies a query for records of this type.
- [ABPersonCreateWithVCardRepresentation(\_:)](abpersoncreatewithvcardrepresentation%28__%29.md): Returns a new ABPerson object initialized with the given data in vCard format.
- [ABPersonSetImageData(\_:\_:\_:)](abpersonsetimagedata%28______%29.md): Deprecated. Sets the image for this person to the given data.
- [ABSetMe(\_:\_:)](absetme%28____%29.md): Sets the record that represents the logged-in user.

### Groups

- [ABCopyArrayOfAllGroups(\_:)](abcopyarrayofallgroups%28__%29.md): Returns an array of all the groups in the Address Book database.
- [ABGroupAddGroup(\_:\_:)](abgroupaddgroup%28____%29.md): Adds a subgroup to another group.
- [ABGroupAddMember(\_:\_:\_:)](abgroupaddmember%28______%29.md): Deprecated. Adds a person to a group.
- [ABGroupCopyArrayOfAllMembers(\_:)](abgroupcopyarrayofallmembers%28__%29.md): Deprecated. Returns an array of persons in a group.
- [ABGroupCopyArrayOfAllSubgroups(\_:)](abgroupcopyarrayofallsubgroups%28__%29.md): Returns an array containing a group’s subgroups.
- [ABGroupCopyDistributionIdentifier(\_:\_:\_:)](abgroupcopydistributionidentifier%28______%29.md): Returns the distribution identifier for the given propertyand person.
- [ABGroupCopyParentGroups(\_:)](abgroupcopyparentgroups%28__%29.md): Returns an array containing a group’s parents—thegroups that a group belongs to.
- [ABGroupCreate()](abgroupcreate%28%29.md): Deprecated. Returns a new ABGroup object.
- [ABGroupCreateSearchElement(\_:\_:\_:\_:\_:)](abgroupcreatesearchelement%28__________%29.md): Creates an ABSearchElement object that specifies a queryfor ABGroup records.
- [ABGroupRemoveGroup(\_:\_:)](abgroupremovegroup%28____%29.md): Removes a subgroup from a group.
- [ABGroupRemoveMember(\_:\_:\_:)](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.
- [ABGroupSetDistributionIdentifier(\_:\_:\_:\_:)](abgroupsetdistributionidentifier%28________%29.md): Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).

### Multi Values

- [ABMultiValueAdd(\_:\_:\_:\_:)](abmultivalueadd%28________%29.md): Adds a value and its label to a multi-value list.
- [ABMultiValueCopyIdentifierAtIndex(\_:\_:)](abmultivaluecopyidentifieratindex%28____%29.md): Returns the identifier at the given index.
- [ABMultiValueCopyLabelAtIndex(\_:\_:)](abmultivaluecopylabelatindex%28____%29.md): Deprecated. Returns the label for the given index.
- [ABMultiValueCopyPrimaryIdentifier(\_:)](abmultivaluecopyprimaryidentifier%28__%29.md): Returns the identifier for the primary value.
- [ABMultiValueCopyValueAtIndex(\_:\_:)](abmultivaluecopyvalueatindex%28____%29.md): Deprecated. Returns the value for the given index.
- [ABMultiValueCount(\_:)](abmultivaluecount%28__%29.md): Returns the number of entries in a multi-value list.
- [ABMultiValueCreate()](abmultivaluecreate%28%29.md): Returns a new ABMultiValue object.
- [ABMultiValueCreateCopy(\_:)](abmultivaluecreatecopy%28__%29.md): Returns a copy of a multi-value object.
- [ABMultiValueCreateMutable(\_:)](abmultivaluecreatemutable%28__%29.md): Deprecated. Returns a newly created mutable multi-value list object.
- [ABMultiValueCreateMutableCopy(\_:)](abmultivaluecreatemutablecopy%28__%29.md): Deprecated. Returns a mutable copy of a multi-value object.
- [ABMultiValueIndexForIdentifier(\_:\_:)](abmultivalueindexforidentifier%28____%29.md): Returns the index for the given identifier.
- [ABMultiValueInsert(\_:\_:\_:\_:\_:)](abmultivalueinsert%28__________%29.md): Inserts a value and its label at the given index in amulti-value list.
- [ABMultiValuePropertyType(\_:)](abmultivaluepropertytype%28__%29.md): Returns the type for the values in a multi-value list.
- [ABMultiValueRemove(\_:\_:)](abmultivalueremove%28____%29.md): Removes the value and label at the given index.
- [ABMultiValueReplaceLabel(\_:\_:\_:)](abmultivaluereplacelabel%28______%29.md): Replaces the label at the given index.
- [ABMultiValueReplaceValue(\_:\_:\_:)](abmultivaluereplacevalue%28______%29.md): Replaces the value at the given index.
- [ABMultiValueSetPrimaryIdentifier(\_:\_:)](abmultivaluesetprimaryidentifier%28____%29.md): Sets the primary value to be the value for the given identifier.

### Images

- [ABBeginLoadingImageDataForClient(\_:\_:\_:)](abbeginloadingimagedataforclient%28______%29.md): Starts an asynchronous fetch for image data in all locations, and returns a non-zero tag for tracking.
- [ABCancelLoadingImageDataForTag(\_:)](abcancelloadingimagedatafortag%28__%29.md): Cancels an asynchronous fetch of an image for the given tag.

### Search Elements

- [ABCopyArrayOfMatchingRecords(\_:\_:)](abcopyarrayofmatchingrecords%28____%29.md): Returns an array of records that match the given search element, or an empty array if no records match the search element.
- [ABSearchElementCreateWithConjunction(\_:\_:)](absearchelementcreatewithconjunction%28____%29.md): Returns a compound search element created by combiningthe search elements in an array with the given conjunction.
- [ABSearchElementMatchesRecord(\_:\_:)](absearchelementmatchesrecord%28____%29.md): Tests whether or not a record matches a search element.

### Properties

- [ABAddPropertiesAndTypes(\_:\_:\_:)](abaddpropertiesandtypes%28______%29.md): Adds the given properties to all the records of the specified type in the Address Book database, and returns the number of properties successfully added.
- [ABCopyArrayOfPropertiesForRecordType(\_:\_:)](abcopyarrayofpropertiesforrecordtype%28____%29.md): Returns an array containing the names of all the properties for the specified record type.
- [ABCopyLocalizedPropertyOrLabel(\_:)](abcopylocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property,label, or key.
- [ABLocalizedPropertyOrLabel(\_:)](ablocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property, label, or key.
- [ABRemoveProperties(\_:\_:\_:)](abremoveproperties%28______%29.md): Removes the given properties from all the records of this type in the Address Book database, and returns the number of properties successfully removed.
- [ABTypeOfProperty(\_:\_:\_:)](abtypeofproperty%28______%29.md): Returns the type of a given property for a given record.

### Records

- [ABAddRecord(\_:\_:)](abaddrecord%28____%29.md): Adds a record of the specified type to the Address Book database.
- [ABCopyRecordForUniqueId(\_:\_:)](abcopyrecordforuniqueid%28____%29.md): Returns the record that matches the given unique ID.
- [ABCopyRecordTypeFromUniqueId(\_:\_:)](abcopyrecordtypefromuniqueid%28____%29.md): Returns the type name of the record that matches a given unique ID.
- [ABCreateFormattedAddressFromDictionary(\_:\_:)](abcreateformattedaddressfromdictionary%28____%29.md): Returns a string containing the formatted address.
- [ABRecordCopyRecordType(\_:)](abrecordcopyrecordtype%28__%29.md): Returns the type of the given record.
- [ABRecordCopyUniqueId(\_:)](abrecordcopyuniqueid%28__%29.md): Returns the unique ID of the receiver.
- [ABRecordCopyValue(\_:\_:)](abrecordcopyvalue%28____%29.md): Deprecated. Returns the value of the given property.
- [ABRecordCreateCopy(\_:)](abrecordcreatecopy%28__%29.md): Returns a copy of the given record.
- [ABRecordIsReadOnly(\_:)](abrecordisreadonly%28__%29.md): Returns whether or not the record is read-only.
- [ABRecordRemoveValue(\_:\_:\_:)](abrecordremovevalue%28______%29.md): Deprecated. Removes the value of the given property.
- [ABRecordSetValue(\_:\_:\_:\_:)](abrecordsetvalue%28________%29.md): Deprecated. Sets the value of a given property for a record.
- [ABRemoveRecord(\_:\_:)](abremoverecord%28____%29.md): Removes the specified record from the Address Book database.

### Deprecated

- [ABAddressBookAddRecord(\_:\_:\_:)](abaddressbookaddrecord%28______%29.md): Deprecated. Adds a record to an address book.
- [ABAddressBookCopyArrayOfAllGroups(\_:)](abaddressbookcopyarrayofallgroups%28__%29.md): Deprecated. Returns an array with all the groups in an address book.
- [ABAddressBookCopyArrayOfAllGroupsInSource(\_:\_:)](abaddressbookcopyarrayofallgroupsinsource%28____%29.md): Deprecated. Returns an array of all groups from a particular source.
- [ABAddressBookCopyArrayOfAllPeople(\_:)](abaddressbookcopyarrayofallpeople%28__%29.md): Deprecated. Returns all the person records in an address book.
- [ABAddressBookCopyArrayOfAllPeopleInSource(\_:\_:)](abaddressbookcopyarrayofallpeopleinsource%28____%29.md): Deprecated. Returns an array of all person records from a particular source.
- [ABAddressBookCopyArrayOfAllPeopleInSourceWithSortOrdering(\_:\_:\_:)](abaddressbookcopyarrayofallpeopleinsourcewithsortordering%28______%29.md): Deprecated. Returns an array of all person records in the address book, sorted with the specified order.
- [ABAddressBookCopyArrayOfAllSources(\_:)](abaddressbookcopyarrayofallsources%28__%29.md): Deprecated. Returns an array of all sources in the address book.
- [ABAddressBookCopyDefaultSource(\_:)](abaddressbookcopydefaultsource%28__%29.md): Deprecated. Returns the default source.
- [ABAddressBookCopyLocalizedLabel(\_:)](abaddressbookcopylocalizedlabel%28__%29.md): Deprecated. Returns a localized version of a record-property label.
- [ABAddressBookCopyPeopleWithName(\_:\_:)](abaddressbookcopypeoplewithname%28____%29.md): Deprecated. Performs a prefix search on the composite names of people in an address book and returns an array of persons that match the search criteria.
- [ABAddressBookCreate()](abaddressbookcreate%28%29.md): Deprecated. Creates a new address book object with data from the Address Book database.
- [ABAddressBookCreateWithOptions(\_:\_:)](abaddressbookcreatewithoptions%28____%29.md): Deprecated. Creates a new address book object with data from the Address Book database.
- [ABAddressBookGetAuthorizationStatus()](abaddressbookgetauthorizationstatus%28%29.md): Deprecated. Returns the authorization status of your app for accessing address book data.
- [ABAddressBookGetGroupCount(\_:)](abaddressbookgetgroupcount%28__%29.md): Deprecated. Returns the number of groups in an address book.
- [ABAddressBookGetGroupWithRecordID(\_:\_:)](abaddressbookgetgroupwithrecordid%28____%29.md): Deprecated. Returns the group with a given record ID.
- [ABAddressBookGetPersonCount(\_:)](abaddressbookgetpersoncount%28__%29.md): Deprecated. Returns the number of person records in an address book.
- [ABAddressBookGetPersonWithRecordID(\_:\_:)](abaddressbookgetpersonwithrecordid%28____%29.md): Deprecated. Returns the person record with a given record ID.
- [ABAddressBookGetSourceWithRecordID(\_:\_:)](abaddressbookgetsourcewithrecordid%28____%29.md): Deprecated. Returns the source record with the given record ID.
- [ABAddressBookHasUnsavedChanges(\_:)](abaddressbookhasunsavedchanges%28__%29.md): Deprecated. Indicates whether an address book has changes that have not been saved to the Address Book database.
- [ABAddressBookRegisterExternalChangeCallback(\_:\_:\_:)](abaddressbookregisterexternalchangecallback%28______%29.md): Deprecated. Registers a callback to receive notifications when the Address Book database is modified.
- [ABAddressBookRemoveRecord(\_:\_:\_:)](abaddressbookremoverecord%28______%29.md): Deprecated. Removes a record from an address book.
- [ABAddressBookRequestAccessWithCompletion(\_:\_:)](abaddressbookrequestaccesswithcompletion%28____%29.md): Deprecated. Requests access to address book data from the user.
- [ABAddressBookRevert(\_:)](abaddressbookrevert%28__%29.md): Deprecated. Discards unsaved changes in an address book.
- [ABAddressBookSave(\_:\_:)](abaddressbooksave%28____%29.md): Deprecated. Saves any unsaved changes to the Address Book database.
- [ABAddressBookUnregisterExternalChangeCallback(\_:\_:\_:)](abaddressbookunregisterexternalchangecallback%28______%29.md): Deprecated. Unregisters a callback.
- [ABGroupCopyArrayOfAllMembersWithSortOrdering(\_:\_:)](abgroupcopyarrayofallmemberswithsortordering%28____%29.md): Deprecated. Returns the records in a group, using a sort ordering.
- [ABGroupCopySource(\_:)](abgroupcopysource%28__%29.md): Deprecated. Returns the source that the group is from.
- [ABGroupCreateInSource(\_:)](abgroupcreateinsource%28__%29.md): Deprecated. Creates a group in a particular source.
- [ABMultiValueAddValueAndLabel(\_:\_:\_:\_:)](abmultivalueaddvalueandlabel%28________%29.md): Deprecated. Adds a value and its corresponding label to a multivalue property.
- [ABMultiValueCopyArrayOfAllValues(\_:)](abmultivaluecopyarrayofallvalues%28__%29.md): Deprecated. Returns an array with the values in a multivalue property.
- [ABMultiValueGetCount(\_:)](abmultivaluegetcount%28__%29.md): Deprecated. Returns the number of values in a multivalue property.
- [ABMultiValueGetFirstIndexOfValue(\_:\_:)](abmultivaluegetfirstindexofvalue%28____%29.md): Deprecated. Returns the first location of a value in a multivalue property.
- [ABMultiValueGetIdentifierAtIndex(\_:\_:)](abmultivaluegetidentifieratindex%28____%29.md): Deprecated. Returns the identifier of a value in a multivalue property.
- [ABMultiValueGetIndexForIdentifier(\_:\_:)](abmultivaluegetindexforidentifier%28____%29.md): Deprecated. Returns the location (within a multivalue property) of a value with a given identifier.
- [ABMultiValueGetPropertyType(\_:)](abmultivaluegetpropertytype%28__%29.md): Deprecated. Returns the type of the values contained in a multivalue property.
- [ABMultiValueInsertValueAndLabelAtIndex(\_:\_:\_:\_:\_:)](abmultivalueinsertvalueandlabelatindex%28__________%29.md): Deprecated. Inserts a value and a label into a multivalue property.
- [ABMultiValueRemoveValueAndLabelAtIndex(\_:\_:)](abmultivalueremovevalueandlabelatindex%28____%29.md): Deprecated. Removes a value from a multivalue property.
- [ABMultiValueReplaceLabelAtIndex(\_:\_:\_:)](abmultivaluereplacelabelatindex%28______%29.md): Deprecated. Replaces a label in a multivalue property with another label.
- [ABMultiValueReplaceValueAtIndex(\_:\_:\_:)](abmultivaluereplacevalueatindex%28______%29.md): Deprecated. Replaces a value in a multivalue property with another value.
- [ABPersonComparePeopleByName(\_:\_:\_:)](abpersoncomparepeoplebyname%28______%29.md): Deprecated. Indicates how two person records get sorted.
- [ABPersonCopyArrayOfAllLinkedPeople(\_:)](abpersoncopyarrayofalllinkedpeople%28__%29.md): Deprecated. Returns an array of all person records in the address book database that are linked to the given person record.
- [ABPersonCopyCompositeNameDelimiterForRecord(\_:)](abpersoncopycompositenamedelimiterforrecord%28__%29.md): Deprecated. Returns the delimiter to use between name components.
- [ABPersonCopyImageDataWithFormat(\_:\_:)](abpersoncopyimagedatawithformat%28____%29.md): Deprecated. Returns the picture for a person record in the given format.
- [ABPersonCopyLocalizedPropertyName(\_:)](abpersoncopylocalizedpropertyname%28__%29.md): Deprecated. Returns the localized name of a person property
- [ABPersonCopySource(\_:)](abpersoncopysource%28__%29.md): Deprecated. Returns the source that the person record is from.
- [ABPersonCreateInSource(\_:)](abpersoncreateinsource%28__%29.md): Deprecated. Creates a new person record in a particular source.
- [ABPersonCreatePeopleInSourceWithVCardRepresentation(\_:\_:)](abpersoncreatepeopleinsourcewithvcardrepresentation%28____%29.md): Deprecated. Creates person records from the given vCard representation.
- [ABPersonCreateVCardRepresentationWithPeople(\_:)](abpersoncreatevcardrepresentationwithpeople%28__%29.md): Deprecated. Returns the vCard representation of the given person records.
- [ABPersonGetCompositeNameFormat()](abpersongetcompositenameformat%28%29.md): Deprecated. Returns the person-name display format.
- [ABPersonGetCompositeNameFormatForRecord(\_:)](abpersongetcompositenameformatforrecord%28__%29.md): Deprecated. Returns the person-name display format to use for the given record.
- [ABPersonGetSortOrdering()](abpersongetsortordering%28%29.md): Deprecated. Returns the user’s sort-ordering preference for lists of persons.
- [ABPersonGetTypeOfProperty(\_:)](abpersongettypeofproperty%28__%29.md): Deprecated. Returns the type of a person property.
- [ABPersonHasImageData(\_:)](abpersonhasimagedata%28__%29.md): Deprecated. Indicates whether a person has a picture.
- [ABPersonRemoveImageData(\_:\_:)](abpersonremoveimagedata%28____%29.md): Deprecated. Removes a person’s picture.
- [ABRecordCopyCompositeName(\_:)](abrecordcopycompositename%28__%29.md): Deprecated. Returns an appropriate, human-friendly name for the record.
- [ABRecordGetRecordID(\_:)](abrecordgetrecordid%28__%29.md): Deprecated. Returns the unique ID of a record.
- [ABRecordGetRecordType(\_:)](abrecordgetrecordtype%28__%29.md): Deprecated. Returns the type of a record.

## See Also

### C Interfaces

- [C Types](c-types.md): Identify the C types that correspond to Address Book objects.
- [Address Book Constants](address-book-constants.md): Get the constants you use to specify Address Book information.
- [AddressBook Enumerations](addressbook-enumerations.md): Get the enumerations you use to specify Address Book information.
- [AddressBook Data Types](addressbook-data-types.md): Get the data types you use to specify Address Book information.

# AddressBook Functions (Objective-C)

**Framework:** Address Book  
**Kind:** API Collection

Find the C functions and function-like macros you use to manipulate Address Book data.

## Topics

### Address Book

- [ABGetSharedAddressBook](abgetsharedaddressbook%28%29.md): Returns the unique shared ABAddressBook object.
- [ABCopyDefaultCountryCode](abcopydefaultcountrycode%28__%29.md): Returns the default country code for records with unspecified country codes.
- [ABHasUnsavedChanges](abhasunsavedchanges%28__%29.md): Returns whether if there are unsaved changes in the address book.
- [ABSave](absave%28__%29.md): Saves all the changes made since the last save.

### People

- [ABCopyArrayOfAllPeople](abcopyarrayofallpeople%28__%29.md): Returns an array of all the people in the Address Book database.
- [ABGetMe](abgetme%28__%29.md): Returns the ABPerson object for the logged-in user.
- [ABPersonCopyImageData](abpersoncopyimagedata%28__%29.md): Deprecated. Returns data that contains a picture of a person.
- [ABPersonCopyParentGroups](abpersoncopyparentgroups%28__%29.md): Returns an array of groups that a person belongs to.
- [ABPersonCopyVCardRepresentation](abpersoncopyvcardrepresentation%28__%29.md): Returns the vCard representation of the person as a data object in vCard format.
- [ABPersonCreate](abpersoncreate%28%29.md): Deprecated. Returns a newly created person object.
- [ABPersonCreateSearchElement](abpersoncreatesearchelement%28__________%29.md): Returns a search element object that specifies a query for records of this type.
- [ABPersonCreateWithVCardRepresentation](abpersoncreatewithvcardrepresentation%28__%29.md): Returns a new ABPerson object initialized with the given data in vCard format.
- [ABPersonSetImageData](abpersonsetimagedata%28______%29.md): Deprecated. Sets the image for this person to the given data.
- [ABSetMe](absetme%28____%29.md): Sets the record that represents the logged-in user.

### Groups

- [ABCopyArrayOfAllGroups](abcopyarrayofallgroups%28__%29.md): Returns an array of all the groups in the Address Book database.
- [ABGroupAddGroup](abgroupaddgroup%28____%29.md): Adds a subgroup to another group.
- [ABGroupAddMember](abgroupaddmember%28______%29.md): Deprecated. Adds a person to a group.
- [ABGroupCopyArrayOfAllMembers](abgroupcopyarrayofallmembers%28__%29.md): Deprecated. Returns an array of persons in a group.
- [ABGroupCopyArrayOfAllSubgroups](abgroupcopyarrayofallsubgroups%28__%29.md): Returns an array containing a group’s subgroups.
- [ABGroupCopyDistributionIdentifier](abgroupcopydistributionidentifier%28______%29.md): Returns the distribution identifier for the given propertyand person.
- [ABGroupCopyParentGroups](abgroupcopyparentgroups%28__%29.md): Returns an array containing a group’s parents—thegroups that a group belongs to.
- [ABGroupCreate](abgroupcreate%28%29.md): Deprecated. Returns a new ABGroup object.
- [ABGroupCreateSearchElement](abgroupcreatesearchelement%28__________%29.md): Creates an ABSearchElement object that specifies a queryfor ABGroup records.
- [ABGroupRemoveGroup](abgroupremovegroup%28____%29.md): Removes a subgroup from a group.
- [ABGroupRemoveMember](abgroupremovemember%28______%29.md): Deprecated. Removes a person from a group.
- [ABGroupSetDistributionIdentifier](abgroupsetdistributionidentifier%28________%29.md): Assigning a specific distribution identifier for a person’smulti-value list property so that the group can be used as a distributionlist (mailing list, in the case of an email property).

### Multi Values

- [ABMultiValueAdd](abmultivalueadd%28________%29.md): Adds a value and its label to a multi-value list.
- [ABMultiValueCopyIdentifierAtIndex](abmultivaluecopyidentifieratindex%28____%29.md): Returns the identifier at the given index.
- [ABMultiValueCopyLabelAtIndex](abmultivaluecopylabelatindex%28____%29.md): Deprecated. Returns the label for the given index.
- [ABMultiValueCopyPrimaryIdentifier](abmultivaluecopyprimaryidentifier%28__%29.md): Returns the identifier for the primary value.
- [ABMultiValueCopyValueAtIndex](abmultivaluecopyvalueatindex%28____%29.md): Deprecated. Returns the value for the given index.
- [ABMultiValueCount](abmultivaluecount%28__%29.md): Returns the number of entries in a multi-value list.
- [ABMultiValueCreate](abmultivaluecreate%28%29.md): Returns a new ABMultiValue object.
- [ABMultiValueCreateCopy](abmultivaluecreatecopy%28__%29.md): Returns a copy of a multi-value object.
- [ABMultiValueCreateMutable](abmultivaluecreatemutable%28__%29.md): Deprecated. Returns a newly created mutable multi-value list object.
- [ABMultiValueCreateMutableCopy](abmultivaluecreatemutablecopy%28__%29.md): Deprecated. Returns a mutable copy of a multi-value object.
- [ABMultiValueIndexForIdentifier](abmultivalueindexforidentifier%28____%29.md): Returns the index for the given identifier.
- [ABMultiValueInsert](abmultivalueinsert%28__________%29.md): Inserts a value and its label at the given index in amulti-value list.
- [ABMultiValuePropertyType](abmultivaluepropertytype%28__%29.md): Returns the type for the values in a multi-value list.
- [ABMultiValueRemove](abmultivalueremove%28____%29.md): Removes the value and label at the given index.
- [ABMultiValueReplaceLabel](abmultivaluereplacelabel%28______%29.md): Replaces the label at the given index.
- [ABMultiValueReplaceValue](abmultivaluereplacevalue%28______%29.md): Replaces the value at the given index.
- [ABMultiValueSetPrimaryIdentifier](abmultivaluesetprimaryidentifier%28____%29.md): Sets the primary value to be the value for the given identifier.

### Images

- [ABBeginLoadingImageDataForClient](abbeginloadingimagedataforclient%28______%29.md): Starts an asynchronous fetch for image data in all locations, and returns a non-zero tag for tracking.
- [ABCancelLoadingImageDataForTag](abcancelloadingimagedatafortag%28__%29.md): Cancels an asynchronous fetch of an image for the given tag.

### Search Elements

- [ABCopyArrayOfMatchingRecords](abcopyarrayofmatchingrecords%28____%29.md): Returns an array of records that match the given search element, or an empty array if no records match the search element.
- [ABSearchElementCreateWithConjunction](absearchelementcreatewithconjunction%28____%29.md): Returns a compound search element created by combiningthe search elements in an array with the given conjunction.
- [ABSearchElementMatchesRecord](absearchelementmatchesrecord%28____%29.md): Tests whether or not a record matches a search element.

### Properties

- [ABAddPropertiesAndTypes](abaddpropertiesandtypes%28______%29.md): Adds the given properties to all the records of the specified type in the Address Book database, and returns the number of properties successfully added.
- [ABCopyArrayOfPropertiesForRecordType](abcopyarrayofpropertiesforrecordtype%28____%29.md): Returns an array containing the names of all the properties for the specified record type.
- [ABCopyLocalizedPropertyOrLabel](abcopylocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property,label, or key.
- [ABLocalizedPropertyOrLabel](ablocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property, label, or key.
- [ABRemoveProperties](abremoveproperties%28______%29.md): Removes the given properties from all the records of this type in the Address Book database, and returns the number of properties successfully removed.
- [ABTypeOfProperty](abtypeofproperty%28______%29.md): Returns the type of a given property for a given record.

### Records

- [ABAddRecord](abaddrecord%28____%29.md): Adds a record of the specified type to the Address Book database.
- [ABCopyRecordForUniqueId](abcopyrecordforuniqueid%28____%29.md): Returns the record that matches the given unique ID.
- [ABCopyRecordTypeFromUniqueId](abcopyrecordtypefromuniqueid%28____%29.md): Returns the type name of the record that matches a given unique ID.
- [ABCreateFormattedAddressFromDictionary](abcreateformattedaddressfromdictionary%28____%29.md): Returns a string containing the formatted address.
- [ABRecordCopyRecordType](abrecordcopyrecordtype%28__%29.md): Returns the type of the given record.
- [ABRecordCopyUniqueId](abrecordcopyuniqueid%28__%29.md): Returns the unique ID of the receiver.
- [ABRecordCopyValue](abrecordcopyvalue%28____%29.md): Deprecated. Returns the value of the given property.
- [ABRecordCreateCopy](abrecordcreatecopy%28__%29.md): Returns a copy of the given record.
- [ABRecordIsReadOnly](abrecordisreadonly%28__%29.md): Returns whether or not the record is read-only.
- [ABRecordRemoveValue](abrecordremovevalue%28______%29.md): Deprecated. Removes the value of the given property.
- [ABRecordSetValue](abrecordsetvalue%28________%29.md): Deprecated. Sets the value of a given property for a record.
- [ABRemoveRecord](abremoverecord%28____%29.md): Removes the specified record from the Address Book database.

### Deprecated

- [ABAddressBookAddRecord](abaddressbookaddrecord%28______%29.md): Deprecated. Adds a record to an address book.
- [ABAddressBookCopyArrayOfAllGroups](abaddressbookcopyarrayofallgroups%28__%29.md): Deprecated. Returns an array with all the groups in an address book.
- [ABAddressBookCopyArrayOfAllGroupsInSource](abaddressbookcopyarrayofallgroupsinsource%28____%29.md): Deprecated. Returns an array of all groups from a particular source.
- [ABAddressBookCopyArrayOfAllPeople](abaddressbookcopyarrayofallpeople%28__%29.md): Deprecated. Returns all the person records in an address book.
- [ABAddressBookCopyArrayOfAllPeopleInSource](abaddressbookcopyarrayofallpeopleinsource%28____%29.md): Deprecated. Returns an array of all person records from a particular source.
- [ABAddressBookCopyArrayOfAllPeopleInSourceWithSortOrdering](abaddressbookcopyarrayofallpeopleinsourcewithsortordering%28______%29.md): Deprecated. Returns an array of all person records in the address book, sorted with the specified order.
- [ABAddressBookCopyArrayOfAllSources](abaddressbookcopyarrayofallsources%28__%29.md): Deprecated. Returns an array of all sources in the address book.
- [ABAddressBookCopyDefaultSource](abaddressbookcopydefaultsource%28__%29.md): Deprecated. Returns the default source.
- [ABAddressBookCopyLocalizedLabel](abaddressbookcopylocalizedlabel%28__%29.md): Deprecated. Returns a localized version of a record-property label.
- [ABAddressBookCopyPeopleWithName](abaddressbookcopypeoplewithname%28____%29.md): Deprecated. Performs a prefix search on the composite names of people in an address book and returns an array of persons that match the search criteria.
- [ABAddressBookCreate](abaddressbookcreate%28%29.md): Deprecated. Creates a new address book object with data from the Address Book database.
- [ABAddressBookCreateWithOptions](abaddressbookcreatewithoptions%28____%29.md): Deprecated. Creates a new address book object with data from the Address Book database.
- [ABAddressBookGetAuthorizationStatus](abaddressbookgetauthorizationstatus%28%29.md): Deprecated. Returns the authorization status of your app for accessing address book data.
- [ABAddressBookGetGroupCount](abaddressbookgetgroupcount%28__%29.md): Deprecated. Returns the number of groups in an address book.
- [ABAddressBookGetGroupWithRecordID](abaddressbookgetgroupwithrecordid%28____%29.md): Deprecated. Returns the group with a given record ID.
- [ABAddressBookGetPersonCount](abaddressbookgetpersoncount%28__%29.md): Deprecated. Returns the number of person records in an address book.
- [ABAddressBookGetPersonWithRecordID](abaddressbookgetpersonwithrecordid%28____%29.md): Deprecated. Returns the person record with a given record ID.
- [ABAddressBookGetSourceWithRecordID](abaddressbookgetsourcewithrecordid%28____%29.md): Deprecated. Returns the source record with the given record ID.
- [ABAddressBookHasUnsavedChanges](abaddressbookhasunsavedchanges%28__%29.md): Deprecated. Indicates whether an address book has changes that have not been saved to the Address Book database.
- [ABAddressBookRegisterExternalChangeCallback](abaddressbookregisterexternalchangecallback%28______%29.md): Deprecated. Registers a callback to receive notifications when the Address Book database is modified.
- [ABAddressBookRemoveRecord](abaddressbookremoverecord%28______%29.md): Deprecated. Removes a record from an address book.
- [ABAddressBookRequestAccessWithCompletion](abaddressbookrequestaccesswithcompletion%28____%29.md): Deprecated. Requests access to address book data from the user.
- [ABAddressBookRevert](abaddressbookrevert%28__%29.md): Deprecated. Discards unsaved changes in an address book.
- [ABAddressBookSave](abaddressbooksave%28____%29.md): Deprecated. Saves any unsaved changes to the Address Book database.
- [ABAddressBookUnregisterExternalChangeCallback](abaddressbookunregisterexternalchangecallback%28______%29.md): Deprecated. Unregisters a callback.
- [ABGroupCopyArrayOfAllMembersWithSortOrdering](abgroupcopyarrayofallmemberswithsortordering%28____%29.md): Deprecated. Returns the records in a group, using a sort ordering.
- [ABGroupCopySource](abgroupcopysource%28__%29.md): Deprecated. Returns the source that the group is from.
- [ABGroupCreateInSource](abgroupcreateinsource%28__%29.md): Deprecated. Creates a group in a particular source.
- [ABMultiValueAddValueAndLabel](abmultivalueaddvalueandlabel%28________%29.md): Deprecated. Adds a value and its corresponding label to a multivalue property.
- [ABMultiValueCopyArrayOfAllValues](abmultivaluecopyarrayofallvalues%28__%29.md): Deprecated. Returns an array with the values in a multivalue property.
- [ABMultiValueGetCount](abmultivaluegetcount%28__%29.md): Deprecated. Returns the number of values in a multivalue property.
- [ABMultiValueGetFirstIndexOfValue](abmultivaluegetfirstindexofvalue%28____%29.md): Deprecated. Returns the first location of a value in a multivalue property.
- [ABMultiValueGetIdentifierAtIndex](abmultivaluegetidentifieratindex%28____%29.md): Deprecated. Returns the identifier of a value in a multivalue property.
- [ABMultiValueGetIndexForIdentifier](abmultivaluegetindexforidentifier%28____%29.md): Deprecated. Returns the location (within a multivalue property) of a value with a given identifier.
- [ABMultiValueGetPropertyType](abmultivaluegetpropertytype%28__%29.md): Deprecated. Returns the type of the values contained in a multivalue property.
- [ABMultiValueInsertValueAndLabelAtIndex](abmultivalueinsertvalueandlabelatindex%28__________%29.md): Deprecated. Inserts a value and a label into a multivalue property.
- [ABMultiValueRemoveValueAndLabelAtIndex](abmultivalueremovevalueandlabelatindex%28____%29.md): Deprecated. Removes a value from a multivalue property.
- [ABMultiValueReplaceLabelAtIndex](abmultivaluereplacelabelatindex%28______%29.md): Deprecated. Replaces a label in a multivalue property with another label.
- [ABMultiValueReplaceValueAtIndex](abmultivaluereplacevalueatindex%28______%29.md): Deprecated. Replaces a value in a multivalue property with another value.
- [ABPersonComparePeopleByName](abpersoncomparepeoplebyname%28______%29.md): Deprecated. Indicates how two person records get sorted.
- [ABPersonCopyArrayOfAllLinkedPeople](abpersoncopyarrayofalllinkedpeople%28__%29.md): Deprecated. Returns an array of all person records in the address book database that are linked to the given person record.
- [ABPersonCopyCompositeNameDelimiterForRecord](abpersoncopycompositenamedelimiterforrecord%28__%29.md): Deprecated. Returns the delimiter to use between name components.
- [ABPersonCopyImageDataWithFormat](abpersoncopyimagedatawithformat%28____%29.md): Deprecated. Returns the picture for a person record in the given format.
- [ABPersonCopyLocalizedPropertyName](abpersoncopylocalizedpropertyname%28__%29.md): Deprecated. Returns the localized name of a person property
- [ABPersonCopySource](abpersoncopysource%28__%29.md): Deprecated. Returns the source that the person record is from.
- [ABPersonCreateInSource](abpersoncreateinsource%28__%29.md): Deprecated. Creates a new person record in a particular source.
- [ABPersonCreatePeopleInSourceWithVCardRepresentation](abpersoncreatepeopleinsourcewithvcardrepresentation%28____%29.md): Deprecated. Creates person records from the given vCard representation.
- [ABPersonCreateVCardRepresentationWithPeople](abpersoncreatevcardrepresentationwithpeople%28__%29.md): Deprecated. Returns the vCard representation of the given person records.
- [ABPersonGetCompositeNameFormat](abpersongetcompositenameformat%28%29.md): Deprecated. Returns the person-name display format.
- [ABPersonGetCompositeNameFormatForRecord](abpersongetcompositenameformatforrecord%28__%29.md): Deprecated. Returns the person-name display format to use for the given record.
- [ABPersonGetSortOrdering](abpersongetsortordering%28%29.md): Deprecated. Returns the user’s sort-ordering preference for lists of persons.
- [ABPersonGetTypeOfProperty](abpersongettypeofproperty%28__%29.md): Deprecated. Returns the type of a person property.
- [ABPersonHasImageData](abpersonhasimagedata%28__%29.md): Deprecated. Indicates whether a person has a picture.
- [ABPersonRemoveImageData](abpersonremoveimagedata%28____%29.md): Deprecated. Removes a person’s picture.
- [ABRecordCopyCompositeName](abrecordcopycompositename%28__%29.md): Deprecated. Returns an appropriate, human-friendly name for the record.
- [ABRecordGetRecordID](abrecordgetrecordid%28__%29.md): Deprecated. Returns the unique ID of a record.
- [ABRecordGetRecordType](abrecordgetrecordtype%28__%29.md): Deprecated. Returns the type of a record.

### Functions

- [ABPickerAddProperty](abpickeraddproperty.md): Adds a property to the group of properties available in the record list. Use [ABPickerRemoveProperty](abpickerremoveproperty.md) to remove a property from the list and [ABPickerCopyProperties](abpickercopyproperties.md) to obtain the list of properties available in the list.
- [ABPickerChangeAttributes](abpickerchangeattributes.md): Specifies the selection behaviors for a people-picker window. Use `ABPickerGetAttributes` to obtain the selection behaviors specified for the window.
- [ABPickerClearSearchField](abpickerclearsearchfield.md): Clears the search field and resets the list of displayed records.
- [ABPickerCopyColumnTitle](abpickercopycolumntitle.md): Obtains the title of a custom property.
- [ABPickerCopyDisplayedProperty](abpickercopydisplayedproperty.md): Returns the name of the property currently displayed in the record list.
- [ABPickerCopyProperties](abpickercopyproperties.md): Obtains the list of properties available in the record list. Use [ABPickerAddProperty](abpickeraddproperty.md) to add a property to the record list and [ABPickerRemoveProperty](abpickerremoveproperty.md) to remove a property from the list.
- [ABPickerCopySelectedGroups](abpickercopyselectedgroups.md): Returns the groups selected in the group list as an array of `ABRecord C` objects.
- [ABPickerCopySelectedIdentifiers](abpickercopyselectedidentifiers.md): Returns the identifiers of the selected values in a multi-value property or an empty array if the property displayed is a single-value property.
- [ABPickerCopySelectedRecords](abpickercopyselectedrecords.md): Returns the selection in the record list as an array of ABGroup or `ABPerson C` objects.
- [ABPickerCopySelectedValues](abpickercopyselectedvalues.md): Returns the selected values in a multi-value property or an empty array if no values are selected or the property displayedis a single-value property.
- [ABPickerCreate](abpickercreate.md): Creates an ABPickerRef. The corresponding window is hidden. Invoke [ABPickerSetVisibility](abpickersetvisibility.md) to show it. Release with `CFRelease`.
- [ABPickerDeselectAll](abpickerdeselectall.md): Deselects all selected groups, records, and values in multi-value properties.
- [ABPickerDeselectGroup](abpickerdeselectgroup.md): Deselects a group in the group list.
- [ABPickerDeselectIdentifier](abpickerdeselectidentifier.md): Deselects a value in multi-value property currently displayed in the record list.
- [ABPickerDeselectRecord](abpickerdeselectrecord.md): Deselects a group in the record list.
- [ABPickerEditInAddressBook](abpickereditinaddressbook.md): Launches Address Book to edit the item selected in the people-picker window.
- [ABPickerGetAttributes](abpickergetattributes.md): Indicates the selection behaviors selected a people-picker window. Use [ABPickerChangeAttributes](abpickerchangeattributes.md) tospecify selection behaviors for the window.
- [ABPickerGetDelegate](abpickergetdelegate.md): Obtains the delegate for a people-picker window.
- [ABPickerGetFrame](abpickergetframe.md): Returns the position and size of the people-picker window.
- [ABPickerIsVisible](abpickerisvisible.md): Indicates whether the people-picker window is visible.
- [ABPickerRemoveProperty](abpickerremoveproperty.md): Removes a property from the group of properties whose values are shown in the record list. Use [ABPickerAddProperty](abpickeraddproperty.md) to add a property to the record list and [ABPickerCopyProperties](abpickercopyproperties.md) to obtain the list of properties shown in the record list.
- [ABPickerSelectGroup](abpickerselectgroup.md): Selects a group or a set of groups in the group list.
- [ABPickerSelectIdentifier](abpickerselectidentifier.md): Selects a value or a set of values in a multi-value property.
- [ABPickerSelectInAddressBook](abpickerselectinaddressbook.md): Launches Address Book and selects the item selected in the people-picker window.
- [ABPickerSelectRecord](abpickerselectrecord.md): Selects a record or a set of records in the record list.
- [ABPickerSetColumnTitle](abpickersetcolumntitle.md): Sets the title for a custom property.
- [ABPickerSetDelegate](abpickersetdelegate.md): Sets the event handler for people-picker events.
- [ABPickerSetDisplayedProperty](abpickersetdisplayedproperty.md): Displays one of the properties whose values are shownin the record list.
- [ABPickerSetFrame](abpickersetframe.md): Specifies the position and size of the people-picker window.
- [ABPickerSetVisibility](abpickersetvisibility.md): Shows or hides a people-picker window.

## See Also

### C Interfaces

- [C Types](c-types.md): Identify the C types that correspond to Address Book objects.
- [Address Book Constants](address-book-constants.md): Get the constants you use to specify Address Book information.
- [AddressBook Enumerations](addressbook-enumerations.md): Get the enumerations you use to specify Address Book information.
- [AddressBook Data Types](addressbook-data-types.md): Get the data types you use to specify Address Book information.
