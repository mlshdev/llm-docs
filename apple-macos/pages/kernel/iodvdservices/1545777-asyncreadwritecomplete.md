> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodvdservices/1545777-asyncreadwritecomplete](https://developer.apple.com/documentation/kernel/iodvdservices/1545777-asyncreadwritecomplete)

# AsyncReadWriteComplete

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void AsyncReadWriteComplete(void *clientData, IOReturn status, UInt64 actualByteCount);
```
