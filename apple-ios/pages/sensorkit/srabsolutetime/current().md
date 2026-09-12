> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srabsolutetime/current()](https://developer.apple.com/documentation/sensorkit/srabsolutetime/current())

# current() (Swift)

**Framework:** SensorKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Provides the current absolute time.

## Declaration

```swift
static func current() -> SRAbsoluteTime
```

<a id="return-value"></a>

## Return Value

The absolute time of the current device.

<a id="Discussion"></a>

## Discussion

Each device has their own absolute time. This function returns the absolute time of the [current](../srdevice/current.md) device.

## See Also

### Defining the Time Range

- [from](../srfetchrequest/from.md): Fetches sample information that occurs after this time.
- [to](../srfetchrequest/to.md): Fetches sample information that occurs before this time.
- [SRAbsoluteTime](../srabsolutetime.md): A value that describes when the system records the data.
- [toCFAbsoluteTime()](tocfabsolutetime%28%29.md): Converts an absolute time to a core-foundation absolute time.

# SRAbsoluteTimeGetCurrent (Objective-C)

**Framework:** SensorKit  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Provides the current absolute time.

## Declaration

```objectivec
extern SRAbsoluteTime SRAbsoluteTimeGetCurrent();
```

<a id="return-value"></a>

## Return Value

The absolute time of the current device.

<a id="Discussion"></a>

## Discussion

Each device has their own absolute time. This function returns the absolute time of the [currentDevice](../srdevice/current.md) device.

## See Also

### Defining the Time Range

- [from](../srfetchrequest/from.md): Fetches sample information that occurs after this time.
- [to](../srfetchrequest/to.md): Fetches sample information that occurs before this time.
- [SRAbsoluteTime](../srabsolutetime.md): A value that describes when the system records the data.
- [SRAbsoluteTimeFromCFAbsoluteTime](../srabsolutetimefromcfabsolutetime.md): Provides an absolute time equivalent to the argument core-foundation absolute time.
- [SRAbsoluteTimeFromContinuousTime](../srabsolutetimefromcontinuoustime.md): Provides an absolute time equivalent to the argument continuous time.
- [SRAbsoluteTimeToCFAbsoluteTime](tocfabsolutetime%28%29.md): Converts an absolute time to a core-foundation absolute time.
