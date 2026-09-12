> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmultivalue-swift.class](https://developer.apple.com/documentation/addressbook/abmultivalue-swift.class)

# ABMultiValue (Swift)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS

An immutable representation of a property that might have multiple values.

## Declaration

```swift
class ABMultiValue
```

<a id="overview"></a>

## Overview

Each value in a multivalue list must be of the same type, and must have an associated predefined or user-defined label, and unique identifier. The labels, however, need not be unique. For example, you can have multiple Home phone numbers. Each multivalue object may have a primary identifier—used as a default value when a label is not provided. For example, a person record may have multiple addresses with the labels Home and Work, where Work is designated as the primary value. Instances of this class are immutable, see [ABMutableMultiValue](abmutablemultivalue-swift.class.md) for methods that manipulate the content of a multivalue list.

The `ABMultiValue` class is “toll-free bridged” with its procedural C opaque-type counterpart. This means that the [ABMultiValue](abmultivalue-swift.typealias.md) type is interchangeable in function or method calls with instances of the `ABMultiValue` class.

## Topics

### Accessing the primary identifier

- [primaryIdentifier()](abmultivalue-swift.class/primaryidentifier%28%29.md): Returns the identifier for the primary value.

### Accessing identifiers

- [identifier(at:)](abmultivalue-swift.class/identifier%28at_%29.md): Returns the identifier for the given index.
- [index(forIdentifier:)](abmultivalue-swift.class/index%28foridentifier_%29.md): Returns the index for the given identifier.

### Accessing entries

- [label(at:)](abmultivalue-swift.class/label%28at_%29.md): Returns the label for the given index.
- [value(at:)](abmultivalue-swift.class/value%28at_%29.md): Returns the value for the given index.
- [value(forIdentifier:)](abmultivalue-swift.class/value%28foridentifier_%29.md): Returns the value for the given identifier.
- [label(forIdentifier:)](abmultivalue-swift.class/label%28foridentifier_%29.md): Returns the label for the given identifier.

### Querying the list

- [count()](abmultivalue-swift.class/count%28%29.md): Returns the number of entries in a multivalue list.
- [propertyType()](abmultivalue-swift.class/propertytype%28%29.md): Returns the type for the values in a multivalue list.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ABMutableMultiValue](abmutablemultivalue-swift.class.md)

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
- [ABMutableMultiValue](abmutablemultivalue-swift.class.md): A mutable representation of a property that might have multiple values.
- [ABImageClient](abimageclient.md): Methods for responding to a request to load images associated with a contact.
- [ABRecord](abrecord-swift.class.md): An abstract class that defines the common properties for all Address Book records.

# ABMultiValue (Objective-C)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS

An immutable representation of a property that might have multiple values.

## Declaration

```objectivec
@interface ABMultiValue : NSObject
```

<a id="overview"></a>

## Overview

Each value in a multivalue list must be of the same type, and must have an associated predefined or user-defined label, and unique identifier. The labels, however, need not be unique. For example, you can have multiple Home phone numbers. Each multivalue object may have a primary identifier—used as a default value when a label is not provided. For example, a person record may have multiple addresses with the labels Home and Work, where Work is designated as the primary value. Instances of this class are immutable, see [ABMutableMultiValue](abmutablemultivalue-swift.class.md) for methods that manipulate the content of a multivalue list.

The `ABMultiValue` class is “toll-free bridged” with its procedural C opaque-type counterpart. This means that the [ABMultiValueRef](abmultivalue-swift.typealias.md) type is interchangeable in function or method calls with instances of the `ABMultiValue` class.

## Topics

### Accessing the primary identifier

- [primaryIdentifier](abmultivalue-swift.class/primaryidentifier%28%29.md): Returns the identifier for the primary value.

### Accessing identifiers

- [identifierAtIndex:](abmultivalue-swift.class/identifier%28at_%29.md): Returns the identifier for the given index.
- [indexForIdentifier:](abmultivalue-swift.class/index%28foridentifier_%29.md): Returns the index for the given identifier.

### Accessing entries

- [labelAtIndex:](abmultivalue-swift.class/label%28at_%29.md): Returns the label for the given index.
- [valueAtIndex:](abmultivalue-swift.class/value%28at_%29.md): Returns the value for the given index.
- [valueForIdentifier:](abmultivalue-swift.class/value%28foridentifier_%29.md): Returns the value for the given identifier.
- [labelForIdentifier:](abmultivalue-swift.class/label%28foridentifier_%29.md): Returns the label for the given identifier.

### Querying the list

- [count](abmultivalue-swift.class/count%28%29.md): Returns the number of entries in a multivalue list.
- [propertyType](abmultivalue-swift.class/propertytype%28%29.md): Returns the type for the values in a multivalue list.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ABMutableMultiValue](abmutablemultivalue-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### Data Types

- [ABPerson](abperson.md): An object that encapsulates all information about a person in the Address Book database.
- [ABGroup](abgroup.md): An object that represents a group of records in the Address Book database.
- [ABMutableMultiValue](abmutablemultivalue-swift.class.md): A mutable representation of a property that might have multiple values.
- [ABImageClient](abimageclient.md): Methods for responding to a request to load images associated with a contact.
- [ABRecord](abrecord-swift.class.md): An abstract class that defines the common properties for all Address Book records.
