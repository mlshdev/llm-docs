> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinestate/maxtotalthreadsperthreadgroup](https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/maxtotalthreadsperthreadgroup)

# maxTotalThreadsPerThreadgroup (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The largest number of threads the pipeline state can have in a single tile shader threadgroup.

## Declaration

```swift
var maxTotalThreadsPerThreadgroup: Int { get }
```

## See Also

### Checking tile shader memory requirements

- [threadgroupSizeMatchesTileSize](threadgroupsizematchestilesize.md): A Boolean value that indicates whether the pipeline state needs a threadgroup’s size to equal a tile’s size.
- [imageblockSampleLength](imageblocksamplelength.md): The memory size, in byes, of the render pipeline’s imageblock for a single sample.
- [imageblockMemoryLength(forDimensions:)](imageblockmemorylength%28fordimensions_%29.md): Returns the length of an imageblock’s memory for the specified imageblock dimensions.

# maxTotalThreadsPerThreadgroup (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The largest number of threads the pipeline state can have in a single tile shader threadgroup.

## Declaration

```objectivec
@property (readonly) NSUInteger maxTotalThreadsPerThreadgroup;
```

## See Also

### Checking tile shader memory requirements

- [threadgroupSizeMatchesTileSize](threadgroupsizematchestilesize.md): A Boolean value that indicates whether the pipeline state needs a threadgroup’s size to equal a tile’s size.
- [imageblockSampleLength](imageblocksamplelength.md): The memory size, in byes, of the render pipeline’s imageblock for a single sample.
- [imageblockMemoryLengthForDimensions:](imageblockmemorylength%28fordimensions_%29.md): Returns the length of an imageblock’s memory for the specified imageblock dimensions.
