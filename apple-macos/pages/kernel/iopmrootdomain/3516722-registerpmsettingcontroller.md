> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopmrootdomain/3516722-registerpmsettingcontroller](https://developer.apple.com/documentation/kernel/iopmrootdomain/3516722-registerpmsettingcontroller)

# registerPMSettingController

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
IOReturn registerPMSettingController(const OSSymbol *settings[], uint32_t supportedPowerSources, IOPMSettingControllerCallback callout, OSObject *target, uintptr_t refcon, OSObject **handle);
```
