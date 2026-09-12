> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinestate/imageblocksamplelength](https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/imageblocksamplelength)

# imageblockSampleLength (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The memory size, in byes, of the render pipeline’s imageblock for a single sample.

## Declaration

```swift
var imageblockSampleLength: Int { get }
```

## See Also

### Checking tile shader memory requirements

- [maxTotalThreadsPerThreadgroup](maxtotalthreadsperthreadgroup.md): The largest number of threads the pipeline state can have in a single tile shader threadgroup.
- [threadgroupSizeMatchesTileSize](threadgroupsizematchestilesize.md): A Boolean value that indicates whether the pipeline state needs a threadgroup’s size to equal a tile’s size.
- [imageblockMemoryLength(forDimensions:)](imageblockmemorylength%28fordimensions_%29.md): Returns the length of an imageblock’s memory for the specified imageblock dimensions.

# imageblockSampleLength (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The memory size, in byes, of the render pipeline’s imageblock for a single sample.

## Declaration

```objectivec
@property (readonly) NSUInteger imageblockSampleLength;
```

## See Also

### Checking tile shader memory requirements

- [maxTotalThreadsPerThreadgroup](maxtotalthreadsperthreadgroup.md): The largest number of threads the pipeline state can have in a single tile shader threadgroup.
- [threadgroupSizeMatchesTileSize](threadgroupsizematchestilesize.md): A Boolean value that indicates whether the pipeline state needs a threadgroup’s size to equal a tile’s size.
- [imageblockMemoryLengthForDimensions:](imageblockmemorylength%28fordimensions_%29.md): Returns the length of an imageblock’s memory for the specified imageblock dimensions.
