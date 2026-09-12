> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsdirectoryentrypacker](https://developer.apple.com/documentation/fskit/fsdirectoryentrypacker)

# FSDirectoryEntryPacker (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

An object used to provide items during a directory enumeration.

## Declaration

```swift
class FSDirectoryEntryPacker
```

<a id="overview"></a>

## Overview

You use this type in your implementation of [enumerateDirectory(\_:startingAt:verifier:attributes:packer:context:replyHandler:)](fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md).

Packing allows your implementation to provide information FSKit needs, including each item’s name, type, and identifier (such as an inode number). Some directory enumerations require other attributes, as indicated by the [FSItem.GetAttributesRequest](fsitem/getattributesrequest.md) sent to the enumerate method.

## Topics

### Packing entries

- [packEntry(name:itemType:itemID:nextCookie:attributes:)](fsdirectoryentrypacker/packentry%28name_itemtype_itemid_nextcookie_attributes_%29.md): Provides a directory entry during enumeration.
- [FSItem.ItemType](fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItem.Identifier](fsitem/identifier.md): The unique identifier for an item.
- [FSDirectoryCookie](fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryCookie](fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSItem.Attributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

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

## See Also

### Inspecting directory contents

- [enumerateDirectory(\_:startingAt:verifier:attributes:packer:context:replyHandler:)](fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md): Enumerates the contents of the given directory.
- [FSDirectoryCookie](fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryCookie](fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSEnumerateDirectoryResult](fsenumeratedirectoryresult.md): The result of an enumerate-directory call.

# FSDirectoryEntryPacker (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

An object used to provide items during a directory enumeration.

## Declaration

```objectivec
@interface FSDirectoryEntryPacker : NSObject
```

<a id="overview"></a>

## Overview

You use this type in your implementation of [enumerateDirectory:startingAtCookie:verifier:providingAttributes:usingPacker:context:replyHandler:](fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md).

Packing allows your implementation to provide information FSKit needs, including each item’s name, type, and identifier (such as an inode number). Some directory enumerations require other attributes, as indicated by the [FSItemGetAttributesRequest](fsitem/getattributesrequest.md) sent to the enumerate method.

## Topics

### Packing entries

- [packEntryWithName:itemType:itemID:nextCookie:attributes:](fsdirectoryentrypacker/packentry%28name_itemtype_itemid_nextcookie_attributes_%29.md): Provides a directory entry during enumeration.
- [FSItemType](fsitem/itemtype.md): An enumeration of item types, such as file, directory, or symbolic link.
- [FSItemID](fsitem/identifier.md): The unique identifier for an item.
- [FSDirectoryCookie](fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryCookie](fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSItemAttributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Inspecting directory contents

- [enumerateDirectory:startingAtCookie:verifier:providingAttributes:usingPacker:context:replyHandler:](fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md): Enumerates the contents of the given directory.
- [FSDirectoryCookie](fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryCookie](fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSEnumerateDirectoryResult](fsenumeratedirectoryresult.md): The result of an enumerate-directory call.
