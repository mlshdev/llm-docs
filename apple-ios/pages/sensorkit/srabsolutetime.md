> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srabsolutetime](https://developer.apple.com/documentation/sensorkit/srabsolutetime)

# SRAbsoluteTime (Swift)

**Framework:** SensorKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A value that describes when the system records the data.

## Declaration

```swift
struct SRAbsoluteTime
```

<a id="Discussion"></a>

## Discussion

This value tracks monotonically increasing device-specific time, unlike [mach_continuous_time](https://developer.apple.com/documentation/kernel/1646199-mach_continuous_time), which keeps tracking across reboots.

Although a fetch can query a [device](srfetchrequest/device.md) other than a phone (such as a paired watch), the framework consistently describes time according to the phone. Any fetch results from a paired watch are in the phone’s version of [SRAbsoluteTime](srabsolutetime.md).

## Topics

### Creating an Absolute Time

- [init(\_:)](srabsolutetime/init%28__%29.md): Creates an absolute time from a raw value.
- [init(rawValue:)](srabsolutetime/init%28rawvalue_%29.md): Creates an absolute time from a raw value.

### Accessing the Current Absolute Time

- [current()](srabsolutetime/current%28%29.md): Provides the current absolute time.

### Converting Absolute Times

- [toCFAbsoluteTime()](srabsolutetime/tocfabsolutetime%28%29.md): Converts an absolute time to a core-foundation absolute time.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining the Time Range

- [from](srfetchrequest/from.md): Fetches sample information that occurs after this time.
- [to](srfetchrequest/to.md): Fetches sample information that occurs before this time.
- [current()](srabsolutetime/current%28%29.md): Provides the current absolute time.
- [toCFAbsoluteTime()](srabsolutetime/tocfabsolutetime%28%29.md): Converts an absolute time to a core-foundation absolute time.

# SRAbsoluteTime (Objective-C)

**Framework:** SensorKit  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A value that describes when the system records the data.

## Declaration

```objectivec
typedef CFTimeInterval SRAbsoluteTime;
```

<a id="Discussion"></a>

## Discussion

This value tracks monotonically increasing device-specific time, unlike [mach_continuous_time](https://developer.apple.com/documentation/kernel/1646199-mach_continuous_time), which keeps tracking across reboots.

Although a fetch can query a [device](srfetchrequest/device.md) other than a phone (such as a paired watch), the framework consistently describes time according to the phone. Any fetch results from a paired watch are in the phone’s version of [SRAbsoluteTime](srabsolutetime.md).

## Topics

### Accessing the Current Absolute Time

- [SRAbsoluteTimeGetCurrent](srabsolutetime/current%28%29.md): Provides the current absolute time.

### Converting Absolute Times

- [SRAbsoluteTimeToCFAbsoluteTime](srabsolutetime/tocfabsolutetime%28%29.md): Converts an absolute time to a core-foundation absolute time.
- [SRAbsoluteTimeFromCFAbsoluteTime](srabsolutetimefromcfabsolutetime.md): Provides an absolute time equivalent to the argument core-foundation absolute time.
- [SRAbsoluteTimeFromContinuousTime](srabsolutetimefromcontinuoustime.md): Provides an absolute time equivalent to the argument continuous time.

## See Also

### Defining the Time Range

- [from](srfetchrequest/from.md): Fetches sample information that occurs after this time.
- [to](srfetchrequest/to.md): Fetches sample information that occurs before this time.
- [SRAbsoluteTimeGetCurrent](srabsolutetime/current%28%29.md): Provides the current absolute time.
- [SRAbsoluteTimeFromCFAbsoluteTime](srabsolutetimefromcfabsolutetime.md): Provides an absolute time equivalent to the argument core-foundation absolute time.
- [SRAbsoluteTimeFromContinuousTime](srabsolutetimefromcontinuoustime.md): Provides an absolute time equivalent to the argument continuous time.
- [SRAbsoluteTimeToCFAbsoluteTime](srabsolutetime/tocfabsolutetime%28%29.md): Converts an absolute time to a core-foundation absolute time.
