> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/tilewidth](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/tilewidth)

# tileWidth (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The width of the tiles, in pixels, for the render command encoder.

## Declaration

```swift
var tileWidth: Int { get }
```

<a id="discussion"></a>

## Discussion

The value comes from the [tileWidth](../mtlrenderpassdescriptor/tilewidth.md) property of the [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) at the time you create the render command encoder.

## See Also

### Drawing with tile shaders

- [dispatchThreadsPerTile(\_:)](dispatchthreadspertile%28__%29.md): Encodes a command that invokes GPU functions from the encoder’s current tile render pipeline state.
- [tileHeight](tileheight.md): The height of the tiles, in pixels, for the render command encoder.

# tileWidth (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

The width of the tiles, in pixels, for the render command encoder.

## Declaration

```objectivec
@property (readonly) NSUInteger tileWidth;
```

<a id="discussion"></a>

## Discussion

The value comes from the [tileWidth](../mtlrenderpassdescriptor/tilewidth.md) property of the [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) at the time you create the render command encoder.

## See Also

### Drawing with tile shaders

- [dispatchThreadsPerTile:](dispatchthreadspertile%28__%29.md): Encodes a command that invokes GPU functions from the encoder’s current tile render pipeline state.
- [tileHeight](tileheight.md): The height of the tiles, in pixels, for the render command encoder.
