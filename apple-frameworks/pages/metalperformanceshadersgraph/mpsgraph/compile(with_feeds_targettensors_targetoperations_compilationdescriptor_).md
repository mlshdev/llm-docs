> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/compile(with:feeds:targettensors:targetoperations:compilationdescriptor:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/compile(with:feeds:targettensors:targetoperations:compilationdescriptor:))

# compile(with:feeds:targetTensors:targetOperations:compilationDescriptor:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Compiles the graph for the given feeds to returns the target tensor values, ensuring all target operations would be executed.

## Declaration

```swift
func compile(with device: MPSGraphDevice?, feeds: [MPSGraphTensor : MPSGraphShapedType], targetTensors: [MPSGraphTensor], targetOperations: [MPSGraphOperation]?, compilationDescriptor: MPSGraphCompilationDescriptor?) -> MPSGraphExecutable
```

## Parameters

- `device`: MPSGraph device to optimize for.
- `feeds`: Feeds dictionary for the placeholder tensors.
- `targetTensors`: Tensors for which the caller wishes MPSGraphTensorData to be returned.
- `targetOperations`: Operations to be completed at the end of the run.
- `compilationDescriptor`: Compilation descriptor to set different compilation parameters.

<a id="return-value"></a>

## Return Value

A valid MPSGraphExecutable object

<a id="discussion"></a>

## Discussion

This call blocks until execution has completed. The compilation descriptor helps specialize the executable returned.

# compileWithDevice:feeds:targetTensors:targetOperations:compilationDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Compiles the graph for the given feeds to returns the target tensor values, ensuring all target operations would be executed.

## Declaration

```objectivec
- (MPSGraphExecutable *) compileWithDevice:(MPSGraphDevice *) device feeds:(MPSGraphTensorShapedTypeDictionary *) feeds targetTensors:(NSArray<MPSGraphTensor *> *) targetTensors targetOperations:(NSArray<MPSGraphOperation *> *) targetOperations compilationDescriptor:(MPSGraphCompilationDescriptor *) compilationDescriptor;
```

## Parameters

- `device`: MPSGraph device to optimize for.
- `feeds`: Feeds dictionary for the placeholder tensors.
- `targetTensors`: Tensors for which the caller wishes MPSGraphTensorData to be returned.
- `targetOperations`: Operations to be completed at the end of the run.
- `compilationDescriptor`: Compilation descriptor to set different compilation parameters.

<a id="return-value"></a>

## Return Value

A valid MPSGraphExecutable object

<a id="discussion"></a>

## Discussion

This call blocks until execution has completed. The compilation descriptor helps specialize the executable returned.
