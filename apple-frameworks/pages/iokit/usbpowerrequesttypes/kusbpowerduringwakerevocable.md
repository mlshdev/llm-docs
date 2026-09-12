> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usbpowerrequesttypes/kusbpowerduringwakerevocable](https://developer.apple.com/documentation/iokit/usbpowerrequesttypes/kusbpowerduringwakerevocable)

# kUSBPowerDuringWakeRevocable

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.8+

## Declaration

```objectivec
kUSBPowerDuringWakeRevocable = 6
```

<a id="discussion"></a>

## Discussion

The power is to be used while the system is awake (i.e not sleeping), but can be taken away (via the kUSBPowerRequestWakeRelease message). The system can then allocate that extra power to another device.
