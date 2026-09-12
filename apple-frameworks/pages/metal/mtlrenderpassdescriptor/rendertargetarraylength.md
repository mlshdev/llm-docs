> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassdescriptor/rendertargetarraylength](https://developer.apple.com/documentation/metal/mtlrenderpassdescriptor/rendertargetarraylength)

# renderTargetArrayLength (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 14.5+ · visionOS 1.0+

The number of active layers that all attachments need to have for layered rendering.

## Declaration

```swift
var renderTargetArrayLength: Int { get set }
```

## Mentioned In

- [Rendering to multiple texture slices in a draw command](../rendering-to-multiple-texture-slices-in-a-draw-command.md)

<a id="discussion"></a>

## Discussion

The default value is `0`, indicating that the GPU does not use layered rendering on this render pass.

The table below gives typical values you might set, depending on the type of texture being used as attachments in the render pass. Your vertex shader need to select the render target array index between `0` and the array length minus `1`.

| Texture Type | Typical Length |
| --- | --- |
| [MTLTextureType.type1DArray](../mtltexturetype/type1darray.md) or [MTLTextureType.type2DArray](../mtltexturetype/type2darray.md) | The length of the texture array ([arrayLength](../mtltexture/arraylength.md)) |
| [MTLTextureType.typeCube](../mtltexturetype/typecube.md) | 6 |
| [MTLTextureType.typeCubeArray](../mtltexturetype/typecubearray.md) | 6 times the length of the texture array ([arrayLength](../mtltexture/arraylength.md)) |

## See Also

### Layered rendering

- [renderTargetWidth](rendertargetwidth.md): The width, in pixels, to constrain the render target to.
- [renderTargetHeight](rendertargetheight.md): The height, in pixels, to constrain the render target to.

# renderTargetArrayLength (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 14.5+ · visionOS 1.0+

The number of active layers that all attachments need to have for layered rendering.

## Declaration

```objectivec
@property (nonatomic) NSUInteger renderTargetArrayLength;
```

## Mentioned In

- [Rendering to multiple texture slices in a draw command](../rendering-to-multiple-texture-slices-in-a-draw-command.md)

<a id="discussion"></a>

## Discussion

The default value is `0`, indicating that the GPU does not use layered rendering on this render pass.

The table below gives typical values you might set, depending on the type of texture being used as attachments in the render pass. Your vertex shader need to select the render target array index between `0` and the array length minus `1`.

| Texture Type | Typical Length |
| --- | --- |
| [MTLTextureType1DArray](../mtltexturetype/type1darray.md) or [MTLTextureType2DArray](../mtltexturetype/type2darray.md) | The length of the texture array ([arrayLength](../mtltexture/arraylength.md)) |
| [MTLTextureTypeCube](../mtltexturetype/typecube.md) | 6 |
| [MTLTextureTypeCubeArray](../mtltexturetype/typecubearray.md) | 6 times the length of the texture array ([arrayLength](../mtltexture/arraylength.md)) |

## See Also

### Layered rendering

- [renderTargetWidth](rendertargetwidth.md): The width, in pixels, to constrain the render target to.
- [renderTargetHeight](rendertargetheight.md): The height, in pixels, to constrain the render target to.
