> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinestate/threadgroupsizematchestilesize](https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/threadgroupsizematchestilesize)

# threadgroupSizeMatchesTileSize (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

A Boolean value that indicates whether the pipeline state needs a threadgroup’s size to equal a tile’s size.

## Declaration

```swift
var threadgroupSizeMatchesTileSize: Bool { get }
```

## See Also

### Checking tile shader memory requirements

- [maxTotalThreadsPerThreadgroup](maxtotalthreadsperthreadgroup.md): The largest number of threads the pipeline state can have in a single tile shader threadgroup.
- [imageblockSampleLength](imageblocksamplelength.md): The memory size, in byes, of the render pipeline’s imageblock for a single sample.
- [imageblockMemoryLength(forDimensions:)](imageblockmemorylength%28fordimensions_%29.md): Returns the length of an imageblock’s memory for the specified imageblock dimensions.

# threadgroupSizeMatchesTileSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

A Boolean value that indicates whether the pipeline state needs a threadgroup’s size to equal a tile’s size.

## Declaration

```objectivec
@property (readonly) BOOL threadgroupSizeMatchesTileSize;
```

## See Also

### Checking tile shader memory requirements

- [maxTotalThreadsPerThreadgroup](maxtotalthreadsperthreadgroup.md): The largest number of threads the pipeline state can have in a single tile shader threadgroup.
- [imageblockSampleLength](imageblocksamplelength.md): The memory size, in byes, of the render pipeline’s imageblock for a single sample.
- [imageblockMemoryLengthForDimensions:](imageblockmemorylength%28fordimensions_%29.md): Returns the length of an imageblock’s memory for the specified imageblock dimensions.
