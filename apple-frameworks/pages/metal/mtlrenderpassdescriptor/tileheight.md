> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassdescriptor/tileheight](https://developer.apple.com/documentation/metal/mtlrenderpassdescriptor/tileheight)

# tileHeight (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The tile height, in pixels.

## Declaration

```swift
var tileHeight: Int { get set }
```

<a id="discussion"></a>

## Discussion

The valid tile sizes are `32 x 32`, `32 x 16`, and `16 x 16`. The Metal driver chooses a default size when your app doesn’t set a tile size.

## See Also

### Specifying tile shading parameters

- [imageblockSampleLength](imageblocksamplelength.md): The per-sample size, in bytes, of the largest explicit imageblock layout in the render pass.
- [threadgroupMemoryLength](threadgroupmemorylength.md): The per-tile size, in bytes, of the persistent threadgroup memory allocation.
- [tileWidth](tilewidth.md): The tile width, in pixels.

# tileHeight (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The tile height, in pixels.

## Declaration

```objectivec
@property (nonatomic) NSUInteger tileHeight;
```

<a id="discussion"></a>

## Discussion

The valid tile sizes are `32 x 32`, `32 x 16`, and `16 x 16`. The Metal driver chooses a default size when your app doesn’t set a tile size.

## See Also

### Specifying tile shading parameters

- [imageblockSampleLength](imageblocksamplelength.md): The per-sample size, in bytes, of the largest explicit imageblock layout in the render pass.
- [threadgroupMemoryLength](threadgroupmemorylength.md): The per-tile size, in bytes, of the persistent threadgroup memory allocation.
- [tileWidth](tilewidth.md): The tile width, in pixels.
