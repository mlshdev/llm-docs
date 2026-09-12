> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostdevice/3294618-createiobuffer](https://developer.apple.com/documentation/kernel/iousbhostdevice/3294618-createiobuffer)

# CreateIOBuffer

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
kern_return_t CreateIOBuffer(IOOptionBits options, uint64_t capacity, IOBufferMemoryDescriptor **buffer, OSDispatchMethod supermethod);
```
