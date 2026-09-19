> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/usbpowerrequesttypes/kusbpowerduringwakerevocable

# kUSBPowerDuringWakeRevocable

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.8+

The system requests power reallocation as revocable.

## Declaration

```objectivec
kUSBPowerDuringWakeRevocable = 6
```

<a id="discussion"></a>

## Discussion

The system uses this extra power while it’s awake, but the [kUSBPowerRequestWakeRelease](kusbpowerrequestwakerelease.md) message can take that power away and reallocate it to another device.
