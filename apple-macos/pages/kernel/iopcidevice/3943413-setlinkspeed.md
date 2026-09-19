> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopcidevice/3943413-setlinkspeed

# SetLinkSpeed

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 13.0+ (deprecated in 13.0)

## Declaration

```objectivec
kern_return_t SetLinkSpeed(IOPCILinkSpeed linkSpeed, bool retrain, OSDispatchMethod supermethod);
```
