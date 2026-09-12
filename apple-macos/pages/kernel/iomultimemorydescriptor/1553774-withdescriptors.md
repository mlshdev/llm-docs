> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomultimemorydescriptor/1553774-withdescriptors](https://developer.apple.com/documentation/kernel/iomultimemorydescriptor/1553774-withdescriptors)

# withDescriptors

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOMultiMemoryDescriptor> withDescriptors(IOMemoryDescriptor **descriptors, UInt32 withCount, IODirection withDirection, bool asReference);
```
