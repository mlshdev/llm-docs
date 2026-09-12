> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/3674611-createsubmemorydescriptor](https://developer.apple.com/documentation/kernel/iomemorydescriptor/3674611-createsubmemorydescriptor)

# CreateSubMemoryDescriptor

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Type Method  
**Availability:** DriverKit 20.0+ · macOS 11.0+

## Declaration

```objectivec
static kern_return_t CreateSubMemoryDescriptor(uint64_t memoryDescriptorCreateOptions, uint64_t offset, uint64_t length, IOMemoryDescriptor *ofDescriptor, IOMemoryDescriptor **memory);
```
