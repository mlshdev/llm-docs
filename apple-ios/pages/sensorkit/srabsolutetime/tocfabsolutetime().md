> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srabsolutetime/tocfabsolutetime()](https://developer.apple.com/documentation/sensorkit/srabsolutetime/tocfabsolutetime())

# toCFAbsoluteTime() (Swift)

**Framework:** SensorKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Converts an absolute time to a core-foundation absolute time.

## Declaration

```swift
func toCFAbsoluteTime() -> CFAbsoluteTime
```

<a id="return-value"></a>

## Return Value

The core-foundation absolute time.

## See Also

### Defining the Time Range

- [from](../srfetchrequest/from.md): Fetches sample information that occurs after this time.
- [to](../srfetchrequest/to.md): Fetches sample information that occurs before this time.
- [SRAbsoluteTime](../srabsolutetime.md): A value that describes when the system records the data.
- [current()](current%28%29.md): Provides the current absolute time.

# SRAbsoluteTimeToCFAbsoluteTime (Objective-C)

**Framework:** SensorKit  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Converts an absolute time to a core-foundation absolute time.

## Declaration

```objectivec
extern CFAbsoluteTime SRAbsoluteTimeToCFAbsoluteTime(SRAbsoluteTime sr);
```

<a id="return-value"></a>

## Return Value

The core-foundation absolute time.

## See Also

### Defining the Time Range

- [from](../srfetchrequest/from.md): Fetches sample information that occurs after this time.
- [to](../srfetchrequest/to.md): Fetches sample information that occurs before this time.
- [SRAbsoluteTime](../srabsolutetime.md): A value that describes when the system records the data.
- [SRAbsoluteTimeGetCurrent](current%28%29.md): Provides the current absolute time.
- [SRAbsoluteTimeFromCFAbsoluteTime](../srabsolutetimefromcfabsolutetime.md): Provides an absolute time equivalent to the argument core-foundation absolute time.
- [SRAbsoluteTimeFromContinuousTime](../srabsolutetimefromcontinuoustime.md): Provides an absolute time equivalent to the argument continuous time.
