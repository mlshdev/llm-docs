> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/seekregion](https://developer.apple.com/documentation/fskit/fsvolume/seekregion)

# FSVolume.SeekRegion (Swift)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

Types of region for seek operations

## Declaration

```swift
enum SeekRegion
```

## Topics

### Seek region types

- [FSVolume.SeekRegion.data](seekregion/data.md): Seek the next data region.
- [FSVolume.SeekRegion.hole](seekregion/hole.md): Seek the next hole region.

### Initializers

- [init(rawValue:)](seekregion/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing seek

- [seek(within:from:region:context:replyHandler:)](seekregionhandler/seek%28within_from_region_context_replyhandler_%29.md): Find the next offset of hole or data region greater than or equal to the supplied offset
- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSContext](../fscontext.md): A context object that provides information about the initiator of a file system operation.
- [FSSeekRegionResult](../fsseekregionresult.md): A seek-region result.

# FSSeekRegion (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

Types of region for seek operations

## Declaration

```objectivec
enum FSSeekRegion : NSUInteger;
```

## Topics

### Seek region types

- [FSSeekRegionData](seekregion/data.md): Seek the next data region.
- [FSSeekRegionHole](seekregion/hole.md): Seek the next hole region.

## See Also

### Performing seek

- [seekWithinItem:fromOffset:region:context:replyHandler:](seekregionhandler/seek%28within_from_region_context_replyhandler_%29.md): Find the next offset of hole or data region greater than or equal to the supplied offset
- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSContext](../fscontext.md): A context object that provides information about the initiator of a file system operation.
- [FSSeekRegionResult](../fsseekregionresult.md): A seek-region result.
