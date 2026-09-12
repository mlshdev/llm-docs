> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/usbpowerrequesttypes/kusbpowerduringwakerevocable](https://developer.apple.com/documentation/kernel/usbpowerrequesttypes/kusbpowerduringwakerevocable)

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
