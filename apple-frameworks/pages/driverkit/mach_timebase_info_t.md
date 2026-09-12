> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/mach_timebase_info_t](https://developer.apple.com/documentation/driverkit/mach_timebase_info_t)

# mach_timebase_info_t

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
typedef struct mach_timebase_info * mach_timebase_info_t;
```

## See Also

### Mach Timebase

- [mach_absolute_time](mach_absolute_time.md): Returns current value of a clock that increments monotonically in tick units (starting at an arbitrary point), this clock does not increment while the system is asleep.
- [mach_continuous_time](mach_continuous_time.md): Returns current value of a clock that increments monotonically in tick units (starting at an arbitrary point), including while the system is asleep.
- [mach_timebase_info](mach_timebase_info-c.func.md): Returns fraction to multiply a value in mach tick units with to convert it to nanoseconds.
- [Time Scales](3223112-time_scales.md)
