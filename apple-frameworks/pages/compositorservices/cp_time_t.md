> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_time_t](https://developer.apple.com/documentation/compositorservices/cp_time_t)

# cp_time_t

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 1.0+

A Mach absolute time clock value.

## Declaration

```objectivec
typedef struct cp_time cp_time_t;
```

<a id="discussion"></a>

## Discussion

Mach absolute time measures the number of ticks that have elapsed since an arbitrary point after system startup. Each value represents a unique point in time during the course of your app’s execution.

## Topics

### Getting the time value

- [cp_mach_abs_time](cp_time/cp_mach_abs_time.md): The Mach absolute time value.

## See Also

### Converting time values

- [cp_time_to_cf_time_interval](cp_time_to_cf_time_interval.md): Converts a Mach absolute time value to a Core Foundation time value.
