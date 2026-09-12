> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/kiotimerclockrealtime](https://developer.apple.com/documentation/driverkit/kiotimerclockrealtime)

# kIOTimerClockRealTime

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit · iOS · iPadOS · macOS

The system’s real time, expressed as the amount of time since the Epoch.

## Declaration

```objectivec
kIOTimerClockRealTime
```

<a id="Discussion"></a>

## Discussion

This constant is the type of clock obtained by passing `CLOCK_REALTIME` to `clock_gettime_nsec_np(_:)`. It’s equivalent to a value from `gettimeofday(_:_:)`, but in nanoseconds.

## See Also

### Timer Options

- [kIOTimerClockUptimeRaw](kiotimerclockuptimeraw.md): A clock type that increments monotonically, but does not increment when the system is asleep.
- [kIOTimerClockMonotonicRaw](kiotimerclockmonotonicraw.md): A clock type that increments monotonically, and is unaffected by frequency or time adjustmets.
- [kIOTimerClockWallTime](kiotimerclockwalltime.md): The system’s wall-clock time, expressed as the amount of time since the Epoch.
- [kIOTimerClockMachAbsoluteTime](kiotimerclockmachabsolutetime.md): A clock type representing the numer of ticks since the last reboot.
- [kIOTimerClockMachContinuousTime](kiotimerclockmachcontinuoustime.md): A clock type representing the number of ticks since the last reboot, including when the computer is asleep.
