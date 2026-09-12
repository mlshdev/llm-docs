> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1575303-iosleepwithleeway](https://developer.apple.com/documentation/kernel/1575303-iosleepwithleeway)

# IOSleepWithLeeway

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.11+

## Declaration

```objectivec
void IOSleepWithLeeway(unsigned int intervalMilliseconds, unsigned int leewayMilliseconds);
```

## See Also

### Sleep

- [IODelay](1575328-iodelay.md): Spin delay for a number of microseconds.
- [IOPause](1575333-iopause.md): Spin delay for a number of nanoseconds.
- [IOSleep](1575320-iosleep.md): Sleep the calling thread for a number of milliseconds.
