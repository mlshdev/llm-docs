> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclocksetcurrenttime(_:_:)](https://developer.apple.com/documentation/audiotoolbox/caclocksetcurrenttime(_:_:))

# CAClockSetCurrentTime(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockSetCurrentTime(_ inCAClock: CAClockRef, _ inTime: UnsafePointer<CAClockTime>) -> OSStatus
```

## See Also

### Accessing the Current Time

- [CAClockGetCurrentTime(\_:\_:\_:)](caclockgetcurrenttime%28______%29.md)
- [CAClockGetStartTime(\_:\_:\_:)](caclockgetstarttime%28______%29.md)
- [CAClockTime](caclocktime.md)
- [CAClockTimeFormat](caclocktimeformat.md)
- [CAClockSamples](caclocksamples.md)

# CAClockSetCurrentTime (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockSetCurrentTime(CAClockRef inCAClock, const CAClockTime *inTime);
```

## See Also

### Accessing the Current Time

- [CAClockGetCurrentTime](caclockgetcurrenttime%28______%29.md)
- [CAClockGetStartTime](caclockgetstarttime%28______%29.md)
- [CAClockTime](caclocktime.md)
- [CAClockTimeFormat](caclocktimeformat.md)
- [CAClockSamples](caclocksamples.md)
