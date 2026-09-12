> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclockgetplayrate(_:_:)](https://developer.apple.com/documentation/audiotoolbox/caclockgetplayrate(_:_:))

# CAClockGetPlayRate(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockGetPlayRate(_ inCAClock: CAClockRef, _ outPlayRate: UnsafeMutablePointer<Float64>) -> OSStatus
```

## See Also

### Accessing Tempo Information

- [CAClockGetCurrentTempo(\_:\_:\_:)](caclockgetcurrenttempo%28______%29.md)
- [CAClockSetCurrentTempo(\_:\_:\_:)](caclocksetcurrenttempo%28______%29.md)
- [CAClockSetPlayRate(\_:\_:)](caclocksetplayrate%28____%29.md)
- [CAClockTempo](caclocktempo.md)
- [CATempoMapEntry](catempomapentry.md)

# CAClockGetPlayRate (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockGetPlayRate(CAClockRef inCAClock, Float64 *outPlayRate);
```

## See Also

### Accessing Tempo Information

- [CAClockGetCurrentTempo](caclockgetcurrenttempo%28______%29.md)
- [CAClockSetCurrentTempo](caclocksetcurrenttempo%28______%29.md)
- [CAClockSetPlayRate](caclocksetplayrate%28____%29.md)
- [CAClockTempo](caclocktempo.md)
- [CATempoMapEntry](catempomapentry.md)
