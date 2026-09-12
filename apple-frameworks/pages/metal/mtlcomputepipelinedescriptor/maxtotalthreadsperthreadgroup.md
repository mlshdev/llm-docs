> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinedescriptor/maxtotalthreadsperthreadgroup](https://developer.apple.com/documentation/metal/mtlcomputepipelinedescriptor/maxtotalthreadsperthreadgroup)

# maxTotalThreadsPerThreadgroup (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A property that limits the number of threads you can dispatch in a threadgroup for the compute function.

## Declaration

```swift
var maxTotalThreadsPerThreadgroup: Int { get set }
```

<a id="discussion"></a>

## Discussion

Metal automatically selects a maximum threadgroup size when you set this value to `0`.

Your shader can also configure the maximum number of threads per threadgroup with the `[[max_total_threads_per_threadgroup]]` attribute. See the [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf) for more information.

> **Important**

>  Set this property to the same value as your shader’s `[[max_total_threads_per_threadgroup]]` attribute when setting both values; different values can create a runtime error.

By default, this property’s value is `0`, which instructs Metal to calculate the maximum number of threads per threadgroup based on the device’s capabilities and the compute shader’s memory usage.

The [maxTotalThreadsPerThreadgroup](../mtlcomputepipelinestate/maxtotalthreadsperthreadgroup.md) property of an [MTLComputePipelineState](../mtlcomputepipelinestate.md) instance reports the maximum number of threads you can dispatch in a threadgroup for that specific compute shader.

Metal may return an error if this value exceeds the available resources for the device, or Metal may lower the thread limit when creating the compute pipeline state, which can reduce runtime performance.

> **Tip**

> Verify whether setting this property improves runtime performance by profiling your app. For more information on performance profiling, see [Analyzing the performance of your Metal app](https://developer.apple.com/documentation/xcode/analyzing-the-performance-of-your-metal-app).

## See Also

### Configuring the compute execution environment

- [computeFunction](computefunction.md): The compute kernel the pipeline calls.
- [threadGroupSizeIsMultipleOfThreadExecutionWidth](threadgroupsizeismultipleofthreadexecutionwidth.md): A Boolean value that indicates whether the threadgroup size is always a multiple of the thread execution width.
- [maxCallStackDepth](maxcallstackdepth.md): The maximum call stack depth for indirect function calls in compute shaders.

# maxTotalThreadsPerThreadgroup (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A property that limits the number of threads you can dispatch in a threadgroup for the compute function.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger maxTotalThreadsPerThreadgroup;
```

<a id="discussion"></a>

## Discussion

Metal automatically selects a maximum threadgroup size when you set this value to `0`.

Your shader can also configure the maximum number of threads per threadgroup with the `[[max_total_threads_per_threadgroup]]` attribute. See the [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf) for more information.

> **Important**

>  Set this property to the same value as your shader’s `[[max_total_threads_per_threadgroup]]` attribute when setting both values; different values can create a runtime error.

By default, this property’s value is `0`, which instructs Metal to calculate the maximum number of threads per threadgroup based on the device’s capabilities and the compute shader’s memory usage.

The [maxTotalThreadsPerThreadgroup](../mtlcomputepipelinestate/maxtotalthreadsperthreadgroup.md) property of an [MTLComputePipelineState](../mtlcomputepipelinestate.md) instance reports the maximum number of threads you can dispatch in a threadgroup for that specific compute shader.

Metal may return an error if this value exceeds the available resources for the device, or Metal may lower the thread limit when creating the compute pipeline state, which can reduce runtime performance.

> **Tip**

> Verify whether setting this property improves runtime performance by profiling your app. For more information on performance profiling, see [Analyzing the performance of your Metal app](https://developer.apple.com/documentation/xcode/analyzing-the-performance-of-your-metal-app).

## See Also

### Configuring the compute execution environment

- [computeFunction](computefunction.md): The compute kernel the pipeline calls.
- [threadGroupSizeIsMultipleOfThreadExecutionWidth](threadgroupsizeismultipleofthreadexecutionwidth.md): A Boolean value that indicates whether the threadgroup size is always a multiple of the thread execution width.
- [maxCallStackDepth](maxcallstackdepth.md): The maximum call stack depth for indirect function calls in compute shaders.
