> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/kiotimerclockmachcontinuoustime

# kIOTimerClockMachContinuousTime

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit · iOS · iPadOS · macOS

A clock type representing the number of ticks since the last reboot, including when the computer is asleep.

## Declaration

```objectivec
kIOTimerClockMachContinuousTime
```

<a id="Discussion"></a>

## Discussion

This constant is a clock type whose value is from `mach_continuous_time()` in tick units.

## See Also

### Timer Options

- [kIOTimerClockUptimeRaw](kiotimerclockuptimeraw.md): A clock type that increments monotonically, but does not increment when the system is asleep.
- [kIOTimerClockMonotonicRaw](kiotimerclockmonotonicraw.md): A clock type that increments monotonically, and is unaffected by frequency or time adjustmets.
- [kIOTimerClockRealTime](kiotimerclockrealtime.md): The system’s real time, expressed as the amount of time since the Epoch.
- [kIOTimerClockWallTime](kiotimerclockwalltime.md): The system’s wall-clock time, expressed as the amount of time since the Epoch.
- [kIOTimerClockMachAbsoluteTime](kiotimerclockmachabsolutetime.md): A clock type representing the numer of ticks since the last reboot.
