> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1535234-iotimestampstartconstant](https://developer.apple.com/documentation/kernel/1535234-iotimestampstartconstant)

# IOTimeStampStartConstant

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
void IOTimeStampStartConstant(unsigned int csc, uintptr_t a, uintptr_t b, uintptr_t c, uintptr_t d);
```

## See Also

### Timers

- [IOTimerEventSource](iotimereventsource.md): Time based event source mechanism.
- [IOWatchDogTimer](iowatchdogtimer.md)
- [IOGetTime](1575332-iogettime.md): Deprecated.
- [IOTimeStampConstant](1535203-iotimestampconstant.md)
- [IOTimeStampEndConstant](1535232-iotimestampendconstant.md)
