> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsblockmapresult](https://developer.apple.com/documentation/fskit/fsblockmapresult)

# FSBlockmapResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a blockmap call.

## Declaration

```swift
class FSBlockmapResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [blockmapFile(\_:offset:length:flags:operationID:packer:replyHandler:)](fsvolume/kerneloffloadediohandler/blockmapfile%28__offset_length_flags_operationid_packer_replyhandler_%29.md).

## Topics

### Creating a blockmap result

- [init(freeSpace:)](fsblockmapresult/init%28freespace_%29.md): Creates a result for a blockmap operation.
- [FSFreeSpace](fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Performing mapped I/O

- [blockmapFile(\_:offset:length:flags:operationID:packer:replyHandler:)](fsvolume/kerneloffloadediohandler/blockmapfile%28__offset_length_flags_operationid_packer_replyhandler_%29.md): Maps a file’s disk space into extents, allowing the kernel to perform I/O with that space.
- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [completeIO(for:offset:length:status:flags:operationID:replyHandler:)](fsvolume/kerneloffloadediohandler/completeio%28for_offset_length_status_flags_operationid_replyhandler_%29.md): Completes an I/O operation for a given file.
- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSCompleteIOResult](fscompleteioresult.md): The result of a complete-I/O call.

# FSBlockmapResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a blockmap call.

## Declaration

```objectivec
@interface FSBlockmapResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [blockmapFile:offset:length:flags:operationID:packer:replyHandler:](fsvolume/kerneloffloadediohandler/blockmapfile%28__offset_length_flags_operationid_packer_replyhandler_%29.md).

## Topics

### Creating a blockmap result

- [initWithFreeSpace:](fsblockmapresult/init%28freespace_%29.md): Creates a result for a blockmap operation.
- [FSFreeSpace](fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Performing mapped I/O

- [blockmapFile:offset:length:flags:operationID:packer:replyHandler:](fsvolume/kerneloffloadediohandler/blockmapfile%28__offset_length_flags_operationid_packer_replyhandler_%29.md): Maps a file’s disk space into extents, allowing the kernel to perform I/O with that space.
- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [completeIOForFile:offset:length:status:flags:operationID:replyHandler:](fsvolume/kerneloffloadediohandler/completeio%28for_offset_length_status_flags_operationid_replyhandler_%29.md): Completes an I/O operation for a given file.
- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSCompleteIOResult](fscompleteioresult.md): The result of a complete-I/O call.
