> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandbuffer/makerendercommandencoder(descriptor:options:)](https://developer.apple.com/documentation/metal/mtl4commandbuffer/makerendercommandencoder(descriptor:options:))

# makeRenderCommandEncoder(descriptor:options:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a render command encoder from a render pass descriptor with additional options.

## Declaration

```swift
func makeRenderCommandEncoder(descriptor: MTL4RenderPassDescriptor, options: MTL4RenderEncoderOptions = []) -> (any MTL4RenderCommandEncoder)?
```

## Parameters

- `descriptor`: Descriptor for the render pass.
- `options`: [MTL4RenderEncoderOptions](../mtl4renderencoderoptions.md) instance that provide render pass options.

<a id="return-value"></a>

## Return Value

The created [MTL4RenderCommandEncoder](../mtl4rendercommandencoder.md) instance, or `nil` if the function fails.

<a id="discussion"></a>

## Discussion

This method creates a render command encoder to encode a render pass, whilst providing you the option to define some render pass characteristics via an instance of [MTL4RenderEncoderOptions](../mtl4renderencoderoptions.md).

Use these options to configure suspending/resuming render command encoders, which allow you to encode render passes from multiple threads simultaneously.

# renderCommandEncoderWithDescriptor:options: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a render command encoder from a render pass descriptor with additional options.

## Declaration

```objectivec
- (id<MTL4RenderCommandEncoder>) renderCommandEncoderWithDescriptor:(MTL4RenderPassDescriptor *) descriptor options:(MTL4RenderEncoderOptions) options;
```

## Parameters

- `descriptor`: Descriptor for the render pass.
- `options`: [MTL4RenderEncoderOptions](../mtl4renderencoderoptions.md) instance that provide render pass options.

<a id="return-value"></a>

## Return Value

The created [MTL4RenderCommandEncoder](../mtl4rendercommandencoder.md) instance, or `nil` if the function fails.

<a id="discussion"></a>

## Discussion

This method creates a render command encoder to encode a render pass, whilst providing you the option to define some render pass characteristics via an instance of [MTL4RenderEncoderOptions](../mtl4renderencoderoptions.md).

Use these options to configure suspending/resuming render command encoders, which allow you to encode render passes from multiple threads simultaneously.
