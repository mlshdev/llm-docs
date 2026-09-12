> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate/staticthreadgroupmemorylength](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate/staticthreadgroupmemorylength)

# staticThreadgroupMemoryLength (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The length, in bytes, of statically allocated threadgroup memory.

## Declaration

```swift
var staticThreadgroupMemoryLength: Int { get }
```

## See Also

### Checking threadgroup attributes

- [maxTotalThreadsPerThreadgroup](maxtotalthreadsperthreadgroup.md): The maximum number of threads in a threadgroup that you can dispatch to the pipeline.
- [threadExecutionWidth](threadexecutionwidth.md): The number of threads that the GPU executes simultaneously.

# staticThreadgroupMemoryLength (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The length, in bytes, of statically allocated threadgroup memory.

## Declaration

```objectivec
@property (readonly) NSUInteger staticThreadgroupMemoryLength;
```

## See Also

### Checking threadgroup attributes

- [maxTotalThreadsPerThreadgroup](maxtotalthreadsperthreadgroup.md): The maximum number of threads in a threadgroup that you can dispatch to the pipeline.
- [threadExecutionWidth](threadexecutionwidth.md): The number of threads that the GPU executes simultaneously.
