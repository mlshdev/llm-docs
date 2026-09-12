> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudioengineuserclient/1495553-saferegisterclientbuffer64](https://developer.apple.com/documentation/kernel/ioaudioengineuserclient/1495553-saferegisterclientbuffer64)

# safeRegisterClientBuffer64

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
virtual IOReturn safeRegisterClientBuffer64(UInt32 audioStreamIndex, mach_vm_address_t *sourceBuffer, UInt32 bufSizeInBytes, UInt32 bufferSetID);
```
