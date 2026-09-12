> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fspreallocateresult](https://developer.apple.com/documentation/fskit/fspreallocateresult)

# FSPreallocateResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a preallocate call.

## Declaration

```swift
class FSPreallocateResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of  [preallocateSpace(for:at:length:flags:context:replyHandler:)](fsvolume/preallocatehandler/preallocatespace%28for_at_length_flags_context_replyhandler_%29.md)

## Topics

### Creating a preallocate result

- [init(bytesAllocated:itemAttributes:freeSpace:)](fspreallocateresult/init%28bytesallocated_itemattributes_freespace_%29.md): Creates a result for a preallocate operation.
- [FSItem.Attributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

### Inherited By

- [FSPreallocateKOIOResult](fspreallocatekoioresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Preallocating space

- [preallocateSpace(for:at:length:flags:context:replyHandler:)](fsvolume/preallocatehandler/preallocatespace%28for_at_length_flags_context_replyhandler_%29.md): Preallocates disk space for the given item.
- [FSVolume.PreallocateFlags](fsvolume/preallocateflags.md): Behavior flags for preallocation operations.

# FSPreallocateResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a preallocate call.

## Declaration

```objectivec
@interface FSPreallocateResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of  [preallocateSpaceForItem:atOffset:length:flags:context:replyHandler:](fsvolume/preallocatehandler/preallocatespace%28for_at_length_flags_context_replyhandler_%29.md)

## Topics

### Creating a preallocate result

- [initWithBytesAllocated:itemAttributes:freeSpace:](fspreallocateresult/init%28bytesallocated_itemattributes_freespace_%29.md): Creates a result for a preallocate operation.
- [FSItemAttributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

### Inherited By

- [FSPreallocateKOIOResult](fspreallocatekoioresult.md)

## See Also

### Preallocating space

- [preallocateSpaceForItem:atOffset:length:flags:context:replyHandler:](fsvolume/preallocatehandler/preallocatespace%28for_at_length_flags_context_replyhandler_%29.md): Preallocates disk space for the given item.
- [FSPreallocateFlags](fsvolume/preallocateflags.md): Behavior flags for preallocation operations.
