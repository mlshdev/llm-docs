> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/property_types](https://developer.apple.com/documentation/addressbook/property_types)

# Property Types (Swift)

**Framework:** Address Book  
**Kind:** API Collection

The possible [ABPropertyType](abpropertytype.md) types for `ABRecord` properties:

## Topics

### Constants

- [kABErrorInProperty](kaberrorinproperty.md): An invalid property was used.
- [kABStringProperty](kabstringproperty.md): This property is an `NSString` object.
- [kABIntegerProperty](kabintegerproperty.md): This property is an `NSNumber` object representing an integer.
- [kABRealProperty](kabrealproperty.md): This property is an `NSNumber` object representing a real number.
- [kABDateProperty](kabdateproperty.md): This property is an `NSDate` object.
- [kABArrayProperty](kabarrayproperty.md): This property is an `NSArray` object.
- [kABDictionaryProperty](kabdictionaryproperty.md): This property is an `NSDictionary` object.
- [kABDataProperty](kabdataproperty.md): This property is an `NSData` object.
- [kABDateComponentsProperty](kabdatecomponentsproperty.md): This property is an `NSDateComponents` object.
- [kABMultiStringProperty](kabmultistringproperty.md): This property is an `ABMultiValue` object containing `NSString` objects.
- [kABMultiIntegerProperty](kabmultiintegerproperty.md): This property is an `ABMultiValue` object containing `NSNumber` objects representing integers.
- [kABMultiRealProperty](kabmultirealproperty.md): This property is an `ABMultiValue` object containing `NSNumber` objects representing real numbers.
- [kABMultiDateProperty](kabmultidateproperty.md): This property is an `ABMultiValue` object containing `NSDate` objects.
- [kABMultiArrayProperty](kabmultiarrayproperty.md): This property is an `ABMultiValue` object containing `NSArray` objects.
- [kABMultiDictionaryProperty](kabmultidictionaryproperty.md): This property is an `ABMultiValue` object containing `NSDictionary` objects.
- [kABMultiDataProperty](kabmultidataproperty.md): This property is an `ABMultiValue` object containing `NSData` objects.
- [kABMultiDateComponentsProperty](kabmultidatecomponentsproperty.md): This property is an `ABMultiValue` object containing `NSDateComponents` objects.

## See Also

### Data Type Constants

- [Address Keys](address-keys.md): The keys used to specify the different fields in a `kABAddressProperty`.
- [Default Person Properties](default-person-properties.md): The properties that a person record contains by default.
- [Default Group Properties](default-group-properties.md): The properties that a group record contains by default. Developers can add their own properties with the `ABGroup` method [addPropertiesAndTypes(\_:)](abgroup/addpropertiesandtypes%28__%29.md)
- [Default Multivalue List Labels](default-multivalue-list-labels.md): The default labels contained in the Address Book database for specifying different values in a multivalue list. Users can also add their own labels.
- [Generic Multivalue List Labels](generic-multivalue-list-labels.md): The generic labels contained in the Address Book database for specifying different values in a multivalue list.
- [Multivalue Property](multivalue-property.md): A multivalue property type.
- [Default Record Properties](default-record-properties.md): Properties common to all types of records.

# Property Types (Objective-C)

**Framework:** Address Book  
**Kind:** API Collection

The possible [ABPropertyType](abpropertytype.md) types for `ABRecord` properties:

## See Also

### Data Type Constants

- [Address Keys](address-keys.md): The keys used to specify the different fields in a `kABAddressProperty`.
- [Default Person Properties](default-person-properties.md): The properties that a person record contains by default.
- [Default Group Properties](default-group-properties.md): The properties that a group record contains by default. Developers can add their own properties with the `ABGroup` method [addPropertiesAndTypes:](abgroup/addpropertiesandtypes%28__%29.md)
- [Default Multivalue List Labels](default-multivalue-list-labels.md): The default labels contained in the Address Book database for specifying different values in a multivalue list. Users can also add their own labels.
- [Generic Multivalue List Labels](generic-multivalue-list-labels.md): The generic labels contained in the Address Book database for specifying different values in a multivalue list.
- [Multivalue Property](multivalue-property.md): A multivalue property type.
- [Default Record Properties](default-record-properties.md): Properties common to all types of records.
