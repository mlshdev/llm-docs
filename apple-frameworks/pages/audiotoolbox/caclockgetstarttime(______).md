> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclockgetstarttime(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/caclockgetstarttime(_:_:_:))

# CAClockGetStartTime(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockGetStartTime(_ inCAClock: CAClockRef, _ inTimeFormat: CAClockTimeFormat, _ outTime: UnsafeMutablePointer<CAClockTime>) -> OSStatus
```

## See Also

### Accessing the Current Time

- [CAClockGetCurrentTime(\_:\_:\_:)](caclockgetcurrenttime%28______%29.md)
- [CAClockSetCurrentTime(\_:\_:)](caclocksetcurrenttime%28____%29.md)
- [CAClockTime](caclocktime.md)
- [CAClockTimeFormat](caclocktimeformat.md)
- [CAClockSamples](caclocksamples.md)

# CAClockGetStartTime (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockGetStartTime(CAClockRef inCAClock, CAClockTimeFormat inTimeFormat, CAClockTime *outTime);
```

## See Also

### Accessing the Current Time

- [CAClockGetCurrentTime](caclockgetcurrenttime%28______%29.md)
- [CAClockSetCurrentTime](caclocksetcurrenttime%28____%29.md)
- [CAClockTime](caclocktime.md)
- [CAClockTimeFormat](caclocktimeformat.md)
- [CAClockSamples](caclocksamples.md)
