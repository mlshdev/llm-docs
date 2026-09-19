> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iomemorydescriptor/3674614-createwithmemorydescriptors

# CreateWithMemoryDescriptors

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
static kern_return_t CreateWithMemoryDescriptors(uint64_t memoryDescriptorCreateOptions, uint32_t withDescriptorsCount, IOMemoryDescriptor **const withDescriptors, IOMemoryDescriptor **memory);
```
