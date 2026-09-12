> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1499606-anonymous/kiopminitialdevicestate](https://developer.apple.com/documentation/iokit/1499606-anonymous/kiopminitialdevicestate)

# kIOPMInitialDeviceState

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
kIOPMInitialDeviceState = 0x00000100
```

<a id="discussion"></a>

## Discussion

Indicates the initial power state for the device. If `initialPowerStateForDomainState()` returns a power state with this flag set in the capability field, then the initial power change is performed without calling the driver's `setPowerState()`.
