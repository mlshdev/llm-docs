> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1645009-anonymous/kiopmlowpower](https://developer.apple.com/documentation/kernel/1645009-anonymous/kiopmlowpower)

# kIOPMLowPower

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOPMLowPower = 0x00010000
```

<a id="discussion"></a>

## Discussion

Indicates device is in a low power state. May be bitwis-OR'd together with kIOPMDeviceUsable flag, to indicate the device is still usable.

A device with a capability of kIOPMLowPower may: Require either 0 or kIOPMPowerOn from its power parent Offer either kIOPMLowPower, kIOPMPowerOn, or 0 (no power at all) to its power plane children.

Useful only as a Capability, although USB drivers should consult USB family documentation for other valid circumstances to use the kIOPMLowPower bit.
