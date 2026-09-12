> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/runasync(on:feeds:targetoperations:resultsdictionary:executiondescriptor:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/runasync(on:feeds:targetoperations:resultsdictionary:executiondescriptor:))

# runAsync(on:feeds:targetOperations:resultsDictionary:executionDescriptor:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Encodes the graph for the given feeds to returns the target tensor values in the results dictionary provided by the user.

## Declaration

```swift
func runAsync(on commandQueue: any MTL4CommandQueue, feeds: [MPSGraphTensor : MPSGraphTensorData], targetOperations: [MPSGraphOperation]?, resultsDictionary: [MPSGraphTensor : MPSGraphTensorData], executionDescriptor: MPSGraphExecutionDescriptor?)
```

## Parameters

- `commandQueue`: MTL4CommandQueue passed to exectute the graph on.
- `feeds`: Feeds dictionary for the placeholder tensors.
- `targetOperations`: Operations to be completed at the end of the run.
- `resultsDictionary`: MPSGraphTensors dictionary passed by user, these will be filled with graph output data.
- `executionDescriptor`: ExecutionDescriptor to be passed in and used.

<a id="discussion"></a>

## Discussion

It ensures all target operations also executed. This call is asynchronous and will return immediately if a completionHandler is set.

# runAsyncWithMTL4CommandQueue:feeds:targetOperations:resultsDictionary:executionDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Encodes the graph for the given feeds to returns the target tensor values in the results dictionary provided by the user.

## Declaration

```objectivec
- (void) runAsyncWithMTL4CommandQueue:(id<MTL4CommandQueue>) commandQueue feeds:(MPSGraphTensorDataDictionary *) feeds targetOperations:(NSArray<MPSGraphOperation *> *) targetOperations resultsDictionary:(MPSGraphTensorDataDictionary *) resultsDictionary executionDescriptor:(MPSGraphExecutionDescriptor *) executionDescriptor;
```

## Parameters

- `commandQueue`: MTL4CommandQueue passed to exectute the graph on.
- `feeds`: Feeds dictionary for the placeholder tensors.
- `targetOperations`: Operations to be completed at the end of the run.
- `resultsDictionary`: MPSGraphTensors dictionary passed by user, these will be filled with graph output data.
- `executionDescriptor`: ExecutionDescriptor to be passed in and used.

<a id="discussion"></a>

## Discussion

It ensures all target operations also executed. This call is asynchronous and will return immediately if a completionHandler is set.
