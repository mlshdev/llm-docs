> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/identifier](https://developer.apple.com/documentation/fskit/fsitem/identifier)

# FSItem.Identifier (Swift)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

The unique identifier for an item.

## Declaration

```swift
enum Identifier
```

<a id="overview"></a>

## Overview

Use this type when packing items for an enumeration in [packEntry(name:itemType:itemID:nextCookie:attributes:)](../fsdirectoryentrypacker/packentry%28name_itemtype_itemid_nextcookie_attributes_%29.md). Either provide a unique identifier like an inode number, or one of the special enumeration cases this type defines, like [FSItem.Identifier.rootDirectory](identifier/rootdirectory.md).

## Topics

### Working with special identifiers

- [FSItem.Identifier.invalid](identifier/invalid.md): The identifier for an invalid item.
- [FSItem.Identifier.parentOfRoot](identifier/parentofroot.md): The identifier for an item that serves as the parent of the root directory.
- [FSItem.Identifier.rootDirectory](identifier/rootdirectory.md): The item identifier for the root directory.

### Working with raw values

- [init(rawValue:)](identifier/init%28rawvalue_%29.md)

### Initializers

- [init(\_:)](identifier/init%28__%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying an item

- [FSItem.ItemType](itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.

# FSItemID (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

The unique identifier for an item.

## Declaration

```objectivec
enum FSItemID : UInt64;
```

<a id="overview"></a>

## Overview

Use this type when packing items for an enumeration in [packEntryWithName:itemType:itemID:nextCookie:attributes:](../fsdirectoryentrypacker/packentry%28name_itemtype_itemid_nextcookie_attributes_%29.md). Either provide a unique identifier like an inode number, or one of the special enumeration cases this type defines, like [FSItemIDRootDirectory](identifier/rootdirectory.md).

## Topics

### Working with special identifiers

- [FSItemIDInvalid](identifier/invalid.md): The identifier for an invalid item.
- [FSItemIDParentOfRoot](identifier/parentofroot.md): The identifier for an item that serves as the parent of the root directory.
- [FSItemIDRootDirectory](identifier/rootdirectory.md): The item identifier for the root directory.

## See Also

### Identifying an item

- [FSItemType](itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
