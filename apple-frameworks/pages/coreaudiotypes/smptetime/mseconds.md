> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/smptetime/mseconds](https://developer.apple.com/documentation/coreaudiotypes/smptetime/mseconds)

# mSeconds (Swift)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The value of the seconds portion of the SMPTE time.

## Declaration

```swift
var mSeconds: Int16
```

## See Also

### Instance Properties

- [mCounter](mcounter.md): The total number of messages received. It takes 8 messages to carry a full SMPTE time code.
- [mFlags](mflags.md): A set of flags that indicate the SMPTE state (see `SMPTE Time Flags`).
- [mFrames](mframes.md): The value of the frames portion of the SMPTE time.
- [mHours](mhours.md): The value of the hours portion of the SMPTE time.
- [mMinutes](mminutes.md): The value of the minutes portion of the SMPTE time.
- [mSubframeDivisor](msubframedivisor.md): The number of subframes per video frame (typically 80).
- [mSubframes](msubframes.md): A subframe offset to the HH:MM:SS:FF time. You can use this field to position a time marker somewhere within the time span represented by a video frame, if necessary.
- [mType](mtype.md): A SMPTE time type constant indicating the kind of SMPTE time used (see `SMPTE Timecode Types`).

# mSeconds (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The value of the seconds portion of the SMPTE time.

## Declaration

```objectivec
SInt16 mSeconds;
```

## See Also

### Instance Properties

- [mCounter](mcounter.md): The total number of messages received. It takes 8 messages to carry a full SMPTE time code.
- [mFlags](mflags.md): A set of flags that indicate the SMPTE state (see `SMPTE Time Flags`).
- [mFrames](mframes.md): The value of the frames portion of the SMPTE time.
- [mHours](mhours.md): The value of the hours portion of the SMPTE time.
- [mMinutes](mminutes.md): The value of the minutes portion of the SMPTE time.
- [mSubframeDivisor](msubframedivisor.md): The number of subframes per video frame (typically 80).
- [mSubframes](msubframes.md): A subframe offset to the HH:MM:SS:FF time. You can use this field to position a time marker somewhere within the time span represented by a video frame, if necessary.
- [mType](mtype.md): A SMPTE time type constant indicating the kind of SMPTE time used (see `SMPTE Timecode Types`).
