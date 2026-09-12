> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltilerenderpipelinedescriptor/tilebuffers](https://developer.apple.com/documentation/metal/mtltilerenderpipelinedescriptor/tilebuffers)

# tileBuffers (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 11.0+ · visionOS 1.0+

An array that contains the buffer mutability options for a render pipeline’s tile function.

## Declaration

```swift
var tileBuffers: MTLPipelineBufferDescriptorArray { get }
```

<a id="discussion"></a>

## Discussion

This property returns an array of [MTLPipelineBufferDescriptor](../mtlpipelinebufferdescriptor.md) objects, with each array index corresponding to the same index in the buffer argument table for the render pipeline’s tile shader.

## See Also

### Specifying graphics functions and associated data

- [tileFunction](tilefunction.md): The compute kernel or fragment function the pipeline calls.
- [maxCallStackDepth](maxcallstackdepth.md): The maximum call stack depth for indirect function calls in tile shaders.

# tileBuffers (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

An array that contains the buffer mutability options for a render pipeline’s tile function.

## Declaration

```objectivec
@property (readonly) MTLPipelineBufferDescriptorArray * tileBuffers;
```

<a id="discussion"></a>

## Discussion

This property returns an array of [MTLPipelineBufferDescriptor](../mtlpipelinebufferdescriptor.md) objects, with each array index corresponding to the same index in the buffer argument table for the render pipeline’s tile shader.

## See Also

### Specifying graphics functions and associated data

- [tileFunction](tilefunction.md): The compute kernel or fragment function the pipeline calls.
- [maxCallStackDepth](maxcallstackdepth.md): The maximum call stack depth for indirect function calls in tile shaders.
