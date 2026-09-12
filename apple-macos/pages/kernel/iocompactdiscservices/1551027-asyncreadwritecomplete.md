> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocompactdiscservices/1551027-asyncreadwritecomplete](https://developer.apple.com/documentation/kernel/iocompactdiscservices/1551027-asyncreadwritecomplete)

# AsyncReadWriteComplete

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void AsyncReadWriteComplete(void *clientData, IOReturn status, UInt64 actualByteCount);
```
