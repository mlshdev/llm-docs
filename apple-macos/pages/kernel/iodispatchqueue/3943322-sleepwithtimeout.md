> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodispatchqueue/3943322-sleepwithtimeout

# SleepWithTimeout

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 22.0+ · macOS 13.0+

## Declaration

```objectivec
kern_return_t SleepWithTimeout(void *event, uint64_t timeout);
```
