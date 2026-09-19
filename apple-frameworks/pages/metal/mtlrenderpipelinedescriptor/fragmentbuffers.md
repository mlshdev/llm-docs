> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/fragmentbuffers

# fragmentBuffers (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An array that contains the buffer mutability options for a render pipeline’s fragment function.

## Declaration

```swift
var fragmentBuffers: MTLPipelineBufferDescriptorArray { get }
```

<a id="discussion"></a>

## Discussion

This property returns an array of [MTLPipelineBufferDescriptor](../mtlpipelinebufferdescriptor.md) instances, where each element corresponds to the index in the buffer argument table for the render pipeline’s fragment function.

```objective-c
// Indicate the fragment buffer at index 8 is immutable while setting up the render pipeline.
MTLRenderPipelineDescriptor *renderDescriptor = [MTLRenderPipelineDescriptor new];
renderDescriptor.fragmentBuffers[8].mutability = MTLMutabilityImmutable;

// Create an encoder for the render pass.
id <MTLRenderCommandEncoder> renderEncoder;
renderEncoder = [_commandBuffer renderCommandEncoderWithDescriptor:_renderPassDescriptor];

// Assign the buffer at index 8 for the render pass.
[renderEncoder setFragmentBuffer:_buffer offset:0 atIndex:8];
```

## See Also

### Specifying buffer mutability

- [vertexBuffers](vertexbuffers.md): An array that contains the buffer mutability options for a render pipeline’s vertex function.

# fragmentBuffers (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An array that contains the buffer mutability options for a render pipeline’s fragment function.

## Declaration

```objectivec
@property (readonly) MTLPipelineBufferDescriptorArray * fragmentBuffers;
```

<a id="discussion"></a>

## Discussion

This property returns an array of [MTLPipelineBufferDescriptor](../mtlpipelinebufferdescriptor.md) instances, where each element corresponds to the index in the buffer argument table for the render pipeline’s fragment function.

```objective-c
// Indicate the fragment buffer at index 8 is immutable while setting up the render pipeline.
MTLRenderPipelineDescriptor *renderDescriptor = [MTLRenderPipelineDescriptor new];
renderDescriptor.fragmentBuffers[8].mutability = MTLMutabilityImmutable;

// Create an encoder for the render pass.
id <MTLRenderCommandEncoder> renderEncoder;
renderEncoder = [_commandBuffer renderCommandEncoderWithDescriptor:_renderPassDescriptor];

// Assign the buffer at index 8 for the render pass.
[renderEncoder setFragmentBuffer:_buffer offset:0 atIndex:8];
```

## See Also

### Specifying buffer mutability

- [vertexBuffers](vertexbuffers.md): An array that contains the buffer mutability options for a render pipeline’s vertex function.
