> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iortc/2935662-getmonotonicclockandtimestamp](https://developer.apple.com/documentation/kernel/iortc/2935662-getmonotonicclockandtimestamp)

# getMonotonicClockAndTimestamp

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.13.2+

## Declaration

```objectivec
virtual IOReturn getMonotonicClockAndTimestamp(uint64_t *usecs, uint64_t *mach_absolute_time);
```
