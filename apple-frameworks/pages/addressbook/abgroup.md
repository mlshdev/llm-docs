> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroup](https://developer.apple.com/documentation/addressbook/abgroup)

# ABGroup (Swift)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS

An object that represents a group of records in the Address Book database.

## Declaration

```swift
class ABGroup
```

<a id="overview"></a>

## Overview

The `ABGroup` class supports the concept of a “group” containing one or more persons. People may belong to multiple groups, and groups may also belong to other groups unless the relationship causes a circular reference. The only predefined property of a group is its name. However, similar to person records, you can add your own properties to group records. Groups not only help to organize person records, but also allow you to create email distribution lists.

The `ABGroup` class is “toll-free bridged” with its procedural C opaque-type counterpart. This means that the `ABGroupRef` type is interchangeable in function or method calls with instances of the `ABGroup` class.

## Topics

### Managing properties

- [addPropertiesAndTypes(\_:)](abgroup/addpropertiesandtypes%28__%29.md): Adds the given properties to all records of this type in the Address Book database.
- [removeProperties(\_:)](abgroup/removeproperties%28__%29.md): Removes the given properties from all the records of this type in the Address Book database.
- [properties()](abgroup/properties%28%29.md): Returns an array of the names of all the properties for this record type in the Address Book database.
- [type(ofProperty:)](abgroup/type%28ofproperty_%29.md): Returns the type for a given property.

### Managing persons

- [addMember(\_:)](abgroup/addmember%28__%29.md): Adds a person to a group.
- [removeMember(\_:)](abgroup/removemember%28__%29.md): Removes a person from a group.
- [members()](abgroup/members%28%29.md): Returns an array of persons in a group.

### Managing subgroups

- [addSubgroup(\_:)](abgroup/addsubgroup%28__%29.md): Adds a subgroup to another group.
- [removeSubgroup(\_:)](abgroup/removesubgroup%28__%29.md): Removes a subgroup from a group.
- [parentGroups()](abgroup/parentgroups%28%29.md): Returns an array containing a group’s parents—that is, the groups that a group belongs to.
- [subgroups()](abgroup/subgroups%28%29.md): Returns an array containing a group’s subgroups.

### Managing Distribution Lists

- [distributionIdentifier(forProperty:person:)](abgroup/distributionidentifier%28forproperty_person_%29.md): Returns the distribution identifier for the given property and person.
- [setDistributionIdentifier(\_:forProperty:person:)](abgroup/setdistributionidentifier%28__forproperty_person_%29.md): Assigns a specific distribution identifier for a person’s multivalue list property so that the group can be used as a distribution list.

### Searching

- [searchElement(forProperty:label:key:value:comparison:)](abgroup/searchelement%28forproperty_label_key_value_comparison_%29.md): Returns a search element object that searches for records of this type.

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

- [ABPerson](abperson.md): An object that encapsulates all information about a person in the Address Book database.
- [ABMultiValue](abmultivalue-swift.class.md): An immutable representation of a property that might have multiple values.
- [ABMutableMultiValue](abmutablemultivalue-swift.class.md): A mutable representation of a property that might have multiple values.
- [ABImageClient](abimageclient.md): Methods for responding to a request to load images associated with a contact.
- [ABRecord](abrecord-swift.class.md): An abstract class that defines the common properties for all Address Book records.

# ABGroup (Objective-C)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS

An object that represents a group of records in the Address Book database.

## Declaration

```objectivec
@interface ABGroup : ABRecord
```

<a id="overview"></a>

## Overview

The `ABGroup` class supports the concept of a “group” containing one or more persons. People may belong to multiple groups, and groups may also belong to other groups unless the relationship causes a circular reference. The only predefined property of a group is its name. However, similar to person records, you can add your own properties to group records. Groups not only help to organize person records, but also allow you to create email distribution lists.

The `ABGroup` class is “toll-free bridged” with its procedural C opaque-type counterpart. This means that the `ABGroupRef` type is interchangeable in function or method calls with instances of the `ABGroup` class.

## Topics

### Managing properties

- [addPropertiesAndTypes:](abgroup/addpropertiesandtypes%28__%29.md): Adds the given properties to all records of this type in the Address Book database.
- [removeProperties:](abgroup/removeproperties%28__%29.md): Removes the given properties from all the records of this type in the Address Book database.
- [properties](abgroup/properties%28%29.md): Returns an array of the names of all the properties for this record type in the Address Book database.
- [typeOfProperty:](abgroup/type%28ofproperty_%29.md): Returns the type for a given property.

### Managing persons

- [addMember:](abgroup/addmember%28__%29.md): Adds a person to a group.
- [removeMember:](abgroup/removemember%28__%29.md): Removes a person from a group.
- [members](abgroup/members%28%29.md): Returns an array of persons in a group.

### Managing subgroups

- [addSubgroup:](abgroup/addsubgroup%28__%29.md): Adds a subgroup to another group.
- [removeSubgroup:](abgroup/removesubgroup%28__%29.md): Removes a subgroup from a group.
- [parentGroups](abgroup/parentgroups%28%29.md): Returns an array containing a group’s parents—that is, the groups that a group belongs to.
- [subgroups](abgroup/subgroups%28%29.md): Returns an array containing a group’s subgroups.

### Managing Distribution Lists

- [distributionIdentifierForProperty:person:](abgroup/distributionidentifier%28forproperty_person_%29.md): Returns the distribution identifier for the given property and person.
- [setDistributionIdentifier:forProperty:person:](abgroup/setdistributionidentifier%28__forproperty_person_%29.md): Assigns a specific distribution identifier for a person’s multivalue list property so that the group can be used as a distribution list.

### Searching

- [searchElementForProperty:label:key:value:comparison:](abgroup/searchelement%28forproperty_label_key_value_comparison_%29.md): Returns a search element object that searches for records of this type.

## Relationships

### Inherits From

- [ABRecord](abrecord-swift.class.md)

## See Also

### Data Types

- [ABPerson](abperson.md): An object that encapsulates all information about a person in the Address Book database.
- [ABMultiValue](abmultivalue-swift.class.md): An immutable representation of a property that might have multiple values.
- [ABMutableMultiValue](abmutablemultivalue-swift.class.md): A mutable representation of a property that might have multiple values.
- [ABImageClient](abimageclient.md): Methods for responding to a request to load images associated with a contact.
- [ABRecord](abrecord-swift.class.md): An abstract class that defines the common properties for all Address Book records.
