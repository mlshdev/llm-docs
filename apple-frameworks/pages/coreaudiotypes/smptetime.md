> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/smptetime](https://developer.apple.com/documentation/coreaudiotypes/smptetime)

# SMPTETime (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A structure that defines an SMPTE time value.

## Declaration

```swift
struct SMPTETime
```

<a id="overview"></a>

## Overview

SMPTE (Society of Motion Picture and Television Engineers, pronounced “SIMPtee”) times are used to correlate a point in an audio stream with an external event. For example, a SMPTE time can be used to correlate a sound in an audio file with a video frame in a movie file.

Note that the frames referred to by this structure are video frames, where a video frame is a single complete image. (Compare with the definition of audio frames in the discussion for [AudioStreamBasicDescription](audiostreambasicdescription.md).)

A complete SMPTE time description takes 80 bits, including 32 user bits that contain vendor-specific information. The actual time-code portion of the SMPTE time description is normally sent in several messages, each message containing a portion of the time code. (The user bits are sent in a separate message.) Typically, the SMPTE time description is divided up into 8 1-byte messages, with the first nibble of each message specifying which portion of the time code is contained in the message and the second nibble containing the time information. Four such messages are normally sent with each video frame.

Video data contains somewhere from 24 to 60 frames per second (as specified by the SMPTE time type—see `SMPTE Timecode Types`) and each video frame has an associated SMPTE time. SMPTE time is based on a 24-hour clock. Each frame’s SMPTE time consists of an hour, minute, and second value, plus the number of the frame within the second. Because audio data is sampled at a much higher rate (MP3 data is sampled at over 100,000 bits per second, for example), it is frequently desirable to correlate the audio data with a time within the persistence period of a single video frame. For this reason, the time period during which a single video frame is displayed is subdivided into subframes (typically 80 or 100 subframes per frame, as specified by the `mSubFrameDivisor` field). The `mSubFrames` field specifies the number of subframes into the video frame represented by this time structure.

## Topics

### Initializers

- [init()](smptetime/init%28%29.md)
- [init(mSubframes:mSubframeDivisor:mCounter:mType:mFlags:mHours:mMinutes:mSeconds:mFrames:)](smptetime/init%28msubframes_msubframedivisor_mcounter_mtype_mflags_mhours_mminutes_mseconds_mframes_%29.md)

### Instance Properties

- [mCounter](smptetime/mcounter.md): The total number of messages received. It takes 8 messages to carry a full SMPTE time code.
- [mFlags](smptetime/mflags.md): A set of flags that indicate the SMPTE state (see `SMPTE Time Flags`).
- [mFrames](smptetime/mframes.md): The value of the frames portion of the SMPTE time.
- [mHours](smptetime/mhours.md): The value of the hours portion of the SMPTE time.
- [mMinutes](smptetime/mminutes.md): The value of the minutes portion of the SMPTE time.
- [mSeconds](smptetime/mseconds.md): The value of the seconds portion of the SMPTE time.
- [mSubframeDivisor](smptetime/msubframedivisor.md): The number of subframes per video frame (typically 80).
- [mSubframes](smptetime/msubframes.md): A subframe offset to the HH:MM:SS:FF time. You can use this field to position a time marker somewhere within the time span represented by a video frame, if necessary.
- [mType](smptetime/mtype.md): A SMPTE time type constant indicating the kind of SMPTE time used (see `SMPTE Timecode Types`).

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### SMPTE Time

- [SMPTETimeFlags](smptetimeflags.md): A structure that defines SMPTE time flags.
- [SMPTETimeType](smptetimetype.md): Constants that define SMPTE time types.

# SMPTETime (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that defines an SMPTE time value.

## Declaration

```objectivec
struct SMPTETime;
```

<a id="overview"></a>

## Overview

SMPTE (Society of Motion Picture and Television Engineers, pronounced “SIMPtee”) times are used to correlate a point in an audio stream with an external event. For example, a SMPTE time can be used to correlate a sound in an audio file with a video frame in a movie file.

Note that the frames referred to by this structure are video frames, where a video frame is a single complete image. (Compare with the definition of audio frames in the discussion for [AudioStreamBasicDescription](audiostreambasicdescription.md).)

A complete SMPTE time description takes 80 bits, including 32 user bits that contain vendor-specific information. The actual time-code portion of the SMPTE time description is normally sent in several messages, each message containing a portion of the time code. (The user bits are sent in a separate message.) Typically, the SMPTE time description is divided up into 8 1-byte messages, with the first nibble of each message specifying which portion of the time code is contained in the message and the second nibble containing the time information. Four such messages are normally sent with each video frame.

Video data contains somewhere from 24 to 60 frames per second (as specified by the SMPTE time type—see `SMPTE Timecode Types`) and each video frame has an associated SMPTE time. SMPTE time is based on a 24-hour clock. Each frame’s SMPTE time consists of an hour, minute, and second value, plus the number of the frame within the second. Because audio data is sampled at a much higher rate (MP3 data is sampled at over 100,000 bits per second, for example), it is frequently desirable to correlate the audio data with a time within the persistence period of a single video frame. For this reason, the time period during which a single video frame is displayed is subdivided into subframes (typically 80 or 100 subframes per frame, as specified by the `mSubFrameDivisor` field). The `mSubFrames` field specifies the number of subframes into the video frame represented by this time structure.

## Topics

### Instance Properties

- [mCounter](smptetime/mcounter.md): The total number of messages received. It takes 8 messages to carry a full SMPTE time code.
- [mFlags](smptetime/mflags.md): A set of flags that indicate the SMPTE state (see `SMPTE Time Flags`).
- [mFrames](smptetime/mframes.md): The value of the frames portion of the SMPTE time.
- [mHours](smptetime/mhours.md): The value of the hours portion of the SMPTE time.
- [mMinutes](smptetime/mminutes.md): The value of the minutes portion of the SMPTE time.
- [mSeconds](smptetime/mseconds.md): The value of the seconds portion of the SMPTE time.
- [mSubframeDivisor](smptetime/msubframedivisor.md): The number of subframes per video frame (typically 80).
- [mSubframes](smptetime/msubframes.md): A subframe offset to the HH:MM:SS:FF time. You can use this field to position a time marker somewhere within the time span represented by a video frame, if necessary.
- [mType](smptetime/mtype.md): A SMPTE time type constant indicating the kind of SMPTE time used (see `SMPTE Timecode Types`).

## See Also

### SMPTE Time

- [SMPTETimeFlags](smptetimeflags.md): A structure that defines SMPTE time flags.
- [SMPTETimeType](smptetimetype.md): Constants that define SMPTE time types.
