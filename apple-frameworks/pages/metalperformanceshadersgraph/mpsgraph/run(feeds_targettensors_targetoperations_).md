> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/run(feeds:targettensors:targetoperations:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/run(feeds:targettensors:targetoperations:))

# run(feeds:targetTensors:targetOperations:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed.

## Declaration

```swift
func run(feeds: [MPSGraphTensor : MPSGraphTensorData], targetTensors: [MPSGraphTensor], targetOperations: [MPSGraphOperation]?) -> [MPSGraphTensor : MPSGraphTensorData]
```

## Parameters

- `feeds`: Feeds dictionary for the placeholder tensors.
- `targetTensors`: Tensors for which the caller wishes MPSGraphTensorData to be returned.
- `targetOperations`: Operations to be completed at the end of the run.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor : MPSGraphTensorData dictionary with results synchronized to the CPU memory.

<a id="discussion"></a>

## Discussion

This call blocks until execution has completed.

# runWithFeeds:targetTensors:targetOperations: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed.

## Declaration

```objectivec
- (MPSGraphTensorDataDictionary *) runWithFeeds:(MPSGraphTensorDataDictionary *) feeds targetTensors:(NSArray<MPSGraphTensor *> *) targetTensors targetOperations:(NSArray<MPSGraphOperation *> *) targetOperations;
```

## Parameters

- `feeds`: Feeds dictionary for the placeholder tensors.
- `targetTensors`: Tensors for which the caller wishes MPSGraphTensorData to be returned.
- `targetOperations`: Operations to be completed at the end of the run.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor : MPSGraphTensorData dictionary with results synchronized to the CPU memory.

<a id="discussion"></a>

## Discussion

This call blocks until execution has completed.
