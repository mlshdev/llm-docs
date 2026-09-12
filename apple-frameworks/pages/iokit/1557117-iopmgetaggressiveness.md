> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1557117-iopmgetaggressiveness](https://developer.apple.com/documentation/iokit/1557117-iopmgetaggressiveness)

# IOPMGetAggressiveness

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Retrieves the current value of one of the aggressiveness factors in IOKit Power Management.

## Declaration

```objectivec
IOReturn IOPMGetAggressiveness(io_connect_t fb, unsigned long type, unsigned long *aggressiveness);
```

## Parameters

- `fb`: Representation of the Root Power Domain from IOPMFindPowerManagement.
- `type`: Specifies which aggressiveness factor is being retrieved.
- `aggressiveness`: Points to where to store the retrieved value of the aggressiveness factor.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess or an error condition if request failed.

## See Also

### Miscellaneous

- [IOPMAssertionDictionaryKeys](iopmlib_h/iopmassertiondictionarykeys.md)
- [IOPMAssertionTypes](iopmlib_h/iopmassertiontypes.md): Use as AssertionType argument to [IOPMAssertionCreate](1557118-iopmassertioncreate.md). The idle display will not sleep when enabled, and consequently the system will not idle sleep.
- [IOPMCopyBatteryInfo](1557138-iopmcopybatteryinfo.md): Request raw battery data from the system.
- [IOPMFindPowerManagement](1557133-iopmfindpowermanagement.md): Finds the Root Power Domain IOService.
- [IOPMSetAggressiveness](1557098-iopmsetaggressiveness.md): Sets one of the aggressiveness factors in IOKit Power Management.
- [IOPMSleepEnabled](1557074-iopmsleepenabled.md): Tells whether the system supports full sleep, or just doze
- [IOPMSleepSystem](1557121-iopmsleepsystem.md): Request that the system initiate sleep.
