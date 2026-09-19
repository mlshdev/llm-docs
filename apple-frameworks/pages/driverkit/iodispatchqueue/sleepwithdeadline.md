> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodispatchqueue/sleepwithdeadline

# SleepWithDeadline

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
kern_return_t SleepWithDeadline(void *event, uint64_t options, uint64_t deadline);
```

## See Also

### Instance Methods

- [DispatchConcurrent](dispatchconcurrent.md)
- [DispatchConcurrent_f](dispatchconcurrent_f.md)
- [RunAction](runaction.md)
- [Sleep](sleep.md)
- [SleepWithTimeout](sleepwithtimeout.md)
- [Wakeup](wakeup.md)
- [WakeupWithOptions](wakeupwithoptions.md)
