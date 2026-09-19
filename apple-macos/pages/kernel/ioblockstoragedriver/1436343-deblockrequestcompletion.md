> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioblockstoragedriver/1436343-deblockrequestcompletion

# deblockRequestCompletion

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void deblockRequestCompletion(void *target, void *parameter, IOReturn status, UInt64 actualByteCount);
```
