> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctraininggraph/gradientdata(forparameter:layer:)](https://developer.apple.com/documentation/mlcompute/mlctraininggraph/gradientdata(forparameter:layer:))

# gradientData(forParameter:layer:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Gets the gradient data for the trainable parameter and associated layer you specify.

## Declaration

```swift
func gradientData(forParameter parameter: MLCTensor, layer: MLCLayer) -> Data?
```

## Parameters

- `parameter`: The trainable parameter you associated with the layer.
- `layer`: A layer in the training graph.

<a id="return-value"></a>

## Return Value

The gradient data, or `nil`.

<a id="Discussion"></a>

## Discussion

The layer must be an instance one of the following types:

- [MLCConvolutionLayer](../mlcconvolutionlayer.md)
- [MLCFullyConnectedLayer](../mlcfullyconnectedlayer.md)
- [MLCBatchNormalizationLayer](../mlcbatchnormalizationlayer.md)
- [MLCInstanceNormalizationLayer](../mlcinstancenormalizationlayer.md)
- [MLCGroupNormalizationLayer](../mlcgroupnormalizationlayer.md)
- [MLCLayerNormalizationLayer](../mlclayernormalizationlayer.md)

> **Note**

>  This method returns `nil` if the layer isn’t trainable or you didn’t execute the training graph with separate calls to forward and gradient passes.

## See Also

### Inspecting Training Graphs

- [bindOptimizerData(\_:deviceData:with:)](bindoptimizerdata%28__devicedata_with_%29.md): Deprecated. Associates the optimizer and device data you specify along with the tensor.
- [optimizer](optimizer.md): Deprecated. The optimizer to use with the training graph.
- [deviceMemorySize](devicememorysize.md): Deprecated. The device memory size in bytes for all intermediate tensors for forward, gradient passes, and optimizer updates for all layers in the training graph.
- [gradientTensor(forInput:)](gradienttensor%28forinput_%29.md): Deprecated. Gets the gradient tensor for the input tensor you specify.
- [sourceGradientTensors(for:)](sourcegradienttensors%28for_%29.md): Deprecated. Gets the source gradient tensors for the layer in the training graph you specify.
- [resultGradientTensors(for:)](resultgradienttensors%28for_%29.md): Deprecated. Gets the result gradient tensors for the layer in the training graph you specify.

# gradientDataForParameter:layer: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Gets the gradient data for the trainable parameter and associated layer you specify.

## Declaration

```objectivec
- (NSData *) gradientDataForParameter:(MLCTensor *) parameter layer:(MLCLayer *) layer;
```

## Parameters

- `parameter`: The trainable parameter you associated with the layer.
- `layer`: A layer in the training graph.

<a id="return-value"></a>

## Return Value

The gradient data, or `nil`.

<a id="Discussion"></a>

## Discussion

The layer must be an instance one of the following types:

- [MLCConvolutionLayer](../mlcconvolutionlayer.md)
- [MLCFullyConnectedLayer](../mlcfullyconnectedlayer.md)
- [MLCBatchNormalizationLayer](../mlcbatchnormalizationlayer.md)
- [MLCInstanceNormalizationLayer](../mlcinstancenormalizationlayer.md)
- [MLCGroupNormalizationLayer](../mlcgroupnormalizationlayer.md)
- [MLCLayerNormalizationLayer](../mlclayernormalizationlayer.md)

> **Note**

>  This method returns `nil` if the layer isn’t trainable or you didn’t execute the training graph with separate calls to forward and gradient passes.

## See Also

### Inspecting Training Graphs

- [bindOptimizerData:deviceData:withTensor:](bindoptimizerdata%28__devicedata_with_%29.md): Deprecated. Associates the optimizer and device data you specify along with the tensor.
- [optimizer](optimizer.md): Deprecated. The optimizer to use with the training graph.
- [deviceMemorySize](devicememorysize.md): Deprecated. The device memory size in bytes for all intermediate tensors for forward, gradient passes, and optimizer updates for all layers in the training graph.
- [gradientTensorForInput:](gradienttensor%28forinput_%29.md): Deprecated. Gets the gradient tensor for the input tensor you specify.
- [sourceGradientTensorsForLayer:](sourcegradienttensors%28for_%29.md): Deprecated. Gets the source gradient tensors for the layer in the training graph you specify.
- [resultGradientTensorsForLayer:](resultgradienttensors%28for_%29.md): Deprecated. Gets the result gradient tensors for the layer in the training graph you specify.
