> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1645009-anonymous/kiopminitialdevicestate](https://developer.apple.com/documentation/kernel/1645009-anonymous/kiopminitialdevicestate)

# kIOPMInitialDeviceState

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOPMInitialDeviceState = 0x00000100
```

<a id="discussion"></a>

## Discussion

Indicates the initial power state for the device. If `initialPowerStateForDomainState()` returns a power state with this flag set in the capability field, then the initial power change is performed without calling the driver's `setPowerState()`.
