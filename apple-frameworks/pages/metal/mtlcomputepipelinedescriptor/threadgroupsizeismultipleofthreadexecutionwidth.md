> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinedescriptor/threadgroupsizeismultipleofthreadexecutionwidth](https://developer.apple.com/documentation/metal/mtlcomputepipelinedescriptor/threadgroupsizeismultipleofthreadexecutionwidth)

# threadGroupSizeIsMultipleOfThreadExecutionWidth (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the threadgroup size is always a multiple of the thread execution width.

## Declaration

```swift
var threadGroupSizeIsMultipleOfThreadExecutionWidth: Bool { get set }
```

<a id="discussion"></a>

## Discussion

> **Warning**

>  When this configuration value is `true` and the threadgroup size isn’t a multiple of thread execution width, the compute pass’s execution results are undefined.

If you can guarantee that the threadgroup size used by all compute commands in this pipeline is a multiple of [threadExecutionWidth](../mtlcomputepipelinestate/threadexecutionwidth.md), set this property to `true` to take advantage of additional Metal optimizations.

The default value is `false`.

## See Also

### Configuring the compute execution environment

- [computeFunction](computefunction.md): The compute kernel the pipeline calls.
- [maxTotalThreadsPerThreadgroup](maxtotalthreadsperthreadgroup.md): A property that limits the number of threads you can dispatch in a threadgroup for the compute function.
- [maxCallStackDepth](maxcallstackdepth.md): The maximum call stack depth for indirect function calls in compute shaders.

# threadGroupSizeIsMultipleOfThreadExecutionWidth (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the threadgroup size is always a multiple of the thread execution width.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL threadGroupSizeIsMultipleOfThreadExecutionWidth;
```

<a id="discussion"></a>

## Discussion

> **Warning**

>  When this configuration value is `true` and the threadgroup size isn’t a multiple of thread execution width, the compute pass’s execution results are undefined.

If you can guarantee that the threadgroup size used by all compute commands in this pipeline is a multiple of [threadExecutionWidth](../mtlcomputepipelinestate/threadexecutionwidth.md), set this property to `true` to take advantage of additional Metal optimizations.

The default value is `false`.

## See Also

### Configuring the compute execution environment

- [computeFunction](computefunction.md): The compute kernel the pipeline calls.
- [maxTotalThreadsPerThreadgroup](maxtotalthreadsperthreadgroup.md): A property that limits the number of threads you can dispatch in a threadgroup for the compute function.
- [maxCallStackDepth](maxcallstackdepth.md): The maximum call stack depth for indirect function calls in compute shaders.
