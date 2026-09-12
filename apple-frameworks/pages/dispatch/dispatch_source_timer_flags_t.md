> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_source_timer_flags_t](https://developer.apple.com/documentation/dispatch/dispatch_source_timer_flags_t)

# dispatch_source_timer_flags_t

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Flags to use when configuring a timer dispatch source.

## Declaration

```objectivec
typedef unsigned long dispatch_source_timer_flags_t;
```

## Topics

### Timer Flags

- [DISPATCH_TIMER_STRICT](dispatch_timer_strict.md): The system makes its best effort to observe the timer’s specified leeway value, even if the value is smaller than the default leeway.

## See Also

### Managing Timer Parameters

- [dispatch_source_set_timer](dispatch_source_set_timer.md): Sets a start time, interval, and leeway value for a timer source.
