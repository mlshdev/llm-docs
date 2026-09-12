> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclocksecondstosmptetime(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/caclocksecondstosmptetime(_:_:_:_:))

# CAClockSecondsToSMPTETime(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockSecondsToSMPTETime(_ inCAClock: CAClockRef, _ inSeconds: CAClockSeconds, _ inSubframeDivisor: UInt16, _ outSMPTETime: UnsafeMutablePointer<SMPTETime>) -> OSStatus
```

## See Also

### Converting Time Values

- [CAClockBarBeatTimeToBeats(\_:\_:\_:)](caclockbarbeattimetobeats%28______%29.md)
- [CAClockBeatsToBarBeatTime(\_:\_:\_:\_:)](caclockbeatstobarbeattime%28________%29.md)
- [CAClockSMPTETimeToSeconds(\_:\_:\_:)](caclocksmptetimetoseconds%28______%29.md)
- [CAClockTranslateTime(\_:\_:\_:\_:)](caclocktranslatetime%28________%29.md)
- [CAClockTimebase](caclocktimebase.md)
- [CAClockSeconds](caclockseconds.md)
- [CAClockBeats](caclockbeats.md)
- [CAClockSMPTEFormat](caclocksmpteformat.md)
- [CABarBeatTime](cabarbeattime.md)
- [CAMeterTrackEntry](cametertrackentry.md)

# CAClockSecondsToSMPTETime (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockSecondsToSMPTETime(CAClockRef inCAClock, CAClockSeconds inSeconds, UInt16 inSubframeDivisor, SMPTETime *outSMPTETime);
```

## See Also

### Converting Time Values

- [CAClockBarBeatTimeToBeats](caclockbarbeattimetobeats%28______%29.md)
- [CAClockBeatsToBarBeatTime](caclockbeatstobarbeattime%28________%29.md)
- [CAClockSMPTETimeToSeconds](caclocksmptetimetoseconds%28______%29.md)
- [CAClockTranslateTime](caclocktranslatetime%28________%29.md)
- [CAClockTimebase](caclocktimebase.md)
- [CAClockSeconds](caclockseconds.md)
- [CAClockBeats](caclockbeats.md)
- [CAClockSMPTEFormat](caclocksmpteformat.md)
- [CABarBeatTime](cabarbeattime.md)
- [CAMeterTrackEntry](cametertrackentry.md)
