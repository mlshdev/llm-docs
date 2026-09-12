> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_time_to_cf_time_interval](https://developer.apple.com/documentation/compositorservices/cp_time_to_cf_time_interval)

# cp_time_to_cf_time_interval

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Converts a Mach absolute time value to a Core Foundation time value.

## Declaration

```objectivec
CFTimeInterval cp_time_to_cf_time_interval(cp_time_t time);
```

## Parameters

- `time`: The time value to convert.

<a id="return-value"></a>

## Return Value

The elapsed time in seconds that correspond to the specified time value.

## See Also

### Converting time values

- [cp_time_t](cp_time_t.md): A Mach absolute time clock value.
