> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1557133-iopmfindpowermanagement](https://developer.apple.com/documentation/iokit/1557133-iopmfindpowermanagement)

# IOPMFindPowerManagement

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Finds the Root Power Domain IOService.

## Declaration

```objectivec
io_connect_t IOPMFindPowerManagement(mach_port_t master_device_port);
```

## Parameters

- `master_device_port`: Pass in `MACH_PORT_NULL` for the primary device port.

<a id="return_value"></a>

## Return Value

Returns a [io_connect_t](io_connect_t.md) handle on the root domain. Must be released with IOServiceClose() when done.

## See Also

### Miscellaneous

- [IOPMAssertionDictionaryKeys](iopmlib_h/iopmassertiondictionarykeys.md)
- [IOPMAssertionTypes](iopmlib_h/iopmassertiontypes.md): Use as AssertionType argument to [IOPMAssertionCreate](1557118-iopmassertioncreate.md). The idle display will not sleep when enabled, and consequently the system will not idle sleep.
- [IOPMCopyBatteryInfo](1557138-iopmcopybatteryinfo.md): Request raw battery data from the system.
- [IOPMGetAggressiveness](1557117-iopmgetaggressiveness.md): Retrieves the current value of one of the aggressiveness factors in IOKit Power Management.
- [IOPMSetAggressiveness](1557098-iopmsetaggressiveness.md): Sets one of the aggressiveness factors in IOKit Power Management.
- [IOPMSleepEnabled](1557074-iopmsleepenabled.md): Tells whether the system supports full sleep, or just doze
- [IOPMSleepSystem](1557121-iopmsleepsystem.md): Request that the system initiate sleep.
