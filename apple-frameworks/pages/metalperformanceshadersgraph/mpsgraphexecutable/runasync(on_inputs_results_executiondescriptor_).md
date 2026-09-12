> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutable/runasync(on:inputs:results:executiondescriptor:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutable/runasync(on:inputs:results:executiondescriptor:))

# runAsync(on:inputs:results:executionDescriptor:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed. This call is asynchronous and will return immediately.

## Declaration

```swift
func runAsync(on commandQueue: any MTL4CommandQueue, inputs inputsArray: [MPSGraphTensorData], results resultsArray: [MPSGraphTensorData]?, executionDescriptor: MPSGraphExecutableExecutionDescriptor?) -> [MPSGraphTensorData]
```

## Parameters

- `commandQueue`: MTL4CommandQueue passed to exectute the graph on.
- `inputsArray`: Feeds tensorData for the placeholder tensors, same order as arguments of main function.
- `resultsArray`: Tensors for which the caller wishes MPSGraphTensorData to be returned.
- `executionDescriptor`: ExecutionDescriptor to be passed in and used.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData array with results synchronized to the CPU memory if MPSGraphOptionsSynchronizeResults set.

# runAsyncWithMTL4CommandQueue:inputsArray:resultsArray:executionDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed. This call is asynchronous and will return immediately.

## Declaration

```objectivec
- (NSArray<MPSGraphTensorData *> *) runAsyncWithMTL4CommandQueue:(id<MTL4CommandQueue>) commandQueue inputsArray:(NSArray<MPSGraphTensorData *> *) inputsArray resultsArray:(NSArray<MPSGraphTensorData *> *) resultsArray executionDescriptor:(MPSGraphExecutableExecutionDescriptor *) executionDescriptor;
```

## Parameters

- `commandQueue`: MTL4CommandQueue passed to exectute the graph on.
- `inputsArray`: Feeds tensorData for the placeholder tensors, same order as arguments of main function.
- `resultsArray`: Tensors for which the caller wishes MPSGraphTensorData to be returned.
- `executionDescriptor`: ExecutionDescriptor to be passed in and used.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData array with results synchronized to the CPU memory if MPSGraphOptionsSynchronizeResults set.
