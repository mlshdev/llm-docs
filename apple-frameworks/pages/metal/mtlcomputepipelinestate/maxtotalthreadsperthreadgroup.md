> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate/maxtotalthreadsperthreadgroup](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate/maxtotalthreadsperthreadgroup)

# maxTotalThreadsPerThreadgroup (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The maximum number of threads in a threadgroup that you can dispatch to the pipeline.

## Declaration

```swift
var maxTotalThreadsPerThreadgroup: Int { get }
```

## Mentioned In

- [Calculating threadgroup and grid sizes](../calculating-threadgroup-and-grid-sizes.md)

<a id="discussion"></a>

## Discussion

When you create a compute pipeline state, it calculates the maximum number of threads available on the device. This value never changes, but may be different for different pipeline objects.

See [Creating threads and threadgroups](../creating-threads-and-threadgroups.md) and [Calculating threadgroup and grid sizes](../calculating-threadgroup-and-grid-sizes.md) for more information on aligning data, thread width, and threadgroup size.

## See Also

### Checking threadgroup attributes

- [threadExecutionWidth](threadexecutionwidth.md): The number of threads that the GPU executes simultaneously.
- [staticThreadgroupMemoryLength](staticthreadgroupmemorylength.md): The length, in bytes, of statically allocated threadgroup memory.

# maxTotalThreadsPerThreadgroup (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The maximum number of threads in a threadgroup that you can dispatch to the pipeline.

## Declaration

```objectivec
@property (readonly) NSUInteger maxTotalThreadsPerThreadgroup;
```

## Mentioned In

- [Calculating threadgroup and grid sizes](../calculating-threadgroup-and-grid-sizes.md)

<a id="discussion"></a>

## Discussion

When you create a compute pipeline state, it calculates the maximum number of threads available on the device. This value never changes, but may be different for different pipeline objects.

See [Creating threads and threadgroups](../creating-threads-and-threadgroups.md) and [Calculating threadgroup and grid sizes](../calculating-threadgroup-and-grid-sizes.md) for more information on aligning data, thread width, and threadgroup size.

## See Also

### Checking threadgroup attributes

- [threadExecutionWidth](threadexecutionwidth.md): The number of threads that the GPU executes simultaneously.
- [staticThreadgroupMemoryLength](staticthreadgroupmemorylength.md): The length, in bytes, of statically allocated threadgroup memory.
