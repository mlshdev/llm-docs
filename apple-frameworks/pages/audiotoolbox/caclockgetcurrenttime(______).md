> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/caclockgetcurrenttime(_:_:_:)

# CAClockGetCurrentTime(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockGetCurrentTime(_ inCAClock: CAClockRef, _ inTimeFormat: CAClockTimeFormat, _ outTime: UnsafeMutablePointer<CAClockTime>) -> OSStatus
```

## See Also

### Accessing the Current Time

- [CAClockSetCurrentTime(\_:\_:)](caclocksetcurrenttime%28____%29.md)
- [CAClockGetStartTime(\_:\_:\_:)](caclockgetstarttime%28______%29.md)
- [CAClockTime](caclocktime.md)
- [CAClockTimeFormat](caclocktimeformat.md)
- [CAClockSamples](caclocksamples.md)

# CAClockGetCurrentTime (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockGetCurrentTime(CAClockRef inCAClock, CAClockTimeFormat inTimeFormat, CAClockTime *outTime);
```

## See Also

### Accessing the Current Time

- [CAClockSetCurrentTime](caclocksetcurrenttime%28____%29.md)
- [CAClockGetStartTime](caclockgetstarttime%28______%29.md)
- [CAClockTime](caclocktime.md)
- [CAClockTimeFormat](caclocktimeformat.md)
- [CAClockSamples](caclocksamples.md)
