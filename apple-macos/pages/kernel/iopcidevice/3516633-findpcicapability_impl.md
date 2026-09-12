> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopcidevice/3516633-findpcicapability_impl](https://developer.apple.com/documentation/kernel/iopcidevice/3516633-findpcicapability_impl)

# FindPCICapability_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+ (deprecated in 11.0)

## Declaration

```objectivec
kern_return_t FindPCICapability_Impl(uint32_t capabilityID, uint64_t searchOffset, uint64_t *foundCapabilityOffset);
```
