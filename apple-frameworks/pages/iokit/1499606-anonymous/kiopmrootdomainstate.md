> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1499606-anonymous/kiopmrootdomainstate](https://developer.apple.com/documentation/iokit/1499606-anonymous/kiopmrootdomainstate)

# kIOPMRootDomainState

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+

## Declaration

```objectivec
kIOPMRootDomainState = 0x00000200
```

<a id="discussion"></a>

## Discussion

An indication that the power flags represent the state of the root power domain. This bit must not be set in the IOPMPowerState structure. Power Management may pass this bit to initialPowerStateForDomainState() or powerStateForDomainState() to map from a global system state to the desired device state.
