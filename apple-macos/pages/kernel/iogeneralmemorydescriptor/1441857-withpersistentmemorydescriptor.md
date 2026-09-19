> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iogeneralmemorydescriptor/1441857-withpersistentmemorydescriptor

# withPersistentMemoryDescriptor

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOMemoryDescriptor> withPersistentMemoryDescriptor(IOGeneralMemoryDescriptor *originalMD);
```
