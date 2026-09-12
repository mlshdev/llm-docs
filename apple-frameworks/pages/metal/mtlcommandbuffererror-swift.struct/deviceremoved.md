> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffererror-swift.struct/deviceremoved](https://developer.apple.com/documentation/metal/mtlcommandbuffererror-swift.struct/deviceremoved)

# deviceRemoved

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** macOS 10.13+ (deprecated in 27.0)

An error code that indicates a person physically removed the GPU device before the command buffer finished running.

> MTLCommandBufferErrorDeviceRemoved cannot occur on Apple Silicon

## Declaration

```swift
static var deviceRemoved: MTLCommandBufferError.Code { get }
```

## See Also

### Errors codes

- [none](none.md): An error code that represents the absence of any problems.
- [timeout](timeout.md): An error code that indicates the system interrupted and terminated the command buffer before it finished running.
- [pageFault](pagefault.md): An error code that indicates the command buffer generated a page fault the GPU can’t service.
- [notPermitted](notpermitted.md): An error code that indicates a process doesn’t have access to a GPU device.
- [outOfMemory](outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to execute a command buffer.
- [invalidResource](invalidresource.md): An error code that indicates the command buffer has an invalid reference to resource.
- [memoryless](memoryless.md): An error code that indicates the GPU ran out of one or more of its internal resources that support memoryless render pass attachments.
- [stackOverflow](stackoverflow.md): An error code that indicates the GPU terminated the command buffer because a kernel function of tile shader used too many stack frames.
- [accessRevoked](accessrevoked.md): An error code that indicates the system has revoked the Metal device’s access because it’s responsible for too many timeouts or hangs.
- [internal](internal.md): An error code that indicates the Metal framework has an internal problem.
- [MTLCommandBufferError.Code](code.md): Error codes that indicate why a GPU is unable to finish running a command buffer.
