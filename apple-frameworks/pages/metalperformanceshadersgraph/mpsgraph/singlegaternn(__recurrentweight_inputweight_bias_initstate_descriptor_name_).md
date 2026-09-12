> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/singlegaternn(_:recurrentweight:inputweight:bias:initstate:descriptor:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/singlegaternn(_:recurrentweight:inputweight:bias:initstate:descriptor:name:))

# singleGateRNN(\_:recurrentWeight:inputWeight:bias:initState:descriptor:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a single-gate RNN operation and returns the value and optionally the training state tensor.

## Declaration

```swift
func singleGateRNN(_ source: MPSGraphTensor, recurrentWeight: MPSGraphTensor, inputWeight: MPSGraphTensor?, bias: MPSGraphTensor?, initState: MPSGraphTensor?, descriptor: MPSGraphSingleGateRNNDescriptor, name: String?) -> [MPSGraphTensor]
```

## Parameters

- `source`: A tensor that contains the source data `x[t]` with the data layout \[T,N,I\]. In case `inputWeight = nil` and `bidirectional = NO` then the layout is \[T,N,H\] and for `inputWeight = nil` and `bidirectional = YES` the layout is \[T,N,2H\].
- `recurrentWeight`: A tensor containing the recurrent weights `R`. For `bidirectional` the layout is \[2,H,H\] and otherwise it is \[H,H\].
- `inputWeight`: A tensor containing the input weights matrix `W` \- optional, if missing the operation assumes a diagonal unit-matrix. For `bidirectional` the layout is \[2H,I\] and otherwise it is \[H,I\].
- `bias`: A tensor containing the bias `b` \- optional, if missing the operation assumes zeroes. For `bidirectional` the layout is \[2H\] and otherwise it is \[H\].
- `initState`: The initial internal state of the RNN `h[-1]` \- optional, if missing the operation assumes zeroes. For `bidirectional` the layout is \[N,2H\] and otherwise it is \[N,H\].
- `descriptor`: A descriptor that defines the parameters for the RNN operation.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array of size 1 or 2, depending on value of `descriptor.training`. The layout of the both outputs is \[T,N,H\] or \[T,N,2H\] for bidirectional.

<a id="discussion"></a>

## Discussion

This operation returns tensors `h` and optionally `z` that are defined recursively as follows:

```md
for t = 0 to T-1
  z[t] = x[t] W^T + (h[t-1]m) R^T + b
  h[t] = activation( z[t] ), where
```

`W` is optional `inputWeight`, `R` is `recurrentWeight`, `b` is `bias`, `m` is optional `mask`, `x[t]` is `source` `h[t]` is the first output, `z[t]` is the second output (optional) and `h[-1]` is `initState`. See [MPSGraphSingleGateRNNDescriptor](../mpsgraphsinglegaternndescriptor.md) for different `activation` options.

# singleGateRNNWithSourceTensor:recurrentWeight:inputWeight:bias:initState:descriptor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Creates a single-gate RNN operation and returns the value and optionally the training state tensor.

## Declaration

```objectivec
- (NSArray<MPSGraphTensor *> *) singleGateRNNWithSourceTensor:(MPSGraphTensor *) source recurrentWeight:(MPSGraphTensor *) recurrentWeight inputWeight:(MPSGraphTensor *) inputWeight bias:(MPSGraphTensor *) bias initState:(MPSGraphTensor *) initState descriptor:(MPSGraphSingleGateRNNDescriptor *) descriptor name:(NSString *) name;
```

## Parameters

- `source`: A tensor that contains the source data `x[t]` with the data layout \[T,N,I\]. In case `inputWeight = nil` and `bidirectional = NO` then the layout is \[T,N,H\] and for `inputWeight = nil` and `bidirectional = YES` the layout is \[T,N,2H\].
- `recurrentWeight`: A tensor containing the recurrent weights `R`. For `bidirectional` the layout is \[2,H,H\] and otherwise it is \[H,H\].
- `inputWeight`: A tensor containing the input weights matrix `W` \- optional, if missing the operation assumes a diagonal unit-matrix. For `bidirectional` the layout is \[2H,I\] and otherwise it is \[H,I\].
- `bias`: A tensor containing the bias `b` \- optional, if missing the operation assumes zeroes. For `bidirectional` the layout is \[2H\] and otherwise it is \[H\].
- `initState`: The initial internal state of the RNN `h[-1]` \- optional, if missing the operation assumes zeroes. For `bidirectional` the layout is \[N,2H\] and otherwise it is \[N,H\].
- `descriptor`: A descriptor that defines the parameters for the RNN operation.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array of size 1 or 2, depending on value of `descriptor.training`. The layout of the both outputs is \[T,N,H\] or \[T,N,2H\] for bidirectional.

<a id="discussion"></a>

## Discussion

This operation returns tensors `h` and optionally `z` that are defined recursively as follows:

```md
for t = 0 to T-1
  z[t] = x[t] W^T + (h[t-1]m) R^T + b
  h[t] = activation( z[t] ), where
```

`W` is optional `inputWeight`, `R` is `recurrentWeight`, `b` is `bias`, `m` is optional `mask`, `x[t]` is `source` `h[t]` is the first output, `z[t]` is the second output (optional) and `h[-1]` is `initState`. See [MPSGraphSingleGateRNNDescriptor](../mpsgraphsinglegaternndescriptor.md) for different `activation` options.
