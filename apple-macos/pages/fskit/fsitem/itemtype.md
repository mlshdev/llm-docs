> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/itemtype](https://developer.apple.com/documentation/fskit/fsitem/itemtype)

# FSItem.ItemType (Swift)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

An enumeration of item types, such as file, directory, or symbolic link.

## Declaration

```swift
enum ItemType
```

## Topics

### Working with item types

- [FSItem.ItemType.file](itemtype/file.md): The item type of a regular file.
- [FSItem.ItemType.directory](itemtype/directory.md): The item type of a directory.
- [FSItem.ItemType.symlink](itemtype/symlink.md): The item type of a symbolic link.
- [FSItem.ItemType.fifo](itemtype/fifo.md): The item type of a first-in/first-out named pipe.
- [FSItem.ItemType.charDevice](itemtype/chardevice.md): The item type of a character device.
- [FSItem.ItemType.blockDevice](itemtype/blockdevice.md): The item type of a block device.
- [FSItem.ItemType.socket](itemtype/socket.md): The item type of a socket.
- [FSItem.ItemType.unknown](itemtype/unknown.md): The item type of an unknown item.

### Working with raw values

- [init(rawValue:)](itemtype/init%28rawvalue_%29.md)

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

- [FSItem.Identifier](identifier.md): The unique identifier for an item.

# FSItemType (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

An enumeration of item types, such as file, directory, or symbolic link.

## Declaration

```objectivec
enum FSItemType : NSInteger;
```

## Topics

### Working with item types

- [FSItemTypeFile](itemtype/file.md): The item type of a regular file.
- [FSItemTypeDirectory](itemtype/directory.md): The item type of a directory.
- [FSItemTypeSymlink](itemtype/symlink.md): The item type of a symbolic link.
- [FSItemTypeFIFO](itemtype/fifo.md): The item type of a first-in/first-out named pipe.
- [FSItemTypeCharDevice](itemtype/chardevice.md): The item type of a character device.
- [FSItemTypeBlockDevice](itemtype/blockdevice.md): The item type of a block device.
- [FSItemTypeSocket](itemtype/socket.md): The item type of a socket.
- [FSItemTypeUnknown](itemtype/unknown.md): The item type of an unknown item.

## See Also

### Identifying an item

- [FSItemID](identifier.md): The unique identifier for an item.
