> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1557109-iopmcopyscheduledpowerevents

# IOPMCopyScheduledPowerEvents

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.3+

List all scheduled system power events

## Declaration

```objectivec
CFArrayRef IOPMCopyScheduledPowerEvents(void);
```

<a id="return_value"></a>

## Return Value

A CFArray of CFDictionaries of power events. The CFArray must be released by the caller. NULL if there are no scheduled events.

<a id="discussion"></a>

## Discussion

Returns a CFArray of CFDictionaries of power events. Each CFDictionary contains keys for CFSTR(kIOPMPowerEventTimeKey), CFSTR(kIOPMPowerEventAppNameKey), and CFSTR(kIOPMPowerEventTypeKey).

## See Also

### ScheduledEvents

- [IOPMCancelScheduledPowerEvent](1557116-iopmcancelscheduledpowerevent.md): Cancel a previously scheduled power event.
- [IOPMSchedulePowerEvent](1557076-iopmschedulepowerevent.md): Schedule the machine to wake from sleep, power on, go to sleep, or shutdown.
