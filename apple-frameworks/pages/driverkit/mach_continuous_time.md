> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/mach_continuous_time](https://developer.apple.com/documentation/driverkit/mach_continuous_time)

# mach_continuous_time

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns current value of a clock that increments monotonically in tick units (starting at an arbitrary point), including while the system is asleep.

## Declaration

```objectivec
uint64_t mach_continuous_time();
```

<a id="return-value"></a>

## Return Value

Value of mach continous time clock.

<a id="Discussion"></a>

## Discussion

Prefer to use the equivalent `clock_gettime_nsec_np(CLOCK_MONOTONIC_RAW)` in nanoseconds.

## See Also

### Mach Timebase

- [mach_absolute_time](mach_absolute_time.md): Returns current value of a clock that increments monotonically in tick units (starting at an arbitrary point), this clock does not increment while the system is asleep.
- [mach_timebase_info](mach_timebase_info-c.func.md): Returns fraction to multiply a value in mach tick units with to convert it to nanoseconds.
- [mach_timebase_info_t](mach_timebase_info_t.md)
- [Time Scales](3223112-time_scales.md)
