> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiotimestamp/mreserved](https://developer.apple.com/documentation/coreaudiotypes/audiotimestamp/mreserved)

# mReserved (Swift)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Pads the structure out to force an even 8-byte alignment.

## Declaration

```swift
var mReserved: UInt32
```

## See Also

### Accessing the Data

- [mFlags](mflags.md): A set of flags indicating which representations of the time are valid; see `Audio Time Stamp Flags` and `Audio Time Stamp Flag Combination Constant`.
- [mHostTime](mhosttime.md): The host machine’s time base (see `CoreAudio/HostTime.h`).
- [mRateScalar](mratescalar.md): The ratio of actual host ticks per sample frame to the nominal host ticks per sample frame.
- [mSMPTETime](msmptetime.md): The SMPTE time (see [SMPTETime](../smptetime.md)).
- [mSampleTime](msampletime.md): The absolute sample frame time.
- [mWordClockTime](mwordclocktime.md): The word clock time.

# mReserved (Objective-C)

**Framework:** Core Audio Types  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Pads the structure out to force an even 8-byte alignment.

## Declaration

```objectivec
UInt32 mReserved;
```

## See Also

### Accessing the Data

- [mFlags](mflags.md): A set of flags indicating which representations of the time are valid; see `Audio Time Stamp Flags` and `Audio Time Stamp Flag Combination Constant`.
- [mHostTime](mhosttime.md): The host machine’s time base (see `CoreAudio/HostTime.h`).
- [mRateScalar](mratescalar.md): The ratio of actual host ticks per sample frame to the nominal host ticks per sample frame.
- [mSMPTETime](msmptetime.md): The SMPTE time (see [SMPTETime](../smptetime.md)).
- [mSampleTime](msampletime.md): The absolute sample frame time.
- [mWordClockTime](mwordclocktime.md): The word clock time.
