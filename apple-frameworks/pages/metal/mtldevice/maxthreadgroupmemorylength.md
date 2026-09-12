> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/maxthreadgroupmemorylength](https://developer.apple.com/documentation/metal/mtldevice/maxthreadgroupmemorylength)

# maxThreadgroupMemoryLength (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The maximum threadgroup memory available to a compute kernel, in bytes.

## Declaration

```swift
var maxThreadgroupMemoryLength: Int { get }
```

## See Also

### Checking compute support

- [maxThreadsPerThreadgroup](maxthreadsperthreadgroup.md): The maximum number of threads along each dimension of a threadgroup.

# maxThreadgroupMemoryLength (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The maximum threadgroup memory available to a compute kernel, in bytes.

## Declaration

```objectivec
@property (readonly) NSUInteger maxThreadgroupMemoryLength;
```

## See Also

### Checking compute support

- [maxThreadsPerThreadgroup](maxthreadsperthreadgroup.md): The maximum number of threads along each dimension of a threadgroup.
