> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1557079-iopmcopycpupowerstatus](https://developer.apple.com/documentation/iokit/1557079-iopmcopycpupowerstatus)

# IOPMCopyCPUPowerStatus

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

Copy status of all current CPU power levels.

## Declaration

```objectivec
IOReturn IOPMCopyCPUPowerStatus(CFDictionaryRef *cpuPowerStatus);
```

## Parameters

- `cpuPowerStatus`: Upon success, a pointer to a dictionary defining CPU power; otherwise NULL. Pointer will be populated with a newly created dictionary upon successful return. Caller must release dictionary.

<a id="return_value"></a>

## Return Value

kIOReturnSuccess, or other error report. Returns kIOReturnNotFound if CPU PowerStatus has not been published.

<a id="discussion"></a>

## Discussion

The returned dictionary may define some of these keys, as defined in IOPM.h: - kIOPMCPUPowerLimitProcessorSpeedKey - kIOPMCPUPowerLimitProcessorCountKey - kIOPMCPUPowerLimitSchedulerTimeKey

## See Also

### CPU Power & Thermal

- [IOPMGetThermalWarningLevel](1557103-iopmgetthermalwarninglevel.md): Get thermal warning level of the system.
