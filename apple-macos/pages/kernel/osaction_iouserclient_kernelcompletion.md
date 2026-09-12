> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osaction_iouserclient_kernelcompletion](https://developer.apple.com/documentation/kernel/osaction_iouserclient_kernelcompletion)

# OSAction_IOUserClient_KernelCompletion

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 11.0+

## Declaration

```objectivec
class OSAction_IOUserClient_KernelCompletion : OSAction, OSAction_IOUserClient_KernelCompletionInterface
```

## Topics

### Instance Methods

- [Dispatch](osaction_iouserclient_kernelcompletion/3567107-dispatch.md)
- [getMetaClass](osaction_iouserclient_kernelcompletion/3567108-getmetaclass.md)

## Relationships

### Inherits From

- [OSAction](osaction.md)
- [OSAction_IOUserClient_KernelCompletionInterface](osaction_iouserclient_kernelcompletioninterface.md)

## See Also

### User-Space Interactions

- [IOSharedDataQueue](ioshareddataqueue.md): A generic queue designed to pass data both from the kernel to a user process and from a user process to the kernel.
- [IOSharedInterruptController](iosharedinterruptcontroller.md)
- [IOUserClient](iouserclient.md): Provides a basis for communication between client applications and I/O Kit objects.
- [IOStreamUserClient](iostreamuserclient.md)
- [IOStream](iostream.md): A class representing a stream of data buffers passed from kernel to user space and back again.
- [IOStreamBuffer](iostreambuffer.md): A class representing a data buffer that is part of an IOStream.
- [OSAction_IOUserClient_KernelCompletionInterface](osaction_iouserclient_kernelcompletioninterface.md)
