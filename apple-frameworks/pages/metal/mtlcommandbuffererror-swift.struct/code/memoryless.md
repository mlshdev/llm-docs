> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffererror-swift.struct/code/memoryless](https://developer.apple.com/documentation/metal/mtlcommandbuffererror-swift.struct/code/memoryless)

# MTLCommandBufferError.Code.memoryless (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 10.0+ · visionOS 1.0+

An error code that indicates the GPU ran out of one or more of its internal resources that support memoryless render pass attachments.

## Declaration

```swift
case memoryless
```

<a id="discussion"></a>

## Discussion

See the error string for more details.

## See Also

### Error codes

- [MTLCommandBufferError.Code.none](none.md): An error code that represents the absence of any problems.
- [MTLCommandBufferError.Code.timeout](timeout.md): An error code that indicates the system interrupted and terminated the command buffer before it finished running.
- [MTLCommandBufferError.Code.pageFault](pagefault.md): An error code that indicates the command buffer generated a page fault the GPU can’t service.
- [MTLCommandBufferError.Code.notPermitted](notpermitted.md): An error code that indicates a process doesn’t have access to a GPU device.
- [MTLCommandBufferError.Code.outOfMemory](outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to execute a command buffer.
- [MTLCommandBufferError.Code.invalidResource](invalidresource.md): An error code that indicates the command buffer has an invalid reference to resource.
- [MTLCommandBufferError.Code.deviceRemoved](deviceremoved.md): Deprecated. An error code that indicates a person physically removed the GPU device before the command buffer finished running.
- [MTLCommandBufferError.Code.stackOverflow](stackoverflow.md): An error code that indicates the GPU terminated the command buffer because a kernel function of tile shader used too many stack frames.
- [accessRevoked](accessrevoked.md): An error code that indicates the system has revoked the Metal device’s access because it’s responsible for too many timeouts or hangs.
- [MTLCommandBufferError.Code.internal](internal.md): An error code that indicates the Metal framework has an internal problem.

# MTLCommandBufferErrorMemoryless (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 10.0+ · visionOS 1.0+

An error code that indicates the GPU ran out of one or more of its internal resources that support memoryless render pass attachments.

## Declaration

```objectivec
MTLCommandBufferErrorMemoryless
```

<a id="discussion"></a>

## Discussion

See the error string for more details.

## See Also

### Error codes

- [MTLCommandBufferErrorNone](none.md): An error code that represents the absence of any problems.
- [MTLCommandBufferErrorTimeout](timeout.md): An error code that indicates the system interrupted and terminated the command buffer before it finished running.
- [MTLCommandBufferErrorPageFault](pagefault.md): An error code that indicates the command buffer generated a page fault the GPU can’t service.
- [MTLCommandBufferErrorNotPermitted](notpermitted.md): An error code that indicates a process doesn’t have access to a GPU device.
- [MTLCommandBufferErrorOutOfMemory](outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to execute a command buffer.
- [MTLCommandBufferErrorInvalidResource](invalidresource.md): An error code that indicates the command buffer has an invalid reference to resource.
- [MTLCommandBufferErrorDeviceRemoved](deviceremoved.md): Deprecated. An error code that indicates a person physically removed the GPU device before the command buffer finished running.
- [MTLCommandBufferErrorStackOverflow](stackoverflow.md): An error code that indicates the GPU terminated the command buffer because a kernel function of tile shader used too many stack frames.
- [MTLCommandBufferErrorInternal](internal.md): An error code that indicates the Metal framework has an internal problem.
