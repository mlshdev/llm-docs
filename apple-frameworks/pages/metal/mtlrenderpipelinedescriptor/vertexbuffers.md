> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/vertexbuffers](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/vertexbuffers)

# vertexBuffers (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An array that contains the buffer mutability options for a render pipeline’s vertex function.

## Declaration

```swift
var vertexBuffers: MTLPipelineBufferDescriptorArray { get }
```

<a id="discussion"></a>

## Discussion

This property returns an array of [MTLPipelineBufferDescriptor](../mtlpipelinebufferdescriptor.md) instances, where each element corresponds to the same index in the buffer argument table for the render pipeline’s vertex function.

```objective-c
// Indicate the vertex buffer at index 7 is immutable while setting up the render pipeline.
MTLRenderPipelineDescriptor *renderDescriptor = [MTLRenderPipelineDescriptor new];
renderDescriptor.vertexBuffers[7].mutability = MTLMutabilityImmutable;

// Create an encoder for the render pass.
id <MTLRenderCommandEncoder> renderEncoder;
renderEncoder = [_commandBuffer renderCommandEncoderWithDescriptor:_renderPassDescriptor];

// Assign the buffer at index 7 for the render pass.
[renderEncoder setVertexBuffer:_buffer offset:0 atIndex:7];
```

## See Also

### Specifying buffer mutability

- [fragmentBuffers](fragmentbuffers.md): An array that contains the buffer mutability options for a render pipeline’s fragment function.

# vertexBuffers (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An array that contains the buffer mutability options for a render pipeline’s vertex function.

## Declaration

```objectivec
@property (readonly) MTLPipelineBufferDescriptorArray * vertexBuffers;
```

<a id="discussion"></a>

## Discussion

This property returns an array of [MTLPipelineBufferDescriptor](../mtlpipelinebufferdescriptor.md) instances, where each element corresponds to the same index in the buffer argument table for the render pipeline’s vertex function.

```objective-c
// Indicate the vertex buffer at index 7 is immutable while setting up the render pipeline.
MTLRenderPipelineDescriptor *renderDescriptor = [MTLRenderPipelineDescriptor new];
renderDescriptor.vertexBuffers[7].mutability = MTLMutabilityImmutable;

// Create an encoder for the render pass.
id <MTLRenderCommandEncoder> renderEncoder;
renderEncoder = [_commandBuffer renderCommandEncoderWithDescriptor:_renderPassDescriptor];

// Assign the buffer at index 7 for the render pass.
[renderEncoder setVertexBuffer:_buffer offset:0 atIndex:7];
```

## See Also

### Specifying buffer mutability

- [fragmentBuffers](fragmentbuffers.md): An array that contains the buffer mutability options for a render pipeline’s fragment function.
