> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderpassdescriptor/tileheight](https://developer.apple.com/documentation/metal/mtl4renderpassdescriptor/tileheight)

# tileHeight (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The height of the tiles, in pixels, a render pass you create with this descriptor applies to its attachments.

## Declaration

```swift
var tileHeight: Int { get set }
```

<a id="discussion"></a>

## Discussion

For tile-based rendering, Metal divides each render attachment into smaller regions, or *tiles*. The property’s default is `0`, which tells Metal to select a size that fits in tile memory.

See [Tailor your apps for Apple GPUs and tile-based deferred rendering](../tailor-your-apps-for-apple-gpus-and-tile-based-deferred-rendering.md) for more information about tiles, tile memory, and deferred rendering.

# tileHeight (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The height of the tiles, in pixels, a render pass you create with this descriptor applies to its attachments.

## Declaration

```objectivec
@property (nonatomic) NSUInteger tileHeight;
```

<a id="discussion"></a>

## Discussion

For tile-based rendering, Metal divides each render attachment into smaller regions, or *tiles*. The property’s default is `0`, which tells Metal to select a size that fits in tile memory.

See [Tailor your apps for Apple GPUs and tile-based deferred rendering](../tailor-your-apps-for-apple-gpus-and-tile-based-deferred-rendering.md) for more information about tiles, tile memory, and deferred rendering.
