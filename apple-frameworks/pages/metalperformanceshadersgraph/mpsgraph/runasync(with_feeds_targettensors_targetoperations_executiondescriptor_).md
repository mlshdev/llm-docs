> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/runasync(with:feeds:targettensors:targetoperations:executiondescriptor:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/runasync(with:feeds:targettensors:targetoperations:executiondescriptor:))

# runAsync(with:feeds:targetTensors:targetOperations:executionDescriptor:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed.

## Declaration

```swift
func runAsync(with commandQueue: any MTLCommandQueue, feeds: [MPSGraphTensor : MPSGraphTensorData], targetTensors: [MPSGraphTensor], targetOperations: [MPSGraphOperation]?, executionDescriptor: MPSGraphExecutionDescriptor?) -> [MPSGraphTensor : MPSGraphTensorData]
```

## Parameters

- `commandQueue`: CommandQueue passed to exectute the graph on.
- `feeds`: Feeds dictionary for the placeholder tensors.
- `targetTensors`: Tensors for which the caller wishes MPSGraphTensorData to be returned.
- `targetOperations`: Operations to be completed at the end of the run.
- `executionDescriptor`: ExecutionDescriptor to be passed in and used.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor : MPSGraphTensorData dictionary with results synchronized to the CPU memory if MPSGraphOptionsSynchronizeResults set.

<a id="discussion"></a>

## Discussion

This call is asynchronous and will return immediately if a completionHandler is set.

# runAsyncWithMTLCommandQueue:feeds:targetTensors:targetOperations:executionDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed.

## Declaration

```objectivec
- (MPSGraphTensorDataDictionary *) runAsyncWithMTLCommandQueue:(id<MTLCommandQueue>) commandQueue feeds:(MPSGraphTensorDataDictionary *) feeds targetTensors:(NSArray<MPSGraphTensor *> *) targetTensors targetOperations:(NSArray<MPSGraphOperation *> *) targetOperations executionDescriptor:(MPSGraphExecutionDescriptor *) executionDescriptor;
```

## Parameters

- `commandQueue`: CommandQueue passed to exectute the graph on.
- `feeds`: Feeds dictionary for the placeholder tensors.
- `targetTensors`: Tensors for which the caller wishes MPSGraphTensorData to be returned.
- `targetOperations`: Operations to be completed at the end of the run.
- `executionDescriptor`: ExecutionDescriptor to be passed in and used.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor : MPSGraphTensorData dictionary with results synchronized to the CPU memory if MPSGraphOptionsSynchronizeResults set.

<a id="discussion"></a>

## Discussion

This call is asynchronous and will return immediately if a completionHandler is set.
