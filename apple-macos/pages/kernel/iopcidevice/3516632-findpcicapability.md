> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopcidevice/3516632-findpcicapability

# FindPCICapability

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+ (deprecated in 11.0)

## Declaration

```objectivec
kern_return_t FindPCICapability(uint32_t capabilityID, uint64_t searchOffset, uint64_t *foundCapabilityOffset, OSDispatchMethod supermethod);
```
