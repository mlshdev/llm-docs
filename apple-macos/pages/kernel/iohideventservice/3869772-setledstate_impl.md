> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohideventservice/3869772-setledstate_impl

# SetLEDState_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 12.0+ (deprecated in 12.0)

## Declaration

```objectivec
kern_return_t SetLEDState_Impl(uint32_t usagePage, uint32_t usage, bool on);
```
