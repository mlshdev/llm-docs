> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclockgetcurrenttempo(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/caclockgetcurrenttempo(_:_:_:))

# CAClockGetCurrentTempo(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockGetCurrentTempo(_ inCAClock: CAClockRef, _ outTempo: UnsafeMutablePointer<CAClockTempo>, _ outTimestamp: UnsafeMutablePointer<CAClockTime>?) -> OSStatus
```

## See Also

### Accessing Tempo Information

- [CAClockSetCurrentTempo(\_:\_:\_:)](caclocksetcurrenttempo%28______%29.md)
- [CAClockGetPlayRate(\_:\_:)](caclockgetplayrate%28____%29.md)
- [CAClockSetPlayRate(\_:\_:)](caclocksetplayrate%28____%29.md)
- [CAClockTempo](caclocktempo.md)
- [CATempoMapEntry](catempomapentry.md)

# CAClockGetCurrentTempo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockGetCurrentTempo(CAClockRef inCAClock, CAClockTempo *outTempo, CAClockTime *outTimestamp);
```

## See Also

### Accessing Tempo Information

- [CAClockSetCurrentTempo](caclocksetcurrenttempo%28______%29.md)
- [CAClockGetPlayRate](caclockgetplayrate%28____%29.md)
- [CAClockSetPlayRate](caclocksetplayrate%28____%29.md)
- [CAClockTempo](caclocktempo.md)
- [CATempoMapEntry](catempomapentry.md)
