> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctraininggraph/bindoptimizerdata(_:devicedata:with:)](https://developer.apple.com/documentation/mlcompute/mlctraininggraph/bindoptimizerdata(_:devicedata:with:))

# bindOptimizerData(\_:deviceData:with:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Associates the optimizer and device data you specify along with the tensor.

## Declaration

```swift
func bindOptimizerData(_ data: [MLCTensorData], deviceData: [MLCTensorOptimizerDeviceData]?, with tensor: MLCTensor) -> Bool
```

## Parameters

- `data`: The optimizer data that you want to associate with the tensor.
- `deviceData`: The optimizer device data that you want to associate with the tensor.
- `tensor`: The tensor that you want to associate the data with.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the data successfully associates with the tensor.

## See Also

### Inspecting Training Graphs

- [optimizer](optimizer.md): Deprecated. The optimizer to use with the training graph.
- [deviceMemorySize](devicememorysize.md): Deprecated. The device memory size in bytes for all intermediate tensors for forward, gradient passes, and optimizer updates for all layers in the training graph.
- [gradientTensor(forInput:)](gradienttensor%28forinput_%29.md): Deprecated. Gets the gradient tensor for the input tensor you specify.
- [sourceGradientTensors(for:)](sourcegradienttensors%28for_%29.md): Deprecated. Gets the source gradient tensors for the layer in the training graph you specify.
- [resultGradientTensors(for:)](resultgradienttensors%28for_%29.md): Deprecated. Gets the result gradient tensors for the layer in the training graph you specify.
- [gradientData(forParameter:layer:)](gradientdata%28forparameter_layer_%29.md): Deprecated. Gets the gradient data for the trainable parameter and associated layer you specify.

# bindOptimizerData:deviceData:withTensor: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Associates the optimizer and device data you specify along with the tensor.

## Declaration

```objectivec
- (BOOL) bindOptimizerData:(NSArray<MLCTensorData *> *) data deviceData:(NSArray<MLCTensorOptimizerDeviceData *> *) deviceData withTensor:(MLCTensor *) tensor;
```

## Parameters

- `data`: The optimizer data that you want to associate with the tensor.
- `deviceData`: The optimizer device data that you want to associate with the tensor.
- `tensor`: The tensor that you want to associate the data with.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the data successfully associates with the tensor.

## See Also

### Inspecting Training Graphs

- [optimizer](optimizer.md): Deprecated. The optimizer to use with the training graph.
- [deviceMemorySize](devicememorysize.md): Deprecated. The device memory size in bytes for all intermediate tensors for forward, gradient passes, and optimizer updates for all layers in the training graph.
- [gradientTensorForInput:](gradienttensor%28forinput_%29.md): Deprecated. Gets the gradient tensor for the input tensor you specify.
- [sourceGradientTensorsForLayer:](sourcegradienttensors%28for_%29.md): Deprecated. Gets the source gradient tensors for the layer in the training graph you specify.
- [resultGradientTensorsForLayer:](resultgradienttensors%28for_%29.md): Deprecated. Gets the result gradient tensors for the layer in the training graph you specify.
- [gradientDataForParameter:layer:](gradientdata%28forparameter_layer_%29.md): Deprecated. Gets the gradient data for the trainable parameter and associated layer you specify.
