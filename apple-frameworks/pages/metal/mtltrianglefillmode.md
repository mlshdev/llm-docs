> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltrianglefillmode](https://developer.apple.com/documentation/metal/mtltrianglefillmode)

# MTLTriangleFillMode (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Specifies how to rasterize triangle and triangle strip primitives.

## Declaration

```swift
enum MTLTriangleFillMode
```

## Topics

### Fill modes

- [MTLTriangleFillMode.fill](mtltrianglefillmode/fill.md): Rasterize triangle and triangle strip primitives as filled triangles.
- [MTLTriangleFillMode.lines](mtltrianglefillmode/lines.md): Rasterize triangle and triangle strip primitives as lines.

### Initializers

- [init(rawValue:)](mtltrianglefillmode/init%28rawvalue_%29.md)

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
- [MTLWinding](mtlwinding.md): The vertex winding rule that determines a front-facing primitive.
- [MTLCullMode](mtlcullmode.md): The mode that determines whether to perform culling and which type of primitive to cull.
- [MTLPrimitiveType](mtlprimitivetype.md): The geometric primitive type for drawing commands.
- [MTLIndexType](mtlindextype.md): The index type for an index buffer that references vertices of geometric primitives.
- [MTLDepthClipMode](mtldepthclipmode.md): The mode that determines how to deal with fragments outside of the near or far planes.
- [MTLVisibilityResultMode](mtlvisibilityresultmode.md): The mode that determines what, if anything, the GPU writes to the results buffer, after the GPU executes the render pass.
- [MTLVisibilityResultType](mtlvisibilityresulttype.md): This enumeration controls if Metal accumulates visibility results between render encoders or resets them.

# MTLTriangleFillMode (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Specifies how to rasterize triangle and triangle strip primitives.

## Declaration

```objectivec
enum MTLTriangleFillMode : NSUInteger;
```

## Topics

### Fill modes

- [MTLTriangleFillModeFill](mtltrianglefillmode/fill.md): Rasterize triangle and triangle strip primitives as filled triangles.
- [MTLTriangleFillModeLines](mtltrianglefillmode/lines.md): Rasterize triangle and triangle strip primitives as lines.

## See Also

### Encoding a render pass

- [MTL4RenderCommandEncoder](mtl4rendercommandencoder.md): Encodes configuration and draw commands for a single render pass into a command buffer.
- [MTLRenderCommandEncoder](mtlrendercommandencoder.md): Encodes configuration and draw commands for a single render pass into a command buffer.
- [MTL4RenderEncoderOptions](mtl4renderencoderoptions.md): Custom render pass options you specify at encoder creation time.
- [MTLWinding](mtlwinding.md): The vertex winding rule that determines a front-facing primitive.
- [MTLCullMode](mtlcullmode.md): The mode that determines whether to perform culling and which type of primitive to cull.
- [MTLPrimitiveType](mtlprimitivetype.md): The geometric primitive type for drawing commands.
- [MTLIndexType](mtlindextype.md): The index type for an index buffer that references vertices of geometric primitives.
- [MTLDepthClipMode](mtldepthclipmode.md): The mode that determines how to deal with fragments outside of the near or far planes.
- [MTLVisibilityResultMode](mtlvisibilityresultmode.md): The mode that determines what, if anything, the GPU writes to the results buffer, after the GPU executes the render pass.
- [MTLVisibilityResultType](mtlvisibilityresulttype.md): This enumeration controls if Metal accumulates visibility results between render encoders or resets them.
