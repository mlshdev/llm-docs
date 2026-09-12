> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvgethostclockminimumtimedelta()](https://developer.apple.com/documentation/corevideo/cvgethostclockminimumtimedelta())

# CVGetHostClockMinimumTimeDelta() (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+

Returns the smallest possible increment in the system time.

## Declaration

```swift
func CVGetHostClockMinimumTimeDelta() -> UInt32
```

<a id="return-value"></a>

## Return Value

The smallest valid increment in the system time.

## See Also

### Inspecting the Host Clock

- [CVGetCurrentHostTime()](cvgetcurrenthosttime%28%29.md): Returns the current system time.
- [CVGetHostClockFrequency()](cvgethostclockfrequency%28%29.md): Returns the frequency of updates to the system time.

# CVGetHostClockMinimumTimeDelta (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the smallest possible increment in the system time.

## Declaration

```objectivec
extern uint32_t CVGetHostClockMinimumTimeDelta();
```

<a id="return-value"></a>

## Return Value

The smallest valid increment in the system time.

## See Also

### Inspecting the Host Clock

- [CVGetCurrentHostTime](cvgetcurrenthosttime%28%29.md): Returns the current system time.
- [CVGetHostClockFrequency](cvgethostclockfrequency%28%29.md): Returns the frequency of updates to the system time.
