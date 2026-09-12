> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsfreespace](https://developer.apple.com/documentation/fskit/fsfreespace)

# FSFreeSpace (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

A free space object that pairs free space values with atomic sequence numbers.

## Declaration

```swift
class FSFreeSpace
```

## Topics

### Creating a free space instance

- [init()](fsfreespace/init%28%29.md): Creates an unpopulated free space instance.

### Setting the free space value

- [populate(bytes:)](fsfreespace/populate%28bytes_%29.md): Populates this instance with the given free space value and atomically assigns a sequence number.

### Working with special instances

- [noUpdate](fsfreespace/noupdate.md): A sentinel instance that indicates no free space update occurred.

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

### Creating a create-item result

- [init(newItem:newItemName:newItemAttributes:directoryAttributes:freeSpace:)](fscreateitemresult/init%28newitem_newitemname_newitemattributes_directoryattributes_freespace_%29.md): Creates a result for an item-creation operation.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItem.Attributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

# FSFreeSpace (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

A free space object that pairs free space values with atomic sequence numbers.

## Declaration

```objectivec
@interface FSFreeSpace : NSObject
```

## Topics

### Creating a free space instance

- [init](fsfreespace/init%28%29.md): Creates an unpopulated free space instance.

### Setting the free space value

- [populateWithBytes:](fsfreespace/populate%28bytes_%29.md): Populates this instance with the given free space value and atomically assigns a sequence number.

### Working with special instances

- [noUpdate](fsfreespace/noupdate.md): A sentinel instance that indicates no free space update occurred.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Creating a create-item result

- [initWithNewItem:newItemName:newItemAttributes:directoryAttributes:freeSpace:](fscreateitemresult/init%28newitem_newitemname_newitemattributes_directoryattributes_freespace_%29.md): Creates a result for an item-creation operation.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemAttributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
