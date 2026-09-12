> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcustomlayer/encode(commandbuffer:inputs:outputs:)](https://developer.apple.com/documentation/coreml/mlcustomlayer/encode(commandbuffer:inputs:outputs:))

# encode(commandBuffer:inputs:outputs:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

Encodes GPU commands to evaluate the custom layer.

## Declaration

```swift
optional func encode(commandBuffer: any MTLCommandBuffer, inputs: [any MTLTexture], outputs: [any MTLTexture]) throws
```

## Parameters

- `commandBuffer`: A command buffer that defines the work the layer performs on the GPU.
- `inputs`: A texture array that represents the layer’s inputs.
- `outputs`: A texture array that represents the layer’s outputs.

## Mentioned In

- [Creating and Integrating a Model with Custom Layers](../creating-and-integrating-a-model-with-custom-layers.md)

<a id="Discussion"></a>

## Discussion

Implement this method to use the GPU to evaluate your layer. Fill `commandBuffer` with the GPU commands that evaluate the layer. Don’t commit the command buffer in this method; Core ML executes the command buffer after this method returns.

Improve your layer’s performance by caching the [MTLComputePipelineState](../../metal/mtlcomputepipelinestate.md) instances you create and intend to reuse in subsequent calls.

Implementing this method doesn’t guarantee that Core ML evaluates this layer on the GPU. For example, Core ML may evaluate the layer on the CPU if the system doesn’t have enough GPU’s resources to run the custom layer.

> **Important**

>  The GPU works with 16-bit floats, not 32-bit floats. Verify that lower precision values don’t impact your network’s behavior.

If you don’t implement this method, Core ML instead uses [evaluate(inputs:outputs:)](evaluate%28inputs_outputs_%29.md).

For more information about using the GPU for general purpose programming, see `Compute Processing`.

## See Also

### Evaluating a layer

- [evaluate(inputs:outputs:)](evaluate%28inputs_outputs_%29.md): Evaluates the custom layer with the given inputs.

# encodeToCommandBuffer:inputs:outputs:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

Encodes GPU commands to evaluate the custom layer.

## Declaration

```objectivec
- (BOOL) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer inputs:(NSArray<id<MTLTexture>> *) inputs outputs:(NSArray<id<MTLTexture>> *) outputs error:(NSError **) error;
```

## Parameters

- `commandBuffer`: A command buffer that defines the work the layer performs on the GPU.
- `inputs`: A texture array that represents the layer’s inputs.
- `outputs`: A texture array that represents the layer’s outputs.
- `error`: On return in Objective-C, if an error occurs, a pointer to an error information instance; otherwise `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the method successfully filled `commandBuffer`; otherwise [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Creating and Integrating a Model with Custom Layers](../creating-and-integrating-a-model-with-custom-layers.md)

<a id="Discussion"></a>

## Discussion

Implement this method to use the GPU to evaluate your layer. Fill `commandBuffer` with the GPU commands that evaluate the layer. Don’t commit the command buffer in this method; Core ML executes the command buffer after this method returns.

Improve your layer’s performance by caching the [MTLComputePipelineState](../../metal/mtlcomputepipelinestate.md) instances you create and intend to reuse in subsequent calls.

Implementing this method doesn’t guarantee that Core ML evaluates this layer on the GPU. For example, Core ML may evaluate the layer on the CPU if the system doesn’t have enough GPU’s resources to run the custom layer.

> **Important**

>  The GPU works with 16-bit floats, not 32-bit floats. Verify that lower precision values don’t impact your network’s behavior.

If you don’t implement this method, Core ML instead uses [evaluateOnCPUWithInputs:outputs:error:](evaluate%28inputs_outputs_%29.md).

For more information about using the GPU for general purpose programming, see `Compute Processing`.

## See Also

### Evaluating a layer

- [evaluateOnCPUWithInputs:outputs:error:](evaluate%28inputs_outputs_%29.md): Evaluates the custom layer with the given inputs.
