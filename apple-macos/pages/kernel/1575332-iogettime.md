> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1575332-iogettime](https://developer.apple.com/documentation/kernel/1575332-iogettime)

# IOGetTime

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
void IOGetTime(mach_timespec_t *clock_time);
```

## See Also

### Timers

- [IOTimerEventSource](iotimereventsource.md): Time based event source mechanism.
- [IOWatchDogTimer](iowatchdogtimer.md)
- [IOTimeStampConstant](1535203-iotimestampconstant.md)
- [IOTimeStampEndConstant](1535232-iotimestampendconstant.md)
- [IOTimeStampStartConstant](1535234-iotimestampstartconstant.md)
