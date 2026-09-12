> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/lstmgradients(_:recurrentweight:sourcegradient:zstate:celloutputfwd:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/lstmgradients(_:recurrentweight:sourcegradient:zstate:celloutputfwd:descriptor:name:))

# LSTMGradients(\_:recurrentWeight:sourceGradient:zState:cellOutputFwd:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates an LSTM gradient operation and returns the gradient tensor values.

## Declaration

```swift
func LSTMGradients(_ source: MPSGraphTensor, recurrentWeight: MPSGraphTensor, sourceGradient: MPSGraphTensor, zState: MPSGraphTensor, cellOutputFwd: MPSGraphTensor, descriptor: MPSGraphLSTMDescriptor, name: String?) -> [MPSGraphTensor]
```

## Parameters

- `source`: A tensor containing the source data `x[t]`  with the data layout \[T,N,I\]. In case `inputWeight = nil` and `bidirectional = NO` then the layout is \[T,N,4H\] and for `inputWeight = nil` and `bidirectional = YES` the layout is \[T,N,8H\].
- `recurrentWeight`: A tensor containing the recurrent weights `R`. For `bidirectional` the layout is \[2,4H,H\] and otherwise it is \[4H,H\].
- `sourceGradient`: The input gradient, that is the gradient of a tensor with respect to the first output of the forward pass.
- `zState`: The third output of [LSTM(\_:recurrentWeight:inputWeight:bias:initState:initCell:descriptor:name:)](lstm%28__recurrentweight_inputweight_bias_initstate_initcell_descriptor_name_%29.md) with `descriptor.training = YES`.
- `cellOutputFwd`: The second output of [LSTM(\_:recurrentWeight:inputWeight:bias:initState:initCell:descriptor:name:)](lstm%28__recurrentweight_inputweight_bias_initstate_initcell_descriptor_name_%29.md) with `descriptor.training = YES` or `descriptor.produceCell = YES`.
- `descriptor`: A descriptor that defines the parameters for the LSTM operation.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` array containing gradients for each input tensor, except for `sourceGradient` and `mask`. In case an input is nil, no gradient will be returned for it. The order of the gradients will be: for `source`, for `recurrentWeight`, for `inputWeight`, for `bias`, for `initState` and for `initCell`.

<a id="discussion"></a>

## Discussion

For details of this operation and parameters, refer to documentation of [LSTM(\_:recurrentWeight:inputWeight:bias:initState:initCell:mask:peephole:descriptor:name:)](lstm%28__recurrentweight_inputweight_bias_initstate_initcell_mask_peephole_descriptor_name_%29.md).

# LSTMGradientsWithSourceTensor:recurrentWeight:sourceGradient:zState:cellOutputFwd:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates an LSTM gradient operation and returns the gradient tensor values.

## Declaration

```objectivec
- (NSArray<MPSGraphTensor *> *) LSTMGradientsWithSourceTensor:(MPSGraphTensor *) source recurrentWeight:(MPSGraphTensor *) recurrentWeight sourceGradient:(MPSGraphTensor *) sourceGradient zState:(MPSGraphTensor *) zState cellOutputFwd:(MPSGraphTensor *) cellOutputFwd descriptor:(MPSGraphLSTMDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `source`: A tensor containing the source data `x[t]`  with the data layout \[T,N,I\]. In case `inputWeight = nil` and `bidirectional = NO` then the layout is \[T,N,4H\] and for `inputWeight = nil` and `bidirectional = YES` the layout is \[T,N,8H\].
- `recurrentWeight`: A tensor containing the recurrent weights `R`. For `bidirectional` the layout is \[2,4H,H\] and otherwise it is \[4H,H\].
- `sourceGradient`: The input gradient, that is the gradient of a tensor with respect to the first output of the forward pass.
- `zState`: The third output of [LSTMWithSourceTensor:recurrentWeight:inputWeight:bias:initState:initCell:descriptor:name:](lstm%28__recurrentweight_inputweight_bias_initstate_initcell_descriptor_name_%29.md) with `descriptor.training = YES`.
- `cellOutputFwd`: The second output of [LSTMWithSourceTensor:recurrentWeight:inputWeight:bias:initState:initCell:descriptor:name:](lstm%28__recurrentweight_inputweight_bias_initstate_initcell_descriptor_name_%29.md) with `descriptor.training = YES` or `descriptor.produceCell = YES`.
- `descriptor`: A descriptor that defines the parameters for the LSTM operation.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` array containing gradients for each input tensor, except for `sourceGradient` and `mask`. In case an input is nil, no gradient will be returned for it. The order of the gradients will be: for `source`, for `recurrentWeight`, for `inputWeight`, for `bias`, for `initState` and for `initCell`.

<a id="discussion"></a>

## Discussion

For details of this operation and parameters, refer to documentation of [LSTMWithSourceTensor:recurrentWeight:inputWeight:bias:initState:initCell:mask:peephole:descriptor:name:](lstm%28__recurrentweight_inputweight_bias_initstate_initcell_mask_peephole_descriptor_name_%29.md).
