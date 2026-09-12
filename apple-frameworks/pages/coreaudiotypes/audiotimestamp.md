> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiotimestamp](https://developer.apple.com/documentation/coreaudiotypes/audiotimestamp)

# AudioTimeStamp (Swift)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A structure that represents a timestamp value.

## Declaration

```swift
struct AudioTimeStamp
```

## Topics

### Accessing the Data

- [mFlags](audiotimestamp/mflags.md): A set of flags indicating which representations of the time are valid; see `Audio Time Stamp Flags` and `Audio Time Stamp Flag Combination Constant`.
- [mHostTime](audiotimestamp/mhosttime.md): The host machine’s time base (see `CoreAudio/HostTime.h`).
- [mRateScalar](audiotimestamp/mratescalar.md): The ratio of actual host ticks per sample frame to the nominal host ticks per sample frame.
- [mReserved](audiotimestamp/mreserved.md): Pads the structure out to force an even 8-byte alignment.
- [mSMPTETime](audiotimestamp/msmptetime.md): The SMPTE time (see [SMPTETime](smptetime.md)).
- [mSampleTime](audiotimestamp/msampletime.md): The absolute sample frame time.
- [mWordClockTime](audiotimestamp/mwordclocktime.md): The word clock time.

### Initializers

- [init()](audiotimestamp/init%28%29.md): Creates an empty audio timestamp.
- [init(mSampleTime:mHostTime:mRateScalar:mWordClockTime:mSMPTETime:mFlags:mReserved:)](audiotimestamp/init%28msampletime_mhosttime_mratescalar_mwordclocktime_msmptetime_mflags_mreserved_%29.md): Creates an audio time stamp.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Audio Time

- [AudioTimeStampFlags](audiotimestampflags.md): A structure that represents flags for a timestamp.

# AudioTimeStamp (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that represents a timestamp value.

## Declaration

```objectivec
struct AudioTimeStamp;
```

## Topics

### Accessing the Data

- [mFlags](audiotimestamp/mflags.md): A set of flags indicating which representations of the time are valid; see `Audio Time Stamp Flags` and `Audio Time Stamp Flag Combination Constant`.
- [mHostTime](audiotimestamp/mhosttime.md): The host machine’s time base (see `CoreAudio/HostTime.h`).
- [mRateScalar](audiotimestamp/mratescalar.md): The ratio of actual host ticks per sample frame to the nominal host ticks per sample frame.
- [mReserved](audiotimestamp/mreserved.md): Pads the structure out to force an even 8-byte alignment.
- [mSMPTETime](audiotimestamp/msmptetime.md): The SMPTE time (see [SMPTETime](smptetime.md)).
- [mSampleTime](audiotimestamp/msampletime.md): The absolute sample frame time.
- [mWordClockTime](audiotimestamp/mwordclocktime.md): The word clock time.

## See Also

### Audio Time

- [AudioTimeStampFlags](audiotimestampflags.md): A structure that represents flags for a timestamp.
