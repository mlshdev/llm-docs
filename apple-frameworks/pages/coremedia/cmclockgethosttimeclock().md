> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclockgethosttimeclock()](https://developer.apple.com/documentation/coremedia/cmclockgethosttimeclock())

# CMClockGetHostTimeClock() (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a reference to the singleton clock that reflects the host time.

## Declaration

```swift
func CMClockGetHostTimeClock() -> CMClock
```

<a id="Discussion"></a>

## Discussion

In macOS, the host time clock uses `mach_absolute_time` but returns a value with a large integer timescale (e.g. nanoseconds).

# CMClockGetHostTimeClock (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a reference to the singleton clock that reflects the host time.

## Declaration

```objectivec
extern CMClockRefCMClockGetHostTimeClock();
```

<a id="Discussion"></a>

## Discussion

In macOS, the host time clock uses `mach_absolute_time` but returns a value with a large integer timescale (e.g. nanoseconds).
