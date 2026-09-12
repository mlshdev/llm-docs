> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostdevice/3294619-createiobuffer_impl](https://developer.apple.com/documentation/kernel/iousbhostdevice/3294619-createiobuffer_impl)

# CreateIOBuffer_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
kern_return_t CreateIOBuffer_Impl(IOOptionBits options, uint64_t capacity, IOBufferMemoryDescriptor **buffer);
```
