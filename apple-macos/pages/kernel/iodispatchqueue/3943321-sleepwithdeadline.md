> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodispatchqueue/3943321-sleepwithdeadline](https://developer.apple.com/documentation/kernel/iodispatchqueue/3943321-sleepwithdeadline)

# SleepWithDeadline

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 22.0+ · macOS 13.0+

## Declaration

```objectivec
kern_return_t SleepWithDeadline(void *event, uint64_t options, uint64_t deadline);
```
