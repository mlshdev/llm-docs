> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1557076-iopmschedulepowerevent](https://developer.apple.com/documentation/iokit/1557076-iopmschedulepowerevent)

# IOPMSchedulePowerEvent

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.3+

Schedule the machine to wake from sleep, power on, go to sleep, or shutdown.

## Declaration

```objectivec
IOReturn IOPMSchedulePowerEvent(CFDateRef time_to_wake, CFStringRef my_id, CFStringRef type);
```

## Parameters

- `time_to_wake`: Date and time that the system will power on/off.
- `my_id`: A CFStringRef identifying the calling app by CFBundleIdentifier. May be NULL.
- `type`: The type of power on you desire, either wake from sleep or power on. Choose from: CFSTR(kIOPMAutoWake) == wake machine, CFSTR(kIOPMAutoPowerOn) == power on machine, CFSTR(kIOPMAutoWakeOrPowerOn) == wake or power on, CFSTR(kIOPMAutoSleep) == sleep machine, CFSTR(kIOPMAutoShutdown) == power off machine, CFSTR(kIOPMAutoRestart) == restart the machine.

<a id="return_value"></a>

## Return Value

kIOReturnSuccess on success, otherwise on failure

<a id="discussion"></a>

## Discussion

This event will be added to the system's queue of power events and stored persistently on disk. The sleep and shutdown events present a graphical warning and allow a console user to cancel the event. Must be called as root.

## See Also

### ScheduledEvents

- [IOPMCancelScheduledPowerEvent](1557116-iopmcancelscheduledpowerevent.md): Cancel a previously scheduled power event.
- [IOPMCopyScheduledPowerEvents](1557109-iopmcopyscheduledpowerevents.md): List all scheduled system power events
