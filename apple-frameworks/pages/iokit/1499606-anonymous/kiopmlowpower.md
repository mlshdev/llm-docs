> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1499606-anonymous/kiopmlowpower](https://developer.apple.com/documentation/iokit/1499606-anonymous/kiopmlowpower)

# kIOPMLowPower

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```objectivec
kIOPMLowPower = 0x00010000
```

<a id="discussion"></a>

## Discussion

Indicates device is in a low power state. May be bitwis-OR'd together with kIOPMDeviceUsable flag, to indicate the device is still usable.

A device with a capability of kIOPMLowPower may: Require either 0 or kIOPMPowerOn from its power parent Offer either kIOPMLowPower, kIOPMPowerOn, or 0 (no power at all) to its power plane children.

Useful only as a Capability, although USB drivers should consult USB family documentation for other valid circumstances to use the kIOPMLowPower bit.
