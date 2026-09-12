> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abperson](https://developer.apple.com/documentation/addressbook/abperson)

# ABPerson (Swift)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS

An object that encapsulates all information about a person in the Address Book database.

## Declaration

```swift
class ABPerson
```

<a id="overview"></a>

## Overview

An `ABPerson` object corresponds to a single person record in the database. A person object contains the person’s name, company, address, email addresses, and phone numbers.

The `ABPerson` class is “toll-free bridged” with its procedural C opaque-type counterpart. This means that the `ABPersonRef` type is interchangeable in function or method calls with instances of the `ABPerson` class.

## Topics

### Managing Properties

- [addPropertiesAndTypes(\_:)](abperson/addpropertiesandtypes%28__%29.md): Adds the given properties to all the records of this type in the Address Book database.
- [removeProperties(\_:)](abperson/removeproperties%28__%29.md): Removes the given properties from all the records of this type in the Address Book database.
- [properties()](abperson/properties%28%29.md): Returns an array of the names of all the properties for the record in the Address Book database.
- [type(ofProperty:)](abperson/type%28ofproperty_%29.md): Returns the type of a given property.

### Managing Linked People

- [linkedPeople()](abperson/linkedpeople%28%29.md): Returns the array of all person records that are linked to the person this record represents.

### Managing Groups

- [parentGroups()](abperson/parentgroups%28%29.md): Returns an array of the address book groups that this person belongs to.

### Managing Images

- [cancelLoadingImageData(forTag:)](abperson/cancelloadingimagedata%28fortag_%29.md): Cancels an asynchronous fetch of the images for a given tag.
- [beginLoadingImageData(for:)](abperson/beginloadingimagedata%28for_%29.md): Starts an asynchronous fetch for image data in all locations
- [imageData()](abperson/imagedata%28%29.md): Returns data that contains a picture of this person.
- [setImageData(\_:)](abperson/setimagedata%28__%29.md): Sets the image for this person to the given data.

### Searching

- [searchElement(forProperty:label:key:value:comparison:)](abperson/searchelement%28forproperty_label_key_value_comparison_%29.md): Returns a search element object that specifies a query for records of this type.

### Importing and Exporting vCard Formatted Files

- [init(VCardRepresentation:)](abperson/init%28vcardrepresentation_%29-5c7h8.md): Returns an `ABPerson` instance initialized with the given data.
- [vCardRepresentation()](abperson/vcardrepresentation%28%29.md): Returns the vCard representation of the person record as a data object in vCard format.

### Constants

- [Person Flags](person-flags.md): Settings that determine how person records are displayed.

### Initializers

- [init(vCardRepresentation:)](abperson/init%28vcardrepresentation_%29-1bqog.md)

### Default Implementations

- [ABPerson Implementations](abperson/abperson-implementations.md)

## Relationships

### Inherits From

- [ABRecord](abrecord-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Data Types

- [ABGroup](abgroup.md): An object that represents a group of records in the Address Book database.
- [ABMultiValue](abmultivalue-swift.class.md): An immutable representation of a property that might have multiple values.
- [ABMutableMultiValue](abmutablemultivalue-swift.class.md): A mutable representation of a property that might have multiple values.
- [ABImageClient](abimageclient.md): Methods for responding to a request to load images associated with a contact.
- [ABRecord](abrecord-swift.class.md): An abstract class that defines the common properties for all Address Book records.

# ABPerson (Objective-C)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS

An object that encapsulates all information about a person in the Address Book database.

## Declaration

```objectivec
@interface ABPerson : ABRecord
```

<a id="overview"></a>

## Overview

An `ABPerson` object corresponds to a single person record in the database. A person object contains the person’s name, company, address, email addresses, and phone numbers.

The `ABPerson` class is “toll-free bridged” with its procedural C opaque-type counterpart. This means that the `ABPersonRef` type is interchangeable in function or method calls with instances of the `ABPerson` class.

## Topics

### Managing Properties

- [addPropertiesAndTypes:](abperson/addpropertiesandtypes%28__%29.md): Adds the given properties to all the records of this type in the Address Book database.
- [removeProperties:](abperson/removeproperties%28__%29.md): Removes the given properties from all the records of this type in the Address Book database.
- [properties](abperson/properties%28%29.md): Returns an array of the names of all the properties for the record in the Address Book database.
- [typeOfProperty:](abperson/type%28ofproperty_%29.md): Returns the type of a given property.

### Managing Linked People

- [linkedPeople](abperson/linkedpeople%28%29.md): Returns the array of all person records that are linked to the person this record represents.

### Managing Groups

- [parentGroups](abperson/parentgroups%28%29.md): Returns an array of the address book groups that this person belongs to.

### Managing Images

- [cancelLoadingImageDataForTag:](abperson/cancelloadingimagedata%28fortag_%29.md): Cancels an asynchronous fetch of the images for a given tag.
- [beginLoadingImageDataForClient:](abperson/beginloadingimagedata%28for_%29.md): Starts an asynchronous fetch for image data in all locations
- [imageData](abperson/imagedata%28%29.md): Returns data that contains a picture of this person.
- [setImageData:](abperson/setimagedata%28__%29.md): Sets the image for this person to the given data.

### Searching

- [searchElementForProperty:label:key:value:comparison:](abperson/searchelement%28forproperty_label_key_value_comparison_%29.md): Returns a search element object that specifies a query for records of this type.

### Importing and Exporting vCard Formatted Files

- [vCardRepresentation](abperson/vcardrepresentation%28%29.md): Returns the vCard representation of the person record as a data object in vCard format.

### Constants

- [Person Flags](person-flags.md): Settings that determine how person records are displayed.

### Instance Methods

- [initWithVCardRepresentation:](abperson/init%28vcardrepresentation_%29-1bqog.md)

## Relationships

### Inherits From

- [ABRecord](abrecord-swift.class.md)

## See Also

### Data Types

- [ABGroup](abgroup.md): An object that represents a group of records in the Address Book database.
- [ABMultiValue](abmultivalue-swift.class.md): An immutable representation of a property that might have multiple values.
- [ABMutableMultiValue](abmutablemultivalue-swift.class.md): A mutable representation of a property that might have multiple values.
- [ABImageClient](abimageclient.md): Methods for responding to a request to load images associated with a contact.
- [ABRecord](abrecord-swift.class.md): An abstract class that defines the common properties for all Address Book records.
