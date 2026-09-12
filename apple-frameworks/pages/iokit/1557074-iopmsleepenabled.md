> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1557074-iopmsleepenabled](https://developer.apple.com/documentation/iokit/1557074-iopmsleepenabled)

# IOPMSleepEnabled

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Tells whether the system supports full sleep, or just doze

## Declaration

```objectivec
boolean_t IOPMSleepEnabled(void);
```

<a id="return_value"></a>

## Return Value

Returns true if the system supports sleep, false if some hardware prevents full sleep.

## See Also

### Miscellaneous

- [IOPMAssertionDictionaryKeys](iopmlib_h/iopmassertiondictionarykeys.md)
- [IOPMAssertionTypes](iopmlib_h/iopmassertiontypes.md): Use as AssertionType argument to [IOPMAssertionCreate](1557118-iopmassertioncreate.md). The idle display will not sleep when enabled, and consequently the system will not idle sleep.
- [IOPMCopyBatteryInfo](1557138-iopmcopybatteryinfo.md): Request raw battery data from the system.
- [IOPMFindPowerManagement](1557133-iopmfindpowermanagement.md): Finds the Root Power Domain IOService.
- [IOPMGetAggressiveness](1557117-iopmgetaggressiveness.md): Retrieves the current value of one of the aggressiveness factors in IOKit Power Management.
- [IOPMSetAggressiveness](1557098-iopmsetaggressiveness.md): Sets one of the aggressiveness factors in IOKit Power Management.
- [IOPMSleepSystem](1557121-iopmsleepsystem.md): Request that the system initiate sleep.
