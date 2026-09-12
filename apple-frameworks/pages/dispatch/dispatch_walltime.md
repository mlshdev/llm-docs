> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_walltime](https://developer.apple.com/documentation/dispatch/dispatch_walltime)

# dispatch_walltime

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a `dispatch_time_t` using an absolute time according to the wall clock.

## Declaration

```objectivec
extern dispatch_time_t dispatch_walltime(const struct timespec *when, int64_t delta);
```

## Parameters

- `when`: A `struct timespec` to add time to. If `NULL` is passed, then this function uses the result of `gettimeofday`.
- `delta`: Nanoseconds to add.

<a id="return-value"></a>

## Return Value

A new [dispatch_time_t](dispatch_time_t.md).

<a id="Discussion"></a>

## Discussion

The wall clock is based on `gettimeofday(_:_:)`.

## See Also

### Time Constructs

- [dispatch_time](dispatch_time.md): Creates a `dispatch_time_t` relative to the default clock or modifies an existing `dispatch_time_t`.
- [dispatch_time_t](dispatch_time_t.md): An abstract representation of time.
- [DISPATCH_WALLTIME_NOW](dispatch_walltime_now.md): The current time.
- [Wall Time Constants](2963138-wall-time-constants.md): Constants for wall time values.
