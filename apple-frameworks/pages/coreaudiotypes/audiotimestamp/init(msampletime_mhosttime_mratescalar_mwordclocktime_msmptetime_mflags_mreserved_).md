> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiotimestamp/init(msampletime:mhosttime:mratescalar:mwordclocktime:msmptetime:mflags:mreserved:)](https://developer.apple.com/documentation/coreaudiotypes/audiotimestamp/init(msampletime:mhosttime:mratescalar:mwordclocktime:msmptetime:mflags:mreserved:))

# init(mSampleTime:mHostTime:mRateScalar:mWordClockTime:mSMPTETime:mFlags:mReserved:)

**Framework:** Core Audio Types  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an audio time stamp.

## Declaration

```swift
init(mSampleTime: Float64, mHostTime: UInt64, mRateScalar: Float64, mWordClockTime: UInt64, mSMPTETime: SMPTETime, mFlags: AudioTimeStampFlags, mReserved: UInt32)
```

## See Also

### Initializers

- [init()](init%28%29.md): Creates an empty audio timestamp.
