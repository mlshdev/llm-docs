> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudioengineuserclient/1495568-saferegisterclientbuffer](https://developer.apple.com/documentation/kernel/ioaudioengineuserclient/1495568-saferegisterclientbuffer)

# safeRegisterClientBuffer

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
virtual IOReturn safeRegisterClientBuffer(UInt32 audioStreamIndex, void *sourceBuffer, UInt32 bufSizeInBytes, UInt32 bufferSetID);
```
