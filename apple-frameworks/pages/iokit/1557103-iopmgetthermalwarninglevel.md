> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1557103-iopmgetthermalwarninglevel](https://developer.apple.com/documentation/iokit/1557103-iopmgetthermalwarninglevel)

# IOPMGetThermalWarningLevel

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

Get thermal warning level of the system.

## Declaration

```objectivec
IOReturn IOPMGetThermalWarningLevel(uint32_t *thermalLevel);
```

<a id="return_value"></a>

## Return Value

kIOReturnSuccess, or other error report. Returns kIOReturnNotFound if thermal warning level has not been published.

## See Also

### CPU Power & Thermal

- [IOPMCopyCPUPowerStatus](1557079-iopmcopycpupowerstatus.md): Copy status of all current CPU power levels.
