> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pcidriverkit/iopcidevice/configureinterrupts

# ConfigureInterrupts

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · macOS

## Declaration

```objectivec
virtual kern_return_t ConfigureInterrupts(uint32_t interruptType, uint32_t numRequired, uint32_t numRequested, IOOptionBits options);
```
