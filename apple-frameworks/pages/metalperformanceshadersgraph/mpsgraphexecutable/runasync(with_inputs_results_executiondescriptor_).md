> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutable/runasync(with:inputs:results:executiondescriptor:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutable/runasync(with:inputs:results:executiondescriptor:))

# runAsync(with:inputs:results:executionDescriptor:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed. This call is asynchronous and will return immediately.

## Declaration

```swift
func runAsync(with commandQueue: any MTLCommandQueue, inputs inputsArray: [MPSGraphTensorData], results resultsArray: [MPSGraphTensorData]?, executionDescriptor: MPSGraphExecutableExecutionDescriptor?) -> [MPSGraphTensorData]
```

## Parameters

- `commandQueue`: CommandQueue passed to exectute the graph on.
- `inputsArray`: Feeds tensorData for the placeholder tensors, same order as arguments of main function.
- `resultsArray`: Tensors for which the caller wishes MPSGraphTensorData to be returned.
- `executionDescriptor`: ExecutionDescriptor to be passed in and used.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData array with results synchronized to the CPU memory if MPSGraphOptionsSynchronizeResults set.

# runAsyncWithMTLCommandQueue:inputsArray:resultsArray:executionDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed. This call is asynchronous and will return immediately.

## Declaration

```objectivec
- (NSArray<MPSGraphTensorData *> *) runAsyncWithMTLCommandQueue:(id<MTLCommandQueue>) commandQueue inputsArray:(NSArray<MPSGraphTensorData *> *) inputsArray resultsArray:(NSArray<MPSGraphTensorData *> *) resultsArray executionDescriptor:(MPSGraphExecutableExecutionDescriptor *) executionDescriptor;
```

## Parameters

- `commandQueue`: CommandQueue passed to exectute the graph on.
- `inputsArray`: Feeds tensorData for the placeholder tensors, same order as arguments of main function.
- `resultsArray`: Tensors for which the caller wishes MPSGraphTensorData to be returned.
- `executionDescriptor`: ExecutionDescriptor to be passed in and used.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData array with results synchronized to the CPU memory if MPSGraphOptionsSynchronizeResults set.
