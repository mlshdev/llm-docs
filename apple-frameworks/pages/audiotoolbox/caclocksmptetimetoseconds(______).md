> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclocksmptetimetoseconds(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/caclocksmptetimetoseconds(_:_:_:))

# CAClockSMPTETimeToSeconds(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockSMPTETimeToSeconds(_ inCAClock: CAClockRef, _ inSMPTETime: UnsafePointer<SMPTETime>, _ outSeconds: UnsafeMutablePointer<CAClockSeconds>) -> OSStatus
```

## See Also

### Converting Time Values

- [CAClockBarBeatTimeToBeats(\_:\_:\_:)](caclockbarbeattimetobeats%28______%29.md)
- [CAClockBeatsToBarBeatTime(\_:\_:\_:\_:)](caclockbeatstobarbeattime%28________%29.md)
- [CAClockSecondsToSMPTETime(\_:\_:\_:\_:)](caclocksecondstosmptetime%28________%29.md)
- [CAClockTranslateTime(\_:\_:\_:\_:)](caclocktranslatetime%28________%29.md)
- [CAClockTimebase](caclocktimebase.md)
- [CAClockSeconds](caclockseconds.md)
- [CAClockBeats](caclockbeats.md)
- [CAClockSMPTEFormat](caclocksmpteformat.md)
- [CABarBeatTime](cabarbeattime.md)
- [CAMeterTrackEntry](cametertrackentry.md)

# CAClockSMPTETimeToSeconds (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockSMPTETimeToSeconds(CAClockRef inCAClock, const SMPTETime *inSMPTETime, CAClockSeconds *outSeconds);
```

## See Also

### Converting Time Values

- [CAClockBarBeatTimeToBeats](caclockbarbeattimetobeats%28______%29.md)
- [CAClockBeatsToBarBeatTime](caclockbeatstobarbeattime%28________%29.md)
- [CAClockSecondsToSMPTETime](caclocksecondstosmptetime%28________%29.md)
- [CAClockTranslateTime](caclocktranslatetime%28________%29.md)
- [CAClockTimebase](caclocktimebase.md)
- [CAClockSeconds](caclockseconds.md)
- [CAClockBeats](caclockbeats.md)
- [CAClockSMPTEFormat](caclocksmpteformat.md)
- [CABarBeatTime](cabarbeattime.md)
- [CAMeterTrackEntry](cametertrackentry.md)
