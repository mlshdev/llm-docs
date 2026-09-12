> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvgethostclockfrequency()](https://developer.apple.com/documentation/corevideo/cvgethostclockfrequency())

# CVGetHostClockFrequency() (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+

Returns the frequency of updates to the system time.

## Declaration

```swift
func CVGetHostClockFrequency() -> Double
```

<a id="return-value"></a>

## Return Value

The current host frequency.

<a id="Discussion"></a>

## Discussion

In macOS, the host time bases for Core Video and CoreAudio are identical—both are based on the `mach_absolute_time` function—so the values returned from either API can be used interchangeably.

## See Also

### Inspecting the Host Clock

- [CVGetCurrentHostTime()](cvgetcurrenthosttime%28%29.md): Returns the current system time.
- [CVGetHostClockMinimumTimeDelta()](cvgethostclockminimumtimedelta%28%29.md): Returns the smallest possible increment in the system time.

# CVGetHostClockFrequency (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the frequency of updates to the system time.

## Declaration

```objectivec
extern double CVGetHostClockFrequency();
```

<a id="return-value"></a>

## Return Value

The current host frequency.

<a id="Discussion"></a>

## Discussion

In macOS, the host time bases for Core Video and CoreAudio are identical—both are based on the `mach_absolute_time` function—so the values returned from either API can be used interchangeably.

## See Also

### Inspecting the Host Clock

- [CVGetCurrentHostTime](cvgetcurrenthosttime%28%29.md): Returns the current system time.
- [CVGetHostClockMinimumTimeDelta](cvgethostclockminimumtimedelta%28%29.md): Returns the smallest possible increment in the system time.
