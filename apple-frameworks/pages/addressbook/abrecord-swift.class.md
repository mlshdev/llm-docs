> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abrecord-swift.class](https://developer.apple.com/documentation/addressbook/abrecord-swift.class)

# ABRecord (Swift)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS

An abstract class that defines the common properties for all Address Book records.

## Declaration

```swift
class ABRecord
```

<a id="overview"></a>

## Overview

`ABRecord` is an abstract superclass providing a common interface to, and defining common properties for, all Address Book records. A property is a field in the database record, such as the first or last name of a person record. ABRecord defines the types of properties supported, and basic methods for getting, setting, and removing property values.

The `ABRecord` class is “toll-free bridged” with its procedural C opaque-type counterpart. This means that the `ABRecordRef` type is interchangeable in function or method calls with instances of the `ABRecord` class.

## Topics

### Creating a Record

- [init(addressBook:)](abrecord-swift.class/init%28addressbook_%29.md): Initializes a record using the given address book.
- [init()](abrecord-swift.class/init%28%29.md): Initializes a record using the shared address book.

### Retrieving and Setting Values

- [removeValue(forProperty:)](abrecord-swift.class/removevalue%28forproperty_%29.md): Removes the value for a given property.
- [setValue(\_:forProperty:)](abrecord-swift.class/setvalue%28__forproperty_%29.md): Sets the value of a given property for a record.
- [setValue(\_:forProperty:error:)](abrecord-swift.class/setvalue%28__forproperty_error_%29.md): Sets the value of a given property for a record, returning error information.
- [value(forProperty:)](abrecord-swift.class/value%28forproperty_%29.md): Returns the value of a given property for a record.

### Retrieving a Specific Record

- [isReadOnly()](abrecord-swift.class/isreadonly%28%29.md): Returns whether a record is read-only.

### Getting Identifying Information

- [displayName](abrecord-swift.class/displayname.md): A user-visible string representing the record.
- [uniqueId](abrecord-swift.class/uniqueid.md): Returns the unique ID for a record.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ABGroup](abgroup.md)
- [ABPerson](abperson.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Data Types

- [ABPerson](abperson.md): An object that encapsulates all information about a person in the Address Book database.
- [ABGroup](abgroup.md): An object that represents a group of records in the Address Book database.
- [ABMultiValue](abmultivalue-swift.class.md): An immutable representation of a property that might have multiple values.
- [ABMutableMultiValue](abmutablemultivalue-swift.class.md): A mutable representation of a property that might have multiple values.
- [ABImageClient](abimageclient.md): Methods for responding to a request to load images associated with a contact.

# ABRecord (Objective-C)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS

An abstract class that defines the common properties for all Address Book records.

## Declaration

```objectivec
@interface ABRecord : NSObject
```

<a id="overview"></a>

## Overview

`ABRecord` is an abstract superclass providing a common interface to, and defining common properties for, all Address Book records. A property is a field in the database record, such as the first or last name of a person record. ABRecord defines the types of properties supported, and basic methods for getting, setting, and removing property values.

The `ABRecord` class is “toll-free bridged” with its procedural C opaque-type counterpart. This means that the `ABRecordRef` type is interchangeable in function or method calls with instances of the `ABRecord` class.

## Topics

### Creating a Record

- [initWithAddressBook:](abrecord-swift.class/init%28addressbook_%29.md): Initializes a record using the given address book.
- [init](abrecord-swift.class/init%28%29.md): Initializes a record using the shared address book.

### Retrieving and Setting Values

- [removeValueForProperty:](abrecord-swift.class/removevalue%28forproperty_%29.md): Removes the value for a given property.
- [setValue:forProperty:](abrecord-swift.class/setvalue%28__forproperty_%29.md): Sets the value of a given property for a record.
- [setValue:forProperty:error:](abrecord-swift.class/setvalue%28__forproperty_error_%29.md): Sets the value of a given property for a record, returning error information.
- [valueForProperty:](abrecord-swift.class/value%28forproperty_%29.md): Returns the value of a given property for a record.

### Retrieving a Specific Record

- [isReadOnly](abrecord-swift.class/isreadonly%28%29.md): Returns whether a record is read-only.

### Getting Identifying Information

- [displayName](abrecord-swift.class/displayname.md): A user-visible string representing the record.
- [uniqueId](abrecord-swift.class/uniqueid.md): Returns the unique ID for a record.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ABGroup](abgroup.md)
- [ABPerson](abperson.md)

## See Also

### Data Types

- [ABPerson](abperson.md): An object that encapsulates all information about a person in the Address Book database.
- [ABGroup](abgroup.md): An object that represents a group of records in the Address Book database.
- [ABMultiValue](abmultivalue-swift.class.md): An immutable representation of a property that might have multiple values.
- [ABMutableMultiValue](abmutablemultivalue-swift.class.md): A mutable representation of a property that might have multiple values.
- [ABImageClient](abimageclient.md): Methods for responding to a request to load images associated with a contact.
