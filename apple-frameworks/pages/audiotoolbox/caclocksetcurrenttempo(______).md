> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclocksetcurrenttempo(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/caclocksetcurrenttempo(_:_:_:))

# CAClockSetCurrentTempo(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockSetCurrentTempo(_ inCAClock: CAClockRef, _ inTempo: CAClockTempo, _ inTimestamp: UnsafePointer<CAClockTime>?) -> OSStatus
```

## See Also

### Accessing Tempo Information

- [CAClockGetCurrentTempo(\_:\_:\_:)](caclockgetcurrenttempo%28______%29.md)
- [CAClockGetPlayRate(\_:\_:)](caclockgetplayrate%28____%29.md)
- [CAClockSetPlayRate(\_:\_:)](caclocksetplayrate%28____%29.md)
- [CAClockTempo](caclocktempo.md)
- [CATempoMapEntry](catempomapentry.md)

# CAClockSetCurrentTempo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockSetCurrentTempo(CAClockRef inCAClock, CAClockTempo inTempo, const CAClockTime *inTimestamp);
```

## See Also

### Accessing Tempo Information

- [CAClockGetCurrentTempo](caclockgetcurrenttempo%28______%29.md)
- [CAClockGetPlayRate](caclockgetplayrate%28____%29.md)
- [CAClockSetPlayRate](caclocksetplayrate%28____%29.md)
- [CAClockTempo](caclocktempo.md)
- [CATempoMapEntry](catempomapentry.md)
