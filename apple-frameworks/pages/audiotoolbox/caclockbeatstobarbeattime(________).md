> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclockbeatstobarbeattime(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/caclockbeatstobarbeattime(_:_:_:_:))

# CAClockBeatsToBarBeatTime(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func CAClockBeatsToBarBeatTime(_ inCAClock: CAClockRef, _ inBeats: CAClockBeats, _ inSubbeatDivisor: UInt16, _ outBarBeatTime: UnsafeMutablePointer<CABarBeatTime>) -> OSStatus
```

## See Also

### Converting Time Values

- [CAClockBarBeatTimeToBeats(\_:\_:\_:)](caclockbarbeattimetobeats%28______%29.md)
- [CAClockSMPTETimeToSeconds(\_:\_:\_:)](caclocksmptetimetoseconds%28______%29.md)
- [CAClockSecondsToSMPTETime(\_:\_:\_:\_:)](caclocksecondstosmptetime%28________%29.md)
- [CAClockTranslateTime(\_:\_:\_:\_:)](caclocktranslatetime%28________%29.md)
- [CAClockTimebase](caclocktimebase.md)
- [CAClockSeconds](caclockseconds.md)
- [CAClockBeats](caclockbeats.md)
- [CAClockSMPTEFormat](caclocksmpteformat.md)
- [CABarBeatTime](cabarbeattime.md)
- [CAMeterTrackEntry](cametertrackentry.md)

# CAClockBeatsToBarBeatTime (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus CAClockBeatsToBarBeatTime(CAClockRef inCAClock, CAClockBeats inBeats, UInt16 inSubbeatDivisor, CABarBeatTime *outBarBeatTime);
```

## See Also

### Converting Time Values

- [CAClockBarBeatTimeToBeats](caclockbarbeattimetobeats%28______%29.md)
- [CAClockSMPTETimeToSeconds](caclocksmptetimetoseconds%28______%29.md)
- [CAClockSecondsToSMPTETime](caclocksecondstosmptetime%28________%29.md)
- [CAClockTranslateTime](caclocktranslatetime%28________%29.md)
- [CAClockTimebase](caclocktimebase.md)
- [CAClockSeconds](caclockseconds.md)
- [CAClockBeats](caclockbeats.md)
- [CAClockSMPTEFormat](caclocksmpteformat.md)
- [CABarBeatTime](cabarbeattime.md)
- [CAMeterTrackEntry](cametertrackentry.md)
