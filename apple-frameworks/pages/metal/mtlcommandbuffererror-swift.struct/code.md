> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffererror-swift.struct/code](https://developer.apple.com/documentation/metal/mtlcommandbuffererror-swift.struct/code)

# MTLCommandBufferError.Code (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Error codes that indicate why a GPU is unable to finish running a command buffer.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [MTLCommandBufferError.Code.none](code/none.md): An error code that represents the absence of any problems.
- [MTLCommandBufferError.Code.timeout](code/timeout.md): An error code that indicates the system interrupted and terminated the command buffer before it finished running.
- [MTLCommandBufferError.Code.pageFault](code/pagefault.md): An error code that indicates the command buffer generated a page fault the GPU can’t service.
- [MTLCommandBufferError.Code.notPermitted](code/notpermitted.md): An error code that indicates a process doesn’t have access to a GPU device.
- [MTLCommandBufferError.Code.outOfMemory](code/outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to execute a command buffer.
- [MTLCommandBufferError.Code.invalidResource](code/invalidresource.md): An error code that indicates the command buffer has an invalid reference to resource.
- [MTLCommandBufferError.Code.memoryless](code/memoryless.md): An error code that indicates the GPU ran out of one or more of its internal resources that support memoryless render pass attachments.
- [MTLCommandBufferError.Code.deviceRemoved](code/deviceremoved.md): Deprecated. An error code that indicates a person physically removed the GPU device before the command buffer finished running.
- [MTLCommandBufferError.Code.stackOverflow](code/stackoverflow.md): An error code that indicates the GPU terminated the command buffer because a kernel function of tile shader used too many stack frames.
- [accessRevoked](code/accessrevoked.md): An error code that indicates the system has revoked the Metal device’s access because it’s responsible for too many timeouts or hangs.
- [MTLCommandBufferError.Code.internal](code/internal.md): An error code that indicates the Metal framework has an internal problem.

### Deprecated

- [MTLCommandBufferError.Code.blacklisted](code/blacklisted.md): Deprecated. A former error code that indicates the system has revoked the Metal device’s access because it’s responsible for too many timeouts or hangs.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MTLCommandBufferError (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Error codes that indicate why a GPU is unable to finish running a command buffer.

## Declaration

```objectivec
enum MTLCommandBufferError : NSUInteger;
```

## Topics

### Error codes

- [MTLCommandBufferErrorNone](code/none.md): An error code that represents the absence of any problems.
- [MTLCommandBufferErrorTimeout](code/timeout.md): An error code that indicates the system interrupted and terminated the command buffer before it finished running.
- [MTLCommandBufferErrorPageFault](code/pagefault.md): An error code that indicates the command buffer generated a page fault the GPU can’t service.
- [MTLCommandBufferErrorNotPermitted](code/notpermitted.md): An error code that indicates a process doesn’t have access to a GPU device.
- [MTLCommandBufferErrorOutOfMemory](code/outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to execute a command buffer.
- [MTLCommandBufferErrorInvalidResource](code/invalidresource.md): An error code that indicates the command buffer has an invalid reference to resource.
- [MTLCommandBufferErrorMemoryless](code/memoryless.md): An error code that indicates the GPU ran out of one or more of its internal resources that support memoryless render pass attachments.
- [MTLCommandBufferErrorDeviceRemoved](code/deviceremoved.md): Deprecated. An error code that indicates a person physically removed the GPU device before the command buffer finished running.
- [MTLCommandBufferErrorStackOverflow](code/stackoverflow.md): An error code that indicates the GPU terminated the command buffer because a kernel function of tile shader used too many stack frames.
- [MTLCommandBufferErrorInternal](code/internal.md): An error code that indicates the Metal framework has an internal problem.

### Deprecated

- [MTLCommandBufferErrorBlacklisted](code/blacklisted.md): Deprecated. A former error code that indicates the system has revoked the Metal device’s access because it’s responsible for too many timeouts or hangs.

### Enumeration Cases

- [MTLCommandBufferErrorAccessRevoked](../mtlcommandbuffererror-c.enum/mtlcommandbuffererroraccessrevoked.md): An error code that indicates the system has revoked the Metal device’s access because it’s responsible for too many timeouts or hangs.

## See Also

### Submitting work to a GPU

- [Setting up a command structure](../setting-up-a-command-structure.md): Discover how Metal executes commands on a GPU.
- [MTLCommandQueue](../mtlcommandqueue.md): An instance you use to create, submit, and schedule command buffers to a specific GPU device to run the commands within those buffers.
- [MTLCommandQueueDescriptor](../mtlcommandqueuedescriptor.md): A configuration that customizes the behavior for a new command queue.
- [MTLCommandBuffer](../mtlcommandbuffer.md): A container that stores a sequence of GPU commands that you encode into it.
- [MTLCommandBufferDescriptor](../mtlcommandbufferdescriptor.md): A configuration that customizes the behavior for a new command buffer.
- [MTLCommandBufferErrorDomain](../mtlcommandbuffererrordomain.md): The domain for Metal command buffer errors.
- [MTLCommandEncoder](../mtlcommandencoder.md): An encoder that writes GPU commands into a command buffer.
