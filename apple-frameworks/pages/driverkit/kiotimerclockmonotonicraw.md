> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/kiotimerclockmonotonicraw

# kIOTimerClockMonotonicRaw

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit · iOS · iPadOS · macOS

A clock type that increments monotonically, and is unaffected by frequency or time adjustmets.

## Declaration

```objectivec
kIOTimerClockMonotonicRaw
```

<a id="Discussion"></a>

## Discussion

This constant is the type of clock obtained by passing `CLOCK_UPTIME_RAW` to `clock_gettime_nsec_np(_:)`. It’s equivalent to a value from `mach_absolute_time()`, but in nanoseconds.

## See Also

### Timer Options

- [kIOTimerClockUptimeRaw](kiotimerclockuptimeraw.md): A clock type that increments monotonically, but does not increment when the system is asleep.
- [kIOTimerClockRealTime](kiotimerclockrealtime.md): The system’s real time, expressed as the amount of time since the Epoch.
- [kIOTimerClockWallTime](kiotimerclockwalltime.md): The system’s wall-clock time, expressed as the amount of time since the Epoch.
- [kIOTimerClockMachAbsoluteTime](kiotimerclockmachabsolutetime.md): A clock type representing the numer of ticks since the last reboot.
- [kIOTimerClockMachContinuousTime](kiotimerclockmachcontinuoustime.md): A clock type representing the number of ticks since the last reboot, including when the computer is asleep.
