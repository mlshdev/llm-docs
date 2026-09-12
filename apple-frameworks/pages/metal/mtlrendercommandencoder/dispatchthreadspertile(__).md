> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/dispatchthreadspertile(_:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/dispatchthreadspertile(_:))

# dispatchThreadsPerTile(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Encodes a command that invokes GPU functions from the encoder’s current tile render pipeline state.

## Declaration

```swift
func dispatchThreadsPerTile(_ threadsPerTile: MTLSize)
```

## Parameters

- `threadsPerTile`: An [MTLSize](../mtlsize.md) instance that represents the number of threads the render pass uses per tile.

  Set the size’s [width](../mtlsize/width.md) and [height](../mtlsize/height.md) properties to values that are less than or equal to [tileWidth](tilewidth.md) and [tileHeight](tileheight.md), respectively. Some GPU families only support square tile dispatches and require the same value for [width](../mtlsize/width.md) and [height](../mtlsize/height.md). See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check which GPU families support nonsquare dispatches.

  Set the [depth](../mtlsize/depth.md) property to `1`.

<a id="discussion"></a>

## Discussion

The command invokes the GPU function that’s in the encoder’s current tile render pipeline state. You can configure that state with the following steps:

1. Configure an [MTLTileRenderPipelineDescriptor](../mtltilerenderpipelinedescriptor.md) instance.
2. Create a tile render pipeline state by calling one of the applicable methods of an [MTLDevice](../mtldevice.md) instance, including [makeRenderPipelineState(tileDescriptor:options:reflection:)](../mtldevice/makerenderpipelinestate%28tiledescriptor_options_reflection_%29.md).
3. Apply that tile render pipeline state by calling the [setRenderPipelineState(\_:)](setrenderpipelinestate%28__%29.md) method.

The method records the encoder’s current rendering state and resources the command needs as it runs. You can safely change the encoder’s render pipeline state to encode other commands after calling this method. Subsequent changes to the state don’t affect the commands already in the encoder’s [MTLCommandBuffer](../mtlcommandbuffer.md).

## See Also

### Drawing with tile shaders

- [tileWidth](tilewidth.md): The width of the tiles, in pixels, for the render command encoder.
- [tileHeight](tileheight.md): The height of the tiles, in pixels, for the render command encoder.

# dispatchThreadsPerTile: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Encodes a command that invokes GPU functions from the encoder’s current tile render pipeline state.

## Declaration

```objectivec
- (void) dispatchThreadsPerTile:(MTLSize) threadsPerTile;
```

## Parameters

- `threadsPerTile`: An [MTLSize](../mtlsize.md) instance that represents the number of threads the render pass uses per tile.

  Set the size’s [width](../mtlsize/width.md) and [height](../mtlsize/height.md) properties to values that are less than or equal to [tileWidth](tilewidth.md) and [tileHeight](tileheight.md), respectively. Some GPU families only support square tile dispatches and require the same value for [width](../mtlsize/width.md) and [height](../mtlsize/height.md). See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check which GPU families support nonsquare dispatches.

  Set the [depth](../mtlsize/depth.md) property to `1`.

<a id="discussion"></a>

## Discussion

The command invokes the GPU function that’s in the encoder’s current tile render pipeline state. You can configure that state with the following steps:

1. Configure an [MTLTileRenderPipelineDescriptor](../mtltilerenderpipelinedescriptor.md) instance.
2. Create a tile render pipeline state by calling one of the applicable methods of an [MTLDevice](../mtldevice.md) instance, including [newRenderPipelineStateWithTileDescriptor:options:reflection:error:](../mtldevice/makerenderpipelinestate%28tiledescriptor_options_reflection_%29.md).
3. Apply that tile render pipeline state by calling the [setRenderPipelineState:](setrenderpipelinestate%28__%29.md) method.

The method records the encoder’s current rendering state and resources the command needs as it runs. You can safely change the encoder’s render pipeline state to encode other commands after calling this method. Subsequent changes to the state don’t affect the commands already in the encoder’s [MTLCommandBuffer](../mtlcommandbuffer.md).

## See Also

### Drawing with tile shaders

- [tileWidth](tilewidth.md): The width of the tiles, in pixels, for the render command encoder.
- [tileHeight](tileheight.md): The height of the tiles, in pixels, for the render command encoder.
