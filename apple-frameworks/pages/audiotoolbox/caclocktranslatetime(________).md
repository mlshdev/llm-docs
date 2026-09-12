> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclocktranslatetime(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/caclocktranslatetime(_:_:_:_:))

# CAClockTranslateTime(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockTranslateTime(_ inCAClock: CAClockRef, _ inTime: UnsafePointer<CAClockTime>, _ inOutputTimeFormat: CAClockTimeFormat, _ outTime: UnsafeMutablePointer<CAClockTime>) -> OSStatus
```

## See Also

### Converting Time Values

- [CAClockBarBeatTimeToBeats(\_:\_:\_:)](caclockbarbeattimetobeats%28______%29.md)
- [CAClockBeatsToBarBeatTime(\_:\_:\_:\_:)](caclockbeatstobarbeattime%28________%29.md)
- [CAClockSMPTETimeToSeconds(\_:\_:\_:)](caclocksmptetimetoseconds%28______%29.md)
- [CAClockSecondsToSMPTETime(\_:\_:\_:\_:)](caclocksecondstosmptetime%28________%29.md)
- [CAClockTimebase](caclocktimebase.md)
- [CAClockSeconds](caclockseconds.md)
- [CAClockBeats](caclockbeats.md)
- [CAClockSMPTEFormat](caclocksmpteformat.md)
- [CABarBeatTime](cabarbeattime.md)
- [CAMeterTrackEntry](cametertrackentry.md)

# CAClockTranslateTime (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockTranslateTime(CAClockRef inCAClock, const CAClockTime *inTime, CAClockTimeFormat inOutputTimeFormat, CAClockTime *outTime);
```

## See Also

### Converting Time Values

- [CAClockBarBeatTimeToBeats](caclockbarbeattimetobeats%28______%29.md)
- [CAClockBeatsToBarBeatTime](caclockbeatstobarbeattime%28________%29.md)
- [CAClockSMPTETimeToSeconds](caclocksmptetimetoseconds%28______%29.md)
- [CAClockSecondsToSMPTETime](caclocksecondstosmptetime%28________%29.md)
- [CAClockTimebase](caclocktimebase.md)
- [CAClockSeconds](caclockseconds.md)
- [CAClockBeats](caclockbeats.md)
- [CAClockSMPTEFormat](caclocksmpteformat.md)
- [CABarBeatTime](cabarbeattime.md)
- [CAMeterTrackEntry](cametertrackentry.md)
