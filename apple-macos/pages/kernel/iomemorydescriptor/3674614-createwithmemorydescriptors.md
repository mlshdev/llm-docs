> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/3674614-createwithmemorydescriptors](https://developer.apple.com/documentation/kernel/iomemorydescriptor/3674614-createwithmemorydescriptors)

# CreateWithMemoryDescriptors

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
static kern_return_t CreateWithMemoryDescriptors(uint64_t memoryDescriptorCreateOptions, uint32_t withDescriptorsCount, IOMemoryDescriptor **const withDescriptors, IOMemoryDescriptor **memory);
```
