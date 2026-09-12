> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1557138-iopmcopybatteryinfo](https://developer.apple.com/documentation/iokit/1557138-iopmcopybatteryinfo)

# IOPMCopyBatteryInfo

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Request raw battery data from the system.

## Declaration

```objectivec
IOReturn IOPMCopyBatteryInfo(mach_port_t masterPort, CFArrayRef *info);
```

## Parameters

- `masterPort`: The primary port obtained from [IOMasterPort](1514652-iomasterport.md). Pass `MACH_PORT_NULL`.
- `info`: A CFArray of CFDictionaries containing raw battery data.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess or an error condition if request failed.

<a id="discussion"></a>

## Discussion

WARNING! IOPMCoyBatteryInfo is unsupported on ALL Intel CPU based systems. For PPC CPU based systems, it remains not recommended. For almost all purposes, developers should use the richer IOPowerSources API (with change notifications) instead of using IOPMCopyBatteryInfo. Keys to decipher IOPMCopyBatteryInfo's return CFArray exist in IOPM.h.

## See Also

### Miscellaneous

- [IOPMAssertionDictionaryKeys](iopmlib_h/iopmassertiondictionarykeys.md)
- [IOPMAssertionTypes](iopmlib_h/iopmassertiontypes.md): Use as AssertionType argument to [IOPMAssertionCreate](1557118-iopmassertioncreate.md). The idle display will not sleep when enabled, and consequently the system will not idle sleep.
- [IOPMFindPowerManagement](1557133-iopmfindpowermanagement.md): Finds the Root Power Domain IOService.
- [IOPMGetAggressiveness](1557117-iopmgetaggressiveness.md): Retrieves the current value of one of the aggressiveness factors in IOKit Power Management.
- [IOPMSetAggressiveness](1557098-iopmsetaggressiveness.md): Sets one of the aggressiveness factors in IOKit Power Management.
- [IOPMSleepEnabled](1557074-iopmsleepenabled.md): Tells whether the system supports full sleep, or just doze
- [IOPMSleepSystem](1557121-iopmsleepsystem.md): Request that the system initiate sleep.
