> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/attributes](https://developer.apple.com/documentation/fskit/fsitem/attributes)

# FSItem.Attributes (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

Attributes of an item, such as size, creation and modification times, and user and group identifiers.

## Declaration

```swift
class Attributes
```

<a id="overview"></a>

## Overview

> **Important**

> FSKit internally maintains a unique sequence number for each set of attributes to determine the most up-to-date set of attributes of a given [FSItem](../fsitem.md). To prevent an older set of attributes from having a newer sequence number, all attributes of a given [FSItem.Attributes](attributes.md) object should be populated within the same synchronization context. This synchronization context should prevent any other thread from populating another [FSItem.Attributes](attributes.md) object of the given [FSItem](../fsitem.md).

## Topics

### Validating and invalidating attributes

- [isValid(\_:)](attributes/isvalid%28__%29.md): Returns a Boolean value that indicates whether the attribute is valid.
- [invalidateAllProperties()](attributes/invalidateallproperties%28%29.md): Marks all attributes inactive.

### Working with identifier attributes

- [fileID](attributes/fileid.md): The item’s file identifier.
- [parentID](attributes/parentid.md): The identifier of the item’s parent.

### Working with metadata attributes

- [type](attributes/type.md): The item type, such as a regular file, directory, or symbolic link.
- [mode](attributes/mode.md): The mode of the item.
- [linkCount](attributes/linkcount.md): The number of hard links to the item.
- [uid](attributes/uid.md): The user identifier.
- [gid](attributes/gid.md): The group identifier.
- [flags](attributes/flags.md): The item’s behavior flags.
- [size](attributes/size.md): The item’s size.
- [allocSize](attributes/allocsize.md): The item’s allocated size.
- [supportsLimitedXAttrs](attributes/supportslimitedxattrs.md): A Boolean value that indicates whether the item supports a limited set of extended attributes.
- [inhibitKernelOffloadedIO](attributes/inhibitkerneloffloadedio.md): A Boolean value that indicates whether the file system overrides the per-volume settings for kernel offloaded I/O for a specific file.

### Working with time attributes

- [accessTime](attributes/accesstime.md): The item’s last-accessed time.
- [modifyTime](attributes/modifytime.md): The item’s last-modified time.
- [changeTime](attributes/changetime.md): The item’s last-changed time.
- [birthTime](attributes/birthtime.md): The item’s creation time.
- [backupTime](attributes/backuptime.md): The item’s last-backup time.
- [addedTime](attributes/addedtime.md): The item’s added time.

### Initializers

- [init(coder:)](attributes/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [FSItem.SetAttributesRequest](setattributesrequest.md)

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

- [FSItem.GetAttributesRequest](getattributesrequest.md): A request to get attributes from an item.
- [FSItem.SetAttributesRequest](setattributesrequest.md): A request to set attributes on an item.

# FSItemAttributes (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

Attributes of an item, such as size, creation and modification times, and user and group identifiers.

## Declaration

```objectivec
@interface FSItemAttributes : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

> FSKit internally maintains a unique sequence number for each set of attributes to determine the most up-to-date set of attributes of a given [FSItem](../fsitem.md). To prevent an older set of attributes from having a newer sequence number, all attributes of a given [FSItemAttributes](attributes.md) object should be populated within the same synchronization context. This synchronization context should prevent any other thread from populating another [FSItemAttributes](attributes.md) object of the given [FSItem](../fsitem.md).

## Topics

### Validating and invalidating attributes

- [isValid:](attributes/isvalid%28__%29.md): Returns a Boolean value that indicates whether the attribute is valid.
- [invalidateAllProperties](attributes/invalidateallproperties%28%29.md): Marks all attributes inactive.

### Working with identifier attributes

- [fileID](attributes/fileid.md): The item’s file identifier.
- [parentID](attributes/parentid.md): The identifier of the item’s parent.

### Working with metadata attributes

- [type](attributes/type.md): The item type, such as a regular file, directory, or symbolic link.
- [mode](attributes/mode.md): The mode of the item.
- [linkCount](attributes/linkcount.md): The number of hard links to the item.
- [uid](attributes/uid.md): The user identifier.
- [gid](attributes/gid.md): The group identifier.
- [flags](attributes/flags.md): The item’s behavior flags.
- [size](attributes/size.md): The item’s size.
- [allocSize](attributes/allocsize.md): The item’s allocated size.
- [supportsLimitedXAttrs](attributes/supportslimitedxattrs.md): A Boolean value that indicates whether the item supports a limited set of extended attributes.
- [inhibitKernelOffloadedIO](attributes/inhibitkerneloffloadedio.md): A Boolean value that indicates whether the file system overrides the per-volume settings for kernel offloaded I/O for a specific file.

### Working with time attributes

- [accessTime](attributes/accesstime.md): The item’s last-accessed time.
- [modifyTime](attributes/modifytime.md): The item’s last-modified time.
- [changeTime](attributes/changetime.md): The item’s last-changed time.
- [birthTime](attributes/birthtime.md): The item’s creation time.
- [backupTime](attributes/backuptime.md): The item’s last-backup time.
- [addedTime](attributes/addedtime.md): The item’s added time.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [FSItemSetAttributesRequest](setattributesrequest.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Working with attributes

- [FSItemGetAttributesRequest](getattributesrequest.md): A request to get attributes from an item.
- [FSItemSetAttributesRequest](setattributesrequest.md): A request to set attributes on an item.
