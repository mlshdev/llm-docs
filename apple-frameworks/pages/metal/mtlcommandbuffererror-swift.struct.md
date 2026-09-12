> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffererror-swift.struct](https://developer.apple.com/documentation/metal/mtlcommandbuffererror-swift.struct)

# MTLCommandBufferError

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The command buffer error codes that indicate why the GPU doesn’t finish executing a command buffer.

## Declaration

```swift
struct MTLCommandBufferError
```

## Topics

### Errors codes

- [none](mtlcommandbuffererror-swift.struct/none.md): An error code that represents the absence of any problems.
- [timeout](mtlcommandbuffererror-swift.struct/timeout.md): An error code that indicates the system interrupted and terminated the command buffer before it finished running.
- [pageFault](mtlcommandbuffererror-swift.struct/pagefault.md): An error code that indicates the command buffer generated a page fault the GPU can’t service.
- [notPermitted](mtlcommandbuffererror-swift.struct/notpermitted.md): An error code that indicates a process doesn’t have access to a GPU device.
- [outOfMemory](mtlcommandbuffererror-swift.struct/outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to execute a command buffer.
- [invalidResource](mtlcommandbuffererror-swift.struct/invalidresource.md): An error code that indicates the command buffer has an invalid reference to resource.
- [memoryless](mtlcommandbuffererror-swift.struct/memoryless.md): An error code that indicates the GPU ran out of one or more of its internal resources that support memoryless render pass attachments.
- [deviceRemoved](mtlcommandbuffererror-swift.struct/deviceremoved.md): Deprecated. An error code that indicates a person physically removed the GPU device before the command buffer finished running.
- [stackOverflow](mtlcommandbuffererror-swift.struct/stackoverflow.md): An error code that indicates the GPU terminated the command buffer because a kernel function of tile shader used too many stack frames.
- [accessRevoked](mtlcommandbuffererror-swift.struct/accessrevoked.md): An error code that indicates the system has revoked the Metal device’s access because it’s responsible for too many timeouts or hangs.
- [internal](mtlcommandbuffererror-swift.struct/internal.md): An error code that indicates the Metal framework has an internal problem.
- [MTLCommandBufferError.Code](mtlcommandbuffererror-swift.struct/code.md): Error codes that indicate why a GPU is unable to finish running a command buffer.

### Error domain

- [errorDomain](mtlcommandbuffererror-swift.struct/errordomain.md): The current command buffer error domain.
- [MTLCommandBufferErrorDomain](mtlcommandbuffererrordomain.md): The domain for Metal command buffer errors.

### Deprecated

- [blacklisted](mtlcommandbuffererror-swift.struct/blacklisted.md): Deprecated. A former error code that indicates the system has revoked the Metal device’s access because it’s responsible for too many timeouts or hangs.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Submitting work to a GPU with Metal

- [Setting up a command structure](setting-up-a-command-structure.md): Discover how Metal executes commands on a GPU.
- [MTLCommandQueue](mtlcommandqueue.md): An instance you use to create, submit, and schedule command buffers to a specific GPU device to run the commands within those buffers.
- [MTLCommandQueueDescriptor](mtlcommandqueuedescriptor.md): A configuration that customizes the behavior for a new command queue.
- [MTLCommandBuffer](mtlcommandbuffer.md): A container that stores a sequence of GPU commands that you encode into it.
- [MTLCommandBufferDescriptor](mtlcommandbufferdescriptor.md): A configuration that customizes the behavior for a new command buffer.
- [MTLCommandEncoder](mtlcommandencoder.md): An encoder that writes GPU commands into a command buffer.
