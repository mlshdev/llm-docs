> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinedescriptor/computefunction](https://developer.apple.com/documentation/metal/mtlcomputepipelinedescriptor/computefunction)

# computeFunction (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The compute kernel the pipeline calls.

## Declaration

```swift
var computeFunction: (any MTLFunction)? { get set }
```

<a id="discussion"></a>

## Discussion

> **Warning**

>  Ensure that this value is non-`nil` before creating a new [MTLComputePipelineState](../mtlcomputepipelinestate.md) with the associated pipeline descriptor instance.

The default value is `nil`.

## See Also

### Configuring the compute execution environment

- [threadGroupSizeIsMultipleOfThreadExecutionWidth](threadgroupsizeismultipleofthreadexecutionwidth.md): A Boolean value that indicates whether the threadgroup size is always a multiple of the thread execution width.
- [maxTotalThreadsPerThreadgroup](maxtotalthreadsperthreadgroup.md): A property that limits the number of threads you can dispatch in a threadgroup for the compute function.
- [maxCallStackDepth](maxcallstackdepth.md): The maximum call stack depth for indirect function calls in compute shaders.

# computeFunction (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The compute kernel the pipeline calls.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) id<MTLFunction> computeFunction;
```

<a id="discussion"></a>

## Discussion

> **Warning**

>  Ensure that this value is non-`nil` before creating a new [MTLComputePipelineState](../mtlcomputepipelinestate.md) with the associated pipeline descriptor instance.

The default value is `nil`.

## See Also

### Configuring the compute execution environment

- [threadGroupSizeIsMultipleOfThreadExecutionWidth](threadgroupsizeismultipleofthreadexecutionwidth.md): A Boolean value that indicates whether the threadgroup size is always a multiple of the thread execution width.
- [maxTotalThreadsPerThreadgroup](maxtotalthreadsperthreadgroup.md): A property that limits the number of threads you can dispatch in a threadgroup for the compute function.
- [maxCallStackDepth](maxcallstackdepth.md): The maximum call stack depth for indirect function calls in compute shaders.
