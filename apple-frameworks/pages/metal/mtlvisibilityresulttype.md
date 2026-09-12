> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvisibilityresulttype](https://developer.apple.com/documentation/metal/mtlvisibilityresulttype)

# MTLVisibilityResultType (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

This enumeration controls if Metal accumulates visibility results between render encoders or resets them.

## Declaration

```swift
enum MTLVisibilityResultType
```

<a id="overview"></a>

## Overview

You can specify this property for `MTLRenderCommandEncoders` and for `MTL4RenderCommandEncoders` through their descriptors’ `MTLRenderCommandEncoder/visibilityResultType` and `MTL4RenderCommandEncoder/visibilityResultType` methods.

## Topics

### Enumeration Cases

- [MTLVisibilityResultType.accumulate](mtlvisibilityresulttype/accumulate.md): Accumulate visibility results data across multiple render passes.
- [MTLVisibilityResultType.reset](mtlvisibilityresulttype/reset.md): Reset visibility result data when you create a render command encoder.

### Initializers

- [init(rawValue:)](mtlvisibilityresulttype/init%28rawvalue_%29.md)

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
- [MTLCullMode](mtlcullmode.md): The mode that determines whether to perform culling and which type of primitive to cull.
- [MTLPrimitiveType](mtlprimitivetype.md): The geometric primitive type for drawing commands.
- [MTLIndexType](mtlindextype.md): The index type for an index buffer that references vertices of geometric primitives.
- [MTLDepthClipMode](mtldepthclipmode.md): The mode that determines how to deal with fragments outside of the near or far planes.
- [MTLVisibilityResultMode](mtlvisibilityresultmode.md): The mode that determines what, if anything, the GPU writes to the results buffer, after the GPU executes the render pass.

# MTLVisibilityResultType (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

This enumeration controls if Metal accumulates visibility results between render encoders or resets them.

## Declaration

```objectivec
enum MTLVisibilityResultType : NSInteger;
```

<a id="overview"></a>

## Overview

You can specify this property for `MTLRenderCommandEncoders` and for `MTL4RenderCommandEncoders` through their descriptors’ `MTLRenderCommandEncoder/visibilityResultType` and `MTL4RenderCommandEncoder/visibilityResultType` methods.

## Topics

### Enumeration Cases

- [MTLVisibilityResultTypeAccumulate](mtlvisibilityresulttype/accumulate.md): Accumulate visibility results data across multiple render passes.
- [MTLVisibilityResultTypeReset](mtlvisibilityresulttype/reset.md): Reset visibility result data when you create a render command encoder.

## See Also

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
- [MTLVisibilityResultMode](mtlvisibilityresultmode.md): The mode that determines what, if anything, the GPU writes to the results buffer, after the GPU executes the render pass.
