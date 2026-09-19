> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iomultimemorydescriptor/1553774-withdescriptors

# withDescriptors

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOMultiMemoryDescriptor> withDescriptors(IOMemoryDescriptor **descriptors, UInt32 withCount, IODirection withDirection, bool asReference);
```
