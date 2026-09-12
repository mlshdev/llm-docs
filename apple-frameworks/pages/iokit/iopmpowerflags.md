> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iopmpowerflags](https://developer.apple.com/documentation/iokit/iopmpowerflags)

# IOPMPowerFlags

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Bits are used in defining capabilityFlags, inputPowerRequirements, and outputPowerCharacter in the IOPMPowerState structure.

## Declaration

```objectivec
typedef unsigned long IOPMPowerFlags;
```

<a id="discussion"></a>

## Discussion

These bits may be bitwise-OR'd together in the IOPMPowerState capabilityFlags field, the outputPowerCharacter field, and/or the inputPowerRequirement field.

The comments clearly mark whether each flag should be used in the capabilityFlags field, outputPowerCharacter field, and inputPowerRequirement field, or all three.

The value of capabilityFlags, inputPowerRequirement or outputPowerCharacter may be 0. Most drivers implement their 'OFF' state, used when asleep, by defininf each of the 3 fields as 0.

The bits listed below are only the most common bits used to define a device's power states. Your device's IO family may require that your device specify other input or output power flags to interact properly. Consult family-specific documentation to determine if your IOPower plane parents or children require other power flags; they probably don't.

## Topics

### Constants

- [kIOPMPowerOn](1499606-anonymous/kiopmpoweron.md)
- [kIOPMDeviceUsable](1499606-anonymous/kiopmdeviceusable.md)
- [kIOPMLowPower](1499606-anonymous/kiopmlowpower.md)
- [kIOPMPreventIdleSleep](1499606-anonymous/kiopmpreventidlesleep.md)
- [kIOPMSleepCapability](1499606-anonymous/kiopmsleepcapability.md)
- [kIOPMRestartCapability](1499606-anonymous/kiopmrestartcapability.md)
- [kIOPMSleep](1499606-anonymous/kiopmsleep.md)
- [kIOPMRestart](1499606-anonymous/kiopmrestart.md)
- [kIOPMInitialDeviceState](1499606-anonymous/kiopminitialdevicestate.md)
- [kIOPMRootDomainState](1499606-anonymous/kiopmrootdomainstate.md)

## See Also

### Related Documentation

- [IOPMPowerFlags](https://developer.apple.com/documentation/kernel/iopmpowerflags): Bits are used in defining capabilityFlags, inputPowerRequirements, and outputPowerCharacter in the IOPMPowerState structure.
