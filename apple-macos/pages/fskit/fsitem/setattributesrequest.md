> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/setattributesrequest](https://developer.apple.com/documentation/fskit/fsitem/setattributesrequest)

# FSItem.SetAttributesRequest (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A request to set attributes on an item.

## Declaration

```swift
class SetAttributesRequest
```

<a id="overview"></a>

## Overview

Methods that take attributes use this type to receive attribute values and to indicate which attributes they support. The various members of the parent type, [FSItem.Attributes](attributes.md), contain the values of the attributes to set.

Modify the [consumedAttributes](setattributesrequest/consumedattributes.md) property to indicate which attributes your file system successfully used. FSKit calls the [wasAttributeConsumed(\_:)](setattributesrequest/wasattributeconsumed%28__%29.md) method to determine whether the file system successfully used a given attribute. Only set the attributes that your file system supports.

## Topics

### Inspecting used attributes

- [consumedAttributes](setattributesrequest/consumedattributes.md): The attributes successfully used by the file system.
- [wasAttributeConsumed(\_:)](setattributesrequest/wasattributeconsumed%28__%29.md): A method that indicates whether the file system used the given attribute.
- [FSItem.Attribute](attribute.md): A value that indicates a set of item attributes to get or set.

## Relationships

### Inherits From

- [FSItem.Attributes](attributes.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Working with attributes

- [FSItem.Attributes](attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSItem.GetAttributesRequest](getattributesrequest.md): A request to get attributes from an item.

# FSItemSetAttributesRequest (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A request to set attributes on an item.

## Declaration

```objectivec
@interface FSItemSetAttributesRequest : FSItemAttributes
```

<a id="overview"></a>

## Overview

Methods that take attributes use this type to receive attribute values and to indicate which attributes they support. The various members of the parent type, [FSItemAttributes](attributes.md), contain the values of the attributes to set.

Modify the [consumedAttributes](setattributesrequest/consumedattributes.md) property to indicate which attributes your file system successfully used. FSKit calls the [wasAttributeConsumed:](setattributesrequest/wasattributeconsumed%28__%29.md) method to determine whether the file system successfully used a given attribute. Only set the attributes that your file system supports.

## Topics

### Inspecting used attributes

- [consumedAttributes](setattributesrequest/consumedattributes.md): The attributes successfully used by the file system.
- [wasAttributeConsumed:](setattributesrequest/wasattributeconsumed%28__%29.md): A method that indicates whether the file system used the given attribute.
- [FSItemAttribute](attribute.md): A value that indicates a set of item attributes to get or set.

## Relationships

### Inherits From

- [FSItemAttributes](attributes.md)

## See Also

### Working with attributes

- [FSItemAttributes](attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSItemGetAttributesRequest](getattributesrequest.md): A request to get attributes from an item.
