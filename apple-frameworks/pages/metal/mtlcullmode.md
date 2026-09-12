> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcullmode](https://developer.apple.com/documentation/metal/mtlcullmode)

# MTLCullMode (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The mode that determines whether to perform culling and which type of primitive to cull.

## Declaration

```swift
enum MTLCullMode
```

## Topics

### Cull modes

- [MTLCullMode.none](mtlcullmode/none.md): Does not cull any primitives.
- [MTLCullMode.front](mtlcullmode/front.md): Culls front-facing primitives.
- [MTLCullMode.back](mtlcullmode/back.md): Culls back-facing primitives.

### Initializers

- [init(rawValue:)](mtlcullmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Encoding a render pass

- [MTL4RenderCommandEncoder](mtl4rendercommandencoder.md): Encodes configuration and draw commands for a single render pass into a command buffer.
- [MTLRenderCommandEncoder](mtlrendercommandencoder.md): Encodes configuration and draw commands for a single render pass into a command buffer.
- [MTL4RenderEncoderOptions](mtl4renderencoderoptions.md): Custom render pass options you specify at encoder creation time.
- [MTLTriangleFillMode](mtltrianglefillmode.md): Specifies how to rasterize triangle and triangle strip primitives.
- [MTLWinding](mtlwinding.md): The vertex winding rule that determines a front-facing primitive.
- [MTLPrimitiveType](mtlprimitivetype.md): The geometric primitive type for drawing commands.
- [MTLIndexType](mtlindextype.md): The index type for an index buffer that references vertices of geometric primitives.
- [MTLDepthClipMode](mtldepthclipmode.md): The mode that determines how to deal with fragments outside of the near or far planes.
- [MTLVisibilityResultMode](mtlvisibilityresultmode.md): The mode that determines what, if anything, the GPU writes to the results buffer, after the GPU executes the render pass.
- [MTLVisibilityResultType](mtlvisibilityresulttype.md): This enumeration controls if Metal accumulates visibility results between render encoders or resets them.

# MTLCullMode (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The mode that determines whether to perform culling and which type of primitive to cull.

## Declaration

```objectivec
enum MTLCullMode : NSUInteger;
```

## Topics

### Cull modes

- [MTLCullModeNone](mtlcullmode/none.md): Does not cull any primitives.
- [MTLCullModeFront](mtlcullmode/front.md): Culls front-facing primitives.
- [MTLCullModeBack](mtlcullmode/back.md): Culls back-facing primitives.

## See Also

### Encoding a render pass

- [MTL4RenderCommandEncoder](mtl4rendercommandencoder.md): Encodes configuration and draw commands for a single render pass into a command buffer.
- [MTLRenderCommandEncoder](mtlrendercommandencoder.md): Encodes configuration and draw commands for a single render pass into a command buffer.
- [MTL4RenderEncoderOptions](mtl4renderencoderoptions.md): Custom render pass options you specify at encoder creation time.
- [MTLTriangleFillMode](mtltrianglefillmode.md): Specifies how to rasterize triangle and triangle strip primitives.
- [MTLWinding](mtlwinding.md): The vertex winding rule that determines a front-facing primitive.
- [MTLPrimitiveType](mtlprimitivetype.md): The geometric primitive type for drawing commands.
- [MTLIndexType](mtlindextype.md): The index type for an index buffer that references vertices of geometric primitives.
- [MTLDepthClipMode](mtldepthclipmode.md): The mode that determines how to deal with fragments outside of the near or far planes.
- [MTLVisibilityResultMode](mtlvisibilityresultmode.md): The mode that determines what, if anything, the GPU writes to the results buffer, after the GPU executes the render pass.
- [MTLVisibilityResultType](mtlvisibilityresulttype.md): This enumeration controls if Metal accumulates visibility results between render encoders or resets them.
