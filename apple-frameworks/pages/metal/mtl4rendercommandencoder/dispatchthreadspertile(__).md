> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/dispatchthreadspertile(_:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/dispatchthreadspertile(_:))

# dispatchThreadsPerTile(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that invokes a tile shader function from the encoder’s current tile render pipeline state.

## Declaration

```swift
func dispatchThreadsPerTile(_ threadsPerTile: MTLSize)
```

## Parameters

- `threadsPerTile`: A [MTLSize](../mtlsize.md) instance that represents the number of threads the render pass uses per tile. Set the size’s [width](../mtlsize/width.md) and [height](../mtlsize/height.md) properties to values that are less than or equal to [tileWidth](tilewidth.md) and [tileHeight](tileheight.md), respectively. Some GPU families only support square tile dispatches and require the same value for width and height. Set [depth](../mtlsize/depth.md) to `1`.

## See Also

### Drawing with tile shaders

- [tileWidth](tilewidth.md): Sets the width of a tile for this render pass.
- [tileHeight](tileheight.md): Sets the height of a tile for this render pass.

# dispatchThreadsPerTile: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that invokes a tile shader function from the encoder’s current tile render pipeline state.

## Declaration

```objectivec
- (void) dispatchThreadsPerTile:(MTLSize) threadsPerTile;
```

## Parameters

- `threadsPerTile`: A [MTLSize](../mtlsize.md) instance that represents the number of threads the render pass uses per tile. Set the size’s [width](../mtlsize/width.md) and [height](../mtlsize/height.md) properties to values that are less than or equal to [tileWidth](tilewidth.md) and [tileHeight](tileheight.md), respectively. Some GPU families only support square tile dispatches and require the same value for width and height. Set [depth](../mtlsize/depth.md) to `1`.

## See Also

### Drawing with tile shaders

- [tileWidth](tilewidth.md): Sets the width of a tile for this render pass.
- [tileHeight](tileheight.md): Sets the height of a tile for this render pass.
