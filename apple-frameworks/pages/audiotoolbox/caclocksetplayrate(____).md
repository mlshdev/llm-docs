> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/caclocksetplayrate(_:_:)

# CAClockSetPlayRate(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockSetPlayRate(_ inCAClock: CAClockRef, _ inPlayRate: Float64) -> OSStatus
```

## See Also

### Accessing Tempo Information

- [CAClockGetCurrentTempo(\_:\_:\_:)](caclockgetcurrenttempo%28______%29.md)
- [CAClockSetCurrentTempo(\_:\_:\_:)](caclocksetcurrenttempo%28______%29.md)
- [CAClockGetPlayRate(\_:\_:)](caclockgetplayrate%28____%29.md)
- [CAClockTempo](caclocktempo.md)
- [CATempoMapEntry](catempomapentry.md)

# CAClockSetPlayRate (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockSetPlayRate(CAClockRef inCAClock, Float64 inPlayRate);
```

## See Also

### Accessing Tempo Information

- [CAClockGetCurrentTempo](caclockgetcurrenttempo%28______%29.md)
- [CAClockSetCurrentTempo](caclocksetcurrenttempo%28______%29.md)
- [CAClockGetPlayRate](caclockgetplayrate%28____%29.md)
- [CAClockTempo](caclocktempo.md)
- [CATempoMapEntry](catempomapentry.md)
