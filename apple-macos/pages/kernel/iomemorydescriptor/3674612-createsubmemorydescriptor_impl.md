> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/3674612-createsubmemorydescriptor_impl](https://developer.apple.com/documentation/kernel/iomemorydescriptor/3674612-createsubmemorydescriptor_impl)

# CreateSubMemoryDescriptor_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
static kern_return_t CreateSubMemoryDescriptor_Impl(uint64_t memoryDescriptorCreateOptions, uint64_t offset, uint64_t length, IOMemoryDescriptor *ofDescriptor, IOMemoryDescriptor **memory);
```
