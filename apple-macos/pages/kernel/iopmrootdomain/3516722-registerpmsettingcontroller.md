> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopmrootdomain/3516722-registerpmsettingcontroller

# registerPMSettingController

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
IOReturn registerPMSettingController(const OSSymbol *settings[], uint32_t supportedPowerSources, IOPMSettingControllerCallback callout, OSObject *target, uintptr_t refcon, OSObject **handle);
```
