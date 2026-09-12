> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscompleteioresult](https://developer.apple.com/documentation/fskit/fscompleteioresult)

# FSCompleteIOResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a complete-I/O call.

## Declaration

```swift
class FSCompleteIOResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of  [completeIO(for:offset:length:status:flags:operationID:replyHandler:)](fsvolume/kerneloffloadediohandler/completeio%28for_offset_length_status_flags_operationid_replyhandler_%29.md)

## Topics

### Creating a complete-IO result

- [init(itemAttributes:)](fscompleteioresult/init%28itemattributes_%29.md): Creates a result for an I/O-completion operation.
- [FSItem.Attributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

### Initializers

- [init(attributes:)](fscompleteioresult/init%28attributes_%29.md)

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
- [FSBlockmapResult](fsblockmapresult.md): The result of a blockmap call.
- [completeIO(for:offset:length:status:flags:operationID:replyHandler:)](fsvolume/kerneloffloadediohandler/completeio%28for_offset_length_status_flags_operationid_replyhandler_%29.md): Completes an I/O operation for a given file.
- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.

# FSCompleteIOResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a complete-I/O call.

## Declaration

```objectivec
@interface FSCompleteIOResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of  [completeIOForFile:offset:length:status:flags:operationID:replyHandler:](fsvolume/kerneloffloadediohandler/completeio%28for_offset_length_status_flags_operationid_replyhandler_%29.md)

## Topics

### Creating a complete-IO result

- [initWithAttributes:](fscompleteioresult/init%28itemattributes_%29.md): Creates a result for an I/O-completion operation.
- [FSItemAttributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Performing mapped I/O

- [blockmapFile:offset:length:flags:operationID:packer:replyHandler:](fsvolume/kerneloffloadediohandler/blockmapfile%28__offset_length_flags_operationid_packer_replyhandler_%29.md): Maps a file’s disk space into extents, allowing the kernel to perform I/O with that space.
- [FSBlockmapFlags](fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSBlockmapResult](fsblockmapresult.md): The result of a blockmap call.
- [completeIOForFile:offset:length:status:flags:operationID:replyHandler:](fsvolume/kerneloffloadediohandler/completeio%28for_offset_length_status_flags_operationid_replyhandler_%29.md): Completes an I/O operation for a given file.
- [FSCompleteIOFlags](fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
