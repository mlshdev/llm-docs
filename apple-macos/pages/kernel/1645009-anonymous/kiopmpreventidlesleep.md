> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1645009-anonymous/kiopmpreventidlesleep](https://developer.apple.com/documentation/kernel/1645009-anonymous/kiopmpreventidlesleep)

# kIOPMPreventIdleSleep

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOPMPreventIdleSleep = 0x00000040
```

<a id="discussion"></a>

## Discussion

In the capability field of a power state, disallows idle system sleep while the device is in that state.

For example, displays and disks set this capability for their ON power state; since the system may not idle sleep while the display (and thus keyboard or mouse) or the disk is active.

Useful only as a Capability.
