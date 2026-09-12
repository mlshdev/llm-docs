> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostpipe/3294690-asyncio_impl](https://developer.apple.com/documentation/kernel/iousbhostpipe/3294690-asyncio_impl)

# AsyncIO_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
kern_return_t AsyncIO_Impl(IOMemoryDescriptor *dataBuffer, uint32_t dataBufferLength, OSAction *completion, uint32_t completionTimeoutMs);
```
