> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvsmptetime](https://developer.apple.com/documentation/corevideo/cvsmptetime)

# CVSMPTETime (Swift)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for holding an SMPTE time.

## Declaration

```swift
struct CVSMPTETime
```

## Topics

### Initializers

- [init()](cvsmptetime/init%28%29.md)
- [init(subframes:subframeDivisor:counter:type:flags:hours:minutes:seconds:frames:)](cvsmptetime/init%28subframes_subframedivisor_counter_type_flags_hours_minutes_seconds_frames_%29-4yakl.md)
- [init(subframes:subframeDivisor:counter:type:flags:hours:minutes:seconds:frames:)](cvsmptetime/init%28subframes_subframedivisor_counter_type_flags_hours_minutes_seconds_frames_%29-7s092.md)

### Properties

- [counter](cvsmptetime/counter.md): The total number of messages received.
- [flags](cvsmptetime/flags.md): A set of flags that indicate the SMPTE state.
- [frames](cvsmptetime/frames.md): The number of frames in the full message.
- [hours](cvsmptetime/hours.md): The number of hours in the full message.
- [minutes](cvsmptetime/minutes.md): The number of minutes in the full message.
- [seconds](cvsmptetime/seconds.md): The number of seconds in the full message.
- [subframeDivisor](cvsmptetime/subframedivisor.md): The number of subframes per frame (typically, 80).
- [subframes](cvsmptetime/subframes.md): The number of subframes in the full message.
- [type](cvsmptetime/type.md): The kind of SMPTE time type.

### Instance Properties

- [flagOptions](cvsmptetime/flagoptions.md): `CVSMPTETimeFlags` representation of `CVSMPTETime.flags`
- [typeOptions](cvsmptetime/typeoptions.md): `CVSMPTETimeType` representation of `CVSMPTETime.type`

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CVTime](cvtime.md): A structure for reporting Core Video time values.
- [CVTimeStamp](cvtimestamp-api.md): A structure for representing a display timestamp.

# CVSMPTETime (Objective-C)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for holding an SMPTE time.

## Declaration

```objectivec
struct CVSMPTETime;
```

## Topics

### Properties

- [counter](cvsmptetime/counter.md): The total number of messages received.
- [flags](cvsmptetime/flags.md): A set of flags that indicate the SMPTE state.
- [frames](cvsmptetime/frames.md): The number of frames in the full message.
- [hours](cvsmptetime/hours.md): The number of hours in the full message.
- [minutes](cvsmptetime/minutes.md): The number of minutes in the full message.
- [seconds](cvsmptetime/seconds.md): The number of seconds in the full message.
- [subframeDivisor](cvsmptetime/subframedivisor.md): The number of subframes per frame (typically, 80).
- [subframes](cvsmptetime/subframes.md): The number of subframes in the full message.
- [type](cvsmptetime/type.md): The kind of SMPTE time type.

## See Also

### Data Types

- [CVTime](cvtime.md): A structure for reporting Core Video time values.
- [CVTimeStamp](cvtimestamp-api.md): A structure for representing a display timestamp.
