> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassdescriptor/threadgroupmemorylength](https://developer.apple.com/documentation/metal/mtlrenderpassdescriptor/threadgroupmemorylength)

# threadgroupMemoryLength (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The per-tile size, in bytes, of the persistent threadgroup memory allocation.

## Declaration

```swift
var threadgroupMemoryLength: Int { get set }
```

## See Also

### Specifying tile shading parameters

- [imageblockSampleLength](imageblocksamplelength.md): The per-sample size, in bytes, of the largest explicit imageblock layout in the render pass.
- [tileWidth](tilewidth.md): The tile width, in pixels.
- [tileHeight](tileheight.md): The tile height, in pixels.

# threadgroupMemoryLength (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The per-tile size, in bytes, of the persistent threadgroup memory allocation.

## Declaration

```objectivec
@property (nonatomic) NSUInteger threadgroupMemoryLength;
```

## See Also

### Specifying tile shading parameters

- [imageblockSampleLength](imageblocksamplelength.md): The per-sample size, in bytes, of the largest explicit imageblock layout in the render pass.
- [tileWidth](tilewidth.md): The tile width, in pixels.
- [tileHeight](tileheight.md): The tile height, in pixels.
