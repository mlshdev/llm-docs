> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostreambuffer/1589864-withmemorydescriptors](https://developer.apple.com/documentation/kernel/iostreambuffer/1589864-withmemorydescriptors)

# withMemoryDescriptors

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IOStreamBuffer * withMemoryDescriptors(IOMemoryDescriptor *dataBuffer, IOMemoryDescriptor *controlBuffer, IOStreamBufferID bufferID);
```
