> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffererror-swift.struct/code/timeout](https://developer.apple.com/documentation/metal/mtlcommandbuffererror-swift.struct/code/timeout)

# MTLCommandBufferError.Code.timeout (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An error code that indicates the system interrupted and terminated the command buffer before it finished running.

## Declaration

```swift
case timeout
```

<a id="discussion"></a>

## Discussion

Possible causes include:

- The commands in the buffer took more time to run than the system allows.
- The command buffer timed out waiting for another workload to signal an [MTLEvent](../../mtlevent.md).

## See Also

### Error codes

- [MTLCommandBufferError.Code.none](none.md): An error code that represents the absence of any problems.
- [MTLCommandBufferError.Code.pageFault](pagefault.md): An error code that indicates the command buffer generated a page fault the GPU can’t service.
- [MTLCommandBufferError.Code.notPermitted](notpermitted.md): An error code that indicates a process doesn’t have access to a GPU device.
- [MTLCommandBufferError.Code.outOfMemory](outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to execute a command buffer.
- [MTLCommandBufferError.Code.invalidResource](invalidresource.md): An error code that indicates the command buffer has an invalid reference to resource.
- [MTLCommandBufferError.Code.memoryless](memoryless.md): An error code that indicates the GPU ran out of one or more of its internal resources that support memoryless render pass attachments.
- [MTLCommandBufferError.Code.deviceRemoved](deviceremoved.md): Deprecated. An error code that indicates a person physically removed the GPU device before the command buffer finished running.
- [MTLCommandBufferError.Code.stackOverflow](stackoverflow.md): An error code that indicates the GPU terminated the command buffer because a kernel function of tile shader used too many stack frames.
- [accessRevoked](accessrevoked.md): An error code that indicates the system has revoked the Metal device’s access because it’s responsible for too many timeouts or hangs.
- [MTLCommandBufferError.Code.internal](internal.md): An error code that indicates the Metal framework has an internal problem.

# MTLCommandBufferErrorTimeout (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An error code that indicates the system interrupted and terminated the command buffer before it finished running.

## Declaration

```objectivec
MTLCommandBufferErrorTimeout
```

<a id="discussion"></a>

## Discussion

Possible causes include:

- The commands in the buffer took more time to run than the system allows.
- The command buffer timed out waiting for another workload to signal an [MTLEvent](../../mtlevent.md).

## See Also

### Error codes

- [MTLCommandBufferErrorNone](none.md): An error code that represents the absence of any problems.
- [MTLCommandBufferErrorPageFault](pagefault.md): An error code that indicates the command buffer generated a page fault the GPU can’t service.
- [MTLCommandBufferErrorNotPermitted](notpermitted.md): An error code that indicates a process doesn’t have access to a GPU device.
- [MTLCommandBufferErrorOutOfMemory](outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to execute a command buffer.
- [MTLCommandBufferErrorInvalidResource](invalidresource.md): An error code that indicates the command buffer has an invalid reference to resource.
- [MTLCommandBufferErrorMemoryless](memoryless.md): An error code that indicates the GPU ran out of one or more of its internal resources that support memoryless render pass attachments.
- [MTLCommandBufferErrorDeviceRemoved](deviceremoved.md): Deprecated. An error code that indicates a person physically removed the GPU device before the command buffer finished running.
- [MTLCommandBufferErrorStackOverflow](stackoverflow.md): An error code that indicates the GPU terminated the command buffer because a kernel function of tile shader used too many stack frames.
- [MTLCommandBufferErrorInternal](internal.md): An error code that indicates the Metal framework has an internal problem.
