> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopcidevice/3919729-configureinterrupts

# ConfigureInterrupts

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 12.3+ (deprecated in 12.3)

## Declaration

```objectivec
kern_return_t ConfigureInterrupts(uint32_t interruptType, uint32_t numRequired, uint32_t numRequested, IOOptionBits options, OSDispatchMethod supermethod);
```
