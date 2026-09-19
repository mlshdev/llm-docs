> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1535232-iotimestampendconstant

# IOTimeStampEndConstant

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
void IOTimeStampEndConstant(uintptr_t csc, uintptr_t a, uintptr_t b, uintptr_t c, uintptr_t d);
```

## See Also

### Timers

- [IOTimerEventSource](iotimereventsource.md): Time based event source mechanism.
- [IOWatchDogTimer](iowatchdogtimer.md)
- [IOGetTime](1575332-iogettime.md): Deprecated.
- [IOTimeStampConstant](1535203-iotimestampconstant.md)
- [IOTimeStampStartConstant](1535234-iotimestampstartconstant.md)
