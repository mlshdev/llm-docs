> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1557121-iopmsleepsystem](https://developer.apple.com/documentation/iokit/1557121-iopmsleepsystem)

# IOPMSleepSystem

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Request that the system initiate sleep.

## Declaration

```objectivec
IOReturn IOPMSleepSystem(io_connect_t fb);
```

## Parameters

- `fb`: Port used to communicate to the kernel, from IOPMFindPowerManagement.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess or an error condition if request failed.

<a id="discussion"></a>

## Discussion

For security purposes, caller must be root or the console user.

## See Also

### Miscellaneous

- [IOPMAssertionDictionaryKeys](iopmlib_h/iopmassertiondictionarykeys.md)
- [IOPMAssertionTypes](iopmlib_h/iopmassertiontypes.md): Use as AssertionType argument to [IOPMAssertionCreate](1557118-iopmassertioncreate.md). The idle display will not sleep when enabled, and consequently the system will not idle sleep.
- [IOPMCopyBatteryInfo](1557138-iopmcopybatteryinfo.md): Request raw battery data from the system.
- [IOPMFindPowerManagement](1557133-iopmfindpowermanagement.md): Finds the Root Power Domain IOService.
- [IOPMGetAggressiveness](1557117-iopmgetaggressiveness.md): Retrieves the current value of one of the aggressiveness factors in IOKit Power Management.
- [IOPMSetAggressiveness](1557098-iopmsetaggressiveness.md): Sets one of the aggressiveness factors in IOKit Power Management.
- [IOPMSleepEnabled](1557074-iopmsleepenabled.md): Tells whether the system supports full sleep, or just doze
