> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopcidevice/4359888-powerstatewillchangetogated

# powerStateWillChangeToGated

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 15.0+ (deprecated in 15.0)

## Declaration

```objectivec
virtual IOReturn powerStateWillChangeToGated(IOPMPowerFlags *capabilities, unsigned long *stateNumber, IOService *whatDevice);
```
