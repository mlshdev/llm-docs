> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1499606-anonymous/kiopmpreventidlesleep](https://developer.apple.com/documentation/iokit/1499606-anonymous/kiopmpreventidlesleep)

# kIOPMPreventIdleSleep

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

## Declaration

```objectivec
kIOPMPreventIdleSleep = 0x00000040
```

<a id="discussion"></a>

## Discussion

In the capability field of a power state, disallows idle system sleep while the device is in that state.

For example, displays and disks set this capability for their ON power state; since the system may not idle sleep while the display (and thus keyboard or mouse) or the disk is active.

Useful only as a Capability.
