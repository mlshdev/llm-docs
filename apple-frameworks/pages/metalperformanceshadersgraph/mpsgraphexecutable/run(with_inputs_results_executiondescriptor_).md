> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutable/run(with:inputs:results:executiondescriptor:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutable/run(with:inputs:results:executiondescriptor:))

# run(with:inputs:results:executionDescriptor:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed.

## Declaration

```swift
func run(with commandQueue: any MTLCommandQueue, inputs inputsArray: [MPSGraphTensorData], results resultsArray: [MPSGraphTensorData]?, executionDescriptor: MPSGraphExecutableExecutionDescriptor?) -> [MPSGraphTensorData]
```

## Parameters

- `commandQueue`: CommandQueue passed to exectute the graph on.
- `inputsArray`: Feeds tensorData for the placeholder tensors, same order as arguments of main function.
- `resultsArray`: Results tensorData for which the caller wishes MPSGraphTensorData to be returned.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData array with results synchronized to the CPU memory if MPSGraphOptionsSynchronizeResults set.

<a id="discussion"></a>

## Discussion

This call is synchronous and will return on completion of execution.

# runWithMTLCommandQueue:inputsArray:resultsArray:executionDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed.

## Declaration

```objectivec
- (NSArray<MPSGraphTensorData *> *) runWithMTLCommandQueue:(id<MTLCommandQueue>) commandQueue inputsArray:(NSArray<MPSGraphTensorData *> *) inputsArray resultsArray:(NSArray<MPSGraphTensorData *> *) resultsArray executionDescriptor:(MPSGraphExecutableExecutionDescriptor *) executionDescriptor;
```

## Parameters

- `commandQueue`: CommandQueue passed to exectute the graph on.
- `inputsArray`: Feeds tensorData for the placeholder tensors, same order as arguments of main function.
- `resultsArray`: Results tensorData for which the caller wishes MPSGraphTensorData to be returned.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensorData array with results synchronized to the CPU memory if MPSGraphOptionsSynchronizeResults set.

<a id="discussion"></a>

## Discussion

This call is synchronous and will return on completion of execution.
