> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/encode(to:feeds:targetoperations:resultsdictionary:executiondescriptor:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/encode(to:feeds:targetoperations:resultsdictionary:executiondescriptor:))

# encode(to:feeds:targetOperations:resultsDictionary:executionDescriptor:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Encodes the graph for the given feeds to returns the target tensor values in the results dictionary provided by the user.

## Declaration

```swift
func encode(to commandBuffer: MPSCommandBuffer, feeds: [MPSGraphTensor : MPSGraphTensorData], targetOperations: [MPSGraphOperation]?, resultsDictionary: [MPSGraphTensor : MPSGraphTensorData], executionDescriptor: MPSGraphExecutionDescriptor?)
```

## Parameters

- `commandBuffer`: commandBuffer passed to execute the graph on, commitAndContinue might be called, please don’t rely on underlying MTLCommandBuffer to remain uncommitted.
- `feeds`: Feeds dictionary for the placeholder tensors.
- `targetOperations`: Operations to be completed at the end of the run.
- `resultsDictionary`: MPSGraphTensors dictionary passed by user, these will be filled with graph output data.
- `executionDescriptor`: ExecutionDescriptor to be passed in and used.

<a id="discussion"></a>

## Discussion

It ensures all target operations also executed. This call is asynchronous and will return immediately if a completionHandler is set.

# encodeToCommandBuffer:feeds:targetOperations:resultsDictionary:executionDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Encodes the graph for the given feeds to returns the target tensor values in the results dictionary provided by the user.

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(MPSCommandBuffer *) commandBuffer feeds:(MPSGraphTensorDataDictionary *) feeds targetOperations:(NSArray<MPSGraphOperation *> *) targetOperations resultsDictionary:(MPSGraphTensorDataDictionary *) resultsDictionary executionDescriptor:(MPSGraphExecutionDescriptor *) executionDescriptor;
```

## Parameters

- `commandBuffer`: commandBuffer passed to execute the graph on, commitAndContinue might be called, please don’t rely on underlying MTLCommandBuffer to remain uncommitted.
- `feeds`: Feeds dictionary for the placeholder tensors.
- `targetOperations`: Operations to be completed at the end of the run.
- `resultsDictionary`: MPSGraphTensors dictionary passed by user, these will be filled with graph output data.
- `executionDescriptor`: ExecutionDescriptor to be passed in and used.

<a id="discussion"></a>

## Discussion

It ensures all target operations also executed. This call is asynchronous and will return immediately if a completionHandler is set.
