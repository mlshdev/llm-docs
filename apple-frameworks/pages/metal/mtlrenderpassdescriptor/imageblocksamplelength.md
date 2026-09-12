> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassdescriptor/imageblocksamplelength](https://developer.apple.com/documentation/metal/mtlrenderpassdescriptor/imageblocksamplelength)

# imageblockSampleLength (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The per-sample size, in bytes, of the largest explicit imageblock layout in the render pass.

## Declaration

```swift
var imageblockSampleLength: Int { get set }
```

<a id="discussion"></a>

## Discussion

If `imageBlockSampleLength` isn’t specified, Metal determines the imageblock sample length from the render pass attachment formats.  If any render pipelines bound to the encoder reference imageblocks with explicit layout, you need to set this property.

## See Also

### Specifying tile shading parameters

- [threadgroupMemoryLength](threadgroupmemorylength.md): The per-tile size, in bytes, of the persistent threadgroup memory allocation.
- [tileWidth](tilewidth.md): The tile width, in pixels.
- [tileHeight](tileheight.md): The tile height, in pixels.

# imageblockSampleLength (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The per-sample size, in bytes, of the largest explicit imageblock layout in the render pass.

## Declaration

```objectivec
@property (nonatomic) NSUInteger imageblockSampleLength;
```

<a id="discussion"></a>

## Discussion

If `imageBlockSampleLength` isn’t specified, Metal determines the imageblock sample length from the render pass attachment formats.  If any render pipelines bound to the encoder reference imageblocks with explicit layout, you need to set this property.

## See Also

### Specifying tile shading parameters

- [threadgroupMemoryLength](threadgroupmemorylength.md): The per-tile size, in bytes, of the persistent threadgroup memory allocation.
- [tileWidth](tilewidth.md): The tile width, in pixels.
- [tileHeight](tileheight.md): The tile height, in pixels.
