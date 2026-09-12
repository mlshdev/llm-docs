> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem](https://developer.apple.com/documentation/fskit/fsitem)

# FSItem (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.

## Declaration

```swift
class FSItem
```

<a id="overview"></a>

## Overview

An `FSItem` is a mostly opaque object, which your file system implementation defines as needed.

The [FSItem.Attributes](fsitem/attributes.md) class defines nonatomic properties to support `FSItem` instances. An [FSItem.Attributes](fsitem/attributes.md) instance contains a snapshot of the attributes of an `FSItem` at one point in time. The [FSItem.Attributes](fsitem/attributes.md) properties have no explicit thread safety provisions, since the operations that either get or set these properties enforce thread safety.

You test an attribute’s validity with the the method [isValid(\_:)](fsitem/attributes/isvalid%28__%29.md). If the value is `true` (Swift) or `YES` (Objective-C), it’s safe to use the attribute.

Methods that get or set an item’s attribute use [FSItem.GetAttributesRequest](fsitem/getattributesrequest.md) or [FSItem.SetAttributesRequest](fsitem/setattributesrequest.md), respectively. Both are subclasses of [FSItem.Attributes](fsitem/attributes.md). An [FSItem.GetAttributesRequest](fsitem/getattributesrequest.md) contains a [wantedAttributes](fsitem/getattributesrequest/wantedattributes.md) property to indicate the attributes a file system provides for the request. Similarly, [FSItem.SetAttributesRequest](fsitem/setattributesrequest.md) uses the property [consumedAttributes](fsitem/setattributesrequest/consumedattributes.md) for a file system to signal back which attributes it successfully used.

`FSItem` is the FSKit equivelant of a vnode in the kernel. For every FSKit vnode in the kernel, the `FSModule` hosting the volume has an instantiated `FSItem`.

## Topics

### Identifying an item

- [FSItem.Identifier](fsitem/identifier.md): The unique identifier for an item.
- [FSItem.ItemType](fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.

### Working with attributes

- [FSItem.Attributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSItem.GetAttributesRequest](fsitem/getattributesrequest.md): A request to get attributes from an item.
- [FSItem.SetAttributesRequest](fsitem/setattributesrequest.md): A request to set attributes on an item.

### Reclaiming items

- [tryReclaim(\_:)](fsitem/tryreclaim%28__%29.md): Reclaims the item by executing the given block, if conditions allow.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# FSItem (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.

## Declaration

```objectivec
@interface FSItem : NSObject
```

<a id="overview"></a>

## Overview

An `FSItem` is a mostly opaque object, which your file system implementation defines as needed.

The [FSItemAttributes](fsitem/attributes.md) class defines nonatomic properties to support `FSItem` instances. An [FSItemAttributes](fsitem/attributes.md) instance contains a snapshot of the attributes of an `FSItem` at one point in time. The [FSItemAttributes](fsitem/attributes.md) properties have no explicit thread safety provisions, since the operations that either get or set these properties enforce thread safety.

You test an attribute’s validity with the the method [isValid:](fsitem/attributes/isvalid%28__%29.md). If the value is `true` (Swift) or `YES` (Objective-C), it’s safe to use the attribute.

Methods that get or set an item’s attribute use [FSItemGetAttributesRequest](fsitem/getattributesrequest.md) or [FSItemSetAttributesRequest](fsitem/setattributesrequest.md), respectively. Both are subclasses of [FSItemAttributes](fsitem/attributes.md). An [FSItemGetAttributesRequest](fsitem/getattributesrequest.md) contains a [wantedAttributes](fsitem/getattributesrequest/wantedattributes.md) property to indicate the attributes a file system provides for the request. Similarly, [FSItemSetAttributesRequest](fsitem/setattributesrequest.md) uses the property [consumedAttributes](fsitem/setattributesrequest/consumedattributes.md) for a file system to signal back which attributes it successfully used.

`FSItem` is the FSKit equivelant of a vnode in the kernel. For every FSKit vnode in the kernel, the `FSModule` hosting the volume has an instantiated `FSItem`.

## Topics

### Identifying an item

- [FSItemID](fsitem/identifier.md): The unique identifier for an item.
- [FSItemType](fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.

### Working with attributes

- [FSItemAttributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSItemGetAttributesRequest](fsitem/getattributesrequest.md): A request to get attributes from an item.
- [FSItemSetAttributesRequest](fsitem/setattributesrequest.md): A request to set attributes on an item.

### Reclaiming items

- [tryReclaimWithBlock:](fsitem/tryreclaim%28__%29.md): Reclaims the item by executing the given block, if conditions allow.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
