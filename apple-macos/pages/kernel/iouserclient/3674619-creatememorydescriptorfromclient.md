> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iouserclient/3674619-creatememorydescriptorfromclient

# CreateMemoryDescriptorFromClient_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
static kern_return_t CreateMemoryDescriptorFromClient_Invoke(const IORPC rpc, OSMetaClassBase *target, CreateMemoryDescriptorFromClient_Handler func);
```
