> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/controldependency(with:dependentblock:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/controldependency(with:dependentblock:name:))

# controlDependency(with:dependentBlock:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed.

## Declaration

```swift
func controlDependency(with operations: [MPSGraphOperation], dependentBlock: @escaping MPSGraphControlFlowDependencyBlock, name: String?) -> [MPSGraphTensor]
```

## Parameters

- `operations`: Operations maked as control dependency for all ops created inside the dependent block
- `dependentBlock`: MPSGraphControlFlowDependencyBlock which is provided by caller to create dependent ops
- `name`: Name of scope

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array with results returned from dependentBlock forwarded

<a id="discussion"></a>

## Discussion

This call blocks until execution has completed.

# controlDependencyWithOperations:dependentBlock:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed.

## Declaration

```objectivec
- (NSArray<MPSGraphTensor *> *) controlDependencyWithOperations:(NSArray<MPSGraphOperation *> *) operations dependentBlock:(MPSGraphControlFlowDependencyBlock) dependentBlock name:(NSString *) name;
```

## Parameters

- `operations`: Operations maked as control dependency for all ops created inside the dependent block
- `dependentBlock`: MPSGraphControlFlowDependencyBlock which is provided by caller to create dependent ops
- `name`: Name of scope

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array with results returned from dependentBlock forwarded

<a id="discussion"></a>

## Discussion

This call blocks until execution has completed.
