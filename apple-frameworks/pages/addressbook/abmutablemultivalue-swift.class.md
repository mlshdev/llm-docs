> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmutablemultivalue-swift.class](https://developer.apple.com/documentation/addressbook/abmutablemultivalue-swift.class)

# ABMutableMultiValue (Swift)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS

A mutable representation of a property that might have multiple values.

## Declaration

```swift
class ABMutableMultiValue
```

<a id="overview"></a>

## Overview

Each value in a multivalue list must be of the same type, and must have an associated predefined or user-defined label, and unique identifier. The labels, however, need not be unique. For example, you can have multiple Home phone numbers. Each multivalue object may have a primary identifier—used as a default value when a label is not provided. For example, a person record may have multiple addresses with the labels Home and Work, where Work is designated as the primary value. Instances of `ABMutableMultiValue` are mutable, see [ABMultiValue](abmultivalue-swift.class.md) for additional methods that access the content of a multivalue list.

The `ABMutableMultiValue` class is “toll-free bridged” with its procedural C opaque-type counterpart. This means that the [ABMutableMultiValue](abmutablemultivalue-swift.typealias.md) type is interchangeable in function or method calls with instances of the `ABMutableMultiValue` class.

## Topics

### Adding a value

- [add(\_:withLabel:)](abmutablemultivalue-swift.class/add%28__withlabel_%29.md): Adds a value and its label to a multivalue list.
- [insert(\_:withLabel:at:)](abmutablemultivalue-swift.class/insert%28__withlabel_at_%29.md): Inserts a value and its label at the given index in a multivalue list.

### Replacing values and labels

- [replaceLabel(at:withLabel:)](abmutablemultivalue-swift.class/replacelabel%28at_withlabel_%29.md): Replaces the label at the given index.
- [replace(at:withValue:)](abmutablemultivalue-swift.class/replace%28at_withvalue_%29.md): Replaces the value at the given index.

### Removing values

- [removeAndLabel(at:)](abmutablemultivalue-swift.class/removeandlabel%28at_%29.md): Removes the value and label at the given index.

### Setting the Primary identifier

- [setPrimaryIdentifier(\_:)](abmutablemultivalue-swift.class/setprimaryidentifier%28__%29.md): Sets the primary value to be the value for the given identifier.

## Relationships

### Inherits From

- [ABMultiValue](abmultivalue-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Data Types

- [ABPerson](abperson.md): An object that encapsulates all information about a person in the Address Book database.
- [ABGroup](abgroup.md): An object that represents a group of records in the Address Book database.
- [ABMultiValue](abmultivalue-swift.class.md): An immutable representation of a property that might have multiple values.
- [ABImageClient](abimageclient.md): Methods for responding to a request to load images associated with a contact.
- [ABRecord](abrecord-swift.class.md): An abstract class that defines the common properties for all Address Book records.

# ABMutableMultiValue (Objective-C)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS

A mutable representation of a property that might have multiple values.

## Declaration

```objectivec
@interface ABMutableMultiValue : ABMultiValue
```

<a id="overview"></a>

## Overview

Each value in a multivalue list must be of the same type, and must have an associated predefined or user-defined label, and unique identifier. The labels, however, need not be unique. For example, you can have multiple Home phone numbers. Each multivalue object may have a primary identifier—used as a default value when a label is not provided. For example, a person record may have multiple addresses with the labels Home and Work, where Work is designated as the primary value. Instances of `ABMutableMultiValue` are mutable, see [ABMultiValue](abmultivalue-swift.class.md) for additional methods that access the content of a multivalue list.

The `ABMutableMultiValue` class is “toll-free bridged” with its procedural C opaque-type counterpart. This means that the [ABMutableMultiValueRef](abmutablemultivalue-swift.typealias.md) type is interchangeable in function or method calls with instances of the `ABMutableMultiValue` class.

## Topics

### Adding a value

- [addValue:withLabel:](abmutablemultivalue-swift.class/add%28__withlabel_%29.md): Adds a value and its label to a multivalue list.
- [insertValue:withLabel:atIndex:](abmutablemultivalue-swift.class/insert%28__withlabel_at_%29.md): Inserts a value and its label at the given index in a multivalue list.

### Replacing values and labels

- [replaceLabelAtIndex:withLabel:](abmutablemultivalue-swift.class/replacelabel%28at_withlabel_%29.md): Replaces the label at the given index.
- [replaceValueAtIndex:withValue:](abmutablemultivalue-swift.class/replace%28at_withvalue_%29.md): Replaces the value at the given index.

### Removing values

- [removeValueAndLabelAtIndex:](abmutablemultivalue-swift.class/removeandlabel%28at_%29.md): Removes the value and label at the given index.

### Setting the Primary identifier

- [setPrimaryIdentifier:](abmutablemultivalue-swift.class/setprimaryidentifier%28__%29.md): Sets the primary value to be the value for the given identifier.

## Relationships

### Inherits From

- [ABMultiValue](abmultivalue-swift.class.md)

## See Also

### Data Types

- [ABPerson](abperson.md): An object that encapsulates all information about a person in the Address Book database.
- [ABGroup](abgroup.md): An object that represents a group of records in the Address Book database.
- [ABMultiValue](abmultivalue-swift.class.md): An immutable representation of a property that might have multiple values.
- [ABImageClient](abimageclient.md): Methods for responding to a request to load images associated with a contact.
- [ABRecord](abrecord-swift.class.md): An abstract class that defines the common properties for all Address Book records.
