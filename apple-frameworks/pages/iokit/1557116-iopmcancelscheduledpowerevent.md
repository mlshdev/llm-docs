> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1557116-iopmcancelscheduledpowerevent](https://developer.apple.com/documentation/iokit/1557116-iopmcancelscheduledpowerevent)

# IOPMCancelScheduledPowerEvent

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.3+

Cancel a previously scheduled power event.

## Declaration

```objectivec
IOReturn IOPMCancelScheduledPowerEvent(CFDateRef time_to_wake, CFStringRef my_id, CFStringRef type);
```

## Parameters

- `time_to_wake`: Cancel entry with this date and time.
- `my_id`: Cancel entry with this name.
- `type`: Type to cancel

<a id="return_value"></a>

## Return Value

kIOReturnSuccess on success, otherwise on failure

<a id="discussion"></a>

## Discussion

Arguments mirror those to IOPMSchedulePowerEvent. All arguments must match the original arguments from when the power on was scheduled. Must be called as root.

## See Also

### ScheduledEvents

- [IOPMCopyScheduledPowerEvents](1557109-iopmcopyscheduledpowerevents.md): List all scheduled system power events
- [IOPMSchedulePowerEvent](1557076-iopmschedulepowerevent.md): Schedule the machine to wake from sleep, power on, go to sleep, or shutdown.
