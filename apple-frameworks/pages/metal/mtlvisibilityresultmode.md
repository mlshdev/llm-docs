> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvisibilityresultmode](https://developer.apple.com/documentation/metal/mtlvisibilityresultmode)

# MTLVisibilityResultMode (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The mode that determines what, if anything, the GPU writes to the results buffer, after the GPU executes the render pass.

## Declaration

```swift
enum MTLVisibilityResultMode
```

## Topics

### Result modes

- [MTLVisibilityResultMode.disabled](mtlvisibilityresultmode/disabled.md): The result doesn’t contain any data because visibility testing was disabled.
- [MTLVisibilityResultMode.boolean](mtlvisibilityresultmode/boolean.md): The result records whether any samples passed depth and stencil tests.
- [MTLVisibilityResultMode.counting](mtlvisibilityresultmode/counting.md): The result records how many samples passed depth and stencil tests.

### Initializers

- [init(rawValue:)](mtlvisibilityresultmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [setVisibilityResultMode(\_:offset:)](mtlrendercommandencoder/setvisibilityresultmode%28__offset_%29.md): Configures which visibility test the GPU runs and the destination for any results it generates.

### Encoding a render pass

- [MTL4RenderCommandEncoder](mtl4rendercommandencoder.md): Encodes configuration and draw commands for a single render pass into a command buffer.
- [MTLRenderCommandEncoder](mtlrendercommandencoder.md): Encodes configuration and draw commands for a single render pass into a command buffer.
- [MTL4RenderEncoderOptions](mtl4renderencoderoptions.md): Custom render pass options you specify at encoder creation time.
- [MTLTriangleFillMode](mtltrianglefillmode.md): Specifies how to rasterize triangle and triangle strip primitives.
- [MTLWinding](mtlwinding.md): The vertex winding rule that determines a front-facing primitive.
- [MTLCullMode](mtlcullmode.md): The mode that determines whether to perform culling and which type of primitive to cull.
- [MTLPrimitiveType](mtlprimitivetype.md): The geometric primitive type for drawing commands.
- [MTLIndexType](mtlindextype.md): The index type for an index buffer that references vertices of geometric primitives.
- [MTLDepthClipMode](mtldepthclipmode.md): The mode that determines how to deal with fragments outside of the near or far planes.
- [MTLVisibilityResultType](mtlvisibilityresulttype.md): This enumeration controls if Metal accumulates visibility results between render encoders or resets them.

# MTLVisibilityResultMode (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The mode that determines what, if anything, the GPU writes to the results buffer, after the GPU executes the render pass.

## Declaration

```objectivec
enum MTLVisibilityResultMode : NSUInteger;
```

## Topics

### Result modes

- [MTLVisibilityResultModeDisabled](mtlvisibilityresultmode/disabled.md): The result doesn’t contain any data because visibility testing was disabled.
- [MTLVisibilityResultModeBoolean](mtlvisibilityresultmode/boolean.md): The result records whether any samples passed depth and stencil tests.
- [MTLVisibilityResultModeCounting](mtlvisibilityresultmode/counting.md): The result records how many samples passed depth and stencil tests.

## See Also

### Related Documentation

- [setVisibilityResultMode:offset:](mtlrendercommandencoder/setvisibilityresultmode%28__offset_%29.md): Configures which visibility test the GPU runs and the destination for any results it generates.

### Encoding a render pass

- [MTL4RenderCommandEncoder](mtl4rendercommandencoder.md): Encodes configuration and draw commands for a single render pass into a command buffer.
- [MTLRenderCommandEncoder](mtlrendercommandencoder.md): Encodes configuration and draw commands for a single render pass into a command buffer.
- [MTL4RenderEncoderOptions](mtl4renderencoderoptions.md): Custom render pass options you specify at encoder creation time.
- [MTLTriangleFillMode](mtltrianglefillmode.md): Specifies how to rasterize triangle and triangle strip primitives.
- [MTLWinding](mtlwinding.md): The vertex winding rule that determines a front-facing primitive.
- [MTLCullMode](mtlcullmode.md): The mode that determines whether to perform culling and which type of primitive to cull.
- [MTLPrimitiveType](mtlprimitivetype.md): The geometric primitive type for drawing commands.
- [MTLIndexType](mtlindextype.md): The index type for an index buffer that references vertices of geometric primitives.
- [MTLDepthClipMode](mtldepthclipmode.md): The mode that determines how to deal with fragments outside of the near or far planes.
- [MTLVisibilityResultType](mtlvisibilityresulttype.md): This enumeration controls if Metal accumulates visibility results between render encoders or resets them.
