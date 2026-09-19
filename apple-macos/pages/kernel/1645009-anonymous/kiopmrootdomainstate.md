> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1645009-anonymous/kiopmrootdomainstate

# kIOPMRootDomainState

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOPMRootDomainState = 0x00000200
```

<a id="discussion"></a>

## Discussion

An indication that the power flags represent the state of the root power domain. This bit must not be set in the IOPMPowerState structure. Power Management may pass this bit to initialPowerStateForDomainState() or powerStateForDomainState() to map from a global system state to the desired device state.
