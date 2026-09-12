> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctraininggraph/optimizer](https://developer.apple.com/documentation/mlcompute/mlctraininggraph/optimizer)

# optimizer (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The optimizer to use with the training graph.

## Declaration

```swift
var optimizer: MLCOptimizer? { get }
```

## See Also

### Inspecting Training Graphs

- [bindOptimizerData(\_:deviceData:with:)](bindoptimizerdata%28__devicedata_with_%29.md): Deprecated. Associates the optimizer and device data you specify along with the tensor.
- [deviceMemorySize](devicememorysize.md): Deprecated. The device memory size in bytes for all intermediate tensors for forward, gradient passes, and optimizer updates for all layers in the training graph.
- [gradientTensor(forInput:)](gradienttensor%28forinput_%29.md): Deprecated. Gets the gradient tensor for the input tensor you specify.
- [sourceGradientTensors(for:)](sourcegradienttensors%28for_%29.md): Deprecated. Gets the source gradient tensors for the layer in the training graph you specify.
- [resultGradientTensors(for:)](resultgradienttensors%28for_%29.md): Deprecated. Gets the result gradient tensors for the layer in the training graph you specify.
- [gradientData(forParameter:layer:)](gradientdata%28forparameter_layer_%29.md): Deprecated. Gets the gradient data for the trainable parameter and associated layer you specify.

# optimizer (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The optimizer to use with the training graph.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) MLCOptimizer * optimizer;
```

## See Also

### Inspecting Training Graphs

- [bindOptimizerData:deviceData:withTensor:](bindoptimizerdata%28__devicedata_with_%29.md): Deprecated. Associates the optimizer and device data you specify along with the tensor.
- [deviceMemorySize](devicememorysize.md): Deprecated. The device memory size in bytes for all intermediate tensors for forward, gradient passes, and optimizer updates for all layers in the training graph.
- [gradientTensorForInput:](gradienttensor%28forinput_%29.md): Deprecated. Gets the gradient tensor for the input tensor you specify.
- [sourceGradientTensorsForLayer:](sourcegradienttensors%28for_%29.md): Deprecated. Gets the source gradient tensors for the layer in the training graph you specify.
- [resultGradientTensorsForLayer:](resultgradienttensors%28for_%29.md): Deprecated. Gets the result gradient tensors for the layer in the training graph you specify.
- [gradientDataForParameter:layer:](gradientdata%28forparameter_layer_%29.md): Deprecated. Gets the gradient data for the trainable parameter and associated layer you specify.
