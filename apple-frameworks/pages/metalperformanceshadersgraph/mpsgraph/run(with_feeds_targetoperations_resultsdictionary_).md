> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/run(with:feeds:targetoperations:resultsdictionary:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/run(with:feeds:targetoperations:resultsdictionary:))

# run(with:feeds:targetOperations:resultsDictionary:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Runs the graph for the given feeds and returns the target tensor values in the results dictionary provided by the user.

## Declaration

```swift
func run(with commandQueue: any MTLCommandQueue, feeds: [MPSGraphTensor : MPSGraphTensorData], targetOperations: [MPSGraphOperation]?, resultsDictionary: [MPSGraphTensor : MPSGraphTensorData])
```

## Parameters

- `commandQueue`: CommandQueue passed to exectute the graph on.
- `feeds`: Feeds dictionary for the placeholder tensors.
- `targetOperations`: Operations to be completed at the end of the run.
- `resultsDictionary`: MPSGraphTensors dictionary passed by user, these will be filled with graph output data.

<a id="discussion"></a>

## Discussion

It also ensures all target operations also executed. This call blocks until execution has completed.

# runWithMTLCommandQueue:feeds:targetOperations:resultsDictionary: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Runs the graph for the given feeds and returns the target tensor values in the results dictionary provided by the user.

## Declaration

```objectivec
- (void) runWithMTLCommandQueue:(id<MTLCommandQueue>) commandQueue feeds:(MPSGraphTensorDataDictionary *) feeds targetOperations:(NSArray<MPSGraphOperation *> *) targetOperations resultsDictionary:(MPSGraphTensorDataDictionary *) resultsDictionary;
```

## Parameters

- `commandQueue`: CommandQueue passed to exectute the graph on.
- `feeds`: Feeds dictionary for the placeholder tensors.
- `targetOperations`: Operations to be completed at the end of the run.
- `resultsDictionary`: MPSGraphTensors dictionary passed by user, these will be filled with graph output data.

<a id="discussion"></a>

## Discussion

It also ensures all target operations also executed. This call blocks until execution has completed.
