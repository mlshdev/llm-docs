> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsseekregionresult](https://developer.apple.com/documentation/fskit/fsseekregionresult)

# FSSeekRegionResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

A seek-region result.

## Declaration

```swift
class FSSeekRegionResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [seek(within:from:region:context:replyHandler:)](fsvolume/seekregionhandler/seek%28within_from_region_context_replyhandler_%29.md).

## Topics

### Creating a seek-region result

- [init(returnedOffset:)](fsseekregionresult/init%28returnedoffset_%29.md): Creates a result for a region-seeking operation.

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

### Performing seek

- [seek(within:from:region:context:replyHandler:)](fsvolume/seekregionhandler/seek%28within_from_region_context_replyhandler_%29.md): Find the next offset of hole or data region greater than or equal to the supplied offset
- [FSItem](fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSVolume.SeekRegion](fsvolume/seekregion.md): Types of region for seek operations
- [FSContext](fscontext.md): A context object that provides information about the initiator of a file system operation.

# FSSeekRegionResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

A seek-region result.

## Declaration

```objectivec
@interface FSSeekRegionResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [seekWithinItem:fromOffset:region:context:replyHandler:](fsvolume/seekregionhandler/seek%28within_from_region_context_replyhandler_%29.md).

## Topics

### Creating a seek-region result

- [initWithReturnedOffset:](fsseekregionresult/init%28returnedoffset_%29.md): Creates a result for a region-seeking operation.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Performing seek

- [seekWithinItem:fromOffset:region:context:replyHandler:](fsvolume/seekregionhandler/seek%28within_from_region_context_replyhandler_%29.md): Find the next offset of hole or data region greater than or equal to the supplied offset
- [FSItem](fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSSeekRegion](fsvolume/seekregion.md): Types of region for seek operations
- [FSContext](fscontext.md): A context object that provides information about the initiator of a file system operation.
