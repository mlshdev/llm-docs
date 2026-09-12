> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate/threadexecutionwidth](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate/threadexecutionwidth)

# threadExecutionWidth (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The number of threads that the GPU executes simultaneously.

## Declaration

```swift
var threadExecutionWidth: Int { get }
```

## Mentioned In

- [Calculating threadgroup and grid sizes](../calculating-threadgroup-and-grid-sizes.md)
- [Creating threads and threadgroups](../creating-threads-and-threadgroups.md)

<a id="discussion"></a>

## Discussion

For better performance, when dispatching a compute command, make the number of threads in the threadgroup a multiple of `threadExecutionWidth`.

See [Creating threads and threadgroups](../creating-threads-and-threadgroups.md) and [Calculating threadgroup and grid sizes](../calculating-threadgroup-and-grid-sizes.md) for more information on aligning data, thread width, and threadgroup size.

## See Also

### Checking threadgroup attributes

- [maxTotalThreadsPerThreadgroup](maxtotalthreadsperthreadgroup.md): The maximum number of threads in a threadgroup that you can dispatch to the pipeline.
- [staticThreadgroupMemoryLength](staticthreadgroupmemorylength.md): The length, in bytes, of statically allocated threadgroup memory.

# threadExecutionWidth (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The number of threads that the GPU executes simultaneously.

## Declaration

```objectivec
@property (readonly) NSUInteger threadExecutionWidth;
```

## Mentioned In

- [Calculating threadgroup and grid sizes](../calculating-threadgroup-and-grid-sizes.md)
- [Creating threads and threadgroups](../creating-threads-and-threadgroups.md)

<a id="discussion"></a>

## Discussion

For better performance, when dispatching a compute command, make the number of threads in the threadgroup a multiple of `threadExecutionWidth`.

See [Creating threads and threadgroups](../creating-threads-and-threadgroups.md) and [Calculating threadgroup and grid sizes](../calculating-threadgroup-and-grid-sizes.md) for more information on aligning data, thread width, and threadgroup size.

## See Also

### Checking threadgroup attributes

- [maxTotalThreadsPerThreadgroup](maxtotalthreadsperthreadgroup.md): The maximum number of threads in a threadgroup that you can dispatch to the pipeline.
- [staticThreadgroupMemoryLength](staticthreadgroupmemorylength.md): The length, in bytes, of statically allocated threadgroup memory.
